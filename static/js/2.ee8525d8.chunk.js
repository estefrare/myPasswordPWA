(this["webpackJsonpmy-password-pwa"]=this["webpackJsonpmy-password-pwa"]||[]).push([[2],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0),o=t(146);function i(e,n){return r.useMemo((function(){return null==e&&null==n?null:function(t){Object(o.a)(e,t),Object(o.a)(n,t)}}),[e,n])}},113:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(35);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},114:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(144);var o=t(145);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},120:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;function i(e){var n=r.useRef(e);return o((function(){n.current=e})),r.useCallback((function(){return n.current.apply(void 0,arguments)}),[])}},143:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}t.d(n,"a",(function(){return o}))},144:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,"a",(function(){return r}))},145:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(144);function o(e,n){if(e){if("string"===typeof e)return Object(r.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r.a)(e,n):void 0}}},146:function(e,n,t){"use strict";function r(e,n){"function"===typeof e?e(n):e&&(e.current=n)}t.d(n,"a",(function(){return r}))},147:function(e,n,t){"use strict";n.a={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500}},320:function(e,n,t){"use strict";function r(e){var n=e.theme,t=e.name,r=e.props;if(!n||!n.props||!n.props[t])return r;var o,i=n.props[t];for(o in i)void 0===r[o]&&(r[o]=i[o]);return r}t.d(n,"a",(function(){return r}))},323:function(e,n,t){"use strict";var r=t(79),o=t(3),i=t(0),a=t(22),c=(t(15),t(327)),u=t(320);function l(e){return e&&e.ownerDocument||document}var s=t(146),d=t(106);var f="undefined"!==typeof window?i.useLayoutEffect:i.useEffect;var p=i.forwardRef((function(e,n){var t=e.children,r=e.container,o=e.disablePortal,c=void 0!==o&&o,u=e.onRendered,l=i.useState(null),p=l[0],v=l[1],b=Object(d.a)(i.isValidElement(t)?t.ref:null,n);return f((function(){c||v(function(e){return e="function"===typeof e?e():e,a.findDOMNode(e)}(r)||document.body)}),[r,c]),f((function(){if(p&&!c)return Object(s.a)(n,p),function(){Object(s.a)(n,null)}}),[n,p,c]),f((function(){u&&(p||c)&&u()}),[u,p,c]),c?i.isValidElement(t)?i.cloneElement(t,{ref:b}):t:p?a.createPortal(t,p):p}));function v(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),(function(){}))}var b=t(120),m=t(147);var h=t(143),y=t(114);function g(e){var n,t=l(e);return t.body===e?(n=t,l(n).defaultView||window).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function E(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function w(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function O(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=[n,t].concat(Object(y.a)(r)),a=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===i.indexOf(e)&&-1===a.indexOf(e.tagName)&&E(e,o)}))}function k(e,n){var t=-1;return e.some((function(e,r){return!!n(e)&&(t=r,!0)})),t}function j(e,n){var t,r=[],o=[],i=e.container;if(!n.disableScrollLock){if(g(i)){var a=function(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),n}();r.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(w(i)+a,"px"),t=l(i).querySelectorAll(".mui-fixed"),[].forEach.call(t,(function(e){o.push(e.style.paddingRight),e.style.paddingRight="".concat(w(e)+a,"px")}))}var c=i.parentElement,u="HTML"===c.nodeName&&"scroll"===window.getComputedStyle(c)["overflow-y"]?c:i;r.push({value:u.style.overflow,key:"overflow",el:u}),u.style.overflow="hidden"}return function(){t&&[].forEach.call(t,(function(e,n){o[n]?e.style.paddingRight=o[n]:e.style.removeProperty("padding-right")})),r.forEach((function(e){var n=e.value,t=e.el,r=e.key;n?t.style.setProperty(r,n):t.style.removeProperty(r)}))}}var R=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.modals=[],this.containers=[]}return Object(h.a)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&E(e.modalRef,!1);var r=function(e){var n=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);O(n,e.mountNode,e.modalRef,r,!0);var o=k(this.containers,(function(e){return e.container===n}));return-1!==o?(this.containers[o].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblingNodes:r}),t)}},{key:"mount",value:function(e,n){var t=k(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[t];r.restore||(r.restore=j(r,n))}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);if(-1===n)return n;var t=k(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[t];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(n,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&E(e.modalRef,!0),O(r.container,e.mountNode,e.modalRef,r.hiddenSiblingNodes,!1),this.containers.splice(t,1);else{var o=r.modals[r.modals.length-1];o.modalRef&&E(o.modalRef,!1)}return n}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var x=function(e){var n=e.children,t=e.disableAutoFocus,r=void 0!==t&&t,o=e.disableEnforceFocus,c=void 0!==o&&o,u=e.disableRestoreFocus,s=void 0!==u&&u,f=e.getDoc,p=e.isEnabled,v=e.open,b=i.useRef(),m=i.useRef(null),h=i.useRef(null),y=i.useRef(),g=i.useRef(null),E=i.useCallback((function(e){g.current=a.findDOMNode(e)}),[]),w=Object(d.a)(n.ref,E);return i.useMemo((function(){v&&"undefined"!==typeof window&&(y.current=f().activeElement)}),[v]),i.useEffect((function(){if(v){var e=l(g.current);r||!g.current||g.current.contains(e.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex",-1),g.current.focus());var n=function(){e.hasFocus()&&!c&&p()&&!b.current?g.current&&!g.current.contains(e.activeElement)&&g.current.focus():b.current=!1},t=function(n){!c&&p()&&9===n.keyCode&&e.activeElement===g.current&&(b.current=!0,n.shiftKey?h.current.focus():m.current.focus())};e.addEventListener("focus",n,!0),e.addEventListener("keydown",t,!0);var o=setInterval((function(){n()}),50);return function(){clearInterval(o),e.removeEventListener("focus",n,!0),e.removeEventListener("keydown",t,!0),s||(y.current&&y.current.focus&&y.current.focus(),y.current=null)}}}),[r,c,s,p,v]),i.createElement(i.Fragment,null,i.createElement("div",{tabIndex:0,ref:m,"data-test":"sentinelStart"}),i.cloneElement(n,{ref:w}),i.createElement("div",{tabIndex:0,ref:h,"data-test":"sentinelEnd"}))},C={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},S=i.forwardRef((function(e,n){var t=e.invisible,a=void 0!==t&&t,c=e.open,u=Object(r.a)(e,["invisible","open"]);return c?i.createElement("div",Object(o.a)({"aria-hidden":!0,ref:n},u,{style:Object(o.a)({},C.root,{},a?C.invisible:{},{},u.style)})):null}));var A=new R,I=i.forwardRef((function(e,n){var t=Object(c.a)(),s=Object(u.a)({name:"MuiModal",props:Object(o.a)({},e),theme:t}),f=s.BackdropComponent,h=void 0===f?S:f,y=s.BackdropProps,g=s.children,w=s.closeAfterTransition,O=void 0!==w&&w,k=s.container,j=s.disableAutoFocus,R=void 0!==j&&j,C=s.disableBackdropClick,I=void 0!==C&&C,P=s.disableEnforceFocus,T=void 0!==P&&P,F=s.disableEscapeKeyDown,M=void 0!==F&&F,D=s.disablePortal,L=void 0!==D&&D,B=s.disableRestoreFocus,N=void 0!==B&&B,K=s.disableScrollLock,W=void 0!==K&&K,z=s.hideBackdrop,H=void 0!==z&&z,V=s.keepMounted,J=void 0!==V&&V,q=s.manager,U=void 0===q?A:q,Y=s.onBackdropClick,$=s.onClose,G=s.onEscapeKeyDown,Q=s.onRendered,X=s.open,Z=Object(r.a)(s,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),_=i.useState(!0),ee=_[0],ne=_[1],te=i.useRef({}),re=i.useRef(null),oe=i.useRef(null),ie=Object(d.a)(oe,n),ae=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(s),ce=function(){return l(re.current)},ue=function(){return te.current.modalRef=oe.current,te.current.mountNode=re.current,te.current},le=function(){U.mount(ue(),{disableScrollLock:W}),oe.current.scrollTop=0},se=Object(b.a)((function(){var e=function(e){return e="function"===typeof e?e():e,a.findDOMNode(e)}(k)||ce().body;U.add(ue(),e),oe.current&&le()})),de=i.useCallback((function(){return U.isTopModal(ue())}),[U]),fe=Object(b.a)((function(e){re.current=e,e&&(Q&&Q(),X&&de()?le():E(oe.current,!0))})),pe=i.useCallback((function(){U.remove(ue())}),[U]);if(i.useEffect((function(){return function(){pe()}}),[pe]),i.useEffect((function(){X?se():ae&&O||pe()}),[X,pe,ae,O,se]),!J&&!X&&(!ae||ee))return null;var ve=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(t||{zIndex:m.a}),be={};return void 0===g.props.tabIndex&&(be.tabIndex=g.props.tabIndex||"-1"),ae&&(be.onEnter=v((function(){ne(!1)}),g.props.onEnter),be.onExited=v((function(){ne(!0),O&&pe()}),g.props.onExited)),i.createElement(p,{ref:fe,container:k,disablePortal:L},i.createElement("div",Object(o.a)({ref:ie,onKeyDown:function(e){"Escape"===e.key&&de()&&(e.stopPropagation(),G&&G(e),!M&&$&&$(e,"escapeKeyDown"))},role:"presentation"},Z,{style:Object(o.a)({},ve.root,{},!X&&ee?ve.hidden:{},{},Z.style)}),H?null:i.createElement(h,Object(o.a)({open:X,onClick:function(e){e.target===e.currentTarget&&(Y&&Y(e),!I&&$&&$(e,"backdropClick"))}},y)),i.createElement(x,{disableEnforceFocus:T,disableAutoFocus:R,disableRestoreFocus:N,getDoc:ce,isEnabled:de,open:X},i.cloneElement(g,be))))}));n.a=I},327:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(0),o=t.n(r);var i=o.a.createContext(null);function a(){return o.a.useContext(i)}},79:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(5);function o(e,n){if(null==e)return{};var t,o,i=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}}}]);
//# sourceMappingURL=2.ee8525d8.chunk.js.map