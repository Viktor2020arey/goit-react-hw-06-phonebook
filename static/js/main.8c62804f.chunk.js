(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={enter:"pop_enter__3faCL",enterActive:"pop_enterActive__DKoJ7",exit:"pop_exit__33W-j",exitActive:"pop_exitActive__2XaOW"}},15:function(t,e,n){t.exports={list:"ContactList_list__1d0LB",item:"ContactList_item__16yL2",btn:"ContactList_btn__1WULI"}},22:function(t,e,n){t.exports={label:"Filter_label__Tn3Pp",input:"Filter_input__1sY6h"}},24:function(t,e,n){t.exports={container:"Container_container__fEy2v"}},27:function(t,e,n){t.exports={title:"App_title__3si1m"}},54:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(8),o=n.n(r),i=n(24),l=n.n(i),s=n(1);var u=function(t){var e=t.children;return Object(s.jsx)("div",{className:l.a.container,children:e})},b=n(23),j=n(5),m=n(26),O=n.n(m),p=n(6),d=Object(p.b)("contacts/add",(function(t,e){return{payload:{id:O.a.generate(),name:t,number:e}}})),f=Object(p.b)("contacts/delete"),h=Object(p.b)("contacts/filter"),x=function(t){return t.contacts.items},_=function(t){return t.contacts.filter},v=function(t){var e=x(t),n=_(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},y=n(9),g=n.n(y);var w=function(){var t=Object(j.b)(),e=Object(j.c)(x),n=Object(c.useState)(""),a=Object(b.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),l=Object(b.a)(i,2),u=l[0],m=l[1],O=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":o(c);break;case"number":m(c);break;default:return}},p=function(){o(""),m("")};return Object(s.jsxs)("form",{className:g.a.form,onSubmit:function(n){n.preventDefault(),!function(t){return e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(r)?!function(t){return e.find((function(e){return e.number===t}))}(u)?!function(t,e){return""===t.trim()||""===e.trim()}(r,u)?!function(t){return!/\d{3}[-]\d{2}[-]\d{2}/g.test(t)}(u)?t(d(r,u)):alert("\ud83d\udca9 Enter the correct number phone!"):alert("\ud83d\ude31 Enter the contact's name and number phone!"):alert("\ud83e\udd14 ".concat(u," is already in the phonebook.")):alert("\ud83e\udd14 ".concat(r," is already in the phonebook.")),p()},children:[Object(s.jsxs)("label",{className:g.a.label,children:["Name",Object(s.jsx)("input",{className:g.a.input,type:"text",name:"name",value:r,onChange:O,placeholder:"Jason Statham"})]}),Object(s.jsxs)("label",{className:g.a.label,children:["Number",Object(s.jsx)("input",{placeholder:"123-45-67",type:"tel",name:"number",value:u,onChange:O,className:g.a.input})]}),Object(s.jsx)("button",{className:g.a.btn,type:"submit",children:"Add contact"})]})},C=n(57),N=n(14),k=n.n(N),L=n(22),E=n.n(L);var A,F=function(){var t=Object(j.b)(),e=Object(j.c)(_),n=Object(j.c)(x);return Object(s.jsx)(C.a,{in:n.length>0,timeout:250,classNames:k.a,mountOnEnter:!0,unmountOnExit:!0,children:Object(s.jsxs)("label",{className:E.a.label,children:["Find contacts by name",Object(s.jsx)("input",{className:E.a.input,type:"text",value:e,onChange:function(e){return t(h(e.target.value))}})]})})},S=n(15),P=n.n(S),I=n(58),J=["title","titleId"];function z(){return(z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t}).apply(this,arguments)}function B(t,e){if(null==t)return{};var n,c,a=function(t,e){if(null==t)return{};var n,c,a={},r=Object.keys(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function M(t,e){var n=t.title,a=t.titleId,r=B(t,J);return c.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",ref:e,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,A||(A=c.createElement("path",{fill:"#3A4047",d:"M13 0H3C1.3 0 0 1.3 0 3v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm-.3 11.3l-1.4 1.4L8 9.4l-3.3 3.3-1.4-1.4L6.6 8 3.3 4.7l1.4-1.4L8 6.6l3.3-3.3 1.4 1.4L9.4 8l3.3 3.3z"})))}var W=c.forwardRef(M);n.p;var D=function(){var t=Object(j.b)(),e=Object(j.c)(v),n=Object(j.c)(x);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(C.a,{in:!n.length,timeout:250,classNames:k.a,mountOnEnter:!0,unmountOnExit:!0,children:Object(s.jsx)("p",{children:"Your phonebook is empty. Please add contact."})}),Object(s.jsx)(I.a,{component:"ul",className:P.a.list,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(s.jsx)(C.a,{timeout:250,mountOnEnter:!0,unmountOnExit:!0,classNames:k.a,children:Object(s.jsxs)("li",{className:P.a.item,children:[Object(s.jsxs)("p",{className:P.a.text,children:[c,": ",a]}),Object(s.jsx)("button",{className:P.a.btn,type:"button",onClick:function(){return t(f(n))},children:Object(s.jsx)(W,{width:"21px",height:"21px"})})]})},n)}))})]})},R=n(27),T=n.n(R);var X,Y=function(){return Object(s.jsxs)(u,{children:[Object(s.jsx)("h1",{children:"Phonebook"}),Object(s.jsx)(w,{}),Object(s.jsx)("h2",{className:T.a.title,children:"Contacts"}),Object(s.jsx)(F,{}),Object(s.jsx)(D,{})]})},q=n(28),H=n(19),K=n(29),U=n.n(K),V=n(7),Z=n(30),G=n.n(Z),Q=n(11),$=n(2),tt=Object(p.c)([],(X={},Object(Q.a)(X,d,(function(t,e){var n=e.payload;return[].concat(Object(H.a)(t),[n])})),Object(Q.a)(X,f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),X)),et=Object(p.c)("",Object(Q.a)({},h,(function(t,e){return e.payload}))),nt=Object($.b)({items:tt,filter:et}),ct=[].concat(Object(H.a)(Object(p.d)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})),[U.a]),at={key:"contacts",storage:G.a,blacklist:["filter"]},rt=Object(p.a)({reducer:{contacts:Object(V.g)(at,nt)},middleware:ct}),ot=Object(V.h)(rt);n(54),n(55);o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(j.a,{store:rt,children:Object(s.jsx)(q.a,{loading:null,persistor:ot,children:Object(s.jsx)(Y,{})})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"ContactForm_form__30RqN",label:"ContactForm_label__2041M",input:"ContactForm_input__2T-cZ",btn:"ContactForm_btn__LbXfk"}}},[[56,1,2]]]);
//# sourceMappingURL=main.8c62804f.chunk.js.map