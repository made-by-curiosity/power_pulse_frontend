"use strict";(self.webpackChunkpower_pulse_frontend=self.webpackChunkpower_pulse_frontend||[]).push([[915],{5834:function(n,e,t){t.d(e,{W:function(){return a}});var i,o=t(168),r=t(3081).Z.div(i||(i=(0,o.Z)(["\n  max-width: 375px;\n  margin: 0 auto;\n  padding: 62px 20px 0 20px;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    padding: 84px 32px 0 32px;\n  }\n  @media screen and (min-width: 1440px) {\n    max-width: 1440px;\n    padding: 84px 96px 0 96px;\n  }\n"]))),l=t(184),a=function(n){var e=n.children;return(0,l.jsx)(r,{children:e})}},5091:function(n,e,t){t.d(e,{t:function(){return F}});var i,o,r,l,a,s,d,c=t(1413),p=t(9439),u=t(5987),x=t(2791),f=t(168),h=t(3081),m=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),g=h.Z.div(i||(i=(0,f.Z)(["\n  position: relative;\n  width: 100%;\n"]))),b=h.Z.div(o||(o=(0,f.Z)(["\n  position: relative;\n"]))),y=h.Z.label(r||(r=(0,f.Z)(["\n  position: absolute;\n  top: ",";\n  left: ",";\n\n  font-family: 'Roboto', sans-serif;\n  font-size: ",";\n  line-height: ",";\n  color: rgba(239, 237, 232, 0.6);\n\n  transition: top 0.2s ease-out, left 0.2s ease-out;\n\n  "," {\n    top: ",";\n\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.isFocused||n.hasValue?"-16px":"16px"}),(function(n){return n.isFocused||n.hasValue?"0":"14px"}),(function(n){return n.isFocused||n.hasValue?"10px":"14px"}),(function(n){return n.isFocused||n.hasValue?"1.5":"1.29"}),m[1],(function(n){return n.isFocused||n.hasValue?"-16px":"15px"}),(function(n){return n.isFocused||n.hasValue?"12px":"16px"}),(function(n){return n.isFocused||n.hasValue?"1.29":"1.5"})),v=h.Z.input(l||(l=(0,f.Z)(["\n  width: 100%;\n  padding: 14px;\n\n  font-size: 14px;\n  line-height: 1.29;\n\n  color: #efede8;\n\n  background-color: inherit;\n\n  border-radius: 12px;\n  border: 1px solid rgba(239, 237, 232, 0.3);\n\n  outline: none;\n\n  &:hover,\n  &:focus {\n    border-color: #e6533c;\n    & ~ svg {\n      stroke: #e6533c;\n    }\n  }\n\n  ","\n\n  ","\n\n\t  "," {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n\n  ","\n"])),(function(n){return n.className.includes("valid")&&"\n    border-color: #3CBF61;\n\t\t& ~ svg {\n      stroke: #3CBF61;\n    }\n  "}),(function(n){return n.className.includes("invalid")&&"\n    border-color: #D80027;\n\t\t& ~ svg {\n      stroke: #D80027;\n    }\n  "}),m[1],(function(n){return n.inputStyles})),Z=h.Z.div(a||(a=(0,f.Z)(["\n  position: absolute;\n  bottom: -16px;\n  left: 0;\n\n  display: flex;\n  align-items: center;\n  gap: 3px;\n\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 1.5;\n  letter-spacing: 0.12px;\n\n  ","\n\n  ","\n"])),(function(n){return n.className.includes("valid")&&"\n    color: #3CBF61; \n    fill: #3CBF61; \n  "}),(function(n){return n.className.includes("invalid")&&"\n    color: #D80027; \n    fill: #D80027; \n  "})),j=h.Z.button(s||(s=(0,f.Z)(["\n  width: 20px;\n  height: 20px;\n\n  position: absolute;\n  right: 14px;\n  top: 16px;\n\n  cursor: pointer;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n\n  & svg {\n    stroke: #efede8;\n  }\n"]))),w=h.Z.svg(d||(d=(0,f.Z)(["\n  width: 18px;\n  height: 18px;\n\n  position: absolute;\n  right: 14px;\n  top: 17px;\n\n  stroke: #efede8;\n\n  z-index: -1;\n"]))),S=t(4801),k=t(184),z=["calendar","field","form","reference","onClick","valueDate","readOnly"],F=function(n){var e=n.calendar,t=n.field,i=n.form,o=n.reference,r=n.onClick,l=(n.valueDate,n.readOnly),a=(0,u.Z)(n,z),s=a.type,d=a.label,f=void 0===d?"":d,h=a.successFeedback,m=void 0===h||h,F=a.passwordBtn,C=void 0!==F&&F,D=a.autoComplete,B=void 0===D?"on":D,E=a.inputStyles,N=void 0===E?{}:E,W=t.name,L=t.value,R=t.onBlur,V=(0,x.useState)(!1),G=(0,p.Z)(V,2),O=G[0],M=G[1],_=(0,x.useState)(!1),q=(0,p.Z)(_,2),A=q[0],H=q[1],I=i.errors[W],T=i.touched[W],U=L.toString().trim().length>0,J=!!O&&U||T;return(0,k.jsxs)(g,{children:[(0,k.jsxs)(b,{children:[(0,k.jsx)(y,{htmlFor:W,isFocused:O,hasValue:!!L,children:f}),(0,k.jsx)(v,(0,c.Z)((0,c.Z)({},t),{},{id:W,ref:o,type:A?"text":s,autoComplete:B,className:"".concat(J?I?"invalid":m&&"valid":""),onFocus:function(){M(!0)},onBlur:function(n){R(n),M(!1)},onClick:r,inputStyles:N,readOnly:l})),C&&(0,k.jsx)(j,{type:"button",onClick:function(){H((function(n){return!n}))},children:(0,k.jsx)("svg",{width:20,height:20,children:(0,k.jsx)("use",{href:"".concat(S.Z).concat(A?"#icon-eyeoff":"#icon-eye")})})}),e&&(0,k.jsx)(w,{children:(0,k.jsx)("use",{href:"".concat(S.Z,"#icon-calendar")})})]}),J&&(0,k.jsxs)(Z,{"aria-live":"polite",className:"".concat(I?"invalid":m&&"valid"),children:[(0,k.jsx)("svg",{width:13,height:13,children:(0,k.jsx)("use",{href:"".concat(S.Z,"#icon-success")})}),I||m&&"Success ".concat(f.toLowerCase())]})]})}},8284:function(n,e,t){t.d(e,{y:function(){return v}});var i=t(1413),o=t(9439),r=t(5987),l=t(7715),a=t(282),s=t(2114),d=t(1417),c=t(5291),p=t(890),u=t(5705),x=t(184),f=["label","formControlStyling","formLabelStyling","radioStyling","typographyStyling","formControlLabelStyling","radioGroupDirection"],h={mb:2},m={color:"#EFEDE8",fontSize:14,"&.Mui-focused":{color:"#EFEDE8"}},g={color:"rgb(239, 237, 232, 0.6)","&.Mui-checked":{color:"#EF8964"}},b={mb:-1},y={fontSize:14,lineHeight:1.3},v=function(n){var e=n.label,t=n.formControlStyling,v=n.formLabelStyling,Z=n.radioStyling,j=n.typographyStyling,w=n.formControlLabelStyling,S=n.radioGroupDirection,k=(0,r.Z)(n,f),z=(0,u.U$)(k),F=(0,o.Z)(z,1)[0];return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(d.Z,{sx:(0,i.Z)((0,i.Z)({},h),t),children:[(0,x.jsx)(c.Z,{id:F.name,sx:(0,i.Z)((0,i.Z)({},m),v),children:e}),(0,x.jsx)(a.Z,(0,i.Z)((0,i.Z)({},F),{},{row:S,children:k.options.map((function(n){return(0,x.jsx)(s.Z,{value:n.value,sx:(0,i.Z)((0,i.Z)({},b),w),control:(0,x.jsx)(l.Z,{size:"small",sx:(0,i.Z)((0,i.Z)({},g),Z)}),label:(0,x.jsx)(p.Z,{sx:(0,i.Z)((0,i.Z)({},y),j),children:n.label})},n.value)}))}))]})})}},5669:function(n,e,t){t.d(e,{c:function(){return d}});var i,o=t(168),r=t(3081),l=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),a=r.Z.button(i||(i=(0,o.Z)(["\n  cursor: pointer;\n\n  padding: ",";\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.13;\n  color: #efede8;\n\n  background-color: ",";\n\n  border: 1px solid;\n  border-color: ",";\n  border-radius: 12px;\n\n  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;\n\n  &:hover:not([disabled]),\n  &:focus:not([disabled]) {\n    background-color: ",";\n    border-color: ",";\n  }\n\n  &:disabled {\n    color: rgba(239, 237, 232, 0.6);\n  }\n\n  ","\n\n  "," {\n    padding: 16px 60px;\n    padding: ",";\n\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){var e=n.modalButton,t=n.filled;return e?t?"12px 32px":"12px 36px":"12px 40px"}),(function(n){return n.filled?"#e6533c":"transparent"}),(function(n){return n.filled?"#e6533c":"rgba(239, 237, 232, 0.30)"}),(function(n){return n.filled?"#ef8964":"transparent"}),(function(n){return n.filled?"#ef8964":"#e6533c"}),(function(n){return n.btnStyles}),l[1],(function(n){var e=n.modalButton,t=n.filled;return e?t?"14px 32px":"14px 40px":"16px 60px"}),(function(n){var e=n.modalButton,t=n.filled;return e&&t?"16px":"20px"}),(function(n){var e=n.modalButton,t=n.filled;return e&&t?"1.5":"1.2"})),s=t(184),d=function(n){var e=n.type,t=n.text,i=n.filled,o=n.disabled,r=n.btnStyles,l=n.modalButton,d=n.onClick;return(0,s.jsx)(a,{type:e,filled:i,disabled:o,btnStyles:r,modalButton:l,onClick:d,children:t})}},7915:function(n,e,t){t.r(e),t.d(e,{default:function(){return On}});var i,o,r,l,a,s,d,c,p,u,x,f,h,m,g,b,y,v,Z,j,w,S,k,z,F,C,D,B=t(5834),E=t(168),N=t(3081),W=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),L=N.Z.div(i||(i=(0,E.Z)(["\n  width: 90px;\n  height: 90px;\n  margin: 0px auto;\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  border: 1px solid #e6533c;\n  border-radius: 50%;\n\n  "," {\n    width: 150px;\n    height: 150px;\n    margin-top: 64px;\n  }\n\n  "," {\n    margin-top: 0px;\n  }\n"])),W[1],W[2]),R=N.Z.svg(o||(o=(0,E.Z)(["\n  width: 62px;\n  height: 62px;\n\n  "," {\n    width: 102px;\n    height: 102px;\n  }\n"])),W[1]),V=N.Z.h2(r||(r=(0,E.Z)(["\n  margin-top: 32px;\n  text-align: center;\n\n  color: #efede8;\n  font-family: Roboto;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.11111;\n\n  "," {\n    font-size: 24px;\n    line-height: 1.16667;\n  }\n"])),W[1]),G=N.Z.h3(l||(l=(0,E.Z)(["\n  margin-top: 4px;\n  text-align: center;\n\n  color: rgba(239, 237, 232, 0.5);\n  font-family: Roboto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.28571;\n\n  "," {\n    margin-top: 8px;\n  }\n"])),W[1]),O=N.Z.button(a||(a=(0,E.Z)(["\n  position: absolute;\n  bottom: 0;\n  translate: 0 +50%;\n\n  border: none;\n  background: none;\n  cursor: pointer;\n"]))),M=N.Z.svg(s||(s=(0,E.Z)(["\n  fill: #e6533c;\n  stroke: #efede8;\n  stroke-width: 0;\n\n  width: 24px;\n  height: 24px;\n  transition-property: transform;\n\n  &:hover {\n    transform: scale(1.2);\n    transition-duration: 400ms;\n  }\n\n  "," {\n    width: 32px;\n    height: 32px;\n  }\n"])),W[1]),_=t(4801),q=t(184),A=(0,q.jsx)(R,{children:(0,q.jsx)("use",{href:_.Z+"#icon-user"})}),H=(0,q.jsx)(M,{children:(0,q.jsx)("use",{href:_.Z+"#icon-addavatar"})}),I=function(n){var e=n.name,t=(n.email,n.avatar),i=void 0===t?A:t;return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(L,{children:[i,(0,q.jsx)(O,{type:"button",children:H})]}),(0,q.jsx)(V,{children:e}),(0,q.jsx)(G,{children:"User"})]})},T=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),U=N.Z.div(d||(d=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  margin-top: 40px;\n\n  "," {\n    gap: 16px;\n    margin-top: 32px;\n  }\n"])),T[1]),J=N.Z.div(c||(c=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 157px;\n  height: 96px;\n  padding: 10px;\n  justify-content: space-between;\n\n  border-radius: 12px;\n  border: 1px solid rgba(239, 237, 232, 0.2);\n  background: #e6533c;\n\n  "," {\n    width: 214px;\n    height: 108px;\n    padding: 14px 18px;\n  }\n"])),T[1]),P=N.Z.div(p||(p=(0,E.Z)(["\n  display: flex;\n  ","\n  align-items: center;\n  gap: 6px;\n\n  "," {\n    gap: 8px;\n  }\n"])),"",T[1]),$=N.Z.p(u||(u=(0,E.Z)(["\n  color: rgba(239, 237, 232, 0.8);\n  font-family: Roboto;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.33333;\n\n  "," {\n    line-height: 1.5;\n  }\n"])),T[1]),K=N.Z.p(x||(x=(0,E.Z)(["\n  color: #efede8;\n  font-family: Roboto;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.11111;\n\n  "," {\n    font-size: 24px;\n    line-height: 1.33333;\n  }\n"])),T[1]),Q=function(n){var e=n.icon,t=n.label,i=n.number;return(0,q.jsxs)(J,{children:[(0,q.jsxs)(P,{children:[(0,q.jsx)("svg",{width:"20",height:"20",style:{fill:"#EF8964"},children:(0,q.jsx)("use",{href:_.Z+e})}),(0,q.jsx)($,{children:t})]}),(0,q.jsx)(K,{children:i})]})},X=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),Y=N.Z.div(f||(f=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 40px;\n  align-items: flex-start;\n\n  "," {\n    margin-top: 32px;\n  }\n"])),X[1]),nn=N.Z.div(h||(h=(0,E.Z)(["\n  width: 303px;\n\n  color: rgba(239, 237, 232, 0.3);\n  font-family: Roboto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.28571;\n\n  "," {\n    width: 407px;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n"])),X[1]),en=(0,q.jsx)("svg",{width:"24",height:"24",style:{fill:"#EFA082",stroke:"#EFEDE8",strokeWidth:"0"},children:(0,q.jsx)("use",{href:_.Z+"#icon-warning"})}),tn=function(){return(0,q.jsxs)(Y,{children:[en,(0,q.jsx)(nn,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})},on=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),rn=N.Z.button(m||(m=(0,E.Z)(["\n  margin-left: auto;\n  margin-top: 41px;\n  padding: 6px;\n\n  display: flex;\n  justify-content: center;\n  alight-items: center;\n  gap: 8px;\n\n  background: none;\n  border: none;\n  cursor: pointer;\n\n  transition-property: transform;\n\n  &:hover {\n    transform: scale(1.2);\n    transition-duration: 400ms;\n  }\n\n  "," {\n    margin-top: 32px;\n    margin-bottom: 38px;\n  }\n\n  "," {\n    ","\n    margin-bottom: 0px;\n  }\n"])),on[1],on[2],""),ln=N.Z.span(g||(g=(0,E.Z)(["\n  color: #efede8;\n  font-family: Roboto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.28571;\n\n  "," {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n"])),on[1]),an=(0,q.jsx)("svg",{width:"20",height:"20",style:{stroke:"#E6533C"},children:(0,q.jsx)("use",{href:_.Z+"#icon-logout"})}),sn=function(){return(0,q.jsxs)(rn,{children:[(0,q.jsx)(ln,{children:"Logout"}),an]})},dn=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),cn=N.Z.div(b||(b=(0,E.Z)(["\n  margin-bottom: 18px;\n\n  "," {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    padding-left: 49px;\n\n    margin-bottom: 0px;\n\n    border-left-style: solid;\n    border-width: 1px;\n    border-color: #efede833;\n  }\n"])),dn[2]),pn="#icon-cutlery",un="Daily calorie intake",xn="#icon-dumbbell",fn="Daily norm of sports",hn=function(n){var e=n.user,t=e.name,i=e.avatar,o=e.dailyCalorieIntake,r=e.dailyNormOfSports;return(0,q.jsxs)(cn,{children:[(0,q.jsx)(I,{name:t,avatar:i}),(0,q.jsxs)(U,{children:[(0,q.jsx)(Q,{icon:pn,label:un,number:o}),(0,q.jsx)(Q,{icon:xn,label:fn,number:r})]}),(0,q.jsx)(tn,{}),(0,q.jsx)(sn,{})]})},mn=(t(2791),t(5705)),gn=t(4670),bn=t(5091),yn=t(8284),vn=t(5669),Zn=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),jn=N.Z.p(y||(y=(0,E.Z)(["\n  color: rgba(239, 237, 232, 0.5);\n  font-family: Roboto;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  margin-bottom: 4px;\n\n  "," {\n    font-size: 14px;\n    line-height: 1.28571;\n    margin-bottom: 8px;\n  }\n"])),Zn[1]),wn=N.Z.div(v||(v=(0,E.Z)(["\n  "," {\n    margin-bottom: 66px;\n  }\n\n  "," {\n    margin-bottom: 54px;\n  }\n\n  "," {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin-bottom: 0px;\n  }\n"])),Zn[0],Zn[1],Zn[2]),Sn=N.Z.div(Z||(Z=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 36px;\n\n  "," {\n    gap: none;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 40px;\n  }\n"])),Zn[1]),kn=N.Z.div(j||(j=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  ","\n  gap: 36px;\n  ","\n\n  margin-bottom: 20px;\n\n  "," {\n    flex-direction: row;\n    gap: 0;\n    justify-content: space-between;\n\n    margin-bottom: 16px;\n  }\n\n  "," {\n    gap: 14px;\n  }\n"])),"","",Zn[1],Zn[2]),zn=N.Z.div(w||(w=(0,E.Z)(["\n  display: flex;\n  flex-direction: row;\n  ","\n  gap: 14px;\n  justify-content: space-between;\n\n  ","\n\n  "," {\n    gap: 20px;\n    justify-content: space-between;\n  }\n"])),"","",Zn[1]),Fn=N.Z.div(S||(S=(0,E.Z)(["\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: center;\n"]))),Cn=N.Z.div(k||(k=(0,E.Z)(["\n  margin-right: 0px;\n"]))),Dn=N.Z.div(z||(z=(0,E.Z)([""]))),Bn=N.Z.div(F||(F=(0,E.Z)([""]))),En=function(n){var e=n.user,t=e.name,i=e.email,o=e.height,r=e.currentWeight,l=e.desiredWeight,a=e.birthday,s=e.blood,d=e.sex,c=e.lifeStyleType,p=(0,gn.Z)("(min-width:768px)"),u={name:t,email:i,height:o,currentWeight:r,desiredWeight:l,birthday:a,blood:s,gender:d,level:c};return(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(mn.J9,{initialValues:u,onSubmit:function(n,e){console.log(n)},children:(0,q.jsx)(wn,{children:(0,q.jsxs)(mn.l0,{children:[(0,q.jsx)(jn,{children:"Basic info"}),(0,q.jsxs)(Sn,{children:[(0,q.jsx)(mn.gN,{name:"name",type:"text",autoComplete:"off",successFeedback:!1,component:bn.t}),(0,q.jsx)(mn.gN,{name:"email",type:"text",autoComplete:"off",successFeedback:!1,disabled:"true",component:bn.t})]}),(0,q.jsxs)(kn,{children:[(0,q.jsxs)(zn,{children:[(0,q.jsx)(mn.gN,{label:"Height",name:"height",type:"text",autoComplete:"off",successFeedback:!1,component:bn.t,inputStyles:{width:"165px"}}),(0,q.jsx)(mn.gN,{label:"Current Weight",name:"currentWeight",type:"text",autoComplete:"off",successFeedback:!1,component:bn.t,inputStyles:{width:"156px"}})]}),(0,q.jsxs)(zn,{children:[(0,q.jsx)(mn.gN,{label:"Desired Weight",name:"desiredWeight",type:"text",autoComplete:"off",successFeedback:!1,component:bn.t,inputStyles:{width:"165px"}}),(0,q.jsx)(mn.gN,{name:"birthday",type:"date",autoComplete:"off",successFeedback:!1,component:bn.t,inputStyles:{width:"156px"}})]})]}),(0,q.jsxs)(Fn,{children:[(0,q.jsx)(Cn,{children:(0,q.jsx)(yn.y,{label:"Blood",name:"blood",radioGroupDirection:!0,typographyStyling:p?{fontSize:16}:{fontSize:14},formLabelStyling:p?{fontSize:16}:{fontSize:12},options:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"}]})}),(0,q.jsx)(Dn,{children:(0,q.jsx)(yn.y,{label:"Gender",name:"gender",radioGroupDirection:!0,typographyStyling:p?{fontSize:16}:{fontSize:14},formLabelStyling:p?{fontSize:16}:{fontSize:12},options:[{value:"female",label:"Female"},{value:"male",label:"Male"}]})})]}),(0,q.jsx)(Bn,{children:(0,q.jsx)(yn.y,{label:"Level",name:"level",radioGroupDirection:!1,typographyStyling:p?{fontSize:16}:{fontSize:14},formControlLabelStyling:p?{mb:-1}:{mb:.5},formLabelStyling:p?{mb:.5,fontSize:16}:{mb:.5,fontSize:12},options:[{value:"sedentary",label:"Sedentary lifestyle (little or no physical activity)"},{value:"light",label:"Light activity (light exercises/sports 1-3 days per week)"},{value:"moderately",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{value:"very",label:"Very active (intense exercises/sports 6-7 days per week)"},{value:"extremely",label:"Extremely active (very strenuous exercises/sports and physical work)"}]})}),(0,q.jsx)("br",{}),(0,q.jsx)(vn.c,{type:"submit",text:"Save",filled:!0,disabled:!1})]})})})})},Nn=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),Wn=N.Z.div(C||(C=(0,E.Z)(["\n  "," {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    margin-top: 32px;\n    margin-bottom: 36px;\n  }\n"])),Nn[2]),Ln=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),Rn=N.Z.h1(D||(D=(0,E.Z)(["\n  margin-top: 40px;\n\n  color: #efede8;\n  font-family: Roboto;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.16667;\n\n  "," {\n    margin-top: 72px;\n\n    font-size: 32px;\n    line-height: 1.375;\n  }\n"])),Ln[1]),Vn=function(){return(0,q.jsx)(Rn,{children:"Profile Settings"})},Gn={name:"Anna Rybachok",email:"annarybachok@gmail.com",avatar:void 0,height:"165",currentWeight:"52",desiredWeight:"47",birthday:"24.09.1998",blood:"1",sex:"female",lifeStyleType:"Sedentary lifestyle (little or no physical activity)",dailyCalorieIntake:2200,dailyNormOfSports:"110 min"},On=function(){return(0,q.jsxs)(B.W,{children:[(0,q.jsx)(Vn,{}),(0,q.jsxs)(Wn,{children:[(0,q.jsx)(hn,{user:Gn}),(0,q.jsx)(En,{user:Gn})]})]})}}}]);
//# sourceMappingURL=915.2e77b6e4.chunk.js.map