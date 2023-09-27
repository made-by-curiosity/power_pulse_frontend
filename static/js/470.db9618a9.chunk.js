(self.webpackChunkpower_pulse_frontend=self.webpackChunkpower_pulse_frontend||[]).push([[470],{4470:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return C}});var i,o,r,u,a=e(9439),s=e(5834),f=e(2028),p=e(5669),c=e(7689),l=e(168),d=e(3081),x=d.Z.h2(i||(i=(0,l.Z)(["\n  max-width: 335px;\n  margin-top: 65px;\n  font-size: 38px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 40px;\n  letter-spacing: 0.38px;\n  color: #efede8;\n\n  @media screen and (min-width: 768px) {\n    max-width: 598px;\n    font-size: 70px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 78px;\n    letter-spacing: 0.7px;\n    margin-top: 105px;\n    background-position: left -16px bottom 84px;\n    background-size: auto auto;\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 116px;\n  }\n"]))),h=d.Z.div(o||(o=(0,l.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-top: 40px;\n\n  @media screen and (min-width: 375px) {\n    gap: 14px;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 20px;\n    margin-top: 64px;\n  }\n"]))),g=d.Z.div(r||(r=(0,l.Z)(["\n  position: relative;\n"]))),m=e(2791),v=e(184),w=e(3881),b=function(n){var t=n.word,e=n.setPosition,i=(0,m.useRef)(),o=function(){var n=i.current.getBoundingClientRect(),t=n.left,o=n.top;e({top:o,left:t})},r=w(o,500);return(0,m.useEffect)((function(){return o(),window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}),[]),(0,v.jsx)("span",{ref:i,children:t})},y=d.Z.svg(u||(u=(0,l.Z)(["\n  width: 98px;\n  height: 35px;\n\n  position: absolute;\n  top: ","px;\n  left: ","px;\n\n  fill: #040404;\n  stroke: #ef8964;\n\n  @media screen and (min-width: 768px) {\n    width: 185px;\n    height: 67px;\n\n    top: ","px;\n    left: ","px;\n  }\n"])),(function(n){return n.position.top+6}),(function(n){return n.position.left-6}),(function(n){return n.position.top+6}),(function(n){return n.position.left-15})),j=e(4801),k=function(n){var t=n.position;return(0,v.jsx)(y,{position:t,children:(0,v.jsx)("use",{href:"".concat(j.Z,"#icon-highlighter")})})},T=e(9434),Z=e(9273),S=e(3190),O=e(8780),C=function(){var n=(0,m.useState)({top:0,left:0}),t=(0,a.Z)(n,2),e=t[0],i=t[1],o=(0,T.I0)(),r=(0,c.TH)(),u=new URLSearchParams(r.search).get("token");u&&o((0,Z.cv)(u));var l=(0,c.s0)(),d="/404"===r.pathname;return(0,v.jsxs)(f.C,{children:[(0,v.jsx)(k,{position:e}),(0,v.jsxs)(s.W,{children:[(0,v.jsx)(O.K,{children:(0,v.jsx)(S.T,{is404:d})}),(0,v.jsx)(g,{children:(0,v.jsxs)(x,{children:["Transforming your"," ",(0,v.jsx)(b,{word:"body",setPosition:i})," shape with Power Pulse"]})}),(0,v.jsxs)(h,{children:[(0,v.jsx)(p.c,{type:"button",text:"Sign Up",filled:!0,onClick:function(){l("/signup")},btnStyles:{width:"max-content"}}),(0,v.jsx)(p.c,{type:"button",text:"Sign In",onClick:function(){l("/signin")},btnStyles:{width:"max-content"}})]})]})]})}},3881:function(n,t,e){var i="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,f="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,p="object"==typeof self&&self&&self.Object===Object&&self,c=f||p||Function("return this")(),l=Object.prototype.toString,d=Math.max,x=Math.min,h=function(){return c.Date.now()};function g(n,t,e){var o,r,u,a,s,f,p=0,c=!1,l=!1,g=!0;if("function"!=typeof n)throw new TypeError(i);function w(t){var e=o,i=r;return o=r=void 0,p=t,a=n.apply(i,e)}function b(n){return p=n,s=setTimeout(j,t),c?w(n):a}function y(n){var e=n-f;return void 0===f||e>=t||e<0||l&&n-p>=u}function j(){var n=h();if(y(n))return k(n);s=setTimeout(j,function(n){var e=t-(n-f);return l?x(e,u-(n-p)):e}(n))}function k(n){return s=void 0,g&&o?w(n):(o=r=void 0,a)}function T(){var n=h(),e=y(n);if(o=arguments,r=this,f=n,e){if(void 0===s)return b(f);if(l)return s=setTimeout(j,t),w(f)}return void 0===s&&(s=setTimeout(j,t)),a}return t=v(t)||0,m(e)&&(c=!!e.leading,u=(l="maxWait"in e)?d(v(e.maxWait)||0,t):u,g="trailing"in e?!!e.trailing:g),T.cancel=function(){void 0!==s&&clearTimeout(s),p=0,o=f=r=s=void 0},T.flush=function(){return void 0===s?a:k(h())},T}function m(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function v(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==l.call(n)}(n))return NaN;if(m(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=m(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(o,"");var e=u.test(n);return e||a.test(n)?s(n.slice(2),e?2:8):r.test(n)?NaN:+n}n.exports=function(n,t,e){var o=!0,r=!0;if("function"!=typeof n)throw new TypeError(i);return m(e)&&(o="leading"in e?!!e.leading:o,r="trailing"in e?!!e.trailing:r),g(n,t,{leading:o,maxWait:t,trailing:r})}}}]);
//# sourceMappingURL=470.db9618a9.chunk.js.map