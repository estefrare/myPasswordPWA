(this["webpackJsonpmy-password-pwa"]=this["webpackJsonpmy-password-pwa"]||[]).push([[8],{108:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return o}));var r=n(69),a=n.n(r),u=n(70),i=n(109),c=function(){var t=Object(u.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={challenge:Uint8Array.from("someChallengeIsHereComOn",(function(t){return t.charCodeAt(0)})),rp:{name:"WebAuthn Test"},user:{id:Uint8Array.from(e,(function(t){return t.charCodeAt(0)})),name:e,displayName:e},pubKeyCredParams:[{alg:-7,type:"public-key"}],authenticatorSelection:{authenticatorAttachment:"platform"},timeout:6e4,attestation:"direct"},t.next=3,navigator.credentials.create({publicKey:n});case 3:r=t.sent,s(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=localStorage.getItem("users"),e=(t?JSON.parse(t):[]).credentials.map((function(t){return{type:"public-key",id:Uint8Array.from(Object.values(t.credentialId))}})),n={challenge:Uint8Array.from("someChallengeIsHereComOn",(function(t){return t.charCodeAt(0)})),allowCredentials:e};return navigator.credentials.get({publicKey:n})},s=function(t){var e={credentials:[]},n=l(t),r=f(n),a=n.slice(55,55+r),u=n.slice(55+r);return e.credentials.push({credentialId:a,publicKey:u}),e.id=""+Math.floor(1e7*Math.random()),localStorage.setItem("users",JSON.stringify(e)),!0},f=function(t){var e=new DataView(new ArrayBuffer(2));return t.slice(53,55).forEach((function(t,n){return e.setUint8(n,t)})),e.getUint16(0)},l=function(t){return i.decode(t.response.attestationObject).authData}},109:function(t,e,n){!function(e,n){"use strict";var r={encode:function(t){var e,n=new ArrayBuffer(256),r=new DataView(n),a=0;function u(t){for(var u=n.byteLength,i=a+t;u<i;)u<<=1;if(u!==n.byteLength){var c=r;n=new ArrayBuffer(u),r=new DataView(n);for(var o=a+3>>2,s=0;s<o;++s)r.setUint32(s<<2,c.getUint32(s<<2))}return e=t,r}function i(){a+=e}function c(t){i(u(1).setUint8(a,t))}function o(t){for(var e=u(t.length),n=0;n<t.length;++n)e.setUint8(a+n,t[n]);i()}function s(t,e){e<24?c(t<<5|e):e<256?(c(t<<5|24),c(e)):e<65536?(c(t<<5|25),function(t){i(u(2).setUint16(a,t))}(e)):e<4294967296?(c(t<<5|26),function(t){i(u(4).setUint32(a,t))}(e)):(c(t<<5|27),function(t){var e=t%4294967296,n=(t-e)/4294967296,r=u(8);r.setUint32(a,n),r.setUint32(a+4,e),i()}(e))}if(function t(e){var n;if(!1===e)return c(244);if(!0===e)return c(245);if(null===e)return c(246);if(void 0===e)return c(247);switch(typeof e){case"number":if(Math.floor(e)===e){if(0<=e&&e<=9007199254740992)return s(0,e);if(-9007199254740992<=e&&e<0)return s(1,-(e+1))}return c(251),function(t){i(u(8).setFloat64(a,t))}(e);case"string":var r=[];for(n=0;n<e.length;++n){var f=e.charCodeAt(n);f<128?r.push(f):f<2048?(r.push(192|f>>6),r.push(128|63&f)):f<55296?(r.push(224|f>>12),r.push(128|f>>6&63),r.push(128|63&f)):(f=(1023&f)<<10,f|=1023&e.charCodeAt(++n),f+=65536,r.push(240|f>>18),r.push(128|f>>12&63),r.push(128|f>>6&63),r.push(128|63&f))}return s(3,r.length),o(r);default:var l;if(Array.isArray(e))for(s(4,l=e.length),n=0;n<l;++n)t(e[n]);else if(e instanceof Uint8Array)s(2,e.length),o(e);else{var p=Object.keys(e);for(s(5,l=p.length),n=0;n<l;++n){var h=p[n];t(h),t(e[h])}}}}(t),"slice"in n)return n.slice(0,a);for(var f=new ArrayBuffer(a),l=new DataView(f),p=0;p<a;++p)l.setUint8(p,r.getUint8(p));return f},decode:function(t,e,n){var r=new DataView(t),a=0;function u(t,e){return a+=t,e}function i(e){return u(e,new Uint8Array(t,a,e))}function c(){return u(1,r.getUint8(a))}function o(){return u(2,r.getUint16(a))}function s(){return u(4,r.getUint32(a))}function f(){return 255===r.getUint8(a)&&(a+=1,!0)}function l(t){if(t<24)return t;if(24===t)return c();if(25===t)return o();if(26===t)return s();if(27===t)return 4294967296*s()+s();if(31===t)return-1;throw"Invalid length encoding"}function p(t){var e=c();if(255===e)return-1;var n=l(31&e);if(n<0||e>>5!==t)throw"Invalid indefinite length element";return n}function h(t,e){for(var n=0;n<e;++n){var r=c();128&r&&(r<224?(r=(31&r)<<6|63&c(),e-=1):r<240?(r=(15&r)<<12|(63&c())<<6|63&c(),e-=2):(r=(15&r)<<18|(63&c())<<12|(63&c())<<6|63&c(),e-=3)),r<65536?t.push(r):(r-=65536,t.push(55296|r>>10),t.push(56320|1023&r))}}"function"!==typeof e&&(e=function(t){return t}),"function"!==typeof n&&(n=function(){});var d=function t(){var s,d,v=c(),g=v>>5,b=31&v;if(7===g)switch(b){case 25:return function(){var t=new ArrayBuffer(4),e=new DataView(t),n=o(),r=32768&n,a=31744&n,u=1023&n;if(31744===a)a=261120;else if(0!==a)a+=114688;else if(0!==u)return(r?-1:1)*u*5.960464477539063e-8;return e.setUint32(0,r<<16|a<<13|u<<13),e.getFloat32(0)}();case 26:return u(4,r.getFloat32(a));case 27:return u(8,r.getFloat64(a))}if((d=l(b))<0&&(g<2||6<g))throw"Invalid length";switch(g){case 0:return d;case 1:return-1-d;case 2:if(d<0){for(var w=[],m=0;(d=p(g))>=0;)m+=d,w.push(i(d));var y=new Uint8Array(m),O=0;for(s=0;s<w.length;++s)y.set(w[s],O),O+=w[s].length;return y}return i(d);case 3:var A=[];if(d<0)for(;(d=p(g))>=0;)h(A,d);else h(A,d);return String.fromCharCode.apply(null,A);case 4:var U;if(d<0)for(U=[];!f();)U.push(t());else for(U=new Array(d),s=0;s<d;++s)U[s]=t();return U;case 5:var I={};for(s=0;s<d||d<0&&!f();++s){I[t()]=t()}return I;case 6:return e(t(),d);case 7:switch(d){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;default:return n(d)}}}();if(a!==t.byteLength)throw"Remaining bytes";return d}};t.exports?t.exports=r:e.CBOR||(e.CBOR=r)}(this)},188:function(t,e,n){t.exports={container:"auth_container__3M9A_"}},320:function(t,e,n){"use strict";n.r(e);var r=n(16),a=n(6),u=n(80),i=n(0),c=n.n(i),o=n(10),s=n(108),f=n(188),l=n.n(f),p=function(t){var e=t.authenticated,n=t.password,r=t.logout,a=t.useFingerPrint,u=Object(o.f)();return Object(i.useEffect)((function(){if(e)if(n)if(a){localStorage.getItem("users")?Object(s.a)().then((function(){u.replace("/home")})).catch((function(){r()})):Object(s.b)("randomUser").then((function(){u.replace("/home")}))}else a||u.replace("/home");else r()}),[e,u,n,r,a]),c.a.createElement("div",{className:l.a.container})};e.default=Object(r.b)((function(t){var e;return{authenticated:t.auth.authenticated,password:null===(e=t.auth.user)||void 0===e?void 0:e.password,useFingerPrint:t.auth.useFingerPrint}}),(function(t){return Object(a.bindActionCreators)({logout:u.b},t)}))(p)},74:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return l}));var r=n(9),a=n(90),u=function(){return Object(a.action)(r.a.LOGIN_FIREBASE_FETCHING)},i=function(t,e){return Object(a.action)(r.a.LOGIN_FIREBASE_FULFILLED,t,e)},c=function(t){return Object(a.action)(r.a.LOGIN_FIREBASE_REJECTED,t)},o=function(){return Object(a.action)(r.a.LOGOUT_FETCHING)},s=function(){return Object(a.action)(r.a.LOGOUT_FULFILLED)},f=function(t){return Object(a.action)(r.a.LOGOUT_REJECTED,t)},l=function(t){return Object(a.action)(r.a.SET_FINGER_PRINT,t)}},75:function(t,e,n){"use strict";var r=n(101);n(104),n(105),n(106);r.initializeApp({apiKey:"AIzaSyBDpwgmlRzHFgKL5JiGpMyAHbP8vhiQS8Y",authDomain:"mypassword-d1f4f.firebaseapp.com",databaseURL:"https://mypassword-d1f4f.firebaseio.com",projectId:"mypassword-d1f4f",messagingSenderId:"414923111100",appId:"1:414923111100:web:acebf3c0f09ad922d22eb9"}),e.a=r},80:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var r=n(69),a=n.n(r),u=n(70),i=n(74),c=n(75),o=function(t){return function(){var e=Object(u.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(i.a()),e.prev=1,e.next=4,c.a.auth().signInWithEmailAndPassword(t.email.trim(),t.password.trim());case 4:return r=e.sent,e.abrupt("return",n(i.b(r,t.password.trim())));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(i.c(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},s=function(){return function(){var t=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(i.d()),t.prev=1,t.next=4,localStorage.removeItem("users");case 4:return t.next=6,c.a.auth().signOut();case 6:return t.abrupt("return",e(i.e()));case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",e(i.f(t.t0)));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=8.bdc5c4b4.chunk.js.map