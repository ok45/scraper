(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(5),o=n.n(a),s=(n(11),n(2)),i=n.n(s),u=n(4),p=n(6),d=(n(13),n(14),n(0));var l=function(){var t=Object(r.useState)({}),e=Object(p.a)(t,2),n=e[0],c=e[1];function a(t,e){return o.apply(this,arguments)}function o(){return(o=Object(u.a)(i.a.mark((function t(e,n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t,e){var n=document.createElement("a");n.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e))),n.setAttribute("download",t),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}function l(){return(l=Object(u.a)(i.a.mark((function t(e){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),"http://127.0.0.1:4000/res/",r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n.text})},t.next=5,a("http://127.0.0.1:4000/res/",r);case 5:t.sent.json().then((function(t){return s("name.json",t)}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(d.jsx)("div",{class:"row justify-content-center todo",children:Object(d.jsx)("div",{class:"col-sm-auto",children:Object(d.jsxs)("form",{onSubmit:function(t){return l.apply(this,arguments)},children:[Object(d.jsx)("input",{type:"text",value:n.text,onChange:function(t){t.preventDefault(),c({text:t.target.value,completed:!1})}}),Object(d.jsx)("input",{class:"submit",type:"submit",value:"Vyhledat"})]})})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.feae6743.chunk.js.map