(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2146],{43174:function(n,e,t){var i=t(55189)(function(n,e,t){n[t?0:1].push(e)},function(){return[[],[]]});n.exports=i},95857:function(n,e,t){"use strict";var i=t(26042),o=t(69396),r=t(99534),a=t(7297),s=t(85893);t(67294);var l=t(87379);function c(){var n=(0,a.Z)(["\n  z-index: ",";\n  background-color: ",";\n  color: white;\n  margin: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ",";\n  top: 0;\n  text-align: center;\n  transform: ",";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ",';\n    content: "";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n']);return c=function(){return n},n}var u=l.ZP.div.withConfig({componentId:"sc-e1bdbf71-0"}).withConfig({componentId:"sc-e59b2756-0"})(c(),function(n){return n.theme.zIndices.ribbon},function(n){var e=n.variantColor;return n.theme.colors[void 0===e?"secondary":e]},function(n){return"right"===n.ribbonPosition?0:"auto"},function(n){return"right"===n.ribbonPosition?"translateX(30%) translateY(0%) rotate(45deg)":"translateX(0%) translateY(200%) rotate(-45deg)"},function(n){var e=n.variantColor;return n.theme.colors[void 0===e?"secondary":e]}),d=function(n){var e=n.variantColor,t=n.text,a=n.ribbonPosition,l=(0,r.Z)(n,["variantColor","text","ribbonPosition"]);return(0,s.jsx)(u,(0,o.Z)((0,i.Z)({variantColor:e,ribbonPosition:a},l),{children:(0,s.jsx)("div",{title:t,children:t})}))};d.defaultProps={ribbonPosition:"right"},e.Z=d},92146:function(n,e,t){"use strict";t.d(e,{Z:function(){return eS}});var i=t(10253),o=t(7297),r=t(85893),a=t(67294),s=t(73935),l=t(87379),c=t(2593),u=t(61744),d=t(44431),x=t.n(d),p=t(29315),f=t(62077),h=t(75943),m=t(98768),g=t(69589),j=t(63970),Z=t(75472),v=t.n(Z),b=t(43174),k=t.n(b),y=t(52775),w=t(45636),S=t(83251),C=t(75660),P=t(44142),T=t(27553),I=t(67274),B=t(19385),D=t(76688),A=t(96470),z=t(921),F=t(9372),L=t(11163),K=t(69117),R=t(88770),N=t(97478),M=t(77137),E=t(95857),W=t(70257),X=t(7447),G=t(87318),V=t(39023),$=t(88896),U=t(94998),O=t(47451),H=function(n){var e=n.pool,t=n.stakedBalance,i=n.performanceFee,o=n.showIcon,a=(0,y.$G)().t,s=e.vaultKey,l=a(s?"APY includes compounding, APR doesn’t. This pool’s CAKE is compounded automatically, so we show APY.":"This pool’s rewards aren’t compounded automatically, so we show APR"),c=(0,$.Z)(l,{placement:"bottom-start"}),u=c.targetRef,d=c.tooltip,x=c.tooltipVisible;return(0,r.jsxs)(h.Z,{alignItems:"center",justifyContent:"space-between",children:[x&&d,(0,r.jsx)(U.Z,{ref:u,children:s?"".concat(a("APY"),":"):"".concat(a("APR"),":")}),(0,r.jsx)(O.Z,{pool:e,stakedBalance:t,performanceFee:void 0===i?0:i,showIcon:void 0===o||o})]})},J=t(28487),Y=t(34773),q=t(32020),Q=t(44147),_=t(75759),nn=t(15895),ne=t(62685),nt=t(98553),ni=t(63771),no=t(36963),nr=t(79108),na=function(n){var e=n.pool,t=n.isLoading,i=e.sousId,o=e.stakingToken,a=e.earningToken,s=(0,y.$G)().t,l=(0,no.X_)(o.address||""),c=(0,nr.iB)(l,i,a.symbol),u=c.handleApprove,d=c.pendingTx;return(0,r.jsx)(r.Fragment,{children:void 0!==t&&t?(0,r.jsx)(ne.Z,{width:"100%",height:"52px"}):(0,r.jsx)(nt.Z,{isLoading:d,endIcon:d?(0,r.jsx)(ni.Z,{spin:!0,color:"currentColor"}):null,disabled:d,onClick:u,width:"100%",children:s("Enable")})})},ns=t(21812),nl=t(89663),nc=t(2412),nu=t(96484),nd=t(59123),nx=t(18778),np=t(52438),nf=t(63264),nh=function(n){var e=n.pool,t=n.stakingTokenBalance,o=n.stakedBalance,a=n.isBnbPool,s=n.isStaked,l=n.isLoading,c=e.stakingToken,u=e.stakingTokenPrice,d=e.stakingLimit,x=e.isFinished,p=e.userData,m=(0,y.$G)().t,g=(0,nd.mW)(o,c.decimals),j=(0,nd.mW)(o.multipliedBy(u),c.decimals),Z=(0,i.Z)((0,ns.Z)((0,r.jsx)(np.Z,{tokenSymbol:c.symbol})),1)[0],v=(0,i.Z)((0,ns.Z)((0,r.jsx)(nf.Z,{isBnbPool:a,pool:e,stakingTokenBalance:t,stakingTokenPrice:u})),1)[0],b=(0,i.Z)((0,ns.Z)((0,r.jsx)(nf.Z,{stakingTokenBalance:t,isBnbPool:a,pool:e,stakingTokenPrice:u,isRemovingStake:!0})),1)[0],k=(0,$.Z)(m("You’ve already staked the maximum amount you can stake in this pool!"),{placement:"bottom"}),w=k.targetRef,S=k.tooltip,C=k.tooltipVisible,P=d.gt(0)&&p.stakedBalance.gte(d);return(0,r.jsx)(h.Z,{flexDirection:"column",children:void 0!==l&&l?(0,r.jsx)(ne.Z,{width:"100%",height:"52px"}):s?(0,r.jsxs)(h.Z,{justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(h.Z,{flexDirection:"column",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nx.Z,{bold:!0,fontSize:"20px",decimals:3,value:g}),0!==u&&(0,r.jsx)(f.Z,{fontSize:"12px",color:"textSubtle",children:(0,r.jsx)(nx.Z,{fontSize:"12px",color:"textSubtle",decimals:2,value:j,prefix:"~",unit:" USD"})})]})}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(nl.Z,{variant:"secondary",onClick:b,mr:"6px",children:(0,r.jsx)(nc.Z,{color:"primary",width:"24px"})}),P?(0,r.jsx)("span",{ref:w,children:(0,r.jsx)(nl.Z,{variant:"secondary",disabled:!0,children:(0,r.jsx)(nu.Z,{color:"textDisabled",width:"24px",height:"24px"})})}):(0,r.jsx)(nl.Z,{variant:"secondary",onClick:t.gt(0)?v:Z,disabled:x,children:(0,r.jsx)(nu.Z,{color:"primary",width:"24px",height:"24px"})})]}),C&&S]}):(0,r.jsx)(nt.Z,{disabled:x,onClick:t.gt(0)?v:Z,children:m("Stake")})})},nm=t(72363),ng=function(n){var e=n.earnings,t=n.earningToken,o=n.sousId,a=n.isBnbPool,s=n.earningTokenPrice,l=n.isLoading,c=(0,y.$G)().t,u=(0,nd.mW)(e,t.decimals),d=(0,nd.uf)(u,3,3),x=(0,nd.mW)(e.multipliedBy(s),t.decimals),p=(0,nd.NJ)(e,t.decimals),m=e.toNumber()>0,j=(0,i.Z)((0,ns.Z)((0,r.jsx)(nm.Z,{formattedBalance:d,fullBalance:p,earningToken:t,earningsDollarValue:x,sousId:o,isBnbPool:a})),1)[0];return(0,r.jsxs)(h.Z,{justifyContent:"space-between",alignItems:"center",mb:"16px",children:[(0,r.jsx)(h.Z,{flexDirection:"column",children:void 0!==l&&l?(0,r.jsx)(ne.Z,{width:"80px",height:"48px"}):(0,r.jsx)(r.Fragment,{children:m?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nx.Z,{bold:!0,fontSize:"20px",decimals:5,value:u}),s>0&&(0,r.jsx)(nx.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:x,unit:" USD"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{color:"textDisabled",children:"0"}),(0,r.jsx)(f.Z,{fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})}),(0,r.jsx)(nt.Z,{disabled:!m,onClick:j,children:c("Harvest")})]})},nj=t(34015);function nZ(){var n=(0,o.Z)(["\n  display: inline;\n"]);return nZ=function(){return n},n}var nv=(0,l.ZP)(f.Z).withConfig({componentId:"sc-6f8e547-0"})(nZ()),nb=function(n){var e=n.pool,t=n.stakedBalance,i=e.sousId,o=e.stakingToken,a=e.earningToken,s=e.poolCategory,l=e.userData,c=e.earningTokenPrice,u=e.profileRequirement,d=s===_.jh.BINANCE,p=(0,y.$G)().t,f=(null==l?void 0:l.allowance)?new(x())(l.allowance):G.HW,m=(null==l?void 0:l.stakingTokenBalance)?new(x())(l.stakingTokenBalance):G.HW,g=(null==l?void 0:l.pendingReward)?new(x())(l.pendingReward):G.HW,j=!f.gt(0)&&!d,Z=t.gt(0),v=!l,b=(0,nn.f)(u),k=b.notMeetRequired,w=b.notMeetThreshold;return(0,r.jsx)(h.Z,{flexDirection:"column",children:(0,r.jsxs)(h.Z,{flexDirection:"column",children:[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Q.Z,{display:"inline",children:[(0,r.jsx)(nv,{color:"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:"".concat(a.symbol," ")}),(0,r.jsx)(nv,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:p("Earned")})]}),(0,r.jsx)(ng,{earnings:g,earningToken:a,sousId:i,earningTokenPrice:c,isBnbPool:d,isLoading:v})]}),(0,r.jsxs)(Q.Z,{display:"inline",children:[(0,r.jsxs)(nv,{color:Z?"secondary":"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:[Z?o.symbol:p("Stake")," "]}),(0,r.jsx)(nv,{color:Z?"textSubtle":"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:Z?p("Staked"):"".concat(o.symbol)})]}),k||w?(0,r.jsx)(nj.Q,{profileRequirement:u}):j?(0,r.jsx)(na,{pool:e,isLoading:v}):(0,r.jsx)(nh,{isLoading:v,pool:e,stakingTokenBalance:m,stakedBalance:t,isBnbPool:d,isStaked:Z})]})})},nk=function(n){var e=n.pool,t=n.account,i=e.sousId,o=e.stakingToken,a=e.earningToken,s=e.isFinished,l=e.userData,c=(0,y.$G)().t,u=(null==l?void 0:l.stakedBalance)?new(x())(l.stakedBalance):G.HW,d=u.gt(0),p="CAKE"===a.symbol&&"CAKE"===o.symbol;return(0,r.jsxs)(J.r,{isFinished:s&&0!==i,ribbon:s&&(0,r.jsx)(E.Z,{variantColor:"textDisabled",text:c("Finished")}),children:[(0,r.jsxs)(q.Z,{isStaking:d,isFinished:s&&0!==i,children:[(0,r.jsx)(q.e,{title:p?c("Manual"):c("Earn %asset%",{asset:a.symbol}),subTitle:p?c("Earn CAKE, stake CAKE"):c("Stake %symbol%",{symbol:o.symbol})}),(0,r.jsx)(V.q,{primaryToken:a,secondaryToken:o,width:64,height:64})]}),(0,r.jsxs)(W.Z,{children:[(0,r.jsx)(H,{pool:e,stakedBalance:u}),(0,r.jsx)(h.Z,{mt:"24px",flexDirection:"column",children:t?(0,r.jsx)(nb,{pool:e,stakedBalance:u}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{mb:"10px",textTransform:"uppercase",fontSize:"12px",color:"textSubtle",bold:!0,children:c("Start earning")}),(0,r.jsx)(X.Z,{})]})})]}),(0,r.jsx)(Y.Z,{pool:e,account:t})]})},ny=t(37593),nw=t(12966),nS=t(57329),nC=t(12587),nP=t(51983),nT=t(85765),nI=t(40628);function nB(){var n=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  "," {\n    margin-left: 8px;\n  }\n"]);return nB=function(){return n},n}function nD(){var n=(0,o.Z)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  "," {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"]);return nD=function(){return n},n}function nA(){var n=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  "," {\n    margin-left: 16px;\n  }\n"]);return nA=function(){return n},n}var nz=l.ZP.div.withConfig({componentId:"sc-abaf7347-0"})(nB(),f.Z),nF=l.ZP.div.withConfig({componentId:"sc-abaf7347-1"})(nD(),function(n){return n.theme.mediaQueries.sm}),nL=l.ZP.div.withConfig({componentId:"sc-abaf7347-2"})(nA(),function(n){return n.theme.mediaQueries.sm}),nK=function(n){var e=n.stakedOnly,t=n.setStakedOnly,i=n.hasStakeInFinishedPools,o=n.viewMode,a=n.setViewMode,s=(0,L.useRouter)(),l=(0,y.$G)().t,c="/pools"===s.pathname||"/_mp/pools"===s.pathname,u=(0,r.jsx)(nS.Z,{idPrefix:"clickPool",viewMode:o,onToggle:a}),d=(0,r.jsx)(nL,{children:(0,r.jsxs)(nC.Z,{activeIndex:c?0:1,scale:"sm",variant:"subtle",children:[(0,r.jsx)(nP.Z,{as:nw.a,to:"/pools",replace:!0,children:l("Live")}),(0,r.jsx)(nT.Z,{show:i,children:(0,r.jsx)(nP.Z,{id:"finished-pools-button",as:nw.a,to:"/pools/history",replace:!0,children:l("Finished")})})]})}),x=(0,r.jsxs)(nz,{children:[(0,r.jsx)(nI.Z,{checked:e,onChange:function(){return t(!e)},scale:"sm"}),(0,r.jsxs)(f.Z,{children:[" ",l("Staked only")]})]});return(0,r.jsxs)(nF,{children:[u,x,d]})},nR=t(34701),nN=t(40779),nM=t(16488);function nE(){var n=(0,o.Z)(["\n  flex: 4.5;\n  "," {\n    flex: 1 0 120px;\n  }\n"]);return nE=function(){return n},n}var nW=(0,l.ZP)(nM.Z).withConfig({componentId:"sc-eaaf7ef6-0"})(nE(),function(n){return n.theme.mediaQueries.sm}),nX=function(n){var e=n.pool,t=n.account,o=(0,y.$G)().t,a=(0,nR.Z)().isMobile,s=e.sousId,l=e.earningToken,c=e.poolCategory,u=e.userData,d=e.earningTokenPrice,p=(null==u?void 0:u.pendingReward)?new(x())(u.pendingReward):G.HW,m=(0,nd.mW)(p,l.decimals),g=(0,nd.mW)(p.multipliedBy(d),l.decimals),j=t&&p.gt(0),Z=(0,nd.NJ)(p,l.decimals),v=(0,nd.uf)(m,3,3),b=c===_.jh.BINANCE,k=o("%asset% Earned",{asset:l.symbol}),w=(0,i.Z)((0,ns.Z)((0,r.jsx)(nm.Z,{formattedBalance:v,fullBalance:Z,earningToken:l,earningsDollarValue:g,sousId:s,isBnbPool:b})),1)[0],S=function(n){n.stopPropagation(),w()};return(0,r.jsx)(nW,{role:"cell",children:(0,r.jsxs)(nM.J,{children:[(0,r.jsx)(f.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:k}),!e.userDataLoaded&&t?(0,r.jsx)(ne.Z,{width:"80px",height:"16px"}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(h.Z,{children:(0,r.jsxs)(Q.Z,{mr:"8px",height:"32px",onClick:j?S:void 0,children:[(0,r.jsx)(nx.Z,{mt:"4px",bold:!a,fontSize:a?"14px":"16px",color:j?"primary":"textDisabled",decimals:j?5:1,value:j?m:0}),j?(0,r.jsx)(r.Fragment,{children:d>0&&(0,r.jsx)(nx.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:g,unit:" USD"})}):(0,r.jsx)(f.Z,{mt:"4px",fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})})]})})},nG=t(32883);function nV(){var n=(0,o.Z)(["\n  flex: 2 0 100px;\n"]);return nV=function(){return n},n}var n$=(0,l.ZP)(nM.Z).withConfig({componentId:"sc-c9953473-0"})(nV()),nU=function(n){var e=n.pool,t=(0,y.$G)().t,i=e.stakingToken,o=e.totalStaked,s=e.vaultKey,l=(0,S.eB)(s).totalCakeInVault,c=(0,a.useMemo)(function(){return s?(0,nd.mW)(l,i.decimals):(0,nd.mW)(o,i.decimals)},[s,l,o,i.decimals]);return(0,r.jsx)(n$,{role:"cell",children:(0,r.jsxs)(nM.J,{children:[(0,r.jsx)(f.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:t("Total staked")}),o&&o.gte(0)?(0,r.jsx)(h.Z,{height:"20px",alignItems:"center",children:(0,r.jsx)(nx.Z,{fontSize:"16px",value:c,decimals:0,unit:" ".concat(i.symbol)})}):(0,r.jsx)(ne.Z,{width:"80px",height:"16px"})]})})},nO=t(21588),nH=t(97119),nJ=t(87237);function nY(){var n=(0,o.Z)(["\n  flex: 2 0 100px;\n"]);return nY=function(){return n},n}var nq=(0,l.ZP)(nM.Z).withConfig({componentId:"sc-cbec0181-0"})(nY()),nQ=function(n){var e=n.pool,t=e.sousId,i=e.totalStaked,o=e.startBlock,a=e.endBlock,s=e.isFinished,l=(0,R.je)(),c=(0,y.$G)().t,u=(0,nJ.zy)(e,l),d=u.shouldShowBlockCountdown,x=u.blocksUntilStart,p=u.blocksRemaining,g=u.hasPoolStarted,j=u.blocksToDisplay,Z=d?(0,r.jsxs)(h.Z,{alignItems:"center",children:[(0,r.jsxs)(h.Z,{flex:"1.3",children:[(0,r.jsx)(nx.Z,{fontSize:"16px",value:j,decimals:0}),(0,r.jsx)(f.Z,{ml:"4px",textTransform:"lowercase",children:c("Blocks")})]}),(0,r.jsx)(h.Z,{flex:"1",children:(0,r.jsx)(m.Z,{external:!0,href:(0,nH.C)(g?a:o,"countdown"),onClick:function(n){return n.stopPropagation()},children:(0,r.jsx)(nO.Z,{ml:"4px"})})})]}):(0,r.jsx)(f.Z,{children:"-"}),v=g&&!i.gt(0)||!l||!p&&!x;return(0,r.jsx)(nq,{role:"cell",children:(0,r.jsxs)(nM.J,{children:[(0,r.jsx)(f.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:c(g||!d?"Ends in":"Starts in")}),v&&0!==t&&!s?(0,r.jsx)(ne.Z,{width:"80px",height:"16px"}):Z]})})},n_=t(11252),n0=t(32056),n1=t(43337);function n2(){var n=(0,o.Z)([""]);return n2=function(){return n},n}var n4=(0,l.ZP)(nM.Z).withConfig({componentId:"sc-193f00af-0"})(n2()),n7=function(n){var e=n.pool,t=n.account,i=(0,y.$G)().t,o=(0,nR.Z)().isMobile,a=(0,S.eB)(e.vaultKey),s=a.userData,l=s.userShares,c=s.balance,u=c.cakeAsBigNumber,d=c.cakeAsNumberBalance,p=s.isLoading,m=l.gt(0),g=e.vaultKey&&m,j=e.stakingTokenPrice,Z=e.stakingToken,v=e.userData,b=(0,nd.mW)(u.multipliedBy(j),Z.decimals),k=(null==v?void 0:v.stakedBalance)?new(x())(v.stakedBalance):G.HW,w=(0,nd.mW)(k,Z.decimals),C=(0,nd.mW)(k.multipliedBy(j),Z.decimals),P="".concat(e.stakingToken.symbol," ").concat(i(e.vaultKey===A.om.CakeVault&&a.userData.locked?"Locked":"Staked")),T=t&&(k.gt(0)||g),I=e.vaultKey?p:!e.userDataLoaded;return(0,r.jsx)(n4,{role:"cell",flex:e.vaultKey===A.om.CakeFlexibleSideVault?"1 0 162px":e.vaultKey!==A.om.CakeVault||T?"2 0 100px":"1 0 120px",children:(0,r.jsxs)(nM.J,{children:[(0,r.jsx)(f.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:P}),I&&t?(0,r.jsx)(ne.Z,{width:"80px",height:"16px"}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(h.Z,{children:(0,r.jsxs)(Q.Z,{mr:"8px",height:"32px",children:[(0,r.jsx)(nx.Z,{mt:"4px",bold:!o,fontSize:o?"14px":"16px",color:T?"primary":"textDisabled",decimals:T?5:1,value:T?e.vaultKey?Number.isNaN(d)?0:d:w:0}),T?(0,r.jsx)(nx.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:e.vaultKey?b:C,unit:" USD"}):(0,r.jsx)(f.Z,{mt:"4px",fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})})]})})},n5=t(42219),n3=t(27934);function n6(){var n=(0,o.Z)(["\n  background-color: transparent;\n  display: flex;\n  cursor: pointer;\n"]);return n6=function(){return n},n}var n8=l.ZP.div.withConfig({componentId:"sc-dd7146e0-0"})(n6()),n9=function(n){var e=n.children,t=n.panel,i=n.initialActivity,o=(0,a.useRef)(!1),s=(0,nR.Z)(),l=s.isTablet,c=s.isDesktop,u=(0,a.useState)(i),d=u[0],x=u[1],p=(0,n5.Z)(d,300),f=(0,a.useCallback)(function(){x(function(n){return!n})},[]);return(0,a.useEffect)(function(){i&&!1===o.current&&(x(i),o.current=!0)},[i]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n8,{role:"row",onClick:f,children:[e,(0,r.jsx)(n3.Z,{expanded:d,isFullLayout:l||c})]}),p&&t]})},en=(0,a.memo)(n9),ee=(0,a.memo)(function(n){var e=n.vaultKey,t=n.account,i=n.initialActivity,o=(0,nR.Z)(),a=o.isXs,s=o.isSm,l=o.isMd,c=o.isLg,u=o.isXl,d=o.isXxl,x=u||d,p=(0,S.YX)(e);return(0,r.jsxs)(en,{initialActivity:i,panel:(0,r.jsx)(n_.Z,{account:t,pool:p,expanded:!0,breakpoints:{isXs:a,isSm:s,isMd:l,isLg:c,isXl:u,isXxl:d}}),children:[(0,r.jsx)(nN.Z,{pool:p}),x&&(0,r.jsx)(n0.Z,{pool:p,account:t}),x?(0,r.jsx)(n7,{pool:p,account:t}):null,(0,r.jsx)(n1.Z,{pool:p}),(c||u||d)&&(0,r.jsx)(nU,{pool:p})]})}),et=function(n){var e=n.sousId,t=n.account,i=n.initialActivity,o=(0,nR.Z)(),a=o.isXs,s=o.isSm,l=o.isMd,c=o.isLg,u=o.isXl,d=o.isXxl,x=o.isDesktop,p=(0,S.AI)(e).pool;return(0,r.jsxs)(en,{initialActivity:i,panel:(0,r.jsx)(n_.Z,{account:t,pool:p,expanded:!0,breakpoints:{isXs:a,isSm:s,isMd:l,isLg:c,isXl:u,isXxl:d}}),children:[(0,r.jsx)(nN.Z,{pool:p}),(0,r.jsx)(nX,{pool:p,account:t}),(c||u||d)&&(0,r.jsx)(nU,{pool:p}),(0,r.jsx)(nG.Z,{pool:p}),x&&(0,r.jsx)(nQ,{pool:p})]})},ei=(0,a.memo)(et);function eo(){var n=(0,o.Z)(["\n  border-radius: ",";\n  scroll-margin-top: 64px;\n\n  background-color: ",";\n  > div:not(:last-child) {\n    border-bottom: 2px solid ",";\n  }\n"]);return eo=function(){return n},n}function er(){var n=(0,o.Z)(["\n  border-radius: ",";\n  background-color: ",";\n  padding: 1px 1px 3px 1px;\n  background-size: 400% 400%;\n"]);return er=function(){return n},n}var ea=l.ZP.div.withConfig({componentId:"sc-a3ab40d2-0"})(eo(),function(n){return n.theme.radii.card},function(n){return n.theme.card.background},function(n){return n.theme.colors.disabled}),es=l.ZP.div.withConfig({componentId:"sc-a3ab40d2-1"})(er(),function(n){return n.theme.radii.card},function(n){return n.theme.colors.cardBorder}),el=function(n){var e=n.pools,t=n.account,i=n.urlSearch,o=(0,a.useRef)(null);return(0,r.jsx)(es,{children:(0,r.jsx)(ea,{id:"pools-table",role:"table",ref:o,children:e.map(function(n){var e,o;return n.vaultKey?(0,r.jsx)(ee,{initialActivity:i.toLowerCase()===(null===(e=n.earningToken.symbol)||void 0===e?void 0:e.toLowerCase()),vaultKey:n.vaultKey,account:t},n.vaultKey):(0,r.jsx)(ei,{initialActivity:i.toLowerCase()===(null===(o=n.earningToken.symbol)||void 0===o?void 0:o.toLowerCase()),sousId:n.sousId,account:t},n.sousId)})})})};function ec(){var n=(0,o.Z)(["\n  justify-content: center;\n"]);return ec=function(){return n},n}function eu(){var n=(0,o.Z)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 32px;\n    margin-bottom: 0;\n  }\n"]);return eu=function(){return n},n}function ed(){var n=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n\n  "," {\n    width: auto;\n    padding: 0;\n  }\n"]);return ed=function(){return n},n}function ex(){var n=(0,o.Z)(["\n  > "," {\n    font-size: 12px;\n  }\n"]);return ex=function(){return n},n}function ep(){var n=(0,o.Z)(["\n  > div {\n    flex: 1;\n  }\n"]);return ep=function(){return n},n}function ef(){var n=(0,o.Z)(["\n  padding-bottom: 32px;\n  flex-direction: column;\n  "," {\n    flex-direction: row;\n  }\n"]);return ef=function(){return n},n}function eh(){var n=(0,o.Z)(["\n  font-weight: 400;\n  white-space: nowrap;\n  text-decoration: underline;\n"]);return eh=function(){return n},n}var em=(0,l.ZP)(P.Z).withConfig({componentId:"sc-56415755-0"})(ec()),eg=l.ZP.div.withConfig({componentId:"sc-56415755-1"})(eu(),function(n){return n.theme.mediaQueries.sm}),ej=l.ZP.div.withConfig({componentId:"sc-56415755-2"})(ed(),function(n){return n.theme.mediaQueries.sm}),eZ=l.ZP.div.withConfig({componentId:"sc-56415755-3"})(ex(),f.Z),ev=(0,l.ZP)(h.Z).withConfig({componentId:"sc-56415755-4"})(ep()),eb=(0,l.ZP)(h.Z).withConfig({componentId:"sc-56415755-5"})(ef(),function(n){return n.theme.mediaQueries.md}),ek=(0,l.ZP)(m.Z).withConfig({componentId:"sc-56415755-6"})(eh()),ey=function(n,e,t,i){switch(e){case"apr":return v()(i,function(n){return n.apr?n.apr:0},"desc");case"earned":return v()(i,function(e){if(!e.userData||!e.earningTokenPrice)return 0;if(e.vaultKey){var t=e.userData,i=e.pricePerFullShare;return t&&t.userShares?(0,nJ.UN)(n,t.cakeAtLastUserAction,t.userShares,i,e.earningTokenPrice,e.vaultKey===A.om.CakeVault?e.userData.currentPerformanceFee.plus(e.userData.currentOverdueFee):null).autoUsdToDisplay:0}return e.userData.pendingReward.times(e.earningTokenPrice).toNumber()},"desc");case"totalStaked":return v()(i,function(n){var e,t=Number.NaN;return n.vaultKey?n.stakingTokenPrice&&n.totalCakeInVault.isFinite()&&(t=+(0,u.formatUnits)(c.O$.from(n.totalCakeInVault.toString()),n.stakingToken.decimals)*n.stakingTokenPrice):(null===(e=n.totalStaked)||void 0===e?void 0:e.isFinite())&&n.stakingTokenPrice&&(t=+(0,u.formatUnits)(c.O$.from(n.totalStaked.toString()),n.stakingToken.decimals)*n.stakingTokenPrice),Number.isFinite(t)?t:0},"desc");case"latest":return v()(i,function(n){return Number(n.sousId)},"desc");default:return i}},ew=60/N.hJ*4,eS=function(){var n,e=(0,L.useRouter)(),t=(0,y.$G)().t,o=(0,p.Ge)().account,l=(0,S.f6)(),c=l.pools,u=l.userDataLoaded,d=(0,i.Z)((0,z.tw)(),2),m=d[0],Z=d[1],v=(0,i.Z)((0,z.Yi)(),2),b=v[0],P=v[1],A=(0,a.useState)(12),N=A[0],E=A[1],W=(0,w.Z)(),X=W.observerRef,G=W.isIntersecting,V=(0,a.useMemo)(function(){var n;return"string"==typeof(null==e?void 0:null===(n=e.query)||void 0===n?void 0:n.search)?e.query.search:""},[e.query]),$=(0,a.useState)(""),U=$[0],O=$[1],H=V&&!U?V:U,J=(0,a.useState)("hot"),Y=J[0],q=J[1],Q=(0,a.useRef)(0),_=(0,R.Xh)(),nn=(0,a.useMemo)(function(){return k()(c,function(n){return n.isFinished})},[c]),ne=nn[0],nt=nn[1],ni=(0,a.useMemo)(function(){return nt.filter(function(n){return!(_>0)||!n.startBlock||Number(n.startBlock)<_+ew})},[_,nt]),no=(0,a.useMemo)(function(){return ne.filter(function(n){return n.vaultKey?n.userData.userShares.gt(0):n.userData&&new(x())(n.userData.stakedBalance).isGreaterThan(0)})},[ne]),nr=(0,a.useCallback)(function(){return ni.filter(function(n){return n.vaultKey?n.userData.userShares.gt(0):n.userData&&new(x())(n.userData.stakedBalance).isGreaterThan(0)})},[ni]),na=no.length>0;(0,S.l7)(),(0,a.useEffect)(function(){G&&E(function(n){return n<=Q.current?n+12:n})},[G]);var ns=e.pathname.includes("history"),nl=(0,a.useCallback)(function(n){return O(n.target.value)},[]),nc=(0,a.useCallback)(function(n){return q(n.value)},[]);n=ns?m?no:ne:m?nr():ni,n=(0,a.useMemo)(function(){var e=ey(o,Y,c,n).slice(0,N);if(H){var t=(0,C.b)(H.toLowerCase());return e.filter(function(n){return(0,C.b)(n.earningToken.symbol.toLowerCase()).includes(t)})}return e},[o,Y,c,n,N,H]),Q.current=n.length;var nu=(0,r.jsx)(em,{children:n.map(function(n){return n.vaultKey?(0,r.jsx)(ny.Z,{pool:n,showStakedOnly:m},n.vaultKey):(0,r.jsx)(nk,{pool:n,account:o},n.sousId)})}),nd=(0,r.jsx)(el,{urlSearch:V,pools:n,account:o});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I.Z,{children:(0,r.jsx)(h.Z,{justifyContent:"space-between",flexDirection:["column",null,null,"row"],children:(0,r.jsxs)(h.Z,{flex:"1",flexDirection:"column",mr:["8px",0],children:[(0,r.jsx)(g.Z,{as:"h1",scale:"xxl",color:"secondary",mb:"24px",children:t("Syrup Pools")}),(0,r.jsx)(g.Z,{scale:"md",color:"text",children:t("Just stake some tokens to earn.")}),(0,r.jsx)(g.Z,{scale:"md",color:"text",children:t("High APR, low risk.")})]})})}),(0,r.jsxs)(T.Z,{children:[(0,r.jsxs)(eg,{children:[(0,r.jsx)(nK,{stakedOnly:m,setStakedOnly:Z,hasStakeInFinishedPools:na,viewMode:b,setViewMode:P}),(0,r.jsxs)(ej,{children:[(0,r.jsxs)(eZ,{children:[(0,r.jsx)(f.Z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",children:t("Sort by")}),(0,r.jsx)(ev,{children:(0,r.jsx)(D.Z,{options:[{label:t("Hot"),value:"hot"},{label:t("APR"),value:"apr"},{label:t("Earned"),value:"earned"},{label:t("Total staked"),value:"totalStaked"},{label:t("Latest"),value:"latest"},],onOptionChange:nc})})]}),(0,r.jsxs)(eZ,{style:{marginLeft:16},children:[(0,r.jsx)(f.Z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",children:t("Search")}),(0,r.jsx)(B.Z,{initialValue:H,onChange:nl,placeholder:"Search Pools"})]})]})]}),ns&&(0,r.jsxs)(eb,{children:[(0,r.jsx)(f.Z,{fontSize:["16px",null,"20px"],color:"failure",pr:"4px",children:t("Looking for v1 CAKE syrup pools?")}),(0,r.jsxs)(ek,{href:"/migration",fontSize:["16px",null,"20px"],color:"failure",children:[t("Go to migration page"),"."]})]}),o&&!u&&m&&(0,r.jsx)(h.Z,{justifyContent:"center",mb:"4px",children:(0,r.jsx)(K.Z,{})}),b===F.wO.CARD?nu:nd,(0,r.jsx)("div",{ref:X}),(0,r.jsx)(j.Z,{mx:"auto",mt:"12px",src:"/images/decorations/3d-syrup-bunnies.png",alt:"Pancake illustration",width:192,height:184.5})]}),(0,s.createPortal)((0,r.jsx)(M.Z,{}),document.body)]})}}}]);