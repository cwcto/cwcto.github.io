(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dfd9758"],{"0cb2":function(e,t,c){var o=c("e330"),i=c("7b0b"),n=Math.floor,s=o("".charAt),r=o("".replace),l=o("".slice),a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,c,o,m,u){var b=c+e.length,p=o.length,h=d;return void 0!==m&&(m=i(m),h=a),r(u,h,(function(i,r){var a;switch(s(r,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,c);case"'":return l(t,b);case"<":a=m[l(r,1,-1)];break;default:var d=+r;if(0===d)return i;if(d>p){var u=n(d/10);return 0===u?i:u<=p?void 0===o[u-1]?s(r,1):o[u-1]+s(r,1):i}a=o[d-1]}return void 0===a?"":a}))}},"188e":function(e,t,c){"use strict";var o=c("7a23");const i={class:"wallet-options"},n={style:{color:"#EAEAEA"}},s={class:"trigger-button"},r=["src"],l={key:0,class:"window light dropdown-block"},a=["onClick"];function d(e,t,d,m,u,b){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createElementVNode"])("div",{class:"window light trigger-block",onClick:t[0]||(t[0]=(...t)=>e.triggerDropdown&&e.triggerDropdown(...t))},[Object(o["createElementVNode"])("label",n,Object(o["toDisplayString"])(e.selectedIndex||0==e.selectedIndex?e.$store.getters.networkByTicker(e.options[e.selectedIndex]).networkName:e.$localizeFilter("specify_network")),1),Object(o["createElementVNode"])("button",s,[Object(o["createElementVNode"])("img",{src:c("d8fa")},null,8,r)])]),e.isOpen?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.options,(t,c)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:c,class:Object(o["normalizeClass"])(e.selectedIndex==c?"selected":""),onClick:o=>e.selectOption(t,c)},Object(o["toDisplayString"])(e.$store.getters.networkByTicker(t).networkName),11,a))),128))])])):Object(o["createCommentVNode"])("",!0)])}var m=c("ed09"),u=Object(m["a"])({props:["options"],data:()=>({isOpen:!1,selectedIndex:null}),setup(){},methods:{triggerDropdown(){this.isOpen=!this.isOpen},selectOption(e,t){this.selectedIndex=t,this.$emit("selectOption",e),this.isOpen=!1}}}),b=(c("341a"),c("d959")),p=c.n(b);const h=p()(u,[["render",d],["__scopeId","data-v-46b624ed"]]);t["a"]=h},2792:function(e,t,c){"use strict";c("5540")},"341a":function(e,t,c){"use strict";c("6c6e")},"359b":function(e,t,c){e.exports=c.p+"media/income_sound.4e707068.mp3"},"43b3":function(e,t,c){"use strict";c("4978")},"44e7":function(e,t,c){var o=c("861d"),i=c("c6b6"),n=c("b622"),s=n("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==i(e))}},4978:function(e,t,c){},"4aa9":function(e,t,c){"use strict";c("5b81");var o=c("7a23");const i={class:"liquidity-provider-withdraw-options"},n=["onClick"];function s(e,t,c,s,r,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createElementVNode"])("div",{class:"window light dropdown-block",style:Object(o["normalizeStyle"])(e.widthOverride?`width: ${e.widthOverride}px;`:"")},[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.options,(t,c)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:c,class:Object(o["normalizeClass"])(e.selectedIndex==c?"selected":""),onClick:t=>e.selectOption(c)},Object(o["toDisplayString"])(e.$localizeFilter(""+t.replaceAll("-","_"))),11,n))),128))])],4)])}var r=c("ed09"),l=Object(r["a"])({props:{widthOverride:{type:Number,default:null}},data:()=>({isOpen:!1,selectedIndex:null,options:["to-bonus-account","to-external-wallet"],walletBalance:0,bonusAccountBalance:0}),setup(){},methods:{triggerDropdown(){this.isOpen=!this.isOpen},selectOption(e){this.selectedIndex=e,this.$emit("selectOption",this.options[e]),this.$emit("close")}}}),a=(c("fd2e"),c("d959")),d=c.n(a);const m=d()(l,[["render",s],["__scopeId","data-v-57f8e34c"]]);t["a"]=m},5540:function(e,t,c){},"5b81":function(e,t,c){"use strict";var o=c("23e7"),i=c("c65b"),n=c("e330"),s=c("1d80"),r=c("1626"),l=c("7234"),a=c("44e7"),d=c("577e"),m=c("dc4a"),u=c("90d8"),b=c("0cb2"),p=c("b622"),h=c("c430"),O=p("replace"),w=TypeError,j=n("".indexOf),g=n("".replace),f=n("".slice),k=Math.max,v=function(e,t,c){return c>e.length?-1:""===t?c:j(e,t,c)};o({target:"String",proto:!0},{replaceAll:function(e,t){var c,o,n,p,$,y,B,E,N,x=s(this),C=0,T=0,_="";if(!l(e)){if(c=a(e),c&&(o=d(s(u(e))),!~j(o,"g")))throw w("`.replaceAll` does not allow non-global regexes");if(n=m(e,O),n)return i(n,e,x,t);if(h&&c)return g(d(x),e,t)}p=d(x),$=d(e),y=r(t),y||(t=d(t)),B=$.length,E=k(1,B),C=v(p,$,0);while(-1!==C)N=y?d(t($,C,p)):b($,p,C,[],void 0,t),_+=f(p,T,C)+N,T=C+B,C=v(p,$,C+E);return T<p.length&&(_+=f(p,T)),_}})},"64dd":function(e,t,c){e.exports=c.p+"img/warning-label.fe958b18.svg"},"6c6e":function(e,t,c){},"90d8":function(e,t,c){var o=c("c65b"),i=c("1a2d"),n=c("3a9b"),s=c("ad6d"),r=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in r||i(e,"flags")||!n(r,e)?t:o(s,e)}},a242:function(e,t,c){"use strict";c("5b81");var o=c("7a23");const i={class:"liquidity-provider-deposit-options"},n={class:"window light dropdown-block"},s=["onClick"],r={key:0,class:"option-balance"},l={key:1,class:"option-balance"};function a(e,t,c,a,d,m){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.options,(t,c)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:c,class:Object(o["normalizeClass"])(e.selectedIndex==c?"selected":""),onClick:t=>e.selectOption(c)},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$localizeFilter(""+t.replaceAll("-","_")))+" ",1),"from-wallet"===t?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,Object(o["toDisplayString"])(e.$localizeFilter("dropdown_balance",[e.$utils.formatNumber(e.walletBalance,"en-US",6,6)+" "+e.currencyCode])),1)):Object(o["createCommentVNode"])("",!0),"from-bonus-account"===t?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,Object(o["toDisplayString"])(e.$localizeFilter("dropdown_balance",[e.$utils.formatNumber(e.bonusAccountBalance,"en-US",6,6)+" "+e.currencyCode])),1)):Object(o["createCommentVNode"])("",!0)],10,s))),128))])])])}var d=c("ed09"),m=Object(d["a"])({props:{from:{type:String,default:"providing"},currencyCode:{type:String,default:"USDT"}},data:()=>({isOpen:!1,selectedIndex:null,options:["from-wallet","from-bonus-account","from-external-wallet"],walletBalance:0,bonusAccountBalance:0}),setup(){},methods:{triggerDropdown(){this.isOpen=!this.isOpen},selectOption(e){this.selectedIndex=e;let t=null;0==this.selectedIndex?t=this.walletBalance:1==this.selectedIndex&&(t=this.bonusAccountBalance),this.$emit("selectOption",this.options[e],t),this.$emit("close")}},async mounted(){if("providing"===this.from)try{const{walletBalance:e,bonusAccountBalance:t}=await this.$store.dispatch("getLiquidityProviderDepositBalance");this.walletBalance=e/1e6,this.bonusAccountBalance=t/1e6}catch(e){}else try{const{walletBalance:e,bonusAccountBalance:t}=await this.$store.dispatch("getStakingDepositBalance",{currencyCode:"CWPT"});this.walletBalance=e/1e6,this.bonusAccountBalance=t/1e6}catch(e){}}}),u=(c("2792"),c("d959")),b=c.n(u);const p=b()(m,[["render",a],["__scopeId","data-v-4c37c1d6"]]);t["a"]=p},ad6d:function(e,t,c){"use strict";var o=c("825a");e.exports=function(){var e=o(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},d8fa:function(e,t,c){e.exports=c.p+"img/double-arrows-white.1a2039dc.svg"},d989:function(e,t,c){"use strict";var o=c("7a23"),i=c("64dd"),n=c.n(i);const s=e=>(Object(o["pushScopeId"])("data-v-5a9e6e2b"),e=e(),Object(o["popScopeId"])(),e),r={class:"modal-layout"},l={class:"darken"},a={class:"new-modal-back-button-container"},d={class:"modal-content"},m={class:"window-title"},u={class:"window-text",style:{"margin-bottom":"35px"}},b={class:"bold"},p={class:"window-text"},h={class:"input-field"},O=["placeholder"],w={key:0,class:"end-timer-error"},j={class:"time"},g={key:0,class:"modal-warning"},f=s(()=>Object(o["createElementVNode"])("img",{class:"warning-label",src:n.a,alt:""},null,-1)),k={class:"window-text warning"};function v(e,t,c,i,n,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("div",{class:"new-modal bonus-withdrawal-modal",onClick:t[3]||(t[3]=Object(o["withModifiers"])(()=>{},["stop"]))},[Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("button",{class:"new-modal-back-button thin",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("p",m,Object(o["toDisplayString"])(e.$localizeFilter("withdrawal_confirmation")),1),Object(o["createElementVNode"])("p",u,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$localizeFilter("withdrawal_confirmation_text"))+" ",1),Object(o["createElementVNode"])("span",b,Object(o["toDisplayString"])(e.email),1)]),Object(o["createElementVNode"])("p",p,Object(o["toDisplayString"])(e.$localizeFilter("wallet_confirmation_label")),1),Object(o["createElementVNode"])("div",h,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"code",class:Object(o["normalizeClass"])(["input-class",{invalid:e.v$.code.$error||e.showEndTimerError}]),placeholder:e.$localizeFilter("withdrawal_confirmation_input"),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.code=t)},null,10,O),[[o["vModelText"],e.code,void 0,{trim:!0}]]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.v$.code.$errors,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",{class:"error",key:t},Object(o["toDisplayString"])(e.$message),1))),128)),e.showEndTimerError?(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",w,Object(o["toDisplayString"])(e.$localizeFilter("confirmation_code_time_ended")),1)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",j,Object(o["toDisplayString"])(e.$utils.formatTime(e.timeLeft,!1,!1)),1)]),e.commission>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",g,[f,Object(o["createElementVNode"])("p",k,Object(o["toDisplayString"])(e.$localizeFilter("commission")+" "+e.commissionFee+" "+e.coinTicker),1)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])(["basic-button submit-button",e.submitInProgress?"inactive":""]),onClick:t[2]||(t[2]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(o["toDisplayString"])(e.$localizeFilter("confirm")),3)])])])}var $=c("ed09"),y=c("25a0"),B=c("e3e1"),E=c("e977"),N=(c("188e"),c("fa7d")),x=Object($["a"])({props:["withdrawId","commission","coinTicker"],validations(){return{code:{required:B["b"].withMessage(Object(E["a"])("field_must_not_be_empty"),B["h"]),numeric:B["b"].withMessage(Object(E["a"])("field_must_be_numeric"),B["h"])}}},setup(){return{v$:Object(y["a"])()}},watch:{timeLeft(e,t){e<=0&&this.$nextTick(()=>{this.timerEnded()})}},data:()=>({showEndTimerError:!1,code:"",submitInProgress:!1}),methods:{runTimer(){const e=+new Date+3e5;this.$store.dispatch("runConfirmationCodeTimer",{timestamp:e}),document.addEventListener("visibilitychange",(function(){document.hidden?this.$store.dispatch("stopConfirmationCodeTimer"):this.$store.dispatch("runConfirmationCodeTimer",{timestamp:e})}))},stopTimer(){this.$store.dispatch("stopConfirmationCodeTimer")},timerEnded(){this.showEndTimerError=!0},closeModal(e){this.cancelRequest({id:this.withdrawId}),this.$emit("closeModal",e)},async cancelRequest(e){try{await this.$store.dispatch("cancelWithdrawBalanceRequest",{requestId:e.id}),this.$message(Object(E["a"])("application_calceled"))}catch(t){this.$error(t)}},async submitHandler(){if(this.v$.$touch(),!this.v$.$error){this.submitInProgress=!0;try{const e={withdrawBalanceRequestId:this.withdrawId,confirmationCode:this.code};await this.$store.dispatch("confirmWithdrawBalanceRequest",e),this.$message(Object(E["a"])("withdraw_successfull")),this.$emit("closeModal"),setTimeout(()=>{this.submitInProgress=!1},1e3)}catch(e){this.$error(e),setTimeout(()=>{this.submitInProgress=!1},1e3)}}},async selectNetwork(e){await this.$store.dispatch("setWithdrawFromWalletNetwork",{network:e})},getNetworkByTicker(e){return null===this.network?null:this.$store.getters.networkByTicker(e)}},computed:{email(){var e;return null===(e=this.$store.getters.profile)||void 0===e?void 0:e.email},timeLeft(){return this.$store.state.info.confirmationCodeTimeLeft},networksForCoin(){return this.$store.getters.networksForCoin(this.coinTicker)},network(){return this.$store.getters.withdrawFromWalletNetwork},commissionFee(){return console.log(this.$store.getters.assetDecimalsMap[this.coinTicker],this.commission),+N["a"].displayBigIntAsDecimal(this.commission,this.$store.getters.assetDecimalsMap[this.coinTicker],this.$store.getters.assetDecimalsMap[this.coinTicker].toString().length-1)}},mounted(){this.runTimer()},unmounted(){this.stopTimer()}}),C=(c("43b3"),c("d959")),T=c.n(C);const _=T()(x,[["render",v],["__scopeId","data-v-5a9e6e2b"]]);t["a"]=_},e311:function(e,t,c){},fd2e:function(e,t,c){"use strict";c("e311")}}]);
//# sourceMappingURL=chunk-2dfd9758.e23c435c.js.map