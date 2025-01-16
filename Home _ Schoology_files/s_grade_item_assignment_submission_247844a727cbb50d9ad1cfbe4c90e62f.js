Drupal.behaviors.sGradeItemAssignmentSubmission = function(context) {
  const ANNOTATION_ASSIGNMENT_NID = -1;

  setupAssignmentPopup();
  launchLtiApplicationPopup();

  /**
   * Set up the popup where the assignment form is displayed
   */
  function setupAssignmentPopup() {
    var assignmentSubmissionContainer = $('.s-grade-item-assignment-submission-container', context);

    //this method is required for handling embed error messages from lti app content selectors
    window.sPopupPushStatusMessages = sPopupPushStatusMessagesHandler;

    if (!assignmentSubmissionContainer.length) {
      return;
    }

    assignmentSubmissionContainer
      .closest('.popups-box')
      .addClass('s-has-assignment-submission-content');

    if (hasContentAttached()) {
      // when the assignment has already the content attached
      // we don't give an ability to modify it via setting up readonly mode
      setContentReadonlyMode();
    } else {
      initializeHandlers();
    }

    prePopulateContent();
  }

  /**
   * Launch the application if the application-run popup has been successfully openend.
   */
  function launchLtiApplicationPopup() {
    var appContainer = $('#s-grade-item-assignment-submission-lti-app-container', context);
    if (!appContainer.length) {
      return;
    }

    var app = {
      'type': appContainer.data('app-type'),
      'url': appContainer.data('app-url')
    };

    sAppLauncher(appContainer, app);
  }

  /**
   * Add click handlers to the assignment submission application buttons
   */
  function initializeHandlers() {
    var appButtons = $('.s-grade-item-lti-app', context);
    var contentRemoveButton = $('.s-grade-item-assignment-submission-content-remove', context);

    appButtons.click(openApplicationPopupHandler);
    contentRemoveButton.click(removeContentHandler);

    // Expose the content insertion handler to the global scope
    window.sGradeItemAssignmentSubmissionInsertSelectionHandler = insertSelectionHandler;
    window.sPopupPushStatusMessages = sPopupPushStatusMessagesHandler;
  }

  /**
   * Click Event Handler
   * Open a popup when the assignment submission application item is clicked
   *
   * @returns {void}
   */
  function openApplicationPopupHandler() {
    var appNid = $(this).data('app-nid');
    var isActive = $(this).hasClass('active');

    if (isActive || !appNid) {
      return;
    }

    var openPopupCallback = createApplicationPopupOpenCallback(this, appNid);
    var cookiePreloadCallback = createApplicationCookiePreloadCallback(appNid);

    cookiePreloadCallback(openPopupCallback);
  }

  /**
   * Return the function that preloads the application cookies.
   * After the cookies have been preloaded the specified callback will be executed.
   *
   * @param {number} appNid
   * @returns {Function}
   */
  function createApplicationCookiePreloadCallback(appNid) {
    var cookiePreloadUrl = sCommonGetSetting('s_app', 'cookie_preload_urls', appNid);

    return function (callback) {
      if (cookiePreloadUrl) {
        // Launch the cookie preload popup first, then execute the callback
        sAppMenuCookiePreloadRun(appNid, cookiePreloadUrl, function() {

          // Clear cached launch data since we store cookie preload attempts in session
          sAppLauncherClearCache(appNid);
          sAppMenuCookiePreloadDelete(appNid);

          callback();
        });
      } else {
        // execute the callback immediately as there is no cookie preload URL
        callback();
      }
    };

  }

  /**
   * Create a callback which opens application popup
   *
   * @param {HTMLElement} element
   * @param {number} appNid
   * @returns {Function}
   */
  function createApplicationPopupOpenCallback(element, appNid) {
    Popups.saveSettings();

    // The parent of the new popup is the currently active popup.
    var parentPopup = Popups.activePopup();

    var popupOptions = Popups.options({
      ajaxForm: false,
      extraClass: 'popups-extra-large s-grade-item-assignment-submission-popup',
      updateMethod: 'none',
      href: buildApplicationPopupUrl(appNid),
      hijackDestination: false,
      disableCursorMod: true,
      disableAttachBehaviors: false
    });

    return function() {
      Popups.openPath(element, popupOptions, parentPopup);
    };
  }

  /**
   * Build URL address for the application popup
   *
   * @param {number} appNid
   * @returns {string}
   */
  function buildApplicationPopupUrl(appNid) {
    var realm = getCurrentRealm();

    var queryString = $.param({
      realm: realm.name,
      realm_id: realm.id,
      app_nid: appNid
    });

    return '/assignment_submission_app?' + queryString;
  }

  /**
   * Get realm name ('course') and its id
   *
   * @returns {{id: string, name: string}}
   */
  function getCurrentRealm() {
    return {
      id: $('#edit-assign-course-nid', context).val(),
      name: 'course'
    };
  }

  /**
   * The handler called by server when the selection result is returned by LTI app
   * This handler is eventually accessible from the global scope via
   *    window.sGradeItemAssignmentSubmissionInsertSelectionHandler()
   *
   * @see s_app_content_insert_page_helper() PHP server function
   *
   * @param {object} selection
   * @returns {void}
   */
  function insertSelectionHandler(selection) {
    var content = selection && selection.content && selection.content[0];
    var messages = selection && selection.messages;

    if (messages) {
      $.each(messages, function(i, message) {
        console.log(message);
      });
    }

    console.log('Assignment submission content selected: %o', content);

    if (isValidContent(content)) {
      addContentHandler(content);
    }

    // The popup should be closed always even in the case when insertContentItemHandler is not called
    Popups.close(Popups.activePopup());
  }

  /**
   * The handler called by server when selection messages are returned by LTI app
   * (Expects the messages already converted to html, for consistency with the drupal theme)
   * This handler is eventually accessible from the global scope via
   *    window.sCommonPushStatusMessages()
   *
   * @see s_app_content_insert_page_helper() PHP server function
   *
   * @param {string} messages
   * @returns {void}
  */
  function sPopupPushStatusMessagesHandler(messages) {
    if (messages) {
        const popupWindowIdentifier = '.popups-body';
        $('<div class="s-js-pushed-messages-wrapper closable">' + messages + '</div>').prependTo(popupWindowIdentifier);
        processMessages(popupWindowIdentifier); // adds close button
    }
  }

  /**
   * Whether the content has all the required field
   *
   * @param {object} content
   * @returns {boolean}
   */
  function isValidContent(content) {
    if (content.app_nid == ANNOTATION_ASSIGNMENT_NID) {
      return content && content.title;
    };
    return (
      content
      && content.launch_url
      && content.title
      && content.app_nid
    );
  }

  /**
   * If the form fields are populated with values
   * then we should populate and display the content UI elements
   *
   * @returns {void}
   */
  function prePopulateContent() {
    var content = {
      launch_url: $('#edit-assignment-submission-launch-url', context).val(),
      title: $('#edit-assignment-submission-title', context).val(),
      custom: $('#edit-assignment-submission-custom-parameters', context).val(),
      icon: {
        url: $('#edit-assignment-submission-icon-url', context).val(),
        width: $('#edit-assignment-submission-icon-width', context).val(),
        height: $('#edit-assignment-submission-icon-height', context).val(),
      },
      app_nid: $('input[name=assignment_submission_app_nid]:checked', context).val()
    };

    if (isValidContent(content)) {
      showContentUI(content);
    }
  }

  /**
   * Check whether the assignment has the LTI content already attached
   *
   * @returns {boolean}
   */
  function hasContentAttached() {
    return $('#edit-assignment-submission-id', context).val() !== '';
  }

  /**
   * Make sure that the user is not able to modify or remove the assignment submission content
   *
   * @returns {void}
   */
  function setContentReadonlyMode() {
    $('.s-grade-item-assignment-submission-content-remove', context).remove();
    $('.s-grade-item-assignment-submission-content', context).addClass('s-content-readonly');
  }

  /**
   * Show or hide the information message below the assignment submission options
   */
  function toggleInformationMessage(isVisible) {
    $('.s-grade-item-assignment-submission-information', context).toggle(isVisible);
  }

  /**
   * Insert content item information to DOM
   *
   * @param {object} content
   * @returns {void}
   */
  function addContentHandler(content) {
    setFormFields(content);
    showContentUI(content);
  }

  /**
   * Remove content item information from DOM
   *
   * @returns {void}
   */
  function removeContentHandler(e) {
    resetFormFields();
    hideContentUI();
    e.preventDefault();
  }

  /**
   * Set values for the form fields related to the content item selection
   *
   * @param {object} content
   * @returns {void}
   */
  function setFormFields(content) {
    $('#edit-assignment-submission-launch-url', context).val(content.launch_url);
    $('#edit-assignment-submission-title', context).val(content.title);
    $('#edit-assignment-submission-custom-parameters', context).val(content.custom);
    $('#edit-assignment-submission-icon-url', context).val(content.icon.url);
    $('#edit-assignment-submission-icon-width', context).val(content.icon.width);
    $('#edit-assignment-submission-icon-height', context).val(content.icon.height);
    $('input[name=assignment_submission_app_nid][value=' + content.app_nid + ']', context).prop('checked', true);
  }

  /**
   * Reset (empty) the form fields related to the content item selection
   *
   * @returns {void}
   */
  function resetFormFields() {
    $('#edit-assignment-submission-launch-url', context).val('');
    $('#edit-assignment-submission-title', context).val('');
    $('#edit-assignment-submission-custom-parameters', context).val('');
    $('#edit-assignment-submission-icon-url', context).val('');
    $('#edit-assignment-submission-icon-width', context).val('');
    $('#edit-assignment-submission-icon-height', context).val('');
    $('input[name=assignment_submission_app_nid]', context).prop('checked', false);
  }

  /**
   * Display content item UI where the selected file is shown
   *
   * @param {object} content
   * @returns {void}
   */
  function showContentUI(content) {
    $('.s-grade-item-assignment-submission-app', context).each(function() {
      var appButton = $(this);

      if (appButton.data('app-nid') == content.app_nid) {
        appButton.addClass('active');
      } else {
        appButton.hide();
      }
    });

    if (content.icon && content.icon.url) {
      $('.s-grade-item-assignment-submission-content-icon', context).css("background-image", "url(" + content.icon.url + ")");
      if (content.icon.width && content.icon.height) {
        adjustTitleAndIconSizes(content);
      }
    }

    $('.s-grade-item-assignment-submission-content-title', context).text(content.title);
    $('.s-grade-item-assignment-submission-content', context).show();

    const isAnnotationAssignment = content.app_nid == ANNOTATION_ASSIGNMENT_NID;
    if (!isAnnotationAssignment) {
      hideSubmissionEnabledOption();
      hideCommentsEnabledOption();
    }

    toggleInformationMessage(false);
  }

  /**
   * Hide content item UI where the selected file is shown
   *
   * @returns {void}
   */
  function hideContentUI() {
    $('.s-grade-item-assignment-submission-content', context).hide();
    $('.s-grade-item-assignment-submission-app', context).show().removeClass('active');
    showSubmissionEnabledOption();
    showCommentsEnabledOption();
    toggleInformationMessage(true);
  }

  /**
   * Adjust the title's max width based on the new icon size
   *
   * @param {object} content
   */
  function adjustTitleAndIconSizes(content) {
    var contentIcon = $('.s-grade-item-assignment-submission-content-icon', context);
    var contentTitle = $('.s-grade-item-assignment-submission-content-title', context);
    var contentTitleMaxWidth = parseInt(contentTitle.css('max-width'), 10);
    var expectedIconWidth = parseInt(contentIcon.css('width'), 10);
    var actualIconWidth = +content.icon.width;

    contentTitle.css('max-width', contentTitleMaxWidth + expectedIconWidth - actualIconWidth + 'px');
    contentIcon.css('width', content.icon.width + 'px');
    contentIcon.css('height', content.icon.height + 'px');
  }

  /**
   * Show "Submission Enabled" advanced option button if it was hidden before
   *
   * @returns {void}
   */
  function showSubmissionEnabledOption() {
    $('.adv-option-btn.toggle-dropbox').show();
  }

  /**
   * Hide "Submission Enabled" advanced option button.
   * If it was disabled then we should enable the option before hiding the button
   *
   * @returns {void}
   */
  function hideSubmissionEnabledOption() {
    var button = $('.adv-option-btn.toggle-dropbox');

    if (!button.hasClass('adv-option-on')) {
      button.click();
    }

    button.hide();
  }

    /**
     * Show "Comments Enabled" advanced option button if it was hidden before
     * If it was disabled then we should enable the option before showing the button
     *
     * @returns {void}
     */
    function showCommentsEnabledOption() {
        var button = $('.adv-option-btn.toggle-comments');

        if (!button.hasClass('adv-option-on')) {
            button.click();
        }

        button.show();
    }

    /**
     * Hide "Comments Enabled" advanced option button.
     * If it was enabled then we should disable the option before hiding the button
     *
     * @returns {void}
     */
    function hideCommentsEnabledOption() {
        var button = $('.adv-option-btn.toggle-comments');

        if (button.hasClass('adv-option-on')) {
            button.click();
        }

        button.hide();
    }
};
