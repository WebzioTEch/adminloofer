"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[3933],{99876:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(29439),r=a(72791),o=a(64554),i=a(62005),l=a(59434),c=(a(96077),a(61044)),s=a(80184),d=[{field:"id",headerName:"ID",width:90},{field:"name",headerName:"Name",width:150,editable:!0},{field:"email",headerName:"Email",width:150,editable:!0},{field:"created_at",headerName:"Created At",type:"number",width:110,editable:!0}],h=[{id:1,name:"Snow",email:"Jon",created_at:35}];function u(){(0,l.I0)();var e=(0,r.useState)([]),t=(0,n.Z)(e,2),a=t[0],u=t[1];return(0,r.useEffect)((function(){console.log(localStorage.getItem("token"),"customer token");"Bearer ".concat(localStorage.getItem("token"));c.ZP.get("https://loofer.bellazza.in/api/admin/all_users",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e,"res reeees");var t=[];200===e.status&&(e.data.users.map((function(e){t.push(e)})),u(t),console.log({res:e}))})).catch((function(e){console.error({err:e})}))}),[]),(0,s.jsx)(o.Z,{sx:{height:400,width:"100%"},children:(0,s.jsx)(i._$,{rows:a.length?a:h,columns:d,checkboxSelection:!0,disableRowSelectionOnClick:!0})})}},63933:function(e,t,a){a.r(t);var n=a(99876),r=(a(72791),a(64554)),o=a(94721),i=a(80184);t.default=function(){return(0,i.jsx)("div",{children:(0,i.jsxs)(r.Z,{style:{boxShadow:"rgba(0, 0, 0, 0.06) 0px 3px 3px -2px, rgba(0, 0, 0, 0.04) 0px 3px 4px 0px, rgba(0, 0, 0, 0.04) 0px 1px 8px 0px",padding:30,background:"white"},children:[(0,i.jsx)("h2",{children:"Customer List"}),(0,i.jsx)(o.Z,{style:{marginTop:20,marginBottom:20}}),(0,i.jsx)(n.Z,{})]})})}}}]);
//# sourceMappingURL=3933.014479a7.chunk.js.map