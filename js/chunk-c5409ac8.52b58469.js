(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5409ac8"],{"32b31":function(e,t,a){"use strict";a("be04")},3451:function(e,t,a){"use strict";a("a1e97")},3577:function(e,t,a){"use strict";var o=a("7a23");const l={class:"buy-sell-toggle-block"},c={key:0,class:"title"},i={class:"buy-sell-toggle-container"};function n(e,t,a,n,s,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[e.title?(Object(o["openBlock"])(),Object(o["createElementBlock"])("label",c,Object(o["toDisplayString"])(e.title),1)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["buy-sell-toggle left",0==e.value?"selected":"default"]),onClick:t[0]||(t[0]=t=>e.toggle(0))},[Object(o["createElementVNode"])("label",{class:Object(o["normalizeClass"])(["text",0==e.value?"selected":""])},Object(o["toDisplayString"])(e.$localizeFilter(e.variants[0])),3)],2),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["buy-sell-toggle right",1==e.value?"selected":"default"]),onClick:t[1]||(t[1]=t=>e.toggle(1))},[Object(o["createElementVNode"])("label",{class:Object(o["normalizeClass"])(["text",1==e.value?"selected":""])},Object(o["toDisplayString"])(e.$localizeFilter(e.variants[1])),3)],2)])])}var s=a("ed09"),r=Object(s["a"])({props:["title","variants","selected"],watch:{selected:function(e,t){null!=e&&void 0!=e&&(this.value=this.variants.indexOf(e))}},data:()=>({value:0}),methods:{toggle(e){this.value=e,this.$emit("toggle",Number(this.value))}}}),d=(a("7053"),a("d959")),b=a.n(d);const u=b()(r,[["render",n],["__scopeId","data-v-ac484fca"]]);t["a"]=u},"4e83":function(e,t,a){"use strict";a("7df5")},"66a1":function(e,t,a){"use strict";a("d6ad")},7053:function(e,t,a){"use strict";a("dee2")},7100:function(e,t,a){},"7df5":function(e,t,a){},a1e97:function(e,t,a){},a7f8:function(e,t,a){},ac95:function(e,t,a){"use strict";var o=a("7a23");const l={class:"large-toggle-block"},c={key:0,class:"title"},i={class:"large-toggle-container"};function n(e,t,a,n,s,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[e.title?(Object(o["openBlock"])(),Object(o["createElementBlock"])("label",c,Object(o["toDisplayString"])(e.title),1)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["large-toggle left",0==e.value?"selected":"default"]),onClick:t[0]||(t[0]=t=>e.toggle(0))},[Object(o["createElementVNode"])("label",{class:Object(o["normalizeClass"])(["text",0==e.value?"selected":""])},Object(o["toDisplayString"])(e.$localizeFilter(e.variants[0])),3)],2),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["large-toggle right",1==e.value?"selected":"default"]),onClick:t[1]||(t[1]=t=>e.toggle(1))},[Object(o["createElementVNode"])("label",{class:Object(o["normalizeClass"])(["text",1==e.value?"selected":""])},Object(o["toDisplayString"])(e.$localizeFilter(e.variants[1])),3)],2)])])}var s=a("ed09"),r=Object(s["a"])({props:["title","variants","selected"],watch:{selected:function(e,t){null!=e&&void 0!=e&&(this.value=this.variants.indexOf(e))}},data:()=>({value:0}),methods:{toggle(e){this.value=e,this.$emit("toggle",Number(this.value))}}}),d=(a("f39b"),a("d959")),b=a.n(d);const u=b()(r,[["render",n],["__scopeId","data-v-f809d2e6"]]);t["a"]=u},be04:function(e,t,a){},d6ad:function(e,t,a){},dee2:function(e,t,a){},e261:function(e,t,a){"use strict";a.r(t);a("14d9");var o=a("7a23"),l=a("5bab"),c=a.n(l);const i=e=>(Object(o["pushScopeId"])("data-v-b25e96de"),e=e(),Object(o["popScopeId"])(),e),n=i(()=>Object(o["createElementVNode"])("img",{class:"back-button-arrow",src:c.a},null,-1)),s={class:"back-button-text"},r={class:"title-block"},d={class:"title"},b=i(()=>Object(o["createElementVNode"])("div",{class:"subtitle"},null,-1)),u={class:"bid-button-container"},m={class:"counter"},p=i(()=>Object(o["createElementVNode"])("span",{class:"label"},"До следующего раунда: ",-1)),h={class:"value"},O={class:"bids-title"},j={class:"bids-container"},g={key:0,class:"load-more-button-container"};function v(e,t,a,l,c,i){const v=Object(o["resolveComponent"])("LargeToggle"),y=Object(o["resolveComponent"])("AuctionBid"),E=Object(o["resolveComponent"])("AuctionBuyBidModal"),N=Object(o["resolveComponent"])("AuctionSellBidModal"),_=Object(o["resolveComponent"])("AuctionInfoModal");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"auction",onClick:t[3]||(t[3]=(...t)=>e.hideDropdowns&&e.hideDropdowns(...t))},[Object(o["createElementVNode"])("button",{class:"back-button",onClick:t[0]||(t[0]=t=>e.$router.push("/cabinet/liquidityProvider"))},[n,Object(o["createElementVNode"])("p",s,Object(o["toDisplayString"])(e.$localizeFilter("liquidity_provider")),1)]),Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",d,Object(o["toDisplayString"])(e.$localizeFilter("auction_title",[e.currency1,e.currency2])),1)]),b,Object(o["createVNode"])(v,{title:null,variants:e.actions.map(e=>e+"_2"),onToggle:e.toggle},null,8,["variants","onToggle"]),Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("button",{class:"bid-button",onClick:t[1]||(t[1]=t=>e.submitApplication())},Object(o["toDisplayString"])(e.$localizeFilter("submit_application")),1),Object(o["createElementVNode"])("div",m,[p,Object(o["createElementVNode"])("span",h,Object(o["toDisplayString"])(e.countdown),1)])]),Object(o["createElementVNode"])("div",O,Object(o["toDisplayString"])(e.$localizeFilter("all_bids")),1),Object(o["createElementVNode"])("div",j,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.bids,(t,a)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:a},[Object(o["createVNode"])(y,{bid:t,onChangeBid:e.changeBid,onCancelBid:e.cancelBid},null,8,["bid","onChangeBid","onCancelBid"])]))),128)),e.bids.length>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",g,[Object(o["createElementVNode"])("button",{class:"load-more-button",onClick:t[2]||(t[2]=t=>e.loadMoreBids())},Object(o["toDisplayString"])(e.$localizeFilter("load_more")),1)])):Object(o["createCommentVNode"])("",!0)]),e.showBuyBidModal?(Object(o["openBlock"])(),Object(o["createBlock"])(E,{key:0,poolId:e.poolId,bid:e.buyBidModalData,testBalance:e.testBalance,onReloadData:e.reloadData,onCloseModal:e.closeModals},null,8,["poolId","bid","testBalance","onReloadData","onCloseModal"])):Object(o["createCommentVNode"])("",!0),e.showSellBidModal?(Object(o["openBlock"])(),Object(o["createBlock"])(N,{key:1,poolId:e.poolId,testBalance:e.testBalance,onReloadData:e.reloadData,onCloseModal:e.closeModals},null,8,["poolId","testBalance","onReloadData","onCloseModal"])):Object(o["createCommentVNode"])("",!0),e.showInfoModal?(Object(o["openBlock"])(),Object(o["createBlock"])(_,{key:2,onCloseModal:e.closeModals},null,8,["onCloseModal"])):Object(o["createCommentVNode"])("",!0)])}var y=a("ed09"),E=a("e977");const N=e=>(Object(o["pushScopeId"])("data-v-dd748838"),e=e(),Object(o["popScopeId"])(),e),_={class:"row-1"},k={class:"column-1"},B={class:"column-title"},V={class:"column-value"},$={style:"font-weight: bold;"},w={class:"column-2"},f={class:"column-title"},M={class:"column-value"},D=N(()=>Object(o["createElementVNode"])("span",{style:"font-weight: bold;"},"USDT",-1)),S={class:"row-2"},C={key:0,class:"column-3"},A={class:"column-title"},I={class:"column-value"},z=N(()=>Object(o["createElementVNode"])("span",{style:"font-weight: bold;"},"USDT",-1)),x={key:1,class:"column-4"};function T(e,t,a,l,c,i){var n;return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["auction-bid",e.getClass()])},[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["auction-bid-background",e.getClass()])},null,2),Object(o["createElementVNode"])("div",_,[Object(o["createElementVNode"])("div",k,[Object(o["createElementVNode"])("div",B,Object(o["toDisplayString"])(e.$localizeFilter("user"))+": ",1),Object(o["createElementVNode"])("div",V,[Object(o["createElementVNode"])("span",$,Object(o["toDisplayString"])("ID: "+e.bid.clientId),1)])]),Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("div",f,Object(o["toDisplayString"])(e.$localizeFilter("pool_share_size"))+": ",1),Object(o["createElementVNode"])("div",M,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$utils.formatNumber(e.amount,"en-US",0,6))+" ",1),D])])]),Object(o["createElementVNode"])("div",S,["sell"!==e.bid.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",C,[Object(o["createElementVNode"])("div",A,Object(o["toDisplayString"])(e.$localizeFilter("price"))+": ",1),Object(o["createElementVNode"])("div",I,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$utils.formatNumber(e.payAmount,"en-US",0,6))+" ",1),z])])):Object(o["createCommentVNode"])("",!0),e.bid.clientId===(null===(n=e.profile)||void 0===n?void 0:n.id)&&"sell"!==e.bid.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",x,[Object(o["createElementVNode"])("button",{class:"change-button",onClick:t[0]||(t[0]=(...t)=>e.changeBid&&e.changeBid(...t))},Object(o["toDisplayString"])(e.$localizeFilter("change")),1),Object(o["createElementVNode"])("button",{class:"underline-button",onClick:t[1]||(t[1]=(...t)=>e.cancelBid&&e.cancelBid(...t))},Object(o["toDisplayString"])(e.$localizeFilter("cancel")),1)])):Object(o["createCommentVNode"])("",!0)])],2)}var F=Object(y["a"])({props:["bid"],setup(){return{}},methods:{changeBid(){this.$emit("changeBid",this.bid)},cancelBid(){this.$emit("cancelBid",this.bid)},getClass(){var e;let t="sell"===this.bid.type?"sell":"buy";return(null===(e=this.profile)||void 0===e?void 0:e.id)===this.bid.clientId&&(t+="-mine"),this.bid.isPriority&&(t+=" priority"),t}},computed:{profile(){return this.$store.getters.profile},amount(){return(this.bid.amount||0)/1e6},payAmount(){return(this.bid.payAmount||0)/1e6}}}),q=(a("edac"),a("d959")),P=a.n(q);const U=P()(F,[["render",T],["__scopeId","data-v-dd748838"]]);var L=U,R=a("3577"),H=a("ac95");const J=e=>(Object(o["pushScopeId"])("data-v-96d8ab68"),e=e(),Object(o["popScopeId"])(),e),G={class:"modal-layout"},K={class:"new-modal-back-button-container"},Q={class:"modal-content"},W={class:"modal-content-outer-container"},X={class:"modal-content-container"},Y={class:"window-title"},Z={class:"window-text"},ee={class:"input-field"},te=["placeholder"],ae={class:"errors"},oe={class:"test-balance"},le={class:"window-text"},ce={class:"input-field"},ie=["placeholder"],ne={class:"errors"},se={class:"modal-warning"},re=J(()=>Object(o["createElementVNode"])("i",{class:"material-icons",style:{color:"#CA8920!important","margin-top":"2px"}},"report",-1)),de={class:"window-text warning"};function be(e,t,a,l,c,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",G,[Object(o["createElementVNode"])("div",{class:"darken",onClick:t[5]||(t[5]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(o["createElementVNode"])("div",{class:"new-modal buy-bid-modal",onClick:t[4]||(t[4]=Object(o["withModifiers"])(()=>{},["stop"]))},[Object(o["createElementVNode"])("div",K,[Object(o["createElementVNode"])("button",{class:"new-modal-back-button thin",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(o["createElementVNode"])("div",Q,[Object(o["createElementVNode"])("div",W,[Object(o["createElementVNode"])("div",X,[Object(o["createElementVNode"])("p",Y,Object(o["toDisplayString"])(e.$localizeFilter(e.isEditing?"changing_application_for_auction":"creating_application_for_auction")),1),Object(o["createElementVNode"])("p",Z,Object(o["toDisplayString"])(e.$localizeFilter("buy_bid_modal_text_amount",["USDT"])),1),Object(o["createElementVNode"])("div",ee,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"amount",class:Object(o["normalizeClass"])(["custom-input",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("amount_in",["USDT"]),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t)},null,10,te),[[o["vModelText"],e.amount,void 0,{trim:!0}]]),Object(o["createElementVNode"])("div",ae,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.v$.amount.$errors,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",{class:"error",key:t},Object(o["toDisplayString"])(e.$message),1))),128))])]),Object(o["createElementVNode"])("div",oe,Object(o["toDisplayString"])(e.$localizeFilter("available_for_deposit",[e.$utils.formatNumber(e.maxAmount,"en-US",0,6)+" USDT"])),1),Object(o["createElementVNode"])("p",le,Object(o["toDisplayString"])(e.$localizeFilter("buy_bid_modal_text_price",["USDT"])),1),Object(o["createElementVNode"])("div",ce,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"payAmount",class:Object(o["normalizeClass"])(["custom-input",{invalid:e.v$.payAmount.$error}]),placeholder:e.$localizeFilter("price_in",["USDT"]),type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.payAmount=t)},null,10,ie),[[o["vModelText"],e.payAmount,void 0,{trim:!0}]]),Object(o["createElementVNode"])("div",ne,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.v$.payAmount.$errors,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",{class:"error",key:t},Object(o["toDisplayString"])(e.$message),1))),128))])]),Object(o["createElementVNode"])("div",se,[re,Object(o["createElementVNode"])("p",de,Object(o["toDisplayString"])(e.$localizeFilter("buy_bid_modal_warning")),1)]),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])(["basic-button submit-button",e.submitInProgress?"inactive":""]),onClick:t[3]||(t[3]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(o["toDisplayString"])(e.$localizeFilter(e.isEditing?"change_an_application":"place_an_application")),3)])])])])])])}var ue=a("25a0"),me=a("e3e1");var pe=Object(y["a"])({props:{bid:{type:Object,default:null},poolId:{type:Number,required:!0},testBalance:{type:Number,required:!0}},validations(){return{amount:{required:me["b"].withMessage(Object(E["a"])("field_must_not_be_empty"),me["h"]),numeric:me["b"].withMessage(Object(E["a"])("field_must_be_numeric"),me["h"]),minValue:me["b"].withMessage(Object(E["a"])("min_value",[this.minAmount]),Object(me["f"])(this.minAmount))},payAmount:{required:me["b"].withMessage(Object(E["a"])("field_must_not_be_empty"),me["h"]),numeric:me["b"].withMessage(Object(E["a"])("field_must_be_numeric"),me["h"]),minValue:me["b"].withMessage(Object(E["a"])("min_value",[this.minAmount]),Object(me["f"])(this.minAmount)),maxValue:me["b"].withMessage(Object(E["a"])("not_enough_funds_on_balance",["USDT"]),Object(me["d"])(this.maxAmount))}}},setup(){return{v$:Object(ue["a"])()}},data:()=>({amount:null,payAmount:null,minAmount:0,submitInProgress:!1}),methods:{closeModal(e){this.$emit("closeModal",e)},async submitHandler(){var e;if(this.v$.$touch(),this.v$.$error)return;this.submitInProgress=!0;const t=Math.floor(1e6*Number(this.amount)),a=Math.floor(1e6*Number(this.payAmount));if(t>a)return void this.$error({message:Object(E["a"])("error_amount_more_than_pay_amount")});const o={poolId:this.poolId,requestId:null===(e=this.bid)||void 0===e?void 0:e.requestId,amount:t,payAmount:a};try{this.isEditing?(await this.$store.dispatch("editLiquidityProvidingAuctionBuyRequest",o),this.$message(Object(E["a"])("change_bid_successful")),this.$emit("reloadData"),this.$emit("closeModal"),setTimeout(()=>{this.submitInProgress=!1},1e3)):(await this.$store.dispatch("createLiquidityProvidingAuctionBuyRequest",o),this.$message(Object(E["a"])("buy_bid_successful")),this.$emit("reloadData"),this.$emit("closeModal"),setTimeout(()=>{this.submitInProgress=!1},1e3))}catch(l){this.$error(l),setTimeout(()=>{this.submitInProgress=!1},1e3)}}},computed:{isEditing(){return null!==this.bid},assetDecimalsMap(){return this.$store.getters.assetDecimalsMap},maxAmount(){return this.testBalance/1e6}},mounted(){this.bid&&(this.amount=this.bid.amount/1e6,this.payAmount=this.bid.payAmount/1e6)}});a("4e83");const he=P()(pe,[["render",be],["__scopeId","data-v-96d8ab68"]]);var Oe=he;const je=e=>(Object(o["pushScopeId"])("data-v-744749ba"),e=e(),Object(o["popScopeId"])(),e),ge={class:"modal-layout"},ve={class:"new-modal-back-button-container"},ye={class:"modal-content"},Ee={class:"modal-content-outer-container"},Ne={class:"modal-content-container"},_e={class:"window-title"},ke={class:"window-text"},Be={class:"input-field"},Ve=["placeholder"],$e={class:"errors"},we={class:"modal-warning"},fe=je(()=>Object(o["createElementVNode"])("i",{class:"material-icons",style:{color:"#CA8920!important"}},"report",-1)),Me={class:"window-text warning"},De={class:"modal-warning"},Se=je(()=>Object(o["createElementVNode"])("i",{class:"material-icons",style:{color:"#CA8920!important"}},"report",-1)),Ce=["innerHTML"],Ae={class:"checkbox-labels-block"},Ie={for:"checkbox",class:"conditions-label"};function ze(e,t,a,l,c,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ge,[Object(o["createElementVNode"])("div",{class:"darken",onClick:t[7]||(t[7]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(o["createElementVNode"])("div",{class:"new-modal sell-bid-modal",onClick:t[6]||(t[6]=Object(o["withModifiers"])(()=>{},["stop"]))},[Object(o["createElementVNode"])("div",ve,[Object(o["createElementVNode"])("button",{class:"new-modal-back-button thin",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(o["createElementVNode"])("div",ye,[Object(o["createElementVNode"])("div",Ee,[Object(o["createElementVNode"])("div",Ne,[Object(o["createElementVNode"])("p",_e,Object(o["toDisplayString"])(e.$localizeFilter("sell_application_on_auction")),1),Object(o["createElementVNode"])("p",ke,Object(o["toDisplayString"])(e.$localizeFilter("sell_bid_modal_text_amount",["USDT"])),1),Object(o["createElementVNode"])("div",Be,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"amount",class:Object(o["normalizeClass"])(["custom-input",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("amount_in",["USDT"]),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t)},null,10,Ve),[[o["vModelText"],e.amount,void 0,{trim:!0}]]),Object(o["createElementVNode"])("div",$e,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.v$.amount.$errors,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("small",{class:"error",key:t},Object(o["toDisplayString"])(e.$message),1))),128))])]),Object(o["createElementVNode"])("div",we,[fe,Object(o["createElementVNode"])("p",Me,Object(o["toDisplayString"])(e.$localizeFilter("sell_bid_modal_warning_1")),1)]),Object(o["createElementVNode"])("div",De,[Se,Object(o["createElementVNode"])("p",{class:"window-text warning",innerHTML:e.$localizeFilter("sell_bid_modal_warning_2")},null,8,Ce)]),Object(o["createElementVNode"])("div",{class:"conditions-block",onClick:t[4]||(t[4]=(...t)=>e.acceptСonditions&&e.acceptСonditions(...t))},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"checkbox",id:"checkbox",class:"checkbox","onUpdate:modelValue":t[2]||(t[2]=t=>e.conditionsAccepted=t),onClick:t[3]||(t[3]=(...t)=>e.acceptСonditions&&e.acceptСonditions(...t))},null,512),[[o["vModelCheckbox"],e.conditionsAccepted]]),Object(o["createElementVNode"])("div",Ae,[Object(o["createElementVNode"])("label",Ie,Object(o["toDisplayString"])(e.$localizeFilter("modal_sell_bid_agreement")),1)])]),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])(["basic-button submit-button",(e.conditionsAccepted?"":"inactive")+(e.submitInProgress?"inactive":"")]),onClick:t[5]||(t[5]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(o["toDisplayString"])(e.$localizeFilter("create_an_application")),3)])])])])])])}var xe=Object(y["a"])({props:{poolId:{type:Number,required:!0},testBalance:{type:Number,required:!0}},validations(){return{amount:{required:me["b"].withMessage(Object(E["a"])("field_must_not_be_empty"),me["h"]),numeric:me["b"].withMessage(Object(E["a"])("field_must_be_numeric"),me["h"]),minValue:me["b"].withMessage(Object(E["a"])("min_value",[this.minAmount]),Object(me["f"])(this.minAmount)),maxValue:me["b"].withMessage(Object(E["a"])("not_enough_funds_on_balance",["USDT"]),Object(me["d"])(this.maxAmount))}}},setup(){return{v$:Object(ue["a"])()}},data:()=>({amount:null,minAmount:0,submitInProgress:!1,conditionsAccepted:!1}),methods:{"acceptСonditions"(){this.conditionsAccepted=!this.conditionsAccepted},closeModal(e){this.$emit("closeModal",e)},async submitHandler(){if(this.v$.$touch(),!this.v$.$error&&this.conditionsAccepted){this.submitInProgress=!0;try{const e=Math.floor(1e6*Number(this.amount)),t={poolId:this.poolId,amount:e};await this.$store.dispatch("createLiquidityProvidingAuctionSellRequest",t),this.$message(Object(E["a"])("sell_bid_successful")),this.$emit("reloadData"),this.$emit("closeModal"),setTimeout(()=>{this.submitInProgress=!1},1e3)}catch(e){this.$error(e),setTimeout(()=>{this.submitInProgress=!1},1e3)}}}},computed:{assetDecimalsMap(){return this.$store.getters.assetDecimalsMap},maxAmount(){return this.testBalance/1e6}},mounted(){}});a("3451");const Te=P()(xe,[["render",ze],["__scopeId","data-v-744749ba"]]);var Fe=Te;const qe={class:"modal-layout"},Pe={class:"new-modal-back-button-container"},Ue={class:"modal-content"},Le={class:"window-title"},Re={class:"window-text"};function He(e,t,a,l,c,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",qe,[Object(o["createElementVNode"])("div",{class:"darken",onClick:t[3]||(t[3]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(o["createElementVNode"])("div",{class:"new-modal bid-info-modal",onClick:t[2]||(t[2]=Object(o["withModifiers"])(()=>{},["stop"]))},[Object(o["createElementVNode"])("div",Pe,[Object(o["createElementVNode"])("button",{class:"new-modal-back-button thin",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(o["createElementVNode"])("div",Ue,[Object(o["createElementVNode"])("p",Le,Object(o["toDisplayString"])(e.$localizeFilter("auction")),1),Object(o["createElementVNode"])("p",Re,Object(o["toDisplayString"])(e.$localizeFilter("auction_info_modal_text")),1),Object(o["createElementVNode"])("button",{class:"basic-button submit-button",onClick:t[1]||(t[1]=t=>e.closeModal())},"Ok")])])])])}var Je=Object(y["a"])({props:{},setup(){},data:()=>({}),methods:{closeModal(e){this.$emit("closeModal",e)}},computed:{}});a("32b31");const Ge=P()(Je,[["render",He],["__scopeId","data-v-210b7873"]]);var Ke=Ge,Qe=Object(y["a"])({components:{AuctionBid:L,BuySellToggle:R["a"],LargeToggle:H["a"],AuctionBuyBidModal:Oe,AuctionSellBidModal:Fe,AuctionInfoModal:Ke},props:{poolId:{type:Number,required:!0},currency1:{type:String,required:!0},currency2:{type:String,required:!0}},setup(){},watch:{selectedAction(e,t){this.$nextTick(()=>{e!==t&&(this.reloadData(),this.restartInterval())})}},data:()=>({testBalance:null,showBuyBidModal:!1,buyBidModalData:null,showSellBidModal:!1,showInfoModal:!1,bids:[],pageSize:20,page:1,interval:null}),computed:{actions(){return this.$store.getters.auctionActions},selectedAction(){return this.$store.getters.selectedAuctionAction},skip(){return(this.page-1)*this.pageSize},limit(){return this.pageSize},countdown(){let e=Math.max(this.$store.getters.auctionNextRoundTimeLeft,0),t=Math.floor(e/1e3),a=Math.floor(t/60),o=t-60*a;return o<10&&(o="0"+o),`${a}:${o}`}},methods:{async clearData(){try{await this.$store.dispatch("liquidityProvidingAuctionCleanData"),this.reloadData()}catch(e){console.log(e)}},async executeRound(){try{await this.$store.dispatch("liquidityProvidingAuctionExecuteTradingRound"),this.reloadData()}catch(e){console.log(e)}},restartInterval(){this.interval?(clearInterval(this.interval),this.interval=null,this.interval=setInterval(async()=>{await this.loadData(!0,!1)},3e3)):this.interval=setInterval(async()=>{await this.loadData(!0,!1)},3e3)},closeModals(){this.showBuyBidModal=!1,this.buyBidModalData=null,this.showSellBidModal=!1,this.testBalance=null,this.showInfoModal=!1},toggle(e){this.$store.commit("SET_SELECTED_AUCTION_ACTION",this.actions[e]),this.reloadData()},async reloadData(){await this.loadData(!0)},async loadData(e=!1,t=!1){try{t?this.bids.length%this.pageSize===0&&this.page++:this.page=1;const e={poolId:this.poolId,type:this.selectedAction,skip:this.skip,limit:this.limit},a=await this.$store.dispatch("getAuctionProvidingBids",e);let o=a.bids;this.$store.dispatch("stopNextAuctionRoundTimer"),this.$store.dispatch("runNextAuctionRoundTimer",{timestamp:a.nextRoundTimestamp});for(let t=0;t<o.length;t++)o[t].type=this.selectedAction;t?this.bids.length%this.pageSize===0?(this.bids=this.bids.concat(o),0===o.length&&this.page--):this.bids=this.bids.slice(0,this.bids.length-this.bids.length%this.pageSize).concat(o):this.bids=o}catch(a){e||this.$error(a)}},async submitApplication(e=null){try{const t=await this.$store.dispatch("getLiquidityProvidingBalance");this.testBalance=t.balance,"buy"===this.selectedAction?this.openBuyBidModal(e):this.openSellBidModal()}catch(t){this.$error(t)}},openBuyBidModal(e=null){e&&(this.buyBidModalData=e),this.showBuyBidModal=!0},openSellBidModal(){this.showSellBidModal=!0},openInfoModal(){this.showInfoModal=!0},changeBid(e){this.submitApplication(e)},cancelBid(e){const t={requestId:e.requestId};try{this.$store.dispatch("cancelLiquidityProvidingAuctionBuyRequest",t),this.$message(Object(E["a"])("bid_cancelled"))}catch(a){this.$error(a)}},loadMoreBids(){clearInterval(this.interval),this.interval=null,this.loadData(!0,!0)}},async mounted(){await this.loadData(),this.interval=setInterval(async()=>{await this.loadData(!0,!1)},3e3)},unmounted(){this.$store.commit("SET_SELECTED_AUCTION_ACTION","buy"),clearInterval(this.interval),this.interval=null,this.$store.dispatch("stopNextAuctionRoundTimer")}});a("66a1");const We=P()(Qe,[["render",v],["__scopeId","data-v-b25e96de"]]);t["default"]=We},edac:function(e,t,a){"use strict";a("a7f8")},f39b:function(e,t,a){"use strict";a("7100")}}]);
//# sourceMappingURL=chunk-c5409ac8.52b58469.js.map