(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a73fba0"],{"024c":function(e,t,o){e.exports=o.p+"img/MATIC.1087d3d6.svg"},"17e0":function(e,t,o){e.exports=o.p+"img/ETH.7c199546.svg"},"1aa6":function(e,t,o){e.exports=o.p+"img/ETC.9d4534ae.svg"},3770:function(e,t,o){e.exports=o.p+"img/DAI.1a84a86b.svg"},"3bad":function(e,t,o){"use strict";o("d490")},"50c7":function(e,t,o){e.exports=o.p+"img/USDT.43f688a0.svg"},5520:function(e,t,o){e.exports=o.p+"img/USDC.3b5972c1.svg"},"556f":function(e,t,o){e.exports=o.p+"img/DASH.94b9ae90.svg"},5738:function(e,t,o){e.exports=o.p+"img/XMR.22ac5949.svg"},"644b":function(e,t,o){e.exports=o.p+"img/SOL.4e6fecb2.svg"},"64cc":function(e,t,o){e.exports=o.p+"img/LTC.6046cca1.svg"},6823:function(e,t,o){},6918:function(e,t,o){"use strict";o("6cc0")},"6cc0":function(e,t,o){},7100:function(e,t,o){},"74c1":function(e,t,o){"use strict";o.r(t);var i=o("7a23");const l={class:"liquidity"},c={class:"title"},a={class:"subtitle"},s={key:0,class:"pool-amount"},n={class:"pools-container"};function r(e,t,o,r,d,p){const b=Object(i["resolveComponent"])("LargeToggle"),u=Object(i["resolveComponent"])("PoolAmount"),m=Object(i["resolveComponent"])("LiquidityProviderPool"),g=Object(i["resolveComponent"])("LiquidityDepositModal"),v=Object(i["resolveComponent"])("LiquidityWithdrawModal");return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",l,[Object(i["createElementVNode"])("div",c,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_title")),1),Object(i["createElementVNode"])("div",a,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_subtitle")),1),Object(i["createVNode"])(b,{title:null,variants:e.poolTypes,onToggle:e.toggle,class:"toggle"},null,8,["variants","onToggle"]),"my_pools"===e.selectedPoolType?(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",s,[Object(i["createVNode"])(u,{class:"pool-amount-first",title:e.$localizeFilter("pool_amount_income"),amount:e.totalIncome,color:"type-green"},null,8,["title","amount"]),Object(i["createVNode"])(u,{title:e.$localizeFilter("pool_amount_test"),amount:e.testBalance,color:"type-gray"},null,8,["title","amount"])])):Object(i["createCommentVNode"])("",!0),Object(i["createElementVNode"])("div",n,[(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(e.pools,(t,o)=>(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{key:o},[Object(i["createVNode"])(m,{pool:t,onDeposit:e.deposit,onWithdraw:e.withdraw},null,8,["pool","onDeposit","onWithdraw"])]))),128))]),e.showDepositModal?(Object(i["openBlock"])(),Object(i["createBlock"])(g,{key:1,pool:e.currentPool,onCloseModal:e.closeModals},null,8,["pool","onCloseModal"])):Object(i["createCommentVNode"])("",!0),e.showWithdrawModal?(Object(i["openBlock"])(),Object(i["createBlock"])(v,{key:2,pool:e.currentPool,onCloseModal:e.closeModals},null,8,["pool","onCloseModal"])):Object(i["createCommentVNode"])("",!0)])}var d=o("ed09"),p=o("e977");const b={class:"large-toggle-block"},u={key:0,class:"title"},m={class:"large-toggle-container"};function g(e,t,o,l,c,a){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",b,[e.title?(Object(i["openBlock"])(),Object(i["createElementBlock"])("label",u,Object(i["toDisplayString"])(e.title),1)):Object(i["createCommentVNode"])("",!0),Object(i["createElementVNode"])("div",m,[Object(i["createElementVNode"])("div",{class:Object(i["normalizeClass"])(["large-toggle left",0==e.value?"selected":"default"]),onClick:t[0]||(t[0]=t=>e.toggle(0))},[Object(i["createElementVNode"])("label",{class:Object(i["normalizeClass"])(["text",0==e.value?"selected":""])},Object(i["toDisplayString"])(e.$localizeFilter(e.variants[0])),3)],2),Object(i["createElementVNode"])("div",{class:Object(i["normalizeClass"])(["large-toggle right",1==e.value?"selected":"default"]),onClick:t[1]||(t[1]=t=>e.toggle(1))},[Object(i["createElementVNode"])("label",{class:Object(i["normalizeClass"])(["text",1==e.value?"selected":""])},Object(i["toDisplayString"])(e.$localizeFilter(e.variants[1])),3)],2)])])}var v=Object(d["a"])({props:["title","variants","selected"],watch:{selected:function(e,t){null!=e&&void 0!=e&&(this.value=this.variants.indexOf(e))}},data:()=>({value:0}),methods:{toggle(e){this.value=e,this.$emit("toggle",Number(this.value))}}}),O=(o("f39b"),o("d959")),j=o.n(O);const h=j()(v,[["render",g],["__scopeId","data-v-f809d2e6"]]);var f=h;const y={class:"liquidity-provider-pool-cell cell-1"},k={class:"images-block"},w=["src"],E=["src"],N={class:"text-block"},V={class:"title"},D={class:"text bold"},_={class:"liquidity-provider-pool-cell cell-2"},C={class:"text-block"},$={class:"title"},S={class:"text"},M={class:"liquidity-provider-pool-cell cell-3"},T={class:"text-block"},x={class:"title"},q={class:"text"},B={class:"liquidity-provider-pool-cell cell-4"},F={class:"text-block"},z={class:"title"},P={class:"text"},I={class:"liquidity-provider-pool-cell cell-5"},A={class:"buttons-block"};function L(e,t,l,c,a,s){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{class:Object(i["normalizeClass"])("liquidity-provider-pool "+e.getColor(e.pool.risk))},[Object(i["createElementVNode"])("div",y,[Object(i["createElementVNode"])("div",k,[Object(i["createElementVNode"])("img",{class:"image image-1",src:o("dfce")(`./${e.pool.leftCoinTicker}.svg`)},null,8,w),Object(i["createElementVNode"])("img",{class:"image image-2",src:o("dfce")(`./${e.pool.rightCoinTicker}.svg`)},null,8,E)]),Object(i["createElementVNode"])("div",N,[Object(i["createElementVNode"])("div",V,Object(i["toDisplayString"])(e.$localizeFilter("coins_pair")),1),Object(i["createElementVNode"])("div",D,Object(i["toDisplayString"])(`${e.pool.leftCoinTicker} / ${e.pool.rightCoinTicker}`),1)])]),Object(i["createElementVNode"])("div",_,[Object(i["createElementVNode"])("div",C,[Object(i["createElementVNode"])("div",$,Object(i["toDisplayString"])(e.$localizeFilter("interest")),1),Object(i["createElementVNode"])("div",S,Object(i["toDisplayString"])(e.pool.interest+" %"),1)])]),Object(i["createElementVNode"])("div",M,[Object(i["createElementVNode"])("div",T,[Object(i["createElementVNode"])("div",x,Object(i["toDisplayString"])(e.$localizeFilter("risk")),1),Object(i["createElementVNode"])("div",q,Object(i["toDisplayString"])(e.pool.risk+"%"),1)])]),Object(i["createElementVNode"])("div",B,[Object(i["createElementVNode"])("div",F,[Object(i["createElementVNode"])("div",z,Object(i["toDisplayString"])(e.$localizeFilter("deposited")),1),Object(i["createElementVNode"])("div",P,Object(i["toDisplayString"])(`${e.pool.depositedLeftCoin} ${e.pool.leftCoinTicker} / ${e.pool.depositedRightCoin} ${e.pool.rightCoinTicker}`),1)])]),Object(i["createElementVNode"])("div",I,[Object(i["createElementVNode"])("div",A,[Object(i["createElementVNode"])("div",{class:"basic-button",onClick:t[0]||(t[0]=(...t)=>e.deposit&&e.deposit(...t))},Object(i["toDisplayString"])(e.$localizeFilter("liquidity_deposit")),1),Object(i["createElementVNode"])("div",{class:"underline-button",onClick:t[1]||(t[1]=(...t)=>e.withdraw&&e.withdraw(...t))},Object(i["toDisplayString"])(e.$localizeFilter("liquidity_withdraw")),1)])])],2)}var U=Object(d["a"])({props:{pool:{type:Object,required:!0}},watch:{},data:()=>({}),methods:{deposit(){this.$emit("deposit",this.pool)},withdraw(){this.$emit("withdraw",this.pool)},getColor(e){return e<2?"risk-green":e<3.5?"risk-yellow":e<5?"risk-orange":"risk-red"}}});o("c629");const H=j()(U,[["render",L],["__scopeId","data-v-4cff56fb"]]);var R=H,W=o("1c8f"),X=o.n(W);const G=e=>(Object(i["pushScopeId"])("data-v-469d3727"),e=e(),Object(i["popScopeId"])(),e),J={class:"amount"},K={class:"title"},Q=G(()=>Object(i["createElementVNode"])("img",{class:"amount-image",src:X.a},null,-1)),Y={class:"amount"};function Z(e,t,o,l,c,a){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",J,[Object(i["createElementVNode"])("div",K,Object(i["toDisplayString"])(e.title),1),Object(i["createElementVNode"])("div",{class:Object(i["normalizeClass"])("amount-block "+e.color)},[Q,Object(i["createElementVNode"])("div",Y,Object(i["toDisplayString"])(e.formattedAmount)+" USDT",1)],2)])}o("252a");var ee=Object(d["a"])({props:{amount:{type:Number,required:!0},title:{type:String,required:!0},color:{type:String,required:!0}},watch:{},data:()=>({}),methods:{deposit(){},withdraw(){}},computed:{formattedAmount(){return this.amount?this.amount.toString().slice(0,this.amount.toString().length-6)+"."+this.amount.toString().slice(this.amount.toString().length-6,this.amount.toString().length):this.amount}}});o("c3a1");const te=j()(ee,[["render",Z],["__scopeId","data-v-469d3727"]]);var oe=te;const ie=e=>(Object(i["pushScopeId"])("data-v-62e5a7b8"),e=e(),Object(i["popScopeId"])(),e),le={class:"modal-layout"},ce={class:"new-modal-back-button-container"},ae={class:"modal-content"},se={class:"window-title"},ne={class:"window-text"},re={class:"input-field"},de=["placeholder"],pe={class:"modal-warning"},be=ie(()=>Object(i["createElementVNode"])("i",{class:"material-icons",style:{color:"#FF9400!important"}},"report",-1)),ue={class:"window-text warning"};function me(e,t,o,l,c,a){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",le,[Object(i["createElementVNode"])("div",{class:"darken",onClick:t[4]||(t[4]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(i["createElementVNode"])("div",{class:"new-modal liquidity-deposit-modal",onClick:t[3]||(t[3]=Object(i["withModifiers"])(()=>{},["stop"]))},[Object(i["createElementVNode"])("div",ce,[Object(i["createElementVNode"])("button",{class:"new-modal-back-button",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(i["createElementVNode"])("div",ae,[Object(i["createElementVNode"])("p",se,Object(i["toDisplayString"])(e.$localizeFilter("depositing_funds_into_pool")+`\n${e.pool.leftCoinTicker}/${e.pool.rightCoinTicker}`),1),Object(i["createElementVNode"])("p",ne,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_deposit_modal_text_amount",["USDT"])),1),Object(i["createElementVNode"])("div",re,[Object(i["withDirectives"])(Object(i["createElementVNode"])("input",{id:"amount",class:Object(i["normalizeClass"])(["custom-input",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("amount_in",["USDT"]),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t)},null,10,de),[[i["vModelText"],e.amount,void 0,{trim:!0}]]),(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(e.v$.amount.$errors,(e,t)=>(Object(i["openBlock"])(),Object(i["createElementBlock"])("small",{class:"error",key:t},Object(i["toDisplayString"])(e.$message),1))),128))]),Object(i["createElementVNode"])("div",pe,[be,Object(i["createElementVNode"])("p",ue,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_deposit_modal_warning",[e.pool.leftCoinTicker,e.pool.rightCoinTicker])),1)]),Object(i["createElementVNode"])("button",{class:"basic-button",onClick:t[2]||(t[2]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(i["toDisplayString"])(e.$localizeFilter("deposit_funds")),1)])])])])}var ge=o("25a0"),ve=o("e3e1");var Oe=Object(d["a"])({props:{pool:{type:Object,required:!0}},validations(){return{amount:{required:ve["b"].withMessage(Object(p["a"])("field_must_not_be_empty"),ve["h"]),numeric:ve["b"].withMessage(Object(p["a"])("field_must_be_numeric"),ve["h"]),minValue:ve["b"].withMessage(Object(p["a"])("min_value",[this.minAmount]),Object(ve["f"])(this.minAmount))}}},setup(){return{v$:Object(ge["a"])()}},data:()=>({amount:"",minAmount:0}),methods:{closeModal(e){this.$emit("closeModal",e)},async submitHandler(){if(this.v$.$touch(),!this.v$.$error)try{const e={poolId:this.pool.poolId,amount:this.amount};await this.$store.dispatch("depositFundsToLiquidityPool",e),this.$message(Object(p["a"])("depositing_funds_into_pool_successful")),this.$emit("closeModal")}catch(e){this.$error(e)}}},computed:{assetDecimalsMap(){return this.$store.getters.assetDecimalsMap}}});o("3bad");const je=j()(Oe,[["render",me],["__scopeId","data-v-62e5a7b8"]]);var he=je;const fe=e=>(Object(i["pushScopeId"])("data-v-3401d0e1"),e=e(),Object(i["popScopeId"])(),e),ye={class:"modal-layout"},ke={class:"new-modal-back-button-container"},we={class:"modal-content"},Ee={class:"window-title"},Ne={class:"window-subtitle"},Ve={class:"modal-warning"},De=fe(()=>Object(i["createElementVNode"])("i",{class:"material-icons",style:{color:"#FF9400!important"}},"report",-1)),_e={class:"window-text warning"},Ce={class:"checkbox-labels-block"},$e={for:"checkbox",class:"conditions-label"},Se={class:"buttons-block"};function Me(e,t,o,l,c,a){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",ye,[Object(i["createElementVNode"])("div",{class:"darken",onClick:t[7]||(t[7]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(i["createElementVNode"])("div",{class:"new-modal liquidity-deposit-modal",onClick:t[6]||(t[6]=Object(i["withModifiers"])(()=>{},["stop"]))},[Object(i["createElementVNode"])("div",ke,[Object(i["createElementVNode"])("button",{class:"new-modal-back-button",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(i["createElementVNode"])("div",we,[Object(i["createElementVNode"])("p",Ee,Object(i["toDisplayString"])(e.$localizeFilter("withdrawing_funds_from_pool")+`\n${e.pool.leftCoinTicker}/${e.pool.rightCoinTicker}`),1),Object(i["createElementVNode"])("p",Ne,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_withdraw_subtitle",[e.pool.depositedLeftCoin,e.pool.leftCoinTicker,e.pool.depositedRightCoin,e.pool.rightCoinTicker])),1),Object(i["createElementVNode"])("div",Ve,[De,Object(i["createElementVNode"])("p",_e,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_withdraw_warning")),1)]),Object(i["createElementVNode"])("div",{class:"conditions-block",onClick:t[3]||(t[3]=(...t)=>e.acceptСonditions&&e.acceptСonditions(...t))},[Object(i["withDirectives"])(Object(i["createElementVNode"])("input",{type:"checkbox",id:"checkbox",class:"checkbox","onUpdate:modelValue":t[1]||(t[1]=t=>e.conditionsAccepted=t),onClick:t[2]||(t[2]=(...t)=>e.acceptСonditions&&e.acceptСonditions(...t))},null,512),[[i["vModelCheckbox"],e.conditionsAccepted]]),Object(i["createElementVNode"])("div",Ce,[Object(i["createElementVNode"])("label",$e,Object(i["toDisplayString"])(e.$localizeFilter("liquidity_withdraw_agreement")),1)])]),Object(i["createElementVNode"])("div",Se,[Object(i["createElementVNode"])("button",{class:"transparent-button",onClick:t[4]||(t[4]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(i["toDisplayString"])(e.$localizeFilter("confirm")),1),Object(i["createElementVNode"])("button",{class:"basic-button red-button",onClick:t[5]||(t[5]=(...t)=>e.cancel&&e.cancel(...t))},Object(i["toDisplayString"])(e.$localizeFilter("cancel")),1)])])])])])}var Te=Object(d["a"])({props:{pool:{type:Object,required:!0}},data:()=>({conditionsAccepted:!1}),methods:{"acceptСonditions"(){this.conditionsAccepted=!this.conditionsAccepted},closeModal(e){this.$emit("closeModal",e)},cancel(){this.closeModal()},async submitHandler(){if(this.conditionsAccepted)try{const e={poolId:this.pool.poolId};await this.$store.dispatch("withdrawFundsFromLiquidityPool",e),this.$message(Object(p["a"])("withdraw_funds_from_pool_application_created_successful")),this.$emit("closeModal")}catch(e){this.$error(e)}}},computed:{assetDecimalsMap(){return this.$store.getters.assetDecimalsMap}}});o("b71e");const xe=j()(Te,[["render",Me],["__scopeId","data-v-3401d0e1"]]);var qe=xe,Be=Object(d["a"])({components:{LargeToggle:f,LiquidityProviderPool:R,PoolAmount:oe,LiquidityDepositModal:he,LiquidityWithdrawModal:qe},setup(){},data:()=>({poolTypes:["all_pools","my_pools"],selectedPoolType:"all_pools",showDepositModal:!1,showWithdrawModal:!1,currentPool:null}),computed:{liquidityProvidingData(){return this.$store.getters.liquidityProvidingData},totalIncome(){var e;return(null===(e=this.liquidityProvidingData)||void 0===e?void 0:e.totalIncome)||0},testBalance(){var e;return(null===(e=this.liquidityProvidingData)||void 0===e?void 0:e.testBalance)||0},pools(){var e,t;return"all_pools"===this.selectedPoolType?(null===(e=this.liquidityProvidingData)||void 0===e?void 0:e.allPools)||[]:"my_pools"===this.selectedPoolType&&(null===(t=this.liquidityProvidingData)||void 0===t?void 0:t.myPools)||[]}},methods:{deposit(e){this.currentPool=e,this.showDepositModal=!0},withdraw(e){this.currentPool=e,this.showWithdrawModal=!0},closeModals(){this.showDepositModal=!1,this.showWithdrawModal=!1,this.currentPool=null,this.loadData()},toggle(e){this.selectedPoolType=this.poolTypes[e]},async loadData(){try{await this.$store.dispatch("getLiquidityProvidingData")}catch(e){this.$error(e)}}},async mounted(){await this.loadData(),setInterval(async()=>{await this.loadData()},3e3)}});o("6918");const Fe=j()(Be,[["render",r],["__scopeId","data-v-837264d8"]]);t["default"]=Fe},"801e":function(e,t,o){e.exports=o.p+"img/DOGE.bfe942ea.svg"},"8a96":function(e,t,o){},9077:function(e,t,o){e.exports=o.p+"img/BTC.f92890de.svg"},a637:function(e,t,o){e.exports=o.p+"img/TRX.4f3f3903.svg"},a645:function(e,t,o){e.exports=o.p+"img/XRP.639b151a.svg"},b71e:function(e,t,o){"use strict";o("8a96")},b75c:function(e,t,o){e.exports=o.p+"img/AXS.96e521c9.svg"},bdd7:function(e,t,o){},c3a1:function(e,t,o){"use strict";o("6823")},c629:function(e,t,o){"use strict";o("bdd7")},d490:function(e,t,o){},dd6d:function(e,t,o){e.exports=o.p+"img/UNI.da51f3ab.svg"},dfce:function(e,t,o){var i={"./ADA.svg":"e217","./AXS.svg":"b75c","./BTC.svg":"9077","./DAI.svg":"3770","./DASH.svg":"556f","./DOGE.svg":"801e","./ETC.svg":"1aa6","./ETH.svg":"17e0","./LTC.svg":"64cc","./LUNA2.svg":"f7fa","./MATIC.svg":"024c","./SHIB.svg":"ff25","./SOL.svg":"644b","./TRX.svg":"a637","./UNI.svg":"dd6d","./USDC.svg":"5520","./USDT.svg":"50c7","./XMR.svg":"5738","./XRP.svg":"a645"};function l(e){var t=c(e);return o(t)}function c(e){if(!o.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}l.keys=function(){return Object.keys(i)},l.resolve=c,e.exports=l,l.id="dfce"},e217:function(e,t,o){e.exports=o.p+"img/ADA.6aea691c.svg"},f39b:function(e,t,o){"use strict";o("7100")},f7fa:function(e,t,o){e.exports=o.p+"img/LUNA2.3baaccd8.svg"},ff25:function(e,t,o){e.exports=o.p+"img/SHIB.e53ff3a9.svg"}}]);
//# sourceMappingURL=chunk-7a73fba0.30783997.js.map