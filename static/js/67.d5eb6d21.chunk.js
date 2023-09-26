"use strict";(self.webpackChunkpower_pulse_frontend=self.webpackChunkpower_pulse_frontend||[]).push([[67],{3814:function(n,e,t){t.d(e,{f:function(){return w}});var i,r,o,a,d=t(9513),c=t.n(d),l=t(168),s=t(3081),p=s.Z.div(i||(i=(0,l.Z)(["\n  margin: 0 auto 14px;\n  display: flex;\n  justify-content: center;\n  gap: 3px;\n  position: relative;\n"]))),x=s.Z.select(r||(r=(0,l.Z)(["\n  color: #efede8;\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: normal;\n  border: none;\n  background: transparent;\n  outline: none;\n  /* -webkit-appearance: none; \n  -moz-appearance: none; \n  appearance: none; */\n\n  :focus {\n    background-color: #ef8964;\n  }\n"]))),f=s.Z.button(o||(o=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n  cursor: pointer;\n  transform: rotate(270deg);\n\n  svg {\n    stroke: ",";\n    fill: none;\n    stroke-width: 1.5px;\n  }\n\n  :last-of-type {\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.color})),u=s.Z.div(a||(a=(0,l.Z)(["\n  .react-datepicker__wrapper {\n    position: absolute;\n  }\n  .react-datepicker {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-15%, 0%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    padding: 14px;\n    background-color: #ef8964;\n    font-family: 'Roboto', sans-serif;\n    border-radius: 8px;\n  }\n  .react-datepicker__month-container {\n    float: inherit;\n    box-sizing: border-box;\n  }\n  .react-datepicker__day-names {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 14px;\n    margin-bottom: 8px;\n    border-top: 1px solid rgba(239, 237, 232, 0.2);\n  }\n  .react-datepicker__header {\n    position: relative;\n    background-color: #ef8964;\n  }\n\n  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {\n    border-bottom: 0px;\n    padding: 0;\n  }\n  .react-datepicker__day\n    react-datepicker__day--018.react-datepicker__day--selected\n    react-datepicker__day--today {\n    outline: none;\n    border: none;\n  }\n  // .react-datepicker__current-month {\n  //   color: #efede8;\n  //   font-family: 'Roboto', sans-serif;\n  //   font-size: 16px;\n  //   font-weight: 500;\n  //   line-height: normal;\n  //   margin-bottom: 14px;\n  // }\n  .react-datepicker__day-name {\n    margin: 0;\n    color: rgba(239, 237, 232, 0.5);\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n\n  .react-datepicker__day--disabled {\n    opacity: 25%;\n  }\n  .react-datepicker__navigation {\n    margin-top: 14px;\n    color: white;\n  }\n  .react-datepicker__navigation--previous {\n    left: 7px;\n    width: 18px;\n    height: 18px;\n  }\n  .react-datepicker__navigation--next {\n    right: 7px;\n    width: 18px;\n    height: 18px;\n  }\n  .react-datepicker__navigation-icon::before:hover:focus {\n    border-color: white;\n  }\n  .react-datepicker__week {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: white;\n  }\n  .react-datepicker__day {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    margin: 0;\n    border-radius: 50%;\n    color: #efede8;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    text-align: center;\n    width: 24px;\n    height: 24px;\n  }\n  .react-datepicker__month {\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 0;\n  }\n  .react-datepicker__day--selected {\n    background-color: #040404;\n    color: #efede8;\n    font-size: 14px;\n  }\n  .react-datepicker__day--selected:hover {\n    border-radius: 50%;\n    background-color: white;\n  }\n  .react-datepicker__day:hover {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n  .react-datepicker__day--keyboard-selected {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n  .react-datepicker__day--outside-month {\n    opacity: 50%;\n  }\n  .react-datepicker__triangle {\n    display: none;\n  }\n"]))),h=(t(8639),t(2599)),g=t(3747),m=t(4801),b=t(184),w=function(n){var e,t,i=n.input,r=n.selectedDate,o=n.setSelectedDate,a=n.createdAt,d=(e=1920,t=(0,h.default)(new Date)+1,new Array(t-e).fill().map((function(n,t){return t+e}))),l=["January","February","March","April","May","June","July","August","September","October","November","December"];return(0,b.jsx)(u,{children:(0,b.jsx)(c(),{selected:r,onChange:function(n){o(n)},renderCustomHeader:function(n){var e=n.date,t=n.changeYear,i=n.changeMonth,r=n.decreaseMonth,o=n.increaseMonth,a=n.prevMonthButtonDisabled,c=n.nextMonthButtonDisabled;return(0,b.jsxs)(p,{children:[(0,b.jsx)(f,{onClick:r,disabled:a,color:a?"#efede866":"#efede8",children:(0,b.jsx)("svg",{width:"16",height:"16",children:(0,b.jsx)("use",{href:m.Z+"#icon-chevronup"})})}),(0,b.jsx)(x,{value:l[(0,g.default)(e)],onChange:function(n){var e=n.target.value;return i(l.indexOf(e))},children:l.map((function(n){return(0,b.jsx)("option",{value:n,children:n},n)}))}),(0,b.jsx)(x,{value:(0,h.default)(e),onChange:function(n){var e=n.target.value;return t(e)},children:d.map((function(n){return(0,b.jsx)("option",{value:n,children:n},n)}))}),(0,b.jsx)(f,{onClick:o,disabled:c,color:c?"#efede866":"#efede8",children:(0,b.jsx)("svg",{width:"16",height:"16",children:(0,b.jsx)("use",{href:m.Z+"#icon-chevronup"})})})]})},customInput:i,calendarStartDay:1,minDate:a||void 0})})}},5834:function(n,e,t){t.d(e,{W:function(){return d}});var i,r=t(168),o=t(3081).Z.div(i||(i=(0,r.Z)(["\n  max-width: 375px;\n  margin: 0 auto;\n  padding: 62px 20px 0 20px;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    padding: 84px 32px 0 32px;\n  }\n  @media screen and (min-width: 1440px) {\n    max-width: 1440px;\n    height: 100vh;\n    padding: 84px 96px 0 96px;\n  }\n"]))),a=t(184),d=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},1523:function(n,e,t){t.d(e,{D:function(){return d}});var i,r=t(168),o=t(3081).Z.h1(i||(i=(0,r.Z)(["\nfont-family: Roboto;\nfont-size: 24px;\nfont-style: normal;\nfont-weight: 700;\nline-height: 1.16;\n\n @media (min-width: 768px){\nfont-size: 32px;\nline-height: 1.37; \n }\n  @media (min-width: 1440px){\n \n\n }\n"]))),a=t(184),d=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},8067:function(n,e,t){t.r(e),t.d(e,{default:function(){return rn}});var i,r,o,a,d,c,l,s,p,x,f,u,h,g,m,b,w,v,y=t(9439),k=t(5834),Z=t(168),j=t(3081),_=j.Z.div(i||(i=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (min-width: 768px) {\n    max-width: 593px;\n  }\n\n  @media (min-width: 1440px) {\n    max-width: 390px;\n  }\n"]))),D=j.Z.div(r||(r=(0,Z.Z)(["\n  padding-left: 32px;\n  display: flex;\n  gap: 8px;\n  position: relative;\n\n  @media (min-width: 768px) {\n    padding: 0;\n  }\n"]))),C=j.Z.svg(o||(o=(0,Z.Z)(["\n  stroke: #efede8;\n  fill: #ef8964;\n  stroke-width: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  @media (min-width: 768px) {\n    position: relative;\n  }\n"]))),z=j.Z.p(a||(a=(0,Z.Z)(["\n  color: rgba(239, 237, 232, 0.3);\n  font-size: 14px;\n  line-height: 18px;\n  max-width: 303px;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 24px;\n    max-width: 561px;\n  }\n\n  @media (min-width: 1440px) {\n    max-width: 358px;\n  }\n"]))),S=t(4801),M=j.Z.ul(d||(d=(0,Z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px 13px;\n  margin-bottom: 20px;\n\n  @media (min-width: 768px) {\n    gap: 16px;\n    margin-bottom: 32px;\n  }\n\n  @media (min-width: 1440px) {\n    margin-bottom: 48px;\n  }\n"]))),R=j.Z.li(c||(c=(0,Z.Z)(["\n  flex-basis: calc((100% - 13px) / 2);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  height: 96px;\n  padding: 14px;\n  justify-content: space-between;\n  border-radius: 12px;\n  border: 1px solid;\n  border-color: ",";\n  background: rgba(239, 237, 232, 0.05);\n\n  :nth-of-type(-n + 2) {\n    background: #e6533c;\n  }\n\n  @media (min-width: 768px) {\n    flex-basis: calc((100% - 32px) / 3);\n    min-height: 116px;\n    order: ",";\n  }\n\n  @media (min-width: 1440px) {\n    flex-basis: calc((100% - 16px) / 2);\n    order: unset;\n  }\n"])),(function(n){var e=n.borderColor;return e||"rgba(239, 237, 232, 0.2)"}),(function(n){var e=n.order;return e||"unset"})),A=j.Z.div(l||(l=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"]))),E=j.Z.p(s||(s=(0,Z.Z)(["\n  color: ",";\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"])),(function(n){return n.color})),T=j.Z.p(p||(p=(0,Z.Z)(["\n  color: #efede8;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 20px;\n\n  @media (min-width: 768px) {\n    line-height: 32px;\n  }\n"]))),W=j.Z.svg(x||(x=(0,Z.Z)(["\n  fill: #ef8964;\n"]))),J=t(2791),B=t(184),F=function(n){var e=n.data,t=(0,J.useState)(window.innerWidth),i=(0,y.Z)(t,2),r=i[0],o=i[1],a=function(){o(window.innerWidth)};return(0,J.useEffect)((function(){return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[]),(0,B.jsx)(M,{children:e.map((function(n,e){var t=n.icon,i=n.title,o=n.value,a=n.borderColor,d=e<2?"rgba(239, 237, 232, 0.8)":"rgba(239, 237, 232, 0.4)",c=r>=768?e%2===0?1:2:e+1;return(0,B.jsxs)(R,{order:c,borderColor:a,children:[(0,B.jsxs)(A,{children:[(0,B.jsx)(W,{width:"20",height:"20",children:(0,B.jsx)("use",{href:S.Z+t})}),(0,B.jsx)(E,{color:d,children:i})]}),(0,B.jsxs)(T,{children:[o,1===e||5===e?" min":""]})]},e)}))})},H=function(n){var e=n.dailyCalories,t=n.totalCalories,i=n.totalTime,r=n.burnedCalories,o=110,a=[{icon:"#icon-cutlery",title:"daily calorie intake",value:e||0},{icon:"#icon-dumbbell",title:"daily norm of sports",value:o},{icon:"#icon-apple",title:"calories consumed",value:t||0},{icon:"#icon-calories",title:"calories burned",value:r||0},{icon:"#icon-bubble",title:"the rest of the calories",value:e?t?e-t:e-0:0,borderColor:e<t?"red":"rgba(239, 237, 232, 0.2)"},{icon:"#icon-running",title:"the rest of sports",value:i?o-i<=0?"+ ".concat(Math.abs(o-i)):o-i:o,borderColor:o<i?"green":"rgba(239, 237, 232, 0.2)"}];return(0,B.jsxs)(_,{children:[(0,B.jsx)(F,{data:a}),(0,B.jsxs)(D,{children:[(0,B.jsx)(C,{width:"24",height:"24",children:(0,B.jsx)("use",{href:S.Z+"#icon-warning"})}),(0,B.jsx)(z,{img:S.Z+"#icon-warning",children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},L=t(1523),O=j.Z.button(f||(f=(0,Z.Z)(["\n  display: flex;\n  color: #efede8;\n  font-family: 'Roboto', sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 20px;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n  gap: 8px;\n  cursor: pointer;\n\n  @media (min-width: 768px) {\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 32px;\n  }\n"]))),G=j.Z.svg(u||(u=(0,Z.Z)(["\n  stroke: #ef8964;\n  width: 20px;\n  height: 20px;\n\n  @media (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n  }\n"]))),I=j.Z.div(h||(h=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n\n  @media (min-width: 768px) {\n    gap: 40px;\n  }\n"]))),N=j.Z.div(g||(g=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 6px;\n"]))),Y=t(1951),q=j.Z.button(m||(m=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n  cursor: pointer;\n  transform: rotate(270deg);\n\n  svg {\n    stroke: ",";\n  }\n\n  :last-of-type {\n    transform: rotate(90deg);\n\n    svg {\n      stroke: #efede8;\n    }\n  }\n"])),(function(n){return n.color})),K=function(n){var e=n.onClick,t=n.disabled,i=n.color,r=n.icon;return(0,B.jsx)(q,{type:"button",onClick:e,disabled:t,color:i,children:(0,B.jsx)("svg",{width:"16",height:"16",children:(0,B.jsx)("use",{href:S.Z+r})})})},P=t(3814),Q=function(n){var e=n.createdAt,t=n.selectedDate,i=n.setSelectedDate,r=(0,J.useState)(!1),o=(0,y.Z)(r,2),a=o[0],d=o[1],c=function(n){n.setHours(0,0,0,0)};(0,J.useEffect)((function(){c(e),c(t),t.getTime()===e.getTime()?d(!0):d(!1)}),[t,e]);var l=function(){var n=new Date(t);n.setDate(n.getDate()-1),i(n)},s=function(){var n=new Date(t);n.setDate(n.getDate()+1),i(n)},p=(0,J.forwardRef)((function(n,e){n.value;var i=n.onClick;return(0,B.jsxs)(I,{children:[(0,B.jsxs)(O,{onClick:i,ref:e,type:"button",children:[(0,Y.default)(t,"dd/MM/yyyy"),(0,B.jsx)(G,{children:(0,B.jsx)("use",{href:S.Z+"#icon-calendar"})})]}),(0,B.jsxs)(N,{children:[(0,B.jsx)(K,{onClick:l,disabled:a,color:a?"#EFEDE833":"#efede8",icon:"#icon-chevronup"}),(0,B.jsx)(K,{onClick:s,icon:"#icon-chevronup"})]})]})}));return(0,B.jsx)(P.f,{input:(0,B.jsx)(p,{}),selectedDate:t,setSelectedDate:i,createdAt:e})},U=j.Z.div(b||(b=(0,Z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-top: 40px;\n\n  @media (min-width: 768px) {\n    padding-top: 52px;\n    min-height: 116px;\n    align-items: flex-start;\n\n    h1 {\n      align-self: flex-end;\n    }\n  }\n"]))),V=function(n){var e=n.children;return(0,B.jsx)(U,{children:e})},X=j.Z.div(w||(w=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 80px;\n  gap: 40px;\n\n  @media (min-width: 768px) {\n    padding-top: 32px;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 64px;\n    padding-bottom: 40px;\n  }\n\n  @media (min-width: 1440px) {\n    padding-top: 32px;\n    flex-direction: row;\n    gap: 0;\n    justify-content: space-between;\n  }\n"]))),$=function(n){var e=n.children;return(0,B.jsx)(X,{children:e})},nn=j.Z.div(v||(v=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 40px;\n\n  @media (min-width: 768px) {\n    gap: 32px;\n  }\n"]))),en=function(n){var e=n.children;return(0,B.jsx)(nn,{children:e})},tn=t(1132),rn=function(){var n=(0,J.useState)(new Date),e=(0,y.Z)(n,2),t=e[0],i=e[1],r=(0,J.useState)(new Date),o=(0,y.Z)(r,2),a=o[0],d=o[1],c=(0,J.useState)(0),l=(0,y.Z)(c,2),s=l[0],p=l[1],x=(0,J.useState)(0),f=(0,y.Z)(x,2),u=f[0],h=f[1],g=(0,J.useState)(0),m=(0,y.Z)(g,2),b=m[0],w=m[1],v=(0,J.useState)(0),Z=(0,y.Z)(v,2),j=Z[0],_=Z[1],D=function(n){return n.reduce((function(n,e){return n+e}),0)};return(0,J.useEffect)((function(){(0,tn.bG)().then((function(n){d(new Date(n.user.createdAt)),p(n.bmr)})).catch((function(n){console.log(n)})),(0,tn._T)(t).then((function(n){var e=n.map((function(n){return n.calories})),t=D(e);h(t)})).catch((function(n){console.log(n)})),(0,tn.cc)(t).then((function(n){var e=n.map((function(n){return n.time})),t=n.map((function(n){return n.calories})),i=D(e),r=D(t);w(i),_(r)}))}),[t]),(0,B.jsxs)(k.W,{children:[(0,B.jsxs)(V,{children:[(0,B.jsx)(L.D,{children:"Diary"}),(0,B.jsx)(Q,{createdAt:a,selectedDate:t,setSelectedDate:i})]}),(0,B.jsxs)($,{children:[(0,B.jsx)(en,{}),(0,B.jsx)(H,{dailyCalories:s,totalCalories:u,totalTime:b,burnedCalories:j})]})]})}}}]);
//# sourceMappingURL=67.d5eb6d21.chunk.js.map