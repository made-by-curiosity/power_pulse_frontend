"use strict";(self.webpackChunkpower_pulse_frontend=self.webpackChunkpower_pulse_frontend||[]).push([[915],{2605:function(n,e,t){t.d(e,{a:function(){return f}});var i=t(5987),o=t(9439),r=t(2791),a=t(1951),l=t(3814),s=t(5091),c=t(184),d=["field","form","successFeedback"],p=new Date,u=new Date(p.toDateString()),f=function(n){var e=n.field,t=n.form,p=n.successFeedback,f=((0,i.Z)(n,d),(0,r.useState)((function(){return function(n){if(!n)return u;var e=n.split("."),t=(0,o.Z)(e,3),i=t[0],r=t[1],a=t[2],l="".concat(a,"-").concat(r,"-").concat(i);return new Date(l)}(e.value)}))),x=(0,o.Z)(f,2),h=x[0],g=x[1];(0,r.useEffect)((function(){if(h!==u){var n=(0,a.default)(h,"dd.MM.yyy");t.setFieldValue("birthday",n)}else t.setFieldValue("birthday","")}),[h]);var m=(0,r.forwardRef)((function(n,i){var o=n.value,r=n.onClick;return(0,c.jsx)(s.t,{reference:i,label:"Birthday",field:e,form:t,type:"text",valueDate:o,onClick:r,autoComplete:"off",successFeedback:p,inputStyles:{width:"160px",cursor:"pointer"},readOnly:!0,calendar:!0})}));return(0,c.jsx)(l.f,{input:(0,c.jsx)(m,{}),selectedDate:h,setSelectedDate:g})}},3814:function(n,e,t){t.d(e,{f:function(){return y}});var i,o,r,a,l=t(9513),s=t.n(l),c=t(168),d=t(3081),p=d.Z.div(i||(i=(0,c.Z)(["\n  margin: 0 auto 14px;\n  display: flex;\n  justify-content: center;\n  gap: 3px;\n  position: relative;\n"]))),u=d.Z.select(o||(o=(0,c.Z)(["\n  color: #efede8;\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: normal;\n  border: none;\n  background: transparent;\n  outline: none;\n  /* -webkit-appearance: none; \n  -moz-appearance: none; \n  appearance: none; */\n\n  :focus {\n    background-color: #ef8964;\n  }\n"]))),f=d.Z.button(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n  cursor: pointer;\n  transform: rotate(270deg);\n\n  svg {\n    stroke: ",";\n    fill: none;\n    stroke-width: 1.5px;\n  }\n\n  :last-of-type {\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.color})),x=d.Z.div(a||(a=(0,c.Z)(["\n  .react-datepicker__wrapper {\n    position: absolute;\n  }\n  .react-datepicker {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-15%, 0%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    padding: 14px;\n    background-color: #ef8964;\n    font-family: 'Roboto', sans-serif;\n    border-radius: 8px;\n  }\n  .react-datepicker__month-container {\n    float: inherit;\n    box-sizing: border-box;\n  }\n  .react-datepicker__day-names {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 14px;\n    margin-bottom: 8px;\n    border-top: 1px solid rgba(239, 237, 232, 0.2);\n  }\n  .react-datepicker__header {\n    position: relative;\n    background-color: #ef8964;\n  }\n\n  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {\n    border-bottom: 0px;\n    padding: 0;\n  }\n  .react-datepicker__day\n    react-datepicker__day--018.react-datepicker__day--selected\n    react-datepicker__day--today {\n    outline: none;\n    border: none;\n  }\n  // .react-datepicker__current-month {\n  //   color: #efede8;\n  //   font-family: 'Roboto', sans-serif;\n  //   font-size: 16px;\n  //   font-weight: 500;\n  //   line-height: normal;\n  //   margin-bottom: 14px;\n  // }\n  .react-datepicker__day-name {\n    margin: 0;\n    color: rgba(239, 237, 232, 0.5);\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n\n  .react-datepicker__day--disabled {\n    opacity: 25%;\n  }\n  .react-datepicker__navigation {\n    margin-top: 14px;\n    color: white;\n  }\n  .react-datepicker__navigation--previous {\n    left: 7px;\n    width: 18px;\n    height: 18px;\n  }\n  .react-datepicker__navigation--next {\n    right: 7px;\n    width: 18px;\n    height: 18px;\n  }\n  .react-datepicker__navigation-icon::before:hover:focus {\n    border-color: white;\n  }\n  .react-datepicker__week {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: white;\n  }\n  .react-datepicker__day {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    margin: 0;\n    border-radius: 50%;\n    color: #efede8;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    text-align: center;\n    width: 24px;\n    height: 24px;\n  }\n  .react-datepicker__month {\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 0;\n  }\n  .react-datepicker__day--selected {\n    background-color: #040404;\n    color: #efede8;\n    font-size: 14px;\n  }\n  .react-datepicker__day--selected:hover {\n    border-radius: 50%;\n    background-color: white;\n  }\n  .react-datepicker__day:hover {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n  .react-datepicker__day--keyboard-selected {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n  .react-datepicker__day--outside-month {\n    opacity: 50%;\n  }\n  .react-datepicker__triangle {\n    display: none;\n  }\n"]))),h=(t(8639),t(2599)),g=t(3747),m=t(4801),b=t(184),y=function(n){var e,t,i=n.input,o=n.selectedDate,r=n.setSelectedDate,a=n.createdAt,l=(e=1920,t=(0,h.default)(new Date)+1,new Array(t-e).fill().map((function(n,t){return t+e}))),c=["January","February","March","April","May","June","July","August","September","October","November","December"];return(0,b.jsx)(x,{children:(0,b.jsx)(s(),{selected:o,onChange:function(n){r(n)},renderCustomHeader:function(n){var e=n.date,t=n.changeYear,i=n.changeMonth,o=n.decreaseMonth,r=n.increaseMonth,a=n.prevMonthButtonDisabled,s=n.nextMonthButtonDisabled;return(0,b.jsxs)(p,{children:[(0,b.jsx)(f,{onClick:o,disabled:a,color:a?"#efede866":"#efede8",children:(0,b.jsx)("svg",{width:"16",height:"16",children:(0,b.jsx)("use",{href:m.Z+"#icon-chevronup"})})}),(0,b.jsx)(u,{value:c[(0,g.default)(e)],onChange:function(n){var e=n.target.value;return i(c.indexOf(e))},children:c.map((function(n){return(0,b.jsx)("option",{value:n,children:n},n)}))}),(0,b.jsx)(u,{value:(0,h.default)(e),onChange:function(n){var e=n.target.value;return t(e)},children:l.map((function(n){return(0,b.jsx)("option",{value:n,children:n},n)}))}),(0,b.jsx)(f,{onClick:r,disabled:s,color:s?"#efede866":"#efede8",children:(0,b.jsx)("svg",{width:"16",height:"16",children:(0,b.jsx)("use",{href:m.Z+"#icon-chevronup"})})})]})},customInput:i,calendarStartDay:1,minDate:a||void 0})})}},5834:function(n,e,t){t.d(e,{W:function(){return l}});var i,o=t(168),r=t(3081).Z.div(i||(i=(0,o.Z)(["\n  max-width: 375px;\n  margin: 0 auto;\n  padding: 62px 20px 0 20px;\n\n  position: relative;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    padding: 84px 32px 0 32px;\n  }\n  @media screen and (min-width: 1440px) {\n    max-width: 1440px;\n    height: 100vh;\n    padding: 84px 96px 0 96px;\n  }\n"]))),a=t(184),l=function(n){var e=n.children;return(0,a.jsx)(r,{children:e})}},5091:function(n,e,t){t.d(e,{t:function(){return z}});var i,o,r,a,l,s,c,d=t(1413),p=t(9439),u=t(5987),f=t(2791),x=t(168),h=t(3081),g=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),m=h.Z.div(i||(i=(0,x.Z)(["\n  position: relative;\n  width: 100%;\n"]))),b=h.Z.div(o||(o=(0,x.Z)(["\n  position: relative;\n"]))),y=h.Z.label(r||(r=(0,x.Z)(["\n  position: absolute;\n  z-index: -1;\n  top: ",";\n  left: ",";\n\n  font-family: 'Roboto', sans-serif;\n  font-size: ",";\n  line-height: ",";\n  color: rgba(239, 237, 232, 0.6);\n\n  transition: top 0.2s ease-out, left 0.2s ease-out;\n\n  "," {\n    top: ",";\n\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.isFocused||n.hasValue?"-16px":"16px"}),(function(n){return n.isFocused||n.hasValue?"0":"14px"}),(function(n){return n.isFocused||n.hasValue?"10px":"14px"}),(function(n){return n.isFocused||n.hasValue?"1.5":"1.29"}),g[1],(function(n){return n.isFocused||n.hasValue?"-16px":"15px"}),(function(n){return n.isFocused||n.hasValue?"12px":"16px"}),(function(n){return n.isFocused||n.hasValue?"1.29":"1.5"})),v=h.Z.input(a||(a=(0,x.Z)(["\n  width: 100%;\n  padding: 14px;\n\n  font-size: 14px;\n  line-height: 1.29;\n\n  color: #efede8;\n\n  background-color: inherit;\n\n  border-radius: 12px;\n  border: 1px solid rgba(239, 237, 232, 0.3);\n\n  outline: none;\n\n  &:hover,\n  &:focus {\n    border-color: #e6533c;\n    & ~ svg {\n      stroke: #e6533c;\n    }\n  }\n\n  ","\n\n  ","\n\n\t  "," {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n\n  ","\n"])),(function(n){return n.className.includes("valid")&&"\n    border-color: #3CBF61;\n\t\t& ~ svg {\n      stroke: #3CBF61;\n    }\n  "}),(function(n){return n.className.includes("invalid")&&"\n    border-color: #D80027;\n\t\t& ~ svg {\n      stroke: #D80027;\n    }\n  "}),g[1],(function(n){return n.inputStyles})),Z=h.Z.div(l||(l=(0,x.Z)(["\n  position: absolute;\n  bottom: -16px;\n  left: 0;\n\n  display: flex;\n  align-items: center;\n  gap: 3px;\n\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 1.5;\n  letter-spacing: 0.12px;\n\n  ","\n\n  ","\n"])),(function(n){return n.className.includes("valid")&&"\n    color: #3CBF61; \n    fill: #3CBF61; \n  "}),(function(n){return n.className.includes("invalid")&&"\n    color: #D80027; \n    fill: #D80027; \n  "})),j=h.Z.button(s||(s=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n\n  position: absolute;\n  right: 14px;\n  top: 16px;\n\n  cursor: pointer;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n\n  & svg {\n    stroke: #efede8;\n  }\n"]))),w=h.Z.svg(c||(c=(0,x.Z)(["\n  width: 18px;\n  height: 18px;\n\n  position: absolute;\n  right: 14px;\n  top: 17px;\n\n  stroke: #efede8;\n\n  z-index: -1;\n"]))),k=t(4801),S=t(184),_=["calendar","field","form","reference","onClick","valueDate","readOnly"],z=function(n){var e=n.calendar,t=n.field,i=n.form,o=n.reference,r=n.onClick,a=(n.valueDate,n.readOnly),l=(0,u.Z)(n,_),s=l.type,c=l.label,x=void 0===c?"":c,h=l.successFeedback,g=void 0===h||h,z=l.passwordBtn,C=void 0!==z&&z,D=l.autoComplete,F=void 0===D?"on":D,M=l.inputStyles,R=void 0===M?{}:M,E=t.name,B=t.value,N=t.onBlur,L=(0,f.useState)(!1),W=(0,p.Z)(L,2),q=W[0],V=W[1],A=(0,f.useState)(!1),I=(0,p.Z)(A,2),O=I[0],U=I[1],G=i.errors[E],H=i.touched[E],J=B.toString().trim().length>0,P=!!q&&J||H;return(0,S.jsxs)(m,{children:[(0,S.jsxs)(b,{children:[(0,S.jsx)(y,{htmlFor:E,isFocused:q,hasValue:!!B,children:x}),(0,S.jsx)(v,(0,d.Z)((0,d.Z)({},t),{},{id:E,ref:o,type:O?"text":s,autoComplete:F,className:"".concat(P?G?"invalid":g&&"valid":""),onFocus:function(){V(!0)},onBlur:function(n){N(n),V(!1)},onClick:r,inputStyles:R,readOnly:a})),C&&(0,S.jsx)(j,{type:"button",onClick:function(){U((function(n){return!n}))},children:(0,S.jsx)("svg",{width:20,height:20,children:(0,S.jsx)("use",{href:"".concat(k.Z).concat(O?"#icon-eyeoff":"#icon-eye")})})}),e&&(0,S.jsx)(w,{fill:"transparent",children:(0,S.jsx)("use",{href:"".concat(k.Z,"#icon-calendar")})})]}),P&&(0,S.jsxs)(Z,{"aria-live":"polite",className:"".concat(G?"invalid":g&&"valid"),children:[(0,S.jsx)("svg",{width:13,height:13,children:(0,S.jsx)("use",{href:"".concat(k.Z,"#icon-success")})}),G||g&&"Success ".concat(x.toLowerCase())]})]})}},8284:function(n,e,t){t.d(e,{y:function(){return v}});var i=t(1413),o=t(9439),r=t(5987),a=t(7715),l=t(282),s=t(2114),c=t(1417),d=t(5291),p=t(890),u=t(5705),f=t(184),x=["label","formControlStyling","formLabelStyling","radioStyling","typographyStyling","formControlLabelStyling","radioGroupDirection"],h={mb:2},g={color:"#EFEDE8",fontSize:14,"&.Mui-focused":{color:"#EFEDE8"}},m={color:"rgb(239, 237, 232, 0.6)","&.Mui-checked":{color:"#EF8964"}},b={mb:-1},y={fontSize:14,lineHeight:1.3},v=function(n){var e=n.label,t=n.formControlStyling,v=n.formLabelStyling,Z=n.radioStyling,j=n.typographyStyling,w=n.formControlLabelStyling,k=n.radioGroupDirection,S=(0,r.Z)(n,x),_=(0,u.U$)(S),z=(0,o.Z)(_,1)[0];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(c.Z,{sx:(0,i.Z)((0,i.Z)({},h),t),children:[(0,f.jsx)(d.Z,{id:z.name,sx:(0,i.Z)((0,i.Z)({},g),v),children:e}),(0,f.jsx)(l.Z,(0,i.Z)((0,i.Z)({},z),{},{row:k,children:S.options.map((function(n){return(0,f.jsx)(s.Z,{value:n.value,sx:(0,i.Z)((0,i.Z)({},b),w),control:(0,f.jsx)(a.Z,{size:"small",sx:(0,i.Z)((0,i.Z)({},m),Z)}),label:(0,f.jsx)(p.Z,{sx:(0,i.Z)((0,i.Z)({},y),j),children:n.label})},n.value)}))}))]})})}},5669:function(n,e,t){t.d(e,{c:function(){return c}});var i,o=t(168),r=t(3081),a=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),l=r.Z.button(i||(i=(0,o.Z)(["\n  cursor: pointer;\n\n  padding: ",";\n\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.13;\n  color: #efede8;\n\n  background-color: ",";\n\n  border: 1px solid;\n  border-color: ",";\n  border-radius: 12px;\n\n  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;\n\n  &:hover:not([disabled]),\n  &:focus:not([disabled]) {\n    background-color: ",";\n    border-color: ",";\n  }\n\n  &:disabled {\n    color: rgba(239, 237, 232, 0.6);\n  }\n\n  ","\n\n  "," {\n    padding: 16px 60px;\n    padding: ",";\n\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){var e=n.modalButton,t=n.filled;return e?t?"12px 32px":"12px 36px":"12px 40px"}),(function(n){return n.filled?"#e6533c":"transparent"}),(function(n){return n.filled?"#e6533c":"rgba(239, 237, 232, 0.30)"}),(function(n){return n.filled?"#ef8964":"transparent"}),(function(n){return n.filled?"#ef8964":"#e6533c"}),(function(n){return n.btnStyles}),a[1],(function(n){var e=n.modalButton,t=n.filled;return e?t?"14px 32px":"14px 40px":"16px 60px"}),(function(n){var e=n.modalButton,t=n.filled;return e&&t?"16px":"20px"}),(function(n){var e=n.modalButton,t=n.filled;return e&&t?"1.5":"1.2"})),s=t(184),c=function(n){var e=n.type,t=n.text,i=n.filled,o=n.disabled,r=n.btnStyles,a=n.modalButton,c=n.onClick;return(0,s.jsx)(l,{type:e,filled:i,disabled:o,btnStyles:r,modalButton:a,onClick:c,children:t})}},7915:function(n,e,t){t.r(e),t.d(e,{default:function(){return ie}});var i,o,r,a,l,s,c,d,p,u,f,x,h,g,m,b,y,v,Z,j,w,k,S,_,z,C,D,F=t(9434),M=t(2791),R=t(4217),E=t(5834),B=t(4670),N=t(9273),L=t(168),W=t(3081),q=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),V=W.Z.div(i||(i=(0,L.Z)(["\n  position: relative;\n\n  width: 90px;\n  height: 90px;\n  margin: 0px auto;\n  margin-top: 40px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border: 1px solid #e6533c;\n  border-radius: 50%;\n\n  ","\n\n  "," {\n    width: 150px;\n    height: 150px;\n    margin-top: 64px;\n  }\n\n  "," {\n    margin-top: 0px;\n  }\n"])),"",q[1],q[2]),A=W.Z.svg(o||(o=(0,L.Z)(["\n  width: 62px;\n  height: 62px;\n\n  "," {\n    width: 102px;\n    height: 102px;\n  }\n"])),q[1]),I=W.Z.h2(r||(r=(0,L.Z)(["\n  margin-top: 32px;\n  text-align: center;\n\n  color: #efede8;\n  font-family: Roboto;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.11111;\n\n  "," {\n    font-size: 24px;\n    line-height: 1.16667;\n  }\n"])),q[1]),O=W.Z.h3(a||(a=(0,L.Z)(["\n  margin-top: 4px;\n  text-align: center;\n\n  color: rgba(239, 237, 232, 0.5);\n  font-family: Roboto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.28571;\n\n  "," {\n    margin-top: 8px;\n  }\n"])),q[1]),U=W.Z.input(l||(l=(0,L.Z)(["\n  position: absolute;\n  bottom: 0;\n  translate: 0 +50%;\n  z-index: 1000;\n\n  /*--- to hide input---*/\n  opacity: 0;\n  height: 0;\n  width: 0;\n  line-height: 0;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n"]))),G=W.Z.svg(s||(s=(0,L.Z)(["\n  fill: #e6533c;\n  stroke: #efede8;\n  stroke-width: 0;\n\n  width: 24px;\n  height: 24px;\n  transition-property: transform;\n\n  &:hover {\n    transform: scale(1.2);\n    transition-duration: 400ms;\n  }\n\n  "," {\n    width: 32px;\n    height: 32px;\n  }\n"])),q[1]),H=(W.Z.img(c||(c=(0,L.Z)([""]))),W.Z.button(d||(d=(0,L.Z)(["\n  position: absolute;\n  bottom: 0;\n  translate: 0 +50%;\n\n  border: none;\n  background: none;\n  cursor: pointer;\n"])))),J=t(4801),P=t(184),Y=(0,P.jsx)(A,{children:(0,P.jsx)("use",{href:J.Z+"#user"})}),T=(0,P.jsx)(G,{children:(0,P.jsx)("use",{href:J.Z+"#icon-addavatar"})}),$=function(n){var e=n.name,t=n.avatarUrls,i=void 0===t?Y:t,o=(0,B.Z)("(min-width:768px)"),r=Object.keys(i).length>0,a=(0,M.useRef)(null),l=(0,F.I0)();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(V,{children:[r?(0,P.jsx)("img",{src:o?i.desktop:i.mobile,alt:"User's avatar",style:{width:"100%",height:"100%",borderRadius:"50%"}}):Y,(0,P.jsx)(U,{ref:a,type:"file",accept:"image/*,.png,.jpg,.gif,.web",onChange:function(n){var e=new FormData;e.set("avatar",n.target.files[0]),l((0,N.n1)(e)),n.target.value=""}}),(0,P.jsx)(H,{type:"button",onClick:function(){a.current.click()},children:T})]}),(0,P.jsx)(I,{children:e}),(0,P.jsx)(O,{children:"User"})]})},K=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),Q=W.Z.div(p||(p=(0,L.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  margin-top: 40px;\n\n  "," {\n    gap: 16px;\n    margin-top: 32px;\n  }\n"])),K[1]),X=W.Z.div(u||(u=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 157px;\n  height: 96px;\n  padding: 10px;\n  justify-content: space-between;\n\n  border-radius: 12px;\n  border: 1px solid rgba(239, 237, 232, 0.2);\n  background: #e6533c;\n\n  "," {\n    width: 214px;\n    height: 108px;\n    padding: 14px 18px;\n  }\n"])),K[1]),nn=W.Z.div(f||(f=(0,L.Z)(["\n  display: flex;\n  ","\n  align-items: center;\n  gap: 6px;\n\n  "," {\n    gap: 8px;\n  }\n"])),"",K[1]),en=W.Z.p(x||(x=(0,L.Z)(["\n  color: rgba(239, 237, 232, 0.8);\n  font-family: Roboto;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.33333;\n\n  "," {\n    line-height: 1.5;\n  }\n"])),K[1]),tn=W.Z.p(h||(h=(0,L.Z)(["\n  color: #efede8;\n  font-family: Roboto;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.11111;\n\n  "," {\n    font-size: 24px;\n    line-height: 1.33333;\n  }\n"])),K[1]),on=function(n){var e=n.icon,t=n.label,i=n.number;return(0,P.jsxs)(X,{children:[(0,P.jsxs)(nn,{children:[(0,P.jsx)("svg",{width:"20",height:"20",style:{fill:"#EF8964"},children:(0,P.jsx)("use",{href:J.Z+e})}),(0,P.jsx)(en,{children:t})]}),(0,P.jsx)(tn,{children:i})]})},rn=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),an=W.Z.div(g||(g=(0,L.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 40px;\n  align-items: flex-start;\n\n  "," {\n    margin-top: 32px;\n  }\n"])),rn[1]),ln=W.Z.div(m||(m=(0,L.Z)(["\n  width: 303px;\n\n  color: rgba(239, 237, 232, 0.3);\n  font-family: Roboto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.28571;\n\n  "," {\n    width: 407px;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n"])),rn[1]),sn=(0,P.jsx)("svg",{width:"24",height:"24",style:{fill:"#EFA082",stroke:"#EFEDE8",strokeWidth:"0"},children:(0,P.jsx)("use",{href:J.Z+"#icon-warning"})}),cn=function(){return(0,P.jsxs)(an,{children:[sn,(0,P.jsx)(ln,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]})},dn=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),pn=W.Z.button(b||(b=(0,L.Z)(["\n  margin-left: auto;\n  margin-top: 41px;\n  padding: 6px;\n\n  display: flex;\n  justify-content: center;\n  alight-items: center;\n  gap: 8px;\n\n  background: none;\n  border: none;\n  cursor: pointer;\n\n  transition-property: transform;\n\n  &:hover {\n    transform: scale(1.2);\n    transition-duration: 400ms;\n  }\n\n  "," {\n    margin-top: 32px;\n    margin-bottom: 38px;\n  }\n\n  "," {\n    ","\n    margin-bottom: 0px;\n  }\n"])),dn[1],dn[2],""),un=W.Z.span(y||(y=(0,L.Z)(["\n  color: #efede8;\n  font-family: Roboto;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.28571;\n\n  "," {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n"])),dn[1]),fn=(0,P.jsx)("svg",{width:"20",height:"20",style:{stroke:"#E6533C"},children:(0,P.jsx)("use",{href:J.Z+"#icon-logout"})}),xn=function(){var n=(0,F.I0)();return(0,P.jsxs)(pn,{type:"button",onClick:function(){n((0,N.ni)())},children:[(0,P.jsx)(un,{children:"Logout"}),fn]})},hn=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),gn=W.Z.div(v||(v=(0,L.Z)(["\n  margin-bottom: 18px;\n\n  "," {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    padding-left: 49px;\n\n    margin-bottom: 0px;\n\n    border-left-style: solid;\n    border-width: 1px;\n    border-color: #efede833;\n  }\n"])),hn[2]),mn="#icon-cutlery",bn="Daily calorie intake",yn="#icon-dumbbell",vn="Daily norm of sports",Zn="110 min",jn=function(n){var e=n.userInfo,t=e.name,i=e.avatarUrls,o=e.bmr;return(0,P.jsxs)(gn,{children:[(0,P.jsx)($,{name:t,avatarUrls:i}),(0,P.jsxs)(Q,{children:[(0,P.jsx)(on,{icon:mn,label:bn,number:o}),(0,P.jsx)(on,{icon:yn,label:vn,number:Zn})]}),(0,P.jsx)(cn,{}),(0,P.jsx)(xn,{})]})},wn=t(1413),kn=t(5987),Sn=t(9439),_n=t(5705),zn=t(6727),Cn=t(6971),Dn=t(3216),Fn=t(1951),Mn=t(5091),Rn=t(8284),En=t(5669),Bn=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),Nn=W.Z.p(Z||(Z=(0,L.Z)(["\n  color: rgba(239, 237, 232, 0.5);\n  font-family: Roboto;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  margin-bottom: 16px;\n\n  "," {\n    font-size: 14px;\n    line-height: 1.28571;\n    margin-bottom: 18px;\n  }\n"])),Bn[1]),Ln=W.Z.div(j||(j=(0,L.Z)(["\n  "," {\n    margin-bottom: 66px;\n  }\n\n  "," {\n    margin-bottom: 54px;\n  }\n\n  "," {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin-bottom: 0px;\n  }\n"])),Bn[0],Bn[1],Bn[2]),Wn=W.Z.div(w||(w=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 36px;\n\n  "," {\n    gap: none;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 40px;\n  }\n"])),Bn[1]),qn=W.Z.div(k||(k=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  ","\n  gap: 36px;\n  ","\n\n  margin-bottom: 20px;\n\n  "," {\n    flex-direction: row;\n    gap: 0;\n    justify-content: space-between;\n\n    margin-bottom: 16px;\n  }\n\n  "," {\n    gap: 14px;\n  }\n"])),"","",Bn[1],Bn[2]),Vn=W.Z.div(S||(S=(0,L.Z)(["\n  display: flex;\n  flex-direction: row;\n  ","\n  gap: 14px;\n  justify-content: space-between;\n\n  ","\n\n  "," {\n    gap: 20px;\n    justify-content: space-between;\n  }\n"])),"","",Bn[1]),An=W.Z.div(_||(_=(0,L.Z)(["\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n\n  "," {\n    gap: 32px;\n    justify-content: flex-start;\n    margin-bottom: 16px;\n  }\n"])),Bn[1]),In=W.Z.div(z||(z=(0,L.Z)(["\n  ","\n"])),""),On=W.Z.div(C||(C=(0,L.Z)([""]))),Un=W.Z.div(D||(D=(0,L.Z)(["\n  margin-bottom: 24px;\n"]))),Gn=t(2605),Hn=["name","email","birthday"],Jn=new Date,Pn=new Date(Jn.getFullYear()-18,Jn.getMonth(),Jn.getDate());var Yn,Tn,$n=zn.Ry({name:zn.Z_().required("Name is required"),height:zn.Rx("Number").typeError("Must be a number").positive("Must be positive.").min(150,"Must be at least 150cm").required("Height is required"),currentWeight:zn.Rx().typeError("Must be a number").positive("Must be positive.").min(35,"Must be at least 35kg").required("Current weight is required"),desiredWeight:zn.Rx().typeError("Must be a number").positive("Must be positive.").min(35,"Must be at least 35kg").required("Desired weight is required"),birthday:zn.hT().transform((function(n,e){if((0,Cn.default)(e))return e;var t=e.split("."),i=(0,Sn.Z)(t,3),o=i[0],r=i[1],a=i[2],l="".concat(a,"-").concat(r,"-").concat(o);return(0,Dn.default)(l,"yyyy-MM-dd",new Date)})).max(Pn,"Age must be 18+").required("Age is required")}),Kn=function(n){var e=n.userInfo,t=e.name,i=e.email,o=e.userParams,r=o.height,a=o.currentWeight,l=o.desiredWeight,s=o.birthday,c=o.blood,d=o.sex,p=o.levelActivity,u=(0,Fn.default)(new Date(s),"dd.MM.yyy"),f=(0,B.Z)("(min-width:768px)"),x={name:t,email:i,height:r,currentWeight:a,desiredWeight:l,birthday:u,blood:c,sex:d,levelActivity:p},h=(0,F.I0)();return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(_n.J9,{initialValues:x,validationSchema:$n,onSubmit:function(n,e){var t=n.name,i=(n.email,n.birthday),o=(0,kn.Z)(n,Hn),r=i.split("."),a=(0,Sn.Z)(r,3),l=a[0],s=a[1],c=a[2],d="".concat(c,"-").concat(s,"-").concat(l),p=(0,wn.Z)((0,wn.Z)({},o),{},{birthday:d});h((0,N.Ee)({name:t})),h((0,N.IO)(p))},children:(0,P.jsx)(Ln,{children:(0,P.jsxs)(_n.l0,{children:[(0,P.jsx)(Nn,{children:"Basic info"}),(0,P.jsxs)(Wn,{children:[(0,P.jsx)(_n.gN,{name:"name",label:"Name",type:"text",autoComplete:"off",successFeedback:!1,component:Mn.t}),(0,P.jsx)(_n.gN,{name:"email",type:"text",autoComplete:"off",successFeedback:!1,readOnly:!0,component:Mn.t,inputStyles:{color:"rgba(239, 237, 232, 0.6)"}})]}),(0,P.jsxs)(qn,{children:[(0,P.jsxs)(Vn,{children:[(0,P.jsx)(_n.gN,{label:"Height",name:"height",autoComplete:"off",successFeedback:!1,component:Mn.t,inputStyles:{width:"165px"}}),(0,P.jsx)(_n.gN,{label:"Current Weight",name:"currentWeight",autoComplete:"off",successFeedback:!1,component:Mn.t,inputStyles:{width:"156px"}})]}),(0,P.jsxs)(Vn,{children:[(0,P.jsx)(_n.gN,{label:"Desired Weight",name:"desiredWeight",autoComplete:"off",successFeedback:!1,component:Mn.t,inputStyles:{width:"165px"}}),(0,P.jsx)(_n.gN,{name:"birthday",successFeedback:!1,component:Gn.a,inputStyles:{width:"156px"}})]})]}),(0,P.jsxs)(An,{children:[(0,P.jsx)(In,{children:(0,P.jsx)(Rn.y,{label:"Blood",name:"blood",radioGroupDirection:!0,formControlStyling:{mb:0},formControlLabelStyling:{mb:0,mr:1.1},typographyStyling:f?{fontSize:16}:{fontSize:14},formLabelStyling:f?{fontSize:14,color:"rgba(239, 237, 232, 0.50)"}:{fontSize:12,color:"rgba(239, 237, 232, 0.50)"},options:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"}]})}),(0,P.jsx)(On,{children:(0,P.jsx)(Rn.y,{label:"Sex",name:"sex",radioGroupDirection:!0,formControlStyling:{mb:0},formControlLabelStyling:{mb:0,mr:1.1},typographyStyling:f?{fontSize:16}:{fontSize:14},formLabelStyling:f?{fontSize:14,color:"rgba(239, 237, 232, 0.50)"}:{fontSize:12,color:"rgba(239, 237, 232, 0.50)"},options:[{value:"male",label:"Male"},{value:"female",label:"Female"}]})})]}),(0,P.jsx)(Un,{children:(0,P.jsx)(Rn.y,{label:"Level activity",name:"levelActivity",radioGroupDirection:!1,typographyStyling:f?{fontSize:16}:{fontSize:14},formControlLabelStyling:f?{mb:-1}:{mb:.5},formLabelStyling:f?{mb:.5,fontSize:14,color:"rgba(239, 237, 232, 0.50)"}:{mb:.5,fontSize:12,color:"rgba(239, 237, 232, 0.50)"},options:[{value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}]})}),(0,P.jsx)(En.c,{type:"submit",text:"Save",filled:!0,disabled:!1})]})})})})},Qn=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),Xn=W.Z.div(Yn||(Yn=(0,L.Z)(["\n  "," {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    margin-top: 32px;\n    margin-bottom: 36px;\n  }\n"])),Qn[2]),ne=[320,768,1440].map((function(n){return"@media screen and (min-width: ".concat(n,"px)")})),ee=W.Z.h1(Tn||(Tn=(0,L.Z)(["\n  margin-top: 40px;\n\n  color: #efede8;\n  font-family: Roboto;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.16667;\n\n  "," {\n    margin-top: 72px;\n\n    font-size: 32px;\n    line-height: 1.375;\n  }\n"])),ne[1]),te=function(){return(0,P.jsx)(ee,{children:"Profile Settings"})},ie=function(){var n=(0,F.I0)();(0,M.useEffect)((function(){n((0,N.n6)())}),[]);var e=(0,F.v9)(R.dy);return(0,P.jsxs)(E.W,{children:[(0,P.jsx)(te,{}),(0,P.jsxs)(Xn,{children:[(0,P.jsx)(jn,{userInfo:e}),(0,P.jsx)(Kn,{userInfo:e})]})]})}}}]);
//# sourceMappingURL=915.73875827.chunk.js.map