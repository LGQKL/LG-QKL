(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1896],{77412:function(n){n.exports=function(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&!1!==t(n[r],r,n););return n}},70151:function(n,t,r){var e=r(278),o=r(73480);n.exports=function(n){return o(e(n))}},44037:function(n,t,r){var e=r(98363),o=r(3674);n.exports=function(n,t){return n&&e(t,o(t),n)}},63886:function(n,t,r){var e=r(98363),o=r(81704);n.exports=function(n,t){return n&&e(t,o(t),n)}},85990:function(n,t,r){var e=r(46384),o=r(77412),c=r(34865),i=r(44037),u=r(63886),a=r(64626),f=r(278),s=r(18805),d=r(1911),l=r(58234),p=r(46904),b=r(64160),v=r(43824),h=r(29148),x=r(38517),j=r(1469),Z=r(44144),g=r(56688),m=r(13218),w=r(72928),y=r(3674),I=r(81704),C="[object Arguments]",A="[object Function]",k="[object Object]",E={};E[C]=E["[object Array]"]=E["[object ArrayBuffer]"]=E["[object DataView]"]=E["[object Boolean]"]=E["[object Date]"]=E["[object Float32Array]"]=E["[object Float64Array]"]=E["[object Int8Array]"]=E["[object Int16Array]"]=E["[object Int32Array]"]=E["[object Map]"]=E["[object Number]"]=E[k]=E["[object RegExp]"]=E["[object Set]"]=E["[object String]"]=E["[object Symbol]"]=E["[object Uint8Array]"]=E["[object Uint8ClampedArray]"]=E["[object Uint16Array]"]=E["[object Uint32Array]"]=!0,E["[object Error]"]=E[A]=E["[object WeakMap]"]=!1,n.exports=function n(t,r,P,S,M,O){var _,L=1&r,F=2&r;if(P&&(_=M?P(t,S,M,O):P(t)),void 0!==_)return _;if(!m(t))return t;var N=j(t);if(N){if(_=v(t),!L)return f(t,_)}else{var U=b(t),D=U==A||"[object GeneratorFunction]"==U;if(Z(t))return a(t,L);if(U==k||U==C||D&&!M){if(_=F||D?{}:x(t),!L)return F?d(t,u(_,t)):s(t,i(_,t))}else{if(!E[U])return M?t:{};_=h(t,U,L)}}O||(O=new e);var B=O.get(t);if(B)return B;O.set(t,_),w(t)?t.forEach(function(e){_.add(n(e,r,P,e,t,O))}):g(t)&&t.forEach(function(e,o){_.set(o,n(e,r,P,o,t,O))});var Q=N?void 0:(4&r?F?p:l:F?I:y)(t);return o(Q||t,function(e,o){Q&&(e=t[o=e]),c(_,o,n(e,r,P,o,t,O))}),_}},25588:function(n,t,r){var e=r(64160),o=r(37005);n.exports=function(n){return o(n)&&"[object Map]"==e(n)}},29221:function(n,t,r){var e=r(64160),o=r(37005);n.exports=function(n){return o(n)&&"[object Set]"==e(n)}},69877:function(n){var t=Math.floor,r=Math.random;n.exports=function(n,e){return n+t(r()*(e-n+1))}},25127:function(n,t,r){var e=r(73480),o=r(52628);n.exports=function(n){return e(o(n))}},47415:function(n,t,r){var e=r(29932);n.exports=function(n,t){return e(t,function(t){return n[t]})}},57157:function(n,t,r){var e=r(74318);n.exports=function(n,t){var r=t?e(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}},93147:function(n){var t=/\w*$/;n.exports=function(n){var r=new n.constructor(n.source,t.exec(n));return r.lastIndex=n.lastIndex,r}},40419:function(n,t,r){var e=r(62705),o=e?e.prototype:void 0,c=o?o.valueOf:void 0;n.exports=function(n){return c?Object(c.call(n)):{}}},18805:function(n,t,r){var e=r(98363),o=r(99551);n.exports=function(n,t){return e(n,o(n),t)}},1911:function(n,t,r){var e=r(98363),o=r(51442);n.exports=function(n,t){return e(n,o(n),t)}},43824:function(n){var t=Object.prototype.hasOwnProperty;n.exports=function(n){var r=n.length,e=new n.constructor(r);return r&&"string"==typeof n[0]&&t.call(n,"index")&&(e.index=n.index,e.input=n.input),e}},29148:function(n,t,r){var e=r(74318),o=r(57157),c=r(93147),i=r(40419),u=r(77133);n.exports=function(n,t,r){var a=n.constructor;switch(t){case"[object ArrayBuffer]":return e(n);case"[object Boolean]":case"[object Date]":return new a(+n);case"[object DataView]":return o(n,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return u(n,r);case"[object Map]":case"[object Set]":return new a;case"[object Number]":case"[object String]":return new a(n);case"[object RegExp]":return c(n);case"[object Symbol]":return i(n)}}},73480:function(n,t,r){var e=r(69877);n.exports=function(n,t){var r=-1,o=n.length,c=o-1;for(t=void 0===t?o:t;++r<t;){var i=e(r,c),u=n[i];n[i]=n[r],n[r]=u}return n.length=t,n}},50361:function(n,t,r){var e=r(85990);n.exports=function(n){return e(n,5)}},56688:function(n,t,r){var e=r(25588),o=r(7518),c=r(31167),i=c&&c.isMap,u=i?o(i):e;n.exports=u},72928:function(n,t,r){var e=r(29221),o=r(7518),c=r(31167),i=c&&c.isSet,u=i?o(i):e;n.exports=u},69983:function(n,t,r){var e=r(70151),o=r(25127),c=r(1469);n.exports=function(n){return(c(n)?e:o)(n)}},52628:function(n,t,r){var e=r(47415),o=r(3674);n.exports=function(n){return null==n?[]:e(n,o(n))}},29019:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nfts/activity",function(){return r(67570)}])},32115:function(n,t,r){"use strict";var e=r(82670),o=r(26042),c=r(69396),i=r(85893),u=r(67294),a=r(73935),f=r(89145),s=r(51847),d=r(70032),l=function(n){var t,r,l,p=n.component,b=n.options,v=n.children,h=n.isOpen,x=void 0!==h&&h,j=(0,u.useState)(null),Z=j[0],g=j[1],m=(0,u.useState)(null),w=m[0],y=m[1],I=null!==(t=null==b?void 0:b.placement)&&void 0!==t?t:"bottom",C=null!==(r=null==b?void 0:b.offset)&&void 0!==r?r:[0,10],A=null!==(l=null==b?void 0:b.padding)&&void 0!==l?l:{left:16,right:16},k=(0,u.useState)(x),E=k[0],P=k[1],S=function(){P(function(n){return!n})},M=function(){P(!0)},O=function(){P(!1)};(0,u.useEffect)(function(){P(x)},[x,P]),(0,u.useEffect)(function(){if(null!==w&&null!==Z){var n=function(n){var t=n.target;!(0,e.Z)(t,Node)||w.contains(t)||Z.contains(t)||P(!1)};return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}},[w,Z]);var _=(0,f.D)(Z,w,{placement:I,modifiers:[{name:"offset",options:{offset:C}},{name:"preventOverflow",options:{padding:A}},]}),L=_.styles,F=_.attributes,N=(0,i.jsx)("div",(0,c.Z)((0,o.Z)({ref:y,style:L.popper},F.popper),{children:"function"==typeof v?v({toggle:S,open:M,close:O}):v})),U=(0,d.Z)(),D=U?(0,a.createPortal)(N,U):N;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.j5,{ref:g,onClick:S,children:p}),E&&D]})};t.Z=l},16393:function(n,t,r){"use strict";var e=r(26042),o=r(69396),c=r(99534),i=r(85893);r(67294);var u=r(32115),a=r(51847),f=function(n){var t=n.children,r=n.component,f=n.isOpen,s=(0,c.Z)(n,["children","component","isOpen"]);return(0,i.jsx)(u.Z,{options:{placement:"bottom"},component:r,isOpen:void 0!==f&&f,children:(0,i.jsx)(a.xm,(0,o.Z)((0,e.Z)({},s),{children:t}))})};t.Z=f},51847:function(n,t,r){"use strict";r.d(t,{j5:function(){return p},lz:function(){return l},vE:function(){return b},xm:function(){return d}});var e=r(7297),o=r(87379),c=r(44147),i=r(75943);function u(){var n=(0,e.Z)(["\n  background-color: ",";\n  border-radius: ",";\n  box-shadow: ",";\n"]);return u=function(){return n},n}function a(){var n=(0,e.Z)(["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ",";\n  border-radius: ",";\n  border: ",";\n"]);return a=function(){return n},n}function f(){var n=(0,e.Z)(["\n  cursor: pointer;\n  display: inline-flex;\n"]);return f=function(){return n},n}function s(){var n=(0,e.Z)(["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ",";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ",";\n    text-decoration: none;\n  }\n"]);return s=function(){return n},n}var d=(0,o.ZP)(c.Z).withConfig({componentId:"sc-be5f5450-0"}).withConfig({componentId:"sc-902e6bb1-0"})(u(),function(n){return n.theme.colors.backgroundAlt},function(n){return n.theme.radii.card},function(n){return n.theme.shadows.tooltip}),l=(0,o.ZP)(i.Z).withConfig({componentId:"sc-be5f5450-1"}).withConfig({componentId:"sc-902e6bb1-1"})(a(),function(n){return n.theme.colors.input},function(n){return n.theme.radii.default},function(n){var t=n.theme;return"1px solid ".concat(t.colors.inputSecondary)}),p=o.ZP.div.withConfig({componentId:"sc-be5f5450-2"}).withConfig({componentId:"sc-902e6bb1-2"})(f()),b=o.ZP.button.withConfig({componentId:"sc-be5f5450-3"}).withConfig({componentId:"sc-902e6bb1-3"})(s(),function(n){return n.theme.colors.text},function(n){return n.theme.colors.inputSecondary})},94406:function(n,t,r){"use strict";var e=r(26042),o=r(69396),c=r(99534),i=r(7297),u=r(85893),a=r(67294),f=r(87379),s=r(44147),d=r(32762),l=r(6704);function p(){var n=(0,i.Z)(["\n  "," {\n    padding-left: ",";\n    padding-right: ",";\n  }\n"]);return p=function(){return n},n}function b(){var n=(0,i.Z)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n\n  ","\n"]);return b=function(){return n},n}var v=function(n,t){if(!t)return"16px";switch(n){case l.Q.SM:return"32px";case l.Q.LG:return"56px";case l.Q.MD:default:return"48px"}},h=(0,f.ZP)(s.Z).withConfig({componentId:"sc-148bad35-0"}).withConfig({componentId:"sc-10713523-0"})(p(),d.Z,function(n){var t=n.hasStartIcon;return v(n.scale,t)},function(n){var t=n.hasEndIcon;return v(n.scale,t)}),x=f.ZP.div.withConfig({componentId:"sc-148bad35-1"}).withConfig({componentId:"sc-10713523-1"})(b(),function(n){var t=n.isEndIcon,r=n.scale;return t?"\n    right: ".concat(r===l.Q.SM?"8px":"16px",";\n  "):"\n    left: ".concat(r===l.Q.SM?"8px":"16px",";\n  ")}),j=function(n){var t=n.scale,r=void 0===t?l.Q.MD:t,i=n.startIcon,f=n.endIcon,s=n.children,d=(0,c.Z)(n,["scale","startIcon","endIcon","children"]);return(0,u.jsxs)(h,(0,o.Z)((0,e.Z)({scale:r,width:"100%",position:"relative",hasStartIcon:!!i,hasEndIcon:!!f},d),{children:[i&&(0,u.jsx)(x,{scale:r,children:i}),(0,a.cloneElement)(s,{scale:r}),f&&(0,u.jsx)(x,{scale:r,isEndIcon:!0,children:f})]}))};t.Z=j},64775:function(n,t,r){"use strict";var e=r(26042),o=r(69396),c=r(85893);r(67294);var i=r(44976),u=function(n){return(0,c.jsx)(i.Z,(0,o.Z)((0,e.Z)({viewBox:"0 0 24 24"},n),{children:(0,c.jsx)("path",{d:"M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z"})}))};t.Z=u},67274:function(n,t,r){"use strict";r.d(t,{Z:function(){return v}});var e=r(26042),o=r(69396),c=r(99534),i=r(7297),u=r(85893),a=r(87379),f=r(44147),s=r(44305);function d(){var n=(0,i.Z)(["\n  background: ",";\n"]);return d=function(){return n},n}function l(){var n=(0,i.Z)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n  position: relative;\n"]);return l=function(){return n},n}var p=(0,a.ZP)(f.Z).withConfig({componentId:"sc-77de9e7a-0"})(d(),function(n){var t=n.theme;return n.background||t.colors.gradientBubblegum}),b=(0,a.ZP)(s.Z).withConfig({componentId:"sc-77de9e7a-1"})(l()),v=function(n){var t=n.background,r=n.children,i=(0,c.Z)(n,["background","children"]);return(0,u.jsx)(p,(0,o.Z)((0,e.Z)({background:t},i),{children:(0,u.jsx)(b,{children:r})}))}},67570:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var e=r(85893),o=r(69589),c=r(20353),i=r(27553),u=r(67274),a=r(52775),f=r(84492),s=function(){var n=(0,a.$G)().t;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(u.Z,{children:(0,e.jsx)(o.Z,{as:"h1",scale:"xxl",color:"secondary","data-test":"nft-activity-title",children:n("Activity")})}),(0,e.jsx)(i.Z,{children:(0,e.jsx)(c.Z,{children:(0,e.jsx)(f.Z,{})})})]})},d=function(){return(0,e.jsx)(s,{})}},25896:function(n,t,r){"use strict";r.d(t,{Ak:function(){return v},Lb:function(){return j},PZ:function(){return g},Re:function(){return h},_8:function(){return x},yR:function(){return Z}});var e=r(7297),o=r(75943),c=r(63970),i=r(98553),u=r(89663),a=r(87379);function f(){var n=(0,e.Z)(["\n  cursor: pointer;\n  user-select: none;\n"]);return f=function(){return n},n}function s(){var n=(0,e.Z)(["\n  border-radius: 50%;\n"]);return s=function(){return n},n}function d(){var n=(0,e.Z)(["\n  background: ",";\n  border-radius: 24px 24px 0 0;\n"]);return d=function(){return n},n}function l(){var n=(0,e.Z)(["\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  svg {\n    pointer-events: none;\n  }\n"]);return l=function(){return n},n}function p(){var n=(0,e.Z)(["\n  white-space: nowrap;\n  ","\n"]);return p=function(){return n},n}function b(){var n=(0,e.Z)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n"]);return b=function(){return n},n}var v=(0,a.ZP)(o.Z).withConfig({componentId:"sc-b19fec1f-0"})(f()),h=(0,a.ZP)(c.Z).withConfig({componentId:"sc-b19fec1f-1"})(s()),x=(0,a.ZP)(o.Z).withConfig({componentId:"sc-b19fec1f-2"})(d(),function(n){return n.theme.colors.dropdown}),j=(0,a.ZP)(o.Z).withConfig({componentId:"sc-b19fec1f-3"})(l()),Z=(0,a.ZP)(i.Z).withConfig({componentId:"sc-b19fec1f-4"})(p(),function(n){return n.hasItem&&"  \n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    padding-right: 8px;\n  "}),g=(0,a.ZP)(u.Z).withConfig({componentId:"sc-b19fec1f-5"})(b())}},function(n){n.O(0,[8451,4134,4540,4492,9774,2888,179],function(){return n(n.s=29019)}),_N_E=n.O()}]);