(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f33772b6"],{"00aa":function(e,t,i){},"0cb2":function(e,t,i){var o=i("e330"),c=i("7b0b"),a=Math.floor,n=o("".charAt),l=o("".replace),s=o("".slice),r=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,i,o,m,u){var b=i+e.length,p=o.length,h=d;return void 0!==m&&(m=c(m),h=r),l(u,h,(function(c,l){var r;switch(n(l,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,i);case"'":return s(t,b);case"<":r=m[s(l,1,-1)];break;default:var d=+l;if(0===d)return c;if(d>p){var u=a(d/10);return 0===u?c:u<=p?void 0===o[u-1]?n(l,1):o[u-1]+n(l,1):c}r=o[d-1]}return void 0===r?"":r}))}},"11a6":function(e,t,i){"use strict";var o=i("7a23");const c=e=>(Object(o["pushScopeId"])("data-v-65d1393c"),e=e(),Object(o["popScopeId"])(),e),a={class:"modal-layout"},n={class:"new-modal-back-button-container"},l={class:"modal-content"},s={class:"window-title"},r={class:"window-text"},d={class:"input-field"},m=["placeholder"],u={class:"modal-warning"},b=c(()=>Object(o["createElementVNode"])("i",{class:"material-icons",style:{color:"#CA8920!important"}},"report",-1)),p={key:0,class:"window-text warning"},h={key:1,class:"window-text warning"};function O(e,t,i,c,O,w){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createElementVNode"])("div",{class:"darken",onClick:t[4]||(t[4]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(o["createElementVNode"])("div",{class:"new-modal liquidity-deposit-modal",onClick:t[3]||(t[3]=Object(o["withModifiers"])(()=>{},["stop"]))},[Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("button",{class:"new-modal-back-button thin",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("p",s,Object(o["toDisplayString"])(e.titleOverride||e.$localizeFilter("withdraw_funds_from_liquidity_balance")),1),Object(o["createElementVNode"])("p",r,Object(o["toDisplayString"])(e.$localizeFilter("liquidity_withdraw_balance_modal_text_amount",["USDT"])),1),Object(o["createElementVNode"])("div",d,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"amount",class:Object(o["normalizeClass"])(["custom-input",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("amount_in",["USDT"]),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t)},null,10,m),[[o["vModelText"],e.amount,void 0,{trim:!0}]]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.v$.amount.$errors,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",{class:"error",key:t},Object(o["toDisplayString"])(e.$message),1))),128))]),Object(o["createElementVNode"])("div",u,[b,!1===e.withdrawToWallet?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",p,Object(o["toDisplayString"])(e.$localizeFilter("liquidity_withdraw_balance_modal_warning")),1)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",h,Object(o["toDisplayString"])(e.$localizeFilter("liquidity_withdraw_balance_modal_warning_alternative")),1))]),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])(["basic-button submit-button",e.submitInProgress?"inactive":""]),onClick:t[2]||(t[2]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(o["toDisplayString"])(e.$localizeFilter("withdraw_funds")),3)])])])])}var w=i("ed09"),j=i("25a0"),g=i("e3e1"),f=i("e977");var v=Object(w["a"])({props:{withdrawToWallet:{type:Boolean,required:!0},titleOverride:{type:String,default:null},fromGoalsBalance:{type:Boolean,default:!1}},validations(){return{amount:{required:g["b"].withMessage(Object(f["a"])("field_must_not_be_empty"),g["h"]),numeric:g["b"].withMessage(Object(f["a"])("field_must_be_numeric"),g["h"]),minValue:g["b"].withMessage(Object(f["a"])("min_value",[this.minAmount]),Object(g["f"])(this.minAmount))}}},setup(){return{v$:Object(j["a"])()}},data:()=>({amount:"",minAmount:0,submitInProgress:!1}),methods:{closeModal(e){this.$emit("closeModal",e)},async submitHandler(){if(this.v$.$touch(),!this.v$.$error){this.submitInProgress=!0;try{const e={amount:this.amount,toWallet:this.withdrawToWallet,fromGoalsBalance:this.fromGoalsBalance};await this.$store.dispatch("withdrawLiquidityProvidingBalance",e),this.$message(Object(f["a"])("withdrawing_funds_successful")),this.$emit("closeModal"),setTimeout(()=>{this.submitInProgress=!1},1e3)}catch(e){this.$error(e),setTimeout(()=>{this.submitInProgress=!1},1e3)}}}},computed:{}}),k=(i("da17"),i("d959")),y=i.n(k);const $=y()(v,[["render",O],["__scopeId","data-v-65d1393c"]]);t["a"]=$},"188e":function(e,t,i){"use strict";var o=i("7a23");const c={class:"wallet-options"},a={style:{color:"#EAEAEA"}},n={class:"trigger-button"},l=["src"],s={key:0,class:"window light dropdown-block"},r=["onClick"];function d(e,t,d,m,u,b){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createElementVNode"])("div",{class:"window light trigger-block",onClick:t[0]||(t[0]=(...t)=>e.triggerDropdown&&e.triggerDropdown(...t))},[Object(o["createElementVNode"])("label",a,Object(o["toDisplayString"])(e.selectedIndex||0==e.selectedIndex?e.$store.getters.networkByTicker(e.options[e.selectedIndex]).networkName:e.$localizeFilter("specify_network")),1),Object(o["createElementVNode"])("button",n,[Object(o["createElementVNode"])("img",{style:{width:"10px",height:"6px"},src:i("3c15")},null,8,l)])]),e.isOpen?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",s,[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.options,(t,i)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:i,class:Object(o["normalizeClass"])(e.selectedIndex==i?"selected":""),onClick:o=>e.selectOption(t,i)},Object(o["toDisplayString"])(e.$store.getters.networkByTicker(t).networkName),11,r))),128))])])):Object(o["createCommentVNode"])("",!0)])}var m=i("ed09"),u=Object(m["a"])({props:["options"],data:()=>({isOpen:!1,selectedIndex:null}),setup(){},methods:{triggerDropdown(){this.isOpen=!this.isOpen},selectOption(e,t){this.selectedIndex=t,this.$emit("selectOption",e),this.isOpen=!1}}}),b=(i("3475"),i("d959")),p=i.n(b);const h=p()(u,[["render",d],["__scopeId","data-v-778375ea"]]);t["a"]=h},"1fec":function(e,t,i){},"24ac":function(e,t,i){"use strict";i("00aa")},"2b12":function(e,t,i){"use strict";i("592d")},3475:function(e,t,i){"use strict";i("f8c3")},"359b":function(e,t,i){e.exports=i.p+"media/income_sound.4e707068.mp3"},"44e7":function(e,t,i){var o=i("861d"),c=i("c6b6"),a=i("b622"),n=a("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==c(e))}},5166:function(e,t,i){"use strict";i("5b81");var o=i("7a23");const c={class:"liquidity-provider-withdraw-options"},a=["onClick"];function n(e,t,i,n,l,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createElementVNode"])("div",{class:"window light dropdown-block",style:Object(o["normalizeStyle"])(e.widthOverride?`width: ${e.widthOverride}px;`:"")},[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.options,(t,i)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:i,class:Object(o["normalizeClass"])(e.selectedIndex==i?"selected":""),onClick:t=>e.selectOption(i)},Object(o["toDisplayString"])(e.$localizeFilter(""+t.replaceAll("-","_"))),11,a))),128))])],4)])}var l=i("ed09"),s=Object(l["a"])({props:{widthOverride:{type:Number,default:null}},data:()=>({isOpen:!1,selectedIndex:null,options:["to-bonus-account","to-external-wallet"],walletBalance:0,bonusAccountBalance:0}),setup(){},methods:{triggerDropdown(){this.isOpen=!this.isOpen},selectOption(e){this.selectedIndex=e,this.$emit("selectOption",this.options[e]),this.$emit("close")}}}),r=(i("9b40"),i("d959")),d=i.n(r);const m=d()(s,[["render",n],["__scopeId","data-v-921e3c06"]]);t["a"]=m},"592d":function(e,t,i){},"5b81":function(e,t,i){"use strict";var o=i("23e7"),c=i("c65b"),a=i("e330"),n=i("1d80"),l=i("1626"),s=i("7234"),r=i("44e7"),d=i("577e"),m=i("dc4a"),u=i("90d8"),b=i("0cb2"),p=i("b622"),h=i("c430"),O=p("replace"),w=TypeError,j=a("".indexOf),g=a("".replace),f=a("".slice),v=Math.max,k=function(e,t,i){return i>e.length?-1:""===t?i:j(e,t,i)};o({target:"String",proto:!0},{replaceAll:function(e,t){var i,o,a,p,y,$,E,_,B,N=n(this),V=0,S=0,C="";if(!s(e)){if(i=r(e),i&&(o=d(n(u(e))),!~j(o,"g")))throw w("`.replaceAll` does not allow non-global regexes");if(a=m(e,O),a)return c(a,e,N,t);if(h&&i)return g(d(N),e,t)}p=d(N),y=d(e),$=l(t),$||(t=d(t)),E=y.length,_=v(1,E),V=k(p,y,0);while(-1!==V)B=$?d(t(y,V,p)):b(y,p,V,[],void 0,t),C+=f(p,S,V)+B,S=V+E,V=k(p,y,V+_);return S<p.length&&(C+=f(p,S)),C}})},6809:function(e,t,i){},"75b6":function(e,t,i){"use strict";i("5b81");var o=i("7a23");const c={class:"liquidity-provider-deposit-options"},a={class:"window light dropdown-block"},n=["onClick"],l={key:0,class:"option-balance"},s={key:1,class:"option-balance"};function r(e,t,i,r,d,m){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.options,(t,i)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:i,class:Object(o["normalizeClass"])(e.selectedIndex==i?"selected":""),onClick:t=>e.selectOption(i)},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$localizeFilter(""+t.replaceAll("-","_")))+" ",1),"from-wallet"===t?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,Object(o["toDisplayString"])(e.$localizeFilter("dropdown_balance",[e.$utils.formatNumber(e.walletBalance,"en-US",6,6)])),1)):Object(o["createCommentVNode"])("",!0),"from-bonus-account"===t?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",s,Object(o["toDisplayString"])(e.$localizeFilter("dropdown_balance",[e.$utils.formatNumber(e.bonusAccountBalance,"en-US",6,6)])),1)):Object(o["createCommentVNode"])("",!0)],10,n))),128))])])])}var d=i("ed09"),m=Object(d["a"])({props:[],data:()=>({isOpen:!1,selectedIndex:null,options:["from-wallet","from-bonus-account","from-external-wallet"],walletBalance:0,bonusAccountBalance:0}),setup(){},methods:{triggerDropdown(){this.isOpen=!this.isOpen},selectOption(e){this.selectedIndex=e,this.$emit("selectOption",this.options[e]),this.$emit("close")}},async mounted(){try{const{walletBalance:e,bonusAccountBalance:t}=await this.$store.dispatch("getLiquidityProviderDepositBalance");this.walletBalance=e/1e6,this.bonusAccountBalance=t/1e6}catch(e){}}}),u=(i("2b12"),i("d959")),b=i.n(u);const p=b()(m,[["render",r],["__scopeId","data-v-d5391724"]]);t["a"]=p},"80cc":function(e,t,i){},"854e":function(e,t,i){"use strict";i("6809")},"90d8":function(e,t,i){var o=i("c65b"),c=i("1a2d"),a=i("3a9b"),n=i("ad6d"),l=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in l||c(e,"flags")||!a(l,e)?t:o(n,e)}},"9b40":function(e,t,i){"use strict";i("80cc")},ad6d:function(e,t,i){"use strict";var o=i("825a");e.exports=function(){var e=o(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},d989:function(e,t,i){"use strict";var o=i("7a23");const c=e=>(Object(o["pushScopeId"])("data-v-af970456"),e=e(),Object(o["popScopeId"])(),e),a={class:"modal-layout"},n={class:"darken"},l={class:"new-modal-back-button-container"},s={class:"modal-content"},r={class:"window-title"},d={class:"window-text",style:{"margin-bottom":"35px"}},m={class:"bold"},u={class:"window-text"},b={class:"input-field"},p=["placeholder"],h={key:0,class:"end-timer-error"},O={class:"time"},w={key:0,class:"modal-warning"},j=c(()=>Object(o["createElementVNode"])("i",{class:"material-icons",style:{color:"#CA8920!important"}},"report",-1)),g={class:"window-text warning"};function f(e,t,i,c,f,v){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("div",{class:"new-modal bonus-withdrawal-modal",onClick:t[3]||(t[3]=Object(o["withModifiers"])(()=>{},["stop"]))},[Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("button",{class:"new-modal-back-button thin",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("p",r,Object(o["toDisplayString"])(e.$localizeFilter("withdrawal_confirmation")),1),Object(o["createElementVNode"])("p",d,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$localizeFilter("withdrawal_confirmation_text"))+" ",1),Object(o["createElementVNode"])("span",m,Object(o["toDisplayString"])(e.email),1)]),Object(o["createElementVNode"])("p",u,Object(o["toDisplayString"])(e.$localizeFilter("wallet_confirmation_label")),1),Object(o["createElementVNode"])("div",b,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"code",class:Object(o["normalizeClass"])(["custom-input",{invalid:e.v$.code.$error||e.showEndTimerError}]),placeholder:e.$localizeFilter("withdrawal_confirmation_input"),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.code=t)},null,10,p),[[o["vModelText"],e.code,void 0,{trim:!0}]]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.v$.code.$errors,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",{class:"error",key:t},Object(o["toDisplayString"])(e.$message),1))),128)),e.showEndTimerError?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",h,Object(o["toDisplayString"])(e.$localizeFilter("confirmation_code_time_ended")),1)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",O,Object(o["toDisplayString"])(e.$utils.formatTime(e.timeLeft,!1,!1)),1)]),e.commission>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",w,[j,Object(o["createElementVNode"])("p",g,Object(o["toDisplayString"])(e.$localizeFilter("commission")+" "+e.commissionFee+" "+e.coinTicker),1)])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])(["basic-button submit-button",e.submitInProgress?"inactive":""]),onClick:t[2]||(t[2]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(o["toDisplayString"])(e.$localizeFilter("confirm")),3)])])])])}var v=i("ed09"),k=i("25a0"),y=i("e3e1"),$=i("e977"),E=(i("188e"),i("fa7d")),_=Object(v["a"])({props:["withdrawId","commission","coinTicker"],validations(){return{code:{required:y["b"].withMessage(Object($["a"])("field_must_not_be_empty"),y["h"]),numeric:y["b"].withMessage(Object($["a"])("field_must_be_numeric"),y["h"])}}},setup(){return{v$:Object(k["a"])()}},watch:{timeLeft(e,t){e<=0&&this.$nextTick(()=>{this.timerEnded()})}},data:()=>({showEndTimerError:!1,code:"",submitInProgress:!1}),methods:{runTimer(){const e=+new Date+3e5;this.$store.dispatch("runConfirmationCodeTimer",{timestamp:e}),document.addEventListener("visibilitychange",(function(){document.hidden?this.$store.dispatch("stopConfirmationCodeTimer"):this.$store.dispatch("runConfirmationCodeTimer",{timestamp:e})}))},stopTimer(){this.$store.dispatch("stopConfirmationCodeTimer")},timerEnded(){this.showEndTimerError=!0},closeModal(e){this.cancelRequest({id:this.withdrawId}),this.$emit("closeModal",e)},async cancelRequest(e){try{await this.$store.dispatch("cancelWithdrawBalanceRequest",{requestId:e.id}),this.$message(Object($["a"])("application_calceled"))}catch(t){this.$error(t)}},async submitHandler(){if(this.v$.$touch(),!this.v$.$error){this.submitInProgress=!0;try{const e={withdrawBalanceRequestId:this.withdrawId,confirmationCode:this.code};await this.$store.dispatch("confirmWithdrawBalanceRequest",e),this.$message(Object($["a"])("withdraw_successfull")),this.$emit("closeModal"),setTimeout(()=>{this.submitInProgress=!1},1e3)}catch(e){this.$error(e),setTimeout(()=>{this.submitInProgress=!1},1e3)}}},async selectNetwork(e){await this.$store.dispatch("setWithdrawFromWalletNetwork",{network:e})},getNetworkByTicker(e){return null===this.network?null:this.$store.getters.networkByTicker(e)}},computed:{email(){var e;return null===(e=this.$store.getters.profile)||void 0===e?void 0:e.email},timeLeft(){return this.$store.state.info.confirmationCodeTimeLeft},networksForCoin(){return this.$store.getters.networksForCoin(this.coinTicker)},network(){return this.$store.getters.withdrawFromWalletNetwork},commissionFee(){return console.log(this.$store.getters.assetDecimalsMap[this.coinTicker],this.commission),+E["a"].displayBigIntAsDecimal(this.commission,this.$store.getters.assetDecimalsMap[this.coinTicker],this.$store.getters.assetDecimalsMap[this.coinTicker].toString().length-1)}},mounted(){this.runTimer()},unmounted(){this.stopTimer()}}),B=(i("854e"),i("d959")),N=i.n(B);const V=N()(_,[["render",f],["__scopeId","data-v-af970456"]]);t["a"]=V},da17:function(e,t,i){"use strict";i("1fec")},db1b:function(e,t,i){"use strict";var o=i("7a23"),c=i("359b"),a=i.n(c);const n=e=>(Object(o["pushScopeId"])("data-v-5f8510a2"),e=e(),Object(o["popScopeId"])(),e),l={class:"amount"},s={class:"title"},r={key:0,class:"highlight-block"},d=["src"],m={class:"amount"},u={key:0,class:"withdraw-block absolute"},b={class:"withdraw-left-block"},p={class:"available-to-withdraw"},h={class:"comission"},O={key:1,class:"withdraw-block absolute"},w={key:0,class:"withdraw-left-block"},j={class:"available-to-withdraw"},g={class:"comission"},f={key:1,class:"withdraw-left-block"},v={class:"available-to-withdraw"},k={class:"comission"},y=n(()=>Object(o["createElementVNode"])("audio",null,[Object(o["createElementVNode"])("source",{src:a.a,type:"audio/mpeg"})],-1));function $(e,t,i,c,a,n){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[Object(o["createElementVNode"])("div",s,Object(o["toDisplayString"])(e.title),1),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(`amount-block ${e.color} ${e.classOverride} ${e.classByType}`)},[e.showHighlight?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("img",{class:"amount-image",src:e.amountImage},null,8,d),Object(o["createElementVNode"])("div",m,Object(o["toDisplayString"])(e.formattedAmount)+" "+Object(o["toDisplayString"])(e.unit),1)],2),"withdraw-available"===e.classOverride?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",u,[Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("div",p,Object(o["toDisplayString"])(e.$localizeFilter("available_to_withdraw",[e.$utils.formatNumber(e.availableProfitToWithdraw,"en-US",6,6)+" USDT"])),1),Object(o["createElementVNode"])("div",h,Object(o["toDisplayString"])(e.$localizeFilter("comission_1_usdt")),1)]),Object(o["createElementVNode"])("button",{class:"underline-button withdraw-button",onClick:t[0]||(t[0]=(...t)=>e.liquidityProvidingWithdrawProfit&&e.liquidityProvidingWithdrawProfit(...t))},Object(o["toDisplayString"])(e.$localizeFilter("withdraw")),1)])):Object(o["createCommentVNode"])("",!0),"gift"===e.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",O,[e.giftPercent?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",w,[Object(o["createElementVNode"])("div",j,Object(o["toDisplayString"])(e.$localizeFilter("give_a_present_as_percent",[""+e.$utils.formatNumber(e.giftPercent,"en-US",1,1)])),1),Object(o["createElementVNode"])("div",g,Object(o["toDisplayString"])(e.$localizeFilter("give_a_present_as_percent_subtitle")),1)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",f,[Object(o["createElementVNode"])("div",v,Object(o["toDisplayString"])(e.$localizeFilter("give_a_present_not_avalilable")),1),Object(o["createElementVNode"])("div",k,Object(o["toDisplayString"])(e.$localizeFilter("give_a_present_not_avalilable_subtitle")),1)])),e.amount>0&&e.giftPercent?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:2,class:"underline-button",onClick:t[1]||(t[1]=(...t)=>e.showGiftModal&&e.showGiftModal(...t))},Object(o["toDisplayString"])(e.$localizeFilter("send")),1)):Object(o["createCommentVNode"])("",!0)])):Object(o["createCommentVNode"])("",!0),y])}i("252a");var E=i("ed09"),_=i("1209"),B=(i("fa7d"),i("e977"));const N=i("359b");var V=Object(E["a"])({props:{classOverride:{type:String,default:""},amount:{type:Number,required:!0},availableProfitToWithdraw:{type:Number,default:0},title:{type:String,required:!0},color:{type:String,required:!0},type:{type:String,default:null},soundEnabled:{type:Boolean,default:!1},giftPercent:{type:Number,default:0}},watch:{amount(e,t){e!==t&&this.$nextTick(()=>{"income"===(null===this||void 0===this?void 0:this.type)?this.index>0?(this.count=t,this.setCount(e)):(this.index=1,this.count=e):"arbitrationTotalIncome"===this.type?this.index>0&&e>t?(this.count=t,this.setCount(e),this.animateHighlight(),this.soundEnabled&&this.play()):(this.index=1,this.count=e):this.count=e})}},setup(){const e=new Audio(N);function t(){e.muted=!1,e.play()}return e.muted=!0,{play:t}},data:()=>({count:0,index:0,showHighlight:!1}),methods:{showGiftModal(){this.$emit("showGiftModal")},animateHighlight(){!1===this.showHighlight&&(this.showHighlight=!0,setTimeout(()=>{this.showHighlight=!1},4500))},setCount(e){const t={n:this.count};Object(_["a"])({targets:t,n:e,round:1,duration:3e3,easing:"linear",update:()=>{this.count=t.n}})},async liquidityProvidingWithdrawProfit(){try{await this.$store.dispatch("liquidityProvidingWithdrawProfit"),this.$message(Object(B["a"])("liquidity_withdraw_successfull")),this.$emit("reloadData")}catch(e){this.$error(e)}}},computed:{formattedAmount(){return"gift"===this.type?this.count:(this.count/1e6).toFixed(6)},amountImage(){return"gift"===this.type?i("3897"):i("1c8f")},classByType(){return"gift"===this.type?"gift":""},unit(){return"gift"===this.type?Object(B["a"])("gifts"):"USDT"}},mounted(){"income"!==this.type&&(this.count=this.amount)}}),S=(i("24ac"),i("d959")),C=i.n(S);const x=C()(V,[["render",$],["__scopeId","data-v-5f8510a2"]]);t["a"]=x},f8c3:function(e,t,i){}}]);
//# sourceMappingURL=chunk-f33772b6.7c4f96b1.js.map