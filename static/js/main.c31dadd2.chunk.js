(this.webpackJsonpportofolio=this.webpackJsonpportofolio||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a,o=n(11),c=n(0),r=n.n(c);!function(e){e.english="EN",e.greek="GR"}(a||(a={}));var i=Object(c.createContext)({language:a.english});function l(e){var t=e.children,n=Object(c.useState)(JSON.parse(window.localStorage.getItem("lang"))||a.english),l=Object(o.a)(n,2),s=l[0],u=l[1];return Object(c.useEffect)((function(){window.localStorage.setItem("lang",JSON.stringify(s))})),r.a.createElement(i.Provider,{value:{language:s,setLanguage:u,isGreek:function(){return"GR"===s}}},t)}},19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(18),r=n.n(c),i=(n(24),n(8)),l=n(7),s=n(2),u=n(10),d=n(11),m=function(e){return window.location.hash===e},f=function(){var e=Object(a.useContext)(u.a),t=e.language,n=e.setLanguage,c=e.isGreek,r=Object(a.useState)(!1),i=Object(d.a)(r,2),s=i[0],f=i[1];function b(e){n(e),f(!1)}return o.a.createElement("div",{className:"mt-4"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row navbar"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"row"},o.a.createElement(l.b,{to:"/",className:"col-lg navbar-button ".concat(m("#/")&&"active")},c()?"\u0391\u03c1\u03c7\u03b9\u03ba\u03ae":"Home"),o.a.createElement(l.b,{className:"col-lg navbar-button ".concat(m("#/projects")&&"active"),to:"/projects"},"Projects"),o.a.createElement(l.b,{className:"col-lg navbar-button ".concat(m("#/about")&&"active"),to:"/about"},c()?"\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03b5\u03bc\u03ad\u03bd\u03b1":"About Me"),o.a.createElement(l.b,{className:"col-lg navbar-button ".concat(m("#/contact")&&"active"),to:"/contact"},c()?"\u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03ae\u03c3\u03c4\u03b5":"Contact"))),o.a.createElement("div",{className:"dropdown",onClick:function(){return f(!s)}},o.a.createElement("button",{className:"btn dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown"},t),o.a.createElement("div",{className:"dropdown-menu ".concat(s&&"active"),"aria-labelledby":"dropdownMenuButton"},o.a.createElement("div",{className:"dropdown-item",onClick:function(){return b("EN")}},"EN"),o.a.createElement("div",{className:"dropdown-item",onClick:function(){return b("GR")}},"GR"))))))},b=Object(i.a)((function(){return n.e(7).then(n.bind(null,71))})),g=Object(i.a)((function(){return n.e(8).then(n.bind(null,68))})),v=Object(i.a)((function(){return n.e(6).then(n.bind(null,69))})),p=Object(i.a)((function(){return n.e(4).then(n.bind(null,72))})),h=Object(i.a)((function(){return Promise.all([n.e(2),n.e(5)]).then(n.bind(null,70))}));var w=function(){return o.a.createElement(l.a,null,o.a.createElement(s.c,null,o.a.createElement(u.b,null,o.a.createElement(f,null),o.a.createElement(b,null),o.a.createElement(s.a,{exact:!0,path:"/",component:g}),o.a.createElement(s.a,{exact:!0,path:"/projects",component:h}),o.a.createElement(s.a,{exact:!0,path:"/about",component:v}),o.a.createElement(s.a,{exact:!0,path:"/contact",component:p}))))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portofolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/portofolio","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[19,1,3]]]);
//# sourceMappingURL=main.c31dadd2.chunk.js.map