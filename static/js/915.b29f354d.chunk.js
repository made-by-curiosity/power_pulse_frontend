"use strict";(self.webpackChunkpower_pulse_frontend=self.webpackChunkpower_pulse_frontend||[]).push([[915],{5834:function(n,e,t){t.d(e,{W:function(){return l}});var i,o=t(168),r=t(3081).Z.div(i||(i=(0,o.Z)(["\n  max-width: 375px;\n  margin: 0 auto;\n  padding: 62px 20px 0 20px;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    padding: 84px 32px 0 32px;\n  }\n  @media screen and (min-width: 1440px) {\n    max-width: 1440px;\n    height: 100vh;\n    padding: 84px 96px 0 96px;\n  }\n"]))),a=t(184),l=function(n){var e=n.children;return(0,a.jsx)(r,{children:e})}},5091:function(n,e,t){t.d(e,{t:function(){return C}});var i,o,r,a,l,s,c,d=t(1413),p=t(9439),u=t(5987),x=t(2791),f=t(168),h=t(3081),m=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),g=h.Z.div(i||(i=(0,f.Z)(["\n  position: relative;\n  width: 100%;\n"]))),b=h.Z.div(o||(o=(0,f.Z)(["\n  position: relative;\n"]))),y=h.Z.label(r||(r=(0,f.Z)(["\n  position: absolute;\n  top: ",";\n  left: ",";\n\n  font-family: 'Roboto', sans-serif;\n  font-size: ",";\n  line-height: ",";\n  color: rgba(239, 237, 232, 0.6);\n\n  transition: top 0.2s ease-out, left 0.2s ease-out;\n\n  "," {\n    top: ",";\n\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.isFocused||n.hasValue?"-16px":"16px"}),(function(n){return n.isFocused||n.hasValue?"0":"14px"}),(function(n){return n.isFocused||n.hasValue?"10px":"14px"}),(function(n){return n.isFocused||n.hasValue?"1.5":"1.29"}),m[1],(function(n){return n.isFocused||n.hasValue?"-16px":"15px"}),(function(n){return n.isFocused||n.hasValue?"12px":"16px"}),(function(n){return n.isFocused||n.hasValue?"1.29":"1.5"})),v=h.Z.input(a||(a=(0,f.Z)(["\n  width: 100%;\n  padding: 14px;\n\n  font-size: 14px;\n  line-height: 1.29;\n\n  color: #efede8;\n\n  background-color: inherit;\n\n  border-radius: 12px;\n  border: 1px solid rgba(239, 237, 232, 0.3);\n\n  outline: none;\n\n  &:hover,\n  &:focus {\n    border-color: #e6533c;\n    & ~ svg {\n      stroke: #e6533c;\n    }\n  }\n\n  ","\n\n  ","\n\n\t  "," {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n\n  ","\n"])),(function(n){return n.className.includes("valid")&&"\n    border-color: #3CBF61;\n\t\t& ~ svg {\n      stroke: #3CBF61;\n    }\n  "}),(function(n){return n.className.includes("invalid")&&"\n    border-color: #D80027;\n\t\t& ~ svg {\n      stroke: #D80027;\n    }\n  "}),m[1],(function(n){return n.inputStyles})),Z=h.Z.div(l||(l=(0,f.Z)(["\n  position: absolute;\n  bottom: -16px;\n  left: 0;\n\n  display: flex;\n  align-items: center;\n  gap: 3px;\n\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 1.5;\n  letter-spacing: 0.12px;\n\n  ","\n\n  ","\n"])),(function(n){return n.className.includes("valid")&&"\n    color: #3CBF61; \n    fill: #3CBF61; \n  "}),(function(n){return n.className.includes("invalid")&&"\n    color: #D80027; \n    fill: #D80027; \n  "})),j=h.Z.button(s||(s=(0,f.Z)(["\n  width: 20px;\n  height: 20px;\n\n  position: absolute;\n  right: 14px;\n  top: 16px;\n\n  cursor: pointer;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n\n  & svg {\n    stroke: #efede8;\n  }\n"]))),w=h.Z.svg(c||(c=(0,f.Z)(["\n  width: 18px;\n  height: 18px;\n\n  position: absolute;\n  right: 14px;\n  top: 17px;\n\n  stroke: #efede8;\n\n  z-index: -1;\n"]))),S=t(4801),k=t(184),z=["calendar","field","form","reference","onClick","valueDate","readOnly"],C=function(n){var e=n.calendar,t=n.field,i=n.form,o=n.reference,r=n.onClick,a=(n.valueDate,n.readOnly),l=(0,u.Z)(n,z),s=l.type,c=l.label,f=void 0===c?"":c,h=l.successFeedback,m=void 0===h||h,C=l.passwordBtn,F=void 0!==C&&C,E=l.autoComplete,D=void 0===E?"on":E,B=l.inputStyles,R=void 0===B?{}:B,W=t.name,L=t.value,N=t.onBlur,q=(0,x.useState)(!1),V=(0,p.Z)(q,2),H=V[0],I=V[1],G=(0,x.useState)(!1),_=(0,p.Z)(G,2),A=_[0],M=_[1],O=i.errors[W],U=i.touched[W],P=L.toString().trim().length>0,J=!!H&&P||U;return(0,k.jsxs)(g,{children:[(0,k.jsxs)(b,{children:[(0,k.jsx)(y,{htmlFor:W,isFocused:H,hasValue:!!L,children:f}),(0,k.jsx)(v,(0,d.Z)((0,d.Z)({},t),{},{id:W,ref:o,type:A?"text":s,autoComplete:D,className:"".concat(J?O?"invalid":m&&"valid":""),onFocus:function(){I(!0)},onBlur:function(n){N(n),I(!1)},onClick:r,inputStyles:R,readOnly:a})),F&&(0,k.jsx)(j,{type:"button",onClick:function(){M((function(n){return!n}))},children:(0,k.jsx)("svg",{width:20,height:20,children:(0,k.jsx)("use",{href:"".concat(S.Z).concat(A?"#icon-eyeoff":"#icon-eye")})})}),e&&(0,k.jsx)(w,{children:(0,k.jsx)("use",{href:"".concat(S.Z,"#icon-calendar")})})]}),J&&(0,k.jsxs)(Z,{"aria-live":"polite",className:"".concat(O?"invalid":m&&"valid"),children:[(0,k.jsx)("svg",{width:13,height:13,children:(0,k.jsx)("use",{href:"".concat(S.Z,"#icon-success")})}),O||m&&"Success ".concat(f.toLowerCase())]})]})}},8284:function(n,e,t){t.d(e,{y:function(){return v}});var i=t(1413),o=t(9439),r=t(5987),a=t(7715),l=t(282),s=t(2114),c=t(1417),d=t(5291),p=t(890),u=t(5705),x=t(184),f=["label","formControlStyling","formLabelStyling","radioStyling","typographyStyling","formControlLabelStyling","radioGroupDirection"],h={mb:2},m={color:"#EFEDE8",fontSize:14,"&.Mui-focused":{color:"#EFEDE8"}},g={color:"rgb(239, 237, 232, 0.6)","&.Mui-checked":{color:"#EF8964"}},b={mb:-1},y={fontSize:14,lineHeight:1.3},v=function(n){var e=n.label,t=n.formControlStyling,v=n.formLabelStyling,Z=n.radioStyling,j=n.typographyStyling,w=n.formControlLabelStyling,S=n.radioGroupDirection,k=(0,r.Z)(n,f),z=(0,u.U$)(k),C=(0,o.Z)(z,1)[0];return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(c.Z,{sx:(0,i.Z)((0,i.Z)({},h),t),children:[(0,x.jsx)(d.Z,{id:C.name,sx:(0,i.Z)((0,i.Z)({},m),v),children:e}),(0,x.jsx)(l.Z,(0,i.Z)((0,i.Z)({},C),{},{row:S,children:k.options.map((function(n){return(0,x.jsx)(s.Z,{value:n.value,sx:(0,i.Z)((0,i.Z)({},b),w),control:(0,x.jsx)(a.Z,{size:"small",sx:(0,i.Z)((0,i.Z)({},g),Z)}),label:(0,x.jsx)(p.Z,{sx:(0,i.Z)((0,i.Z)({},y),j),children:n.label})},n.value)}))}))]})})}},5669:function(n,e,t){t.d(e,{c:function(){return c}});var i,o=t(168),r=t(3081),a=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),l=r.Z.button(i||(i=(0,o.Z)(["\n  cursor: pointer;\n\n  padding: ",";\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.13;\n  color: #efede8;\n\n  background-color: ",";\n\n  border: 1px solid;\n  border-color: ",";\n  border-radius: 12px;\n\n  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;\n\n  &:hover:not([disabled]),\n  &:focus:not([disabled]) {\n    background-color: ",";\n    border-color: ",";\n  }\n\n  &:disabled {\n    color: rgba(239, 237, 232, 0.6);\n  }\n\n  ","\n\n  "," {\n    padding: 16px 60px;\n    padding: ",";\n\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){var e=n.modalButton,t=n.filled;return e?t?"12px 32px":"12px 36px":"12px 40px"}),(function(n){return n.filled?"#e6533c":"transparent"}),(function(n){return n.filled?"#e6533c":"rgba(239, 237, 232, 0.30)"}),(function(n){return n.filled?"#ef8964":"transparent"}),(function(n){return n.filled?"#ef8964":"#e6533c"}),(function(n){return n.btnStyles}),a[1],(function(n){var e=n.modalButton,t=n.filled;return e?t?"14px 32px":"14px 40px":"16px 60px"}),(function(n){var e=n.modalButton,t=n.filled;return e&&t?"16px":"20px"}),(function(n){var e=n.modalButton,t=n.filled;return e&&t?"1.5":"1.2"})),s=t(184),c=function(n){var e=n.type,t=n.text,i=n.filled,o=n.disabled,r=n.btnStyles,a=n.modalButton,c=n.onClick;return(0,s.jsx)(l,{type:e,filled:i,disabled:o,btnStyles:r,modalButton:a,onClick:c,children:t})}},7915:function(n,e,t){t.r(e),t.d(e,{default:function(){return Pn}});var i,o,r,a,l,s,c,d,p,u,x,f,h,m,g,b,y,v,Z,j,w,S,k,z,C,F,E,D=t(9434),B=t(2791),R=t(4217),W=t(5834),L=t(168),N=t(3081),q=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),V=N.Z.div(i||(i=(0,L.Z)(["\n  width: 90px;\n  height: 90px;\n  margin: 0px auto;\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  border: 1px solid #e6533c;\n  border-radius: 50%;\n\n  "," {\n    width: 150px;\n    height: 150px;\n    margin-top: 64px;\n  }\n\n  "," {\n    margin-top: 0px;\n  }\n"])),q[1],q[2]),H=N.Z.svg(o||(o=(0,L.Z)(["\n  width: 62px;\n  height: 62px;\n\n  "," {\n    width: 102px;\n    height: 102px;\n  }\n"])),q[1]),I=N.Z.h2(r||(r=(0,L.Z)(["\n  margin-top: 32px;\n  text-align: center;\n\n  color: #efede8;\n  font-family: Roboto;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.11111;\n\n  "," {\n    font-size: 24px;\n    line-height: 1.16667;\n  }\n"])),q[1]),G=N.Z.h3(a||(a=(0,L.Z)(["\n  margin-top: 4px;\n  text-align: center;\n\n  color: rgba(239, 237, 232, 0.5);\n  font-family: Roboto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.28571;\n\n  "," {\n    margin-top: 8px;\n  }\n"])),q[1]),_=N.Z.button(l||(l=(0,L.Z)(["\n  position: absolute;\n  bottom: 0;\n  translate: 0 +50%;\n\n  border: none;\n  background: none;\n  cursor: pointer;\n"]))),A=N.Z.svg(s||(s=(0,L.Z)(["\n  fill: #e6533c;\n  stroke: #efede8;\n  stroke-width: 0;\n\n  width: 24px;\n  height: 24px;\n  transition-property: transform;\n\n  &:hover {\n    transform: scale(1.2);\n    transition-duration: 400ms;\n  }\n\n  "," {\n    width: 32px;\n    height: 32px;\n  }\n"])),q[1]),M=t(4801),O=t(184),U=(0,O.jsx)(H,{children:(0,O.jsx)("use",{href:M.Z+"#icon-user"})}),P=(0,O.jsx)(A,{children:(0,O.jsx)("use",{href:M.Z+"#icon-addavatar"})}),J=function(n){var e=n.name,t=(n.email,n.avatar),i=void 0===t?U:t;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(V,{children:[i,(0,O.jsx)(_,{type:"button",children:P})]}),(0,O.jsx)(I,{children:e}),(0,O.jsx)(G,{children:"User"})]})},$=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),K=N.Z.div(c||(c=(0,L.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  margin-top: 40px;\n\n  "," {\n    gap: 16px;\n    margin-top: 32px;\n  }\n"])),$[1]),Q=N.Z.div(d||(d=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 157px;\n  height: 96px;\n  padding: 10px;\n  justify-content: space-between;\n\n  border-radius: 12px;\n  border: 1px solid rgba(239, 237, 232, 0.2);\n  background: #e6533c;\n\n  "," {\n    width: 214px;\n    height: 108px;\n    padding: 14px 18px;\n  }\n"])),$[1]),T=N.Z.div(p||(p=(0,L.Z)(["\n  display: flex;\n  ","\n  align-items: center;\n  gap: 6px;\n\n  "," {\n    gap: 8px;\n  }\n"])),"",$[1]),X=N.Z.p(u||(u=(0,L.Z)(["\n  color: rgba(239, 237, 232, 0.8);\n  font-family: Roboto;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.33333;\n\n  "," {\n    line-height: 1.5;\n  }\n"])),$[1]),Y=N.Z.p(x||(x=(0,L.Z)(["\n  color: #efede8;\n  font-family: Roboto;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.11111;\n\n  "," {\n    font-size: 24px;\n    line-height: 1.33333;\n  }\n"])),$[1]),nn=function(n){var e=n.icon,t=n.label,i=n.number;return(0,O.jsxs)(Q,{children:[(0,O.jsxs)(T,{children:[(0,O.jsx)("svg",{width:"20",height:"20",style:{fill:"#EF8964"},children:(0,O.jsx)("use",{href:M.Z+e})}),(0,O.jsx)(X,{children:t})]}),(0,O.jsx)(Y,{children:i})]})},en=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),tn=N.Z.div(f||(f=(0,L.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 40px;\n  align-items: flex-start;\n\n  "," {\n    margin-top: 32px;\n  }\n"])),en[1]),on=N.Z.div(h||(h=(0,L.Z)(["\n  width: 303px;\n\n  color: rgba(239, 237, 232, 0.3);\n  font-family: Roboto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.28571;\n\n  "," {\n    width: 407px;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n"])),en[1]),rn=(0,O.jsx)("svg",{width:"24",height:"24",style:{fill:"#EFA082",stroke:"#EFEDE8",strokeWidth:"0"},children:(0,O.jsx)("use",{href:M.Z+"#icon-warning"})}),an=function(){return(0,O.jsxs)(tn,{children:[rn,(0,O.jsx)(on,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})},ln=t(9273),sn=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),cn=N.Z.button(m||(m=(0,L.Z)(["\n  margin-left: auto;\n  margin-top: 41px;\n  padding: 6px;\n\n  display: flex;\n  justify-content: center;\n  alight-items: center;\n  gap: 8px;\n\n  background: none;\n  border: none;\n  cursor: pointer;\n\n  transition-property: transform;\n\n  &:hover {\n    transform: scale(1.2);\n    transition-duration: 400ms;\n  }\n\n  "," {\n    margin-top: 32px;\n    margin-bottom: 38px;\n  }\n\n  "," {\n    ","\n    margin-bottom: 0px;\n  }\n"])),sn[1],sn[2],""),dn=N.Z.span(g||(g=(0,L.Z)(["\n  color: #efede8;\n  font-family: Roboto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.28571;\n\n  "," {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n"])),sn[1]),pn=(0,O.jsx)("svg",{width:"20",height:"20",style:{stroke:"#E6533C"},children:(0,O.jsx)("use",{href:M.Z+"#icon-logout"})}),un=function(){var n=(0,D.I0)();return(0,O.jsxs)(cn,{type:"button",onClick:function(){n((0,ln.ni)())},children:[(0,O.jsx)(dn,{children:"Logout"}),pn]})},xn=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),fn=N.Z.div(b||(b=(0,L.Z)(["\n  margin-bottom: 18px;\n\n  "," {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    padding-left: 49px;\n\n    margin-bottom: 0px;\n\n    border-left-style: solid;\n    border-width: 1px;\n    border-color: #efede833;\n  }\n"])),xn[2]),hn="#icon-cutlery",mn="Daily calorie intake",gn="#icon-dumbbell",bn="Daily norm of sports",yn="110 min",vn=function(n){var e=n.userInfo,t=e.name,i=e.avatarUrl,o=e.bmr;return(0,O.jsxs)(fn,{children:[(0,O.jsx)(J,{name:t,avatar:""===i?void 0:i}),(0,O.jsxs)(K,{children:[(0,O.jsx)(nn,{icon:hn,label:mn,number:o}),(0,O.jsx)(nn,{icon:gn,label:bn,number:yn})]}),(0,O.jsx)(an,{}),(0,O.jsx)(un,{})]})},Zn=t(5987),jn=t(5705),wn=t(6727),Sn=t(4670),kn=t(5091),zn=t(8284),Cn=t(5669),Fn=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),En=N.Z.p(y||(y=(0,L.Z)(["\n  color: rgba(239, 237, 232, 0.5);\n  font-family: Roboto;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  margin-bottom: 4px;\n\n  "," {\n    font-size: 14px;\n    line-height: 1.28571;\n    margin-bottom: 8px;\n  }\n"])),Fn[1]),Dn=N.Z.div(v||(v=(0,L.Z)(["\n  "," {\n    margin-bottom: 66px;\n  }\n\n  "," {\n    margin-bottom: 54px;\n  }\n\n  "," {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin-bottom: 0px;\n  }\n"])),Fn[0],Fn[1],Fn[2]),Bn=N.Z.div(Z||(Z=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 36px;\n\n  "," {\n    gap: none;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 40px;\n  }\n"])),Fn[1]),Rn=N.Z.div(j||(j=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  ","\n  gap: 36px;\n  ","\n\n  margin-bottom: 20px;\n\n  "," {\n    flex-direction: row;\n    gap: 0;\n    justify-content: space-between;\n\n    margin-bottom: 16px;\n  }\n\n  "," {\n    gap: 14px;\n  }\n"])),"","",Fn[1],Fn[2]),Wn=N.Z.div(w||(w=(0,L.Z)(["\n  display: flex;\n  flex-direction: row;\n  ","\n  gap: 14px;\n  justify-content: space-between;\n\n  ","\n\n  "," {\n    gap: 20px;\n    justify-content: space-between;\n  }\n"])),"","",Fn[1]),Ln=N.Z.div(S||(S=(0,L.Z)(["\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n\n  "," {\n    gap: 32px;\n    justify-content: flex-start;\n    margin-bottom: 16px;\n  }\n"])),Fn[1]),Nn=N.Z.div(k||(k=(0,L.Z)(["\n  ","\n"])),""),qn=N.Z.div(z||(z=(0,L.Z)([""]))),Vn=N.Z.div(C||(C=(0,L.Z)(["\n  margin-bottom: 24px;\n"]))),Hn=["name","email"],In=wn.Ry({name:wn.Z_().required("Name is required"),height:wn.Rx("Number").typeError("Height must be a number").positive("Height must be a positive number.").min(150,"Height must be at least 150 cm").required("Height is required"),currentWeight:wn.Rx().typeError("Height must be a number").min(35,"Current weight must be at least 35 kg").positive("Current weight must be a positive number.").required("Current weight is required"),desiredWeight:wn.Rx().typeError("Height must be a number").min(35,"Desired weight  must be at least 35 kg").positive("Weight must be a positive number.").required("Height is required")}),Gn=function(n){var e=n.userInfo,t=e.name,i=e.email,o=e.userParams,r=o.height,a=o.currentWeight,l=o.desiredWeight,s=o.birthday,c=o.blood,d=o.sex,p=o.levelActivity,u=(0,Sn.Z)("(min-width:768px)"),x={name:t,email:i,height:r,currentWeight:a,desiredWeight:l,birthday:s,blood:c,sex:d,levelActivity:p},f=(0,D.I0)();return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(jn.J9,{initialValues:x,validationSchema:In,onSubmit:function(n,e){var t=n.name,i=(n.email,(0,Zn.Z)(n,Hn));f((0,ln.Ee)({name:t})),f((0,ln.IO)(i))},children:(0,O.jsx)(Dn,{children:(0,O.jsxs)(jn.l0,{children:[(0,O.jsx)(En,{children:"Basic info"}),(0,O.jsxs)(Bn,{children:[(0,O.jsx)(jn.gN,{name:"name",type:"text",autoComplete:"off",successFeedback:!1,component:kn.t,inputStyles:{}}),(0,O.jsx)(jn.gN,{name:"email",type:"text",autoComplete:"off",successFeedback:!1,disabled:"true",component:kn.t,inputStyles:{color:"rgba(239, 237, 232, 0.6)"}})]}),(0,O.jsxs)(Rn,{children:[(0,O.jsxs)(Wn,{children:[(0,O.jsx)(jn.gN,{label:"Height",name:"height",type:"number",autoComplete:"off",successFeedback:!1,component:kn.t,inputStyles:{width:"165px"}}),(0,O.jsx)(jn.gN,{label:"Current Weight",name:"currentWeight",type:"number",autoComplete:"off",successFeedback:!1,component:kn.t,inputStyles:{width:"156px"}})]}),(0,O.jsxs)(Wn,{children:[(0,O.jsx)(jn.gN,{label:"Desired Weight",name:"desiredWeight",type:"number",autoComplete:"off",successFeedback:!1,component:kn.t,inputStyles:{width:"165px"}}),(0,O.jsx)(jn.gN,{name:"birthday",type:"text",autoComplete:"off",successFeedback:!1,component:kn.t,inputStyles:{width:"156px"}})]})]}),(0,O.jsxs)(Ln,{children:[(0,O.jsx)(Nn,{children:(0,O.jsx)(zn.y,{label:"Blood",name:"blood",radioGroupDirection:!0,formControlStyling:{mb:0},formControlLabelStyling:{mb:0,mr:1.1},typographyStyling:u?{fontSize:16}:{fontSize:14},formLabelStyling:u?{fontSize:14,color:"rgba(239, 237, 232, 0.50)"}:{fontSize:12,color:"rgba(239, 237, 232, 0.50)"},options:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"}]})}),(0,O.jsx)(qn,{children:(0,O.jsx)(zn.y,{label:"Sex",name:"sex",radioGroupDirection:!0,formControlStyling:{mb:0},formControlLabelStyling:{mb:0,mr:1.1},typographyStyling:u?{fontSize:16}:{fontSize:14},formLabelStyling:u?{fontSize:14,color:"rgba(239, 237, 232, 0.50)"}:{fontSize:12,color:"rgba(239, 237, 232, 0.50)"},options:[{value:"male",label:"Male"},{value:"female",label:"Female"}]})})]}),(0,O.jsx)(Vn,{children:(0,O.jsx)(zn.y,{label:"Level activity",name:"levelActivity",radioGroupDirection:!1,typographyStyling:u?{fontSize:16}:{fontSize:14},formControlLabelStyling:u?{mb:-1}:{mb:.5},formLabelStyling:u?{mb:.5,fontSize:14,color:"rgba(239, 237, 232, 0.50)"}:{mb:.5,fontSize:12,color:"rgba(239, 237, 232, 0.50)"},options:[{value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}]})}),(0,O.jsx)(Cn.c,{type:"submit",text:"Save",filled:!0,disabled:!1})]})})})})},_n=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),An=N.Z.div(F||(F=(0,L.Z)(["\n  "," {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    margin-top: 32px;\n    margin-bottom: 36px;\n  }\n"])),_n[2]),Mn=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),On=N.Z.h1(E||(E=(0,L.Z)(["\n  margin-top: 40px;\n\n  color: #efede8;\n  font-family: Roboto;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.16667;\n\n  "," {\n    margin-top: 72px;\n\n    font-size: 32px;\n    line-height: 1.375;\n  }\n"])),Mn[1]),Un=function(){return(0,O.jsx)(On,{children:"Profile Settings"})},Pn=function(){var n=(0,D.I0)();(0,B.useEffect)((function(){n((0,ln.n6)())}),[]);var e=(0,D.v9)(R.dy);return(0,O.jsxs)(W.W,{children:[(0,O.jsx)(Un,{}),(0,O.jsxs)(An,{children:[(0,O.jsx)(vn,{userInfo:e}),(0,O.jsx)(Gn,{userInfo:e})]})]})}}}]);
//# sourceMappingURL=915.b29f354d.chunk.js.map