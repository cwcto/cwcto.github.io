(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c1007dd"],{4187:function(e,t,o){},a1fa:function(e,t,o){},a92d:function(e,t,o){"use strict";o.r(t);var a=o("7a23"),l=o("0b3c"),c=o.n(l);const i=e=>(Object(a["pushScopeId"])("data-v-ad9e4f2c"),e=e(),Object(a["popScopeId"])(),e),s={class:"header-flex"},n={class:"text-wrapper"},r={class:"title"},d={class:"subtitle"},m=i(()=>Object(a["createElementVNode"])("img",{class:"plus-image",src:c.a},null,-1)),u={class:"amount-block with-buttons"},b={class:"buttons-flex"},h={class:"buttons-flex-row"},w={class:"wrapper"};function p(e,t,o,l,c,i){const p=Object(a["resolveComponent"])("AmountView"),O=Object(a["resolveComponent"])("LiquidityProviderWithdrawOptions"),j=Object(a["resolveComponent"])("Goal"),g=Object(a["resolveComponent"])("LiquidityBalanceWithdrawModal"),v=Object(a["resolveComponent"])("Modal"),f=Object(a["resolveComponent"])("BonusWithdrawalConfirmationModal"),D=Object(a["resolveComponent"])("AddGoalModal");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"goals",onClick:t[3]||(t[3]=(...t)=>e.hideDropdowns&&e.hideDropdowns(...t))},[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",r,Object(a["toDisplayString"])(e.$localizeFilter("goals")),1),Object(a["createElementVNode"])("div",d,Object(a["toDisplayString"])(e.$localizeFilter("goals_subtitle")),1)]),Object(a["createElementVNode"])("button",{class:"basic-button add-goal",onClick:t[0]||(t[0]=t=>e.showAddGoalModal=!0)},[m,Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$localizeFilter("add_new_goal")),1)])]),Object(a["createElementVNode"])("div",u,[Object(a["createVNode"])(p,{class:"pool-amount-first",title:e.$localizeFilter("balance")+":",amount:e.balance,color:"type-gray"},null,8,["title","amount"]),Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("div",h,[Object(a["createElementVNode"])("div",w,[Object(a["createElementVNode"])("button",{class:"basic-button button-second",onClick:t[1]||(t[1]=Object(a["withModifiers"])((...t)=>e.showWithdrawOptions&&e.showWithdrawOptions(...t),["stop"]))},Object(a["toDisplayString"])(e.$localizeFilter("withdrawal")),1),e.showWithdrawDropdown?(Object(a["openBlock"])(),Object(a["createBlock"])(O,{key:0,widthOverride:354,class:"withdraw-options",onSelectOption:e.selectWithdrawOption,onClose:t[2]||(t[2]=t=>e.showWithdrawDropdown=!1)},null,8,["onSelectOption"])):Object(a["createCommentVNode"])("",!0)])])])]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.goals,(t,o)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:o},[Object(a["createVNode"])(j,{goal:t,onWithdraw:e.withdrawFromGoal},null,8,["goal","onWithdraw"])]))),128)),e.showBalanceWithdrawModal?(Object(a["openBlock"])(),Object(a["createBlock"])(g,{key:0,titleOverride:e.$localizeFilter("withdraw_funds_from_goals_balance"),fromGoalsBalance:!0,withdrawToWallet:e.withdrawToWallet,onCloseModal:e.closeModals},null,8,["titleOverride","withdrawToWallet","onCloseModal"])):Object(a["createCommentVNode"])("",!0),e.showWithdrawToExternalWalletModal?(Object(a["openBlock"])(),Object(a["createBlock"])(v,{key:1,type:"liquidityBalanceWithdraw",fromGoalsBalance:!0,onCloseModal:e.closeModals,onShowWithdrawalConfirmation:e.showWithdrawalConfirmation},null,8,["onCloseModal","onShowWithdrawalConfirmation"])):Object(a["createCommentVNode"])("",!0),e.showWithdrawalConfirmationModal?(Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:2,onCloseModal:e.closeConfirmationModal,withdrawId:e.withdrawId,commission:e.commission,coinTicker:"USDT"},null,8,["onCloseModal","withdrawId","commission"])):Object(a["createCommentVNode"])("",!0),e.showAddGoalModal?(Object(a["openBlock"])(),Object(a["createBlock"])(D,{key:3,onAddGoalSuccesfull:e.addGoalSuccesfull,onCloseModal:e.closeModals},null,8,["onAddGoalSuccesfull","onCloseModal"])):Object(a["createCommentVNode"])("",!0)])}var O=o("ed09"),j=o("db1b"),g=o("75b6"),v=o("5166"),f=o("11a6"),D=o("d989"),E=o("2930"),V=o("1c8f"),N=o.n(V);const M=e=>(Object(a["pushScopeId"])("data-v-770bb662"),e=e(),Object(a["popScopeId"])(),e),k={class:"goal"},y={class:"first-row"},_={class:"row-left"},$={class:"text-block"},W={class:"title"},S={class:"text bold"},B={class:"row-right"},C={class:"text-block"},x={class:"title"},F={class:"text bold"},T={class:"text-block"},z={class:"title"},L={class:"text bold"},G={class:"text-block"},A={class:"title"},I={class:"text bold"},q={class:"second-row"},U={class:"second-row-left"},P={class:Object(a["normalizeClass"])("amount-block")},H={class:"amount-text"},J=M(()=>Object(a["createElementVNode"])("img",{class:"amount-image",src:N.a},null,-1)),K={class:"amount"},Q={class:"withdraw-block"},R={class:"withdraw-left-block"},X={class:"available-to-withdraw"},Y={class:"second-row-right"},Z={class:"progress-block"},ee={class:"progress-title"},te=M(()=>Object(a["createElementVNode"])("div",{class:"progress-labels-block"},[Object(a["createElementVNode"])("label",{class:"progress-left-label"},"0%"),Object(a["createElementVNode"])("label",{class:"progress-right-label"},"100%")],-1)),oe={class:"progress"},ae={class:"text-block",style:"align-items: center;"},le={class:"buttons-block"},ce={class:"comission"};function ie(e,t,o,l,c,i){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",k,[Object(a["createElementVNode"])("div",y,[Object(a["createElementVNode"])("div",_,[Object(a["createElementVNode"])("div",$,[Object(a["createElementVNode"])("div",W,Object(a["toDisplayString"])(e.$localizeFilter("goal"))+": ",1),Object(a["createElementVNode"])("div",S,Object(a["toDisplayString"])(""+e.goal.name),1)])]),Object(a["createElementVNode"])("div",B,[Object(a["createElementVNode"])("div",C,[Object(a["createElementVNode"])("div",x,Object(a["toDisplayString"])(e.$localizeFilter("percent_of_deductions")),1),Object(a["createElementVNode"])("div",F,Object(a["toDisplayString"])(e.goal.percentOfDeductions+"%"),1)]),Object(a["createElementVNode"])("div",T,[Object(a["createElementVNode"])("div",z,Object(a["toDisplayString"])(e.$localizeFilter("time_of_completion")),1),Object(a["createElementVNode"])("div",L,Object(a["toDisplayString"])("~"+e.getTimeString(e.timeOfCompletion)),1)]),Object(a["createElementVNode"])("div",G,[Object(a["createElementVNode"])("div",A,Object(a["toDisplayString"])(e.$localizeFilter("amount")),1),Object(a["createElementVNode"])("div",I,Object(a["toDisplayString"])(e.goal.amount/1e6+" USDT"),1)])])]),Object(a["createElementVNode"])("div",q,[Object(a["createElementVNode"])("div",U,[Object(a["createElementVNode"])("div",P,[Object(a["createElementVNode"])("div",H,Object(a["toDisplayString"])(e.$localizeFilter("accumulated"))+":",1),J,Object(a["createElementVNode"])("div",K,Object(a["toDisplayString"])(e.$utils.formatNumber(e.countAccumulated/1e6,"en-US",6,6)+" USDT"),1)]),Object(a["createElementVNode"])("div",Q,[Object(a["createElementVNode"])("div",R,[Object(a["createElementVNode"])("div",X,Object(a["toDisplayString"])(e.$localizeFilter("available_to_withdraw",[e.$utils.formatNumber(e.goal.availableProfitToWithdraw,"en-US",6,6)+" USDT"])),1)])])]),Object(a["createElementVNode"])("div",Y,[Object(a["createElementVNode"])("div",Z,[Object(a["createElementVNode"])("div",ee,Object(a["toDisplayString"])(e.$localizeFilter("left_to_goal",[e.$utils.formatNumber(e.countLeft/1e6,"en-US",6,6)+" USDT"])),1),te,Object(a["createElementVNode"])("div",oe,[Object(a["createElementVNode"])("div",{class:"progress-background",style:Object(a["normalizeStyle"])(`width: ${e.progress*e.maxProgressWidth}px;`)},null,4)])]),Object(a["createElementVNode"])("div",ae,[Object(a["createElementVNode"])("div",le,[Object(a["createElementVNode"])("div",{class:"basic-button",onClick:t[0]||(t[0]=(...t)=>e.withdraw&&e.withdraw(...t))},Object(a["toDisplayString"])(e.$localizeFilter("operation_withdraw")),1)]),Object(a["createElementVNode"])("div",ce,Object(a["toDisplayString"])(e.$localizeFilter("comission_1_usdt")),1)])])])])}var se=o("e977"),ne=o("1209"),re=Object(O["a"])({props:{goal:{type:Object,required:!0}},setup(){},data:()=>({maxProgressWidth:266,countAccumulated:0,countLeft:0,index:0}),watch:{goal(e,t){e.accumulated!==t.accumulated&&this.$nextTick(()=>{this.countAccumulated=t.accumulated,this.countLeft=this.amountLeft(t.amount,t.accumulated),this.setAccumulated(e.accumulated),this.setLeft(this.amountLeft(e.amount,e.accumulated))})}},computed:{progress(){return this.goal.accumulated/this.goal.amount},timeOfCompletion(){const e=+Date.now(),t=this.goal.createdTimestamp,o=this.progress;return Math.max(0,(e-t)/o*(1-o))}},methods:{setAccumulated(e){const t={n:this.countAccumulated};Object(ne["a"])({targets:t,n:e,round:1,duration:3e3,easing:"linear",update:()=>{this.countAccumulated=t.n}})},setLeft(e){const t={n:this.countLeft};Object(ne["a"])({targets:t,n:e,round:1,duration:3e3,easing:"linear",update:()=>{this.countLeft=t.n}})},withdraw(){this.$emit("withdraw",this.goal)},getTimeString(e){if(e/36e5>=1){const t=Math.ceil(e/36e5);return Object(se["a"])("hours_short",[t])}{const t=Math.ceil(e/6e4);return Object(se["a"])("minutes_short",[t])}},amountLeft(e,t){return Math.max(0,e-t)}},mounted(){this.countAccumulated=this.goal.accumulated,this.countLeft=this.amountLeft(this.goal.amount,this.goal.accumulated)}}),de=(o("d25c"),o("d959")),me=o.n(de);const ue=me()(re,[["render",ie],["__scopeId","data-v-770bb662"]]);var be=ue;const he={class:"modal-layout"},we={class:"new-modal-back-button-container"},pe={class:"modal-content"},Oe={class:"window-title"},je={class:"window-text"},ge={class:"input-field"},ve=["placeholder"],fe={class:"window-text"},De={class:"input-field"},Ee=["placeholder"],Ve={class:"window-text"},Ne={class:"input-field"},Me=["placeholder"];function ke(e,t,o,l,c,i){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",he,[Object(a["createElementVNode"])("div",{class:"darken",onClick:t[6]||(t[6]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(a["createElementVNode"])("div",{class:"new-modal add-goal-modal",onClick:t[5]||(t[5]=Object(a["withModifiers"])(()=>{},["stop"]))},[Object(a["createElementVNode"])("div",we,[Object(a["createElementVNode"])("button",{class:"new-modal-back-button thin",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(a["createElementVNode"])("div",pe,[Object(a["createElementVNode"])("div",Oe,Object(a["toDisplayString"])(e.$localizeFilter("add_goal_title")),1),Object(a["createElementVNode"])("p",je,Object(a["toDisplayString"])(e.$localizeFilter("add_goal_name_title")),1),Object(a["createElementVNode"])("div",ge,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{id:"name",class:Object(a["normalizeClass"])(["custom-input",{invalid:e.v$.name.$error}]),placeholder:e.$localizeFilter("add_goal_name"),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.name=t)},null,10,ve),[[a["vModelText"],e.name,void 0,{trim:!0}]]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.v$.name.$errors,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("small",{class:"error",key:t},Object(a["toDisplayString"])(e.$message),1))),128))]),Object(a["createElementVNode"])("p",fe,Object(a["toDisplayString"])(e.$localizeFilter("add_goal_amount_title")),1),Object(a["createElementVNode"])("div",De,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{id:"amount",class:Object(a["normalizeClass"])(["custom-input",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("add_goal_amount"),type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.amount=t)},null,10,Ee),[[a["vModelText"],e.amount,void 0,{trim:!0}]]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.v$.amount.$errors,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("small",{class:"error",key:t},Object(a["toDisplayString"])(e.$message),1))),128))]),Object(a["createElementVNode"])("p",Ve,Object(a["toDisplayString"])(e.$localizeFilter("add_goal_percent_title")),1),Object(a["createElementVNode"])("div",Ne,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{id:"percentOfDeductions",class:Object(a["normalizeClass"])(["custom-input",{invalid:e.v$.percentOfDeductions.$error}]),placeholder:e.$localizeFilter("add_goal_percent"),type:"text","onUpdate:modelValue":t[3]||(t[3]=t=>e.percentOfDeductions=t)},null,10,Me),[[a["vModelText"],e.percentOfDeductions,void 0,{trim:!0}]]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.v$.percentOfDeductions.$errors,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("small",{class:"error",key:t},Object(a["toDisplayString"])(e.$message),1))),128))]),Object(a["createElementVNode"])("button",{class:"basic-button green-button",onClick:t[4]||(t[4]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(a["toDisplayString"])(e.$localizeFilter("confirm")),1)])])])])}var ye=o("25a0"),_e=o("e3e1"),$e=Object(O["a"])({props:{},setup(){return{v$:Object(ye["a"])()}},validations(){return{amount:{required:_e["b"].withMessage(Object(se["a"])("field_must_not_be_empty"),_e["h"]),numeric:_e["b"].withMessage(Object(se["a"])("field_must_be_numeric"),_e["g"])},name:{required:_e["b"].withMessage(Object(se["a"])("field_must_not_be_empty"),_e["h"])},percentOfDeductions:{required:_e["b"].withMessage(Object(se["a"])("field_must_not_be_empty"),_e["h"]),numeric:_e["b"].withMessage(Object(se["a"])("field_must_be_numeric"),_e["g"])}}},data:()=>({percentOfDeductions:null,amount:null,name:null}),computed:{},methods:{closeModal(e){this.$emit("closeModal",e)},async submitHandler(){if(this.v$.$touch(),!this.v$.$error)try{const e={name:this.name,amount:this.amount,percentOfDeductions:this.percentOfDeductions};this.result=await this.$store.dispatch("addGoal",e),this.$emit("addGoalSuccesfull"),this.$message(Object(se["a"])("your_application_sent_successful"))}catch(e){this.$error(e)}}}});o("d760");const We=me()($e,[["render",ke],["__scopeId","data-v-6816fa21"]]);var Se=We,Be=Object(O["a"])({setup(){},components:{Goal:be,AmountView:j["a"],LiquidityProviderDepositOptions:g["a"],LiquidityProviderWithdrawOptions:v["a"],LiquidityBalanceWithdrawModal:f["a"],BonusWithdrawalConfirmationModal:D["a"],Modal:E["a"],AddGoalModal:Se},data:()=>({showDepositDropdown:!1,showWithdrawDropdown:!1,depositSource:null,showDepositFromExternalWalletModal:!1,withdrawToWallet:!1,showWithdrawToExternalWalletModal:!1,showWithdrawalConfirmationModal:!1,showBalanceDepositModal:!1,showBalanceWithdrawModal:!1,interval:null,showAddGoalModal:!1}),computed:{goalsData(){return this.$store.getters.goalsData},goals(){var e;return(null===(e=this.goalsData)||void 0===e?void 0:e.goals)||[]},balance(){var e;return(null===(e=this.goalsData)||void 0===e?void 0:e.balance)||0}},methods:{addGoalSuccesfull(){this.closeModals(),this.reloadData()},async withdrawFromGoal(e){const t={goalId:e.goalId};try{await this.$store.dispatch("liquidityProvidingWithdrawGoalProfit",t),this.$message(Object(se["a"])("withdrawing_funds_successful")),this.reloadData()}catch(o){this.$error(o)}},showDepositOptions(){this.showDepositDropdown=!0,this.showWithdrawDropdown=!1},showWithdrawOptions(){this.showWithdrawDropdown=!0,this.showDepositDropdown=!1},hideDropdowns(){this.showDepositDropdown=!1,this.showWithdrawDropdown=!1},selectDepositOption(e){"from-wallet"===e?(this.depositSource="wallet",this.showBalanceDepositModal=!0):"from-bonus-account"===e?(this.depositSource="bonusAccount",this.showBalanceDepositModal=!0):"from-external-wallet"===e&&(this.depositSource="externalWallet",this.showDepositFromExternalWalletModal=!0)},selectWithdrawOption(e){"to-wallet"===e?(this.withdrawToWallet=!0,this.showBalanceWithdrawModal=!0):"to-bonus-account"===e?(this.withdrawToWallet=!1,this.showBalanceWithdrawModal=!0):"to-external-wallet"===e&&(this.withdrawToWallet=!1,this.showWithdrawToExternalWalletModal=!0)},showWithdrawalConfirmation(e,t){this.closeModal(),this.withdrawId=e,this.commission=t||0,setTimeout(()=>{this.showWithdrawalConfirmationModal=!0})},closeModal(){this.showWithdrawToExternalWalletModal=!1},closeConfirmationModal(){this.showWithdrawalConfirmationModal=!1,this.closeModal()},closeModals(){this.showBalanceDepositModal=!1,this.showBalanceWithdrawModal=!1,this.depositSource=null,this.withdrawToWallet=!1,this.showDepositFromExternalWalletModal=!1,this.showWithdrawToExternalWalletModal=!1,this.showAddGoalModal=!1},async reloadData(){await this.loadData(!0)},async loadData(e){try{await this.$store.dispatch("getGoalsData")}catch(t){e||this.$error(t)}}},async mounted(){await this.loadData(),this.interval=setInterval(async()=>{await this.loadData()},3e3)},unmounted(){clearInterval(this.interval),this.interval=null}});o("b55c");const Ce=me()(Be,[["render",p],["__scopeId","data-v-ad9e4f2c"]]);t["default"]=Ce},aa81:function(e,t,o){},b55c:function(e,t,o){"use strict";o("4187")},d25c:function(e,t,o){"use strict";o("aa81")},d760:function(e,t,o){"use strict";o("a1fa")}}]);
//# sourceMappingURL=chunk-4c1007dd.57b356e8.js.map