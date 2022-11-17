"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7917],{20353:function(t,n,e){e.d(n,{Z:function(){return v}});var i=e(26042),a=e(69396),u=e(99534),p=e(85893);e(67294);var s=e(7297),y=e(87379),r=e(57247),o=e(44147);function l(){var t=(0,s.Z)(["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"]);return l=function(){return t},t}function d(){var t=(0,s.Z)(["\n      animation: "," 3s ease infinite;\n      background-size: 400% 400%;\n    "]);return d=function(){return t},t}function m(){var t=(0,s.Z)(["\n  background: ",";\n  border-radius: ",";\n  color: ",";\n  overflow: hidden;\n  position: relative;\n\n  ","\n\n  padding: 1px 1px 3px 1px;\n\n  ","\n"]);return m=function(){return t},t}function c(){var t=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: ",";\n  background: ",";\n  border-radius: ",";\n"]);return c=function(){return t},t}var f=(0,y.F4)(l()),T=function(t){var n=t.isActive,e=t.isSuccess,i=t.isWarning,a=t.borderBackground,u=t.theme;return a||(i?u.colors.warning:e?u.colors.success:n?"linear-gradient(180deg, ".concat(u.colors.primaryBright,", ").concat(u.colors.secondary,")"):u.colors.cardBorder)},b=y.ZP.div.withConfig({componentId:"sc-eecfaa46-0"}).withConfig({componentId:"sc-62e22978-0"})(m(),T,function(t){return t.theme.radii.card},function(t){var n=t.theme,e=t.isDisabled;return n.colors[e?"textDisabled":"text"]},function(t){return t.isActive&&(0,y.iv)(d(),f)},r.Dh),_=(0,y.ZP)(o.Z).withConfig({componentId:"sc-eecfaa46-1"}).withConfig({componentId:"sc-62e22978-1"})(c(),function(t){return t.hasCustomBorder?"initial":"inherit"},function(t){var n=t.theme,e=t.background;return null!=e?e:n.card.background},function(t){return t.theme.radii.card});b.defaultProps={isActive:!1,isSuccess:!1,isWarning:!1,isDisabled:!1};var v=function(t){var n=t.ribbon,e=t.children,s=t.background,y=(0,u.Z)(t,["ribbon","children","background"]);return(0,p.jsx)(b,(0,a.Z)((0,i.Z)({},y),{children:(0,p.jsxs)(_,{background:s,hasCustomBorder:!!y.borderBackground,children:[n,e]})}))}},12353:function(t,n,e){e.d(n,{UA:function(){return A},ZP:function(){return k},f8:function(){return M},rS:function(){return w}});var i=e(47568),a=e(26042),u=e(69396),p=e(99534),s=e(10253),y=e(70655),r=e(36963),o=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[2]","name":"token_amounts","type":"uint256[2]"},{"indexed":false,"internalType":"uint256[2]","name":"fees","type":"uint256[2]"},{"indexed":false,"internalType":"uint256","name":"invariant","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"token_supply","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"deadline","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"admin_fee","type":"uint256"}],"name":"CommitNewFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"admin_fee","type":"uint256"}],"name":"NewFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"old_A","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"new_A","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"initial_time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"future_time","type":"uint256"}],"name":"RampA","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[2]","name":"token_amounts","type":"uint256[2]"},{"indexed":false,"internalType":"uint256[2]","name":"fees","type":"uint256[2]"},{"indexed":false,"internalType":"uint256","name":"token_supply","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256[2]","name":"token_amounts","type":"uint256[2]"},{"indexed":false,"internalType":"uint256[2]","name":"fees","type":"uint256[2]"},{"indexed":false,"internalType":"uint256","name":"invariant","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"token_supply","type":"uint256"}],"name":"RemoveLiquidityImbalance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"token_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"coin_amount","type":"uint256"}],"name":"RemoveLiquidityOne","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"A","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"t","type":"uint256"}],"name":"StopRampA","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"sold_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokens_sold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bought_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokens_bought","type":"uint256"}],"name":"TokenExchange","type":"event"},{"inputs":[],"name":"A","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADMIN_ACTIONS_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_DENOMINATOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"KILL_DEADLINE_DT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_A","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_ADMIN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_A_CHANGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_DECIMAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_RAMP_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"N_COINS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"PRECISION_MUL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"RATES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STABLESWAP_FACTORY","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[2]","name":"amounts","type":"uint256[2]"},{"internalType":"uint256","name":"min_mint_amount","type":"uint256"}],"name":"add_liquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin_actions_deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"admin_balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin_fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"apply_new_fee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[2]","name":"amounts","type":"uint256[2]"},{"internalType":"bool","name":"deposit","type":"bool"}],"name":"calc_token_amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_token_amount","type":"uint256"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"calc_withdraw_one_coin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"coins","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"new_fee","type":"uint256"},{"internalType":"uint256","name":"new_admin_fee","type":"uint256"}],"name":"commit_new_fee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"donate_admin_fees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"j","type":"uint256"},{"internalType":"uint256","name":"dx","type":"uint256"},{"internalType":"uint256","name":"min_dy","type":"uint256"}],"name":"exchange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"future_A","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"future_A_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"future_admin_fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"future_fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"j","type":"uint256"},{"internalType":"uint256","name":"dx","type":"uint256"}],"name":"get_dy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"j","type":"uint256"},{"internalType":"uint256","name":"dx","type":"uint256"}],"name":"get_dy_underlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_virtual_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initial_A","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initial_A_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[2]","name":"_coins","type":"address[2]"},{"internalType":"uint256","name":"_A","type":"uint256"},{"internalType":"uint256","name":"_fee","type":"uint256"},{"internalType":"uint256","name":"_admin_fee","type":"uint256"},{"internalType":"address","name":"_owner","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"is_killed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"kill_deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"kill_me","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_future_A","type":"uint256"},{"internalType":"uint256","name":"_future_time","type":"uint256"}],"name":"ramp_A","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256[2]","name":"min_amounts","type":"uint256[2]"}],"name":"remove_liquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[2]","name":"amounts","type":"uint256[2]"},{"internalType":"uint256","name":"max_burn_amount","type":"uint256"}],"name":"remove_liquidity_imbalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_token_amount","type":"uint256"},{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"min_amount","type":"uint256"}],"name":"remove_liquidity_one_coin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revert_new_parameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stop_rampget_A","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract PancakeStableSwapLP","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unkill_me","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw_admin_fees","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),l=JSON.parse('[{"inputs":[],"name":"FEE_DENOMINATOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"N_COINS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"}],"name":"PRECISION_MUL","outputs":[{"internalType":"uint256[2]","name":"swapPRECISION_MUL","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"}],"name":"RATES","outputs":[{"internalType":"uint256[2]","name":"swapRATES","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256[2]","name":"_balances","type":"uint256[2]"}],"name":"_xp_mem","outputs":[{"internalType":"uint256[2]","name":"result","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256[2]","name":"swapBalances","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"calc_coins_amount","outputs":[{"internalType":"uint256[2]","name":"","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256[2]","name":"_balances","type":"uint256[2]"},{"internalType":"uint256","name":"amp","type":"uint256"}],"name":"get_D_mem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256[2]","name":"amounts","type":"uint256[2]"}],"name":"get_add_liquidity_fee","outputs":[{"internalType":"uint256[2]","name":"liquidityFee","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256[2]","name":"amounts","type":"uint256[2]"}],"name":"get_add_liquidity_mint_amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"},{"internalType":"uint256","name":"j","type":"uint256"},{"internalType":"uint256","name":"dx","type":"uint256"}],"name":"get_exchange_fee","outputs":[{"internalType":"uint256","name":"exFee","type":"uint256"},{"internalType":"uint256","name":"exAdminFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256[2]","name":"amounts","type":"uint256[2]"}],"name":"get_remove_liquidity_imbalance_fee","outputs":[{"internalType":"uint256[2]","name":"liquidityFee","type":"uint256[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"},{"internalType":"uint256","name":"_token_amount","type":"uint256"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"get_remove_liquidity_one_coin_fee","outputs":[{"internalType":"uint256","name":"adminFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_swap","type":"address"}],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}]'),d=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"miner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),m=e(46472),c=e(5460),f=e(67294),T=e(97477),b=e(49770),_=e(37971),v=e(40370);function w(){var t=(0,T.Z)().chainId,n=(0,b.Z)(t&&["stable-farms",t],(0,i.Z)(function(){var n;return(0,y.__generator)(this,function(n){switch(n.label){case 0:return[4,(0,_.getStableConfig)(t)];case 1:return[2,n.sent().map(function(n){var e=n.token,i=n.quoteToken,s=n.lpAddress,y=(0,p.Z)(n,["token","quoteToken","lpAddress"]);return(0,u.Z)((0,a.Z)({},y),{liquidityToken:new m.WU(t,s,18,"Stable-LP","Pancake StableSwap LPs"),token0:(0,v.iG)(e),token1:(0,v.iG)(i)})})]}})})).data;return void 0===n?[]:n}function M(t){var n=w(),e=(0,s.Z)((0,c.v2)(null!=t?t:void 0,n.map(function(t){return t.liquidityToken})),1)[0];return(0,f.useMemo)(function(){return n.filter(function(t){var n;return null===(n=e[t.liquidityToken.address])||void 0===n?void 0:n.greaterThan("0")})},[n,e]).map(function(t){return(0,u.Z)((0,a.Z)({},t),{tokenAmounts:[],reserve0:m.ih.fromRawAmount(null==t?void 0:t.token0,"0"),reserve1:m.ih.fromRawAmount(null==t?void 0:t.token1,"0"),getLiquidityValue:function(){return m.ih.fromRawAmount(null==t?void 0:t.token0,"0")}})})}var A=(0,f.createContext)(null);function k(t){var n,e,i,a,u,p=(e=(n={tokenA:t.tokenA,tokenB:t.tokenB}).tokenA,i=n.tokenB,a=w(),(0,f.useMemo)(function(){return a.find(function(t){var n,a,u,p;return e&&i&&((null==t?void 0:null===(n=t.token0)||void 0===n?void 0:n.equals(e))&&(null==t?void 0:null===(a=t.token1)||void 0===a?void 0:a.equals(i))||(null==t?void 0:null===(u=t.token1)||void 0===u?void 0:u.equals(e))&&(null==t?void 0:null===(p=t.token0)||void 0===p?void 0:p.equals(i)))})},[e,i,a])),s=(0,r.cq)(null==p?void 0:p.stableSwapAddress,o),y=(0,r.cq)(null==p?void 0:p.infoStableSwapAddress,l),m=(0,r.cq)(null==p?void 0:p.liquidityToken.address,d);return(0,f.useMemo)(function(){return{stableSwapConfig:p,stableSwapContract:s,stableSwapInfoContract:y,stableSwapLPContract:m}},[p,s,y,m])}},14103:function(t,n,e){e.d(n,{GS:function(){return m},ZP:function(){return c},y0:function(){return d}});var i=e(47568),a=e(36305),u=e(70655),p=e(46472),s=e(67294),y=e(8100),r=e(12353),o=function(t,n){var e=new p.iA(p.ry).add(n).multiply(t.quotient).quotient;return p.ih.fromRawAmount(t.currency,e)},l=function(t,n){var e=new p.iA(p.ry).add(n).invert().multiply(t.quotient).quotient;return p.ih.fromRawAmount(t.currency,e)};function d(t){var n=t.currencyAmountIn,e=t.currencyAmountOut,i=t.stableSwapConfig,a=t.tradeType,u=(0,s.useCallback)(function(t){return a===p.YL.EXACT_INPUT?n:n?o(n,t):p.ih.fromRawAmount(n.currency,"0")},[n,a]),y=(0,s.useCallback)(function(t){return a===p.YL.EXACT_OUTPUT?e:e?l(e,t):p.ih.fromRawAmount(e.currency,"0")},[e,a]),r=!n||!e||!i||!n,d=(0,s.useMemo)(function(){return r?null:new p.tA(n.currency,e.currency,n.quotient,e.quotient)},[r,n,e]);return r?null:{tradeType:p.YL.EXACT_INPUT,inputAmount:n,outputAmount:e,executionPrice:d,priceImpact:null,maximumAmountIn:u,minimumAmountOut:y}}function m(t){var n=t.estimatedCurrency,e=t.stableSwapConfig,s=t.quotient,r=t.stableSwapContract;return(0,y.ZP)((null==e?void 0:e.stableSwapAddress)&&n&&s?["swapContract",null==e?void 0:e.stableSwapAddress,s]:null,(0,i.Z)(function(){var t,i,y,o,l;return(0,u.__generator)(this,function(u){switch(u.label){case 0:return o=(null==e?void 0:null===(i=e.token0)||void 0===i?void 0:i.address)===(null==n?void 0:n.address)?[1,0,s]:[0,1,s],[4,(t=r).get_dy.apply(t,(0,a.Z)(o))];case 1:return l=u.sent(),[2,p.ih.fromRawAmount(n,l)]}})}))}function c(t,n){var e,i=(0,s.useContext)(r.UA),a=i.stableSwapContract,u=i.stableSwapConfig,y=null==t?void 0:null===(e=t.quotient)||void 0===e?void 0:e.toString();return d({currencyAmountIn:t,currencyAmountOut:m({estimatedCurrency:n,quotient:y,stableSwapContract:a,stableSwapConfig:u}).data,stableSwapConfig:u,tradeType:p.YL.EXACT_INPUT})}}}]);