(this.webpackJsonpcodeforces=this.webpackJsonpcodeforces||[]).push([[0],{18:function(e,t,s){},19:function(e,t,s){},23:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);s(18),s(19);var r=s(14),c=s.n(r),a=s(5),n=s.n(a),i=s(15),l=s(3),o=(s(23),s(2)),j=s.n(o),u=s(16),d=s.n(u),b=s(0),m=function(){var e=Object(o.useState)(null),t=Object(l.a)(e,2),s=t[0],r=t[1],c=Object(o.useState)("tourist"),a=Object(l.a)(c,2),j=a[0],u=a[1],m=Object(o.useState)("tourist"),h=Object(l.a)(m,2),O=h[0],f=h[1],x=Object(o.useState)(null),p=Object(l.a)(x,2),g=p[0],y=p[1],v=function(){var e=Object(i.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.a.get("https://codeforces.com/api/user.info?handles="+O).catch((function(e){y(e.response.data.comment)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){u(O),v().then((function(e){if("OK"===e.data.status){var t=e.data.result[0];r(t);var s=document.documentElement;t.rating>=3e3?null===s||void 0===s||s.style.setProperty("--user-color","#AA0000"):t.rating>=2600?null===s||void 0===s||s.style.setProperty("--user-color","#FF3333"):t.rating>=2400?null===s||void 0===s||s.style.setProperty("--user-color","#FF0000"):t.rating>=2300?null===s||void 0===s||s.style.setProperty("--user-color","#FF8C00"):t.rating>=2100?null===s||void 0===s||s.style.setProperty("--user-color","#FFCC88"):t.rating>=1900?null===s||void 0===s||s.style.setProperty("--user-color","#AA00AA"):t.rating>=1600?null===s||void 0===s||s.style.setProperty("--user-color","#0000FF"):t.rating>=1400?null===s||void 0===s||s.style.setProperty("--user-color","#03A89E"):t.rating>=1200?null===s||void 0===s||s.style.setProperty("--user-color","#008000"):null===s||void 0===s||s.style.setProperty("--user-color","#808080"),y(null)}else r(null),y(e.data.comment),console.log(e.data.comment)})).catch((function(e){r(null),y(e.message)}))};Object(o.useEffect)((function(){N()}),[]);var F,P=function(e){return new Date(1e3*e).toLocaleDateString()};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N()},children:[Object(b.jsx)("input",{type:"text",placeholder:"Enter handle",onChange:function(e){f(e.target.value)},value:O}),Object(b.jsx)("button",{type:"submit",onClick:N,children:"Search"})]}),Object(b.jsxs)("div",{className:"user_wrapper",children:[g&&Object(b.jsxs)("p",{className:"error",children:["Can't find ",Object(b.jsx)("code",{children:j})," or Codeforces API is down"]}),s&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"col_one",children:[Object(b.jsx)("div",{className:"image_wrapper",children:Object(b.jsx)("img",{className:"profile_picture",src:s.titlePhoto,alt:"avatar"})}),Object(b.jsx)("h3",{className:"rank",children:s.rank})]}),Object(b.jsxs)("ul",{className:"user_list",children:[s.firstName&&Object(b.jsxs)("li",{className:"name",children:[s.firstName," ",s.lastName]}),s.handle&&Object(b.jsx)("li",{className:"handle",children:s.handle}),s.city&&s.country&&Object(b.jsxs)("li",{className:"city",children:[Object(b.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(b.jsx)("b",{children:"Location:"})," ",s.city,", ",s.country]}),s.organization&&Object(b.jsxs)("li",{className:"org",children:[Object(b.jsx)("i",{className:"fas fa-university"}),Object(b.jsx)("b",{children:"From:"})," ",s.organization]}),Object(b.jsxs)("li",{className:"data rating",children:[Object(b.jsx)("i",{className:"fas fa-chart-line"}),Object(b.jsx)("b",{children:"Rating:"})," ",s.rating," (",Object(b.jsx)("b",{children:"max. "}),s.maxRank,", ",s.maxRating,")"]}),Object(b.jsxs)("li",{className:"data friends",children:[Object(b.jsx)("i",{className:"fas fa-user-friends"}),Object(b.jsx)("b",{children:"Friends:"})," ",(F=s.friendOfCount,F.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," ","users"]}),Object(b.jsxs)("li",{className:"data contrib",children:[Object(b.jsx)("i",{className:"fas fa-plus"}),Object(b.jsx)("b",{children:"Contributions:"})," ",s.contribution]}),Object(b.jsxs)("li",{className:"data lastvisit",children:[Object(b.jsx)("i",{className:"far fa-clock"}),Object(b.jsx)("b",{children:"Last Visit:"})," ",P(s.lastOnlineTimeSeconds)]}),Object(b.jsxs)("li",{className:"data registered",children:[Object(b.jsx)("i",{className:"far fa-calendar-alt"}),Object(b.jsx)("b",{children:"Registered:"})," ",P(s.registrationTimeSeconds)]})]})]})]})]})};var h=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(c.a,{href:"https://github.com/omarr45/codeforces-user",target:"_blank",bannerColor:"#151513",octoColor:"white",size:140,direction:"right"})]})},O=s(17);s.n(O).a.render(Object(b.jsx)(j.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c8b8fd0f.chunk.js.map