(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{238:function(e,t,a){e.exports={formControl:"FormsControls_formControl__x4y-b",error:"FormsControls_error__2VbGF",formSummaryError:"FormsControls_formSummaryError__DfVoe"}},239:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return g}));var n=a(62),r=a(0),o=a.n(r),i=a(238),s=a.n(i),l=a(114),c=a(356),u=function(e){var t=e.meta,a=t.touched,n=t.error,r=e.children,i=a&&n;return o.a.createElement("div",{className:s.a.formControl+" "+(i?s.a.error:"")},o.a.createElement("div",null,r),i&&o.a.createElement("span",null,n))},m=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,["input","meta"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},t,a)))},d=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,["input","meta"]));return o.a.createElement(u,e,o.a.createElement(c.a,Object.assign({size:"small",variant:"outlined"},t,a)))};function g(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{marginTop:20,marginLeft:16}},o.a.createElement(l.a,Object.assign({placeholder:e,name:t,validate:a,component:n},r))," ",i))}},240:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},246:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2yOTe",dialogsItems:"Dialogs_dialogsItems__2JE7y",active:"Dialogs_active__16Dpi",messages:"Dialogs_messages__1DfrS",dialog:"Dialogs_dialog__3RvxE"}},359:function(e,t,a){"use strict";a.r(t);var n=a(78),r=a(0),o=a.n(r),i=a(246),s=a.n(i),l=function(e){return o.a.createElement("div",{className:s.a.dialog},e.message)},c=a(12),u=function(e){var t="/dialogs/"+e.id;return o.a.createElement("div",{className:s.a.dialog+" "+s.a.active},o.a.createElement(c.b,{to:t},e.name))},m=a(6),d=a(240),g=a(239),f=a(114),E=a(115),b=Object(d.a)(50),v=Object(E.a)({form:"dialogs-add-message-form"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,o.a.createElement(f.a,{component:g.b,validate:[d.b,b],name:"newMessageBody",placeholder:"Enter your message"})),o.a.createElement("div",null,o.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))})),p=function(e){var t=e.dialogsPage.dialogs.map((function(e){return o.a.createElement(u,{name:e.name,key:e.id,id:e.id})})),a=e.dialogsPage.messages.map((function(e){return o.a.createElement(l,{message:e.message,key:e.id})}));return e.isAuth?o.a.createElement("div",{className:s.a.dialogs},o.a.createElement("div",{className:s.a.dialogsItems},t),o.a.createElement("div",{className:s.a.messages},o.a.createElement("div",null,a),o.a.createElement(v,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}}))):o.a.createElement(m.a,{to:"/login"})},_=a(21),h=a(25),y=a(26),O=a(28),j=a(27),D=function(e){return{isAuth:e.auth.isAuth}},C=a(17);t.default=Object(C.d)(Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(Object(n.b)(t))}}})),(function(e){var t=function(t){Object(O.a)(n,t);var a=Object(j.a)(n);function n(){return Object(h.a)(this,n),a.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(m.a,{to:"/login"})}}]),n}(o.a.Component);return Object(_.b)(D)(t)}))(p)}}]);
//# sourceMappingURL=5.548197a1.chunk.js.map