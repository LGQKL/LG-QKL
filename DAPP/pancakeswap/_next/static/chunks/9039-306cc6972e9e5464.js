"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9039],{25808:function(e,n,t){var r=t(26042),i=t(69396),o=t(85893);t(67294);var s=t(87379),c=t(44976),a=function(e){var n=(0,s.Fg)(),t=n.isDark?"#3C3742":"#e9eaeb",a=n.isDark?"#666171":"#bdc2c4";return(0,o.jsxs)(c.Z,(0,i.Z)((0,r.Z)({viewBox:"0 0 32 32"},e),{children:[(0,o.jsx)("path",{d:"M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z",fill:t}),(0,o.jsx)("mask",{id:"A","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"32",height:"32",children:(0,o.jsx)("path",{d:"M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z",fill:"#c4c4c4"})}),(0,o.jsxs)("g",{mask:"url(#A)",children:[(0,o.jsx)("path",{d:"M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z",fill:a}),(0,o.jsx)("path",{fillRule:"evenodd",d:"M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z",fill:a}),(0,o.jsx)("ellipse",{cx:"12.308",cy:"14.846",rx:"1.026",ry:"1.538",fill:t}),(0,o.jsx)("ellipse",{cx:"19.385",cy:"14.846",rx:"1.026",ry:"1.538",fill:t})]})]}))};n.Z=a},39512:function(e,n,t){var r=t(7297),i=t(85893),o=t(25808),s=t(87379);function c(){var e=(0,r.Z)(["\n  border: 1px solid ",";\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  "," {\n    border-width: 2px;\n  }\n"]);return c=function(){return e},e}function a(){var e=(0,r.Z)(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n"]);return a=function(){return e},e}function u(){var e=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n"]);return u=function(){return e},e}var l=s.ZP.img.withConfig({componentId:"sc-c5c8ef7c-0"})(c(),function(e){return e.theme.card.background},function(e){return e.theme.mediaQueries.sm}),d=s.ZP.div.withConfig({componentId:"sc-c5c8ef7c-1"})(a(),function(e){return e.bg}),h=(0,s.ZP)(o.Z).withConfig({componentId:"sc-c5c8ef7c-2"})(u()),p=function(e){var n,t=e.profile;return(0,i.jsxs)(d,{bg:null===(n=t.nft)||void 0===n?void 0:n.image.thumbnail,children:[!t.isActive&&(0,i.jsx)(h,{}),t.team&&(0,i.jsx)(l,{src:"/images/teams/".concat(t.team.images.alt),alt:t.team.name})]})};n.Z=p},66594:function(e,n,t){var r=t(7297),i=t(87379);function o(){var e=(0,r.Z)(["\n  background: url('/images/nfts/no-profile-md.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n\n  & > img {\n    border-radius: 50%;\n  }\n"]);return o=function(){return e},e}var s=i.ZP.div.withConfig({componentId:"sc-9689af5c-0"})(o());n.Z=s},40965:function(e,n,t){t.d(n,{Z:function(){return eo}});var r,i,o=t(85893),s=t(85937),c=t(52775),a=t(26042),u=t(69396),l=t(67294);(i=r||(r={})).START="start",i.CHANGE="change",i.REMOVE="remove",i.APPROVE="approve";var d=function(e,n){switch(n.type){case"set_view":return(0,u.Z)((0,a.Z)({},e),{currentView:n.view,previousView:e.currentView});case"go_previous":return(0,u.Z)((0,a.Z)({},e),{currentView:e.previousView,previousView:e.currentView});default:return e}},h=function(){var e=(0,l.useReducer)(d,{currentView:r.START,previousView:null}),n=e[0],t=e[1],i=function(){return t({type:"set_view",view:r.START})},o=function(){return t({type:"set_view",view:r.CHANGE})},s=function(){return t({type:"set_view",view:r.REMOVE})},c=function(){return t({type:"set_view",view:r.APPROVE})},h=function(){return t({type:"go_previous"})};return(0,u.Z)((0,a.Z)({},n),{goToStart:i,goToChange:o,goToRemove:s,goToApprove:c,goPrevious:h})},p=t(47568),f=t(7297),m=t(70655),v=t(87379),x=t(29315),g=t(98553),b=t(75943),C=t(62077),w=t(59123),Z=t(69352),k=t(36963),j=t(94186),A=t(10253),T=t(21046),y=t(9796),P=t(92335),R=t(19237),E=function(){var e=(0,c.$G)().t,n=(0,l.useState)(!0),t=n[0],r=n[1],i=(0,l.useState)({numberCakeToReactivate:T._Y,numberCakeToRegister:T._Y,numberCakeToUpdate:T._Y}),o=i[0],s=i[1],a=(0,R.p)().toastError;return(0,l.useEffect)(function(){var n;(n=(0,p.Z)(function(){var n,t,i,o,c,u,l,d;return(0,m.__generator)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),n=["numberCakeToReactivate","numberCakeToRegister","numberCakeToUpdate"].map(function(e){return{address:(0,Z.Re)(),name:e}}),[4,(0,y.v)({abi:P,calls:n})];case 1:return t=A.Z.apply(void 0,[i.sent(),3]),o=(0,A.Z)(t[0],1)[0],s({numberCakeToReactivate:o,numberCakeToRegister:u=(0,A.Z)(t[1],1)[0],numberCakeToUpdate:(0,A.Z)(t[2],1)[0]}),r(!1),[3,3];case 2:return i.sent(),a(e("Error"),e("Could not retrieve CAKE costs for profile")),[3,3];case 3:return[2]}})}),function(){return n.apply(this,arguments)})()},[s,a,e]),{costs:o,isLoading:t}},S=t(75759),I=t(35831),_=t(72007),V=t(39512);function D(){var e=(0,f.Z)(["\n  border-color: ",";\n  color: ",";\n  margin-bottom: 24px;\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    border-color: ",";\n    opacity: 0.8;\n  }\n"]);return D=function(){return e},e}function G(){var e=(0,f.Z)(["\n  height: 64px;\n  width: 64px;\n\n  "," {\n    height: 128px;\n    width: 128px;\n  }\n"]);return G=function(){return e},e}var U=(0,v.ZP)(g.Z).attrs({variant:"secondary"}).withConfig({componentId:"sc-17dd7e85-0"})(D(),function(e){return e.theme.colors.failure},function(e){return e.theme.colors.failure},function(e){return e.theme.colors.failure}),L=v.ZP.div.withConfig({componentId:"sc-17dd7e85-1"})(G(),function(e){return e.theme.mediaQueries.sm}),M=function(e){var n=e.goToApprove,t=e.goToChange,r=e.goToRemove,i=e.onDismiss,s=(0,c.$G)().t,a=(0,x.Ge)().account,u=(0,k.kL)().reader,d=(0,_.Un)().profile,h=(0,j.Nn)(),f=h.balance,v=h.fetchStatus,A=E(),T=A.costs,y=T.numberCakeToUpdate,P=T.numberCakeToReactivate,R=A.isLoading,D=(0,l.useState)(null),G=D[0],M=D[1],W=(null==d?void 0:d.isActive)?y:P,F=v===S.iF.Fetched&&f.gte(W);return((0,l.useEffect)(function(){var e,n=(e=(0,p.Z)(function(){var e;return(0,m.__generator)(this,function(e){switch(e.label){case 0:return[4,(0,I.S)(u,a,(0,Z.Re)(),W)];case 1:return M(e.sent()),[2]}})}),function(){return e.apply(this,arguments)});a&&!R&&n()},[a,W,M,u,R]),d)?(0,o.jsxs)(b.Z,{alignItems:"center",justifyContent:"center",flexDirection:"column",children:[(0,o.jsx)(L,{children:(0,o.jsx)(V.Z,{profile:d})}),(0,o.jsx)(b.Z,{alignItems:"center",style:{height:"48px"},justifyContent:"center",children:(0,o.jsx)(C.Z,{as:"p",color:"failure",children:!R&&!F&&s("%minimum% CAKE required to change profile pic",{minimum:(0,w.dp)(W)})})}),d.isActive?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.Z,{width:"100%",mb:"8px",onClick:!0===G?n:t,disabled:R||!F||null===G,children:s("Change Profile Pic")}),(0,o.jsx)(U,{width:"100%",onClick:r,children:s("Remove Profile Pic")})]}):(0,o.jsx)(g.Z,{width:"100%",mb:"8px",onClick:!0===G?n:t,disabled:R||!F||null===G,children:s("Reactivate Profile")}),(0,o.jsx)(g.Z,{variant:"text",width:"100%",onClick:i,children:s("Close Window")})]}):null},W=t(92052),F=t(63771),H=t(85900),O=t(76431),z=t(96036),N=function(e){var n,t=e.onDismiss,r=e.onSuccess,i=(0,l.useState)(!1),s=i[0],a=i[1],u=(0,_.Un)(),d=u.profile,h=u.refresh,f=E().costs.numberCakeToReactivate,v=(0,c.$G)().t,x=(0,k.wr)(),Z=(0,H.d)().callWithGasPrice,j=(0,R.p)().toastSuccess,A=(0,O.Z)(),T=A.fetchWithCatchTxError,y=A.loading,P=function(){return a(!s)},S=(n=(0,p.Z)(function(){var e;return(0,m.__generator)(this,function(n){switch(n.label){case 0:return[4,T(function(){return Z(x,"pauseProfile")})];case 1:return(null==(e=n.sent())?void 0:e.status)&&(h(),j(v("Profile Paused!"),(0,o.jsx)(z.Y,{txHash:e.transactionHash})),null==r||r(),null==t||t()),[2]}})}),function(){return n.apply(this,arguments)});return d?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C.Z,{as:"p",color:"failure",mb:"24px",children:v("This will suspend your profile and send your Collectible back to your wallet")}),(0,o.jsx)(C.Z,{as:"p",color:"textSubtle",mb:"24px",children:v("While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile")}),(0,o.jsx)(C.Z,{as:"p",color:"textSubtle",mb:"24px",children:v("Cost to reactivate in the future: %cost% CAKE",{cost:(0,w.dp)(f)})}),(0,o.jsx)("label",{htmlFor:"acknowledgement",style:{cursor:"pointer",display:"block",marginBottom:"24px"},children:(0,o.jsxs)(b.Z,{alignItems:"center",children:[(0,o.jsx)(W.Z,{id:"acknowledgement",checked:s,onChange:P,scale:"sm"}),(0,o.jsx)(C.Z,{ml:"8px",children:v("I understand")})]})}),(0,o.jsx)(g.Z,{width:"100%",isLoading:y,endIcon:y?(0,o.jsx)(F.Z,{spin:!0,color:"currentColor"}):null,disabled:!s||y,onClick:S,mb:"8px",children:v("Confirm")}),(0,o.jsx)(g.Z,{variant:"text",width:"100%",onClick:t,children:v("Close Window")})]}):null},Y=t(62685),$=t(44147),K=t(73546),B=t(6169),Q=t(9882),q=t(91186),J=t(21421),X=t(54529),ee=t(5286),en=t(97755),et=function(e){var n,t=e.onDismiss,r=e.onSuccess,i=(0,l.useState)({tokenId:null,collectionAddress:null}),s=i[0],a=i[1],u=(0,c.$G)().t,d=(0,x.Ge)().account,h=(0,ee.mx)().data,f=(0,_.Un)(),v=f.isLoading,b=f.profile,w=f.refresh,j=(0,en.L)(d,b,v),A=j.nfts,T=j.isLoading,y=(0,k.wr)(),P=(0,R.p)().toastSuccess,E=(0,H.d)().callWithGasPrice,S=(0,l.useMemo)(function(){return A.filter(function(e){return e.location===q.Fb.WALLET})},[A]),I=(0,Q.mN)(S).data,V=(0,l.useMemo)(function(){return!!I&&!!I[s.tokenId]},[I,s.tokenId]),D=(0,B.Z)({onApprove:function(){var e=(0,J.vE)(s.collectionAddress,h);return E(e,"approve",[(0,Z.Re)(),s.tokenId])},onConfirm:function(){return b.isActive?E(y,"updateProfile",[s.collectionAddress,s.tokenId]):E(y,"reactivateProfile",[s.collectionAddress,s.tokenId,])},onSuccess:(n=(0,p.Z)(function(e){var n;return(0,m.__generator)(this,function(i){return n=e.receipt,w(),P(u("Profile Updated!"),(0,o.jsx)(z.Y,{txHash:n.transactionHash})),null==r||r(),null==t||t(),[2]})}),function(e){return n.apply(this,arguments)})}),G=D.isApproving,U=D.isApproved,L=D.isConfirmed,M=D.isConfirming,W=D.handleApprove,F=D.handleConfirm,O=U||V;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C.Z,{as:"p",color:"textSubtle",mb:"24px",children:u("Choose a new Collectible to use as your profile pic.")}),T?(0,o.jsx)(Y.Z,{width:"100%",height:"80px",mb:"16px"}):S.length>0?(0,o.jsx)($.Z,{maxHeight:"300px",overflowY:"scroll",children:S.map(function(e){var n=function(){a({tokenId:e.tokenId,collectionAddress:e.collectionAddress})};return(0,o.jsx)(X.Z,{name:"profilePicture",value:e.tokenId,image:e.image.thumbnail,isChecked:e.tokenId===s.tokenId,onChange:n,disabled:G||M||L,children:(0,o.jsx)(C.Z,{bold:!0,children:e.name})},"".concat(e.collectionAddress,"#").concat(e.tokenId))})}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C.Z,{as:"p",color:"textSubtle",mb:"16px",children:u("Sorry! You don’t have any eligible Collectibles in your wallet to use!")}),(0,o.jsx)(C.Z,{as:"p",color:"textSubtle",mb:"24px",children:u("Make sure you have a Pancake Collectible in your wallet and try again!")})]}),(0,o.jsx)(K.Z,{isApproveDisabled:L||M||O||null===s.tokenId,isApproving:G,isConfirmDisabled:!O||L||null===s.tokenId,isConfirming:M,onApprove:W,onConfirm:F}),(0,o.jsx)(g.Z,{mt:"8px",variant:"text",width:"100%",onClick:t,disabled:G||M,children:u("Close Window")})]})},er=function(e){var n=e.goToChange,t=e.onDismiss,r=(0,_.Un)().profile,i=(0,c.$G)().t,s=(0,O.Z)(),a=s.fetchWithCatchTxError,u=s.loading,l=E().costs,d=l.numberCakeToUpdate,h=l.numberCakeToReactivate,f=(0,k.kL)().signer;if(!r)return null;var v,x=r.isActive?d:h,j=(v=(0,p.Z)(function(){var e;return(0,m.__generator)(this,function(t){switch(t.label){case 0:return[4,a(function(){return f.approve((0,Z.Re)(),x.mul(2).toString())})];case 1:return(null==(e=t.sent())?void 0:e.status)&&n(),[2]}})}),function(){return v.apply(this,arguments)});return(0,o.jsxs)(b.Z,{flexDirection:"column",children:[(0,o.jsxs)(b.Z,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[(0,o.jsx)(C.Z,{children:i(r.isActive?"Cost to update:":"Cost to reactivate:")}),(0,o.jsxs)(C.Z,{children:[(0,w.dp)(x)," CAKE"]})]}),(0,o.jsx)(g.Z,{disabled:u,isLoading:u,endIcon:u?(0,o.jsx)(F.Z,{spin:!0,color:"currentColor"}):null,width:"100%",mb:"8px",onClick:j,children:i("Enable")}),(0,o.jsx)(g.Z,{variant:"text",width:"100%",onClick:t,disabled:u,children:i("Close Window")})]})},ei=function(e,n){switch(n){case r.START:return e("Edit Profile");case r.CHANGE:return e("Change Profile Pic");case r.REMOVE:return e("Remove Profile Pic");case r.APPROVE:return e("Enable CAKE");default:return""}},eo=function(e){var n=e.onDismiss,t=e.onSuccess,i=h(),a=i.currentView,u=i.goToChange,l=i.goToRemove,d=i.goToApprove,p=i.goPrevious,f=(0,c.$G)().t,m=a===r.START;return(0,o.jsx)(s.Z,{title:ei(f,a),onBack:m?null:function(){return p()},onDismiss:n,hideCloseButton:!m,children:(0,o.jsxs)("div",{style:{maxWidth:"400px"},children:[a===r.START&&(0,o.jsx)(M,{goToApprove:d,goToChange:u,goToRemove:l,onDismiss:n}),a===r.REMOVE&&(0,o.jsx)(N,{onDismiss:n,onSuccess:t}),a===r.CHANGE&&(0,o.jsx)(et,{onDismiss:n,onSuccess:t}),a===r.APPROVE&&(0,o.jsx)(er,{goToChange:u,onDismiss:n})]})})}}}]);