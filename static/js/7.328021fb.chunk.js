(this.webpackJsonpportofolio=this.webpackJsonpportofolio||[]).push([[7],{42:function(t,e,r){t.exports=r(43)},43:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var s={};function l(){}function f(){}function h(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(L([])));v&&v!==e&&r.call(v,o)&&(p=v);var m=h.prototype=l.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=m.constructor=h,h.constructor=f,h[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new g(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(m),m[i]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},83:function(t,e,r){"use strict";r.r(e);var n=r(42),o=r.n(n);function a(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}var i=r(11),c=r(0),u=r.n(c),s=r(10),l=r(7),f=function(t){return new Promise((function(e){return setTimeout(e,t)}))};e.default=function(){var t=Object(c.useContext)(s.a).isGreek,e=Object(c.useState)(""),r=Object(i.a)(e,2),n=r[0],h=r[1],p=function(){var t,e=(t=o.a.mark((function t(){var e,r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e="Hello, friend",r=o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h((function(t){return t+e.charAt(r)})),t.next=3,f(120);case 3:case"end":return t.stop()}}),t)})),n=0;case 3:if(!(n<e.length)){t.next=8;break}return t.delegateYield(r(n),"t0",5);case 5:n++,t.next=3;break;case 8:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){p()}),[]),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"marginTop"},u.a.createElement("h1",{className:"hello"},n,u.a.createElement("span",{className:"blink"},"_"),u.a.createElement("span",{id:"hover-content"},"Maybe I should give you a name"))),t()?u.a.createElement("div",null,u.a.createElement("div",{className:"intro"},"\u039a\u03b1\u03bb\u03ce\u03c2 \u03ae\u03c1\u03b8\u03b1\u03c4\u03b5. \u03a7\u03b1\u03af\u03c1\u03bf\u03bc\u03b1\u03b9 \u03c0\u03bf\u03c5 \u03b8\u03ad\u03bb\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03bc\u03b5 \u03b3\u03bd\u03c9\u03c1\u03af\u03c3\u03b5\u03c4\u03b5."),u.a.createElement("p",{className:"paragraph",style:{marginTop:"23px"}},"\u039f\u03bd\u03bf\u03bc\u03ac\u03b6\u03bf\u03bc\u03b1\u03b9 \u0398\u03b5\u03c1\u03b3\u03b9\u03ac\u03ba\u03b7\u03c2 \u0395\u03c5\u03c4\u03cd\u03c7\u03b9\u03bf\u03c2, \u03b5\u03af\u03bc\u03b1\u03b9 full-stack developer \u03ad\u03c7\u03c9 \u03b3\u03b5\u03bd\u03b7\u03b8\u03b5\u03af \u03ba\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03ce\u03c3\u03b5\u03b9 \u03c3\u03c4\u03bf \u03bd\u03b7\u03c3\u03af \u03c4\u03b7\u03c2 \u039a\u03c1\u03ae\u03c4\u03b7\u03c2 \u03c3\u03c4\u03b7\u03bd \u0395\u03bb\u03bb\u03ac\u03b4\u03b1. \u0395\u03af\u03bc\u03b1\u03b9 \u03b5\u03c6\u03b5\u03c5\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc\u03c2, \u03b1\u03c5\u03c4\u03bf\u03b4\u03af\u03b4\u03b1\u03ba\u03c4\u03bf\u03c2, \u03b5\u03c1\u03b3\u03b1\u03c4\u03b9\u03ba\u03cc\u03c2 \u03ba\u03b1\u03b9 \u03bc\u03b1\u03b8\u03b1\u03af\u03bd\u03c9 \u03b3\u03c1\u03ae\u03b3\u03bf\u03c1\u03b1. \u0395\u03c5\u03ad\u03bb\u03b9\u03ba\u03c4\u03bf\u03c2 \u03ba\u03b1\u03b9 \u03bf\u03bc\u03b1\u03b4\u03b9\u03ba\u03cc\u03c2. \u03a8\u03ac\u03c7\u03bd\u03c9 \u03bc\u03af\u03b1 \u03b8\u03ad\u03c3\u03b7 \u03c3\u03c4\u03bf\u03bd \u03c4\u03bf\u03bc\u03ad\u03b1 \u03b1\u03bd\u03ac\u03c0\u03c4\u03c5\u03be\u03b7\u03c2 \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ce\u03bd \u03cc\u03c0\u03bf\u03c5 \u03bf\u03b9 \u03b4\u03b5\u03be\u03b9\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2 \u03bc\u03bf\u03c5 \u03b8\u03b1 \u03c0\u03c1\u03bf\u03c3\u03c6\u03ad\u03c1\u03bf\u03c5\u03bd \u03c3\u03c4\u03bf \u03c4\u03b5\u03bb\u03b9\u03ba\u03cc \u03b1\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1, \u03ba\u03b1\u03b8\u03ce\u03c2 \u03b8\u03b1 \u03bc\u03bf\u03c5 \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03c0\u03b5\u03ba\u03c4\u03b5\u03af\u03bd\u03c9 \u03c4\u03b9\u03c2 \u03b3\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03bc\u03bf\u03c5 \u03c3\u03c4\u03bf\u03bd \u03c4\u03bf\u03bc\u03ad\u03b1 \u03c4\u03bf\u03c5 software. \u039c\u03b5 \u03b5\u03bd\u03b4\u03b9\u03b1\u03c6\u03ad\u03c1\u03b5\u03b9 \u03b1\u03c1\u03ba\u03b5\u03c4\u03ac \u03ba\u03b1\u03b9 \u03bf \u03c4\u03bf\u03bc\u03ad\u03b1\u03c2 \u03c4\u03bf\u03c5 AI. \u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1 \u03c3\u03c4\u03b7\u03bd \u03c3\u03b5\u03bb\u03af\u03b4\u03b1",u.a.createElement(l.b,{to:"/about",className:"col-sm navbar-button",style:{fontWeight:"bolder",fontSize:"25px",paddingLeft:"7px",paddingRight:"7px"}},"\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03b5\u03bc\u03ad\u03bd\u03b1"))):u.a.createElement("div",null,u.a.createElement("div",{className:"intro"},"Welcome. I am glad you want to know me."),u.a.createElement("p",{className:"paragraph",style:{marginTop:"23px"}},"My name is Thergiakis Eftichios, I am a full-stack developer born and raised in the island of Crete in Greece. A resourceful, self-motivated web developer who is hard working and a quick learner. I am flexible as well as team orientated. I am currently seeking for a web developer role where my existing qualifications will add value to the outset, whilst I continue to further develop my knowledge in the sector. I am eager to expand on AI sector. More on",u.a.createElement(l.b,{to:"/about",className:"col-sm navbar-button",style:{fontWeight:"bolder",fontSize:"25px",paddingLeft:"7px",paddingRight:"7px"}},"About Me"),"section.")))}}}]);
//# sourceMappingURL=7.328021fb.chunk.js.map