"use strict";(self.webpackChunkpower_pulse_frontend=self.webpackChunkpower_pulse_frontend||[]).push([[342],{3814:function(n,e,t){t.d(e,{f:function(){return y}});var i,r,o,a,d=t(9513),p=t.n(d),s=t(168),h=t(3081),c=h.Z.div(i||(i=(0,s.Z)(["\n  margin: 0 auto 14px;\n  display: flex;\n  justify-content: center;\n  gap: 3px;\n  position: relative;\n"]))),l=h.Z.select(r||(r=(0,s.Z)(["\n  color: #efede8;\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: normal;\n  border: none;\n  background: transparent;\n  outline: none;\n  /* -webkit-appearance: none; \n  -moz-appearance: none; \n  appearance: none; */\n\n  :focus {\n    background-color: #ef8964;\n  }\n"]))),x=h.Z.button(o||(o=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n  cursor: pointer;\n  transform: rotate(270deg);\n\n  svg {\n    stroke: ",";\n    fill: none;\n    stroke-width: 1.5px;\n  }\n\n  :last-of-type {\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.color})),g=h.Z.div(a||(a=(0,s.Z)(["\n  .react-datepicker__wrapper {\n    position: absolute;\n  }\n  .react-datepicker {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-15%, 0%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    padding: 14px;\n    background-color: #ef8964;\n    font-family: 'Roboto', sans-serif;\n    border-radius: 8px;\n  }\n  .react-datepicker__month-container {\n    float: inherit;\n    box-sizing: border-box;\n  }\n  .react-datepicker__day-names {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 14px;\n    margin-bottom: 8px;\n    border-top: 1px solid rgba(239, 237, 232, 0.2);\n  }\n  .react-datepicker__header {\n    position: relative;\n    background-color: #ef8964;\n  }\n\n  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {\n    border-bottom: 0px;\n    padding: 0;\n  }\n  .react-datepicker__day\n    react-datepicker__day--018.react-datepicker__day--selected\n    react-datepicker__day--today {\n    outline: none;\n    border: none;\n  }\n  // .react-datepicker__current-month {\n  //   color: #efede8;\n  //   font-family: 'Roboto', sans-serif;\n  //   font-size: 16px;\n  //   font-weight: 500;\n  //   line-height: normal;\n  //   margin-bottom: 14px;\n  // }\n  .react-datepicker__day-name {\n    margin: 0;\n    color: rgba(239, 237, 232, 0.5);\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n\n  .react-datepicker__day--disabled {\n    opacity: 25%;\n  }\n  .react-datepicker__navigation {\n    margin-top: 14px;\n    color: white;\n  }\n  .react-datepicker__navigation--previous {\n    left: 7px;\n    width: 18px;\n    height: 18px;\n  }\n  .react-datepicker__navigation--next {\n    right: 7px;\n    width: 18px;\n    height: 18px;\n  }\n  .react-datepicker__navigation-icon::before:hover:focus {\n    border-color: white;\n  }\n  .react-datepicker__week {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: white;\n  }\n  .react-datepicker__day {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    margin: 0;\n    border-radius: 50%;\n    color: #efede8;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    text-align: center;\n    width: 24px;\n    height: 24px;\n  }\n  .react-datepicker__month {\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 0;\n  }\n  .react-datepicker__day--selected {\n    background-color: #040404;\n    color: #efede8;\n    font-size: 14px;\n  }\n  .react-datepicker__day--selected:hover {\n    border-radius: 50%;\n    background-color: white;\n  }\n  .react-datepicker__day:hover {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n  .react-datepicker__day--keyboard-selected {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n  .react-datepicker__day--outside-month {\n    opacity: 50%;\n  }\n  .react-datepicker__triangle {\n    display: none;\n  }\n"]))),f=(t(8639),t(2599)),m=t(3747),u=t(4801),w=t(184),y=function(n){var e,t,i=n.input,r=n.selectedDate,o=n.setSelectedDate,a=n.createdAt,d=(e=1920,t=(0,f.default)(new Date)+1,new Array(t-e).fill().map((function(n,t){return t+e}))),s=["January","February","March","April","May","June","July","August","September","October","November","December"];return(0,w.jsx)(g,{children:(0,w.jsx)(p(),{selected:r,onChange:function(n){o(n)},renderCustomHeader:function(n){var e=n.date,t=n.changeYear,i=n.changeMonth,r=n.decreaseMonth,o=n.increaseMonth,a=n.prevMonthButtonDisabled,p=n.nextMonthButtonDisabled;return(0,w.jsxs)(c,{children:[(0,w.jsx)(x,{onClick:r,disabled:a,color:a?"#efede866":"#efede8",children:(0,w.jsx)("svg",{width:"16",height:"16",children:(0,w.jsx)("use",{href:u.Z+"#icon-chevronup"})})}),(0,w.jsx)(l,{value:s[(0,m.default)(e)],onChange:function(n){var e=n.target.value;return i(s.indexOf(e))},children:s.map((function(n){return(0,w.jsx)("option",{value:n,children:n},n)}))}),(0,w.jsx)(l,{value:(0,f.default)(e),onChange:function(n){var e=n.target.value;return t(e)},children:d.map((function(n){return(0,w.jsx)("option",{value:n,children:n},n)}))}),(0,w.jsx)(x,{onClick:o,disabled:p,color:p?"#efede866":"#efede8",children:(0,w.jsx)("svg",{width:"16",height:"16",children:(0,w.jsx)("use",{href:u.Z+"#icon-chevronup"})})})]})},customInput:i,calendarStartDay:1,minDate:a||void 0})})}},5834:function(n,e,t){t.d(e,{W:function(){return d}});var i,r=t(168),o=t(3081).Z.div(i||(i=(0,r.Z)(["\n  max-width: 375px;\n  margin: 0 auto;\n  padding: 62px 20px 0 20px;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    padding: 84px 32px 0 32px;\n  }\n  @media screen and (min-width: 1440px) {\n    max-width: 1440px;\n    height: 100vh;\n    padding: 84px 96px 0 96px;\n  }\n"]))),a=t(184),d=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},1523:function(n,e,t){t.d(e,{D:function(){return d}});var i,r=t(168),o=t(3081).Z.h1(i||(i=(0,r.Z)(["\nfont-family: Roboto;\nfont-size: 24px;\nfont-style: normal;\nfont-weight: 700;\nline-height: 1.16;\n\n @media (min-width: 768px){\nfont-size: 32px;\nline-height: 1.37; \n }\n  @media (min-width: 1440px){\n \n\n }\n"]))),a=t(184),d=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},1342:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ie}});var i,r,o,a,d,p,s,h,c,l,x,g,f,m,u,w,y,b,Z,v,j,k,_,C,D,z,M,R,S,I,E,A,K,T,W,B,N,P,q,H,L,O,F=t(9439),G=t(5834),J=t(168),V=t(3081),Y=V.Z.div(i||(i=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (min-width: 768px) {\n    max-width: 593px;\n  }\n\n  @media (min-width: 1440px) {\n    max-width: 390px;\n  }\n"]))),$=V.Z.div(r||(r=(0,J.Z)(["\n  padding-left: 32px;\n  display: flex;\n  gap: 8px;\n  position: relative;\n\n  @media (min-width: 768px) {\n    padding: 0;\n  }\n"]))),Q=V.Z.svg(o||(o=(0,J.Z)(["\n  stroke: #efede8;\n  fill: #ef8964;\n  stroke-width: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  @media (min-width: 768px) {\n    position: relative;\n  }\n"]))),U=V.Z.p(a||(a=(0,J.Z)(["\n  color: rgba(239, 237, 232, 0.3);\n  font-size: 14px;\n  line-height: 18px;\n  max-width: 303px;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 24px;\n    max-width: 561px;\n  }\n\n  @media (min-width: 1440px) {\n    max-width: 358px;\n  }\n"]))),X=t(4801),nn=V.Z.ul(d||(d=(0,J.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px 13px;\n  margin-bottom: 20px;\n\n  @media (min-width: 768px) {\n    gap: 16px;\n    margin-bottom: 32px;\n  }\n\n  @media (min-width: 1440px) {\n    margin-bottom: 48px;\n  }\n"]))),en=V.Z.li(p||(p=(0,J.Z)(["\n  flex-basis: calc((100% - 13px) / 2);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  height: 96px;\n  padding: 14px;\n  justify-content: space-between;\n  border-radius: 12px;\n  border: 1px solid;\n  border-color: ",";\n  background: rgba(239, 237, 232, 0.05);\n\n  :nth-of-type(-n + 2) {\n    background: #e6533c;\n  }\n\n  @media (min-width: 768px) {\n    flex-basis: calc((100% - 32px) / 3);\n    min-height: 116px;\n    order: ",";\n  }\n\n  @media (min-width: 1440px) {\n    flex-basis: calc((100% - 16px) / 2);\n    order: unset;\n  }\n"])),(function(n){var e=n.borderColor;return e||"rgba(239, 237, 232, 0.2)"}),(function(n){var e=n.order;return e||"unset"})),tn=V.Z.div(s||(s=(0,J.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"]))),rn=V.Z.p(h||(h=(0,J.Z)(["\n  color: ",";\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"])),(function(n){return n.color})),on=V.Z.p(c||(c=(0,J.Z)(["\n  color: #efede8;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 20px;\n\n  @media (min-width: 768px) {\n    line-height: 32px;\n  }\n"]))),an=V.Z.svg(l||(l=(0,J.Z)(["\n  fill: #ef8964;\n"]))),dn=t(2791),pn=t(184),sn=function(n){var e=n.data,t=(0,dn.useState)(window.innerWidth),i=(0,F.Z)(t,2),r=i[0],o=i[1],a=function(){o(window.innerWidth)};return(0,dn.useEffect)((function(){return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[]),(0,pn.jsx)(nn,{children:e.map((function(n,e){var t=n.icon,i=n.title,o=n.value,a=n.borderColor,d=e<2?"rgba(239, 237, 232, 0.8)":"rgba(239, 237, 232, 0.4)",p=r>=768?e%2===0?1:2:e+1;return(0,pn.jsxs)(en,{order:p,borderColor:a,children:[(0,pn.jsxs)(tn,{children:[(0,pn.jsx)(an,{width:"20",height:"20",children:(0,pn.jsx)("use",{href:X.Z+t})}),(0,pn.jsx)(rn,{color:d,children:i})]}),(0,pn.jsxs)(on,{children:[o,1===e||5===e?" min":""]})]},e)}))})},hn=function(n){var e=n.dailyCalories,t=n.totalCalories,i=n.totalTime,r=n.burnedCalories,o=110,a=[{icon:"#icon-cutlery",title:"daily calorie intake",value:e||0},{icon:"#icon-dumbbell",title:"daily norm of sports",value:o},{icon:"#icon-apple",title:"calories consumed",value:t||0},{icon:"#icon-calories",title:"calories burned",value:r||0},{icon:"#icon-bubble",title:"the rest of the calories",value:e?t?e-t:e-0:0,borderColor:e<t?"#E9101D":"rgba(239, 237, 232, 0.2)"},{icon:"#icon-running",title:"the rest of sports",value:i?o-i<=0?"+ ".concat(Math.abs(o-i)):o-i:o,borderColor:o<i?"#3CBF61":"rgba(239, 237, 232, 0.2)"}];return(0,pn.jsxs)(Y,{children:[(0,pn.jsx)(sn,{data:a}),(0,pn.jsxs)($,{children:[(0,pn.jsx)(Q,{width:"24",height:"24",children:(0,pn.jsx)("use",{href:X.Z+"#icon-warning"})}),(0,pn.jsx)(U,{img:X.Z+"#icon-warning",children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},cn=t(1523),ln=V.Z.button(x||(x=(0,J.Z)(["\n  display: flex;\n  color: #efede8;\n  font-family: 'Roboto', sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 20px;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n  gap: 8px;\n  cursor: pointer;\n\n  @media (min-width: 768px) {\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 32px;\n  }\n"]))),xn=V.Z.svg(g||(g=(0,J.Z)(["\n  stroke: #ef8964;\n  width: 20px;\n  height: 20px;\n\n  @media (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n  }\n"]))),gn=V.Z.div(f||(f=(0,J.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n\n  @media (min-width: 768px) {\n    gap: 40px;\n  }\n"]))),fn=V.Z.div(m||(m=(0,J.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 6px;\n"]))),mn=t(1951),un=V.Z.button(u||(u=(0,J.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n  cursor: pointer;\n  transform: rotate(270deg);\n\n  svg {\n    stroke: ",";\n  }\n\n  :last-of-type {\n    transform: rotate(90deg);\n\n    svg {\n      stroke: #efede8;\n    }\n  }\n"])),(function(n){return n.color})),wn=function(n){var e=n.onClick,t=n.disabled,i=n.color,r=n.icon;return(0,pn.jsx)(un,{type:"button",onClick:e,disabled:t,color:i,children:(0,pn.jsx)("svg",{width:"16",height:"16",children:(0,pn.jsx)("use",{href:X.Z+r})})})},yn=t(3814),bn=function(n){var e=n.createdAt,t=n.selectedDate,i=n.setSelectedDate,r=(0,dn.useState)(!1),o=(0,F.Z)(r,2),a=o[0],d=o[1],p=function(n){n.setHours(0,0,0,0)};(0,dn.useEffect)((function(){p(e),p(t),t.getTime()===e.getTime()?d(!0):d(!1)}),[t,e]);var s=function(){var n=new Date(t);n.setDate(n.getDate()-1),i(n)},h=function(){var n=new Date(t);n.setDate(n.getDate()+1),i(n)},c=(0,dn.forwardRef)((function(n,e){n.value;var i=n.onClick;return(0,pn.jsxs)(gn,{children:[(0,pn.jsxs)(ln,{onClick:i,ref:e,type:"button",children:[(0,mn.default)(t,"dd/MM/yyyy"),(0,pn.jsx)(xn,{children:(0,pn.jsx)("use",{href:X.Z+"#icon-calendar"})})]}),(0,pn.jsxs)(fn,{children:[(0,pn.jsx)(wn,{onClick:s,disabled:a,color:a?"#EFEDE833":"#efede8",icon:"#icon-chevronup"}),(0,pn.jsx)(wn,{onClick:h,icon:"#icon-chevronup"})]})]})}));return(0,pn.jsx)(yn.f,{input:(0,pn.jsx)(c,{}),selectedDate:t,setSelectedDate:i,createdAt:e})},Zn=V.Z.div(w||(w=(0,J.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-top: 40px;\n\n  @media (min-width: 768px) {\n    padding-top: 52px;\n    min-height: 116px;\n    align-items: flex-start;\n\n    h1 {\n      align-self: flex-end;\n    }\n  }\n"]))),vn=function(n){var e=n.children;return(0,pn.jsx)(Zn,{children:e})},jn=V.Z.div(y||(y=(0,J.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 80px;\n  gap: 40px;\n\n  @media (min-width: 768px) {\n    padding-top: 32px;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 64px;\n    padding-bottom: 40px;\n  }\n\n  @media (min-width: 1440px) {\n    padding-top: 32px;\n    flex-direction: row;\n    gap: 0;\n    justify-content: space-between;\n  }\n"]))),kn=function(n){var e=n.children;return(0,pn.jsx)(jn,{children:e})},_n=(V.Z.div(b||(b=(0,J.Z)(["\n  border: 1px solid #efede820;\n  border-radius: 12px;\n  margin-bottom: 40px;\n  padding: 16px;\n  width: 100%;\n  min-height: 335px;\n  max-height: 824px;\n  overflow: auto;\n\n  background-color: #efede80d;\n  @media (min-width: 768px) {\n    min-height: auto;\n    max-height: auto;\n    height: 234px;\n    width: 704px;\n  }\n  @media (min-width: 1440px) {\n    width: 826px;\n  }\n"]))),V.Z.div(Z||(Z=(0,J.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 48px;\n  @media (min-width: 768px) {\n    margin-bottom: 16px;\n  }\n"])))),Cn=V.Z.p(v||(v=(0,J.Z)(["\n  color: #efede880;\n  font-size: 14px;\n  line-height: 18px;\n"]))),Dn=V.Z.div(j||(j=(0,J.Z)(["\n  &:hover span {\n    color: #efede8;\n  }\n"]))),zn=V.Z.span(k||(k=(0,J.Z)(["\n  color: #e6533c;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  transition: color 300ms;\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]))),Mn=V.Z.svg(_||(_=(0,J.Z)(["\n  width: 16px;\n  height: 16px;\n  margin-left: 8px;\n"]))),Rn=V.Z.p(C||(C=(0,J.Z)(["\n  color: #efede84d;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  margin-top: 125px;\n  @media (min-width: 768px) {\n    margin-top: 65px;\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]))),Sn=t(5861),In=t(4687),En=t.n(In),An=t(6996),Kn=t(8080),Tn=V.Z.span(D||(D=(0,J.Z)(["\n  color: #ef8964;\n  font-size: 12px;\n  line-height: 18px;\n  position: absolute;\n  left: 0;\n  top: -26px;\n  display: block;\n  width: 80px;\n  overflow: hidden;\n  height: 18px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]))),Wn=V.Z.thead(z||(z=(0,J.Z)(["\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),Bn=V.Z.tr(M||(M=(0,J.Z)(["\n  display: flex;\n  margin-bottom: 66px;\n  flex-wrap: wrap;\n  @media (min-width: 768px) {\n    flex-wrap: nowrap;\n    margin-bottom: 8px;\n  }\n"]))),Nn=V.Z.tr(R||(R=(0,J.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    color: #ef8964;\n    font-size: 12px;\n    line-height: 18px;\n    margin-bottom: 8px;\n  }\n"]))),Pn=V.Z.th(S||(S=(0,J.Z)(["\n  @media (min-width: 768px) {\n    font-weight: 400;\n    &:nth-of-type(1) {\n      white-space: nowrap;\n      width: 53px;\n      margin-right: 45px;\n    }\n    &:nth-of-type(2) {\n      margin-right: 82px;\n    }\n    &:nth-of-type(3) {\n      margin-right: 100px;\n    }\n    &:nth-of-type(4) {\n      margin-right: 56px;\n    }\n    &:nth-of-type(5) {\n      margin-right: 8px;\n      width: 78px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n  }\n  @media (min-width: 1440px) {\n    &:nth-of-type(1) {\n      margin-right: 70px;\n    }\n    &:nth-of-type(2) {\n      margin-right: 107px;\n    }\n    &:nth-of-type(3) {\n      margin-right: 104px;\n    }\n    &:nth-of-type(4) {\n      margin-right: 78px;\n    }\n    &:nth-of-type(5) {\n      margin-right: 20px;\n      overflow: revert;\n    }\n  }\n"]))),qn=V.Z.td(I||(I=(0,J.Z)(["\n  padding: 10px 14px 10px 14px;\n  border-radius: 12px;\n  border: 1px solid #efede84d;\n  color: #efede8;\n  font-size: 14px;\n  line-height: 18px;\n  position: relative;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  &:nth-of-type(1) {\n    width: 297px;\n    height: 38px;\n    margin-bottom: 42px;\n  }\n  &:nth-of-type(2) {\n    width: 297px;\n    height: 38px;\n    margin-bottom: 42px;\n  }\n  &:nth-of-type(3) {\n    width: 297px;\n    height: 38px;\n    margin-bottom: 42px;\n  }\n  &:nth-of-type(4) {\n    width: 81px;\n    height: 38px;\n    margin-right: 16px;\n  }\n  &:nth-of-type(5) {\n    width: 80px;\n    height: 38px;\n    margin-right: 16px;\n  }\n  &:nth-of-type(6) {\n    width: 76px;\n    height: 38px;\n    margin-right: 6px;\n  }\n\n  @media (min-width: 768px) {\n    padding: 8px 14px 8px 14px;\n    font-size: 16px;\n    line-height: 24px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    &:nth-of-type(1) {\n      width: 90px;\n      margin-bottom: 0px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(2) {\n      width: 132px;\n      margin-bottom: 0px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(3) {\n      width: 128px;\n      margin-bottom: 0px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(4) {\n      width: 84px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(5) {\n      width: 78px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(6) {\n      width: 72px;\n      margin-right: 12px;\n    }\n  }\n\n  @media (min-width: 1440px) {\n    &:nth-of-type(1) {\n      width: 115px;\n      margin-bottom: 0px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(2) {\n      width: 157px;\n      margin-bottom: 0px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(3) {\n      width: 131px;\n      margin-bottom: 0px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(4) {\n      width: 106px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(5) {\n      width: 91px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(6) {\n      width: 82px;\n      margin-right: 20px;\n    }\n  }\n"]))),Hn=(V.Z.svg(E||(E=(0,J.Z)(["\n  width: 20px;\n  height: 20px;\n  fill: red;\n"]))),V.Z.td(A||(A=(0,J.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])))),Ln=V.Z.button(K||(K=(0,J.Z)(["\n  cursor: pointer;\n  border: none;\n  background-color: inherit;\n  padding-left: 0;\n  padding-right: 0;\n"]))),On=V.Z.svg(T||(T=(0,J.Z)(["\n  width: 20px;\n  height: 20px;\n  stroke: #ef8964;\n\n  transition: stroke 200ms ease-out;\n\n  &:hover,\n  &:focus {\n    opacity: 0.7;\n    stroke: #e6533c;\n  }\n"]))),Fn=function(n){var e=n.id,t=n.handleDelete;return(0,pn.jsx)(Ln,{onClick:function(){t(e)},children:(0,pn.jsx)(On,{children:(0,pn.jsx)("use",{href:X.Z+"#icon-trashtrue"})})})},Gn=t(1634),Jn=V.Z.div(W||(W=(0,J.Z)(["\n  width: 100%;\n  min-height: 335px;\n  padding: 16px 8px 16px 16px;\n\n  border: 1px solid #efede820;\n  border-radius: 12px;\n\n  background-color: #efede80d;\n\n  @media (min-width: 768px) {\n    min-height: auto;\n    height: 234px;\n    width: 704px;\n  }\n  @media (min-width: 1440px) {\n    width: 826px;\n  }\n\n  & table {\n    width: 100%;\n  }\n"]))),Vn=V.Z.div(B||(B=(0,J.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 48px;\n  @media (min-width: 768px) {\n    margin-bottom: 16px;\n  }\n"]))),Yn=V.Z.p(N||(N=(0,J.Z)(["\n  color: #efede880;\n  font-size: 14px;\n  line-height: 18px;\n"]))),$n=V.Z.div(P||(P=(0,J.Z)(["\n  &:hover span {\n    color: #efede8;\n  }\n"]))),Qn=V.Z.span(q||(q=(0,J.Z)(["\n  color: #e6533c;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  transition: color 300ms;\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]))),Un=V.Z.svg(H||(H=(0,J.Z)(["\n  width: 16px;\n  height: 16px;\n  margin-left: 8px;\n"]))),Xn=V.Z.p(L||(L=(0,J.Z)(["\n  color: #efede84d;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  margin-top: 125px;\n  @media (min-width: 768px) {\n    margin-top: 65px;\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]))),ne=V.Z.tbody(O||(O=(0,J.Z)(["\n  height: 768px;\n  padding-right: 14px;\n\n  display: block;\n  overflow-y: scroll;\n\n  @media (min-width: 768px) {\n    height: 136px;\n    padding-right: 14px;\n  }\n"])));function ee(n){var e=n.workouts,t=n.setWorkouts,i=(0,dn.useMemo)((function(){return e.map((function(n){return{bodyPart:n.exerciseId.bodyPart,equipment:n.exerciseId.equipment,name:n.exerciseId.name,target:n.exerciseId.target,burnedCalories:n.exerciseId.burnedCalories,time:n.exerciseId.time,id:n._id}}))}),[e]),r=(0,dn.useMemo)((function(){return i}),[i]),o=(0,An.b7)({data:r,columns:[{header:"Body Part",accessorKey:"bodyPart"},{header:"Equipment",accessorKey:"equipment"},{header:"Name",accessorKey:"name"},{header:"Target",accessorKey:"target"},{header:"Burned Calories",accessorKey:"burnedCalories"},{header:"Time",accessorKey:"time"}],getCoreRowModel:(0,Kn.sC)()}),a=function(){var n=(0,Sn.Z)(En().mark((function n(i){var r;return En().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,Gn.ne)(i);case 2:r=e.filter((function(n){return n._id!==i})),t(r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,pn.jsx)("div",{children:(0,pn.jsxs)("table",{children:[(0,pn.jsx)(Wn,{children:o.getHeaderGroups().map((function(n){return(0,pn.jsx)(Nn,{children:n.headers.map((function(n){return(0,pn.jsx)(Pn,{children:(0,An.ie)(n.column.columnDef.header,n.getContext())},n.id)}))},n.id)}))}),(0,pn.jsx)(ne,{children:o.getRowModel().rows.map((function(n){return(0,pn.jsxs)(Bn,{children:[n.getVisibleCells().map((function(n){return(0,pn.jsxs)(qn,{children:[(0,pn.jsx)(Tn,{children:n.column.columnDef.header}),(0,An.ie)(n.column.columnDef.cell,n.getContext())]},n.id)})),(0,pn.jsx)(Hn,{children:(0,pn.jsx)(Fn,{id:n.original.id,handleDelete:a})})]},n.id)}))})]})})}var te,ie,re,oe,ae,de,pe,se,he,ce,le,xe=t(1087),ge=function(n){var e=n.workouts,t=n.setWorkouts,i=e.length;return(0,pn.jsxs)(Jn,{children:[(0,pn.jsxs)(_n,{children:[(0,pn.jsx)(Cn,{children:"Exercises"}),(0,pn.jsx)(Dn,{children:(0,pn.jsxs)(xe.OL,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[(0,pn.jsx)(zn,{children:"Add exercise"}),(0,pn.jsx)(Mn,{children:(0,pn.jsx)("use",{href:X.Z+"#icon-nextarrow1"})})]})})]}),i?(0,pn.jsx)(ee,{workouts:e,setWorkouts:t}):(0,pn.jsx)(Rn,{children:"Not found exercises"})]})},fe=t(9434),me=t(4217),ue=V.Z.span(te||(te=(0,J.Z)(["\n  color: #ef8964;\n  font-size: 12px;\n  line-height: 18px;\n  position: absolute;\n  left: 0;\n  top: -26px;\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]))),we=V.Z.thead(ie||(ie=(0,J.Z)(["\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),ye=V.Z.tr(re||(re=(0,J.Z)(["\n  display: flex;\n  margin-bottom: 66px;\n  flex-wrap: wrap;\n  @media (min-width: 768px) {\n    flex-wrap: nowrap;\n    margin-bottom: 8px;\n  }\n"]))),be=V.Z.tr(oe||(oe=(0,J.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    color: #ef8964;\n    font-size: 12px;\n    line-height: 18px;\n    margin-bottom: 8px;\n  }\n"]))),Ze=V.Z.th(ae||(ae=(0,J.Z)(["\n  @media (min-width: 768px) {\n    font-weight: 400;\n    &:nth-of-type(1) {\n      margin-right: 186px;\n    }\n    &:nth-of-type(2) {\n      margin-right: 87px;\n    }\n    &:nth-of-type(3) {\n      margin-right: 52px;\n    }\n    &:nth-of-type(4) {\n      margin-right: 59px;\n    }\n  }\n  @media (min-width: 1440px) {\n    &:nth-of-type(1) {\n      margin-right: 193px;\n    }\n    &:nth-of-type(2) {\n      margin-right: 124px;\n    }\n    &:nth-of-type(3) {\n      margin-right: 70px;\n    }\n    &:nth-of-type(4) {\n      margin-right: 75px;\n    }\n  }\n"]))),ve=V.Z.td(de||(de=(0,J.Z)(["\n  padding: 10px 14px 10px 14px;\n  border-radius: 12px;\n  border: 1px solid #efede84d;\n  color: #efede8;\n  font-size: 14px;\n  line-height: 18px;\n  position: relative;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  &:nth-of-type(1) {\n    width: 297px;\n    height: 38px;\n    margin-bottom: 42px;\n  }\n  &:nth-of-type(2) {\n    width: 297px;\n    height: 38px;\n    margin-bottom: 42px;\n  }\n  &:nth-of-type(3) {\n    width: 81px;\n    height: 38px;\n    margin-right: 16px;\n  }\n  &:nth-of-type(4) {\n    width: 80px;\n    height: 38px;\n    margin-right: 16px;\n  }\n  &:nth-of-type(5) {\n    width: 76px;\n    height: 38px;\n    margin-right: 6px;\n  }\n\n  @media (min-width: 768px) {\n    padding: 8px 14px 8px 14px;\n    font-size: 16px;\n    line-height: 24px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    &:nth-of-type(1) {\n      width: 204px;\n      margin-bottom: 0px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(2) {\n      width: 128px;\n      margin-bottom: 0px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(3) {\n      width: 90px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(4) {\n      width: 90px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(5) {\n      width: 80px;\n      margin-right: 12px;\n    }\n  }\n\n  @media (min-width: 1440px) {\n    &:nth-of-type(1) {\n      width: 212px;\n      margin-bottom: 0px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(2) {\n      width: 166px;\n      margin-bottom: 0px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(3) {\n      width: 105px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(4) {\n      width: 105px;\n      margin-right: 8px;\n    }\n    &:nth-of-type(5) {\n      width: 110px;\n      margin-right: 12px;\n    }\n  }\n"]))),je=(V.Z.svg(pe||(pe=(0,J.Z)(["\n  width: 20px;\n  height: 20px;\n  fill: red;\n"]))),V.Z.td(se||(se=(0,J.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])))),ke=V.Z.div(he||(he=(0,J.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),_e=V.Z.div(ce||(ce=(0,J.Z)(["\n  width: 14px;\n  height: 14px;\n  background-color: #419b09;\n  border-radius: 50%;\n  margin-right: 8px;\n"]))),Ce=V.Z.div(le||(le=(0,J.Z)(["\n  width: 14px;\n  height: 14px;\n  background-color: #e9101d;\n  border-radius: 50%;\n  margin-right: 8px;\n"])));function De(n){var e=n.meals,t=n.setMeals,i=(0,fe.v9)(me.p7).blood,r=(0,dn.useMemo)((function(){return e.map((function(n){return{Title:n.productId.title,Category:n.productId.category,Calories:n.productId.calories,Weight:n.productId.weight,Recommend:!n.productId.groupBloodNotAllowed[i],id:n._id}}))}),[i,e]),o=(0,dn.useMemo)((function(){return r}),[r]),a=[{header:"Title",accessorKey:"Title"},{header:"Category",accessorKey:"Category"},{header:"Calories",accessorKey:"Calories"},{header:"Weight",accessorKey:"Weight"},{header:"Recommend",accessorKey:"Recommend",cell:function(n){return!0===n.getValue()?(0,pn.jsxs)(ke,{children:[(0,pn.jsx)(_e,{}),"Yes"]}):(0,pn.jsxs)(ke,{children:[(0,pn.jsx)(Ce,{}),"No"]})}}],d=(0,An.b7)({data:o,columns:a,getCoreRowModel:(0,Kn.sC)()}),p=function(){var n=(0,Sn.Z)(En().mark((function n(i){var r;return En().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,Gn.$v)(i);case 2:r=e.filter((function(n){return n._id!==i})),t(r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,pn.jsx)("div",{children:(0,pn.jsxs)("table",{children:[(0,pn.jsx)(we,{children:d.getHeaderGroups().map((function(n){return(0,pn.jsx)(be,{children:n.headers.map((function(n){return(0,pn.jsx)(Ze,{children:(0,An.ie)(n.column.columnDef.header,n.getContext())},n.id)}))},n.id)}))}),(0,pn.jsx)(ne,{children:d.getRowModel().rows.map((function(n){return(0,pn.jsxs)(ye,{children:[n.getVisibleCells().map((function(n){return(0,pn.jsxs)(ve,{children:[(0,pn.jsx)(ue,{children:n.column.id}),(0,An.ie)(n.column.columnDef.cell,n.getContext())]},n.id)})),(0,pn.jsx)(je,{children:(0,pn.jsx)(Fn,{id:n.original.id,handleDelete:p})})]},n.id)}))})]})})}var ze,Me=function(n){var e=n.meals,t=n.setMeals,i=e.length;return(0,pn.jsxs)(Jn,{children:[(0,pn.jsxs)(Vn,{children:[(0,pn.jsx)(Yn,{children:"Products"}),(0,pn.jsx)($n,{children:(0,pn.jsxs)(xe.OL,{to:"/products",style:{display:"flex",alignItems:"center"},children:[(0,pn.jsx)(Qn,{children:"Add product"}),(0,pn.jsx)(Un,{children:(0,pn.jsx)("use",{href:X.Z+"#icon-nextarrow1"})})]})})]}),i?(0,pn.jsx)(De,{meals:e,setMeals:t}):(0,pn.jsx)(Xn,{children:"Not found products"})]})},Re=V.Z.div(ze||(ze=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 40px;\n\n  @media (min-width: 768px) {\n    gap: 32px;\n  }\n"]))),Se=function(n){var e=n.children;return(0,pn.jsx)(Re,{children:e})},Ie=function(){var n=(0,dn.useState)(new Date),e=(0,F.Z)(n,2),t=e[0],i=e[1],r=(0,dn.useState)([]),o=(0,F.Z)(r,2),a=o[0],d=o[1],p=(0,dn.useState)([]),s=(0,F.Z)(p,2),h=s[0],c=s[1],l=(0,dn.useState)(new Date),x=(0,F.Z)(l,2),g=x[0],f=x[1],m=(0,dn.useState)(0),u=(0,F.Z)(m,2),w=u[0],y=u[1],b=(0,dn.useState)(0),Z=(0,F.Z)(b,2),v=Z[0],j=Z[1],k=(0,dn.useState)(0),_=(0,F.Z)(k,2),C=_[0],D=_[1],z=(0,dn.useState)(0),M=(0,F.Z)(z,2),R=M[0],S=M[1],I=function(n){return n.reduce((function(n,e){return n+e}),0)};return(0,dn.useEffect)((function(){(0,Gn.bG)().then((function(n){f(new Date(n.user.createdAt)),y(n.bmr)})).catch((function(n){console.log(n)})),(0,Gn._T)(t).then((function(n){d(n)})).catch((function(n){console.log(n)})),(0,Gn.cc)(t).then((function(n){c(n)}))}),[t]),(0,dn.useEffect)((function(){var n=a.map((function(n){return n.calories})),e=I(n);j(e);var t=h.map((function(n){return n.time})),i=I(t);D(i);var r=h.map((function(n){return n.calories})),o=I(r);S(o)}),[a,h]),(0,pn.jsxs)(G.W,{children:[(0,pn.jsxs)(vn,{children:[(0,pn.jsx)(cn.D,{children:"Diary"}),(0,pn.jsx)(bn,{createdAt:g,selectedDate:t,setSelectedDate:i})]}),(0,pn.jsxs)(kn,{children:[(0,pn.jsxs)(Se,{children:[(0,pn.jsx)(Me,{meals:a,setMeals:d}),(0,pn.jsx)(ge,{workouts:h,setWorkouts:c})]}),(0,pn.jsx)(hn,{dailyCalories:w,totalCalories:v,totalTime:C,burnedCalories:R})]})]})}}}]);
//# sourceMappingURL=342.cb84733f.chunk.js.map