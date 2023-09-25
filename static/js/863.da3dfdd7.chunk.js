"use strict";(self.webpackChunkpower_pulse_frontend=self.webpackChunkpower_pulse_frontend||[]).push([[863],{5834:function(n,e,i){i.d(e,{W:function(){return d}});var t,o=i(168),r=i(3081).Z.div(t||(t=(0,o.Z)(["\n  max-width: 375px;\n  margin: 0 auto;\n  padding: 62px 20px 0 20px;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    padding: 84px 32px 0 32px;\n  }\n  @media screen and (min-width: 1440px) {\n    max-width: 1440px;\n    padding: 84px 96px 0 96px;\n  }\n"]))),a=i(184),d=function(n){var e=n.children;return(0,a.jsx)(r,{children:e})}},5091:function(n,e,i){i.d(e,{t:function(){return F}});var t,o,r,a,d,s,l,c=i(1413),u=i(9439),p=i(5987),x=i(2791),f=i(168),h=i(3081),g=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),m=h.Z.div(t||(t=(0,f.Z)(["\n  position: relative;\n  width: 100%;\n"]))),b=h.Z.div(o||(o=(0,f.Z)(["\n  position: relative;\n"]))),v=h.Z.label(r||(r=(0,f.Z)(["\n  position: absolute;\n  top: ",";\n  left: ",";\n\n  font-family: 'Roboto', sans-serif;\n  font-size: ",";\n  line-height: ",";\n  color: rgba(239, 237, 232, 0.6);\n\n  transition: top 0.2s ease-out, left 0.2s ease-out;\n\n  "," {\n    top: ",";\n\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.isFocused||n.hasValue?"-16px":"16px"}),(function(n){return n.isFocused||n.hasValue?"0":"14px"}),(function(n){return n.isFocused||n.hasValue?"10px":"14px"}),(function(n){return n.isFocused||n.hasValue?"1.5":"1.29"}),g[1],(function(n){return n.isFocused||n.hasValue?"-16px":"15px"}),(function(n){return n.isFocused||n.hasValue?"12px":"16px"}),(function(n){return n.isFocused||n.hasValue?"1.29":"1.5"})),Z=h.Z.input(a||(a=(0,f.Z)(["\n  width: 100%;\n  padding: 14px;\n\n  font-size: 14px;\n  line-height: 1.29;\n\n  color: #efede8;\n\n  background-color: inherit;\n\n  border-radius: 12px;\n  border: 1px solid rgba(239, 237, 232, 0.3);\n\n  outline: none;\n\n  &:hover,\n  &:focus {\n    border-color: #e6533c;\n    & ~ svg {\n      stroke: #e6533c;\n    }\n  }\n\n  ","\n\n  ","\n\n\t  "," {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n\n  ","\n"])),(function(n){return n.className.includes("valid")&&"\n    border-color: #3CBF61;\n\t\t& ~ svg {\n      stroke: #3CBF61;\n    }\n  "}),(function(n){return n.className.includes("invalid")&&"\n    border-color: #D80027;\n\t\t& ~ svg {\n      stroke: #D80027;\n    }\n  "}),g[1],(function(n){return n.inputStyles})),w=h.Z.div(d||(d=(0,f.Z)(["\n  position: absolute;\n  bottom: -16px;\n  left: 0;\n\n  display: flex;\n  align-items: center;\n  gap: 3px;\n\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 1.5;\n  letter-spacing: 0.12px;\n\n  ","\n\n  ","\n"])),(function(n){return n.className.includes("valid")&&"\n    color: #3CBF61; \n    fill: #3CBF61; \n  "}),(function(n){return n.className.includes("invalid")&&"\n    color: #D80027; \n    fill: #D80027; \n  "})),y=h.Z.button(s||(s=(0,f.Z)(["\n  width: 20px;\n  height: 20px;\n\n  position: absolute;\n  right: 14px;\n  top: 16px;\n\n  cursor: pointer;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n\n  & svg {\n    stroke: #efede8;\n  }\n"]))),k=h.Z.svg(l||(l=(0,f.Z)(["\n  width: 18px;\n  height: 18px;\n\n  position: absolute;\n  right: 14px;\n  top: 17px;\n\n  stroke: #efede8;\n\n  z-index: -1;\n"]))),j=i(4801),z=i(184),C=["calendar","field","form","reference","onClick","valueDate","readOnly"],F=function(n){var e=n.calendar,i=n.field,t=n.form,o=n.reference,r=n.onClick,a=(n.valueDate,n.readOnly),d=(0,p.Z)(n,C),s=d.type,l=d.label,f=void 0===l?"":l,h=d.successFeedback,g=void 0===h||h,F=d.passwordBtn,S=void 0!==F&&F,B=d.autoComplete,_=void 0===B?"on":B,D=d.inputStyles,N=void 0===D?{}:D,V=i.name,R=i.value,q=i.onBlur,A=(0,x.useState)(!1),E=(0,u.Z)(A,2),I=E[0],O=E[1],T=(0,x.useState)(!1),U=(0,u.Z)(T,2),L=U[0],W=U[1],$=t.errors[V],J=t.touched[V],M=R.toString().trim().length>0,P=!!I&&M||J;return(0,z.jsxs)(m,{children:[(0,z.jsxs)(b,{children:[(0,z.jsx)(v,{htmlFor:V,isFocused:I,hasValue:!!R,children:f}),(0,z.jsx)(Z,(0,c.Z)((0,c.Z)({},i),{},{id:V,ref:o,type:L?"text":s,autoComplete:_,className:"".concat(P?$?"invalid":g&&"valid":""),onFocus:function(){O(!0)},onBlur:function(n){q(n),O(!1)},onClick:r,inputStyles:N,readOnly:a})),S&&(0,z.jsx)(y,{type:"button",onClick:function(){W((function(n){return!n}))},children:(0,z.jsx)("svg",{width:20,height:20,children:(0,z.jsx)("use",{href:"".concat(j.Z).concat(L?"#icon-eyeoff":"#icon-eye")})})}),e&&(0,z.jsx)(k,{children:(0,z.jsx)("use",{href:"".concat(j.Z,"#icon-calendar")})})]}),P&&(0,z.jsxs)(w,{"aria-live":"polite",className:"".concat($?"invalid":g&&"valid"),children:[(0,z.jsx)("svg",{width:13,height:13,children:(0,z.jsx)("use",{href:"".concat(j.Z,"#icon-success")})}),$||g&&"Success ".concat(f.toLowerCase())]})]})}},5669:function(n,e,i){i.d(e,{c:function(){return l}});var t,o=i(168),r=i(3081),a=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),d=r.Z.button(t||(t=(0,o.Z)(["\n  cursor: pointer;\n\n  padding: ",";\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.13;\n  color: #efede8;\n\n  background-color: ",";\n\n  border: 1px solid;\n  border-color: ",";\n  border-radius: 12px;\n\n  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;\n\n  &:hover:not([disabled]),\n  &:focus:not([disabled]) {\n    background-color: ",";\n    border-color: ",";\n  }\n\n  &:disabled {\n    color: rgba(239, 237, 232, 0.6);\n  }\n\n  ","\n\n  "," {\n    padding: 16px 60px;\n    padding: ",";\n\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){var e=n.modalButton,i=n.filled;return e?i?"12px 32px":"12px 36px":"12px 40px"}),(function(n){return n.filled?"#e6533c":"transparent"}),(function(n){return n.filled?"#e6533c":"rgba(239, 237, 232, 0.30)"}),(function(n){return n.filled?"#ef8964":"transparent"}),(function(n){return n.filled?"#ef8964":"#e6533c"}),(function(n){return n.btnStyles}),a[1],(function(n){var e=n.modalButton,i=n.filled;return e?i?"14px 32px":"14px 40px":"16px 60px"}),(function(n){var e=n.modalButton,i=n.filled;return e&&i?"16px":"20px"}),(function(n){var e=n.modalButton,i=n.filled;return e&&i?"1.5":"1.2"})),s=i(184),l=function(n){var e=n.type,i=n.text,t=n.filled,o=n.disabled,r=n.btnStyles,a=n.modalButton,l=n.onClick;return(0,s.jsx)(d,{type:e,filled:t,disabled:o,btnStyles:r,modalButton:a,onClick:l,children:i})}},1523:function(n,e,i){i.d(e,{D:function(){return d}});var t,o=i(168),r=i(3081).Z.h1(t||(t=(0,o.Z)(["\nfont-family: Roboto;\nfont-size: 24px;\nfont-style: normal;\nfont-weight: 700;\nline-height: 1.16;\n\n @media (min-width: 768px){\nfont-size: 32px;\nline-height: 1.37; \n }\n  @media (min-width: 1440px){\n \n\n }\n"]))),a=i(184),d=function(n){var e=n.children;return(0,a.jsx)(r,{children:e})}},1863:function(n,e,i){i.r(e),i.d(e,{default:function(){return N}});var t,o,r,a,d,s,l=i(5834),c=(i(2791),i(5705)),u=i(6727),p=i(1087),x=i(1523),f=i(168),h=i(3081),g=h.Z.div(t||(t=(0,f.Z)(["\n  margin-top: 90px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 140px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top: 151px;\n  }\n"]))),m=(0,h.Z)(c.l0)(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 36px;\n  max-width: 335px;\n  @media screen and (min-width: 768px) {\n    width: 364px;\n  }\n"]))),b=(h.Z.h2(r||(r=(0,f.Z)([""]))),h.Z.p(a||(a=(0,f.Z)(["\n  color: ",";\n  margin: 20px 0;\n  font-size: 14px;\n  line-height: 1.3;\n  @media screen and (min-width: 768px) {\n    margin: 24px 0;\n    max-width: 496px;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n"])),(function(n){return n.theme.colors.secondTextColor}))),v=h.Z.p(d||(d=(0,f.Z)(["\n  color: #efede899;\n  font-size: 12px;\n  line-height: 1.5;\n"]))),Z=i(5091),w=i(5669),y=i(9434),k=i(5466),j=i(184),z=u.Ry().shape({name:u.Z_().required("Required field"),email:u.Z_().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email format").required("Required field"),password:u.Z_().matches(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/,"Must contain at least 1 capital and 1 digit").required("Required field")}),C=function(){var n=(0,y.I0)();return(0,j.jsxs)(g,{children:[(0,j.jsx)(x.D,{children:"Sign Up"}),(0,j.jsx)(b,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),(0,j.jsx)(c.J9,{initialValues:{name:"",email:"",password:""},validationSchema:z,onSubmit:function(e,i){var t=i.resetForm;console.log(e),n((0,k.y1)(e)),t()},children:(0,j.jsxs)(m,{children:[(0,j.jsx)(c.gN,{name:"name",label:"Name",type:"text",autoComplete:"off",component:Z.t}),(0,j.jsx)(c.gN,{name:"email",label:"Email",type:"email",autoComplete:"off",component:Z.t}),(0,j.jsx)(c.gN,{name:"password",type:"password",label:"Password",autoComplete:"off",component:Z.t,passwordBtn:!0}),(0,j.jsx)(w.c,{type:"submit",text:"Sign Up",filled:!0,btnStyles:{width:"max-content",marginBottom:"12px"}})]})}),(0,j.jsxs)(v,{children:["Already have account?"," ",(0,j.jsx)(p.rU,{style:{color:"#EFEDE8",textDecorationLine:"underline"},to:"/signin",children:"Sign In"})]})]})},F=i(8119),S=i(8520),B=i(7485),_=h.Z.div(s||(s=(0,f.Z)(["\n  //   max-width: 446px;\n  //   height: 669px;\n\n  //   background-position-x: 77px;\n  //   background-size: contain;\n  //   background-position-y: 150%;\n  height: 812px;\n  min-width: 375px;\n  background-position-x: 77px;\n  background-size: 446px 669px;\n  background-position-y: 212px;\n\n  background-repeat: no-repeat;\n  background-image: linear-gradient(\n      168deg,\n      #040404 14.75%,\n      rgba(4, 4, 4, 0) 52.97%\n    ),\n    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%), url(",");\n\n  @media (min-width: 768px) {\n    background-image: linear-gradient(\n        170deg,\n        #040404 3.66%,\n        rgba(4, 4, 4, 0) 19.15%\n      ),\n      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),\n      url(",");\n    min-width: 768px;\n    height: 1024px;\n    background-position-x: 331px;\n    background-size: 670px 1005px;\n    background-position-y: 80px;\n  }\n\n  @media (min-width: 1440px) {\n    min-width: 1440px;\n    height: 800px;\n    background-size: 670px 800px;\n    background-image: linear-gradient(\n        80deg,\n        #040404 -2.45%,\n        rgba(4, 4, 4, 0) 68.17%\n      ),\n      url(",");\n    background-position: right;\n  }\n"])),F,S,B),D=function(n){var e=n.children;return(0,j.jsx)(_,{children:e})},N=function(){return(0,j.jsx)(D,{children:(0,j.jsx)(l.W,{children:(0,j.jsx)(C,{})})})}},8119:function(n,e,i){n.exports=i.p+"static/media/bg_main.ca40890e431265c2ff4b.jpg"},8520:function(n,e,i){n.exports=i.p+"static/media/bg_main@2x.0a4ddf52defea08dbd06.jpg"},7485:function(n,e,i){n.exports=i.p+"static/media/bg_main@3x.8c9dc6bae9c9052e829a.jpg"}}]);
//# sourceMappingURL=863.da3dfdd7.chunk.js.map