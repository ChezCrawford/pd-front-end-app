(this["webpackJsonppd-front-end-app"]=this["webpackJsonppd-front-end-app"]||[]).push([[0],{17:function(e,n,t){},18:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),r=t(11),i=t.n(r),s=(t(17),t.p+"static/media/logo.6ce24c58.svg"),a=(t(18),t(12)),l=t(0),d=Object(a.api)({token:"someToken1234567890"}),p=function(){console.log("GET Clicked"),d.get("/incidents").then((function(e){var n=e.data,t=e.resource,c=e.next;return console.log(n,t,c)})).catch(console.error)},u=function(){console.log("POST Clicked");d.post("/incidents",{incident:{title:"CORS may not be working properly"}}).then((function(e){var n=e.data,t=e.resource,c=e.next;return console.log(n,t,c)})).catch(console.error)},j=function(){console.log("PUT Clicked");d.put("/incidents/PRVZI4Q",{incident:{title:"CORS may not be working properly"}}).then((function(e){var n=e.data,t=e.resource,c=e.next;return console.log(n,t,c)})).catch(console.error)};var g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:p,children:"Get PagerDuty Thing"}),Object(l.jsx)("button",{onClick:u,children:"Create PagerDuty Thing"}),Object(l.jsx)("button",{onClick:j,children:"Update PagerDuty Thing"})]})};var h=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(l.jsxs)("p",{children:["Edit ",Object(l.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(l.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(l.jsx)(g,{})]})})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),b()}},[[34,1,2]]]);
//# sourceMappingURL=main.1718005c.chunk.js.map