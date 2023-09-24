"use strict";(self.webpackChunkpower_pulse_frontend=self.webpackChunkpower_pulse_frontend||[]).push([[137],{3814:function(e,n,i){i.d(n,{f:function(){return C}});var t,r,o,a,d=i(9513),l=i.n(d),s=i(168),c=i(3081),p=c.Z.div(t||(t=(0,s.Z)(["\n  margin: 0 auto 14px;\n  display: flex;\n  justify-content: center;\n  gap: 3px;\n  position: relative;\n"]))),h=c.Z.select(r||(r=(0,s.Z)(["\n  color: #efede8;\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: normal;\n  border: none;\n  background: transparent;\n  outline: none;\n  /* -webkit-appearance: none; \n  -moz-appearance: none; \n  appearance: none; */\n\n  :focus {\n    background-color: #ef8964;\n  }\n"]))),x=c.Z.button(o||(o=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n  cursor: pointer;\n  transform: rotate(270deg);\n\n  svg {\n    stroke: ",";\n    fill: none;\n    stroke-width: 1.5px;\n  }\n\n  :last-of-type {\n    transform: rotate(90deg);\n  }\n"])),(function(e){return e.color})),g=c.Z.div(a||(a=(0,s.Z)(["\n  .react-datepicker__wrapper {\n    position: absolute;\n  }\n  .react-datepicker {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-15%, 0%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    padding: 14px;\n    background-color: #ef8964;\n    font-family: 'Roboto', sans-serif;\n    border-radius: 8px;\n  }\n  .react-datepicker__month-container {\n    float: inherit;\n    box-sizing: border-box;\n  }\n  .react-datepicker__day-names {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 14px;\n    margin-bottom: 8px;\n    border-top: 1px solid rgba(239, 237, 232, 0.2);\n  }\n  .react-datepicker__header {\n    position: relative;\n    background-color: #ef8964;\n  }\n\n  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {\n    border-bottom: 0px;\n    padding: 0;\n  }\n  .react-datepicker__day\n    react-datepicker__day--018.react-datepicker__day--selected\n    react-datepicker__day--today {\n    outline: none;\n    border: none;\n  }\n  // .react-datepicker__current-month {\n  //   color: #efede8;\n  //   font-family: 'Roboto', sans-serif;\n  //   font-size: 16px;\n  //   font-weight: 500;\n  //   line-height: normal;\n  //   margin-bottom: 14px;\n  // }\n  .react-datepicker__day-name {\n    margin: 0;\n    color: rgba(239, 237, 232, 0.5);\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n\n  .react-datepicker__day--disabled {\n    opacity: 25%;\n  }\n  .react-datepicker__navigation {\n    margin-top: 14px;\n    color: white;\n  }\n  .react-datepicker__navigation--previous {\n    left: 7px;\n    width: 18px;\n    height: 18px;\n  }\n  .react-datepicker__navigation--next {\n    right: 7px;\n    width: 18px;\n    height: 18px;\n  }\n  .react-datepicker__navigation-icon::before:hover:focus {\n    border-color: white;\n  }\n  .react-datepicker__week {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: white;\n  }\n  .react-datepicker__day {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    margin: 0;\n    border-radius: 50%;\n    color: #efede8;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    text-align: center;\n    width: 24px;\n    height: 24px;\n  }\n  .react-datepicker__month {\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 0;\n  }\n  .react-datepicker__day--selected {\n    background-color: #040404;\n    color: #efede8;\n    font-size: 14px;\n  }\n  .react-datepicker__day--selected:hover {\n    border-radius: 50%;\n    background-color: white;\n  }\n  .react-datepicker__day:hover {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n  .react-datepicker__day--keyboard-selected {\n    border-radius: 50%;\n    background-color: white;\n    color: #ef8964;\n  }\n  .react-datepicker__day--outside-month {\n    opacity: 50%;\n  }\n  .react-datepicker__triangle {\n    display: none;\n  }\n"]))),f=(i(8639),i(2599)),m=i(3747),u=i(4801),y=i(184),C=function(e){var n,i,t=e.input,r=e.selectedDate,o=e.setSelectedDate,a=e.createdAt,d=(n=1920,i=(0,f.default)(new Date)+1,new Array(i-n).fill().map((function(e,i){return i+n}))),s=["January","February","March","April","May","June","July","August","September","October","November","December"];return(0,y.jsx)(g,{children:(0,y.jsx)(l(),{selected:r,onChange:function(e){o(e)},renderCustomHeader:function(e){var n=e.date,i=e.changeYear,t=e.changeMonth,r=e.decreaseMonth,o=e.increaseMonth,a=e.prevMonthButtonDisabled,l=e.nextMonthButtonDisabled;return(0,y.jsxs)(p,{children:[(0,y.jsx)(x,{onClick:r,disabled:a,color:a?"#efede866":"#efede8",children:(0,y.jsx)("svg",{width:"16",height:"16",children:(0,y.jsx)("use",{href:u.Z+"#icon-chevronup"})})}),(0,y.jsx)(h,{value:s[(0,m.default)(n)],onChange:function(e){var n=e.target.value;return t(s.indexOf(n))},children:s.map((function(e){return(0,y.jsx)("option",{value:e,children:e},e)}))}),(0,y.jsx)(h,{value:(0,f.default)(n),onChange:function(e){var n=e.target.value;return i(n)},children:d.map((function(e){return(0,y.jsx)("option",{value:e,children:e},e)}))}),(0,y.jsx)(x,{onClick:o,disabled:l,color:l?"#efede866":"#efede8",children:(0,y.jsx)("svg",{width:"16",height:"16",children:(0,y.jsx)("use",{href:u.Z+"#icon-chevronup"})})})]})},customInput:t,calendarStartDay:1,minDate:a||void 0})})}},1523:function(e,n,i){i.d(n,{D:function(){return d}});var t,r=i(168),o=i(3081).Z.h1(t||(t=(0,r.Z)(["\nfont-family: Roboto;\nfont-size: 24px;\nfont-style: normal;\nfont-weight: 700;\nline-height: 1.16;\n\n @media (min-width: 768px){\nfont-size: 32px;\nline-height: 1.37; \n }\n  @media (min-width: 1440px){\n \n\n }\n"]))),a=i(184),d=function(e){var n=e.children;return(0,a.jsx)(o,{children:n})}},137:function(e,n,i){i.r(n),i.d(n,{default:function(){return Pe}});var t,r,o,a,d,l,s,c,p,h,x,g,f,m,u,y,C,b,w,Z,j,v,T,k,_,R,W,z,D,E,M,A,S,K,O,F=i(5834),J=i(168),L=i(3081),H=L.Z.div(t||(t=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (min-width: 768px) {\n    max-width: 593px;\n  }\n\n  @media (min-width: 1440px) {\n    max-width: 390px;\n  }\n"]))),I=L.Z.div(r||(r=(0,J.Z)(["\n  padding-left: 32px;\n  display: flex;\n  gap: 8px;\n  position: relative;\n\n  @media (min-width: 768px) {\n    padding: 0;\n  }\n"]))),N=L.Z.svg(o||(o=(0,J.Z)(["\n  stroke: #efede8;\n  fill: #ef8964;\n  stroke-width: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  @media (min-width: 768px) {\n    position: relative;\n  }\n"]))),B=L.Z.p(a||(a=(0,J.Z)(["\n  color: rgba(239, 237, 232, 0.3);\n  font-size: 14px;\n  line-height: 18px;\n  max-width: 303px;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 24px;\n    max-width: 561px;\n  }\n\n  @media (min-width: 1440px) {\n    max-width: 358px;\n  }\n"]))),G=i(9439),P=i(4801),V=L.Z.ul(d||(d=(0,J.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px 13px;\n  margin-bottom: 20px;\n\n  @media (min-width: 768px) {\n    gap: 16px;\n    margin-bottom: 32px;\n  }\n\n  @media (min-width: 1440px) {\n    margin-bottom: 48px;\n  }\n"]))),Y=L.Z.li(l||(l=(0,J.Z)(["\n  flex-basis: calc((100% - 13px) / 2);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  height: 96px;\n  padding: 14px;\n  justify-content: space-between;\n  border-radius: 12px;\n  border: 1px solid rgba(239, 237, 232, 0.2);\n  background: rgba(239, 237, 232, 0.05);\n\n  :nth-of-type(-n + 2) {\n    background: #e6533c;\n  }\n\n  @media (min-width: 768px) {\n    flex-basis: calc((100% - 32px) / 3);\n    min-height: 116px;\n    order: ",";\n  }\n\n  @media (min-width: 1440px) {\n    flex-basis: calc((100% - 16px) / 2);\n    order: unset;\n  }\n"])),(function(e){var n=e.order;return n||"unset"})),q=L.Z.div(s||(s=(0,J.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"]))),Q=L.Z.p(c||(c=(0,J.Z)(["\n  color: ",";\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"])),(function(e){return e.color})),U=L.Z.p(p||(p=(0,J.Z)(["\n  color: #efede8;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 20px;\n\n  @media (min-width: 768px) {\n    line-height: 32px;\n  }\n"]))),X=L.Z.svg(h||(h=(0,J.Z)(["\n  fill: #ef8964;\n"]))),$=i(2791),ee=i(184),ne=function(e){var n=e.data,i=(0,$.useState)(window.innerWidth),t=(0,G.Z)(i,2),r=t[0],o=t[1],a=function(){o(window.innerWidth)};return(0,$.useEffect)((function(){return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[]),(0,ee.jsx)(V,{children:n.map((function(e,n){var i=e.icon,t=e.title,o=n<2?"rgba(239, 237, 232, 0.8)":"rgba(239, 237, 232, 0.4)",a=r>=768?n%2===0?1:2:n+1;return(0,ee.jsxs)(Y,{order:a,children:[(0,ee.jsxs)(q,{children:[(0,ee.jsx)(X,{width:"20",height:"20",children:(0,ee.jsx)("use",{href:P.Z+i})}),(0,ee.jsx)(Q,{color:o,children:t})]}),(0,ee.jsxs)(U,{children:[0,1===n||5===n?" min":""]})]},n)}))})},ie=function(){return(0,ee.jsxs)(H,{children:[(0,ee.jsx)(ne,{data:[{icon:"#icon-cutlery",title:"daily calorie intake"},{icon:"#icon-dumbbell",title:"daily norm of sports"},{icon:"#icon-apple",title:"calories consumed"},{icon:"#icon-calories",title:"calories burned"},{icon:"#icon-bubble",title:"the rest of the calories"},{icon:"#icon-running",title:"the rest of sports"}]}),(0,ee.jsxs)(I,{children:[(0,ee.jsx)(N,{width:"24",height:"24",children:(0,ee.jsx)("use",{href:P.Z+"#icon-warning"})}),(0,ee.jsx)(B,{img:P.Z+"#icon-warning",children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},te=i(1523),re=L.Z.button(x||(x=(0,J.Z)(["\n  display: flex;\n  color: #efede8;\n  font-family: 'Roboto', sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 20px;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n  gap: 8px;\n  cursor: pointer;\n\n  @media (min-width: 768px) {\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 32px;\n  }\n"]))),oe=L.Z.svg(g||(g=(0,J.Z)(["\n  stroke: #ef8964;\n  width: 20px;\n  height: 20px;\n\n  @media (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n  }\n"]))),ae=L.Z.div(f||(f=(0,J.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n\n  @media (min-width: 768px) {\n    gap: 40px;\n  }\n"]))),de=L.Z.div(m||(m=(0,J.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 6px;\n"]))),le=i(1951),se=L.Z.button(u||(u=(0,J.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n  cursor: pointer;\n  transform: rotate(270deg);\n\n  svg {\n    stroke: ",";\n  }\n\n  :last-of-type {\n    transform: rotate(90deg);\n\n    svg {\n      stroke: #efede8;\n    }\n  }\n"])),(function(e){return e.color})),ce=function(e){var n=e.onClick,i=e.disabled,t=e.color,r=e.icon;return(0,ee.jsx)(se,{type:"button",onClick:n,disabled:i,color:t,children:(0,ee.jsx)("svg",{width:"16",height:"16",children:(0,ee.jsx)("use",{href:P.Z+r})})})},pe=i(3814),he=function(e){var n=e.createdAt,i=(0,$.useState)(new Date),t=(0,G.Z)(i,2),r=t[0],o=t[1],a=(0,$.useState)(!1),d=(0,G.Z)(a,2),l=d[0],s=d[1],c=function(e){e.setHours(0,0,0,0)};(0,$.useEffect)((function(){c(n),c(r),r.getTime()===n.getTime()?s(!0):s(!1)}),[r,n]);var p=function(){var e=new Date(r);e.setDate(e.getDate()-1),o(e)},h=function(){var e=new Date(r);e.setDate(e.getDate()+1),o(e)},x=(0,$.forwardRef)((function(e,n){e.value;var i=e.onClick;return(0,ee.jsxs)(ae,{children:[(0,ee.jsxs)(re,{onClick:i,ref:n,type:"button",children:[(0,le.default)(r,"dd/MM/yyyy"),(0,ee.jsx)(oe,{children:(0,ee.jsx)("use",{href:P.Z+"#icon-calendar"})})]}),(0,ee.jsxs)(de,{children:[(0,ee.jsx)(ce,{onClick:p,disabled:l,color:l?"#EFEDE833":"#efede8",icon:"#icon-chevronup"}),(0,ee.jsx)(ce,{onClick:h,icon:"#icon-chevronup"})]})]})}));return(0,ee.jsx)(pe.f,{input:(0,ee.jsx)(x,{}),selectedDate:r,setSelectedDate:o,createdAt:n})},xe=L.Z.div(y||(y=(0,J.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-top: 40px;\n\n  @media (min-width: 768px) {\n    padding-top: 52px;\n    min-height: 116px;\n    align-items: flex-start;\n\n    h1 {\n      align-self: flex-end;\n    }\n  }\n"]))),ge=function(e){var n=e.children;return(0,ee.jsx)(xe,{children:n})},fe=L.Z.div(C||(C=(0,J.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  padding-top: 40px;\n  gap: 40px;\n\n  @media (min-width: 768px) {\n    padding-top: 32px;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 64px;\n  }\n\n  @media (min-width: 1440px) {\n    padding-top: 32px;\n    flex-direction: row;\n    gap: 0;\n    justify-content: space-between;\n  }\n"]))),me=function(e){var n=e.children;return(0,ee.jsx)(fe,{children:n})},ue=L.Z.div(b||(b=(0,J.Z)(["\n  border: 1px solid #efede820;\n  border-radius: 12px;\n  padding: 16px;\n  width: 100%;\n  min-height: 335px;\n  background-color: #efede805;\n  @media (min-width: 768px) {\n    min-height: auto;\n    height: 234px;\n    width: 704px;\n  }\n  @media (min-width: 1440px) {\n    width: 826px;\n  }\n"]))),ye=L.Z.div(w||(w=(0,J.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Ce=L.Z.p(Z||(Z=(0,J.Z)(["\n  color: #efede880;\n  font-size: 14px;\n  line-height: 18px;\n"]))),be=L.Z.div(j||(j=(0,J.Z)(["\n  &:hover span {\n    color: #efede8;\n  }\n"]))),we=L.Z.span(v||(v=(0,J.Z)(["\n  color: #e6533c;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  transition: color 300ms;\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]))),Ze=L.Z.svg(T||(T=(0,J.Z)(["\n  width: 16px;\n  height: 16px;\n  margin-left: 8px;\n"]))),je=L.Z.p(k||(k=(0,J.Z)(["\n  color: #efede84d;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  margin-top: 125px;\n  @media (min-width: 768px) {\n    margin-top: 65px;\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]))),ve=i(1087),Te=function(){return(0,ee.jsxs)(ue,{children:[(0,ee.jsxs)(ye,{children:[(0,ee.jsx)(Ce,{children:"Exercises"}),(0,ee.jsx)(be,{children:(0,ee.jsxs)(ve.OL,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[(0,ee.jsx)(we,{children:"Add exercise"}),(0,ee.jsx)(Ze,{children:(0,ee.jsx)("use",{href:P.Z+"#icon-nextarrow"})})]})})]}),(0,ee.jsx)(je,{children:"Not found exercises"})]})},ke=L.Z.div(_||(_=(0,J.Z)(["\n  border: 1px solid #efede820;\n  border-radius: 12px;\n  padding: 16px;\n  width: 100%;\n  min-height: 335px;\n  max-height: 824px;\n  overflow: scroll;\n  background-color: #EFEDE80D;\n  @media (min-width: 768px) {\n    min-height: auto;\n    max-height: auto;\n    height: 234px;\n    width: 704px;\n  }\n  @media (min-width: 1440px) {\n    width: 826px;\n  }\n"]))),_e=L.Z.div(R||(R=(0,J.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 48px;\n"]))),Re=L.Z.p(W||(W=(0,J.Z)(["\n  color: #efede880;\n  font-size: 14px;\n  line-height: 18px;\n"]))),We=L.Z.div(z||(z=(0,J.Z)(["\n  &:hover span {\n    color: #efede8;\n  }\n"]))),ze=L.Z.span(D||(D=(0,J.Z)(["\n  color: #e6533c;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  transition: color 300ms;\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]))),De=L.Z.svg(E||(E=(0,J.Z)(["\n  width: 16px;\n  height: 16px;\n  margin-left: 8px;\n"]))),Ee=(L.Z.p(M||(M=(0,J.Z)(["\n  color: #efede84d;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  margin-top: 125px;\n  @media (min-width: 768px) {\n    margin-top: 65px;\n    font-size: 16px;\n    line-height: 24px;\n  }\n"]))),i(6996)),Me=i(8080),Ae=JSON.parse('[{"Title":"Title 1","Category":"Category 1","Calories":31,"Weight":22,"Recommend":false,"id":"1"},{"Title":"Title 2","Category":"Category 2","Calories":18,"Weight":62,"Recommend":false,"id":"2"},{"Title":"Title 3","Category":"Category 3","Calories":79,"Weight":74,"Recommend":false,"id":"3"},{"Title":"Title 4","Category":"Category 4","Calories":61,"Weight":10,"Recommend":false,"id":"4"},{"Title":"Title 5","Category":"Category 5","Calories":80,"Weight":43,"Recommend":false,"id":"5"},{"Title":"Title 6","Category":"Category 6","Calories":38,"Weight":4,"Recommend":false,"id":"6"},{"Title":"Title 7","Category":"Category 7","Calories":28,"Weight":18,"Recommend":false,"id":"7"},{"Title":"Title 8","Category":"Category 8","Calories":77,"Weight":47,"Recommend":false,"id":"8"},{"Title":"Title 9","Category":"Category 9","Calories":78,"Weight":37,"Recommend":false,"id":"9"},{"Title":"Title 10","Category":"Category 10","Calories":42,"Weight":85,"Recommend":false,"id":"10"},{"Title":"Title 11","Category":"Category 11","Calories":5,"Weight":47,"Recommend":false,"id":"11"},{"Title":"Title 12","Category":"Category 12","Calories":44,"Weight":84,"Recommend":false,"id":"12"},{"Title":"Title 13","Category":"Category 13","Calories":60,"Weight":44,"Recommend":false,"id":"13"},{"Title":"Title 14","Category":"Category 14","Calories":26,"Weight":18,"Recommend":false,"id":"14"},{"Title":"Title 15","Category":"Category 15","Calories":57,"Weight":81,"Recommend":false,"id":"15"},{"Title":"Title 16","Category":"Category 16","Calories":82,"Weight":34,"Recommend":false,"id":"16"},{"Title":"Title 17","Category":"Category 17","Calories":69,"Weight":56,"Recommend":false,"id":"17"},{"Title":"Title 18","Category":"Category 18","Calories":37,"Weight":69,"Recommend":false,"id":"18"},{"Title":"Title 19","Category":"Category 19","Calories":73,"Weight":34,"Recommend":false,"id":"19"},{"Title":"Title 20","Category":"Category 20","Calories":27,"Weight":16,"Recommend":false,"id":"20"},{"Title":"Title 21","Category":"Category 21","Calories":94,"Weight":88,"Recommend":false,"id":"21"},{"Title":"Title 22","Category":"Category 22","Calories":70,"Weight":40,"Recommend":false,"id":"22"},{"Title":"Title 23","Category":"Category 23","Calories":9,"Weight":25,"Recommend":false,"id":"23"},{"Title":"Title 24","Category":"Category 24","Calories":52,"Weight":94,"Recommend":false,"id":"24"},{"Title":"Title 25","Category":"Category 25","Calories":22,"Weight":49,"Recommend":false,"id":"25"},{"Title":"Title 26","Category":"Category 26","Calories":5,"Weight":43,"Recommend":false,"id":"26"},{"Title":"Title 27","Category":"Category 27","Calories":83,"Weight":5,"Recommend":false,"id":"27"},{"Title":"Title 28","Category":"Category 28","Calories":83,"Weight":67,"Recommend":false,"id":"28"},{"Title":"Title 29","Category":"Category 29","Calories":66,"Weight":81,"Recommend":false,"id":"29"},{"Title":"Title 30","Category":"Category 30","Calories":87,"Weight":8,"Recommend":false,"id":"30"},{"Title":"Title 31","Category":"Category 31","Calories":76,"Weight":33,"Recommend":false,"id":"31"},{"Title":"Title 32","Category":"Category 32","Calories":85,"Weight":59,"Recommend":false,"id":"32"},{"Title":"Title 33","Category":"Category 33","Calories":57,"Weight":43,"Recommend":false,"id":"33"},{"Title":"Title 34","Category":"Category 34","Calories":62,"Weight":93,"Recommend":false,"id":"34"},{"Title":"Title 35","Category":"Category 35","Calories":52,"Weight":45,"Recommend":false,"id":"35"},{"Title":"Title 36","Category":"Category 36","Calories":91,"Weight":97,"Recommend":false,"id":"36"},{"Title":"Title 37","Category":"Category 37","Calories":86,"Weight":92,"Recommend":false,"id":"37"},{"Title":"Title 38","Category":"Category 38","Calories":80,"Weight":10,"Recommend":false,"id":"38"},{"Title":"Title 39","Category":"Category 39","Calories":59,"Weight":61,"Recommend":false,"id":"39"},{"Title":"Title 40","Category":"Category 40","Calories":98,"Weight":29,"Recommend":false,"id":"40"},{"Title":"Title 41","Category":"Category 41","Calories":80,"Weight":1,"Recommend":false,"id":"41"},{"Title":"Title 42","Category":"Category 42","Calories":44,"Weight":70,"Recommend":false,"id":"42"}]'),Se=L.Z.span(A||(A=(0,J.Z)(["\ncolor: #EF8964;\nfont-size: 12px;\nline-height: 18px;\nposition: absolute;\nleft: 0;\ntop: -26px;\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]))),Ke=L.Z.thead(S||(S=(0,J.Z)(["\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]))),Oe=L.Z.tr(K||(K=(0,J.Z)(["\n  display: flex;\n  margin-bottom: 66px;\n  flex-wrap: wrap;\n"]))),Fe=L.Z.td(O||(O=(0,J.Z)(["\n  &:nth-of-type(1) {\n    width: 297px;\n    height: 38px;\n    padding: 10px 14px 10px 14px;\n    border-radius: 12px;\n    border: 1px solid #efede84d;\n    color: #efede8;\n    font-size: 14px;\n    line-height: 18px;\n    position: relative;\n    margin-bottom: 42px;\n  }\n  &:nth-of-type(2) {\n    width: 297px;\n    height: 38px;\n    padding: 10px 14px 10px 14px;\n    border-radius: 12px;\n    border: 1px solid #efede84d;\n    color: #efede8;\n    font-size: 14px;\n    line-height: 18px;\n    position: relative;\n    margin-bottom: 42px;\n  }\n  &:nth-of-type(3) {\n    width: 81px;\n    height: 38px;\n    padding: 10px 14px 10px 14px;\n    border-radius: 12px;\n    border: 1px solid #efede84d;\n    color: #efede8;\n    font-size: 14px;\n    line-height: 18px;\n    position: relative;\n    margin-right: 16px;\n  }\n  &:nth-of-type(4) {\n    width: 80px;\n    height: 38px;\n    padding: 10px 14px 10px 14px;\n    border-radius: 12px;\n    border: 1px solid #efede84d;\n    color: #efede8;\n    font-size: 14px;\n    line-height: 18px;\n    position: relative;\n    margin-right: 16px;\n  }\n  &:nth-of-type(5) {\n    width: 76px;\n    height: 38px;\n    padding: 10px 14px 10px 14px;\n    border-radius: 12px;\n    border: 1px solid #efede84d;\n    color: #efede8;\n    font-size: 14px;\n    line-height: 18px;\n    position: relative;\n    margin-right: 8px;\n  }\n  \n"])));function Je(){var e=(0,$.useMemo)((function(){return Ae}),[]),n=(0,Ee.b7)({data:e,columns:[{header:"Title",accessorKey:"Title"},{header:"Category",accessorKey:"Category"},{header:"Calories",accessorKey:"Calories"},{header:"Weight",accessorKey:"Weight"},{header:"Recommend",accessorKey:"Recommend"}],getCoreRowModel:(0,Me.sC)()});return(0,ee.jsx)("div",{children:(0,ee.jsxs)("table",{children:[(0,ee.jsx)(Ke,{children:n.getHeaderGroups().map((function(e){return(0,ee.jsx)("tr",{children:e.headers.map((function(e){return(0,ee.jsx)("th",{children:(0,Ee.ie)(e.column.columnDef.header,e.getContext())},e.id)}))},e.id)}))}),(0,ee.jsx)("tbody",{children:n.getRowModel().rows.map((function(e){return(0,ee.jsxs)(Oe,{children:[e.getVisibleCells().map((function(e){return(0,ee.jsxs)(Fe,{children:[(0,ee.jsx)(Se,{children:e.column.id}),(0,Ee.ie)(e.column.columnDef.cell,e.getContext())]},e.id)})),(0,ee.jsx)("td",{children:"T"})]},e.id)}))})]})})}var Le,He=function(){return(0,ee.jsxs)(ke,{children:[(0,ee.jsxs)(_e,{children:[(0,ee.jsx)(Re,{children:"Products"}),(0,ee.jsx)(We,{children:(0,ee.jsxs)(ve.OL,{to:"/products",style:{display:"flex",alignItems:"center"},children:[(0,ee.jsx)(ze,{children:"Add product"}),(0,ee.jsx)(De,{children:(0,ee.jsx)("use",{href:P.Z+"#icon-nextarrow"})})]})})]}),(0,ee.jsx)(Je,{})]})},Ie=L.Z.div(Le||(Le=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 40px;\n\n  @media (min-width: 768px) {\n    gap: 32px;\n  }\n"]))),Ne=function(e){var n=e.children;return(0,ee.jsx)(Ie,{children:n})},Be=i(9434),Ge=i(4217),Pe=function(){var e=(0,Be.v9)(Ge.dy).createdAt,n=new Date(e);return(0,ee.jsxs)(F.W,{children:[(0,ee.jsxs)(ge,{children:[(0,ee.jsx)(te.D,{children:"Diary"}),(0,ee.jsx)(he,{createdAt:n})]}),(0,ee.jsxs)(me,{children:[(0,ee.jsxs)(Ne,{children:[(0,ee.jsx)(He,{}),(0,ee.jsx)(Te,{})]}),(0,ee.jsx)(ie,{})]})]})}}}]);
//# sourceMappingURL=137.48124bd2.chunk.js.map