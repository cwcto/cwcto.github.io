(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01888e63"],{"024c":function(e,t,o){e.exports=o.p+"img/MATIC.1087d3d6.svg"},"056f":function(e,t,o){e.exports=o.p+"img/USDV.43f688a0.svg"},"0dbd":function(e,t,o){"use strict";o("fba0")},"10b4":function(e,t,o){},"17e0":function(e,t,o){e.exports=o.p+"img/ETH.7c199546.svg"},"188e":function(e,t,o){"use strict";var i=o("7a23");const l={class:"wallet-options"},a={style:{color:"#EAEAEA"}},c={class:"trigger-button"},s=["src"],n={key:0,class:"window light dropdown-block"},r=["onClick"];function d(e,t,d,m,p,b){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",l,[Object(i["createElementVNode"])("div",{class:"window light trigger-block",onClick:t[0]||(t[0]=(...t)=>e.triggerDropdown&&e.triggerDropdown(...t))},[Object(i["createElementVNode"])("label",a,Object(i["toDisplayString"])(e.selectedIndex||0==e.selectedIndex?e.$store.getters.networkByTicker(e.options[e.selectedIndex]).networkName:e.$localizeFilter("specify_network")),1),Object(i["createElementVNode"])("button",c,[Object(i["createElementVNode"])("img",{style:{width:"10px",height:"6px"},src:o("3c15")},null,8,s)])]),e.isOpen?(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",n,[Object(i["createElementVNode"])("ul",null,[(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(e.options,(t,o)=>(Object(i["openBlock"])(),Object(i["createElementBlock"])("li",{key:o,class:Object(i["normalizeClass"])(e.selectedIndex==o?"selected":""),onClick:i=>e.selectOption(t,o)},Object(i["toDisplayString"])(e.$store.getters.networkByTicker(t).networkName),11,r))),128))])])):Object(i["createCommentVNode"])("",!0)])}var m=o("ed09"),p=Object(m["a"])({props:["options"],data:()=>({isOpen:!1,selectedIndex:null}),setup(){},methods:{triggerDropdown(){this.isOpen=!this.isOpen},selectOption(e,t){this.selectedIndex=t,this.$emit("selectOption",e),this.isOpen=!1}}}),b=(o("3475"),o("d959")),u=o.n(b);const h=u()(p,[["render",d],["__scopeId","data-v-778375ea"]]);t["a"]=h},"1aa6":function(e,t,o){e.exports=o.p+"img/ETC.9d4534ae.svg"},"1dda":function(e,t,o){"use strict";o("645e")},3475:function(e,t,o){"use strict";o("f8c3")},3770:function(e,t,o){e.exports=o.p+"img/DAI.1a84a86b.svg"},"50c7":function(e,t,o){e.exports=o.p+"img/USDT.43f688a0.svg"},5520:function(e,t,o){e.exports=o.p+"img/USDC.3b5972c1.svg"},"556f":function(e,t,o){e.exports=o.p+"img/DASH.94b9ae90.svg"},5738:function(e,t,o){e.exports=o.p+"img/XMR.22ac5949.svg"},"5db3":function(e,t,o){},"644b":function(e,t,o){e.exports=o.p+"img/SOL.4e6fecb2.svg"},"645e":function(e,t,o){},"64cc":function(e,t,o){e.exports=o.p+"img/LTC.6046cca1.svg"},"6b60":function(e,t,o){"use strict";o("f9a9")},7100:function(e,t,o){},"74c1":function(e,t,o){"use strict";o.r(t);var i=o("7a23");const l={class:"title"},a={class:"subtitle"},c={class:"pool-amount first-block"},s={key:0,class:"pool-amount with-buttons"},n={class:"buttons-flex"},r={class:"buttons-flex-row"},d={class:"wrapper",style:{"margin-right":"29px"}},m={class:"wrapper"},p={class:"buttons-flex-row"},b={class:"basic-button inactive button-first"},u={class:"basic-button inactive button-second"},h={class:"pool-amount first-block"},O={class:"pool-amount first-block"},w={class:"pools-container"};function j(e,t,o,j,v,g){const f=Object(i["resolveComponent"])("LargeToggle"),k=Object(i["resolveComponent"])("AmountView"),y=Object(i["resolveComponent"])("LiquidityProviderDepositOptions"),E=Object(i["resolveComponent"])("LiquidityProviderWithdrawOptions"),D=Object(i["resolveComponent"])("LiquidityProviderPool"),N=Object(i["resolveComponent"])("LiquidityBalanceDepositModal"),V=Object(i["resolveComponent"])("LiquidityBalanceWithdrawModal"),C=Object(i["resolveComponent"])("LiquidityDepositModal"),$=Object(i["resolveComponent"])("LiquidityWithdrawModal"),_=Object(i["resolveComponent"])("LiquidityBalanceDepositFromExternalWallet"),M=Object(i["resolveComponent"])("Modal"),B=Object(i["resolveComponent"])("BonusWithdrawalConfirmationModal");return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{class:"liquidity",onClick:t[4]||(t[4]=(...t)=>e.hideDropdowns&&e.hideDropdowns(...t))},[Object(i["createElementVNode"])("div",l,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_title")),1),Object(i["createElementVNode"])("div",a,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_subtitle")),1),Object(i["createVNode"])(f,{title:null,variants:e.poolTypes,onToggle:e.toggle,class:"toggle"},null,8,["variants","onToggle"]),Object(i["createElementVNode"])("div",c,[Object(i["createVNode"])(k,{class:"pool-amount-first",title:e.$localizeFilter("amount_income"),amount:e.totalIncome,type:"income",color:"type-green",classOverride:"withdraw-available",availableProfitToWithdraw:e.availableProfitToWithdraw,onReloadData:e.reloadData},null,8,["title","amount","availableProfitToWithdraw","onReloadData"]),"my_pools"===e.selectedPoolType?(Object(i["openBlock"])(),Object(i["createBlock"])(k,{key:0,title:e.$localizeFilter("amount_test"),amount:e.testBalance,color:"type-gray"},null,8,["title","amount"])):Object(i["createCommentVNode"])("",!0)]),"my_pools"===e.selectedPoolType?(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",s,[Object(i["createVNode"])(k,{class:"pool-amount-first",title:e.$localizeFilter("pools_amount_deposited"),amount:e.totalDepositedInPools,color:"type-gold"},null,8,["title","amount"]),Object(i["createElementVNode"])("div",n,[Object(i["createElementVNode"])("div",r,[Object(i["createElementVNode"])("div",d,[Object(i["createElementVNode"])("button",{class:"basic-button button-first",onClick:t[0]||(t[0]=Object(i["withModifiers"])((...t)=>e.showDepositOptions&&e.showDepositOptions(...t),["stop"]))},Object(i["toDisplayString"])(e.$localizeFilter("liquidity_deposit_button")),1),e.showDepositDropdown?(Object(i["openBlock"])(),Object(i["createBlock"])(y,{key:0,class:"deposit-options",onSelectOption:e.selectDepositOption,onClose:t[1]||(t[1]=t=>e.showDepositDropdown=!1)},null,8,["onSelectOption"])):Object(i["createCommentVNode"])("",!0)]),Object(i["createElementVNode"])("div",m,[Object(i["createElementVNode"])("button",{class:"basic-button button-second",onClick:t[2]||(t[2]=Object(i["withModifiers"])((...t)=>e.showWithdrawOptions&&e.showWithdrawOptions(...t),["stop"]))},Object(i["toDisplayString"])(e.$localizeFilter("liquidity_withdraw_button")),1),e.showWithdrawDropdown?(Object(i["openBlock"])(),Object(i["createBlock"])(E,{key:0,class:"withdraw-options",onSelectOption:e.selectWithdrawOption,onClose:t[3]||(t[3]=t=>e.showWithdrawDropdown=!1)},null,8,["onSelectOption"])):Object(i["createCommentVNode"])("",!0)])]),Object(i["createElementVNode"])("div",p,[Object(i["createElementVNode"])("button",b,Object(i["toDisplayString"])(e.$localizeFilter("credit")),1),Object(i["createElementVNode"])("button",u,Object(i["toDisplayString"])(e.$localizeFilter("reinvest")),1)])])])):Object(i["createCommentVNode"])("",!0),Object(i["createElementVNode"])("div",h,[Object(i["createVNode"])(k,{class:"pool-amount-first",title:e.$localizeFilter("amount_referral_income"),amount:e.totalReferralIncome,type:"income",color:"type-green"},null,8,["title","amount"])]),Object(i["createElementVNode"])("div",O,[Object(i["createVNode"])(k,{class:"pool-amount-first",title:e.$localizeFilter("amount_credit_deposit_income"),amount:e.totalCreditDepositIncome,type:"income",color:"type-green"},null,8,["title","amount"]),"my_pools"===e.selectedPoolType?(Object(i["openBlock"])(),Object(i["createBlock"])(k,{key:0,class:"pool-amount-first",title:e.$localizeFilter("credit_deposit_amount_deposited"),amount:e.creditDepositBalance,color:"type-gold"},null,8,["title","amount"])):Object(i["createCommentVNode"])("",!0)]),Object(i["createElementVNode"])("div",w,[(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(e.pools,(t,o)=>(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{key:o},[Object(i["createVNode"])(D,{pool:t,onDeposit:e.deposit,onWithdraw:e.withdraw},null,8,["pool","onDeposit","onWithdraw"])]))),128))]),e.showBalanceDepositModal?(Object(i["openBlock"])(),Object(i["createBlock"])(N,{key:1,source:e.depositSource,onCloseModal:e.closeModals},null,8,["source","onCloseModal"])):Object(i["createCommentVNode"])("",!0),e.showBalanceWithdrawModal?(Object(i["openBlock"])(),Object(i["createBlock"])(V,{key:2,withdrawToWallet:e.withdrawToWallet,onCloseModal:e.closeModals},null,8,["withdrawToWallet","onCloseModal"])):Object(i["createCommentVNode"])("",!0),e.showDepositModal?(Object(i["openBlock"])(),Object(i["createBlock"])(C,{key:3,pool:e.currentPool,testBalance:e.testBalance,onCloseModal:e.closeModals},null,8,["pool","testBalance","onCloseModal"])):Object(i["createCommentVNode"])("",!0),e.showWithdrawModal?(Object(i["openBlock"])(),Object(i["createBlock"])($,{key:4,pool:e.currentPool,onCloseModal:e.closeModals},null,8,["pool","onCloseModal"])):Object(i["createCommentVNode"])("",!0),e.showDepositFromExternalWalletModal?(Object(i["openBlock"])(),Object(i["createBlock"])(_,{key:5,onCloseModal:e.closeModals},null,8,["onCloseModal"])):Object(i["createCommentVNode"])("",!0),e.showWithdrawToExternalWalletModal?(Object(i["openBlock"])(),Object(i["createBlock"])(M,{key:6,type:"liquidityBalanceWithdraw",fromProviding:!0,onCloseModal:e.closeModals,onShowWithdrawalConfirmation:e.showWithdrawalConfirmation},null,8,["onCloseModal","onShowWithdrawalConfirmation"])):Object(i["createCommentVNode"])("",!0),e.showWithdrawalConfirmationModal?(Object(i["openBlock"])(),Object(i["createBlock"])(B,{key:7,onCloseModal:e.closeConfirmationModal,withdrawId:e.withdrawId,commission:e.commission,coinTicker:"USDT"},null,8,["onCloseModal","withdrawId","commission"])):Object(i["createCommentVNode"])("",!0)])}var v=o("ed09"),g=o("e977"),f=o("ac95");const k={class:"liquidity-provider-pool-cell cell-1"},y={class:"images-block"},E=["src"],D=["src"],N={class:"text-block"},V={class:"title"},C={class:"text bold"},$={class:"liquidity-provider-pool-cell cell-2"},_={class:"text-block"},M={class:"title"},B={class:"text"},T={class:"liquidity-provider-pool-cell cell-3"},S={class:"text-block"},x={class:"title"},W={class:"text"},F={class:"liquidity-provider-pool-cell cell-4"},q={class:"text-block"},I={class:"title"},z={class:"text"},P={class:"liquidity-provider-pool-cell cell-5"},A={class:"text-block"},L={class:"title"},U={class:"text"},R={class:"liquidity-provider-pool-cell cell-6"},H={class:"buttons-block"};function X(e,t,l,a,c,s){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{class:Object(i["normalizeClass"])("liquidity-provider-pool "+e.getColor(e.pool.risk))},[Object(i["createElementVNode"])("div",k,[Object(i["createElementVNode"])("div",y,[Object(i["createElementVNode"])("img",{class:"image image-1",src:o("dfce")(`./${e.pool.leftCoinTicker}.svg`)},null,8,E),Object(i["createElementVNode"])("img",{class:"image image-2",src:o("dfce")(`./${e.pool.rightCoinTicker}.svg`)},null,8,D)]),Object(i["createElementVNode"])("div",N,[Object(i["createElementVNode"])("div",V,Object(i["toDisplayString"])(e.$localizeFilter("coins_pair")),1),Object(i["createElementVNode"])("div",C,Object(i["toDisplayString"])(`${e.pool.leftCoinTicker} / ${e.pool.rightCoinTicker}`),1)])]),Object(i["createElementVNode"])("div",$,[Object(i["createElementVNode"])("div",_,[Object(i["createElementVNode"])("div",M,Object(i["toDisplayString"])(e.$localizeFilter("interest")),1),Object(i["createElementVNode"])("div",B,Object(i["toDisplayString"])(e.pool.interest+" %"),1)])]),Object(i["createElementVNode"])("div",T,[Object(i["createElementVNode"])("div",S,[Object(i["createElementVNode"])("div",x,Object(i["toDisplayString"])(e.$localizeFilter("risk")),1),Object(i["createElementVNode"])("div",W,Object(i["toDisplayString"])(e.pool.risk+"%"),1)])]),Object(i["createElementVNode"])("div",F,[Object(i["createElementVNode"])("div",q,[Object(i["createElementVNode"])("div",I,Object(i["toDisplayString"])(e.$localizeFilter("capacity")),1),Object(i["createElementVNode"])("div",z,Object(i["toDisplayString"])(e.pool.capacity+"%"),1)])]),Object(i["createElementVNode"])("div",P,[Object(i["createElementVNode"])("div",A,[Object(i["createElementVNode"])("div",L,Object(i["toDisplayString"])(e.$localizeFilter("deposited")),1),Object(i["createElementVNode"])("div",U,Object(i["toDisplayString"])(`${e.pool.depositedLeftCoin} ${e.pool.leftCoinTicker} / ${e.pool.depositedRightCoin} ${e.pool.rightCoinTicker}`),1)])]),Object(i["createElementVNode"])("div",R,[Object(i["createElementVNode"])("div",H,[Object(i["createElementVNode"])("div",{class:"basic-button",onClick:t[0]||(t[0]=(...t)=>e.deposit&&e.deposit(...t))},Object(i["toDisplayString"])(e.$localizeFilter("liquidity_deposit")),1),Object(i["createElementVNode"])("div",{class:"underline-button",onClick:t[1]||(t[1]=(...t)=>e.withdraw&&e.withdraw(...t))},Object(i["toDisplayString"])(e.$localizeFilter("liquidity_withdraw")),1)])])],2)}var G=Object(v["a"])({props:{pool:{type:Object,required:!0}},watch:{},data:()=>({}),methods:{deposit(){this.$emit("deposit",this.pool)},withdraw(){this.$emit("withdraw",this.pool)},getColor(e){return e<2?"risk-green":e<3.5?"risk-yellow":e<5?"risk-orange":"risk-red"}}}),J=(o("de40"),o("d959")),K=o.n(J);const Q=K()(G,[["render",X],["__scopeId","data-v-5011ac6c"]]);var Y=Q,Z=o("db1b");const ee=e=>(Object(i["pushScopeId"])("data-v-9521b63c"),e=e(),Object(i["popScopeId"])(),e),te={class:"modal-layout"},oe={class:"new-modal-back-button-container"},ie={class:"modal-content"},le={class:"window-title"},ae={class:"window-text"},ce={class:"input-field"},se=["placeholder"],ne={class:"modal-warning"},re=ee(()=>Object(i["createElementVNode"])("i",{class:"material-icons",style:{color:"#FF9400!important"}},"report",-1)),de={class:"window-text warning"};function me(e,t,o,l,a,c){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",te,[Object(i["createElementVNode"])("div",{class:"darken",onClick:t[4]||(t[4]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(i["createElementVNode"])("div",{class:"new-modal liquidity-deposit-modal",onClick:t[3]||(t[3]=Object(i["withModifiers"])(()=>{},["stop"]))},[Object(i["createElementVNode"])("div",oe,[Object(i["createElementVNode"])("button",{class:"new-modal-back-button",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(i["createElementVNode"])("div",ie,[Object(i["createElementVNode"])("p",le,Object(i["toDisplayString"])(e.$localizeFilter("depositing_funds_into_pool")+`\n${e.pool.leftCoinTicker}/${e.pool.rightCoinTicker}`),1),Object(i["createElementVNode"])("p",ae,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_deposit_modal_text_amount",["USDT"])),1),Object(i["createElementVNode"])("div",ce,[Object(i["withDirectives"])(Object(i["createElementVNode"])("input",{id:"amount",class:Object(i["normalizeClass"])(["custom-input",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("amount_in",["USDT"]),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t)},null,10,se),[[i["vModelText"],e.amount,void 0,{trim:!0}]]),(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(e.v$.amount.$errors,(e,t)=>(Object(i["openBlock"])(),Object(i["createElementBlock"])("small",{class:"error",key:t},Object(i["toDisplayString"])(e.$message),1))),128))]),Object(i["createElementVNode"])("div",ne,[re,Object(i["createElementVNode"])("p",de,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_deposit_modal_warning",[e.pool.leftCoinTicker,e.pool.rightCoinTicker])),1)]),Object(i["createElementVNode"])("button",{class:"basic-button",onClick:t[2]||(t[2]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(i["toDisplayString"])(e.$localizeFilter("deposit_funds")),1)])])])])}var pe=o("25a0"),be=o("e3e1");var ue=Object(v["a"])({props:{pool:{type:Object,required:!0},testBalance:{type:Number,required:!0}},validations(){return{amount:{required:be["b"].withMessage(Object(g["a"])("field_must_not_be_empty"),be["h"]),numeric:be["b"].withMessage(Object(g["a"])("field_must_be_numeric"),be["h"]),minValue:be["b"].withMessage(Object(g["a"])("min_value",[this.minAmount]),Object(be["f"])(this.minAmount)),maxValue:be["b"].withMessage(Object(g["a"])("not_enough_funds_on_balance",["USDT"]),Object(be["d"])(this.maxAmount))}}},setup(){return{v$:Object(pe["a"])()}},data:()=>({amount:"",minAmount:0}),methods:{closeModal(e){this.$emit("closeModal",e)},async submitHandler(){if(this.v$.$touch(),!this.v$.$error)try{const e={poolId:this.pool.poolId,amount:this.amount};await this.$store.dispatch("depositFundsToLiquidityPool",e),this.$message(Object(g["a"])("depositing_funds_into_pool_successful")),this.$emit("closeModal")}catch(e){this.$error(e)}}},computed:{assetDecimalsMap(){return this.$store.getters.assetDecimalsMap},maxAmount(){return this.testBalance/1e6}}});o("e045");const he=K()(ue,[["render",me],["__scopeId","data-v-9521b63c"]]);var Oe=he;const we=e=>(Object(i["pushScopeId"])("data-v-825b415a"),e=e(),Object(i["popScopeId"])(),e),je={class:"modal-layout"},ve={class:"new-modal-back-button-container"},ge={class:"modal-content"},fe={class:"window-title"},ke={class:"window-subtitle"},ye={class:"modal-warning"},Ee=we(()=>Object(i["createElementVNode"])("i",{class:"material-icons",style:{color:"#FF9400!important"}},"report",-1)),De={class:"window-text warning"},Ne={class:"checkbox-labels-block"},Ve={for:"checkbox",class:"conditions-label"},Ce={class:"buttons-block"};function $e(e,t,o,l,a,c){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",je,[Object(i["createElementVNode"])("div",{class:"darken",onClick:t[7]||(t[7]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(i["createElementVNode"])("div",{class:"new-modal liquidity-withdraw-modal",onClick:t[6]||(t[6]=Object(i["withModifiers"])(()=>{},["stop"]))},[Object(i["createElementVNode"])("div",ve,[Object(i["createElementVNode"])("button",{class:"new-modal-back-button",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(i["createElementVNode"])("div",ge,[Object(i["createElementVNode"])("p",fe,Object(i["toDisplayString"])(e.$localizeFilter("withdrawing_funds_from_pool")+`\n${e.pool.leftCoinTicker}/${e.pool.rightCoinTicker}`),1),Object(i["createElementVNode"])("p",ke,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_withdraw_subtitle",[e.pool.depositedLeftCoin,e.pool.leftCoinTicker,e.pool.depositedRightCoin,e.pool.rightCoinTicker])),1),Object(i["createElementVNode"])("div",ye,[Ee,Object(i["createElementVNode"])("p",De,Object(i["toDisplayString"])(e.$localizeFilter("withdraw_warning")),1)]),Object(i["createElementVNode"])("div",{class:"conditions-block",onClick:t[3]||(t[3]=(...t)=>e.acceptСonditions&&e.acceptСonditions(...t))},[Object(i["withDirectives"])(Object(i["createElementVNode"])("input",{type:"checkbox",id:"checkbox",class:"checkbox","onUpdate:modelValue":t[1]||(t[1]=t=>e.conditionsAccepted=t),onClick:t[2]||(t[2]=(...t)=>e.acceptСonditions&&e.acceptСonditions(...t))},null,512),[[i["vModelCheckbox"],e.conditionsAccepted]]),Object(i["createElementVNode"])("div",Ne,[Object(i["createElementVNode"])("label",Ve,Object(i["toDisplayString"])(e.$localizeFilter("withdraw_agreement")),1)])]),Object(i["createElementVNode"])("div",Ce,[Object(i["createElementVNode"])("button",{class:"transparent-button",onClick:t[4]||(t[4]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(i["toDisplayString"])(e.$localizeFilter("confirm")),1),Object(i["createElementVNode"])("button",{class:"basic-button red-button",onClick:t[5]||(t[5]=(...t)=>e.cancel&&e.cancel(...t))},Object(i["toDisplayString"])(e.$localizeFilter("cancel")),1)])])])])])}var _e=Object(v["a"])({props:{pool:{type:Object,required:!0}},data:()=>({conditionsAccepted:!1}),methods:{"acceptСonditions"(){this.conditionsAccepted=!this.conditionsAccepted},closeModal(e){this.$emit("closeModal",e)},cancel(){this.closeModal()},async submitHandler(){if(this.conditionsAccepted)try{const e={poolId:this.pool.poolId};await this.$store.dispatch("withdrawFundsFromLiquidityPool",e),this.$message(Object(g["a"])("withdraw_funds_from_pool_application_created_successful")),this.$emit("closeModal")}catch(e){this.$error(e)}}},computed:{assetDecimalsMap(){return this.$store.getters.assetDecimalsMap}}});o("db90");const Me=K()(_e,[["render",$e],["__scopeId","data-v-825b415a"]]);var Be=Me;const Te={class:"modal-layout"},Se={class:"new-modal-back-button-container"},xe={class:"modal-content"},We={class:"window-title"},Fe={class:"window-text"},qe={class:"input-field"},Ie=["placeholder"];function ze(e,t,o,l,a,c){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",Te,[Object(i["createElementVNode"])("div",{class:"darken",onClick:t[4]||(t[4]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(i["createElementVNode"])("div",{class:"new-modal liquidity-deposit-modal",onClick:t[3]||(t[3]=Object(i["withModifiers"])(()=>{},["stop"]))},[Object(i["createElementVNode"])("div",Se,[Object(i["createElementVNode"])("button",{class:"new-modal-back-button",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(i["createElementVNode"])("div",xe,[Object(i["createElementVNode"])("p",We,Object(i["toDisplayString"])(e.titleOverride||e.$localizeFilter("depositing_funds_into_liquidity_balance")),1),Object(i["createElementVNode"])("p",Fe,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_deposit_balance_modal_text_amount",["USDT"])),1),Object(i["createElementVNode"])("div",qe,[Object(i["withDirectives"])(Object(i["createElementVNode"])("input",{id:"amount",class:Object(i["normalizeClass"])(["custom-input",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("amount_in",["USDT"]),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t)},null,10,Ie),[[i["vModelText"],e.amount,void 0,{trim:!0}]]),(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(e.v$.amount.$errors,(e,t)=>(Object(i["openBlock"])(),Object(i["createElementBlock"])("small",{class:"error",key:t},Object(i["toDisplayString"])(e.$message),1))),128))]),Object(i["createElementVNode"])("button",{class:"basic-button",onClick:t[2]||(t[2]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(i["toDisplayString"])(e.$localizeFilter("deposit_funds")),1)])])])])}var Pe=Object(v["a"])({props:{source:{type:String,required:!0},titleOverride:{type:String,default:null}},validations(){return{amount:{required:be["b"].withMessage(Object(g["a"])("field_must_not_be_empty"),be["h"]),numeric:be["b"].withMessage(Object(g["a"])("field_must_be_numeric"),be["h"]),minValue:be["b"].withMessage(Object(g["a"])("min_value",[this.minAmount]),Object(be["f"])(this.minAmount))}}},setup(){return{v$:Object(pe["a"])()}},data:()=>({amount:"",minAmount:0}),methods:{closeModal(e){this.$emit("closeModal",e)},async submitHandler(){if(this.v$.$touch(),!this.v$.$error)try{const e={amount:this.amount,source:this.source};await this.$store.dispatch("depositLiquidityProvidingBalance",e),this.$message(Object(g["a"])("depositing_funds_to_balance_successful")),this.$emit("closeModal")}catch(e){this.$error(e)}}},computed:{}});o("6b60");const Ae=K()(Pe,[["render",ze],["__scopeId","data-v-2e63515c"]]);var Le=Ae,Ue=o("11a6"),Re=o("75b6"),He=o("5166");const Xe=e=>(Object(i["pushScopeId"])("data-v-a4faa55e"),e=e(),Object(i["popScopeId"])(),e),Ge={class:"modal-layout"},Je={class:"new-modal-back-button-container"},Ke={class:"modal-content"},Qe={class:"title"},Ye={class:"fill-wallet"},Ze={class:"input-field disabled"},et=Xe(()=>Object(i["createElementVNode"])("i",{class:"material-icons"},"content_copy",-1)),tt=[et],ot={class:"network"},it={class:"flex-row"},lt={class:"network-name"};function at(e,t,o,l,a,c){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",Ge,[Object(i["createElementVNode"])("div",{class:"darken",onClick:t[4]||(t[4]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(i["createElementVNode"])("div",{class:"new-modal choose-network-modal",onClick:t[3]||(t[3]=Object(i["withModifiers"])(()=>{},["stop"]))},[Object(i["createElementVNode"])("div",Je,[Object(i["createElementVNode"])("button",{class:"new-modal-back-button",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(i["createElementVNode"])("div",Ke,[Object(i["createElementVNode"])("div",Qe,Object(i["toDisplayString"])(e.$localizeFilter("fill_up_a_wallet"))+" "+Object(i["toDisplayString"])(e.coin.coinTicker),1),Object(i["createElementVNode"])("div",Ye,Object(i["toDisplayString"])(e.$localizeFilter("wallet_address")),1),Object(i["createElementVNode"])("div",Ze,[Object(i["withDirectives"])(Object(i["createElementVNode"])("input",{id:"wallet",class:"custom-input",type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.fillWalletAddress=t)},null,512),[[i["vModelText"],e.fillWalletAddress,void 0,{trim:!0}]]),Object(i["createElementVNode"])("button",{class:"custom-input-button copy-button",onClick:t[2]||(t[2]=t=>e.copy(e.fillWalletAddress))},tt)]),Object(i["createElementVNode"])("div",ot,Object(i["toDisplayString"])(e.$localizeFilter("network")),1),Object(i["createElementVNode"])("div",it,[Object(i["createElementVNode"])("div",lt,Object(i["toDisplayString"])(e.fullNetwork),1)])])])])])}var ct=Object(v["a"])({props:{},setup(){},data:()=>({network:"TRON",fullNetwork:"Tron(TRC20)",coin:{coinTicker:"USDT"},fillWalletAddress:""}),computed:{},methods:{closeModal(e){this.$emit("closeModal",e)},copy(e){function t(e){var t,o=document.createElement("textarea");o.value=e,o.style.top="0",o.style.left="0",o.style.position="fixed",document.body.appendChild(o),o.focus(),o.select();try{t=document.execCommand("copy")}catch(i){console.error("Fallback: Oops, unable to copy",i)}return document.body.removeChild(o),t}if(e){const i=window.clipboardData||navigator.clipboard;try{i.writeText(e),this.$message(Object(g["a"])("copied"))}catch(o){t(e)&&this.$message(Object(g["a"])("copied"))}}}},async mounted(){try{const e={coinTicker:this.coinTicker,network:this.network},{walletAddress:t}=await this.$store.dispatch("getLiquidityProviderDepositWalletAdddress",e);this.fillWalletAddress=t}catch(e){this.$error(e)}}});o("0dbd");const st=K()(ct,[["render",at],["__scopeId","data-v-a4faa55e"]]);var nt=st,rt=o("d989"),dt=o("2930");let mt=new Set([2,49018,1529,22934]);var pt=Object(v["a"])({components:{LargeToggle:f["a"],LiquidityProviderPool:Y,AmountView:Z["a"],LiquidityDepositModal:Oe,LiquidityWithdrawModal:Be,LiquidityBalanceDepositModal:Le,LiquidityBalanceWithdrawModal:Ue["a"],LiquidityProviderDepositOptions:Re["a"],LiquidityProviderWithdrawOptions:He["a"],LiquidityBalanceDepositFromExternalWallet:nt,Modal:dt["a"],BonusWithdrawalConfirmationModal:rt["a"]},setup(){},data:()=>({poolTypes:["all_pools","my_pools"],selectedPoolType:"all_pools",showDepositModal:!1,showWithdrawModal:!1,showBalanceDepositModal:!1,showBalanceWithdrawModal:!1,currentPool:null,interval:null,showDepositDropdown:!1,depositSource:null,showDepositFromExternalWalletModal:!1,showWithdrawDropdown:!1,withdrawToWallet:!1,showWithdrawToExternalWalletModal:!1,showWithdrawalConfirmationModal:!1}),computed:{liquidityProvidingData(){return this.$store.getters.liquidityProvidingData},totalIncome(){var e;return(null===(e=this.liquidityProvidingData)||void 0===e?void 0:e.totalIncome)||0},totalReferralIncome(){var e;return(null===(e=this.liquidityProvidingData)||void 0===e?void 0:e.referralIncome)||0},testBalance(){var e;return(null===(e=this.liquidityProvidingData)||void 0===e?void 0:e.testBalance)||0},totalCreditDepositIncome(){var e;return(null===(e=this.liquidityProvidingData)||void 0===e?void 0:e.creditDepositIncome)||0},creditDepositBalance(){var e;return(null===(e=this.liquidityProvidingData)||void 0===e?void 0:e.creditDepositBalance)||0},totalDepositedInPools(){var e;return(null===(e=this.liquidityProvidingData)||void 0===e?void 0:e.totalDepositedInPools)||0},pools(){var e,t;return"all_pools"===this.selectedPoolType?(null===(e=this.liquidityProvidingData)||void 0===e?void 0:e.allPools)||[]:"my_pools"===this.selectedPoolType&&(null===(t=this.liquidityProvidingData)||void 0===t?void 0:t.myPools)||[]},allowed(){return mt.has(+localStorage.exchangeClientId)},availableProfitToWithdraw(){var e;return((null===(e=this.liquidityProvidingData)||void 0===e?void 0:e.availableProfitToWithdraw)||0)/1e6}},methods:{showDepositOptions(){this.showDepositDropdown=!0,this.showWithdrawDropdown=!1},showWithdrawOptions(){this.showDepositDropdown=!1,this.showWithdrawDropdown=!0},hideDropdowns(){this.showDepositDropdown=!1,this.showWithdrawDropdown=!1},selectDepositOption(e){"from-wallet"===e?(this.depositSource="wallet",this.showBalanceDepositModal=!0):"from-bonus-account"===e?(this.depositSource="bonusAccount",this.showBalanceDepositModal=!0):"from-external-wallet"===e&&(this.depositSource="externalWallet",this.showDepositFromExternalWalletModal=!0)},selectWithdrawOption(e){"to-wallet"===e?(this.withdrawToWallet=!0,this.showBalanceWithdrawModal=!0):"to-bonus-account"===e?(this.withdrawToWallet=!1,this.showBalanceWithdrawModal=!0):"to-external-wallet"===e&&(this.withdrawToWallet=!1,this.showWithdrawToExternalWalletModal=!0)},deposit(e){this.currentPool=e,this.showDepositModal=!0},withdraw(e){this.currentPool=e,this.showWithdrawModal=!0},closeModals(){this.showDepositModal=!1,this.showWithdrawModal=!1,this.showBalanceDepositModal=!1,this.showBalanceWithdrawModal=!1,this.currentPool=null,this.depositSource=null,this.withdrawToWallet=!1,this.showDepositFromExternalWalletModal=!1,this.showWithdrawToExternalWalletModal=!1,this.loadData()},showWithdrawalConfirmation(e,t){this.closeModal(),this.withdrawId=e,this.commission=t||0,setTimeout(()=>{this.showWithdrawalConfirmationModal=!0})},closeModal(){this.showWithdrawToExternalWalletModal=!1},closeConfirmationModal(){this.showWithdrawalConfirmationModal=!1,this.closeModal()},toggle(e){this.selectedPoolType=this.poolTypes[e]},async reloadData(){await this.loadData(!0)},async loadData(e){try{await this.$store.dispatch("getLiquidityProvidingData")}catch(t){e||this.$error(t)}}},async mounted(){await this.loadData(),this.interval=setInterval(async()=>{await this.loadData()},3e3)},unmounted(){clearInterval(this.interval),this.interval=null}});o("a477");const bt=K()(pt,[["render",j],["__scopeId","data-v-02d1622a"]]);t["default"]=bt},7665:function(e,t,o){},"801e":function(e,t,o){e.exports=o.p+"img/DOGE.bfe942ea.svg"},9077:function(e,t,o){e.exports=o.p+"img/BTC.f92890de.svg"},"9fb2":function(e,t,o){e.exports=o.p+"img/BTCV.f92890de.svg"},a477:function(e,t,o){"use strict";o("5db3")},a637:function(e,t,o){e.exports=o.p+"img/TRX.4f3f3903.svg"},a645:function(e,t,o){e.exports=o.p+"img/XRP.639b151a.svg"},a742:function(e,t,o){},ac95:function(e,t,o){"use strict";var i=o("7a23");const l={class:"large-toggle-block"},a={key:0,class:"title"},c={class:"large-toggle-container"};function s(e,t,o,s,n,r){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",l,[e.title?(Object(i["openBlock"])(),Object(i["createElementBlock"])("label",a,Object(i["toDisplayString"])(e.title),1)):Object(i["createCommentVNode"])("",!0),Object(i["createElementVNode"])("div",c,[Object(i["createElementVNode"])("div",{class:Object(i["normalizeClass"])(["large-toggle left",0==e.value?"selected":"default"]),onClick:t[0]||(t[0]=t=>e.toggle(0))},[Object(i["createElementVNode"])("label",{class:Object(i["normalizeClass"])(["text",0==e.value?"selected":""])},Object(i["toDisplayString"])(e.$localizeFilter(e.variants[0])),3)],2),Object(i["createElementVNode"])("div",{class:Object(i["normalizeClass"])(["large-toggle right",1==e.value?"selected":"default"]),onClick:t[1]||(t[1]=t=>e.toggle(1))},[Object(i["createElementVNode"])("label",{class:Object(i["normalizeClass"])(["text",1==e.value?"selected":""])},Object(i["toDisplayString"])(e.$localizeFilter(e.variants[1])),3)],2)])])}var n=o("ed09"),r=Object(n["a"])({props:["title","variants","selected"],watch:{selected:function(e,t){null!=e&&void 0!=e&&(this.value=this.variants.indexOf(e))}},data:()=>({value:0}),methods:{toggle(e){this.value=e,this.$emit("toggle",Number(this.value))}}}),d=(o("f39b"),o("d959")),m=o.n(d);const p=m()(r,[["render",s],["__scopeId","data-v-f809d2e6"]]);t["a"]=p},b75c:function(e,t,o){e.exports=o.p+"img/AXS.96e521c9.svg"},d989:function(e,t,o){"use strict";var i=o("7a23");const l=e=>(Object(i["pushScopeId"])("data-v-0c3d5a7c"),e=e(),Object(i["popScopeId"])(),e),a={class:"modal-layout"},c={class:"darken"},s={class:"new-modal-back-button-container"},n={class:"modal-content"},r={class:"window-title"},d={class:"window-text",style:{"margin-bottom":"35px"}},m={class:"bold"},p={class:"window-text"},b={class:"input-field"},u=["placeholder"],h={key:0,class:"end-timer-error"},O={class:"time"},w={key:0,class:"modal-warning"},j=l(()=>Object(i["createElementVNode"])("i",{class:"material-icons",style:{color:"#FF9400!important"}},"report",-1)),v={class:"window-text warning"};function g(e,t,o,l,g,f){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",a,[Object(i["createElementVNode"])("div",c,[Object(i["createElementVNode"])("div",{class:"new-modal bonus-withdrawal-modal",onClick:t[3]||(t[3]=Object(i["withModifiers"])(()=>{},["stop"]))},[Object(i["createElementVNode"])("div",s,[Object(i["createElementVNode"])("button",{class:"new-modal-back-button",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(i["createElementVNode"])("div",n,[Object(i["createElementVNode"])("p",r,Object(i["toDisplayString"])(e.$localizeFilter("withdrawal_confirmation")),1),Object(i["createElementVNode"])("p",d,[Object(i["createTextVNode"])(Object(i["toDisplayString"])(e.$localizeFilter("withdrawal_confirmation_text"))+" ",1),Object(i["createElementVNode"])("span",m,Object(i["toDisplayString"])(e.email),1)]),Object(i["createElementVNode"])("p",p,Object(i["toDisplayString"])(e.$localizeFilter("wallet_confirmation_label")),1),Object(i["createElementVNode"])("div",b,[Object(i["withDirectives"])(Object(i["createElementVNode"])("input",{id:"code",class:Object(i["normalizeClass"])(["custom-input",{invalid:e.v$.code.$error||e.showEndTimerError}]),placeholder:e.$localizeFilter("withdrawal_confirmation_input"),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.code=t)},null,10,u),[[i["vModelText"],e.code,void 0,{trim:!0}]]),(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(e.v$.code.$errors,(e,t)=>(Object(i["openBlock"])(),Object(i["createElementBlock"])("small",{class:"error",key:t},Object(i["toDisplayString"])(e.$message),1))),128)),e.showEndTimerError?(Object(i["openBlock"])(),Object(i["createElementBlock"])("small",h,Object(i["toDisplayString"])(e.$localizeFilter("confirmation_code_time_ended")),1)):Object(i["createCommentVNode"])("",!0),Object(i["createElementVNode"])("div",O,Object(i["toDisplayString"])(e.$utils.formatTime(e.timeLeft,!1,!1)),1)]),e.commission>0?(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",w,[j,Object(i["createElementVNode"])("p",v,Object(i["toDisplayString"])(e.$localizeFilter("commission")+" "+e.commissionFee+" "+e.coinTicker),1)])):Object(i["createCommentVNode"])("",!0),Object(i["createElementVNode"])("button",{class:"basic-button",onClick:t[2]||(t[2]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(i["toDisplayString"])(e.$localizeFilter("confirm")),1)])])])])}var f=o("ed09"),k=o("25a0"),y=o("e3e1"),E=o("e977"),D=(o("188e"),o("fa7d")),N=Object(f["a"])({props:["withdrawId","commission","coinTicker"],validations(){return{code:{required:y["b"].withMessage(Object(E["a"])("field_must_not_be_empty"),y["h"]),numeric:y["b"].withMessage(Object(E["a"])("field_must_be_numeric"),y["h"])}}},setup(){return{v$:Object(k["a"])()}},watch:{timeLeft(e,t){e<=0&&this.$nextTick(()=>{this.timerEnded()})}},data:()=>({showEndTimerError:!1,code:""}),methods:{runTimer(){const e=+new Date+3e5;this.$store.dispatch("runConfirmationCodeTimer",{timestamp:e}),document.addEventListener("visibilitychange",(function(){document.hidden?this.$store.dispatch("stopConfirmationCodeTimer"):this.$store.dispatch("runConfirmationCodeTimer",{timestamp:e})}))},stopTimer(){this.$store.dispatch("stopConfirmationCodeTimer")},timerEnded(){this.showEndTimerError=!0},closeModal(e){this.cancelRequest({id:this.withdrawId}),this.$emit("closeModal",e)},async cancelRequest(e){try{await this.$store.dispatch("cancelWithdrawBalanceRequest",{requestId:e.id}),this.$message(Object(E["a"])("application_calceled"))}catch(t){this.$error(t)}},async submitHandler(){if(this.v$.$touch(),!this.v$.$error)try{const e={withdrawBalanceRequestId:this.withdrawId,confirmationCode:this.code};await this.$store.dispatch("confirmWithdrawBalanceRequest",e),this.$message(Object(E["a"])("withdraw_successfull")),this.$emit("closeModal")}catch(e){this.$error(e)}},async selectNetwork(e){await this.$store.dispatch("setWithdrawFromWalletNetwork",{network:e})},getNetworkByTicker(e){return null===this.network?null:this.$store.getters.networkByTicker(e)}},computed:{email(){var e;return null===(e=this.$store.getters.profile)||void 0===e?void 0:e.email},timeLeft(){return this.$store.state.info.confirmationCodeTimeLeft},networksForCoin(){return this.$store.getters.networksForCoin(this.coinTicker)},network(){return this.$store.getters.withdrawFromWalletNetwork},commissionFee(){return console.log(this.$store.getters.assetDecimalsMap[this.coinTicker],this.commission),+D["a"].displayBigIntAsDecimal(this.commission,this.$store.getters.assetDecimalsMap[this.coinTicker],this.$store.getters.assetDecimalsMap[this.coinTicker].toString().length-1)}},mounted(){this.runTimer()},unmounted(){this.stopTimer()}}),V=(o("1dda"),o("d959")),C=o.n(V);const $=C()(N,[["render",g],["__scopeId","data-v-0c3d5a7c"]]);t["a"]=$},db90:function(e,t,o){"use strict";o("a742")},dd6d:function(e,t,o){e.exports=o.p+"img/UNI.da51f3ab.svg"},de40:function(e,t,o){"use strict";o("7665")},dfce:function(e,t,o){var i={"./ADA.svg":"e217","./AXS.svg":"b75c","./BTC.svg":"9077","./BTCV.svg":"9fb2","./DAI.svg":"3770","./DASH.svg":"556f","./DOGE.svg":"801e","./ETC.svg":"1aa6","./ETH.svg":"17e0","./LTC.svg":"64cc","./LUNA2.svg":"f7fa","./MATIC.svg":"024c","./SHIB.svg":"ff25","./SOL.svg":"644b","./TRX.svg":"a637","./UNI.svg":"dd6d","./USDC.svg":"5520","./USDT.svg":"50c7","./USDV.svg":"056f","./XMR.svg":"5738","./XRP.svg":"a645"};function l(e){var t=a(e);return o(t)}function a(e){if(!o.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}l.keys=function(){return Object.keys(i)},l.resolve=a,e.exports=l,l.id="dfce"},e045:function(e,t,o){"use strict";o("10b4")},e217:function(e,t,o){e.exports=o.p+"img/ADA.6aea691c.svg"},f39b:function(e,t,o){"use strict";o("7100")},f7fa:function(e,t,o){e.exports=o.p+"img/LUNA2.3baaccd8.svg"},f8c3:function(e,t,o){},f9a9:function(e,t,o){},fba0:function(e,t,o){},ff25:function(e,t,o){e.exports=o.p+"img/SHIB.e53ff3a9.svg"}}]);
//# sourceMappingURL=chunk-01888e63.4143f4e1.js.map