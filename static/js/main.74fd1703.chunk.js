(this.webpackJsonpportofolio=this.webpackJsonpportofolio||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),c=n.n(r),l=(n(24),n(12)),i=n(7),s=n(2),u=n(8),d=n(10);function m(){for(var e=[0,1],t="",n=Math.floor(window.innerWidth/400),a=0;a<=n;a++)t+=e[Math.floor(Math.random()*e.length)].toString();return t}var f=function(e){var t=Object(a.useState)(o.a.createElement("div",null)),n=Object(d.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){setInterval((function(){c(function(){var e=0,t=window.location.hash;e="#/projects"===t?25:"#/about"===t?30:Math.floor(document.documentElement.clientHeight/100)+2;for(var n=[],a=0;a<e;a++)n.push(o.a.createElement("div",{className:"header col",key:a},m()));return o.a.createElement("div",null,n)}())}),100)}),[c]),o.a.createElement("div",{className:"container background nopadding"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm"},r)),e.children)},g=function(e){return window.location.hash===e},p=function(){var e=Object(a.useContext)(u.a),t=e.language,n=e.setLanguage,r=e.isGreek;return o.a.createElement("div",{className:"mt-4"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row navbar"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"row"},o.a.createElement(i.b,{to:"/",className:"col-lg navbar-button ".concat(g("#/")&&"active")},r()?"\u0391\u03c1\u03c7\u03b9\u03ba\u03ae":"Home"),o.a.createElement(i.b,{className:"col-lg navbar-button ".concat(g("#/projects")&&"active"),to:"/projects"},"Projects"),o.a.createElement(i.b,{className:"col-lg navbar-button ".concat(g("#/about")&&"active"),to:"/about"},r()?"\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03b5\u03bc\u03ad\u03bd\u03b1":"About Me"),o.a.createElement(i.b,{className:"col-lg navbar-button ".concat(g("#/contact")&&"active"),to:"/contact"},r()?"\u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03ae\u03c3\u03c4\u03b5":"Contact"))),o.a.createElement("div",{className:"dropdown"},o.a.createElement("button",{className:"btn dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown"},t),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement("div",{className:"dropdown-item",onClick:function(){return n("EN")}},"EN"),o.a.createElement("div",{className:"dropdown-item",onClick:function(){return n("GR")}},"GR"))))))},v=function(){var e=Object(a.useContext)(u.a).isGreek;return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"hello marginTop"},"Hello, friend",o.a.createElement("span",{className:"blink"},"_")),e()?o.a.createElement("div",null,o.a.createElement("div",{className:"intro"},"\u039a\u03b1\u03bb\u03c9\u03c2 \u03ae\u03c1\u03b8\u03b1\u03c4\u03b5. \u03a7\u03b1\u03af\u03c1\u03bf\u03bc\u03b1\u03b9 \u03c0\u03bf\u03c5 \u03b8\u03ad\u03bb\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03bc\u03b5 \u03b3\u03bd\u03c9\u03c1\u03af\u03c3\u03b5\u03c4\u03b5."),o.a.createElement("p",{className:"paragraph",style:{marginTop:"23px"}},"\u039f\u03bd\u03bf\u03bc\u03ac\u03b6\u03bf\u03bc\u03b1\u03b9 \u0398\u03b5\u03c1\u03b3\u03b9\u03ac\u03ba\u03b7\u03c2 \u0395\u03c5\u03c4\u03cd\u03c7\u03b9\u03bf\u03c2, \u03b5\u03af\u03bc\u03b1\u03b9 full-stack developer \u03ad\u03c7\u03c9 \u03b3\u03b5\u03bd\u03b7\u03b8\u03b5\u03af \u03ba\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03ce\u03c3\u03b5\u03b9 \u03c3\u03c4\u03bf \u03bd\u03b7\u03c3\u03af \u03c4\u03b7\u03c2 \u039a\u03c1\u03ae\u03c4\u03b7\u03c2 \u03c3\u03c4\u03b7\u03bd \u0395\u03bb\u03bb\u03ac\u03b4\u03b1. \u0395\u03af\u03bc\u03b1\u03b9 \u03b5\u03c6\u03b5\u03c5\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc\u03c2, \u03b1\u03c5\u03c4\u03bf\u03b4\u03af\u03b4\u03b1\u03ba\u03c4\u03bf\u03c2, \u03b5\u03c1\u03b3\u03b1\u03c4\u03b9\u03ba\u03cc\u03c2 \u03ba\u03b1\u03b9 \u03bc\u03b1\u03b8\u03b1\u03af\u03bd\u03c9 \u03b3\u03c1\u03ae\u03b3\u03bf\u03c1\u03b1. \u0395\u03c5\u03ad\u03bb\u03b9\u03ba\u03c4\u03bf\u03c2 \u03ba\u03b1\u03b9 \u03bf\u03bc\u03b1\u03b4\u03b9\u03ba\u03cc\u03c2. \u03a8\u03ac\u03c7\u03bd\u03c9 \u03bc\u03af\u03b1 \u03b8\u03ad\u03c3\u03b7 \u03c3\u03c4\u03bf\u03bd \u03c4\u03bf\u03bc\u03ad\u03b1 \u03b1\u03bd\u03ac\u03c0\u03c4\u03c5\u03be\u03b7\u03c2 \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ce\u03bd \u03cc\u03c0\u03bf\u03c5 \u03bf\u03b9 \u03b4\u03b5\u03be\u03b9\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2 \u03bc\u03bf\u03c5 \u03b8\u03b1 \u03c0\u03c1\u03bf\u03c3\u03c6\u03ad\u03c1\u03bf\u03c5\u03bd \u03c3\u03c4\u03bf \u03c4\u03b5\u03bb\u03b9\u03ba\u03cc \u03b1\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1, \u03ba\u03b1\u03b8\u03ce\u03c2 \u03b8\u03b1 \u03bc\u03bf\u03c5 \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03c0\u03b5\u03ba\u03c4\u03b5\u03af\u03bd\u03c9 \u03c4\u03b9\u03c2 \u03b3\u03bd\u03ce\u03c3\u03b5\u03b9\u03c2 \u03bc\u03bf\u03c5 \u03c3\u03c4\u03bf\u03bd \u03c4\u03bf\u03bc\u03ad\u03b1 \u03c4\u03bf\u03c5 software. \u039c\u03b5 \u03b5\u03bd\u03b4\u03b9\u03b1\u03c6\u03ad\u03c1\u03b5\u03b9 \u03b1\u03c1\u03ba\u03b5\u03c4\u03ac \u03ba\u03b1\u03b9 \u03bf \u03c4\u03bf\u03bc\u03ad\u03b1\u03c2 \u03c4\u03bf\u03c5 AI. \u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1 \u03c3\u03c4\u03b7\u03bd \u03c3\u03b5\u03bb\u03af\u03b4\u03b1",o.a.createElement(i.b,{to:"/about",className:"col-sm navbar-button",style:{fontWeight:"bolder",fontSize:"25px",paddingLeft:"7px",paddingRight:"7px"}},"\u03a3\u03c7\u03b5\u03c4\u03b9\u03ba\u03ac \u03bc\u03b5 \u03b5\u03bc\u03ad\u03bd\u03b1"))):o.a.createElement("div",null,o.a.createElement("div",{className:"intro"},"Welcome. I am glad you want to know me."),o.a.createElement("p",{className:"paragraph",style:{marginTop:"23px"}},"My name is Thergiakis Eftichios, I am a full-stack developer born and raised in the island of Crete in Greece. A resourceful, self-motivated web developer who is hard working and a quick learner. I am flexible as well as team orientated. I am currently seeking for a web developer role where my existing qualifications will add value to the outset, whilst I continue to further develop my knowledge in the sector. I am eager to expand on AI sector. More on",o.a.createElement(i.b,{to:"/about",className:"col-sm navbar-button",style:{fontWeight:"bolder",fontSize:"25px",paddingLeft:"7px",paddingRight:"7px"}},"About Me"),"section.")))},h=Object(l.a)((function(){return n.e(6).then(n.bind(null,68))})),b=Object(l.a)((function(){return n.e(4).then(n.bind(null,70))})),w=Object(l.a)((function(){return Promise.all([n.e(2),n.e(5)]).then(n.bind(null,69))}));var E=function(){return o.a.createElement(i.a,null,o.a.createElement(s.c,null,o.a.createElement(u.b,null,o.a.createElement(p,null),o.a.createElement(f,null),o.a.createElement(s.a,{exact:!0,path:"/",component:v}),o.a.createElement(s.a,{exact:!0,path:"/projects",component:w}),o.a.createElement(s.a,{exact:!0,path:"/about",component:h}),o.a.createElement(s.a,{exact:!0,path:"/contact",component:b}),"/>")))},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portofolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/portofolio","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i}));var a,o=n(10),r=n(0),c=n.n(r);!function(e){e.english="EN",e.greek="GR"}(a||(a={}));var l=Object(r.createContext)({language:a.english});function i(e){var t=e.children,n=Object(r.useState)(JSON.parse(window.localStorage.getItem("lang"))||a.english),i=Object(o.a)(n,2),s=i[0],u=i[1];return Object(r.useEffect)((function(){window.localStorage.setItem("lang",JSON.stringify(s))})),c.a.createElement(l.Provider,{value:{language:s,setLanguage:u,isGreek:function(){return"GR"===s}}},t)}}},[[19,1,3]]]);
//# sourceMappingURL=main.74fd1703.chunk.js.map