(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-adfffe8e"],{"0e89":function(e,t,o){"use strict";o("8197")},"188e":function(e,t,o){"use strict";var a=o("7a23");const c={class:"wallet-options"},i={style:{color:"#EAEAEA"}},n={class:"trigger-button"},l=["src"],s={key:0,class:"window light dropdown-block"},r=["onClick"];function d(e,t,d,m,p,b){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("div",{class:"window light trigger-block",onClick:t[0]||(t[0]=(...t)=>e.triggerDropdown&&e.triggerDropdown(...t))},[Object(a["createElementVNode"])("label",i,Object(a["toDisplayString"])(e.selectedIndex||0==e.selectedIndex?e.$store.getters.networkByTicker(e.options[e.selectedIndex]).networkName:e.$localizeFilter("specify_network")),1),Object(a["createElementVNode"])("button",n,[Object(a["createElementVNode"])("img",{style:{width:"10px",height:"6px"},src:o("3c15")},null,8,l)])]),e.isOpen?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[Object(a["createElementVNode"])("ul",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.options,(t,o)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:o,class:Object(a["normalizeClass"])(e.selectedIndex==o?"selected":""),onClick:a=>e.selectOption(t,o)},Object(a["toDisplayString"])(e.$store.getters.networkByTicker(t).networkName),11,r))),128))])])):Object(a["createCommentVNode"])("",!0)])}var m=o("ed09"),p=Object(m["a"])({props:["options"],data:()=>({isOpen:!1,selectedIndex:null}),setup(){},methods:{triggerDropdown(){this.isOpen=!this.isOpen},selectOption(e,t){this.selectedIndex=t,this.$emit("selectOption",e),this.isOpen=!1}}}),b=(o("3475"),o("d959")),h=o.n(b);const u=h()(p,[["render",d],["__scopeId","data-v-778375ea"]]);t["a"]=u},3475:function(e,t,o){"use strict";o("f8c3")},"61de":function(e,t,o){"use strict";var a=o("7a23");const c={class:"empty-table"},i={class:"text"};function n(e,t,o,n,l,s){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("p",i,Object(a["toDisplayString"])(e.text),1)])}var l=o("ed09"),s=Object(l["a"])({props:["text"],setup(){}}),r=(o("ae25"),o("d959")),d=o.n(r);const m=d()(s,[["render",n],["__scopeId","data-v-2fc3f164"]]);t["a"]=m},6809:function(e,t,o){},"6ce9":function(e,t,o){"use strict";var a=o("7a23");const c={class:"table-options"},i={style:{color:"#EAEAEA"}},n={class:"trigger-button"},l=["src"],s={key:0,class:"window light dropdown-block"},r=["onClick"];function d(e,t,d,m,p,b){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("div",{class:"window light trigger-block",onClick:t[0]||(t[0]=(...t)=>e.triggerDropdown&&e.triggerDropdown(...t))},[Object(a["createElementVNode"])("label",i,Object(a["toDisplayString"])(e.name+" ("+e.$localizeFilter(e.prefix+e.options[e.selectedIndex])+")"),1),Object(a["createElementVNode"])("button",n,[Object(a["createElementVNode"])("img",{style:{width:"10px",height:"6px"},src:o("3c15")},null,8,l)])]),e.isOpen?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[Object(a["createElementVNode"])("ul",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.options,(t,o)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:o,class:Object(a["normalizeClass"])(e.selectedIndex==o?"selected":""),onClick:t=>e.selectOption(o)},Object(a["toDisplayString"])(e.$localizeFilter(e.prefix+t)),11,r))),128))])])):Object(a["createCommentVNode"])("",!0)])}var m=o("ed09"),p=Object(m["a"])({props:["name","options","prefix"],data:()=>({isOpen:!1,selectedIndex:0}),setup(){},methods:{triggerDropdown(){this.isOpen=!this.isOpen},selectOption(e){this.selectedIndex=e,this.$emit("selectOption",e),this.isOpen=!1}}}),b=(o("0e89"),o("d959")),h=o.n(b);const u=h()(p,[["render",d],["__scopeId","data-v-3ca88670"]]);t["a"]=u},"6f19":function(e,t,o){},8197:function(e,t,o){},"854e":function(e,t,o){"use strict";o("6809")},8589:function(e,t,o){"use strict";o("6f19")},a2f2:function(e,t,o){"use strict";o.r(t);var a=o("7a23");const c={class:"bonus-account"},i={class:"header-block"},n={class:"cabinet-header"},l={class:"cabinet-text"};function s(e,t,o,s,r,d){const m=Object(a["resolveComponent"])("BonusBalance"),p=Object(a["resolveComponent"])("BonusOperations"),b=Object(a["resolveComponent"])("Modal"),h=Object(a["resolveComponent"])("BonusWithdrawalConfirmationModal");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("p",n,Object(a["toDisplayString"])(e.$localizeFilter("bonus_account")+" "+e.coin),1),Object(a["createElementVNode"])("p",l,Object(a["toDisplayString"])(e.$localizeFilter("bonus_account_text")),1)]),Object(a["createVNode"])(m,{class:"balance",type:"balance",coin:e.coin,onFillBalance:e.fillBalance,onWithdrawFromBalance:e.withdrawFromBalance,onShowWithdrawalRequests:e.showWithdrawalRequests},null,8,["coin","onFillBalance","onWithdrawFromBalance","onShowWithdrawalRequests"]),Object(a["createVNode"])(p,{class:"operations",type:"bonusAccount",coin:e.coin,showOptions:!0},null,8,["coin"]),e.showModal?(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:0,type:"bonusAccount",coin:e.coin,actionType:e.actionType,step:e.actionStep,onUpdateModal:e.updateModal,onCloseModal:e.closeModal,onShowWithdrawalConfirmation:e.showWithdrawalConfirmation},null,8,["coin","actionType","step","onUpdateModal","onCloseModal","onShowWithdrawalConfirmation"])):Object(a["createCommentVNode"])("",!0),e.showWithdrawalConfirmationModal?(Object(a["openBlock"])(),Object(a["createBlock"])(h,{key:1,onCloseModal:e.closeConfirmationModal,withdrawId:e.withdrawId,commission:e.commission,coinTicker:e.coin},null,8,["onCloseModal","withdrawId","commission","coinTicker"])):Object(a["createCommentVNode"])("",!0)])}o("14d9");var r=o("ed09");const d={class:"balance"},m={class:"balance-block"},p={class:"balance-title"},b={class:"amount-block"},h={class:"balance-amount"},u={class:"balance-currency"},O={class:"buttons-block"};function j(e,t,o,c,i,n){var l;return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",d,[Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("label",p,Object(a["toDisplayString"])(e.$localizeFilter("balance")+":"),1),Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("label",h,Object(a["toDisplayString"])(null!==(l=e.balance)&&void 0!==l?l:"0"),1),Object(a["createElementVNode"])("label",u,Object(a["toDisplayString"])(e.coin),1)]),1==e.canBuy?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:0,class:"basic-button",onClick:t[0]||(t[0]=(...t)=>e.fillBalance&&e.fillBalance(...t))},Object(a["toDisplayString"])(e.$localizeFilter("buy_coin")+" "+e.coin),1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("div",O,[Object(a["createElementVNode"])("button",{class:"basic-button",onClick:t[1]||(t[1]=(...t)=>e.handleClick&&e.handleClick(...t))},Object(a["toDisplayString"])("balance"==e.type?e.$localizeFilter("withdrawal_applications"):e.$localizeFilter("fill_sigma")),1),"balance"==e.type?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:0,class:"basic-button",onClick:t[2]||(t[2]=(...t)=>e.withdrawFromBalance&&e.withdrawFromBalance(...t))},Object(a["toDisplayString"])("balance"==e.type?e.$localizeFilter("withdrawal"):e.$localizeFilter("withdraw_from_sigma")),1)):Object(a["createCommentVNode"])("",!0)])])}var w=Object(r["a"])({props:{type:{type:String,default:"balance"},coin:{type:String,required:!0},canBuy:{type:Boolean,default:!1}},data:()=>({balance:0,walletBalance:0}),watch:{coin(e,t){this.$nextTick(()=>{this.loadData()})}},setup(){},methods:{fillBalance(){this.$emit("fillBalance")},withdrawFromBalance(){this.$emit("withdrawFromBalance")},showWithdrawalRequests(){"balance"==this.type&&this.$emit("showWithdrawalRequests")},handleClick(){"balance"==this.type?this.showWithdrawalRequests():this.fillBalance()},async loadData(){try{const e=await this.$store.dispatch("getBalance",{currencyCode:this.coin});this.balance=e.balance.toFixed(2),this.$emit("setBalance",this.balance)}catch(e){this.$error(e)}}},async mounted(){this.loadData()}}),k=(o("8589"),o("d959")),g=o.n(k);const f=g()(w,[["render",j],["__scopeId","data-v-644ae1e8"]]);var y=f;const v={class:"bonus-operations"},B={class:"title"};function E(e,t,o,c,i,n){const l=Object(a["resolveComponent"])("BonusOperationsTable"),s=Object(a["resolveComponent"])("EmptyTable"),r=Object(a["resolveComponent"])("pagination");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",v,[Object(a["createElementVNode"])("p",B,Object(a["toDisplayString"])(e.$localizeFilter("operations_on_account")),1),Object(a["createVNode"])(l,{showTable:e.operations.length>0,operations:e.operations,showOptions:!1,onChangeStatus:e.changeStatus},null,8,["showTable","operations","onChangeStatus"]),0==e.operations.length?(Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:0,text:e.$localizeFilter("no_operations")},null,8,["text"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(r,{modelValue:e.page,"onUpdate:modelValue":t[0]||(t[0]=t=>e.page=t),records:e.count,"per-page":e.pageSize,onPaginate:e.pageChangeHandler},null,8,["modelValue","records","per-page","onPaginate"])])}const C={class:"place-for-table"},$={class:"table-options-block"},N={key:0,class:"custom-table"},V={class:"custom-table-header"},S={class:"custom-table-row light header"},D={class:"custom-data-cell cell-1 header mobile"},_={class:"custom-data-cell cell-1 header desktop"},T={class:"custom-data-cell cell-2 header desktop"},F={class:"custom-data-cell cell-3 header"},I={class:"custom-table-body"},x={class:"custom-data-cell cell-1"},M={class:"cell-1-content mobile"},z={class:"percent-amount-block"},W={class:"operation-amount"},q={class:"operation-name"},R={class:"cell-1-content desktop"},A={class:"operation-name"},P={class:"custom-data-cell cell-2 desktop"},L={class:"operation-amount"},H={class:"custom-data-cell cell-3"};function U(e,t,o,c,i,n){const l=Object(a["resolveComponent"])("TableOptions");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",C,[Object(a["createElementVNode"])("div",$,[o.showOptions?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,class:"table-options",name:e.$localizeFilter("type"),options:e.types,prefix:"operations_",onSelectOption:n.selectOption},null,8,["name","options","onSelectOption"])):Object(a["createCommentVNode"])("",!0)]),o.showTable?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",N,[Object(a["createElementVNode"])("div",V,[Object(a["createElementVNode"])("div",S,[Object(a["createElementVNode"])("div",D,Object(a["toDisplayString"])(e.$localizeFilter("operation_name_amount")),1),Object(a["createElementVNode"])("div",_,Object(a["toDisplayString"])(e.$localizeFilter("operation_name")),1),Object(a["createElementVNode"])("div",T,Object(a["toDisplayString"])(e.$localizeFilter("operation_amount")),1),Object(a["createElementVNode"])("div",F,Object(a["toDisplayString"])(e.$localizeFilter("operation_date")),1)])]),Object(a["createElementVNode"])("div",I,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(o.operations,(t,o)=>{var c,i;return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])(["custom-table-row",n.getClass(o)]),key:o},[Object(a["createElementVNode"])("div",x,[Object(a["createElementVNode"])("div",M,[Object(a["createElementVNode"])("div",z,[Object(a["createElementVNode"])("p",W,Object(a["toDisplayString"])(t.amount.toFixed(2)+" "+t.coin),1)]),Object(a["createElementVNode"])("p",q,Object(a["toDisplayString"])(null!==(c=t.name)&&void 0!==c?c:"-"),1)]),Object(a["createElementVNode"])("div",R,[Object(a["createElementVNode"])("p",A,Object(a["toDisplayString"])(null!==(i=t.name)&&void 0!==i?i:"-"),1)])]),Object(a["createElementVNode"])("div",P,[Object(a["createElementVNode"])("p",L,Object(a["toDisplayString"])(t.amount.toFixed(2)+" "+t.coin),1)]),Object(a["createElementVNode"])("div",H,[Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.$dateTimeFilter(t.createdTimestamp,"datetime")),1)])],2)}),128))])])):Object(a["createCommentVNode"])("",!0)])}var J=o("6ce9"),G={props:["operations","showOptions","showTable"],components:{TableOptions:J["a"]},data:()=>({types:["all","replenish","dividend"],type:"all"}),methods:{selectOption(e){this.type=this.types[e],this.$emit("changeStatus",this.type)},getClass(e){return e%2==0?"dark":"light"}}};o("ffee");const K=g()(G,[["render",U],["__scopeId","data-v-f10f9fc6"]]);var Q=K,X=o("fba1"),Y=(o("e977"),o("61de")),Z=Object(r["a"])({props:["type","showOptions","coin"],components:{BonusOperationsTable:Q,EmptyTable:Y["a"]},mixins:[X["a"]],watch:{page(){this.$nextTick(()=>{this.loadData()})},coin(e,t){this.$nextTick(()=>{this.loadData()})}},setup(){},data:()=>({operations:[],count:0,status:"all"}),mounted(){this.loadData()},methods:{changeStatus(e){this.status=e,this.loadData()},async loadData(){try{const e={status:this.status,skip:this.skip,limit:this.limit,currencyCode:this.coin||"GDC"};this.operations=await this.$store.dispatch("getBalanceOperationsByFilter",e),this.operations.forEach(e=>{e.coin=this.coin});const{count:t}=await this.$store.dispatch("getBalanceOperationsByFilterCount",e);this.count=t,this.setupPagination(this.operations)}catch(e){this.$error(e)}}}});o("ff0e");const ee=g()(Z,[["render",E],["__scopeId","data-v-798919e4"]]);var te=ee,oe=o("2930"),ae=o("d989"),ce=Object(r["a"])({props:{coin:{type:String,required:!0},withdraw:{type:Boolean,default:!1}},components:{BonusBalance:y,BonusOperations:te,Modal:oe["a"],BonusWithdrawalConfirmationModal:ae["a"]},setup(){},data:()=>({showModal:!1,actionType:"withdrawal",actionStep:1,withdrawId:null,commission:0,showWithdrawalConfirmationModal:!1}),methods:{showWithdrawalConfirmation(e,t){this.closeModal(),this.withdrawId=e,this.commission=t||0,setTimeout(()=>{this.showWithdrawalConfirmationModal=!0})},closeModal(){this.showModal=!1,this.clearAll()},closeConfirmationModal(){this.showWithdrawalConfirmationModal=!1,this.closeModal()},clearAll(){var e,t,o;this.actionStep=1;const a=null===(e=this.$router)||void 0===e||null===(t=e.currentRoute)||void 0===t||null===(o=t.value)||void 0===o?void 0:o.fullPath;if(a){const e=a.replace("&withdraw=1","");this.$router.push(e)}},fillBalance(){},withdrawFromBalance(){this.showModal=!0},showWithdrawalRequests(){this.$router.push("/cabinet/withdrawalRequests?from=bonusAccount&coin="+this.coin)},updateModal(e){this.actionStep=e}},mounted(){this.withdraw&&this.$nextTick(()=>{this.showModal=!0})}});o("f80c");const ie=g()(ce,[["render",s],["__scopeId","data-v-3a02b2f6"]]);t["default"]=ie},ae25:function(e,t,o){"use strict";o("afb8")},afb8:function(e,t,o){},c6a3:function(e,t,o){},d746:function(e,t,o){},d989:function(e,t,o){"use strict";var a=o("7a23");const c=e=>(Object(a["pushScopeId"])("data-v-af970456"),e=e(),Object(a["popScopeId"])(),e),i={class:"modal-layout"},n={class:"darken"},l={class:"new-modal-back-button-container"},s={class:"modal-content"},r={class:"window-title"},d={class:"window-text",style:{"margin-bottom":"35px"}},m={class:"bold"},p={class:"window-text"},b={class:"input-field"},h=["placeholder"],u={key:0,class:"end-timer-error"},O={class:"time"},j={key:0,class:"modal-warning"},w=c(()=>Object(a["createElementVNode"])("i",{class:"material-icons",style:{color:"#CA8920!important"}},"report",-1)),k={class:"window-text warning"};function g(e,t,o,c,g,f){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",i,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",{class:"new-modal bonus-withdrawal-modal",onClick:t[3]||(t[3]=Object(a["withModifiers"])(()=>{},["stop"]))},[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("button",{class:"new-modal-back-button thin",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("p",r,Object(a["toDisplayString"])(e.$localizeFilter("withdrawal_confirmation")),1),Object(a["createElementVNode"])("p",d,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$localizeFilter("withdrawal_confirmation_text"))+" ",1),Object(a["createElementVNode"])("span",m,Object(a["toDisplayString"])(e.email),1)]),Object(a["createElementVNode"])("p",p,Object(a["toDisplayString"])(e.$localizeFilter("wallet_confirmation_label")),1),Object(a["createElementVNode"])("div",b,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{id:"code",class:Object(a["normalizeClass"])(["custom-input",{invalid:e.v$.code.$error||e.showEndTimerError}]),placeholder:e.$localizeFilter("withdrawal_confirmation_input"),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.code=t)},null,10,h),[[a["vModelText"],e.code,void 0,{trim:!0}]]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.v$.code.$errors,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("small",{class:"error",key:t},Object(a["toDisplayString"])(e.$message),1))),128)),e.showEndTimerError?(Object(a["openBlock"])(),Object(a["createElementBlock"])("small",u,Object(a["toDisplayString"])(e.$localizeFilter("confirmation_code_time_ended")),1)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",O,Object(a["toDisplayString"])(e.$utils.formatTime(e.timeLeft,!1,!1)),1)]),e.commission>0?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",j,[w,Object(a["createElementVNode"])("p",k,Object(a["toDisplayString"])(e.$localizeFilter("commission")+" "+e.commissionFee+" "+e.coinTicker),1)])):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("button",{class:Object(a["normalizeClass"])(["basic-button submit-button",e.submitInProgress?"inactive":""]),onClick:t[2]||(t[2]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(a["toDisplayString"])(e.$localizeFilter("confirm")),3)])])])])}var f=o("ed09"),y=o("25a0"),v=o("e3e1"),B=o("e977"),E=(o("188e"),o("fa7d")),C=Object(f["a"])({props:["withdrawId","commission","coinTicker"],validations(){return{code:{required:v["b"].withMessage(Object(B["a"])("field_must_not_be_empty"),v["h"]),numeric:v["b"].withMessage(Object(B["a"])("field_must_be_numeric"),v["h"])}}},setup(){return{v$:Object(y["a"])()}},watch:{timeLeft(e,t){e<=0&&this.$nextTick(()=>{this.timerEnded()})}},data:()=>({showEndTimerError:!1,code:"",submitInProgress:!1}),methods:{runTimer(){const e=+new Date+3e5;this.$store.dispatch("runConfirmationCodeTimer",{timestamp:e}),document.addEventListener("visibilitychange",(function(){document.hidden?this.$store.dispatch("stopConfirmationCodeTimer"):this.$store.dispatch("runConfirmationCodeTimer",{timestamp:e})}))},stopTimer(){this.$store.dispatch("stopConfirmationCodeTimer")},timerEnded(){this.showEndTimerError=!0},closeModal(e){this.cancelRequest({id:this.withdrawId}),this.$emit("closeModal",e)},async cancelRequest(e){try{await this.$store.dispatch("cancelWithdrawBalanceRequest",{requestId:e.id}),this.$message(Object(B["a"])("application_calceled"))}catch(t){this.$error(t)}},async submitHandler(){if(this.v$.$touch(),!this.v$.$error){this.submitInProgress=!0;try{const e={withdrawBalanceRequestId:this.withdrawId,confirmationCode:this.code};await this.$store.dispatch("confirmWithdrawBalanceRequest",e),this.$message(Object(B["a"])("withdraw_successfull")),this.$emit("closeModal"),setTimeout(()=>{this.submitInProgress=!1},1e3)}catch(e){this.$error(e),setTimeout(()=>{this.submitInProgress=!1},1e3)}}},async selectNetwork(e){await this.$store.dispatch("setWithdrawFromWalletNetwork",{network:e})},getNetworkByTicker(e){return null===this.network?null:this.$store.getters.networkByTicker(e)}},computed:{email(){var e;return null===(e=this.$store.getters.profile)||void 0===e?void 0:e.email},timeLeft(){return this.$store.state.info.confirmationCodeTimeLeft},networksForCoin(){return this.$store.getters.networksForCoin(this.coinTicker)},network(){return this.$store.getters.withdrawFromWalletNetwork},commissionFee(){return console.log(this.$store.getters.assetDecimalsMap[this.coinTicker],this.commission),+E["a"].displayBigIntAsDecimal(this.commission,this.$store.getters.assetDecimalsMap[this.coinTicker],this.$store.getters.assetDecimalsMap[this.coinTicker].toString().length-1)}},mounted(){this.runTimer()},unmounted(){this.stopTimer()}}),$=(o("854e"),o("d959")),N=o.n($);const V=N()(C,[["render",g],["__scopeId","data-v-af970456"]]);t["a"]=V},edbd:function(e,t,o){},f80c:function(e,t,o){"use strict";o("d746")},f8c3:function(e,t,o){},fba1:function(e,t,o){"use strict";var a=o("2ef0"),c=o.n(a);t["a"]={data(){return{page:1,pageSize:10,pageCount:0,allItems:[],items:[]}},methods:{setupPagination(e){this.allItems=c.a.chunk(e,this.pageSize),this.pageCount=c.a.size(this.allItems),this.items=this.allItems[this.page-1]||this.allItems[0]},pageChangeHandler(){this.items=this.allItems[this.page-1]||this.allItems[0]}},computed:{skip(){return(this.page-1)*this.pageSize},limit(){return this.pageSize}}}},ff0e:function(e,t,o){"use strict";o("c6a3")},ffee:function(e,t,o){"use strict";o("edbd")}}]);
//# sourceMappingURL=chunk-adfffe8e.7911154c.js.map