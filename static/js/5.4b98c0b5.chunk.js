(this.webpackJsonpportofolio=this.webpackJsonpportofolio||[]).push([[5],{47:function(e,t,a){e.exports=a.p+"static/media/loop.e403121c.svg"},66:function(e,t,a){e.exports=a.p+"static/media/postit.b977c6cc.gif"},67:function(e,t,a){e.exports=a.p+"static/media/graphql.4bd220b9.png"},69:function(e,t,a){"use strict";a.r(t);var c=a(10),r=a(0),l=a.n(r),n=a(47),s=a.n(n);function i(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container text-center"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6",style:{marginTop:"-1800px",marginLeft:"25%"}},l.a.createElement("img",{src:s.a,alt:"loader icon",className:"loaderIcon blink"})))))}var m=a(48),o=a.n(m),p=["TypeScript","JavaScript","HTML","Python","other"],d=["2b7489","f1e05a","ea452c","eaa42c","cce87f"],u=function(e){return-1===p.indexOf(e)?d[d.length-1]:d[p.indexOf(e)]},h=function(e){var t=e.title,a=e.description,c=e.url,r=e.language,n=e.outline;return l.a.createElement("div",{className:"card",style:{width:"80%"}},l.a.createElement("div",{className:"card-body ".concat(n&&"spotlight")},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-9"},l.a.createElement("a",{className:"mb-2",href:c},t),l.a.createElement("p",{className:"card-description",style:{marginTop:"10px"}},a),l.a.createElement("p",{className:"card-text",style:{color:"#".concat(u(r)),fontSize:"13px"}},r)),l.a.createElement("div",{className:"col-3"},l.a.createElement("a",{href:c,className:"btn project-btn float-right"},"View Project"))))))},E=a(66),f=a.n(E),g=a(67),N=a.n(g),b=a(8);t.default=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(),m=Object(c.a)(s,2),p=m[0],d=m[1],u=Object(r.useContext)(b.a).isGreek;return Object(r.useEffect)((function(){o.a.get("https://api.github.com/users/iamtheef/repos?sort=created").then((function(e){d(e.data),n(!0)})).catch((function(e){console.error(e.message)}))}),[]),a?l.a.createElement("div",{className:"container",style:{marginTop:"-1700px"}},l.a.createElement("h3",{className:"intro"},u()?"\u0395\u03c0\u03b9\u03c6\u03b1\u03bd\u03ae":"Spotlight",":"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"card-img-top",src:N.a,style:{height:"auto",maxHeight:"246px"},alt:"server img"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"GraphQL - TypeScript boilerplate"),l.a.createElement("p",{className:"card-text"},"A fully equiped boilerplate with GraphQL & TypeScript"),l.a.createElement("a",{href:"https://github.com/iamtheef/GraphQL_boilerplate",className:"btn project-btn"},"View repository")))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"card-img-top",src:f.a,alt:"postit gif"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Postit"),l.a.createElement("p",{className:"card-text"},"A reddit clone. Find walkthrough gifs in the Github repository."),l.a.createElement("a",{href:" https://github.com/iamtheef/Post-It",className:"btn project-btn"},"View repository"))))),l.a.createElement("h3",{className:"intro mt-5"},u()?"\u03a4\u03c1\u03ad\u03c7\u03c9\u03bd":"Current",":"),p.map((function(e,t){return l.a.createElement("div",{className:"row mb-4",key:e.html_url},l.a.createElement("div",{className:"col-md"},l.a.createElement(h,{title:e.name,description:e.description,url:e.html_url,language:e.language,outline:0===t})))}))):l.a.createElement(i,null)}}}]);
//# sourceMappingURL=5.4b98c0b5.chunk.js.map