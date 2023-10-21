"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[2131],{85523:function(e,n,r){r.d(n,{Z:function(){return R}});var t=r(4942),o=r(63366),a=r(87462),i=r(72791),l=r(59278),c=r(94419),s=r(52930),d=r(36314),u=r(20890),p=r(14036),m=r(66934),f=r(31402),v=r(75878),b=r(21217);function h(e){return(0,b.Z)("MuiFormControlLabel",e)}var Z=(0,v.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),g=r(76147),k=r(80184),y=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],P=(0,m.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[(0,t.Z)({},"& .".concat(Z.label),n.label),n.root,n["labelPlacement".concat((0,p.Z)(r.labelPlacement))]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,a.Z)((0,t.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(Z.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,t.Z)({},"& .".concat(Z.label),(0,t.Z)({},"&.".concat(Z.disabled),{color:(n.vars||n).palette.text.disabled})))})),x=(0,m.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,n){return n.asterisk}})((function(e){var n=e.theme;return(0,t.Z)({},"&.".concat(Z.error),{color:(n.vars||n).palette.error.main})})),R=i.forwardRef((function(e,n){var r,t,m=(0,f.Z)({props:e,name:"MuiFormControlLabel"}),v=m.className,b=m.componentsProps,Z=void 0===b?{}:b,R=m.control,w=m.disabled,F=m.disableTypography,S=m.label,C=m.labelPlacement,N=void 0===C?"end":C,B=m.required,j=m.slotProps,q=void 0===j?{}:j,L=(0,o.Z)(m,y),M=(0,s.Z)(),I=null!=(r=null!=w?w:R.props.disabled)?r:null==M?void 0:M.disabled,T=null!=B?B:R.props.required,E={disabled:I,required:T};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof R.props[e]&&"undefined"!==typeof m[e]&&(E[e]=m[e])}));var A=(0,g.Z)({props:m,muiFormControl:M,states:["error"]}),D=(0,a.Z)({},m,{disabled:I,labelPlacement:N,required:T,error:A.error}),O=function(e){var n=e.classes,r=e.disabled,t=e.labelPlacement,o=e.error,a=e.required,i={root:["root",r&&"disabled","labelPlacement".concat((0,p.Z)(t)),o&&"error",a&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",o&&"error"]};return(0,c.Z)(i,h,n)}(D),G=null!=(t=q.typography)?t:Z.typography,z=S;return null==z||z.type===u.Z||F||(z=(0,k.jsx)(u.Z,(0,a.Z)({component:"span"},G,{className:(0,l.Z)(O.label,null==G?void 0:G.className),children:z}))),(0,k.jsxs)(P,(0,a.Z)({className:(0,l.Z)(O.root,v),ownerState:D,ref:n},L,{children:[i.cloneElement(R,E),T?(0,k.jsxs)(d.Z,{direction:"row",alignItems:"center",children:[z,(0,k.jsxs)(x,{ownerState:D,"aria-hidden":!0,className:O.asterisk,children:["\u2009","*"]})]}):z]}))}))},36314:function(e,n,r){r.d(n,{Z:function(){return S}});var t=r(4942),o=r(63366),a=r(87462),i=r(72791),l=r(30831),c=r(82466),s=r(94419),d=r(21217),u=r(93457),p=r(86083),m=r(78519),f=r(85080),v=r(51184),b=r(45682),h=r(80184),Z=["component","direction","spacing","divider","children","className","useFlexGap"],g=(0,f.Z)(),k=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function y(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:g})}function P(e,n){var r=i.Children.toArray(e).filter(Boolean);return r.reduce((function(e,t,o){return e.push(t),o<r.length-1&&e.push(i.cloneElement(n,{key:"separator-".concat(o)})),e}),[])}var x=function(e){var n=e.ownerState,r=e.theme,o=(0,a.Z)({display:"flex",flexDirection:"column"},(0,v.k9)({theme:r},(0,v.P$)({values:n.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var i=(0,b.hB)(r),l=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof n.spacing&&null!=n.spacing[r]||"object"===typeof n.direction&&null!=n.direction[r])&&(e[r]=!0),e}),{}),s=(0,v.P$)({values:n.direction,base:l}),d=(0,v.P$)({values:n.spacing,base:l});"object"===typeof s&&Object.keys(s).forEach((function(e,n,r){if(!s[e]){var t=n>0?s[r[n-1]]:"column";s[e]=t}}));o=(0,c.Z)(o,(0,v.k9)({theme:r},d,(function(e,r){return n.useFlexGap?{gap:(0,b.NA)(i,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,t.Z)({},"margin".concat((o=r?s[r]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,b.NA)(i,e))};var o})))}return o=(0,v.dt)(r.breakpoints,o)};var R=r(66934),w=r(31402),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,r=void 0===n?k:n,t=e.useThemeProps,c=void 0===t?y:t,u=e.componentName,p=void 0===u?"MuiStack":u,f=r(x),v=i.forwardRef((function(e,n){var r=c(e),t=(0,m.Z)(r),i=t.component,u=void 0===i?"div":i,v=t.direction,b=void 0===v?"column":v,g=t.spacing,k=void 0===g?0:g,y=t.divider,x=t.children,R=t.className,w=t.useFlexGap,F=void 0!==w&&w,S=(0,o.Z)(t,Z),C={direction:b,spacing:k,useFlexGap:F},N=(0,s.Z)({root:["root"]},(function(e){return(0,d.Z)(p,e)}),{});return(0,h.jsx)(f,(0,a.Z)({as:u,ownerState:C,ref:n,className:(0,l.Z)(N.root,R)},S,{children:y?P(x,y):x}))}));return v}({createStyledComponent:(0,R.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,w.Z)({props:e,name:"MuiStack"})}}),S=F},97278:function(e,n,r){r.d(n,{Z:function(){return y}});var t=r(29439),o=r(63366),a=r(87462),i=r(72791),l=r(59278),c=r(94419),s=r(14036),d=r(66934),u=r(98278),p=r(52930),m=r(23701),f=r(75878),v=r(21217);function b(e){return(0,v.Z)("PrivateSwitchBase",e)}(0,f.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var h=r(80184),Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,d.ZP)(m.Z)((function(e){var n=e.ownerState;return(0,a.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),k=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),y=i.forwardRef((function(e,n){var r=e.autoFocus,i=e.checked,d=e.checkedIcon,m=e.className,f=e.defaultChecked,v=e.disabled,y=e.disableFocusRipple,P=void 0!==y&&y,x=e.edge,R=void 0!==x&&x,w=e.icon,F=e.id,S=e.inputProps,C=e.inputRef,N=e.name,B=e.onBlur,j=e.onChange,q=e.onFocus,L=e.readOnly,M=e.required,I=void 0!==M&&M,T=e.tabIndex,E=e.type,A=e.value,D=(0,o.Z)(e,Z),O=(0,u.Z)({controlled:i,default:Boolean(f),name:"SwitchBase",state:"checked"}),G=(0,t.Z)(O,2),z=G[0],$=G[1],_=(0,p.Z)(),H=v;_&&"undefined"===typeof H&&(H=_.disabled);var W="checkbox"===E||"radio"===E,J=(0,a.Z)({},e,{checked:z,disabled:H,disableFocusRipple:P,edge:R}),K=function(e){var n=e.classes,r=e.checked,t=e.disabled,o=e.edge,a={root:["root",r&&"checked",t&&"disabled",o&&"edge".concat((0,s.Z)(o))],input:["input"]};return(0,c.Z)(a,b,n)}(J);return(0,h.jsxs)(g,(0,a.Z)({component:"span",className:(0,l.Z)(K.root,m),centerRipple:!0,focusRipple:!P,disabled:H,tabIndex:null,role:void 0,onFocus:function(e){q&&q(e),_&&_.onFocus&&_.onFocus(e)},onBlur:function(e){B&&B(e),_&&_.onBlur&&_.onBlur(e)},ownerState:J,ref:n},D,{children:[(0,h.jsx)(k,(0,a.Z)({autoFocus:r,checked:i,defaultChecked:f,className:K.input,disabled:H,id:W?F:void 0,name:N,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;$(n),j&&j(e,n)}},readOnly:L,ref:C,required:I,ownerState:J,tabIndex:T,type:E},"checkbox"===E&&void 0===A?{}:{value:A},S)),z?d:w]}))}))},93457:function(e,n,r){var t=(0,r(44046).ZP)();n.Z=t}}]);
//# sourceMappingURL=2131.a9c9fbc6.chunk.js.map