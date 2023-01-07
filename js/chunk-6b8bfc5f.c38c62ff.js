(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b8bfc5f"],{"59ff":function(e,t,a){"use strict";a("79ea")},"79ea":function(e,t,a){},"94a6":function(e,t,a){},"97e5":function(e,t,a){"use strict";a("94a6")},a1fa:function(e,t,a){},a92d:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),l=a("0b3c"),c=a.n(l);const s=e=>(Object(o["pushScopeId"])("data-v-52a25d28"),e=e(),Object(o["popScopeId"])(),e),i={class:"header-flex"},n={class:"text-wrapper"},r={class:"title"},d={class:"subtitle"},u=s(()=>Object(o["createElementVNode"])("img",{class:"plus-image",src:c.a},null,-1)),m={class:"amount-block with-buttons"},b={class:"buttons-flex"},h={class:"buttons-flex-row"},p={class:"wrapper"};function O(e,t,a,l,c,s){const O=Object(o["resolveComponent"])("AmountView"),w=Object(o["resolveComponent"])("LiquidityProviderWithdrawOptions"),j=Object(o["resolveComponent"])("Goal"),g=Object(o["resolveComponent"])("LiquidityBalanceWithdrawModal"),v=Object(o["resolveComponent"])("Modal"),f=Object(o["resolveComponent"])("AddGoalModal");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"goals",onClick:t[3]||(t[3]=(...t)=>e.hideDropdowns&&e.hideDropdowns(...t))},[Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("div",r,Object(o["toDisplayString"])(e.$localizeFilter("goals")),1),Object(o["createElementVNode"])("div",d,Object(o["toDisplayString"])(e.$localizeFilter("goals_subtitle")),1)]),Object(o["createElementVNode"])("button",{class:"basic-button add-goal",onClick:t[0]||(t[0]=t=>e.showAddGoalModal=!0)},[u,Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$localizeFilter("add_new_goal")),1)])]),Object(o["createElementVNode"])("div",m,[Object(o["createVNode"])(O,{class:"pool-amount-first",title:e.$localizeFilter("balance")+":",amount:e.balance,color:"type-gray"},null,8,["title","amount"]),Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("div",h,[Object(o["createElementVNode"])("div",p,[Object(o["createElementVNode"])("button",{class:"basic-button button-second",onClick:t[1]||(t[1]=Object(o["withModifiers"])((...t)=>e.showWithdrawOptions&&e.showWithdrawOptions(...t),["stop"]))},Object(o["toDisplayString"])(e.$localizeFilter("withdrawal")),1),e.showWithdrawDropdown?(Object(o["openBlock"])(),Object(o["createBlock"])(w,{key:0,widthOverride:354,class:"withdraw-options",onSelectOption:e.selectWithdrawOption,onClose:t[2]||(t[2]=t=>e.showWithdrawDropdown=!1)},null,8,["onSelectOption"])):Object(o["createCommentVNode"])("",!0)])])])]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.goals,(t,a)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:a},[Object(o["createVNode"])(j,{goal:t,onWithdraw:e.withdrawFromGoal},null,8,["goal","onWithdraw"])]))),128)),e.showBalanceWithdrawModal?(Object(o["openBlock"])(),Object(o["createBlock"])(g,{key:0,titleOverride:e.$localizeFilter("withdraw_funds_from_goals_balance"),fromGoalsBalance:!0,withdrawToWallet:e.withdrawToWallet,onCloseModal:e.closeModals},null,8,["titleOverride","withdrawToWallet","onCloseModal"])):Object(o["createCommentVNode"])("",!0),e.showWithdrawToExternalWalletModal?(Object(o["openBlock"])(),Object(o["createBlock"])(v,{key:1,type:"liquidityBalanceWithdraw",fromGoalsBalance:!0,onCloseModal:e.closeModals},null,8,["onCloseModal"])):Object(o["createCommentVNode"])("",!0),e.showAddGoalModal?(Object(o["openBlock"])(),Object(o["createBlock"])(f,{key:2,onAddGoalSuccesfull:e.addGoalSuccesfull,onCloseModal:e.closeModals},null,8,["onAddGoalSuccesfull","onCloseModal"])):Object(o["createCommentVNode"])("",!0)])}var w=a("ed09"),j=a("db1b"),g=a("75b6"),v=a("5166"),f=a("11a6"),D=a("2930"),E=a("1c8f"),V=a.n(E);const N=e=>(Object(o["pushScopeId"])("data-v-0903d5ca"),e=e(),Object(o["popScopeId"])(),e),k={class:"goal"},_={class:"first-row"},y={class:"row-left"},$={class:"text-block"},M={class:"title"},S={class:"text bold"},W={class:"row-right"},B={class:"text-block"},x={class:"title"},F={class:"text bold"},C={class:"text-block"},z={class:"title"},T={class:"text bold"},L={class:"text-block"},G={class:"title"},A={class:"text bold"},q={class:"second-row"},I={class:"second-row-left"},U={class:Object(o["normalizeClass"])("amount-block")},P={class:"amount-text"},H=N(()=>Object(o["createElementVNode"])("img",{class:"amount-image",src:V.a},null,-1)),J={class:"amount"},K={class:"withdraw-block"},Q={class:"withdraw-left-block"},R={class:"available-to-withdraw"},X={class:"second-row-right"},Y={class:"progress-block"},Z={class:"progress-title"},ee=N(()=>Object(o["createElementVNode"])("div",{class:"progress-labels-block"},[Object(o["createElementVNode"])("label",{class:"progress-left-label"},"0%"),Object(o["createElementVNode"])("label",{class:"progress-right-label"},"100%")],-1)),te={class:"progress"},ae={class:"text-block",style:"align-items: center;"},oe={class:"buttons-block"},le={class:"comission"};function ce(e,t,a,l,c,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",k,[Object(o["createElementVNode"])("div",_,[Object(o["createElementVNode"])("div",y,[Object(o["createElementVNode"])("div",$,[Object(o["createElementVNode"])("div",M,Object(o["toDisplayString"])(e.$localizeFilter("goal"))+": ",1),Object(o["createElementVNode"])("div",S,Object(o["toDisplayString"])(""+e.goal.name),1)])]),Object(o["createElementVNode"])("div",W,[Object(o["createElementVNode"])("div",B,[Object(o["createElementVNode"])("div",x,Object(o["toDisplayString"])(e.$localizeFilter("percent_of_deductions")),1),Object(o["createElementVNode"])("div",F,Object(o["toDisplayString"])(e.goal.percentOfDeductions+"%"),1)]),Object(o["createElementVNode"])("div",C,[Object(o["createElementVNode"])("div",z,Object(o["toDisplayString"])(e.$localizeFilter("time_of_completion")),1),Object(o["createElementVNode"])("div",T,Object(o["toDisplayString"])("~"+e.getTimeString(e.timeOfCompletion)),1)]),Object(o["createElementVNode"])("div",L,[Object(o["createElementVNode"])("div",G,Object(o["toDisplayString"])(e.$localizeFilter("amount")),1),Object(o["createElementVNode"])("div",A,Object(o["toDisplayString"])(e.goal.amount/1e6+" USDT"),1)])])]),Object(o["createElementVNode"])("div",q,[Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("div",U,[Object(o["createElementVNode"])("div",P,Object(o["toDisplayString"])(e.$localizeFilter("accumulated"))+":",1),H,Object(o["createElementVNode"])("div",J,Object(o["toDisplayString"])(e.$utils.formatNumber(e.countAccumulated/1e6,"en-US",6,6)+" USDT"),1)]),Object(o["createElementVNode"])("div",K,[Object(o["createElementVNode"])("div",Q,[Object(o["createElementVNode"])("div",R,Object(o["toDisplayString"])(e.$localizeFilter("available_to_withdraw",[e.$utils.formatNumber(e.goal.availableProfitToWithdraw,"en-US",6,6)+" USDT"])),1)])])]),Object(o["createElementVNode"])("div",X,[Object(o["createElementVNode"])("div",Y,[Object(o["createElementVNode"])("div",Z,Object(o["toDisplayString"])(e.$localizeFilter("left_to_goal",[e.$utils.formatNumber(e.countLeft/1e6,"en-US",6,6)+" USDT"])),1),ee,Object(o["createElementVNode"])("div",te,[Object(o["createElementVNode"])("div",{class:"progress-background",style:Object(o["normalizeStyle"])(`width: ${e.progress*e.maxProgressWidth}px;`)},null,4)])]),Object(o["createElementVNode"])("div",ae,[Object(o["createElementVNode"])("div",oe,[Object(o["createElementVNode"])("div",{class:"basic-button",onClick:t[0]||(t[0]=(...t)=>e.withdraw&&e.withdraw(...t))},Object(o["toDisplayString"])(e.$localizeFilter("operation_withdraw")),1)]),Object(o["createElementVNode"])("div",le,Object(o["toDisplayString"])(e.$localizeFilter("comission_1_usdt")),1)])])])])}var se=a("e977"),ie=a("1209"),ne=Object(w["a"])({props:{goal:{type:Object,required:!0}},setup(){},data:()=>({maxProgressWidth:266,countAccumulated:0,countLeft:0,index:0}),watch:{goal(e,t){e.accumulated!==t.accumulated&&this.$nextTick(()=>{this.countAccumulated=t.accumulated,this.countLeft=this.amountLeft(t.amount,t.accumulated),this.setAccumulated(e.accumulated),this.setLeft(this.amountLeft(e.amount,e.accumulated))})}},computed:{progress(){return this.goal.accumulated/this.goal.amount},timeOfCompletion(){const e=+Date.now(),t=this.goal.createdTimestamp,a=this.progress;return t+(e-t)/a-e}},methods:{setAccumulated(e){const t={n:this.countAccumulated};Object(ie["a"])({targets:t,n:e,round:1,duration:3e3,easing:"linear",update:()=>{this.countAccumulated=t.n}})},setLeft(e){const t={n:this.countLeft};Object(ie["a"])({targets:t,n:e,round:1,duration:3e3,easing:"linear",update:()=>{this.countLeft=t.n}})},withdraw(){this.$emit("withdraw",this.goal)},getTimeString(e){if(e/36e5>=1){const t=Math.ceil(e/36e5);return Object(se["a"])("hours_short",[t])}{const t=Math.ceil(e/6e4);return Object(se["a"])("minutes_short",[t])}},amountLeft(e,t){return e-t}},mounted(){this.countAccumulated=this.goal.accumulated,this.countLeft=this.amountLeft(this.goal.amount,this.goal.accumulated)}}),re=(a("59ff"),a("d959")),de=a.n(re);const ue=de()(ne,[["render",ce],["__scopeId","data-v-0903d5ca"]]);var me=ue;const be={class:"modal-layout"},he={class:"new-modal-back-button-container"},pe={class:"modal-content"},Oe={class:"window-title"},we={class:"window-text"},je={class:"input-field"},ge=["placeholder"],ve={class:"window-text"},fe={class:"input-field"},De=["placeholder"],Ee={class:"window-text"},Ve={class:"input-field"},Ne=["placeholder"];function ke(e,t,a,l,c,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",be,[Object(o["createElementVNode"])("div",{class:"darken",onClick:t[6]||(t[6]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(o["createElementVNode"])("div",{class:"new-modal add-goal-modal",onClick:t[5]||(t[5]=Object(o["withModifiers"])(()=>{},["stop"]))},[Object(o["createElementVNode"])("div",he,[Object(o["createElementVNode"])("button",{class:"new-modal-back-button thin",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(o["createElementVNode"])("div",pe,[Object(o["createElementVNode"])("div",Oe,Object(o["toDisplayString"])(e.$localizeFilter("add_goal_title")),1),Object(o["createElementVNode"])("p",we,Object(o["toDisplayString"])(e.$localizeFilter("add_goal_name_title")),1),Object(o["createElementVNode"])("div",je,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"name",class:Object(o["normalizeClass"])(["custom-input",{invalid:e.v$.name.$error}]),placeholder:e.$localizeFilter("add_goal_name"),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.name=t)},null,10,ge),[[o["vModelText"],e.name,void 0,{trim:!0}]]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.v$.name.$errors,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",{class:"error",key:t},Object(o["toDisplayString"])(e.$message),1))),128))]),Object(o["createElementVNode"])("p",ve,Object(o["toDisplayString"])(e.$localizeFilter("add_goal_amount_title")),1),Object(o["createElementVNode"])("div",fe,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"amount",class:Object(o["normalizeClass"])(["custom-input",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("add_goal_amount"),type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.amount=t)},null,10,De),[[o["vModelText"],e.amount,void 0,{trim:!0}]]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.v$.amount.$errors,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",{class:"error",key:t},Object(o["toDisplayString"])(e.$message),1))),128))]),Object(o["createElementVNode"])("p",Ee,Object(o["toDisplayString"])(e.$localizeFilter("add_goal_percent_title")),1),Object(o["createElementVNode"])("div",Ve,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"percentOfDeductions",class:Object(o["normalizeClass"])(["custom-input",{invalid:e.v$.percentOfDeductions.$error}]),placeholder:e.$localizeFilter("add_goal_percent"),type:"text","onUpdate:modelValue":t[3]||(t[3]=t=>e.percentOfDeductions=t)},null,10,Ne),[[o["vModelText"],e.percentOfDeductions,void 0,{trim:!0}]]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.v$.percentOfDeductions.$errors,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",{class:"error",key:t},Object(o["toDisplayString"])(e.$message),1))),128))]),Object(o["createElementVNode"])("button",{class:"basic-button green-button",onClick:t[4]||(t[4]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(o["toDisplayString"])(e.$localizeFilter("confirm")),1)])])])])}var _e=a("25a0"),ye=a("e3e1"),$e=Object(w["a"])({props:{},setup(){return{v$:Object(_e["a"])()}},validations(){return{amount:{required:ye["b"].withMessage(Object(se["a"])("field_must_not_be_empty"),ye["h"]),numeric:ye["b"].withMessage(Object(se["a"])("field_must_be_numeric"),ye["g"])},name:{required:ye["b"].withMessage(Object(se["a"])("field_must_not_be_empty"),ye["h"])},percentOfDeductions:{required:ye["b"].withMessage(Object(se["a"])("field_must_not_be_empty"),ye["h"]),numeric:ye["b"].withMessage(Object(se["a"])("field_must_be_numeric"),ye["g"])}}},data:()=>({percentOfDeductions:null,amount:null,name:null}),computed:{},methods:{closeModal(e){this.$emit("closeModal",e)},async submitHandler(){if(this.v$.$touch(),!this.v$.$error)try{const e={name:this.name,amount:this.amount,percentOfDeductions:this.percentOfDeductions};this.result=await this.$store.dispatch("addGoal",e),this.$emit("addGoalSuccesfull"),this.$message(Object(se["a"])("your_application_sent_successful"))}catch(e){this.$error(e)}}}});a("d760");const Me=de()($e,[["render",ke],["__scopeId","data-v-6816fa21"]]);var Se=Me,We=Object(w["a"])({setup(){},components:{Goal:me,AmountView:j["a"],LiquidityProviderDepositOptions:g["a"],LiquidityProviderWithdrawOptions:v["a"],LiquidityBalanceWithdrawModal:f["a"],Modal:D["a"],AddGoalModal:Se},data:()=>({showDepositDropdown:!1,showWithdrawDropdown:!1,depositSource:null,showDepositFromExternalWalletModal:!1,withdrawToWallet:!1,showWithdrawToExternalWalletModal:!1,showBalanceDepositModal:!1,showBalanceWithdrawModal:!1,interval:null,showAddGoalModal:!1}),computed:{goalsData(){return this.$store.getters.goalsData},goals(){var e;return(null===(e=this.goalsData)||void 0===e?void 0:e.goals)||[]},balance(){var e;return(null===(e=this.goalsData)||void 0===e?void 0:e.balance)||0}},methods:{addGoalSuccesfull(){this.closeModals(),this.reloadData()},async withdrawFromGoal(e){const t={goalId:e.goalId};try{await this.$store.dispatch("liquidityProvidingWithdrawGoalProfit",t),this.$message(localizeFilter("withdrawing_funds_successful")),this.reloadData()}catch(a){this.$error(a)}},showDepositOptions(){this.showDepositDropdown=!0,this.showWithdrawDropdown=!1},showWithdrawOptions(){this.showWithdrawDropdown=!0,this.showDepositDropdown=!1},hideDropdowns(){this.showDepositDropdown=!1,this.showWithdrawDropdown=!1},selectDepositOption(e){"from-wallet"===e?(this.depositSource="wallet",this.showBalanceDepositModal=!0):"from-bonus-account"===e?(this.depositSource="bonusAccount",this.showBalanceDepositModal=!0):"from-external-wallet"===e&&(this.depositSource="externalWallet",this.showDepositFromExternalWalletModal=!0)},selectWithdrawOption(e){"to-wallet"===e?(this.withdrawToWallet=!0,this.showBalanceWithdrawModal=!0):"to-bonus-account"===e?(this.withdrawToWallet=!1,this.showBalanceWithdrawModal=!0):"to-external-wallet"===e&&(this.withdrawToWallet=!1,this.showWithdrawToExternalWalletModal=!0)},closeModals(){this.showBalanceDepositModal=!1,this.showBalanceWithdrawModal=!1,this.depositSource=null,this.withdrawToWallet=!1,this.showDepositFromExternalWalletModal=!1,this.showWithdrawToExternalWalletModal=!1,this.showAddGoalModal=!1},async reloadData(){await this.loadData(!0)},async loadData(e){try{await this.$store.dispatch("getGoalsData")}catch(t){e||this.$error(t)}}},async mounted(){await this.loadData(),this.interval=setInterval(async()=>{await this.loadData()},3e3)},unmounted(){clearInterval(this.interval),this.interval=null}});a("97e5");const Be=de()(We,[["render",O],["__scopeId","data-v-52a25d28"]]);t["default"]=Be},d760:function(e,t,a){"use strict";a("a1fa")}}]);
//# sourceMappingURL=chunk-6b8bfc5f.c38c62ff.js.map