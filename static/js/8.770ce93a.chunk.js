(this["webpackJsonpmy-password-pwa"]=this["webpackJsonpmy-password-pwa"]||[]).push([[8],{112:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(113),c=a.n(o);t.a=function(e){var t=e.meta,a=e.input,n=e.label,o=e.placeholder;return r.a.createElement("div",{className:c.a.container},r.a.createElement("label",{className:c.a.label},n&&r.a.createElement("span",{className:c.a.labelText},n),r.a.createElement("input",Object.assign({className:c.a.input,type:"text",placeholder:o},a))),r.a.createElement("div",{className:c.a.error},t.error&&t.touched&&r.a.createElement("span",{className:c.a.errorText},t.error)))}},113:function(e,t,a){e.exports={container:"text-input_container__-16Gn",label:"text-input_label__1DFnE",labelText:"text-input_labelText__3rZnL",input:"text-input_input__iYmA8",error:"text-input_error__1GFd1",errorText:"text-input_errorText__1J0Vw"}},114:function(e,t,a){e.exports={modalContainer:"modal_modalContainer__1B0MT",modal:"modal_modal__1jijj",modalHeader:"modal_modalHeader__3lf-q",body:"modal_body__2LAWM",detail:"modal_detail__1dAuZ",buttons:"modal_buttons__1Nv22",button:"modal_button__V_ZdM",cancel:"modal_cancel__3W0Eq"}},192:function(e,t,a){e.exports={container:"sign-up_container__29EkW",logoContainer:"sign-up_logoContainer__2V9GG",logoTitle:"sign-up_logoTitle__3Y58h",logoSubtitle:"sign-up_logoSubtitle__12aIW",form:"sign-up_form__Vahsl",loginButton:"sign-up_loginButton__3nm2b",error:"sign-up_error__1sUmg",message:"sign-up_message__1rIu7"}},323:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(7),o=a(75),c=a(67),i=a.n(c),u=a(26),s=a(68),l=a(106),d=a(0),p=a.n(d),m=a(110),b=a(112),f=a(73),_=a(111),E=a(10),v=a(98),h=a(192),g=a.n(h),w=function(e){var t=e.isFetching,a=Object(d.useState)(!1),n=Object(l.a)(a,2),r=n[0],o=n[1],c=Object(E.f)(),h=function(){var t=Object(s.a)(i.a.mark((function t(a){var n,r,c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.password,r=a.email,t.prev=1,t.next=4,e.signUpWithFirebase({email:r,password:n});case 4:s=t.sent,t.t0=s.payload.code,t.next="auth/email-already-in-use"===t.t0?8:"auth/invalid-email"===t.t0?10:"auth/network-request-failed"===t.t0?12:"auth/too-many-requests"===t.t0?14:16;break;case 8:return c="Email already in use",t.abrupt("break",16);case 10:return c="Email not valid",t.abrupt("break",16);case 12:return c="Error de conexi\xf3n",t.abrupt("break",16);case 14:return c="Muchos intentos fallidos. Intente en unos minutos.",t.abrupt("break",16);case 16:if(!c){t.next=18;break}return t.abrupt("return",Object(u.a)({},_.a,c));case 18:o(!0),t.next=24;break;case 21:return t.prev=21,t.t1=t.catch(1),t.abrupt("return",Object(u.a)({},_.a,t.t1));case 24:case"end":return t.stop()}}),t,null,[[1,21]])})));return function(e){return t.apply(this,arguments)}}();return p.a.createElement("div",{className:g.a.container},p.a.createElement(v.a,{open:r,close:function(){return console.log("a")},callback:function(){return c.replace("/login")},title:"Created",detail:"Your account was created successfully",okButton:{title:"Go to Login",onClick:function(){return c.replace("/login")},onlyButton:!0}}),p.a.createElement("div",{className:g.a.logoContainer},p.a.createElement("div",{className:g.a.logoTitle},"MyPassword"),p.a.createElement("div",{className:g.a.logoSubtitle},"Sign Up")),p.a.createElement(m.b,{onSubmit:h,render:function(e){var a=e.handleSubmit,n=e.submitError,r=e.values;return p.a.createElement("form",{onSubmit:a,className:g.a.form},console.log(n),p.a.createElement(m.a,{name:"email",placeholder:"Email",type:"text",component:b.a}),p.a.createElement(m.a,{name:"password",placeholder:"Password",type:"password",component:b.a}),p.a.createElement("div",{className:g.a.loginButton},p.a.createElement(f.a,{type:"submit",disabled:t||!r.email||!r.password,submitting:t},"Create Account")),p.a.createElement("div",{className:g.a.error},n))}}),p.a.createElement("div",{className:g.a.message},"Your password is used to encrypt the other passwords stored in the database.",p.a.createElement("br",null),"If you forget this password, you will not be able to recover the other passwords."))};t.default=Object(n.b)((function(e){return{isFetching:e.auth.isFetching}}),(function(e){return Object(r.bindActionCreators)({signUpWithFirebase:o.c},e)}))(w)},71:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return l})),a.d(t,"g",(function(){return d})),a.d(t,"h",(function(){return p})),a.d(t,"i",(function(){return m})),a.d(t,"j",(function(){return b}));var n=a(4),r=a(82),o=function(){return Object(r.action)(n.a.LOGIN_FIREBASE_FETCHING)},c=function(e,t){return Object(r.action)(n.a.LOGIN_FIREBASE_FULFILLED,e,t)},i=function(e){return Object(r.action)(n.a.LOGIN_FIREBASE_REJECTED,e)},u=function(){return Object(r.action)(n.a.LOGOUT_FETCHING)},s=function(){return Object(r.action)(n.a.LOGOUT_FULFILLED)},l=function(e){return Object(r.action)(n.a.LOGOUT_REJECTED,e)},d=function(e){return Object(r.action)(n.a.SET_FINGER_PRINT,e)},p=function(){return Object(r.action)(n.a.SIGN_UP_FIREBASE_FETCHING)},m=function(e){return Object(r.action)(n.a.SIGN_UP_FIREBASE_FULFILLED,e)},b=function(e){return Object(r.action)(n.a.SIGN_UP_FIREBASE_REJECTED,e)}},72:function(e,t,a){"use strict";var n=a(92);a(95),a(96),a(97);n.initializeApp({apiKey:"AIzaSyBDpwgmlRzHFgKL5JiGpMyAHbP8vhiQS8Y",authDomain:"mypassword-d1f4f.firebaseapp.com",databaseURL:"https://mypassword-d1f4f.firebaseio.com",projectId:"mypassword-d1f4f",messagingSenderId:"414923111100",appId:"1:414923111100:web:acebf3c0f09ad922d22eb9",storageBucket:"mypassword-d1f4f.appspot.com"}),t.a={app:n}},73:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(25),c=a.n(o),i=a(84),u=a.n(i);t.a=function(e){var t=e.type,a=void 0===t?"button":t,n=e.children,o=e.disabled,i=e.submitting,s=e.onClick,l=e.className;return r.a.createElement("button",{type:a,disabled:o||i,className:"".concat(u.a.button," ").concat(l),onClick:s},i?r.a.createElement(c.a,{size:5,color:"#292724",loading:!0}):n)}},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return l}));var n=a(67),r=a.n(n),o=a(68),c=a(71),i=a(72),u=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(c.a()),t.prev=1,t.next=4,i.a.app.auth().signInWithEmailAndPassword(e.email.trim(),e.password.trim());case 4:return n=t.sent,t.abrupt("return",a(c.b(n,e.password.trim())));case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",a(c.c(t.t0)));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},s=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(c.d()),e.prev=1,e.next=4,localStorage.removeItem("users");case 4:return e.next=6,i.a.app.auth().signOut();case 6:return e.abrupt("return",t(c.e()));case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",t(c.f(e.t0)));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(c.h()),t.prev=1,t.next=4,i.a.app.auth().createUserWithEmailAndPassword(e.email.trim(),e.password.trim());case 4:return n=t.sent,t.abrupt("return",a(c.i(n)));case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",a(c.j(t.t0)));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},84:function(e,t,a){e.exports={button:"button_button__3p82B"}},98:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(321),c=a(73),i=a(114),u=a.n(i);t.a=function(e){var t=e.open,a=e.title,n=e.detail,i=e.close,s=e.callback,l=e.submitting,d=e.children,p=e.okButton;return r.a.createElement(o.a,{className:u.a.modalContainer,open:t},d||r.a.createElement("div",{className:u.a.modal},r.a.createElement("div",{className:u.a.modalHeader},a),r.a.createElement("div",{className:u.a.body},r.a.createElement("div",{className:u.a.detail},n),r.a.createElement("div",{className:u.a.buttons},r.a.createElement(c.a,{submitting:l,onClick:s,className:u.a.button},p?p.title:"Yes"),(null===p||void 0===p?void 0:p.onlyButton)?null:r.a.createElement(c.a,{disabled:l,onClick:i,className:"".concat(u.a.button," ").concat(u.a.cancel)},"Cancel")))))}}}]);
//# sourceMappingURL=8.770ce93a.chunk.js.map