"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[7238],{72965:function(e,t,i){var r=i(29439),n=i(72791),a=i(55705),o=i(64554),l=i(94721),d=i(61889),s=i(94294),c=i(61044),h=i(26727),u=i(57689),p=i(80184);t.Z=function(e){var t=e.faqData,i=e.mode,g=e.onSuccess,v=e.onCancel,f=e.successMsg,x=((0,u.s0)(),(0,n.useState)("")),m=(0,r.Z)(x,2),w=m[0],b=m[1],Z={question:(null===t||void 0===t?void 0:t.question)||"",answer:(null===t||void 0===t?void 0:t.answer)||""};(0,n.useEffect)((function(){t&&(console.log(t,"faqData"),t.faqData?(console.log(t.faqData,"faqDatafaqData"),console.log("true faq")):console.log("false faq"))}),[t]);var j=(0,n.useState)({question:"",answer:""}),y=(0,r.Z)(j,2),S=(y[0],y[1],h.Ry({question:h.Z_().required("Question is required"),answer:h.Z_().required("Answer is required")}));return(0,p.jsx)(a.J9,{initialValues:Z,validationSchema:S,onSubmit:"edit"===i?g:function(e,t){var i=t.resetForm;setTimeout((function(){b("")}),2e3);try{var r=new FormData;r.append("question",e.question),r.append("answer",e.answer);var n={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};c.ZP.post("https://loofer.bellazza.in/api/admin/faq",r,n).then((function(e){200===e.status&&(b("FAQ added successfully"),i()),console.log({res:e})})).catch((function(e){console.error({err:e})}))}catch(a){console.error("Error:",a)}},children:function(e){var t=e.errors;e.setFieldValue;return(0,p.jsx)(a.l0,{children:(0,p.jsx)(o.Z,{style:{padding:10},children:(0,p.jsxs)(o.Z,{style:{boxShadow:"rgba(0, 0, 0, 0.06) 0px 3px 3px -2px, rgba(0, 0, 0, 0.04) 0px 3px 4px 0px, rgba(0, 0, 0, 0.04) 0px 1px 8px 0px",padding:30,background:"white"},children:[(0,p.jsx)("h2",{children:"edit"===i?"Edit FAQ":"Add New FAQ"}),(0,p.jsx)(l.Z,{style:{marginTop:20,marginBottom:20}}),(0,p.jsxs)(d.ZP,{container:!0,style:{padding:10},spacing:4,children:[w?(0,p.jsx)("div",{style:{color:"green",marginBottom:10},children:w}):f&&(0,p.jsx)("div",{style:{color:"green",marginBottom:10},children:f}),(0,p.jsxs)(d.ZP,{item:!0,xs:12,lg:12,children:[(0,p.jsx)(a.gN,{name:"question",type:"text",placeHolder:"Question",style:{padding:10,width:"100%",borderRadius:5,border:null!==t&&void 0!==t&&t.question?"2px solid red":"1px solid",marginTop:10},inputProps:{style:{padding:12}}}),(0,p.jsx)("br",{}),(0,p.jsx)(a.Bc,{name:"question",component:"div",style:{color:"red",fontSize:12}})]}),(0,p.jsxs)(d.ZP,{item:!0,xs:12,lg:12,children:[(0,p.jsx)(a.gN,{name:"answer",type:"text",placeHolder:"Answer",style:{padding:10,width:"100%",borderRadius:5,border:null!==t&&void 0!==t&&t.answer?"2px solid red":"1px solid",marginTop:10},inputProps:{style:{padding:12}}}),(0,p.jsx)("br",{}),(0,p.jsx)(a.Bc,{name:"answer",component:"div",style:{color:"red",fontSize:12}})]}),"edit"===i?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.ZP,{item:!0,xs:6,lg:3,children:(0,p.jsx)(s.Z,{type:"submit",style:{background:"rgb(25, 118, 210)",color:"white",marginTop:30,borderRadius:5,width:"100%"},children:"Update"})}),(0,p.jsx)(d.ZP,{item:!0,xs:6,lg:3,children:(0,p.jsx)(s.Z,{type:"button",onClick:v,style:{background:"rgb(25, 118, 210)",color:"white",marginTop:30,borderRadius:5,width:"100%"},children:"Cancle"})})]}):(0,p.jsx)(d.ZP,{item:!0,xs:12,lg:3,children:(0,p.jsx)(s.Z,{type:"submit",style:{background:"rgb(25, 118, 210)",color:"white",marginTop:30,borderRadius:5,width:"100%"},children:"Submit"})})]})]})})})}})}},87238:function(e,t,i){i.r(t);var r=i(72965),n=(i(72791),i(80184));t.default=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(r.Z,{})})}},94721:function(e,t,i){var r=i(63366),n=i(87462),a=i(72791),o=i(59278),l=i(94419),d=i(12065),s=i(66934),c=i(31402),h=i(90133),u=i(80184),p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,i=e.ownerState;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,d.Fq)(t.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.ownerState;return(0,n.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(function(e){var t=e.theme,i=e.ownerState;return(0,n.Z)({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.theme,i=e.ownerState;return(0,n.Z)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.ownerState;return(0,n.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),v=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var i=e.ownerState;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,i=e.ownerState;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),f=a.forwardRef((function(e,t){var i=(0,c.Z)({props:e,name:"MuiDivider"}),a=i.absolute,d=void 0!==a&&a,s=i.children,f=i.className,x=i.component,m=void 0===x?s?"div":"hr":x,w=i.flexItem,b=void 0!==w&&w,Z=i.light,j=void 0!==Z&&Z,y=i.orientation,S=void 0===y?"horizontal":y,q=i.role,A=void 0===q?"hr"!==m?"separator":void 0:q,R=i.textAlign,C=void 0===R?"center":R,k=i.variant,D=void 0===k?"fullWidth":k,P=(0,r.Z)(i,p),B=(0,n.Z)({},i,{absolute:d,component:m,flexItem:b,light:j,orientation:S,role:A,textAlign:C,variant:D}),I=function(e){var t=e.absolute,i=e.children,r=e.classes,n=e.flexItem,a=e.light,o=e.orientation,d=e.textAlign,s={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===o&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===o&&"withChildrenVertical","right"===d&&"vertical"!==o&&"textAlignRight","left"===d&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(s,h.V,r)}(B);return(0,u.jsx)(g,(0,n.Z)({as:m,className:(0,o.Z)(I.root,f),role:A,ref:t,ownerState:B},P,{children:s?(0,u.jsx)(v,{className:I.wrapper,ownerState:B,children:s}):null}))}));f.muiSkipListHighlight=!0,t.Z=f},90133:function(e,t,i){i.d(t,{V:function(){return a}});var r=i(75878),n=i(21217);function a(e){return(0,n.Z)("MuiDivider",e)}var o=(0,r.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o}}]);
//# sourceMappingURL=7238.530743b3.chunk.js.map