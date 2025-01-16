Drupal.behaviors.sEdgeFilter = function(context){

    $("#edge-filters:not(.sEdgeFilterProcessed)").addClass("sEdgeFilterProcessed").each(function(){

        $("#edge-filters-btn").bind('click',function(){
            var menu = $("#edge-filters-menu");
            menu.toggle();
            var f = menu.css('display')=='block' ? $(this).addClass('active') : $(this).removeClass('active');
        })

        $(document).bind('click',function(e){
            if($(e.target).attr('id')=='edge-filters-btn') return;
            $("#edge-filters-menu").hide();
            $("#edge-filters-btn").removeClass('active');
        });

        $(".edge-filter-option").each(function(){
            $(this).bind('click',function(){
                // $('.s-edge-feed-more-link a').attr('href').replace(/page=[0-9]+/gi,"page=0") +
                var url = Drupal.settings.s_edge_filter.url + "&filter=" + $(this).attr('id').replace(/^filter-option-/gi,"");
                $(document).data("sEdgeLoadingType",$(this).html());

                $(".edge-filter-option").each(function(){
                    $(this).removeClass('active');
                });

                $(this).addClass('active');

                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "json",
                    beforeSend: function(){
                        $("#edge-filters-menu").hide();
                        $('ul.s-edge-feed').empty().append('<li><img src="/sites/all/themes/schoology_theme/images/ajax-loader.gif" alt="' + Drupal.t('Loading') + '" class="more-loading" /></li>');
                    },
                    success: function(json){

                        $("#edge-filters-btn").html($(document).data("sEdgeLoadingType"));

                        // add externals
                        sEdgeMoreAddCSS(json.css);
                        sEdgeMoreAddJS(json.js, function(){
                          // add feed items
                          var newEntries = $(json.output);
                          Drupal.attachBehaviors(newEntries);
                          $('ul.s-edge-feed').html( $('ul.s-edge-feed', newEntries).contents()  );
                        });
                    }
                });
            });
        });
    });

    //setup notifications filter for both notif page filter and notif popup filter
    $('.notif-filter:not(.sEdgeFilterProcessed)').addClass("sEdgeFilterProcessed").each(function(){
        var notifFilter = $(this);
        var notifPopup = notifFilter.hasClass('notif-popup'); //was called from popup
        var context = notifPopup ? $('div.notification-wrapper') : $('div.notif-page-wrapper'); //ensure proper context (ie. page or popup when user is in page and then opens the popup)

        //setup fake dropdown
        notifFilter.selectmenu({
            style: 'dropdown',
            align: ((notifPopup) ? 'right' : 'left')
        });

        var qParams = getQueryParams();
        var filterArray = ['all', 'direct-replies', 'discussion-responses', 'content-created', 'grade-posted', 'dropbox-submission-comment', 'assessment-submission-comment', 'enrollment-change'];
        var activeFilter = (typeof qParams['filter'] == 'undefined') ? 'all' : qParams['filter'];
        var aFilterIndex = $.inArray(activeFilter, filterArray);
        if(!notifPopup && aFilterIndex > -1){
            //if user refresh the page, reset to the current active filter
            notifFilter.selectmenu('value', aFilterIndex);
        }

        //handle the case in which user changes the filter value
        notifFilter.change(function(){
            var filter = $(this).val();
            var notifList = $('.s-notifications-mini', context);
            notifList.empty();
            notifList.append('<img src="/sites/all/themes/schoology_theme/images/ajax-loader.gif" alt="' + Drupal.t('Loading') + '" class="filter-loading" />');
            var baseURL = notifPopup? '/notifications/ajax' : '/home/notifications';

            //load the filtered objects
            $.ajax({
                url: baseURL + '?filter=' + filter,
                dataType: 'json',
                type: 'GET',
                success: function(response, status){
                    sEdgeMoreAddCSS(response.css);
                    sEdgeMoreAddJS(response.js, function(){
                      notifList.empty();
                      notifList.append($('.s-notifications-mini',response.output).html());
                      Drupal.attachBehaviors(notifList);
                    });
                }
            });
        });
    });

}