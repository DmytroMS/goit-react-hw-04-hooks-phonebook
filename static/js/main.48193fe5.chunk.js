(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter__input:"Filter_filter__input__mw8KL"}},17:function(t,e,n){},2:function(t,e,n){t.exports={container:"Contacts_container__ZNSoL",forma__input:"Contacts_forma__input__1OVDa",forma__btn:"Contacts_forma__btn__5f107",forma__label:"Contacts_forma__label__UkLaj"}},27:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=(n(17),n(12)),s=n(5),u=n(3),l=n.n(u),b=n(2),m=n.n(b),d=n(0);function _(t){var e=t.addContactOnSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),b=u[0],_=u[1],j=l.a.generate(),f=l.a.generate(),O=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":_(a);break;default:return}};return Object(d.jsx)("div",{className:m.a.forma,children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,b),o(""),_("")},children:[Object(d.jsxs)("label",{className:m.a.forma__label,htmlFor:j,children:["NAME",Object(d.jsx)("input",{className:m.a.forma__input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:O,id:j})]}),Object(d.jsxs)("label",{className:m.a.forma__label,htmlFor:f,children:["NUMBER",Object(d.jsx)("input",{className:m.a.forma__input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:O,id:f})]}),Object(d.jsx)("button",{className:m.a.forma__btn,type:"submit",children:"Add Contact"})]})})}var j=n(4),f=n.n(j);function O(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{className:f.a.contact,children:[Object(d.jsx)("span",{className:f.a.contact__item,children:n}),Object(d.jsx)("span",{className:f.a.contact__item,children:a}),Object(d.jsx)("button",{className:f.a.contact__btn,type:"button",onClick:function(){return c(e)},children:"Delete"})]})})}function h(t){var e=t.contacts,n=t.onDeleteContact;return Object(d.jsxs)("ul",{children:[" ",e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(d.jsx)(O,{id:e,name:a,number:c,onDeleteContact:n},e)}))]})}var p=n(11),x=n.n(p);function C(t){var e=t.value,n=t.onChange,a=l.a.generate();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("label",{htmlFor:a,children:["Find contacts by name",Object(d.jsx)("input",{type:"text",id:a,value:e,onChange:n,className:x.a.filter__input})]})})}var v=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];function g(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:v})),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),u=o[0],b=o[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var j=function(){var t=u.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))};return console.log("contacts",n),console.log("getvisibleContacts()",j()),Object(d.jsxs)("div",{className:m.a.container,children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(_,{addContactOnSubmit:function(t,e){if(n.find((function(e){return e.name===t})))return alert("".concat(t," is alredy in contacts"));var a={id:l.a.generate(),name:t,number:e};c((function(t){return[a].concat(Object(i.a)(t))}))}}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(C,{value:u,onChange:function(t){b(t.currentTarget.value)}}),Object(d.jsx)(h,{onDeleteContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))},contacts:j()})]})}o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={contact__item:"ContactList_contact__item__Vkpp2",contact:"ContactList_contact__2YuMW",contact__btn:"ContactList_contact__btn__3DuNH"}}},[[27,1,2]]]);
//# sourceMappingURL=main.48193fe5.chunk.js.map