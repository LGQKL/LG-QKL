"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6355],{42289:function(n,e,r){r.d(e,{Z:function(){return l}});var t=r(7297),i=r(87379),o=r(57247),a={SM:"sm",MD:"md"};function c(){var n=(0,t.Z)(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",";\n  width: ",";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ",";\n  box-shadow: ",';\n\n  &:after {\n    border-radius: 50%;\n    content: "";\n    height: ',";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ",";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ",";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",";\n  }\n\n  &:checked {\n    background-color: ",";\n    &:after {\n      background-color: ",";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ","\n"]);return c=function(){return n},n}var s=function(n){var e=n.scale;switch(e){case a.SM:return"24px";case a.MD:default:return"32px"}},u=function(n){var e=n.scale;switch(e){case a.SM:return"12px";case a.MD:default:return"20px"}},d=i.ZP.input.attrs({type:"radio"}).withConfig({componentId:"sc-407ed64c-0"}).withConfig({componentId:"sc-f2e005b8-0"})(c(),s,s,function(n){return n.theme.colors.input},function(n){return n.theme.shadows.inset},u,u,function(n){return n.theme.shadows.focus},function(n){return n.theme.shadows.focus},function(n){return n.theme.colors.success},function(n){return n.theme.radio.handleBackground},o.Dh);d.defaultProps={scale:a.MD,m:0};var l=d},73546:function(n,e,r){r.d(e,{N:function(){return i}});var t,i,o=r(7297),a=r(85893),c=r(87379),s=r(98553),u=r(37303),d=r(57049),l=r(63771),f=r(44147),h=r(75943),p=r(52775);function v(){var n=(0,o.Z)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"]);return v=function(){return n},n}function g(){var n=(0,o.Z)(["\n  width: 100%;\n\n  "," {\n    min-width: 160px;\n  }\n"]);return g=function(){return n},n}function m(){var n=(0,o.Z)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"]);return m=function(){return n},n}function b(){var n=(0,o.Z)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"]);return b=function(){return n},n}(t=i||(i={})).ROW="row",t.SEQUENTIAL="sequential";var Z=c.ZP.div.withConfig({componentId:"sc-c0273ef8-0"})(v(),function(n){return n.theme.mediaQueries.md}),x=(0,c.ZP)(s.Z).withConfig({componentId:"sc-c0273ef8-1"})(g(),function(n){return n.theme.mediaQueries.md}),C={width:"24px",color:"textDisabled"},w=(0,c.ZP)(u.Z).attrs(C).withConfig({componentId:"sc-c0273ef8-2"})(m(),function(n){return n.theme.mediaQueries.md}),y=(0,c.ZP)(d.Z).attrs(C).withConfig({componentId:"sc-c0273ef8-3"})(b(),function(n){return n.theme.mediaQueries.md}),k=(0,a.jsx)(l.Z,{spin:!0,color:"currentColor"}),_=function(n){var e=n.isApproveDisabled,r=n.isApproving,t=n.isConfirming,o=n.isConfirmDisabled,c=n.onApprove,s=n.onConfirm,u=n.buttonArrangement,d=void 0===u?i.ROW:u,l=n.confirmLabel,v=n.confirmId,g=(0,p.$G)().t,m=null!=l?l:g("Confirm");return d===i.ROW?(0,a.jsxs)(Z,{children:[(0,a.jsx)(f.Z,{children:(0,a.jsx)(x,{disabled:e,onClick:c,endIcon:r?k:void 0,isLoading:r,children:g(r?"Enabling":"Enable")})}),(0,a.jsxs)(h.Z,{justifyContent:"center",children:[(0,a.jsx)(w,{}),(0,a.jsx)(y,{})]}),(0,a.jsx)(f.Z,{children:(0,a.jsx)(x,{id:v,onClick:s,disabled:o,isLoading:t,endIcon:t?k:void 0,children:t?g("Confirming"):m})})]}):(0,a.jsx)(a.Fragment,{children:e?(0,a.jsx)(f.Z,{children:(0,a.jsx)(x,{id:v,onClick:s,disabled:o,isLoading:t,endIcon:t?k:void 0,children:t?g("Confirming"):m})}):(0,a.jsx)(f.Z,{children:(0,a.jsx)(x,{onClick:c,endIcon:r?k:void 0,isLoading:r,children:g(r?"Enabling":"Enable")})})})};e.Z=_},6169:function(n,e,r){var t=r(47568),i=r(26042),o=r(69396),a=r(70655),c=r(67294),s=r(50308),u=r.n(s),d=r(29315),l=r(76431),f={approvalState:"idle",confirmState:"idle"},h=function(n,e){switch(e.type){case"approve_sending":return(0,o.Z)((0,i.Z)({},n),{approvalState:"loading"});case"approve_receipt":return(0,o.Z)((0,i.Z)({},n),{approvalState:"success"});case"approve_error":return(0,o.Z)((0,i.Z)({},n),{approvalState:"fail"});case"confirm_sending":return(0,o.Z)((0,i.Z)({},n),{confirmState:"loading"});case"confirm_receipt":return(0,o.Z)((0,i.Z)({},n),{confirmState:"success"});case"confirm_error":return(0,o.Z)((0,i.Z)({},n),{confirmState:"fail"});default:return n}},p=function(n){var e=n.onApprove,r=n.onConfirm,i=n.onRequiresApproval,o=n.onSuccess,s=void 0===o?u():o,p=n.onApproveSuccess,v=void 0===p?u():p,g=(0,d.Ge)().account,m=(0,c.useReducer)(h,f),b=m[0],Z=m[1],x=(0,c.useRef)(i),C=(0,l.Z)().fetchWithCatchTxError,w=(0,c.useCallback)((0,t.Z)(function(){var n;return(0,a.__generator)(this,function(r){switch(r.label){case 0:return[4,C(function(){return Z({type:"approve_sending"}),e()})];case 1:return(null==(n=r.sent())?void 0:n.status)?(Z({type:"approve_receipt"}),v({state:b,receipt:n})):Z({type:"approve_error"}),[2]}})}),[e,v,b,C]),y=(0,c.useCallback)((0,t.Z)(function(){var n,e,t=arguments;return(0,a.__generator)(this,function(i){switch(i.label){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:{},[4,C(function(){return Z({type:"confirm_sending"}),r(n)})];case 1:return(null==(e=i.sent())?void 0:e.status)?(Z({type:"confirm_receipt"}),s({state:b,receipt:e})):Z({type:"confirm_error"}),[2]}})}),[r,Z,s,b,C]);return(0,c.useEffect)(function(){g&&x.current&&x.current().then(function(n){n||Z({type:"approve_receipt"})})},[g,x,Z]),{isApproving:"loading"===b.approvalState,isApproved:"success"===b.approvalState,isConfirming:"loading"===b.confirmState,isConfirmed:"success"===b.confirmState,hasApproveFailed:"fail"===b.approvalState,hasConfirmFailed:"fail"===b.confirmState,handleApprove:w,handleConfirm:y}};e.Z=p},85900:function(n,e,r){r.d(e,{d:function(){return h}});var t=r(47568),i=r(26042),o=r(69396),a=r(36305),c=r(70655),s=r(67294),u=r(921),d=r(27361),l=r.n(d),f=r(92876);function h(){var n,e=(0,u.Fh)();return{callWithGasPrice:(0,s.useCallback)((n=(0,t.Z)(function(n,r){var t,s,u,d,h,p,v=arguments;return(0,c.__generator)(this,function(c){switch(c.label){case 0:return t=v.length>2&&void 0!==v[2]?v[2]:[],s=v.length>3&&void 0!==v[3]?v[3]:null,(0,f.n_)({type:"Transaction",message:"Call with gas price: ".concat(e),data:{contractAddress:n.address,methodName:r,methodArgs:t,overrides:s}}),u=l()(n,r),d=null==s?void 0:s.gasPrice,[4,u.apply(void 0,(0,a.Z)(t).concat([d?(0,i.Z)({},s):(0,o.Z)((0,i.Z)({},s),{gasPrice:e})]))];case 1:return(h=c.sent())&&(0,f.n_)({type:"Transaction",message:"Transaction sent: ".concat(h.hash),data:{hash:h.hash,from:h.from,gasLimit:null===(p=h.gasLimit)||void 0===p?void 0:p.toString(),nonce:h.nonce}}),[2,h]}})}),function(e,r){return n.apply(this,arguments)}),[e])}}},76431:function(n,e,r){r.d(e,{Z:function(){return h}});var t=r(47568),i=r(70655),o=r(85893),a=r(67294),c=r(52775),s=r(19237),u=r(96036),d=r(70486),l=r(97477),f=function(n){var e;return(null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.code)===-32e3};function h(){var n,e=(0,l.Z)().provider,r=(0,c.$G)().t,h=(0,s.p)(),p=h.toastError,v=h.toastSuccess,g=(0,a.useState)(!1),m=g[0],b=g[1],Z=(0,a.useCallback)(function(n,e){(0,d.H)(n),e?p(r("Error"),(0,o.jsx)(u.Y,{txHash:e.hash,children:r("Please try again. Confirm the transaction and make sure you are paying enough gas!")})):p(r("Error"),r("Please try again. Confirm the transaction and make sure you are paying enough gas!"))},[r,p]);return{fetchWithCatchTxError:(0,a.useCallback)((n=(0,t.Z)(function(n){var t,a,c;return(0,i.__generator)(this,function(i){switch(i.label){case 0:t=null,i.label=1;case 1:return i.trys.push([1,4,5,6]),b(!0),[4,n()];case 2:return t=i.sent(),v("".concat(r("Transaction Submitted"),"!"),(0,o.jsx)(u.Y,{txHash:t.hash})),[4,t.wait()];case 3:return[2,i.sent()];case 4:return c=i.sent(),(0,d.Z)(c)||(t?e.call(t,t.blockNumber).then(function(){Z(c,t)}).catch(function(n){if(f(n))Z(c,t);else{(0,d.H)(n);var e,i,a,s,l,h,v,g=n;if(null==g?void 0:null===(e=g.data)||void 0===e?void 0:e.message)i=null==g?void 0:null===(a=g.data)||void 0===a?void 0:a.message;else for(;g;)i=null!==(h=null!==(l=g.reason)&&void 0!==l?l:g.message)&&void 0!==h?h:i,g=null!==(v=g.error)&&void 0!==v?v:null===(s=g.data)||void 0===s?void 0:s.originalError;var m="execution reverted: ",b=null==i?void 0:i.indexOf(m),x=b>=0;x&&(i=i.substring(b+m.length)),p(r("Failed"),(0,o.jsx)(u.Y,{txHash:t.hash,children:x?r("Transaction failed with error: %reason%",{reason:i}):r("Transaction failed. For detailed error message:")}))}}):Z(c)),[3,6];case 5:return b(!1),[7];case 6:return[2,null]}})}),function(e){return n.apply(this,arguments)}),[Z,p,e,v,r]),loading:m}}},35831:function(n,e,r){r.d(e,{S:function(){return c}});var t,i=r(47568),o=r(70655),a=r(2593),c=(t=(0,i.Z)(function(n,e,r){var t,i,c,s=arguments;return(0,o.__generator)(this,function(o){switch(o.label){case 0:t=s.length>3&&void 0!==s[3]?s[3]:0,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,n.allowance(e,r)];case 2:if(i=o.sent(),"number"==typeof t&&t>0||a.O$.isBigNumber(t)&&t.gt(0))return[2,i.lt(t)];return[2,i.lte(0)];case 3:return o.sent(),[2,!0];case 4:return[2]}})}),function(n,e,r){return t.apply(this,arguments)})},70486:function(n,e,r){r.d(e,{H:function(){return i},Z:function(){return t}}),r(82670),r(92876);var t=function(n){return"object"==typeof n&&"code"in n&&4001===n.code},i=function(n){console.error(n)}},97755:function(n,e,r){r.d(e,{L:function(){return g},n:function(){return m}});var t=r(47568),i=r(70655),o=r(67294),a=r(41609),c=r.n(a),s=r(9882),u=r(91186),d=r(16008),l=r(8100),f=r(75759),h=r(22408),p=r(74903),v=r(97119),g=function(n,e,r){var t,i=m(n,e,r,(0,s.t8)().data),o=i.nfts;return{nfts:o,isLoading:i.isLoading,refresh:i.refresh}},m=function(n,e,r,a){var s,g=(0,o.useRef)(null),m=(0,p.zP)(n);g.current&&m!==n&&g.current();var b=null==e?void 0:e.tokenId,Z=null==e?void 0:null===(s=e.tokenId)||void 0===s?void 0:s.toString(),x=null==e?void 0:e.collectionAddress,C=(0,o.useMemo)(function(){return b?{tokenId:Z,collectionAddress:x,nftLocation:u.Fb.PROFILE}:null},[Z,x,b]),w=(0,l.ZP)(!r&&!c()(a)&&(0,v.UJ)(n)?[n,"userNfts"]:null,(0,t.Z)(function(){return(0,i.__generator)(this,function(e){return[2,(0,d.A8)(n,a,C)]})}),{use:[h.XS]}),y=w.status,k=w.data,_=w.mutate,S=w.resetLaggy;return g.current=S,{nfts:null!=k?k:[],isLoading:y!==f.iF.Fetched,refresh:_}}},54529:function(n,e,r){var t=r(26042),i=r(69396),o=r(99534),a=r(7297),c=r(85893),s=r(87379),u=r(20353),d=r(42289);function l(){var n=(0,a.Z)(["\n  cursor: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ",";\n"]);return l=function(){return n},n}function f(){var n=(0,a.Z)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"]);return f=function(){return n},n}function h(){var n=(0,a.Z)(["\n  margin-left: 16px;\n"]);return h=function(){return n},n}function p(){var n=(0,a.Z)(["\n  align-self: stretch;\n  background-image: url('","');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"]);return p=function(){return n},n}var v=s.ZP.label.withConfig({componentId:"sc-f89ddf15-0"})(l(),function(n){return n.isDisabled?"not-allowed":"pointer"},function(n){return n.isDisabled?"0.6":"1"}),g=s.ZP.div.withConfig({componentId:"sc-f89ddf15-1"})(f()),m=s.ZP.div.withConfig({componentId:"sc-f89ddf15-2"})(h()),b=s.ZP.div.withConfig({componentId:"sc-f89ddf15-3"})(p(),function(n){return n.src}),Z=function(n){var e=n.name,r=n.value,a=n.isChecked,s=void 0!==a&&a,l=n.image,f=n.onChange,h=n.disabled,p=n.children,Z=(0,o.Z)(n,["name","value","isChecked","image","onChange","disabled","children"]);return(0,c.jsx)(u.Z,(0,i.Z)((0,t.Z)({isSuccess:s,isDisabled:h,mb:"16px"},Z),{children:(0,c.jsxs)(v,{isDisabled:h,children:[(0,c.jsxs)(g,{children:[(0,c.jsx)(d.Z,{name:e,checked:s,value:r,onChange:function(n){return f(n.target.value)},disabled:h,style:{flex:"none"}}),(0,c.jsx)(m,{children:p})]}),(0,c.jsx)(b,{src:l})]})}))};e.Z=Z}}]);