(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f801b65c"],{"11a6":function(e,t,o){"use strict";var a=o("7a23"),i=o("64dd"),c=o.n(i);const n=e=>(Object(a["pushScopeId"])("data-v-392534ec"),e=e(),Object(a["popScopeId"])(),e),l={class:"modal-layout"},s={class:"modal-content"},r={class:"window-title"},d={class:"window-text"},u={class:"input-field"},m=["placeholder"],b={class:"modal-warning"},h=n(()=>Object(a["createElementVNode"])("img",{class:"warning-label",src:c.a,alt:""},null,-1)),p={key:0,class:"window-text warning"},O={key:1,class:"window-text warning"};function j(e,t,o,i,c,n){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[Object(a["createElementVNode"])("div",{class:"darken",onClick:t[4]||(t[4]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(a["createElementVNode"])("div",{class:"new-modal liquidity-deposit-modal",onClick:t[3]||(t[3]=Object(a["withModifiers"])(()=>{},["stop"]))},[Object(a["createElementVNode"])("button",{class:"new-modal-back-button thin",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))}),Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("p",r,Object(a["toDisplayString"])(e.titleOverride||e.$localizeFilter("withdraw_funds_from_liquidity_balance")),1),Object(a["createElementVNode"])("p",d,Object(a["toDisplayString"])(e.$localizeFilter("withdraw_from_balance_modal_text_amount",["USDT"])),1),Object(a["createElementVNode"])("div",u,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{id:"amount",class:Object(a["normalizeClass"])(["input-class",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("amount_in",["USDT"]),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t)},null,10,m),[[a["vModelText"],e.amount,void 0,{trim:!0}]]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.v$.amount.$errors,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("small",{class:"error",key:t},Object(a["toDisplayString"])(e.$message),1))),128))]),Object(a["createElementVNode"])("div",b,[h,!1===e.withdrawToWallet?(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",p,Object(a["toDisplayString"])(e.$localizeFilter("withdraw_from_balance_modal_warning")),1)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",O,Object(a["toDisplayString"])(e.$localizeFilter("withdraw_from_balance_modal_warning_alternative")),1))])]),Object(a["createElementVNode"])("button",{class:Object(a["normalizeClass"])(["basic-button submit-button",e.submitInProgress?"inactive":""]),onClick:t[2]||(t[2]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(a["toDisplayString"])(e.$localizeFilter("withdraw_funds")),3)])])])}var w=o("ed09"),g=o("25a0"),y=o("e3e1"),v=o("e977");var f=Object(w["a"])({props:{withdrawToWallet:{type:Boolean,required:!0},titleOverride:{type:String,default:null},fromGoalsBalance:{type:Boolean,default:!1}},validations(){return{amount:{required:y["b"].withMessage(Object(v["a"])("field_must_not_be_empty"),y["h"]),numeric:y["b"].withMessage(Object(v["a"])("field_must_be_numeric"),y["h"]),minValue:y["b"].withMessage(Object(v["a"])("min_value",[this.minAmount]),Object(y["f"])(this.minAmount))}}},setup(){return{v$:Object(g["a"])()}},data:()=>({amount:"",minAmount:0,submitInProgress:!1}),methods:{closeModal(e){this.$emit("closeModal",e)},async submitHandler(){if(this.v$.$touch(),!this.v$.$error){this.submitInProgress=!0;try{const e={amount:this.amount,toWallet:this.withdrawToWallet,fromGoalsBalance:this.fromGoalsBalance};await this.$store.dispatch("withdrawLiquidityProvidingBalance",e),this.$message(Object(v["a"])("withdrawing_funds_successful")),this.$emit("closeModal"),setTimeout(()=>{this.submitInProgress=!1},1e3)}catch(e){this.$error(e),setTimeout(()=>{this.submitInProgress=!1},1e3)}}}},computed:{}}),k=(o("9a35"),o("d959")),B=o.n(k);const $=B()(f,[["render",j],["__scopeId","data-v-392534ec"]]);t["a"]=$},"359b":function(e,t,o){e.exports=o.p+"media/income_sound.4e707068.mp3"},"56f9":function(e,t,o){"use strict";o("8e5f")},"7abd":function(e,t,o){"use strict";o("fad1")},"7b59":function(e,t,o){"use strict";var a=o("7a23"),i=o("64dd"),c=o.n(i);const n=e=>(Object(a["pushScopeId"])("data-v-079311c0"),e=e(),Object(a["popScopeId"])(),e),l={class:"modal-layout"},s={class:"modal-container"},r={class:"modal-content"},d={class:"window-title"},u={class:"window-text"},m={class:"input-field"},b=["placeholder"],h={class:"window-text"},p={class:"input-field"},O=["placeholder"],j={class:"modal-warning"},w=n(()=>Object(a["createElementVNode"])("img",{class:"warning-label",src:c.a,alt:""},null,-1)),g={class:"window-text warning"},y={key:0,class:"error"};function v(e,t,o,i,c,n){const v=Object(a["resolveDirective"])("maska");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[Object(a["createElementVNode"])("div",{class:"darken",onClick:t[5]||(t[5]=t=>e.closeModal())},[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["modal-window",("welcomeBonus"==e.type?"welcome-bonus":"socialBoom"==e.type?"social-boom":"operation"==e.type?"operation":"")+(e.step>1?"animated":"")]),onClick:t[4]||(t[4]=Object(a["withModifiers"])(()=>{},["stop"]))},[Object(a["createElementVNode"])("button",{class:"modal-back-button new-modal-back-button",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))}),Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("p",d,Object(a["toDisplayString"])(e.$localizeFilter("withdrawal")),1),Object(a["createElementVNode"])("p",u,Object(a["toDisplayString"])(e.$localizeFilter("modal_withdrawal_text_1_account",[e.coin])),1),Object(a["createElementVNode"])("div",m,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{id:"amount",class:Object(a["normalizeClass"])(["input-class",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("amount_in",[e.coin]),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t)},null,10,b),[[a["vModelText"],e.amount,void 0,{trim:!0}]]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.v$.amount.$errors,(t,o)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("small",{class:"error",key:o},Object(a["toDisplayString"])(e.$filters.capitalizeFirstLetter(t.$property))+" "+Object(a["toDisplayString"])(t.$message),1))),128))]),Object(a["createElementVNode"])("p",h,Object(a["toDisplayString"])(e.$localizeFilter("modal_withdrawal_text_2")),1),Object(a["createElementVNode"])("div",p,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{id:"address",class:Object(a["normalizeClass"])(["input-class wallet",{invalid:e.v$.address.$error}]),placeholder:e.$localizeFilter("wallet_number",[e.selectedMethod]),type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.address=t)},null,10,O),[[a["vModelText"],e.address,void 0,{trim:!0}],[v,"TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"]]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.v$.address.$errors,(t,o)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("small",{class:"error",key:o},Object(a["toDisplayString"])(e.$filters.capitalizeFirstLetter(t.$property))+" "+Object(a["toDisplayString"])(t.$message),1))),128))]),Object(a["createElementVNode"])("div",j,[w,Object(a["createElementVNode"])("p",g,Object(a["toDisplayString"])(e.$localizeFilter("liquidity_modal_withdrawal_warning",[e.minAmount.toFixed(0),e.coin,e.minUSDAmount.toFixed(0)])),1)]),e.notEnoughFunds?(Object(a["openBlock"])(),Object(a["createElementBlock"])("label",y,Object(a["toDisplayString"])(e.$localizeFilter("not_enough_funds_on_balance_1",[e.coin])),1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("button",{class:Object(a["normalizeClass"])(["basic-button basic-button submit-button",e.submitInProgress?"inactive":""]),onClick:t[3]||(t[3]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(a["toDisplayString"])(e.$localizeFilter("next")),3)])],2)])])}var f=o("ed09"),k=o("25a0"),B=o("e3e1"),$=o("ae48"),_=(o("e977"),Object(f["a"])({props:{fromProviding:{type:Boolean,required:!0},fromGoalsBalance:{type:Boolean,required:!0}},components:{Toggle:$["a"]},data:()=>({amount:"",address:"",coin:"USDT",selectedMethod:"TRON",notEnoughFunds:!1,minAmount:0,minUSDAmount:0,submitInProgress:!1}),setup(){return{v$:Object(k["a"])()}},validations(){return{amount:{required:B["h"],numeric:B["g"],minValue:Object(B["f"])(this.minAmount)},address:{required:B["h"],minLength:Object(B["e"])(34),maxLength:Object(B["c"])(34)}}},methods:{closeModal(e){this.$emit("closeModal",e)},async submitHandler(){if(this.v$.$touch(),!this.v$.$error){this.submitInProgress=!0;try{const e={amount:this.amount,withdrawWalletAddress:this.address,withdrawMethod:this.coin+".TRC20",currencyCode:this.coin,fromProviding:this.fromProviding,fromGoalsBalance:this.fromGoalsBalance},{withdrawBalanceRequestId:t,fee:o,needAdditionalInfo:a}=await this.$store.dispatch("createWithdrawBalanceRequest",e);a?(this.$store.dispatch("setShowAdditionalInfoModal",{value:!0}),this.$emit("closeModal",!1)):this.$emit("showWithdrawalConfirmation",t,o),setTimeout(()=>{this.submitInProgress=!1},1e3)}catch(e){"Not enough funds"==e.message?this.notEnoughFunds=!0:(this.notEnoughFunds=!1,this.$error(e)),setTimeout(()=>{this.submitInProgress=!1},1e3)}}},async loadData(){const e={coinTicker:this.coin};try{const{minAmount:t,minUSDAmount:o}=await this.$store.dispatch("getWithdrawCredentials",e);this.minAmount=t,this.minUSDAmount=o,this.$forceUpdate()}catch(t){this.$error(t)}}},async mounted(){this.loadData()}})),E=(o("56f9"),o("d959")),S=o.n(E);const N=S()(_,[["render",v],["__scopeId","data-v-079311c0"]]);t["a"]=N},"8e5f":function(e,t,o){},"992e":function(e,t,o){"use strict";o("fba7")},"9a35":function(e,t,o){"use strict";o("b5a0")},a242:function(e,t,o){"use strict";o("5b81");var a=o("7a23");const i={class:"liquidity-provider-deposit-options"},c={class:"window light dropdown-block"},n=["onClick"],l={key:0,class:"option-balance"},s={key:1,class:"option-balance"};function r(e,t,o,r,d,u){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",i,[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("ul",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.options,(t,o)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:o,class:Object(a["normalizeClass"])(e.selectedIndex==o?"selected":""),onClick:t=>e.selectOption(o)},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$localizeFilter(""+t.replaceAll("-","_")))+" ",1),"from-wallet"===t?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,Object(a["toDisplayString"])(e.$localizeFilter("dropdown_balance",[e.$utils.formatNumber(e.walletBalance,"en-US",6,6)+" "+e.currencyCode])),1)):Object(a["createCommentVNode"])("",!0),"from-bonus-account"===t?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,Object(a["toDisplayString"])(e.$localizeFilter("dropdown_balance",[e.$utils.formatNumber(e.bonusAccountBalance,"en-US",6,6)+" "+e.currencyCode])),1)):Object(a["createCommentVNode"])("",!0)],10,n))),128))])])])}var d=o("ed09"),u=Object(d["a"])({props:{from:{type:String,default:"providing"},currencyCode:{type:String,default:"USDT"}},data:()=>({isOpen:!1,selectedIndex:null,options:["from-wallet","from-bonus-account","from-external-wallet"],walletBalance:0,bonusAccountBalance:0}),setup(){},methods:{triggerDropdown(){this.isOpen=!this.isOpen},selectOption(e){this.selectedIndex=e;let t=null;0==this.selectedIndex?t=this.walletBalance:1==this.selectedIndex&&(t=this.bonusAccountBalance),this.$emit("selectOption",this.options[e],t),this.$emit("close")}},async mounted(){if("providing"===this.from)try{const{walletBalance:e,bonusAccountBalance:t}=await this.$store.dispatch("getLiquidityProviderDepositBalance");this.walletBalance=e/1e6,this.bonusAccountBalance=t/1e6}catch(e){}else try{const{walletBalance:e,bonusAccountBalance:t}=await this.$store.dispatch("getStakingDepositBalance",{currencyCode:"CWPT"});this.walletBalance=e/1e6,this.bonusAccountBalance=t/1e6}catch(e){}}}),m=(o("7abd"),o("d959")),b=o.n(m);const h=b()(u,[["render",r],["__scopeId","data-v-fbdb8df2"]]);t["a"]=h},b5a0:function(e,t,o){},db1b:function(e,t,o){"use strict";var a=o("7a23"),i=o("359b"),c=o.n(i);const n=e=>(Object(a["pushScopeId"])("data-v-1c428ee6"),e=e(),Object(a["popScopeId"])(),e),l={class:"amount"},s={key:0,class:"highlight-block"},r=["src"],d={key:2,class:"amount-num"},u={key:3,class:"amount-num covertation_text"},m={key:0,class:"withdraw-block absolute"},b={key:0,class:"available-to-withdraw"},h={key:1,class:"comission"},p={key:1,class:"withdraw-block absolute"},O={key:0,class:"withdraw-left-block"},j={class:"available-to-withdraw"},w={class:"comission"},g={key:1,class:"withdraw-left-block"},y={class:"available-to-withdraw"},v={class:"comission"},f=n(()=>Object(a["createElementVNode"])("audio",null,[Object(a["createElementVNode"])("source",{src:c.a,type:"audio/mpeg"})],-1));function k(e,t,o,i,c,n){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(e.myPoolsBalance?"title title-pools-balance":"title")},Object(a["toDisplayString"])(e.title.replace(":","")+" \\"),3),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(`amount-block ${e.color} ${e.classOverride} ${e.classByType}`)},[e.showHighlight?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s)):Object(a["createCommentVNode"])("",!0),!1===e.convertation?(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",{key:1,class:"amount-image",src:e.amountImage},null,8,r)):Object(a["createCommentVNode"])("",!0),!1===e.convertation?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",d,Object(a["toDisplayString"])(e.formattedAmount)+" "+Object(a["toDisplayString"])(e.unit),1)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",u,Object(a["toDisplayString"])(e.convertationText),1))],2),"withdraw-available"===e.classOverride?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",m,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["withdraw-left-block",e.convertation?" convertation ":""])},[!1===e.convertation?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",b,Object(a["toDisplayString"])(e.$localizeFilter("available_to_withdraw",[e.$utils.formatNumber(e.availableProfitToWithdraw,"en-US",6,6)+" USDT"])),1)):Object(a["createCommentVNode"])("",!0),!1===e.convertation?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",h,Object(a["toDisplayString"])(e.$localizeFilter("comission_1_usdt")),1)):Object(a["createCommentVNode"])("",!0)],2),!1===e.convertation?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{class:"underline-button withdraw-button",onClickOnce:t[0]||(t[0]=(...t)=>e.liquidityProvidingWithdrawProfit&&e.liquidityProvidingWithdrawProfit(...t)),key:e.buttonKey},Object(a["toDisplayString"])(e.$localizeFilter("withdraw")),33)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{class:"underline-button withdraw-button",onClickOnce:t[1]||(t[1]=(...t)=>e.convertationWithdrawProfit&&e.convertationWithdrawProfit(...t)),key:e.buttonKeyConvert},Object(a["toDisplayString"])(e.$localizeFilter("convertation_btn")),33))])):Object(a["createCommentVNode"])("",!0),"gift"===e.type?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",p,[e.giftPercent?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",O,[Object(a["createElementVNode"])("div",j,Object(a["toDisplayString"])(e.$localizeFilter("give_a_present_as_percent",[""+e.$utils.formatNumber(e.giftPercent,"en-US",1,1)])),1),Object(a["createElementVNode"])("div",w,Object(a["toDisplayString"])(e.$localizeFilter("give_a_present_as_percent_subtitle")),1)])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",g,[Object(a["createElementVNode"])("div",y,Object(a["toDisplayString"])(e.$localizeFilter("give_a_present_not_avalilable")),1),Object(a["createElementVNode"])("div",v,Object(a["toDisplayString"])(e.$localizeFilter("give_a_present_not_avalilable_subtitle")),1)])),e.amount>=0&&e.giftPercent>=0?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:2,class:Object(a["normalizeClass"])(["underline-button",0===e.amount?"inactive":""]),onClick:t[2]||(t[2]=(...t)=>e.showGiftModal&&e.showGiftModal(...t))},Object(a["toDisplayString"])(e.$localizeFilter("send")),3)):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0),f])}o("252a");var B=o("ed09"),$=o("1209"),_=(o("fa7d"),o("e977"));const E=o("359b");var S=Object(B["a"])({props:{myPoolsBalance:{type:Boolean},classOverride:{type:String,default:""},amount:{type:Number,required:!0},availableProfitToWithdraw:{type:Number,default:0},title:{type:String,required:!0},color:{type:String,required:!0},type:{type:String,default:null},soundEnabled:{type:Boolean,default:!1},giftPercent:{type:Number,default:0},convertation:{type:Boolean,default:!1},convertationText:{type:String,default:""}},watch:{amount(e,t){e!==t&&this.$nextTick(()=>{"income"===(null===this||void 0===this?void 0:this.type)?this.index>0?(this.count=t,this.setCount(e)):(this.index=1,this.count=e):"arbitrationTotalIncome"===this.type?this.index>0&&e>t?(this.count=t,this.setCount(e),this.animateHighlight(),this.soundEnabled&&this.play()):(this.index=1,this.count=e):this.count=e})}},setup(){const e=new Audio(E);function t(){e.muted=!1,e.play()}return e.muted=!0,{play:t}},data:()=>({count:0,index:0,showHighlight:!1,buttonKey:0,buttonKeyConvert:0}),methods:{showGiftModal(){this.$emit("showGiftModal")},animateHighlight(){!1===this.showHighlight&&(this.showHighlight=!0,setTimeout(()=>{this.showHighlight=!1},4500))},setCount(e){const t={n:this.count};Object($["a"])({targets:t,n:e,round:1,duration:3e3,easing:"linear",update:()=>{this.count=t.n}})},async liquidityProvidingWithdrawProfit(){try{await this.$store.dispatch("liquidityProvidingWithdrawProfit"),this.$message(Object(_["a"])("liquidity_withdraw_successfull")),this.$emit("reloadData")}catch(e){this.$error(e)}finally{setTimeout(()=>{this.buttonKey=this.buttonKey+1},1e3)}},convertationWithdrawProfit(){this.$emit("showConvertationModal"),this.$emit("reloadData"),setTimeout(()=>{this.buttonKeyConvert=this.buttonKeyConvert+1},1e3)}},computed:{formattedAmount(){return"gift"===this.type?this.count:(this.count/1e6).toFixed(6)},amountImage(){return"gift"===this.type?o("3897"):o("1c8f")},classByType(){return"gift"===this.type?"gift":""},unit(){return"gift"===this.type?Object(_["a"])("gifts"):"USDT"}},mounted(){"income"!==this.type&&(this.count=this.amount)}}),N=(o("992e"),o("d959")),V=o.n(N);const D=V()(S,[["render",k],["__scopeId","data-v-1c428ee6"]]);t["a"]=D},fad1:function(e,t,o){},fba7:function(e,t,o){}}]);