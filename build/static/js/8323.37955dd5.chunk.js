"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[8323],{88323:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var i=t(72791),o=t(29439),s=t(55705),n=t(26727),a=t(61889),d=t(94294),c=t(21830),u=t.n(c),l=t(80184),p=(n.Ry().shape({color:n.Z_().required("Color is required"),discount_amt:n.Rx().required("Discount Amount is required"),discount_quantity:n.Rx().required("Max. Qty Discount is Applied To is required"),max_quantity:n.Rx().required("Discount Qty Step(Buy X) is required"),ship_charges:n.Z_().required("Apply to Shipping Amount is required"),free_shipping:n.Z_().required("Free Shipping is required"),stop_processing:n.Z_().required("Stop Further Rules Processing is required"),reward_pts:n.Rx().required("Reward Points is required")}),function(){var e=(0,i.useState)(JSON.parse(String(localStorage.getItem("coupon_list")))||[]),r=(0,o.Z)(e,2);r[0],r[1];return(0,l.jsx)(s.J9,{initialValues:{color:"",discount_amt:"",discount_quantity:"",max_quantity:"",ship_charges:"",free_shipping:"",stop_processing:"",reward_pts:"",code:"",type:"",value:"",status:""},onSubmit:function(e){!function(e){console.log("values",e);var r=new FormData;r.append("code",e.code),r.append("status",e.status),r.append("type",e.type),r.append("value",e.code);var t={method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:r};fetch("https://loofer.bellazza.in/api/admin/add_coupon",t).then((function(e){console.log(e),200==e.status?u().fire({title:"Coupon Saved",text:"You can close this window",icon:"success"}):u().fire({title:"Coupon Status",text:"You are not authorized as admin",icon:"error"})})).catch((function(e){e&&u().fire({title:"Coupon Status",text:"You are not authorized as admin",icon:"error"}),console.error({err:e})}))}(e),console.log("values",e)},children:function(e){e.errors;return(0,l.jsx)(s.l0,{children:(0,l.jsxs)(a.ZP,{container:!0,spacing:4,children:[(0,l.jsxs)(a.ZP,{item:!0,xs:12,lg:6,children:[(0,l.jsx)("span",{style:{color:"rgba(88, 89, 91, 1)"},children:"Select Coupon Type"}),(0,l.jsxs)(s.gN,{as:"select",name:"type",style:{padding:10,width:"100%",borderRadius:5,border:"1px solid",marginTop:10},children:[(0,l.jsx)("option",{value:""}),(0,l.jsx)("option",{value:"1",children:"Fixed Price"}),(0,l.jsx)("option",{value:"2",children:"Percentage "})]}),(0,l.jsx)(s.Bc,{name:"color",component:"div",className:"error"})]}),(0,l.jsxs)(a.ZP,{item:!0,xs:12,lg:6,children:[(0,l.jsx)("span",{style:{color:"rgba(88, 89, 91, 1)"},children:"Coupon"}),(0,l.jsx)(s.gN,{name:"code",type:"text",style:{padding:10,width:"100%",borderRadius:5,border:"1px solid",marginTop:10}}),(0,l.jsx)(s.Bc,{name:"discount_amt",component:"div",className:"error"})]}),(0,l.jsxs)(a.ZP,{item:!0,xs:12,lg:6,children:[(0,l.jsx)("span",{style:{color:"rgba(88, 89, 91, 1)"},children:"Amount"}),(0,l.jsx)(s.gN,{name:"value",type:"text",style:{padding:10,width:"100%",borderRadius:5,border:"1px solid",marginTop:10}}),(0,l.jsx)(s.Bc,{name:"discount_quantity",component:"div",className:"error"})]}),(0,l.jsxs)(a.ZP,{item:!0,xs:12,lg:6,children:[(0,l.jsx)("span",{style:{color:"rgba(88, 89, 91, 1)"},children:"Status "}),(0,l.jsxs)(s.gN,{as:"select",name:"status",style:{padding:10,width:"100%",borderRadius:5,border:"1px solid",marginTop:10},children:[(0,l.jsx)("option",{value:""}),(0,l.jsx)("option",{value:"1",selected:!0,children:"Active"}),(0,l.jsx)("option",{value:"0",children:"Inactive "})]}),(0,l.jsx)(s.Bc,{name:"color",component:"div",className:"error"})]}),(0,l.jsx)(a.ZP,{item:!0,xs:12,lg:3,children:(0,l.jsx)(d.Z,{type:"submit",style:{background:"red",color:"white",marginTop:30,borderRadius:5,width:"100%"},children:"Save"})})]})})}})}),x=function(){return(0,l.jsx)("div",{children:(0,l.jsx)(p,{})})}}}]);
//# sourceMappingURL=8323.37955dd5.chunk.js.map