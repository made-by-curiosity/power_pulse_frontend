"use strict";(self.webpackChunkpower_pulse_frontend=self.webpackChunkpower_pulse_frontend||[]).push([[351],{2605:function(n,e,t){t.d(e,{a:function(){return f}});var i=t(5987),r=t(9439),o=t(2791),a=t(1951),s=t(3814),l=t(5091),c=t(184),d=["field","form","successFeedback"],u=new Date,p=new Date(u.toDateString()),f=function(n){var e=n.field,t=n.form,u=n.successFeedback,f=((0,i.Z)(n,d),(0,o.useState)((function(){return function(n){if(!n)return p;var e=n.split("."),t=(0,r.Z)(e,3),i=t[0],o=t[1],a=t[2],s="".concat(a,"-").concat(o,"-").concat(i);return new Date(s)}(e.value)}))),h=(0,r.Z)(f,2),x=h[0],g=h[1];(0,o.useEffect)((function(){if(x!==p){var n=(0,a.default)(x,"dd.MM.yyy");t.setFieldValue("birthday",n)}else t.setFieldValue("birthday","")}),[x]);var m=(0,o.forwardRef)((function(n,i){var r=n.value,o=n.onClick;return(0,c.jsx)(l.t,{reference:i,label:"Birthday",field:e,form:t,type:"text",valueDate:r,onClick:o,autoComplete:"off",successFeedback:u,inputStyles:{width:"160px",cursor:"pointer"},readOnly:!0,calendar:!0})}));return(0,c.jsx)(s.f,{input:(0,c.jsx)(m,{}),selectedDate:x,setSelectedDate:g})}},3814:function(n,e,t){t.d(e,{f:function(){return y}});var i,r,o,a,s=t(9513),l=t.n(s),c=t(168),d=t(3081),u=d.Z.div(i||(i=(0,c.Z)(["\n  margin: 0 auto 14px;\n  display: flex;\n  justify-content: center;\n  gap: 3px;\n  position: relative;\n"]))),p=d.Z.select(r||(r=(0,c.Z)(["\n  color: #efede8;\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: normal;\n  border: none;\n  background: transparent;\n  outline: none;\n  /* -webkit-appearance: none; \n  -moz-appearance: none; \n  appearance: none; */\n\n  :focus {\n    background-color: #ef8964;\n  }\n"]))),f=d.Z.button(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n  cursor: pointer;\n  transform: rotate(270deg);\n\n  svg {\n    stroke: ",";\n    fill: none;\n    stroke-width: 1.5px;\n  }\n\n  :last-of-type {\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.color})),h=d.Z.div(a||(a=(0,c.Z)(["\n  .react-datepicker__wrapper {\n    position: absolute;\n  }\n  .react-datepicker {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-15%, 0%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    padding: 14px;\n    background-color: #ef8964;\n    font-family: 'Roboto', sans-serif;\n    border-radius: 8px;\n  }\n  .react-datepicker__month-container {\n    float: inherit;\n    box-sizing: border-box;\n  }\n  .react-datepicker__day-names {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 14px;\n    margin-bottom: 8px;\n    border-top: 1px solid rgba(239, 237, 232, 0.2);\n  }\n  .react-datepicker__header {\n    position: relative;\n    background-color: #ef8964;\n  }\n\n  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {\n    border-bottom: 0px;\n    padding: 0;\n  }\n  .react-datepicker__day\n    react-datepicker__day--018.react-datepicker__day--selected\n    react-datepicker__day--today {\n    outline: none;\n    border: none;\n  }\n  // .react-datepicker__current-month {\n  //   color: #efede8;\n  //   font-family: 'Roboto', sans-serif;\n  //   font-size: 16px;\n  //   font-weight: 500;\n  //   line-height: normal;\n  //   margin-bottom: 14px;\n  // }\n  .react-datepicker__day-name {\n    margin: 0;\n    color: rgba(239, 237, 232, 0.5);\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n\n  .react-datepicker__day--disabled {\n    opacity: 25%;\n  }\n  .react-datepicker__navigation {\n    margin-top: 14px;\n    color: white;\n  }\n  .react-datepicker__navigation--previous {\n    left: 7px;\n    width: 18px;\n    height: 18px;\n  }\n  .react-datepicker__navigation--next {\n    right: 7px;\n    width: 18px;\n    height: 18px;\n  }\n  .react-datepicker__navigation-icon::before:hover:focus {\n    border-color: white;\n  }\n  .react-datepicker__week {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: white;\n  }\n  .react-datepicker__day {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    margin: 0;\n    border-radius: 50%;\n    color: #efede8;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    text-align: center;\n    width: 24px;\n    height: 24px;\n  }\n  .react-datepicker__month {\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 0;\n  }\n  .react-datepicker__day--selected {\n    background-color: #040404;\n    color: #efede8;\n    font-size: 14px;\n  }\n  .react-datepicker__day--selected:hover {\n    border-radius: 50%;\n    background-color: white;\n  }\n  .react-datepicker__day:hover {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n  .react-datepicker__day--keyboard-selected {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n  .react-datepicker__day--outside-month {\n    opacity: 50%;\n  }\n  .react-datepicker__triangle {\n    display: none;\n  }\n"]))),x=(t(8639),t(2599)),g=t(3747),m=t(4801),b=t(184),y=function(n){var e,t,i=n.input,r=n.selectedDate,o=n.setSelectedDate,a=n.createdAt,s=(e=1920,t=(0,x.default)(new Date)+1,new Array(t-e).fill().map((function(n,t){return t+e}))),c=["January","February","March","April","May","June","July","August","September","October","November","December"];return(0,b.jsx)(h,{children:(0,b.jsx)(l(),{selected:r,onChange:function(n){o(n)},renderCustomHeader:function(n){var e=n.date,t=n.changeYear,i=n.changeMonth,r=n.decreaseMonth,o=n.increaseMonth,a=n.prevMonthButtonDisabled,l=n.nextMonthButtonDisabled;return(0,b.jsxs)(u,{children:[(0,b.jsx)(f,{onClick:r,disabled:a,color:a?"#efede866":"#efede8",children:(0,b.jsx)("svg",{width:"16",height:"16",children:(0,b.jsx)("use",{href:m.Z+"#icon-chevronup"})})}),(0,b.jsx)(p,{value:c[(0,g.default)(e)],onChange:function(n){var e=n.target.value;return i(c.indexOf(e))},children:c.map((function(n){return(0,b.jsx)("option",{value:n,children:n},n)}))}),(0,b.jsx)(p,{value:(0,x.default)(e),onChange:function(n){var e=n.target.value;return t(e)},children:s.map((function(n){return(0,b.jsx)("option",{value:n,children:n},n)}))}),(0,b.jsx)(f,{onClick:o,disabled:l,color:l?"#efede866":"#efede8",children:(0,b.jsx)("svg",{width:"16",height:"16",children:(0,b.jsx)("use",{href:m.Z+"#icon-chevronup"})})})]})},customInput:i,calendarStartDay:1,minDate:a||void 0})})}},5091:function(n,e,t){t.d(e,{t:function(){return C}});var i,r,o,a,s,l,c,d=t(1413),u=t(9439),p=t(5987),f=t(2791),h=t(168),x=t(3081),g=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),m=x.Z.div(i||(i=(0,h.Z)(["\n  position: relative;\n  width: 100%;\n"]))),b=x.Z.div(r||(r=(0,h.Z)(["\n  position: relative;\n"]))),y=x.Z.label(o||(o=(0,h.Z)(["\n  position: absolute;\n  top: ",";\n  left: ",";\n\n  font-family: 'Roboto', sans-serif;\n  font-size: ",";\n  line-height: ",";\n  color: rgba(239, 237, 232, 0.6);\n\n  transition: top 0.2s ease-out, left 0.2s ease-out;\n\n  "," {\n    top: ",";\n\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.isFocused||n.hasValue?"-16px":"16px"}),(function(n){return n.isFocused||n.hasValue?"0":"14px"}),(function(n){return n.isFocused||n.hasValue?"10px":"14px"}),(function(n){return n.isFocused||n.hasValue?"1.5":"1.29"}),g[1],(function(n){return n.isFocused||n.hasValue?"-16px":"15px"}),(function(n){return n.isFocused||n.hasValue?"12px":"16px"}),(function(n){return n.isFocused||n.hasValue?"1.29":"1.5"})),v=x.Z.input(a||(a=(0,h.Z)(["\n  width: 100%;\n  padding: 14px;\n\n  font-size: 14px;\n  line-height: 1.29;\n\n  color: #efede8;\n\n  background-color: inherit;\n\n  border-radius: 12px;\n  border: 1px solid rgba(239, 237, 232, 0.3);\n\n  outline: none;\n\n  &:hover,\n  &:focus {\n    border-color: #e6533c;\n    & ~ svg {\n      stroke: #e6533c;\n    }\n  }\n\n  ","\n\n  ","\n\n\t  "," {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n\n  ","\n"])),(function(n){return n.className.includes("valid")&&"\n    border-color: #3CBF61;\n\t\t& ~ svg {\n      stroke: #3CBF61;\n    }\n  "}),(function(n){return n.className.includes("invalid")&&"\n    border-color: #D80027;\n\t\t& ~ svg {\n      stroke: #D80027;\n    }\n  "}),g[1],(function(n){return n.inputStyles})),Z=x.Z.div(s||(s=(0,h.Z)(["\n  position: absolute;\n  bottom: -16px;\n  left: 0;\n\n  display: flex;\n  align-items: center;\n  gap: 3px;\n\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 1.5;\n  letter-spacing: 0.12px;\n\n  ","\n\n  ","\n"])),(function(n){return n.className.includes("valid")&&"\n    color: #3CBF61; \n    fill: #3CBF61; \n  "}),(function(n){return n.className.includes("invalid")&&"\n    color: #D80027; \n    fill: #D80027; \n  "})),j=x.Z.button(l||(l=(0,h.Z)(["\n  width: 20px;\n  height: 20px;\n\n  position: absolute;\n  right: 14px;\n  top: 16px;\n\n  cursor: pointer;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n\n  & svg {\n    stroke: #efede8;\n  }\n"]))),k=x.Z.svg(c||(c=(0,h.Z)(["\n  width: 18px;\n  height: 18px;\n\n  position: absolute;\n  right: 14px;\n  top: 17px;\n\n  stroke: #efede8;\n\n  z-index: -1;\n"]))),w=t(4801),S=t(184),_=["calendar","field","form","reference","onClick","valueDate","readOnly"],C=function(n){var e=n.calendar,t=n.field,i=n.form,r=n.reference,o=n.onClick,a=(n.valueDate,n.readOnly),s=(0,p.Z)(n,_),l=s.type,c=s.label,h=void 0===c?"":c,x=s.successFeedback,g=void 0===x||x,C=s.passwordBtn,D=void 0!==C&&C,F=s.autoComplete,z=void 0===F?"on":F,M=s.inputStyles,E=void 0===M?{}:M,P=t.name,N=t.value,B=t.onBlur,R=(0,f.useState)(!1),V=(0,u.Z)(R,2),L=V[0],W=V[1],q=(0,f.useState)(!1),G=(0,u.Z)(q,2),O=G[0],A=G[1],J=i.errors[P],T=i.touched[P],H=N.toString().trim().length>0,I=!!L&&H||T;return(0,S.jsxs)(m,{children:[(0,S.jsxs)(b,{children:[(0,S.jsx)(y,{htmlFor:P,isFocused:L,hasValue:!!N,children:h}),(0,S.jsx)(v,(0,d.Z)((0,d.Z)({},t),{},{id:P,ref:r,type:O?"text":l,autoComplete:z,className:"".concat(I?J?"invalid":g&&"valid":""),onFocus:function(){W(!0)},onBlur:function(n){B(n),W(!1)},onClick:o,inputStyles:E,readOnly:a})),D&&(0,S.jsx)(j,{type:"button",onClick:function(){A((function(n){return!n}))},children:(0,S.jsx)("svg",{width:20,height:20,children:(0,S.jsx)("use",{href:"".concat(w.Z).concat(O?"#icon-eyeoff":"#icon-eye")})})}),e&&(0,S.jsx)(k,{fill:"transparent",children:(0,S.jsx)("use",{href:"".concat(w.Z,"#icon-calendar")})})]}),I&&(0,S.jsxs)(Z,{"aria-live":"polite",className:"".concat(J?"invalid":g&&"valid"),children:[(0,S.jsx)("svg",{width:13,height:13,children:(0,S.jsx)("use",{href:"".concat(w.Z,"#icon-success")})}),J||g&&"Success ".concat(h.toLowerCase())]})]})}},8284:function(n,e,t){t.d(e,{y:function(){return v}});var i=t(1413),r=t(9439),o=t(5987),a=t(7715),s=t(282),l=t(2114),c=t(1417),d=t(5291),u=t(890),p=t(5705),f=t(184),h=["label","formControlStyling","formLabelStyling","radioStyling","typographyStyling","formControlLabelStyling","radioGroupDirection"],x={mb:2},g={color:"#EFEDE8",fontSize:14,"&.Mui-focused":{color:"#EFEDE8"}},m={color:"rgb(239, 237, 232, 0.6)","&.Mui-checked":{color:"#EF8964"}},b={mb:-1},y={fontSize:14,lineHeight:1.3},v=function(n){var e=n.label,t=n.formControlStyling,v=n.formLabelStyling,Z=n.radioStyling,j=n.typographyStyling,k=n.formControlLabelStyling,w=n.radioGroupDirection,S=(0,o.Z)(n,h),_=(0,p.U$)(S),C=(0,r.Z)(_,1)[0];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c.Z,{sx:(0,i.Z)((0,i.Z)({},x),t),children:[(0,f.jsx)(d.Z,{id:C.name,sx:(0,i.Z)((0,i.Z)({},g),v),children:e}),(0,f.jsx)(s.Z,(0,i.Z)((0,i.Z)({},C),{},{row:w,children:S.options.map((function(n){return(0,f.jsx)(l.Z,{value:n.value,sx:(0,i.Z)((0,i.Z)({},b),k),control:(0,f.jsx)(a.Z,{size:"small",sx:(0,i.Z)((0,i.Z)({},m),Z)}),label:(0,f.jsx)(u.Z,{sx:(0,i.Z)((0,i.Z)({},y),j),children:n.label})},n.value)}))}))]})})}},2351:function(n,e,t){t.r(e),t.d(e,{default:function(){return hn}});var i,r,o,a,s,l,c,d,u,p,f,h,x,g,m,b,y,v,Z,j,k=t(5834),w=t(1413),S=t(9439),_=t(168),C=t(8789),D=C.ZP.div(i||(i=(0,_.Z)(["\n  margin-top: 30px;\n  @media screen and (min-width: 768px) {\n  }\n"]))),F=C.ZP.h2(r||(r=(0,_.Z)(["\n  color: #efede8;\n  margin-bottom: 14px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n  }\n"]))),z=C.ZP.p(o||(o=(0,_.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(239, 237, 232, 0.3);\n  margin-bottom: 32px;\n  line-height: 1.4;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    max-width: 496px;\n  }\n"]))),M=C.ZP.div(a||(a=(0,_.Z)([""]))),E=C.ZP.div(s||(s=(0,_.Z)([""]))),P=C.ZP.div(l||(l=(0,_.Z)(["\n  margin-right: 64px;\n"]))),N=C.ZP.div(c||(c=(0,_.Z)(["\n  margin-bottom: 24px;\n  display: flex;\n"]))),B=(C.ZP.div(d||(d=(0,_.Z)(["\n  display: flex;\n"]))),C.ZP.div(u||(u=(0,_.Z)(["\n  max-width: 335px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    max-width: 527px;\n  }\n"])))),R=C.ZP.div(p||(p=(0,_.Z)(["\n  margin-bottom: 32px;\n"]))),V=C.ZP.div(f||(f=(0,_.Z)(["\n  width: 178px;\n  display: flex;\n  justify-content: space-around;\n  margin-top: 343px;\n  padding-bottom: 20px;\n\n  margin-top: ",";\n  margin-top: ",";\n\n  @media screen and (min-width: 768px) {\n    margin-top: 439px;\n\n    margin-top: ",";\n    margin-top: ",";\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 204px;\n\n    margin-top: ",";\n    margin-top: ",";\n  }\n"])),(function(n){if(2===n.step)return"159px"}),(function(n){if(3===n.step)return"459px"}),(function(n){if(2===n.step)return"283px"}),(function(n){if(3===n.step)return"523px"}),(function(n){if(2===n.step)return"48px"}),(function(n){if(3===n.step)return"288px"})),L=C.ZP.div(h||(h=(0,_.Z)(["\n  width: 50px;\n  height: 4px;\n  background-color: #ef8964;\n  border-radius: 10px;\n"]))),W=C.ZP.div(x||(x=(0,_.Z)(["\n  width: 50px;\n  height: 4px;\n  background-color: #303030;\n  border-radius: 10px;\n\n  background-color: ",";\n"])),(function(n){if(n.step>1)return"#EF8964"})),q=C.ZP.div(g||(g=(0,_.Z)(["\n  width: 50px;\n  height: 4px;\n  background-color: #303030;\n  border-radius: 10px;\n\n  background-color: ",";\n"])),(function(n){if(3===n.step)return"#EF8964"})),G=C.ZP.button(m||(m=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  color: #efede8;\n"]))),O=C.ZP.button(b||(b=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  color: rgb(239, 237, 232, 0.6);\n"]))),A=C.ZP.div(y||(y=(0,_.Z)(["\n  display: flex;\n"]))),J=C.ZP.div(v||(v=(0,_.Z)(["\n  margin-right: 16px;\n"]))),T=(C.ZP.div(Z||(Z=(0,_.Z)(["\n  position: absolute;\n  top: -19px;\n  right: -5px;\n\n  top: ",";\n  right: ",";\n\n  @media screen and (min-width: 768px) {\n    top: 250px;\n    top: ",";\n    top: ",";\n  }\n\n  @media screen and (min-width: 1440px) {\n    top: -93px;\n    right: 130px;\n    top: ",";\n    top: ",";\n  }\n"])),(function(n){if(2===n.step)return"-32px"}),(function(n){if(2===n.step)return"2px"}),(function(n){if(2===n.step)return"205px"}),(function(n){if(3===n.step)return"235px"}),(function(n){if(2===n.step)return"-142px"}),(function(n){if(3===n.step)return"-101px"})),C.ZP.div(j||(j=(0,_.Z)(["\n  position: absolute;\n  top: -11px;\n  right: -10px;\n\n  top: ",";\n  right: ",";\n\n  @media screen and (min-width: 768px) {\n    top: -115px;\n    top: ",";\n    top: ",";\n  }\n"])),(function(n){if(2===n.step)return"10px"}),(function(n){if(2===n.step)return"-45px"}),(function(n){if(2===n.step)return"-155px"}),(function(n){if(3===n.step)return"-140px"})),t(4801)),H=t(4670),I=t(2605),U=t(5705),Y=t(6727),K=t(5091),$=t(8284),Q=t(5669),X=t(6971),nn=t(3216),en=t(9434),tn=t(9273),rn=t(2791),on=t(184),an=new Date,sn=new Date(an.getFullYear()-18,an.getMonth(),an.getDate());var ln=Y.Ry({height:Y.Rx("Number").typeError("Must be a number").positive("Must be positive.").min(150,"Must be at least 150cm").required("Height is required"),currentWeight:Y.Rx().typeError("Must be a number").positive("Must be positive.").min(35,"Must be at least 35kg").required("Current weight is required"),desiredWeight:Y.Rx().typeError("Must be a number").positive("Must be positive.").min(35,"Must be at least 35kg").required("Desired weight is required"),birthday:Y.hT().transform((function(n,e){if((0,X.default)(e))return e;var t=e.split("."),i=(0,S.Z)(t,3),r=i[0],o=i[1],a=i[2],s="".concat(a,"-").concat(o,"-").concat(r);return(0,nn.default)(s,"yyyy-MM-dd",new Date)})).max(sn,"Age must be 18+").required("Age is required")}),cn=function(){var n=(0,en.I0)(),e=(0,H.Z)("(min-width:768px)"),t=function(n,e){var t,i=(0,rn.useState)(null!==(t=JSON.parse(localStorage.getItem(n)))&&void 0!==t?t:e),r=(0,S.Z)(i,2),o=r[0],a=r[1];return(0,rn.useEffect)((function(){window.localStorage.setItem(n,JSON.stringify(o))}),[o,n]),[o,a]}("step",1),i=(0,S.Z)(t,2),r=i[0],o=i[1];(0,rn.useEffect)((function(){o(1)}),[]);var a=function(){o((function(n){return n-1}))};return(0,on.jsxs)(D,{children:[(0,on.jsx)(U.J9,{initialValues:{height:"",currentWeight:"",desiredWeight:"",birthday:"",blood:"1",sex:"male",levelActivity:"2"},validationSchema:ln,onSubmit:function(e,t){var i=t.setSubmitting,a=t.resetForm;3===r?(!function(e,t){var i=t.setSubmitting,r=e.birthday.split("."),o=(0,S.Z)(r,3),a=o[0],s=o[1],l=o[2],c="".concat(l,"-").concat(s,"-").concat(a),d=(0,w.Z)((0,w.Z)({},e),{},{birthday:c});n((0,tn.IO)(d)),i(!1)}(e,{setSubmitting:i}),a()):o((function(n){return n+1}))},children:(0,on.jsxs)(U.l0,{children:[1===r&&(0,on.jsxs)(on.Fragment,{children:[(0,on.jsx)(F,{children:"Get closer to your goals!"}),(0,on.jsx)(z,{children:"To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:"}),(0,on.jsxs)(B,{children:[(0,on.jsx)(R,{children:(0,on.jsx)(U.gN,{label:"Height",name:"height",type:"text",autoComplete:"off",component:K.t,inputStyles:{width:"155px"}})}),(0,on.jsx)(R,{children:(0,on.jsx)(U.gN,{label:"Current Weight",name:"currentWeight",type:"text",autoComplete:"off",component:K.t,inputStyles:{width:"160px"}})}),(0,on.jsx)(R,{children:(0,on.jsx)(U.gN,{label:"Desired Weight",name:"desiredWeight",type:"text",autoComplete:"off",component:K.t,inputStyles:{width:"155px"}})}),(0,on.jsx)(R,{children:(0,on.jsx)(U.gN,{name:"birthday",component:I.a})})]}),(0,on.jsxs)(G,{type:"submit",children:["Next"," ",(0,on.jsx)("svg",{width:"20",height:"20",stroke:"#E6533C",children:(0,on.jsx)("use",{href:T.Z+"#icon-next"})})]})]}),2===r&&(0,on.jsxs)(on.Fragment,{children:[(0,on.jsx)(F,{children:"Get closer to your goals!"}),(0,on.jsxs)(N,{children:[(0,on.jsx)(P,{children:(0,on.jsx)($.y,{label:"Blood",name:"blood",radioGroupDirection:!1,typographyStyling:e?{fontSize:16}:{fontSize:14},formLabelStyling:e?{fontSize:16}:{fontSize:14},options:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"}]})}),(0,on.jsx)(M,{children:(0,on.jsx)($.y,{label:"Gender",name:"sex",radioGroupDirection:!1,typographyStyling:e?{fontSize:16}:{fontSize:14},formLabelStyling:e?{fontSize:16}:{fontSize:14},options:[{value:"female",label:"Female"},{value:"male",label:"Male"}]})})]}),(0,on.jsx)(E,{children:(0,on.jsx)($.y,{label:"Level",name:"levelActivity",radioGroupDirection:!1,typographyStyling:e?{fontSize:16}:{fontSize:14},formControlLabelStyling:e?{mb:-1}:{mb:.5},formLabelStyling:e?{mb:.5,fontSize:16}:{mb:.5},options:[{value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}]})})]}),3===r&&(0,on.jsxs)(on.Fragment,{children:[(0,on.jsx)(F,{children:"Dear User"}),(0,on.jsx)(z,{children:"Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach."}),(0,on.jsxs)(A,{children:[(0,on.jsx)(J,{children:(0,on.jsx)(Q.c,{type:"submit",text:"Go",filled:!0,btnStyles:{display:"inline-flex"}})}),(0,on.jsxs)(O,{onClick:a,children:[(0,on.jsx)("svg",{width:"20",height:"20",stroke:"#E6533C",children:(0,on.jsx)("use",{href:T.Z+"#icon-back"})})," ","Back"]})]})]})]})}),(0,on.jsxs)(A,{children:[r>1&&r<3&&(0,on.jsxs)(O,{onClick:a,children:[(0,on.jsx)("svg",{width:"20",height:"20",stroke:"#E6533C",children:(0,on.jsx)("use",{href:T.Z+"#icon-back"})})," ","Back"]}),r>1&&r<3&&(0,on.jsxs)(G,{onClick:function(){o((function(n){return n+1}))},children:["Next"," ",(0,on.jsx)("svg",{width:"20",height:"20",stroke:"#E6533C",children:(0,on.jsx)("use",{href:T.Z+"#icon-next"})})]})]}),(0,on.jsxs)(V,{step:r,children:[(0,on.jsx)(L,{step:r}),(0,on.jsx)(W,{step:r}),(0,on.jsx)(q,{step:r})]})]})},dn=t(2028),un=t(7689),pn=t(8780),fn=t(3190),hn=function(){var n="/404"===(0,un.TH)().pathname;return(0,on.jsx)(dn.C,{children:(0,on.jsxs)(k.W,{children:[(0,on.jsx)(pn.K,{children:(0,on.jsx)(fn.T,{is404:n})}),(0,on.jsx)(cn,{})]})})}}}]);
//# sourceMappingURL=351.ecfc2b69.chunk.js.map