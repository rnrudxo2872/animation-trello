(this["webpackJsonpreact-trello"]=this["webpackJsonpreact-trello"]||[]).push([[0],{68:function(n,e,t){"use strict";t.r(e);var i,r,o=t(0),a=t.n(o),c=t(21),s=t.n(c),l=t(20),d=t(13),b=t(10),u=t(3),p=t(6),g=t(73),h=t(23),j=Object(l.b)({key:"todoAtom",default:{}}),x=t(8),f=t(11),m=t(15),O=function(){function n(){Object(f.a)(this,n)}return Object(m.a)(n,[{key:"toJson",value:function(n){return JSON.stringify(n)}},{key:"getFromJson",value:function(n){var e=JSON.parse(n);return{toDos:e.toDos,title:e.title}}}]),n}(),v=function(){function n(){Object(f.a)(this,n)}return Object(m.a)(n,[{key:"toJson",value:function(n){return JSON.stringify(n)}},{key:"getFromJson",value:function(n){return JSON.parse(n)}}]),n}(),w=function(){function n(e,t){Object(f.a)(this,n),this.key=void 0,this.mapper=void 0,this.key=e,this.mapper=t}return Object(m.a)(n,[{key:"get",value:function(){return this.mapper.getFromJson(localStorage.getItem(this.key))}},{key:"set",value:function(n){localStorage.setItem(this.key,this.mapper.toJson(n))}},{key:"clear",value:function(){localStorage.removeItem(this.key)}},{key:"isEmpty",value:function(){return null==localStorage.getItem(this.key)}}]),n}(),y=t(14),k=d.c.div(i||(i=Object(y.a)(["\n  background-color: white;\n"]))),z=t(7),D=d.c.button(r||(r=Object(y.a)([""])));function S(n){return Object(z.jsx)(D,Object(u.a)(Object(u.a)({},n),{},{children:"Add another list"}))}var I,C,J,q=a.a.memo(S),B=t(42),A=d.c.form(I||(I=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),F=d.c.input(C||(C=Object(y.a)(["\n  flex-grow: 1;\n  margin: 5px 5px;\n  margin-bottom: 10px;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 10px;\n"]))),H=d.c.span(J||(J=Object(y.a)(["\n  font-weight: 700;\n  margin-bottom: 12px;\n  text-align: center;\n  color: ",";\n  text-shadow: 1px 1px 1px ",",\n    -1px -1px 1px ",";\n"])),(function(n){return n.theme.textHighlight}),(function(n){return n.theme.highlightShadow}),(function(n){return n.theme.highlightShadow})),N={required:{value:!0,message:"white space is not correct"}};function E(n){var e=n.sectionName,t=n.onSubmit,i="".concat(e,"_insert"),r=Object(B.a)(),o=r.register,a=r.handleSubmit,c=r.formState.errors,s=r.setValue;return Object(z.jsxs)(A,{onSubmit:a((function(n){t(n),s(i,"")})),children:[Object(z.jsx)(F,Object(u.a)({placeholder:"Insert content"},o(i,N))),c[i]?Object(z.jsxs)(H,{children:[c[i].message,"!"]}):null]})}var T=a.a.memo(E);var P,R,M,V,W=function(){var n=Object(o.useState)(!1),e=Object(p.a)(n,2),t=e[0],i=e[1],r=Object(l.c)(j),a=Object(p.a)(r,2),c=(a[0],a[1]);return Object(z.jsx)(k,{children:t?Object(z.jsx)(T,{onSubmit:function(n){var e=n.addBoard_insert,t=new w("Boards",new v);t.set([].concat(Object(x.a)(t.get()?t.get():[]),[e]));var i=new w(e,new O);i.set({title:e,toDos:[]}),c((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(b.a)({},e,i.get().toDos))}))},sectionName:"addBoard"}):Object(z.jsx)(q,{onClick:function(){return i(!0)}})})},_=d.c.div(P||(P=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 20px;\n  height: 100%;\n  min-height: 160px;\n  min-width: 360px;\n  max-height: 90vh;\n  background-color: #9090da;\n  border-radius: 12px;\n  box-shadow: 1px 1px 2px rgba(1, 1, 1, 0.3);\n  overflow: hidden;\n"]))),L=d.c.h2(R||(R=Object(y.a)(["\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.textColor})),G=d.c.div(M||(M=Object(y.a)(["\n  flex-grow: 1;\n  padding: 30px;\n  max-height: 100%;\n  overflow-y: auto;\n  background-color: ",";\n  transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n"])),(function(n){return n.isDraggingOver?"#AFAFE9":null==n.draggingFromThisWith?"transparent":"#8686CB"})),K=d.c.div(V||(V=Object(y.a)(["\n  padding: 10px 10px;\n  background-color: #e7dede;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  box-shadow: 1px 1px 2px rgba(1, 1, 1, 0.3);\n  color: ",";\n  height: fit-content;\n"])),(function(n){return n.theme.textColor}));function Q(n){var e=n.index,t=n.value;return Object(z.jsx)(h.b,{index:e,draggableId:t+Date.now(),children:function(n){return Object(z.jsx)(K,Object(u.a)(Object(u.a)(Object(u.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:t}))}})}var U=a.a.memo(Q);var X,Y=function(n){var e=n.toDos,t=n.title,i=Object(o.useRef)(!0),r=Object(l.d)(j),a="".concat(t,"_insert");return Object(o.useEffect)((function(){i.current?i.current=!1:new w(t,new O).set({title:t,toDos:e})}),[t,e]),Object(z.jsxs)(_,{children:[Object(z.jsx)(L,{children:t}),Object(z.jsx)(h.c,{droppableId:t,children:function(n,t){return Object(z.jsxs)(G,Object(u.a)(Object(u.a)({isDraggingOver:t.isDraggingOver,draggingFromThisWith:t.draggingFromThisWith,ref:n.innerRef},n.droppableProps),{},{children:[e.map((function(n,e){return Object(z.jsx)(U,{index:e,value:n},e)})),n.placeholder]}))}}),Object(z.jsx)(T,{onSubmit:function(n){return r((function(e){var i=Object(x.a)(e[t]);return i.push(n[a]),Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},t,i))}))},sectionName:t})]})},Z=t(72),$=Object(d.c)(Z.a.div)(X||(X=Object(y.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  background-color: ",";\n  color: ",";\n  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;\n  padding: 20px;\n"])),(function(n){return n.isDraggingOver?"#A4A09D":"white"}),(function(n){return n.isDraggingOver?"white":"black"})),nn={init:{opacity:0,y:100,scale:.3},after:{opacity:1,y:0,scale:1,transition:{duration:.5}},exit:{opacity:0,y:100,scale:.3,transition:{duration:.5}}};var en,tn,rn,on=function(n){var e=n.isDraggingOver;return Object(z.jsx)($,{isDraggingOver:e,variants:nn,initial:"init",animate:"after",exit:"exit",children:Object(z.jsx)("div",{style:{width:"100%",height:"100%"},children:Object(z.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(z.jsx)("path",{fill:"currentColor",d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"})})})})},an=d.c.div(en||(en=Object(y.a)(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  justify-content: center;\n  align-items: center;\n"]))),cn=d.c.div(tn||(tn=Object(y.a)(["\n  display: flex;\n  max-height: 100%;\n  gap: 10px;\n"]))),sn=d.c.div(rn||(rn=Object(y.a)(["\n  position: fixed;\n  bottom: 50px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 35px;\n  height: 35px;\n"])));function ln(n){var e=n.destination,t=n.source,i=t.index,r=t.droppableId,o=this.setToDos;(0,this.setIsDragging)(!1),e&&(e.droppableId!==r?"DeleteBox"!==e.droppableId?o((function(n){var t,o=Object(x.a)(n[r]),a=Object(x.a)(n[e.droppableId]);return o.splice(i,1),a.splice(e.index,0,n[r][i]),Object(u.a)(Object(u.a)({},n),{},(t={},Object(b.a)(t,r,o),Object(b.a)(t,e.droppableId,a),t))})):o((function(n){var e=Object(x.a)(n[r]);return e.splice(i,1),Object(u.a)(Object(u.a)({},n),{},Object(b.a)({},r,e))})):o((function(n){var t=Object(x.a)(n[r]);return t.splice(i,1),t.splice(e.index,0,n[r][i]),Object(u.a)(Object(u.a)({},n),{},Object(b.a)({},r,t))})))}var dn,bn=function(){var n,e=Object(l.c)(j),t=Object(p.a)(e,2),i=t[0],r=t[1],a=Object(o.useState)(!1),c=Object(p.a)(a,2),s=c[0],d=c[1];return Object(o.useEffect)((function(){var n,e=null===(n=new w("Boards",new v).get())||void 0===n?void 0:n.reduce((function(n,e){var t=new w(e,new O);return Object(u.a)(Object(u.a)({},n),{},Object(b.a)({},e,t.get().toDos))}),{});r(e)}),[r]),Object(z.jsx)(h.a,{onDragStart:function(n){d(!0)},onDragEnd:ln.bind({setToDos:r,setIsDragging:d}),children:Object(z.jsxs)(an,{children:[Object(z.jsx)(cn,{children:i&&(null===(n=Object.keys(i))||void 0===n?void 0:n.map((function(n){return Object(z.jsx)(Y,{title:n,toDos:i[n]},n)})))}),Object(z.jsx)(W,{}),Object(z.jsx)(sn,{children:Object(z.jsx)(h.c,{droppableId:"DeleteBox",children:function(n,e){return Object(z.jsxs)("div",Object(u.a)(Object(u.a)({ref:n.innerRef},n.droppableProps),{},{children:[Object(z.jsx)(g.a,{children:s?Object(z.jsx)(on,{isDraggingOver:e.isDraggingOver}):null}),n.placeholder]}))}})})]})})},un=Object(d.b)(dn||(dn=Object(y.a)(['\n      html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n:focus {\n    outline: 0;\n}\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n[hidden] {\n    display: none;\n}\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\na {\n    text-decoration: none;\n    color:inherit;\n}\na:focus {\n    outline: thin dotted;\n}\na:active,\na:hover {\n    outline: 0;\n}\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\nfigure {\n    margin: 0;\n}\nform {\n    margin: 0;\n}\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\nbutton,\ninput {\n    line-height: normal;\n}\nbutton,\nselect {\n    text-transform: none;\n}\nbutton,\nhtml input[type="button"], /* 1 */\ninput[type="reset"],\ninput[type="submit"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    *overflow: visible;  /* 4 */\n}\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\ninput[type="checkbox"],\ninput[type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\ninput[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\nimg {\n    vertical-align: middle;\n}\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\ntextarea {\n    resize: vertical;\n}\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\nhtml,body {\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n    background: ',";\n    color: ",";\n} \n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));s.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(d.a,{theme:{bgColor:"linear-gradient(90deg, rgba(192,189,237,1) 15%, rgba(219,194,194,0.8468429608171394) 42%, rgba(0,212,255,1) 98%);",textColor:"#4B4453",textHighlight:"#923405",highlightShadow:"#C7C3C1"},children:Object(z.jsxs)(l.a,{children:[Object(z.jsx)(un,{}),Object(z.jsx)(bn,{})]})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.9927aeee.chunk.js.map