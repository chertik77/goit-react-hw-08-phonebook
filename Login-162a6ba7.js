import{_ as c,r as m,a as M,j as s,u as he,b as xe}from"./index-7073980a.js";import{g as A,a as J,k as fe,s as R,c as be,r as ye,u as O,b as $,d as Pe,e as b,f as q,T as B,h as Le,i as ke,j as Ce,l as je,m as De,B as h,n as L,I as $e,o as _e,C as Re,p as G,q as Y,t as K,F as _,S as y,v as Q,w as N,x as Te,y as Ie,z as ze,A as Fe,D as we,E as Se,G as Me,H as We,J as Ve}from"./validationSchema-a6400e4f.js";function Be(e){return A("MuiLinearProgress",e)}J("MuiLinearProgress",["root","determinate","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft","variantSolid"]);const Ne=["children","className","component","color","size","variant","thickness","determinate","value","style","slots","slotProps"];let X=e=>e,E,H;const Ee=fe(E||(E=X`
  0% {
    left: var(--_LinearProgress-progressInset);
    width: var(--LinearProgress-progressMinWidth);
  }

  25% {
    width: var(--LinearProgress-progressMaxWidth);
  }

  50% {
    left: var(--_LinearProgress-progressLeft);
    width: var(--LinearProgress-progressMinWidth);
  }

  75% {
    width: var(--LinearProgress-progressMaxWidth);
  }

  100% {
    left: var(--_LinearProgress-progressInset);
    width: var(--LinearProgress-progressMinWidth);
  }
`)),He=e=>{const{determinate:r,color:o,variant:n,size:t}=e,l={root:["root",r&&"determinate",o&&`color${b(o)}`,n&&`variant${b(n)}`,t&&`size${b(t)}`]};return q(l,Be,{})},Ue=R("div",{name:"JoyLinearProgress",slot:"Root",overridesResolver:(e,r)=>r.root})(({ownerState:e,theme:r})=>{var o,n,t,l;return c({"--LinearProgress-radius":"var(--LinearProgress-thickness)","--LinearProgress-progressThickness":"var(--LinearProgress-thickness)","--LinearProgress-progressRadius":"max(var(--LinearProgress-radius) - var(--_LinearProgress-padding), min(var(--_LinearProgress-padding) / 2, var(--LinearProgress-radius) / 2))"},e.size==="sm"&&{"--LinearProgress-thickness":"4px"},e.size==="md"&&{"--LinearProgress-thickness":"6px"},e.size==="lg"&&{"--LinearProgress-thickness":"8px"},e.thickness&&{"--LinearProgress-thickness":`${e.thickness}px`},!e.determinate&&{"--LinearProgress-progressMinWidth":"calc(var(--LinearProgress-percent) * 1% / 2)","--LinearProgress-progressMaxWidth":"calc(var(--LinearProgress-percent) * 1%)","--_LinearProgress-progressLeft":"calc(100% - var(--LinearProgress-progressMinWidth) - var(--_LinearProgress-progressInset))","--_LinearProgress-progressInset":"calc(var(--LinearProgress-thickness) / 2 - var(--LinearProgress-progressThickness) / 2)"},{minBlockSize:"var(--LinearProgress-thickness)",boxSizing:"border-box",borderRadius:"var(--LinearProgress-radius)",display:"flex",justifyContent:"center",alignItems:"center",flex:1,padding:"var(--_LinearProgress-padding)",position:"relative"},(o=r.variants[e.variant])==null?void 0:o[e.color],{"--_LinearProgress-padding":"max((var(--LinearProgress-thickness) - 2 * var(--variant-borderWidth, 0px) - var(--LinearProgress-progressThickness)) / 2, 0px)","&::before":{content:'""',display:"block",boxSizing:"inherit",blockSize:"var(--LinearProgress-progressThickness)",borderRadius:"var(--LinearProgress-progressRadius)",backgroundColor:"currentColor",color:"inherit",position:"absolute"}},e.variant==="soft"&&{backgroundColor:r.variants.soft.neutral.backgroundColor,color:(n=r.variants.solid)==null?void 0:n[e.color].backgroundColor},e.variant==="solid"&&{backgroundColor:(t=r.variants.softHover)==null?void 0:t[e.color].backgroundColor,color:(l=r.variants.solid)==null?void 0:l[e.color].backgroundColor})},({ownerState:e})=>e.determinate?{"&::before":{left:"var(--_LinearProgress-padding)",inlineSize:"calc(var(--LinearProgress-percent) * 1% - 2 * var(--_LinearProgress-padding))"}}:be(H||(H=X`
          &::before {
            animation: ${0}
              var(--LinearProgress-circulation, 2.5s ease-in-out 0s infinite normal none running);
          }
        `),Ee),({ownerState:e,theme:r})=>{const{borderRadius:o,height:n}=ye({theme:r,ownerState:e},["borderRadius","height"]);return c({},o!==void 0&&{"--LinearProgress-radius":o},n!==void 0&&{"--LinearProgress-thickness":n})}),Ae=m.forwardRef(function(r,o){const n=O({props:r,name:"JoyLinearProgress"}),{children:t,className:l,component:i,color:a="primary",size:d="md",variant:v="soft",thickness:g,determinate:p=!1,value:u=p?0:25,style:x,slots:f={},slotProps:T={}}=n,I=M(n,Ne),k=c({},n,{component:i,color:a,size:d,variant:v,thickness:g,value:u,determinate:p,instanceSize:r.size}),C=He(k),j=c({},I,{component:i,slots:f,slotProps:T}),[z,F]=$("root",{ref:o,className:Pe(C.root,l),elementType:Ue,externalForwardedProps:j,ownerState:k,additionalProps:c({as:i,role:"progressbar",style:c({},{"--LinearProgress-percent":u},x)},typeof u=="number"&&p&&{"aria-valuenow":Math.round(u)})});return s.jsx(z,c({},F,{children:t}))}),Je=Ae;function Oe(e){return A("MuiLink",e)}const qe=J("MuiLink",["root","disabled","focusVisible","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","focusVisible","variantPlain","variantOutlined","variantSoft","variantSolid","underlineNone","underlineHover","underlineAlways","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs","startDecorator","endDecorator"]),U=qe,Ge=["color","textColor","variant"],Ye=["children","disabled","onBlur","onFocus","level","overlay","underline","endDecorator","startDecorator","component","slots","slotProps"],Ke=e=>{const{level:r,color:o,variant:n,underline:t,focusVisible:l,disabled:i}=e,a={root:["root",o&&`color${b(o)}`,i&&"disabled",l&&"focusVisible",r,t&&`underline${b(t)}`,n&&`variant${b(n)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return q(a,Oe,{})},Qe=R("span",{name:"JoyLink",slot:"StartDecorator",overridesResolver:(e,r)=>r.startDecorator})(({ownerState:e})=>{var r;return c({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Link-gap, 0.375em), 0.75rem)"},typeof e.startDecorator!="string"&&(e.alignItems==="flex-start"||((r=e.sx)==null?void 0:r.alignItems)==="flex-start")&&{marginTop:"2px"})}),Xe=R("span",{name:"JoyLink",slot:"endDecorator",overridesResolver:(e,r)=>r.endDecorator})(({ownerState:e})=>{var r;return c({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Link-gap, 0.25em), 0.5rem)"},typeof e.startDecorator!="string"&&(e.alignItems==="flex-start"||((r=e.sx)==null?void 0:r.alignItems)==="flex-start")&&{marginTop:"2px"})}),Ze=R("a",{name:"JoyLink",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e,ownerState:r})=>{var o,n,t,l,i,a,d;return[c({"--Icon-fontSize":"1.25em","--Icon-color":"currentColor","--CircularProgress-size":"1.25em","--CircularProgress-thickness":"3px"},r.level&&r.level!=="inherit"&&e.typography[r.level],r.level==="inherit"&&{font:"inherit"},r.underline==="none"&&{textDecoration:"none"},r.underline==="hover"&&{textDecoration:"none","&:hover":{"@media (hover: hover)":{textDecorationLine:"underline"}}},r.underline==="always"&&{textDecoration:"underline"},r.startDecorator&&{verticalAlign:"bottom"},{textDecorationThickness:"max(0.08em, 1px)",textUnderlineOffset:"0.15em",display:"inline-flex",alignItems:"center",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:e.vars.radius.xs,padding:0,cursor:"pointer",textDecorationColor:`var(--variant-outlinedBorder, rgba(${(o=e.vars.palette[r.color])==null?void 0:o.mainChannel} / var(--Link-underlineOpacity, 0.72)))`},r.variant?c({paddingBlock:"min(0.1em, 4px)",paddingInline:"0.25em"},!r.nesting&&{marginInline:"-0.25em"}):{color:`var(--variant-plainColor, rgba(${(n=e.vars.palette[r.color])==null?void 0:n.mainChannel} / 1))`,[`&.${U.disabled}`]:{pointerEvents:"none",color:`var(--variant-plainDisabledColor, rgba(${(t=e.vars.palette[r.color])==null?void 0:t.mainChannel} / 0.6))`}},{userSelect:r.component==="button"?"none":void 0,MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},r.overlay?{position:"initial","&::after":{content:'""',display:"block",position:"absolute",top:0,left:0,bottom:0,right:0,borderRadius:"var(--unstable_actionRadius, inherit)",margin:"var(--unstable_actionMargin)"},[`${e.focus.selector}`]:{"&::after":e.focus.default}}:{position:"relative",[e.focus.selector]:e.focus.default}),r.variant&&c({},(l=e.variants[r.variant])==null?void 0:l[r.color],{"&:hover":{"@media (hover: hover)":(i=e.variants[`${r.variant}Hover`])==null?void 0:i[r.color]},"&:active":(a=e.variants[`${r.variant}Active`])==null?void 0:a[r.color],[`&.${U.disabled}`]:(d=e.variants[`${r.variant}Disabled`])==null?void 0:d[r.color]})]}),er=m.forwardRef(function(r,o){const n=O({props:r,name:"JoyLink"}),{color:t="primary",textColor:l,variant:i}=n,a=M(n,Ge),d=m.useContext(B),v=m.useContext(Le),g=ke(c({},a,{color:l})),{children:p,disabled:u=!1,onBlur:x,onFocus:f,level:T="body-md",overlay:I=!1,underline:k="hover",endDecorator:C,startDecorator:j,component:z,slots:F={},slotProps:ee={}}=g,re=M(g,Ye),se=d||v?r.level||"inherit":T,{isFocusVisibleRef:W,onBlur:oe,onFocus:ae,ref:ne}=Ce(),[ie,V]=m.useState(!1),te=je(o,ne),le=P=>{oe(P),W.current===!1&&V(!1),x&&x(P)},ce=P=>{ae(P),W.current===!0&&V(!0),f&&f(P)},D=c({},g,{color:t,disabled:u,focusVisible:ie,underline:k,variant:i,level:se,overlay:I,nesting:d}),w=Ke(D),S=c({},re,{component:z,slots:F,slotProps:ee}),[de,pe]=$("root",{additionalProps:{onBlur:le,onFocus:ce},ref:te,className:w.root,elementType:Ze,externalForwardedProps:S,ownerState:D}),[ue,ge]=$("startDecorator",{className:w.startDecorator,elementType:Qe,externalForwardedProps:S,ownerState:D}),[me,ve]=$("endDecorator",{className:w.endDecorator,elementType:Xe,externalForwardedProps:S,ownerState:D});return s.jsx(B.Provider,{value:!0,children:s.jsxs(de,c({},pe,{children:[j&&s.jsx(ue,c({},ge,{children:j})),De(p,["Skeleton"])?m.cloneElement(p,{variant:p.props.variant||"inline"}):p,C&&s.jsx(me,c({},ve,{children:C}))]}))})}),rr=er,sr=()=>s.jsx(h,{component:"footer",sx:{py:3},children:s.jsxs(L,{level:"body-xs",textAlign:"center",children:["© PhoneBook ",new Date().getFullYear()]})}),or=()=>s.jsxs(h,{component:"header",sx:{py:3,display:"flex",justifyContent:"space-between"},children:[s.jsxs(h,{sx:{gap:2,display:"flex",alignItems:"center"},children:[s.jsx($e,{variant:"soft",color:"primary",size:"sm",children:s.jsx(_e,{})}),s.jsx(L,{level:"title-lg",children:"PhoneBook"})]}),s.jsx(Re,{})]}),ar=()=>s.jsx(h,{sx:e=>({height:"100%",position:"fixed",right:0,top:0,bottom:0,left:"clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",transition:"background-image var(--Transition-duration), left var(--Transition-duration) !important",transitionDelay:"calc(var(--Transition-duration) + 0.1s)",backgroundColor:"background.level1",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:"url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",[e.getColorSchemeSelector("dark")]:{backgroundImage:"url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)"}})}),Z=({error:e,type:r})=>r==="login"?e&&s.jsx("small",{className:"p-error",children:"You have entered email or password incorrect, please try again."}):e&&s.jsx("small",{className:"p-error",children:"A user with the same email already exists, please try again."}),nr=()=>{var v,g;const[e,{isLoading:r,error:o}]=he(),{reset:n,register:t,handleSubmit:l,formState:{errors:i,isValid:a}}=G({mode:"onChange",resolver:Y(K(["email","loginpassword"]))}),d=async({email:p,loginpassword:u})=>{await e({email:p,password:u}),n()};return s.jsxs("form",{autoComplete:"on",onSubmit:l(d),children:[s.jsx(_,{label:"Email",type:"email",register:t("email"),error:i==null?void 0:i.email,helperText:(v=i==null?void 0:i.email)==null?void 0:v.message,autoComplete:"email"}),s.jsx(_,{label:"Password",type:"password",register:t("loginpassword"),error:i==null?void 0:i.loginpassword,helperText:(g=i==null?void 0:i.loginpassword)==null?void 0:g.message,autoComplete:"current-password"}),s.jsxs(y,{sx:{mt:2,gap:2},children:[s.jsx(Z,{error:o,type:"login"}),s.jsx(Q,{type:"submit",fullWidth:!0,loading:r,disabled:!a,children:"Sign in"})]})]})},ir=m.forwardRef(({onChange:e,value:r,...o},n)=>{const[t,l]=m.useState(r||"");m.useEffect(()=>{l(r||"")},[r]);const i=d=>{l(d.target.value),e(d.target.value)},a=N(t);return s.jsxs(y,{spacing:.5,sx:{"--hue":Math.min(t.length*10,120)},children:[s.jsx(Te,{type:"password",value:t,onChange:i,ref:n,...o,autoComplete:"current-password"}),s.jsx(Je,{determinate:!0,size:"sm",value:N(t),sx:{bgcolor:"background.level3",color:"hsl(var(--hue) 80% 40%)"}}),s.jsxs(L,{level:"body-xs",sx:{alignSelf:"flex-end",color:"hsl(var(--hue) 80% 30%)"},children:[a===25&&"Very weak - add numbers, caps, or symbols",a===50&&"Weak - try adding uppercase letters or special characters",a===75&&"Strong - try adding special characters for extra security",a===100&&"Very strong - your password is secure"]})]})}),tr=()=>{var g,p;const[e,{isLoading:r,error:o}]=xe(),{reset:n,handleSubmit:t,register:l,control:i,formState:{errors:a,isValid:d}}=G({mode:"onChange",resolver:Y(K(["name","email","signuppassword"]))}),v=async({name:u,email:x,signuppassword:f})=>{await e({name:u,email:x,password:f}),n()};return s.jsxs("form",{autoComplete:"on",onSubmit:t(v),children:[s.jsx(_,{error:o==null?void 0:o.name,label:"Name",register:l("name"),autoComplete:"given-name",type:"text",helperText:(g=a==null?void 0:a.name)==null?void 0:g.message}),s.jsx(_,{error:o==null?void 0:o.email,label:"Email",register:l("email"),autoComplete:"email",type:"email",helperText:(p=a==null?void 0:a.email)==null?void 0:p.message}),s.jsxs(Ie,{error:!!(a!=null&&a.signuppassword),children:[s.jsx(ze,{children:"Password"}),s.jsx(Fe,{name:"signuppassword",control:i,render:({field:u})=>s.jsx(ir,{...u})}),(a==null?void 0:a.signuppassword)&&s.jsxs(we,{children:[s.jsx(Se,{}),a.signuppassword.message]})]}),s.jsxs(y,{sx:{mt:2,gap:2},children:[s.jsx(Z,{error:o,type:"signup"}),s.jsx(Q,{type:"submit",fullWidth:!0,loading:r,disabled:!d,children:"Sign up"})]})]})},lr=()=>{const[e,r]=m.useState(!1);return s.jsxs(h,{sx:{my:"auto",py:2,pb:5,display:"flex",flexDirection:"column",gap:2,width:400,maxWidth:"100%",mx:"auto",borderRadius:"sm","& form":{display:"flex",flexDirection:"column",gap:2}},children:[s.jsx(y,{sx:{mb:2,gap:4},children:s.jsxs(y,{sx:{gap:1},children:[s.jsx(L,{level:"h3",children:e?"Sign up":"Sign in"}),s.jsxs(L,{level:"body-sm",children:[e?"Have an account?":"New to PhoneBook?"," ",s.jsx(rr,{level:"title-sm",onClick:()=>r(!e),children:e?"Sign in!":"Sign up!"})]})]})}),s.jsx(y,{sx:{mt:2,gap:4},children:e?s.jsx(tr,{}):s.jsx(nr,{})})]})},pr=()=>s.jsxs(Me,{defaultMode:"system",disableTransitionOnChange:!0,children:[s.jsx(We,{}),s.jsx(Ve,{styles:{":root":{"--Collapsed-breakpoint":"769px","--Cover-width":"50vw","--Form-maxWidth":"800px","--Transition-duration":"0.4s"}}}),s.jsx(h,{sx:e=>({width:"clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",transition:"width var(--Transition-duration)",transitionDelay:"calc(var(--Transition-duration) + 0.1s)",position:"relative",zIndex:1,display:"flex",justifyContent:"flex-end",backdropFilter:"blur(12px)",backgroundColor:"rgba(255 255 255 / 0.2)",[e.getColorSchemeSelector("dark")]:{backgroundColor:"rgba(19 19 24 / 0.4)"}}),children:s.jsxs(h,{sx:{display:"flex",flexDirection:"column",minHeight:"100dvh",width:"clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",maxWidth:"100%",px:2},children:[s.jsx(or,{}),s.jsx(lr,{}),s.jsx(sr,{})]})}),s.jsx(ar,{})]});export{pr as default};
