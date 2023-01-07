(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26fa6fc6"],{"00aa":function(e,t,i){},"0cb2":function(e,t,i){var a=i("e330"),o=i("7b0b"),c=Math.floor,l=a("".charAt),n=a("".replace),s=a("".slice),r=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,i,a,u,b){var m=i+e.length,p=a.length,h=d;return void 0!==u&&(u=o(u),h=r),n(b,h,(function(o,n){var r;switch(l(n,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,i);case"'":return s(t,m);case"<":r=u[s(n,1,-1)];break;default:var d=+n;if(0===d)return o;if(d>p){var b=c(d/10);return 0===b?o:b<=p?void 0===a[b-1]?l(n,1):a[b-1]+l(n,1):o}r=a[d-1]}return void 0===r?"":r}))}},"11a6":function(e,t,i){"use strict";var a=i("7a23");const o=e=>(Object(a["pushScopeId"])("data-v-6defa0fa"),e=e(),Object(a["popScopeId"])(),e),c={class:"modal-layout"},l={class:"new-modal-back-button-container"},n={class:"modal-content"},s={class:"window-title"},r={class:"window-text"},d={class:"input-field"},u=["placeholder"],b={class:"modal-warning"},m=o(()=>Object(a["createElementVNode"])("i",{class:"material-icons",style:{color:"#FF9400!important"}},"report",-1)),p={key:0,class:"window-text warning"},h={key:1,class:"window-text warning"};function O(e,t,i,o,O,j){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("div",{class:"darken",onClick:t[4]||(t[4]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(a["createElementVNode"])("div",{class:"new-modal liquidity-deposit-modal",onClick:t[3]||(t[3]=Object(a["withModifiers"])(()=>{},["stop"]))},[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("button",{class:"new-modal-back-button thin",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("p",s,Object(a["toDisplayString"])(e.titleOverride||e.$localizeFilter("withdraw_funds_from_liquidity_balance")),1),Object(a["createElementVNode"])("p",r,Object(a["toDisplayString"])(e.$localizeFilter("liquidity_withdraw_balance_modal_text_amount",["USDT"])),1),Object(a["createElementVNode"])("div",d,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{id:"amount",class:Object(a["normalizeClass"])(["custom-input",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("amount_in",["USDT"]),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t)},null,10,u),[[a["vModelText"],e.amount,void 0,{trim:!0}]]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.v$.amount.$errors,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("small",{class:"error",key:t},Object(a["toDisplayString"])(e.$message),1))),128))]),Object(a["createElementVNode"])("div",b,[m,!1===e.withdrawToWallet?(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",p,Object(a["toDisplayString"])(e.$localizeFilter("liquidity_withdraw_balance_modal_warning")),1)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",h,Object(a["toDisplayString"])(e.$localizeFilter("liquidity_withdraw_balance_modal_warning_alternative")),1))]),Object(a["createElementVNode"])("button",{class:Object(a["normalizeClass"])(["basic-button submit-button",e.submitInProgress?"inactive":""]),onClick:t[2]||(t[2]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(a["toDisplayString"])(e.$localizeFilter("withdraw_funds")),3)])])])])}var j=i("ed09"),w=i("25a0"),g=i("e3e1"),f=i("e977");var v=Object(j["a"])({props:{withdrawToWallet:{type:Boolean,required:!0},titleOverride:{type:String,default:null},fromGoalsBalance:{type:Boolean,default:!1}},validations(){return{amount:{required:g["b"].withMessage(Object(f["a"])("field_must_not_be_empty"),g["h"]),numeric:g["b"].withMessage(Object(f["a"])("field_must_be_numeric"),g["h"]),minValue:g["b"].withMessage(Object(f["a"])("min_value",[this.minAmount]),Object(g["f"])(this.minAmount))}}},setup(){return{v$:Object(w["a"])()}},data:()=>({amount:"",minAmount:0,submitInProgress:!1}),methods:{closeModal(e){this.$emit("closeModal",e)},async submitHandler(){if(this.v$.$touch(),!this.v$.$error){this.submitInProgress=!0;try{const e={amount:this.amount,toWallet:this.withdrawToWallet,fromGoalsBalance:this.fromGoalsBalance};await this.$store.dispatch("withdrawLiquidityProvidingBalance",e),this.$message(Object(f["a"])("withdrawing_funds_successful")),this.$emit("closeModal"),setTimeout(()=>{this.submitInProgress=!1},1e3)}catch(e){this.$error(e),setTimeout(()=>{this.submitInProgress=!1},1e3)}}}},computed:{}}),y=(i("4240"),i("d959")),k=i.n(y);const _=k()(v,[["render",O],["__scopeId","data-v-6defa0fa"]]);t["a"]=_},"15c9":function(e,t,i){},"24ac":function(e,t,i){"use strict";i("00aa")},"2b12":function(e,t,i){"use strict";i("592d")},"359b":function(e,t,i){e.exports=i.p+"media/income_sound.4e707068.mp3"},4240:function(e,t,i){"use strict";i("15c9")},"44e7":function(e,t,i){var a=i("861d"),o=i("c6b6"),c=i("b622"),l=c("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[l])?!!t:"RegExp"==o(e))}},5166:function(e,t,i){"use strict";i("5b81");var a=i("7a23");const o={class:"liquidity-provider-withdraw-options"},c=["onClick"];function l(e,t,i,l,n,s){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createElementVNode"])("div",{class:"window light dropdown-block",style:Object(a["normalizeStyle"])(e.widthOverride?`width: ${e.widthOverride}px;`:"")},[Object(a["createElementVNode"])("ul",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.options,(t,i)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:i,class:Object(a["normalizeClass"])(e.selectedIndex==i?"selected":""),onClick:t=>e.selectOption(i)},Object(a["toDisplayString"])(e.$localizeFilter(""+t.replaceAll("-","_"))),11,c))),128))])],4)])}var n=i("ed09"),s=Object(n["a"])({props:{widthOverride:{type:Number,default:null}},data:()=>({isOpen:!1,selectedIndex:null,options:["to-bonus-account","to-external-wallet"],walletBalance:0,bonusAccountBalance:0}),setup(){},methods:{triggerDropdown(){this.isOpen=!this.isOpen},selectOption(e){this.selectedIndex=e,this.$emit("selectOption",this.options[e]),this.$emit("close")}}}),r=(i("9b40"),i("d959")),d=i.n(r);const u=d()(s,[["render",l],["__scopeId","data-v-921e3c06"]]);t["a"]=u},"592d":function(e,t,i){},"5b81":function(e,t,i){"use strict";var a=i("23e7"),o=i("c65b"),c=i("e330"),l=i("1d80"),n=i("1626"),s=i("7234"),r=i("44e7"),d=i("577e"),u=i("dc4a"),b=i("90d8"),m=i("0cb2"),p=i("b622"),h=i("c430"),O=p("replace"),j=TypeError,w=c("".indexOf),g=c("".replace),f=c("".slice),v=Math.max,y=function(e,t,i){return i>e.length?-1:""===t?i:w(e,t,i)};a({target:"String",proto:!0},{replaceAll:function(e,t){var i,a,c,p,k,_,B,$,E,N=l(this),S=0,V=0,x="";if(!s(e)){if(i=r(e),i&&(a=d(l(b(e))),!~w(a,"g")))throw j("`.replaceAll` does not allow non-global regexes");if(c=u(e,O),c)return o(c,e,N,t);if(h&&i)return g(d(N),e,t)}p=d(N),k=d(e),_=n(t),_||(t=d(t)),B=k.length,$=v(1,B),S=y(p,k,0);while(-1!==S)E=_?d(t(k,S,p)):m(k,p,S,[],void 0,t),x+=f(p,V,S)+E,V=S+B,S=y(p,k,S+$);return V<p.length&&(x+=f(p,V)),x}})},"75b6":function(e,t,i){"use strict";i("5b81");var a=i("7a23");const o={class:"liquidity-provider-deposit-options"},c={class:"window light dropdown-block"},l=["onClick"],n={key:0,class:"option-balance"},s={key:1,class:"option-balance"};function r(e,t,i,r,d,u){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("ul",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.options,(t,i)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:i,class:Object(a["normalizeClass"])(e.selectedIndex==i?"selected":""),onClick:t=>e.selectOption(i)},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$localizeFilter(""+t.replaceAll("-","_")))+" ",1),"from-wallet"===t?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,Object(a["toDisplayString"])(e.$localizeFilter("dropdown_balance",[e.$utils.formatNumber(e.walletBalance,"en-US",6,6)])),1)):Object(a["createCommentVNode"])("",!0),"from-bonus-account"===t?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,Object(a["toDisplayString"])(e.$localizeFilter("dropdown_balance",[e.$utils.formatNumber(e.bonusAccountBalance,"en-US",6,6)])),1)):Object(a["createCommentVNode"])("",!0)],10,l))),128))])])])}var d=i("ed09"),u=Object(d["a"])({props:[],data:()=>({isOpen:!1,selectedIndex:null,options:["from-wallet","from-bonus-account","from-external-wallet"],walletBalance:0,bonusAccountBalance:0}),setup(){},methods:{triggerDropdown(){this.isOpen=!this.isOpen},selectOption(e){this.selectedIndex=e,this.$emit("selectOption",this.options[e]),this.$emit("close")}},async mounted(){try{const{walletBalance:e,bonusAccountBalance:t}=await this.$store.dispatch("getLiquidityProviderDepositBalance");this.walletBalance=e/1e6,this.bonusAccountBalance=t/1e6}catch(e){}}}),b=(i("2b12"),i("d959")),m=i.n(b);const p=m()(u,[["render",r],["__scopeId","data-v-d5391724"]]);t["a"]=p},"80cc":function(e,t,i){},"90d8":function(e,t,i){var a=i("c65b"),o=i("1a2d"),c=i("3a9b"),l=i("ad6d"),n=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in n||o(e,"flags")||!c(n,e)?t:a(l,e)}},"9b40":function(e,t,i){"use strict";i("80cc")},ad6d:function(e,t,i){"use strict";var a=i("825a");e.exports=function(){var e=a(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},db1b:function(e,t,i){"use strict";var a=i("7a23"),o=i("359b"),c=i.n(o);const l=e=>(Object(a["pushScopeId"])("data-v-5f8510a2"),e=e(),Object(a["popScopeId"])(),e),n={class:"amount"},s={class:"title"},r={key:0,class:"highlight-block"},d=["src"],u={class:"amount"},b={key:0,class:"withdraw-block absolute"},m={class:"withdraw-left-block"},p={class:"available-to-withdraw"},h={class:"comission"},O={key:1,class:"withdraw-block absolute"},j={key:0,class:"withdraw-left-block"},w={class:"available-to-withdraw"},g={class:"comission"},f={key:1,class:"withdraw-left-block"},v={class:"available-to-withdraw"},y={class:"comission"},k=l(()=>Object(a["createElementVNode"])("audio",null,[Object(a["createElementVNode"])("source",{src:c.a,type:"audio/mpeg"})],-1));function _(e,t,i,o,c,l){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createElementVNode"])("div",s,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(`amount-block ${e.color} ${e.classOverride} ${e.classByType}`)},[e.showHighlight?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("img",{class:"amount-image",src:e.amountImage},null,8,d),Object(a["createElementVNode"])("div",u,Object(a["toDisplayString"])(e.formattedAmount)+" "+Object(a["toDisplayString"])(e.unit),1)],2),"withdraw-available"===e.classOverride?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",b,[Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("div",p,Object(a["toDisplayString"])(e.$localizeFilter("available_to_withdraw",[e.$utils.formatNumber(e.availableProfitToWithdraw,"en-US",6,6)+" USDT"])),1),Object(a["createElementVNode"])("div",h,Object(a["toDisplayString"])(e.$localizeFilter("comission_1_usdt")),1)]),Object(a["createElementVNode"])("button",{class:"underline-button withdraw-button",onClick:t[0]||(t[0]=(...t)=>e.liquidityProvidingWithdrawProfit&&e.liquidityProvidingWithdrawProfit(...t))},Object(a["toDisplayString"])(e.$localizeFilter("withdraw")),1)])):Object(a["createCommentVNode"])("",!0),"gift"===e.type?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",O,[e.giftPercent?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",j,[Object(a["createElementVNode"])("div",w,Object(a["toDisplayString"])(e.$localizeFilter("give_a_present_as_percent",[""+e.$utils.formatNumber(e.giftPercent,"en-US",1,1)])),1),Object(a["createElementVNode"])("div",g,Object(a["toDisplayString"])(e.$localizeFilter("give_a_present_as_percent_subtitle")),1)])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",f,[Object(a["createElementVNode"])("div",v,Object(a["toDisplayString"])(e.$localizeFilter("give_a_present_not_avalilable")),1),Object(a["createElementVNode"])("div",y,Object(a["toDisplayString"])(e.$localizeFilter("give_a_present_not_avalilable_subtitle")),1)])),e.amount>0&&e.giftPercent?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:2,class:"underline-button",onClick:t[1]||(t[1]=(...t)=>e.showGiftModal&&e.showGiftModal(...t))},Object(a["toDisplayString"])(e.$localizeFilter("send")),1)):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0),k])}i("252a");var B=i("ed09"),$=i("1209"),E=(i("fa7d"),i("e977"));const N=i("359b");var S=Object(B["a"])({props:{classOverride:{type:String,default:""},amount:{type:Number,required:!0},availableProfitToWithdraw:{type:Number,default:0},title:{type:String,required:!0},color:{type:String,required:!0},type:{type:String,default:null},soundEnabled:{type:Boolean,default:!1},giftPercent:{type:Number,default:0}},watch:{amount(e,t){e!==t&&this.$nextTick(()=>{"income"===(null===this||void 0===this?void 0:this.type)?this.index>0?(this.count=t,this.setCount(e)):(this.index=1,this.count=e):"arbitrationTotalIncome"===this.type?this.index>0&&e>t?(this.count=t,this.setCount(e),this.animateHighlight(),this.soundEnabled&&this.play()):(this.index=1,this.count=e):this.count=e})}},setup(){const e=new Audio(N);function t(){e.muted=!1,e.play()}return e.muted=!0,{play:t}},data:()=>({count:0,index:0,showHighlight:!1}),methods:{showGiftModal(){this.$emit("showGiftModal")},animateHighlight(){!1===this.showHighlight&&(this.showHighlight=!0,setTimeout(()=>{this.showHighlight=!1},4500))},setCount(e){const t={n:this.count};Object($["a"])({targets:t,n:e,round:1,duration:3e3,easing:"linear",update:()=>{this.count=t.n}})},async liquidityProvidingWithdrawProfit(){try{await this.$store.dispatch("liquidityProvidingWithdrawProfit"),this.$message(Object(E["a"])("liquidity_withdraw_successfull")),this.$emit("reloadData")}catch(e){this.$error(e)}}},computed:{formattedAmount(){return"gift"===this.type?this.count:(this.count/1e6).toFixed(6)},amountImage(){return"gift"===this.type?i("3897"):i("1c8f")},classByType(){return"gift"===this.type?"gift":""},unit(){return"gift"===this.type?Object(E["a"])("gifts"):"USDT"}},mounted(){"income"!==this.type&&(this.count=this.amount)}}),V=(i("24ac"),i("d959")),x=i.n(V);const D=x()(S,[["render",_],["__scopeId","data-v-5f8510a2"]]);t["a"]=D}}]);
//# sourceMappingURL=chunk-26fa6fc6.2cdc5cd5.js.map