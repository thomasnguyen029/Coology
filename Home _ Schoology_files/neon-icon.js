/*! For license information please see neon-icon.js.LICENSE.txt */
(()=>{var e={44542:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(8081),r=n.n(o),i=n(23645),a=n.n(i)()(r());a.push([e.id,'neon-2_6_1-icon{fill:#4d5557;display:inline-block;flex-shrink:0;height:24px;width:24px}neon-2_6_1-icon svg{display:inline-block;height:100%;width:100%}[dir=rtl] neon-2_6_1-icon svg.neon-icon-rtl-flip{transform:scaleX(-1)}neon-2_6_1-icon[data-icon=status-active],neon-2_6_1-icon[data-icon=status-in-progress],neon-2_6_1-icon[data-icon=status-information],neon-2_6_1-icon[data-icon=status-not-started],neon-2_6_1-icon[data-icon=status-tentative]{fill:#1162ee}neon-2_6_1-icon[data-icon=status-cancelled],neon-2_6_1-icon[data-icon=status-error]{fill:#e21707}neon-2_6_1-icon[data-icon=status-check]{fill:#218900}neon-2_6_1-icon[data-icon=status-warning]{fill:#b38c00}neon-2_6_1-icon[data-icon=status-inactive]{fill:#a8b1b2}[dir=rtl] neon-2_6_1-icon[data-icon-rtl-flip=true]{transform:scaleX(-1)}neon-2_6_1-icon[data-size=xx-small]{height:12px;width:12px}neon-2_6_1-icon[data-size=x-small]{height:16px;width:16px}neon-2_6_1-icon[data-size=small]{height:20px;width:20px}neon-2_6_1-icon[data-size=medium]{height:24px;width:24px}neon-2_6_1-icon[data-size=large]{height:28px;width:28px}neon-2_6_1-icon[data-size=x-large]{height:32px;width:32px}neon-2_6_1-icon[data-size=xx-large]{height:40px;width:40px}neon-2_6_1-icon[data-size=xxx-large]{height:48px;width:48px}neon-2_6_1-icon[data-size=xxxx-large]{height:56px;width:56px}neon-2_6_1-icon[data-size="5x-large"]{height:72px;width:72px}neon-2_6_1-icon[data-size="6x-large"]{height:96px;width:96px}neon-2_6_1-icon[data-size="7x-large"]{height:120px;width:120px}@media (max-width:768px){neon-2_6_1-icon[data-size-mobile=xx-small]{height:12px;width:12px}neon-2_6_1-icon[data-size-mobile=x-small]{height:16px;width:16px}neon-2_6_1-icon[data-size-mobile=small]{height:20px;width:20px}neon-2_6_1-icon[data-size-mobile=medium]{height:24px;width:24px}neon-2_6_1-icon[data-size-mobile=large]{height:28px;width:28px}neon-2_6_1-icon[data-size-mobile=x-large]{height:32px;width:32px}neon-2_6_1-icon[data-size-mobile=xx-large]{height:40px;width:40px}neon-2_6_1-icon[data-size-mobile=xxx-large]{height:48px;width:48px}neon-2_6_1-icon[data-size-mobile=xxxx-large]{height:56px;width:56px}neon-2_6_1-icon[data-size-mobile="5x-large"]{height:72px;width:72px}neon-2_6_1-icon[data-size-mobile="6x-large"]{height:96px;width:96px}neon-2_6_1-icon[data-size-mobile="7x-large"]{height:120px;width:120px}}neon-2_6_1-icon[disabled]{opacity:.5}',""]);const s=a},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},8081:e=>{"use strict";e.exports=function(e){return e[1]}},81700:e=>{e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("Expected a string");for(var n,o=String(e),r="",i=!!t&&!!t.extended,a=!!t&&!!t.globstar,s=!1,l=t&&"string"==typeof t.flags?t.flags:"",c=0,d=o.length;c<d;c++)switch(n=o[c]){case"/":case"$":case"^":case"+":case".":case"(":case")":case"=":case"!":case"|":r+="\\"+n;break;case"?":if(i){r+=".";break}case"[":case"]":if(i){r+=n;break}case"{":if(i){s=!0,r+="(";break}case"}":if(i){s=!1,r+=")";break}case",":if(s){r+="|";break}r+="\\"+n;break;case"*":for(var u=o[c-1],h=1;"*"===o[c+1];)h++,c++;var p=o[c+1];a?!(h>1)||"/"!==u&&void 0!==u||"/"!==p&&void 0!==p?r+="([^/]*)":(r+="((?:[^/]*(?:/|$))*)",c++):r+=".*";break;default:r+=n}return l&&~l.indexOf("g")||(r="^"+r+"$"),new RegExp(r,l)}},72408:(e,t)=>{"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var n={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o=Object.assign,r={};function i(e,t,o){this.props=e,this.context=t,this.refs=r,this.updater=o||n}function a(){}function s(e,t,o){this.props=e,this.context=t,this.refs=r,this.updater=o||n}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},a.prototype=i.prototype;var l=s.prototype=new a;l.constructor=s,o(l,i.prototype),l.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty;t.Component=i},67294:(e,t,n)=>{"use strict";e.exports=n(72408)},93379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var h=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var m=r(p,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var l=o(e,r),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},90569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},19216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},44589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{n.S={};var e={},t={};n.I=(o,r)=>{r||(r=[]);var i=t[o];if(i||(i=t[o]={}),!(r.indexOf(i)>=0)){if(r.push(i),e[o])return e[o];n.o(n.S,o)||(n.S[o]={}),n.S[o];var a=[];return e[o]=a.length?Promise.all(a).then((()=>e[o]=1)):1}}})(),n.nc=void 0,(()=>{"use strict";var e=n(93379),t=n.n(e),o=n(7795),r=n.n(o),i=n(90569),a=n.n(i),s=n(3565),l=n.n(s),c=n(19216),d=n.n(c),u=n(44589),h=n.n(u),p=n(44542),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var f=n(67294);class g extends f.Component{constructor(e){super(e),this.state={},this.containerRef=e=>{if(log("DynamicComponent.containerRef Update"),null==e)return;log("DynamicComponent.containerRef Update. Calling psMfeInit",e,this.props.locale,this.props.componentProps);const t=(this.state.initModule,void 0);null!=t&&t.then((e=>{this.setState({unloadMfe:e.unloadMfe})}))},this.createDynamicComponent()}createDynamicComponent(){null!=this.props.remote&&null!=this.props.module&&null!=this.props.url&&(log("DynamicComponent.createDynamicComponent() called",this.props),loadComponent(this.props.remote,"default",this.props.module,this.props.url,this.props.throwErrors)().then((e=>{"object"==typeof(null==e?void 0:e.default)?"function"==typeof e.default.psMfeInit&&(this.setState({initModule:e.default}),log("DynamicComponent saving init function",e.default)):"function"==typeof(null==e?void 0:e.default)&&this.setState({reactFunctionComponent:e.default})})).catch((e=>{switch(e.message){case"MODULE_ERROR":if(!0===this.props.throwErrors)throw new Error("MODULE_ERROR");break;case"URL_ERROR":if(!0===this.props.throwErrors)throw new Error("URL_ERROR");break;case"REMOTE_ERROR":if(!0===this.props.throwErrors)throw new Error("REMOTE_ERROR");break;default:console.error(e)}})))}componentDidUpdate(e){this.props.url!==e.url&&this.props.remote===e.remote&&console.warn("🚨🚨🚨🚨🚨🚨 DYNAMIC COMPONENT UPDATE 🚨🚨🚨🚨🚨🚨\n******* THE DYNAMIC COMPONENT URL, REMOTE, AND MODULE PROPS SHOULD BE UPDATED TO VALID VALUES AT THE SAME TIME ******\n******* IF THERE IS A LOADING FAILURE, TRY LOADING DYNAMICOMPONENT WITH THE VALUES BELOW ON INITIAL PAGE LOAD AND FOR MORE SPECIFIC ERROR LOGGING ******\nURL: "+this.props.url+"\nREMOTE: "+this.props.remote+"\nMODULE: "+this.props.module+"\n🚨🚨🚨🚨🚨🚨 DYNAMIC COMPONENT UPDATE 🚨🚨🚨🚨🚨🚨"),this.props.remote===e.remote&&this.props.module===e.module&&this.props.url===e.url&&JSON.stringify(this.props.componentProps)===JSON.stringify(e.componentProps)||(this.setState({reactFunctionComponent:void 0,initModule:void 0}),this.unloadCurrentMfe(),setTimeout((()=>{this.createDynamicComponent()})))}unloadCurrentMfe(){null!=this.state.unloadMfe&&this.state.unloadMfe()}componentWillUnmount(){this.unloadCurrentMfe()}render(){if(null!=this.state.reactFunctionComponent){const e=React.createElement(this.state.reactFunctionComponent,this.props.componentProps);return React.createElement("dynamic-component",{"data-remote-url":this.props.url,"data-remote":this.props.remote,"data-module":this.props.module,class:this.props.className},e)}return null!=this.state.initModule?React.createElement("dynamic-component",{"data-remote-url":this.props.url,"data-remote":this.props.remote,"data-module":this.props.module,class:this.props.className},React.createElement("div",{ref:this.containerRef})):React.createElement(React.Fragment,null)}}class v extends Error{constructor(e,t){super(e),this.sourceError=t}}function x(e,t){null!=e&&null!=t&&null!=t.parentNode&&t.parentNode.insertBefore(e,t.nextSibling)}v.messages={MODULE_FEDERATION_ERROR:"Unable to load MFE via Module Federation. Check that the remote, module, and url parameters are all correct.",DEFAULT_MISSING:'The module was missing the default property. Maybe you forgot to do an "export default" in the MFE?',INIT_FUNCTION_MISSING:'The psMfeInit function was missing. Check the MFE\'s export to make sure it does "export default psMfe(...)".',INIT_ERROR:"The MFE's initialization function threw an error. See the sourceError property in this exception for more details."},n(81700);class E{constructor(e,t){this.shouldRender=e,this.getElement=t}renderElementOrPlaceholder(){return this.shouldRender()?this.renderElement():this.renderPlaceholder()}getRenderedNode(){if(this.shouldRender())return this.renderedElementOrPlaceholder}renderElement(){return this.renderedElementOrPlaceholder=this.getElement(),this.renderedElementOrPlaceholder}renderPlaceholder(){return this.renderedElementOrPlaceholder=document.createComment("neon-conditional-element-marker"),this.renderedElementOrPlaceholder}swapElementsIfNecessary(){var e,t,n;if(this.shouldRender()){if((null===(e=this.renderedElementOrPlaceholder)||void 0===e?void 0:e.nodeType)===Node.COMMENT_NODE){const e=this.renderedElementOrPlaceholder;x(this.renderElement(),e),null===(t=e.parentNode)||void 0===t||t.removeChild(e)}}else if(this.renderedElementOrPlaceholder instanceof HTMLElement){const e=this.renderedElementOrPlaceholder;x(this.renderPlaceholder(),e),null===(n=e.parentNode)||void 0===n||n.removeChild(e)}}}class b extends HTMLElement{constructor(){super(...arguments),this.conditionalChildElements=[],this.isInitialized=!1,this.attributesChangedBeforeInit=new Set}validateInputs(){var e;this.isIdRequired&&(null!=(e=this.getAttribute("id"))&&/^[A-Za-z]+[\w\-:.]*$/.test(e)||console.error("The id "+this.getAttribute("id")+" on "+this.widgetTag+" is not present or invalid"))}redraw(){!function(e){if(null!=e)for(;e.firstChild;)e.removeChild(e.firstChild)}(this);let e=this.render();if(null!=e){(e instanceof Node||e instanceof E)&&(e=[e]);for(const t of e)if(null!=t)if(t instanceof Node)t.isProcessedByNeon=!0,this.appendChild(t);else{const e=t.renderElementOrPlaceholder();e.isProcessedByNeon=!0,this.appendChild(e),this.conditionalChildElements.push(t)}}}attributeChanged(e,t,n){}attributeChangedCallback(e,t,n){t!==n&&(this.isInitialized?this.attributeChanged(e,t,n):this.attributesChangedBeforeInit.add(e))}connectedCallback(){this.isInitialized=!0,this.setAttribute(this.widgetTag,""),this.classList.add("neon-2_6_1-component"),setTimeout((()=>{this.validateInputs()}),1e3),this.redraw();for(const e of this.attributesChangedBeforeInit)this.attributeChanged(e,"",this.getAttribute(e));this.attributesChangedBeforeInit.clear()}}const _=/^red|orange|yellow|green|teal|navy|cyan|purple|magenta|gray|white$/,y=/^[1-8]00$/;var w,C,R;w="neon-2_6_1-icon",C=class extends b{static get observedAttributes(){return["data-icon","data-color","data-color-weight"]}constructor(){super(),this.widgetTag="neon-icon"}attributeChanged(e){switch(e){case"data-icon":this.updateIcon(),this.updateRtlClass();break;case"data-color":case"data-color-weight":this.updateFillAttribute()}}getIconName(){let e=this.getAttribute("data-icon");if(null!=e)return e=e.replace(/\|rtl-flip$/,""),!0===this.isIconNameValid(e)?e:void 0}isIconNameValid(e){return!/[^A-Za-z0-9-_]/.test(e)}render(){return this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("aria-hidden","true"),this.svg.setAttribute("focusable","false"),this.use=document.createElementNS("http://www.w3.org/2000/svg","use"),this.svg.appendChild(this.use),this.updateIcon(),this.updateFillAttribute(),this.updateRtlClass(),this.svg}updateFillAttribute(){var e,t;const n=this.getAttribute("data-color");if(_.test(n)){let t=this.getAttribute("data-color-weight");y.test(t)||(t="500"),null===(e=this.svg)||void 0===e||e.setAttribute("style",`fill: var(--neon-2_6_1-color-${n}-${t})`)}else null===(t=this.svg)||void 0===t||t.removeAttribute("style")}updateIcon(){var e;let t=String(this.getIconName());(t.startsWith("app-nav")||t.startsWith("app-header"))&&(t+="-theme");const n="#neon-icon-"+t;null===(e=this.use)||void 0===e||e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n)}updateRtlClass(){var e,t,n;(null===(e=this.getAttribute("data-icon"))||void 0===e?void 0:e.endsWith("|rtl-flip"))?null===(t=this.svg)||void 0===t||t.classList.add("neon-icon-rtl-flip"):null===(n=this.svg)||void 0===n||n.classList.remove("neon-icon-rtl-flip")}},null==customElements.get(w)?(R=e=>{e.hasAttribute("neon-focus-state")||(document.addEventListener("keydown",(t=>{var n;" "===t.key&&t.target instanceof HTMLInputElement||("Tab"===(null==t?void 0:t.key)||" "===(null==t?void 0:t.key)||"Enter"===(null==t?void 0:t.key)||(null===(n=null==t?void 0:t.key)||void 0===n?void 0:n.startsWith("Arrow"))||"Escape"===(null==t?void 0:t.key))&&e.classList.remove("neon-mouse-navigation")}),!0),document.addEventListener("mousedown",(()=>{e.classList.add("neon-mouse-navigation")}),!0),e.setAttribute("neon-focus-state",""))},new Promise((e=>{null!=document.body?(R(document.body),e()):addEventListener("DOMContentLoaded",(t=>{R(document.body),e()}))})),customElements.define(w,C)):console.log(`${w} was already registered as a custom web component`)})()})();