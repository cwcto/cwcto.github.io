(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-719052b0"],{"024c":function(e,t,i){e.exports=i.p+"img/MATIC.1087d3d6.svg"},"056f":function(e,t,i){e.exports=i.p+"img/USDV.43f688a0.svg"},"17e0":function(e,t,i){e.exports=i.p+"img/ETH.7c199546.svg"},"1aa6":function(e,t,i){e.exports=i.p+"img/ETC.9d4534ae.svg"},2061:function(e,t,i){},3311:function(e,t,i){},"339f":function(e,t,i){},"359b":function(e,t,i){e.exports=i.p+"media/income_sound.4e707068.mp3"},3770:function(e,t,i){e.exports=i.p+"img/DAI.1a84a86b.svg"},"3c94":function(e,t,i){"use strict";i("82a1")},"50c7":function(e,t,i){e.exports=i.p+"img/USDT.43f688a0.svg"},5520:function(e,t,i){e.exports=i.p+"img/USDC.3b5972c1.svg"},"556f":function(e,t,i){e.exports=i.p+"img/DASH.94b9ae90.svg"},"55fa":function(e,t,i){"use strict";i("339f")},5738:function(e,t,i){e.exports=i.p+"img/XMR.22ac5949.svg"},5913:function(e,t,i){},"613e":function(e,t,i){"use strict";i("3311")},"644b":function(e,t,i){e.exports=i.p+"img/SOL.4e6fecb2.svg"},"64cc":function(e,t,i){e.exports=i.p+"img/LTC.6046cca1.svg"},7100:function(e,t,i){},7776:function(e,t,i){"use strict";i("2061")},"801e":function(e,t,i){e.exports=i.p+"img/DOGE.bfe942ea.svg"},"81d5":function(e,t,i){"use strict";i("5913")},"82a1":function(e,t,i){},9077:function(e,t,i){e.exports=i.p+"img/BTC.f92890de.svg"},"9fb2":function(e,t,i){e.exports=i.p+"img/BTCV.f92890de.svg"},a637:function(e,t,i){e.exports=i.p+"img/TRX.4f3f3903.svg"},a645:function(e,t,i){e.exports=i.p+"img/XRP.639b151a.svg"},ab23:function(e,t,i){},ac95:function(e,t,i){"use strict";var a=i("7a23");const o={class:"large-toggle-block"},c={key:0,class:"title"},n={class:"large-toggle-container"};function l(e,t,i,l,s,r){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[e.title?(Object(a["openBlock"])(),Object(a["createElementBlock"])("label",c,Object(a["toDisplayString"])(e.title),1)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["large-toggle left",0==e.value?"selected":"default"]),onClick:t[0]||(t[0]=t=>e.toggle(0))},[Object(a["createElementVNode"])("label",{class:Object(a["normalizeClass"])(["text",0==e.value?"selected":""])},Object(a["toDisplayString"])(e.$localizeFilter(e.variants[0])),3)],2),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["large-toggle right",1==e.value?"selected":"default"]),onClick:t[1]||(t[1]=t=>e.toggle(1))},[Object(a["createElementVNode"])("label",{class:Object(a["normalizeClass"])(["text",1==e.value?"selected":""])},Object(a["toDisplayString"])(e.$localizeFilter(e.variants[1])),3)],2)])])}var s=i("ed09"),r=Object(s["a"])({props:["title","variants","selected"],watch:{selected:function(e,t){null!=e&&void 0!=e&&(this.value=this.variants.indexOf(e))}},data:()=>({value:0}),methods:{toggle(e){this.value=e,this.$emit("toggle",Number(this.value))}}}),d=(i("f39b"),i("d959")),h=i.n(d);const m=h()(r,[["render",l],["__scopeId","data-v-f809d2e6"]]);t["a"]=m},b75c:function(e,t,i){e.exports=i.p+"img/AXS.96e521c9.svg"},c7e0:function(e,t,i){"use strict";i("ab23")},db1b:function(e,t,i){"use strict";var a=i("7a23"),o=i("359b"),c=i.n(o);const n=e=>(Object(a["pushScopeId"])("data-v-7d529af3"),e=e(),Object(a["popScopeId"])(),e),l={class:"amount"},s={class:"title"},r={key:0,class:"highlight-block"},d=["src"],h={class:"amount"},m={key:0,class:"withdraw-block absolute"},b={class:"withdraw-left-block"},u={class:"available-to-withdraw"},p={class:"comission"},g={key:1,class:"withdraw-block absolute"},O={key:0,class:"withdraw-left-block"},v={class:"available-to-withdraw"},j={class:"comission"},f={key:1,class:"withdraw-left-block"},k={class:"available-to-withdraw"},w={class:"comission"},y=n(()=>Object(a["createElementVNode"])("audio",null,[Object(a["createElementVNode"])("source",{src:c.a,type:"audio/mpeg"})],-1));function C(e,t,i,o,c,n){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[Object(a["createElementVNode"])("div",s,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(`amount-block ${e.color} ${e.classOverride} ${e.classByType}`)},[e.showHighlight?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("img",{class:"amount-image",src:e.amountImage},null,8,d),Object(a["createElementVNode"])("div",h,Object(a["toDisplayString"])(e.formattedAmount)+" "+Object(a["toDisplayString"])(e.unit),1)],2),"withdraw-available"===e.classOverride?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",m,[Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("div",u,Object(a["toDisplayString"])(e.$localizeFilter("available_to_withdraw",[e.$utils.formatNumber(e.availableProfitToWithdraw,"en-US",6,6)+" USDT"])),1),Object(a["createElementVNode"])("div",p,Object(a["toDisplayString"])(e.$localizeFilter("comission_1_usdt")),1)]),Object(a["createElementVNode"])("button",{class:"underline-button",onClick:t[0]||(t[0]=(...t)=>e.liquidityProvidingWithdrawProfit&&e.liquidityProvidingWithdrawProfit(...t))},Object(a["toDisplayString"])(e.$localizeFilter("withdraw")),1)])):Object(a["createCommentVNode"])("",!0),"gift"===e.type?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",g,[e.giftPercent?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",O,[Object(a["createElementVNode"])("div",v,Object(a["toDisplayString"])(e.$localizeFilter("give_a_present_as_percent",[""+e.$utils.formatNumber(e.giftPercent,"en-US",1,1)])),1),Object(a["createElementVNode"])("div",j,Object(a["toDisplayString"])(e.$localizeFilter("give_a_present_as_percent_subtitle")),1)])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",f,[Object(a["createElementVNode"])("div",k,Object(a["toDisplayString"])(e.$localizeFilter("give_a_present_not_avalilable")),1),Object(a["createElementVNode"])("div",w,Object(a["toDisplayString"])(e.$localizeFilter("give_a_present_not_avalilable_subtitle")),1)])),e.amount>0&&e.giftPercent?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:2,class:"underline-button",onClick:t[1]||(t[1]=(...t)=>e.showGiftModal&&e.showGiftModal(...t))},Object(a["toDisplayString"])(e.$localizeFilter("send")),1)):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0),y])}i("252a");var N=i("ed09"),V=i("1209"),E=(i("fa7d"),i("e977"));const _=i("359b");var B=Object(N["a"])({props:{classOverride:{type:String,default:""},amount:{type:Number,required:!0},availableProfitToWithdraw:{type:Number,default:0},title:{type:String,required:!0},color:{type:String,required:!0},type:{type:String,default:null},soundEnabled:{type:Boolean,default:!1},giftPercent:{type:Number,default:0}},watch:{amount(e,t){e!==t&&this.$nextTick(()=>{"income"===(null===this||void 0===this?void 0:this.type)?this.index>0?(this.count=t,this.setCount(e)):(this.index=1,this.count=e):"arbitrationTotalIncome"===this.type?this.index>0&&e>t?(this.count=t,this.setCount(e),this.animateHighlight(),this.soundEnabled&&this.play()):(this.index=1,this.count=e):this.count=e})}},setup(){const e=new Audio(_);function t(){e.muted=!1,e.play()}return e.muted=!0,{play:t}},data:()=>({count:0,index:0,showHighlight:!1}),methods:{showGiftModal(){this.$emit("showGiftModal")},animateHighlight(){!1===this.showHighlight&&(this.showHighlight=!0,setTimeout(()=>{this.showHighlight=!1},4500))},setCount(e){const t={n:this.count};Object(V["a"])({targets:t,n:e,round:1,duration:3e3,easing:"linear",update:()=>{this.count=t.n}})},async liquidityProvidingWithdrawProfit(){try{await this.$store.dispatch("liquidityProvidingWithdrawProfit"),this.$message(Object(E["a"])("liquidity_withdraw_successfull")),this.$emit("reloadData")}catch(e){this.$error(e)}}},computed:{formattedAmount(){return"gift"===this.type?this.count:(this.count/1e6).toFixed(6)},amountImage(){return"gift"===this.type?i("3897"):i("1c8f")},classByType(){return"gift"===this.type?"gift":""},unit(){return"gift"===this.type?Object(E["a"])("gifts"):"USDT"}},mounted(){"income"!==this.type&&(this.count=this.amount)}}),S=(i("613e"),i("d959")),D=i.n(S);const x=D()(B,[["render",C],["__scopeId","data-v-7d529af3"]]);t["a"]=x},dd6d:function(e,t,i){e.exports=i.p+"img/UNI.da51f3ab.svg"},dfce:function(e,t,i){var a={"./ADA.svg":"e217","./AXS.svg":"b75c","./BTC.svg":"9077","./BTCV.svg":"9fb2","./DAI.svg":"3770","./DASH.svg":"556f","./DOGE.svg":"801e","./ETC.svg":"1aa6","./ETH.svg":"17e0","./LTC.svg":"64cc","./LUNA2.svg":"f7fa","./MATIC.svg":"024c","./SHIB.svg":"ff25","./SOL.svg":"644b","./TRX.svg":"a637","./UNI.svg":"dd6d","./USDC.svg":"5520","./USDT.svg":"50c7","./USDV.svg":"056f","./XMR.svg":"5738","./XRP.svg":"a645"};function o(e){var t=c(e);return i(t)}function c(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=c,e.exports=o,o.id="dfce"},e217:function(e,t,i){e.exports=i.p+"img/ADA.6aea691c.svg"},e690:function(e,t,i){"use strict";i.r(t);var a=i("7a23"),o=i("0411"),c=i.n(o);const n=e=>(Object(a["pushScopeId"])("data-v-92190f90"),e=e(),Object(a["popScopeId"])(),e),l={class:"arbitration"},s={class:"title"},r={class:"subtitle"},d={class:"sound-block"},h=n(()=>Object(a["createElementVNode"])("img",{class:Object(a["normalizeClass"])("bell"),src:c.a},null,-1)),m={class:"toggle-flex"},b={class:"basic-button inactive to-trader"},u={class:"chain-amount first-block"},p={key:0,class:"chain-amount"},g={key:1},O={key:2};function v(e,t,i,o,c,n){const v=Object(a["resolveComponent"])("Toggle"),j=Object(a["resolveComponent"])("LargeToggle"),f=Object(a["resolveComponent"])("AmountView"),k=Object(a["resolveComponent"])("ArbitrationChain"),w=Object(a["resolveComponent"])("ArbitrationDepositModal"),y=Object(a["resolveComponent"])("ArbitrationVideoModal"),C=Object(a["resolveComponent"])("ArbitrationConfirmationModal");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,[Object(a["createElementVNode"])("div",s,Object(a["toDisplayString"])(e.$localizeFilter("arbitration_title")),1),Object(a["createElementVNode"])("div",r,Object(a["toDisplayString"])(e.$localizeFilter("arbitration_subtitle")),1),Object(a["createElementVNode"])("div",d,[h,Object(a["createVNode"])(v,{variants:e.soundAlertOptions,selected:e.selectedSoundAlertOption,onToggle:e.toggleSoundAlertOptions},null,8,["variants","selected","onToggle"])]),Object(a["createElementVNode"])("div",m,[Object(a["createVNode"])(j,{title:null,variants:e.chainTypes,onToggle:e.toggle,class:"toggle"},null,8,["variants","onToggle"]),Object(a["createElementVNode"])("button",b,Object(a["toDisplayString"])(e.$localizeFilter("hand_over_control_to_the_trader")),1)]),Object(a["createElementVNode"])("div",u,[Object(a["createVNode"])(f,{class:"chain-amount-first",title:e.$localizeFilter("amount_income"),amount:e.totalIncome,color:"type-green",type:"arbitrationTotalIncome",soundEnabled:"sound_on"===e.selectedSoundAlertOption},null,8,["title","amount","soundEnabled"]),"chains_in_work"===e.selectedChainType?(Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:0,title:e.$localizeFilter("amount_test"),amount:e.testBalance,color:"type-gray"},null,8,["title","amount"])):Object(a["createCommentVNode"])("",!0)]),"chains_in_work"===e.selectedChainType?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",p,[Object(a["createVNode"])(f,{title:e.$localizeFilter("chains_amount_deposited"),amount:e.totalInWorkInChains,color:"type-gold"},null,8,["title","amount"])])):Object(a["createCommentVNode"])("",!0),"all_chains"===this.selectedChainType?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",g,[Object(a["createVNode"])(a["TransitionGroup"],{name:"list",tag:"div",class:"chains-container all-chains"},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.allChains,t=>(Object(a["openBlock"])(),Object(a["createBlock"])(k,{key:t.chainId,chain:t,type:e.selectedChainType,coinsNames:e.coinsNames,onDeposit:e.deposit,isNewChain:e.isNewChain(t)},null,8,["chain","type","coinsNames","onDeposit","isNewChain"]))),128))]),_:1})])):Object(a["createCommentVNode"])("",!0),"chains_in_work"===this.selectedChainType?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",O,[Object(a["createVNode"])(a["TransitionGroup"],{name:"list",tag:"div",class:"chains-container all-chains"},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.myChains,t=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:t.chainId},[Object(a["createVNode"])(k,{chain:t,type:e.selectedChainType,coinsNames:e.coinsNames,onDeposit:e.deposit},null,8,["chain","type","coinsNames","onDeposit"])]))),128))]),_:1})])):Object(a["createCommentVNode"])("",!0),e.showDepositModal?(Object(a["openBlock"])(),Object(a["createBlock"])(w,{key:3,chain:e.currentChain,testBalance:e.testBalance,onCloseModal:e.closeModals},null,8,["chain","testBalance","onCloseModal"])):Object(a["createCommentVNode"])("",!0),e.showVideoModal?(Object(a["openBlock"])(),Object(a["createBlock"])(y,{key:4,onSkipVideo:e.skipVideo},null,8,["onSkipVideo"])):Object(a["createCommentVNode"])("",!0),e.showAgreementModal?(Object(a["openBlock"])(),Object(a["createBlock"])(C,{key:5,onCloseModal:e.closeModals},null,8,["onCloseModal"])):Object(a["createCommentVNode"])("",!0)])}i("14d9");var j=i("ed09"),f=i("e977"),k=i("ac95"),w=i("ae48"),y=i("67f5"),C=i.n(y),N=i("34f1"),V=i.n(N);const E=["id"],_={key:0,class:"highlight-block"},B={class:"coin-wrapper"},S={class:"coin-image-block"},D=["src"],x={key:0,class:"coin-highlight-block"},T={key:0,class:"coin-name"},$=["src"],I={class:"arbitration-chain-grid"},M={key:0,class:"arbitration-chain-cell cell-1"},F={class:"buttons-block"},A={class:"arbitration-chain-cell cell-2"},z={class:"text-block"},H={class:"title"},L={class:"text"},P={class:"arbitration-chain-cell cell-3"},U={class:"text-block"},W={class:"title"},q={class:"text"},G={class:"arbitration-chain-cell cell-4"},R={class:"text-block"},X={class:"title"},J={class:"text"},Y={key:1,class:"arbitration-chain-cell cell-5"},K={class:"text-block"},Q={class:"title"},Z=["innerHTML"];function ee(e,t,o,c,n,l){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{id:e.getId(),class:Object(a["normalizeClass"])(`arbitration-chain ${e.getColor(e.chain.risk)} ${e.fullClass}`),style:Object(a["normalizeStyle"])(e.fullStyle)},[e.showHighlight?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",_)):Object(a["createCommentVNode"])("",!0),!1===e.viewFull?(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",{key:1,onClick:t[0]||(t[0]=t=>e.changeView()),class:"image-button",src:C.a})):Object(a["createCommentVNode"])("",!0),!0===e.viewFull?(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",{key:2,onClick:t[1]||(t[1]=t=>e.changeView()),class:"image-button",src:V.a})):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(!1===e.viewFull?"coins-flex":"coins-flex-vertical")},[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.chain.tickers,(t,o)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])(!1===e.viewFull?"coin-flex":"coin-flex-vertical"),key:o},[e.chain.currentTickerIndex===o?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:0,class:Object(a["normalizeClass"])(!1===e.viewFull?"active-ticker":"active-ticker-vertical"),style:Object(a["normalizeStyle"])(`opacity: ${e.activeTickerOpacity};`)},null,6)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",B,[Object(a["createElementVNode"])("div",S,[Object(a["createElementVNode"])("img",{class:Object(a["normalizeClass"])(!1===e.viewFull?"coin-image":"coin-image-vertical"),src:i("dfce")(`./${t}.svg`)},null,10,D),e.chain.currentTickerIndex===o?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",x)):Object(a["createCommentVNode"])("",!0)]),!0===e.viewFull?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",T,Object(a["toDisplayString"])(e.getCoinName(t)),1)):Object(a["createCommentVNode"])("",!0)]),o!==e.chain.tickers.length-1?(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",{key:1,class:Object(a["normalizeClass"])(!1===e.viewFull?"coin-arrow":"coin-arrow-vertical"),src:e.getArrow(o)},null,10,$)):Object(a["createCommentVNode"])("",!0)],2))),128))],2),Object(a["createElementVNode"])("div",I,[e.chain.depositedFirstCoin?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",M,[Object(a["createElementVNode"])("div",F,[Object(a["createElementVNode"])("div",{class:"basic-button",onClick:t[2]||(t[2]=(...t)=>e.deposit&&e.deposit(...t))},Object(a["toDisplayString"])(e.$localizeFilter("start")),1)])])),Object(a["createElementVNode"])("div",A,[Object(a["createElementVNode"])("div",z,[Object(a["createElementVNode"])("div",H,Object(a["toDisplayString"])(e.$localizeFilter("risk")),1),Object(a["createElementVNode"])("div",L,Object(a["toDisplayString"])(e.chain.risk+"%"),1)])]),Object(a["createElementVNode"])("div",P,[Object(a["createElementVNode"])("div",U,[Object(a["createElementVNode"])("div",W,Object(a["toDisplayString"])(e.$localizeFilter("interest")),1),Object(a["createElementVNode"])("div",q,Object(a["toDisplayString"])(e.chain.interest+" %"),1)])]),Object(a["createElementVNode"])("div",G,[Object(a["createElementVNode"])("div",R,[Object(a["createElementVNode"])("div",X,Object(a["toDisplayString"])(e.chain.estimatedExecutionTime?e.$localizeFilter("execution_time"):e.$localizeFilter("until_finish")),1),Object(a["createElementVNode"])("div",J,Object(a["toDisplayString"])("~"+e.getTimeString(e.chain.estimatedExecutionTime||e.chain.estimatedTimeUntilFinish)),1)])]),1e5!=e.chain.depositFirstCoinLimit?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Y,[Object(a["createElementVNode"])("div",K,[Object(a["createElementVNode"])("div",Q,Object(a["toDisplayString"])(e.chain.depositFirstCoinLimit?e.$localizeFilter("limit"):e.$localizeFilter("deposited")),1),Object(a["createElementVNode"])("div",{class:"text",innerHTML:e.limitText,style:"white-space: pre-wrap;"},null,8,Z)])])):Object(a["createCommentVNode"])("",!0)])],14,E)}var te=Object(j["a"])({props:{chain:{type:Object,required:!0},type:{type:String,required:!0},isNewChain:{type:Boolean,default:!1},coinsNames:{type:Object,default:()=>{}}},watch:{isNewChain(e,t){this.$nextTick(()=>{this.animateHighlight()})}},data:()=>({currentOrangeArrowIdx:0,activeTickerOpacity:1,activeTickerIsGettingBrighter:!1,interval1:null,interval2:null,viewFull:!1,showHighlight:!1,maxHeight:350,fullMaxHeight:2e3,mountDate:+Date.now(),fullClass:"",fullStyle:""}),computed:{limitText(){let e="";return this.chain.depositFirstCoinLimitMin&&(e+=this.chain.depositFirstCoinLimitMin),this.chain.depositFirstCoinLimitMin&&this.chain.depositFirstCoinLimit&&(e+="&nbsp;-&nbsp;"),this.chain.depositFirstCoinLimit&&(e+=this.chain.depositFirstCoinLimit),e+="&nbsp;"+this.chain.tickers[0],e}},methods:{changeView(){this.fullClass=this.viewFull?"":"full",this.fullStyle=this.viewFull?`max-height: ${this.maxHeight}px;`:`max-height: ${this.fullMaxHeight}px;`,console.log(this.fullClass,this.fullStyle),setTimeout(()=>{this.viewFull=!this.viewFull},0)},getId(){return`arbitration-chain-${this.type}-chain${this.chain.chainId}-${this.mountDate}`},getCoinName(e){return null!==this.coinsNames&&void 0!==this.coinsNames&&this.coinsNames[e]||e},animateHighlight(){!1===this.showHighlight&&(this.showHighlight=!0,setTimeout(()=>{this.showHighlight=!1},22e3))},getTimeString(e){if(e/36e5>=1){const t=Math.ceil(e/36e5);return Object(f["a"])("hours_short",[t])}{const t=Math.ceil(e/6e4);return Object(f["a"])("minutes_short",[t])}},getArrow(e){return"chains_in_work"===this.type?e===this.currentOrangeArrowIdx-1||e===this.currentOrangeArrowIdx+1?i("53f5"):e===this.currentOrangeArrowIdx?i("b50b"):i("0dee"):i("0dee")},deposit(){this.$emit("deposit",this.chain)},getColor(e){return e<2?"risk-green":e<3.5?"risk-yellow":e<5?"risk-orange":"risk-red"}},mounted(){this.maxHeight=document.getElementById(this.getId()).offsetHeight,this.fullClass=this.viewFull?"full":"",this.fullStyle=this.viewFull?`max-height: ${this.fullMaxHeight}px;`:`max-height: ${this.maxHeight}px;`,"chains_in_work"===this.type&&(this.interval1=setInterval(()=>{this.currentOrangeArrowIdx<this.chain.tickers.length-2?this.currentOrangeArrowIdx=this.currentOrangeArrowIdx+1:this.currentOrangeArrowIdx=0},2e3),this.interval2=setInterval(()=>{this.activeTickerOpacity>=1?this.activeTickerIsGettingBrighter=!1:this.activeTickerOpacity<=0&&(this.activeTickerIsGettingBrighter=!0),this.activeTickerIsGettingBrighter?this.activeTickerOpacity+=.1:this.activeTickerOpacity-=.1},100))},unmounted(){"chains_in_work"===this.type&&(clearInterval(this.interval1),this.interval1=null,clearInterval(this.interval2),this.interval2=null)}}),ie=(i("7776"),i("d959")),ae=i.n(ie);const oe=ae()(te,[["render",ee],["__scopeId","data-v-d0b63756"]]);var ce=oe,ne=i("db1b");const le=e=>(Object(a["pushScopeId"])("data-v-bfa190ee"),e=e(),Object(a["popScopeId"])(),e),se={class:"modal-layout"},re={class:"new-modal-back-button-container"},de={class:"modal-content"},he={class:"window-title"},me={class:"window-text"},be={class:"input-field"},ue=["placeholder"],pe={class:"modal-warning"},ge=le(()=>Object(a["createElementVNode"])("i",{class:"material-icons",style:{color:"#FF9400!important"}},"report",-1)),Oe={class:"window-text warning"};function ve(e,t,i,o,c,n){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",se,[Object(a["createElementVNode"])("div",{class:"darken",onClick:t[4]||(t[4]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(a["createElementVNode"])("div",{class:"new-modal arbitration-deposit-modal",onClick:t[3]||(t[3]=Object(a["withModifiers"])(()=>{},["stop"]))},[Object(a["createElementVNode"])("div",re,[Object(a["createElementVNode"])("button",{class:"new-modal-back-button",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(a["createElementVNode"])("div",de,[Object(a["createElementVNode"])("p",he,Object(a["toDisplayString"])(e.$localizeFilter("depositing_funds_into_chain")),1),Object(a["createElementVNode"])("p",me,Object(a["toDisplayString"])(e.$localizeFilter("arbitration_deposit_modal_text_amount",["USDT"])),1),Object(a["createElementVNode"])("div",be,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{id:"amount",class:Object(a["normalizeClass"])(["custom-input",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("amount_in",["USDT"]),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t)},null,10,ue),[[a["vModelText"],e.amount,void 0,{trim:!0}]]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.v$.amount.$errors,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("small",{class:"error",key:t},Object(a["toDisplayString"])(e.$message),1))),128))]),Object(a["createElementVNode"])("div",pe,[ge,Object(a["createElementVNode"])("p",Oe,Object(a["toDisplayString"])(e.$localizeFilter("arbitration_deposit_modal_warning")),1)]),Object(a["createElementVNode"])("button",{class:Object(a["normalizeClass"])(["basic-button submit-button",e.submitInProgress?"inactive":""]),onClick:t[2]||(t[2]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(a["toDisplayString"])(e.$localizeFilter("deposit_funds")),3)])])])])}var je=i("25a0"),fe=i("e3e1");var ke=Object(j["a"])({props:{chain:{type:Object,required:!0},testBalance:{type:Number,required:!0}},validations(){return{amount:{required:fe["b"].withMessage(Object(f["a"])("field_must_not_be_empty"),fe["h"]),numeric:fe["b"].withMessage(Object(f["a"])("field_must_be_numeric"),fe["h"]),minValue:fe["b"].withMessage(Object(f["a"])("min_value",[this.minAmount]),Object(fe["f"])(this.minAmount)),maxValue:fe["b"].withMessage(Object(f["a"])("max_value",[this.maxAmount]),Object(fe["d"])(this.maxAmount))}}},setup(){return{v$:Object(je["a"])()}},data:()=>({amount:"",submitInProgress:!1}),methods:{closeModal(e){this.$emit("closeModal",e)},async submitHandler(){if(this.v$.$touch(),!this.v$.$error){this.submitInProgress=!0;try{const e={chainId:this.chain.chainId,amount:this.amount};await this.$store.dispatch("depositFundsToArbitrageChain",e),this.$message(Object(f["a"])("depositing_funds_into_chain_successful")),this.$emit("closeModal"),setTimeout(()=>{this.submitInProgress=!1},1e3)}catch(e){this.$error(e),setTimeout(()=>{this.submitInProgress=!1},1e3)}}}},computed:{assetDecimalsMap(){return this.$store.getters.assetDecimalsMap},minAmount(){return this.chain.depositFirstCoinLimitMin||0},maxAmount(){return this.chain.depositFirstCoinLimit}},mounted(){}});i("3c94");const we=ae()(ke,[["render",ve],["__scopeId","data-v-bfa190ee"]]);var ye=we;const Ce=e=>(Object(a["pushScopeId"])("data-v-2813c35e"),e=e(),Object(a["popScopeId"])(),e),Ne={class:"modal-layout"},Ve={class:"darken"},Ee={class:"modal-content"},_e=Ce(()=>Object(a["createElementVNode"])("div",{id:"arbitrationVideoModalContentWidthAnchor"},null,-1)),Be=["innerHTML"],Se=["width","height","src"],De={class:"bottom-block"};function xe(e,t,i,o,c,n){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Ne,[Object(a["createElementVNode"])("div",Ve,[Object(a["createElementVNode"])("div",{class:"new-modal arbitration-video-modal",onClick:t[1]||(t[1]=Object(a["withModifiers"])(()=>{},["stop"]))},[Object(a["createElementVNode"])("div",Ee,[_e,Object(a["createElementVNode"])("p",{class:"modal-text-1",innerHTML:e.$localizeFilter("arbitration_instruction")},null,8,Be),Object(a["createElementVNode"])("iframe",{class:"video",width:e.width,height:e.width/2,src:e.link,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,Se),Object(a["createElementVNode"])("div",De,[Object(a["createElementVNode"])("button",{class:"skip-button",onClick:t[0]||(t[0]=t=>e.skip())},Object(a["toDisplayString"])(e.$localizeFilter("skip")),1)])])])])])}var Te=Object(j["a"])({props:{},components:{},setup(){},computed:{frameWidth(){return Math.min(Math.min(window.innerWidth,window.screen.availWidth)-40,1200)},frameHeight(){return.5625*this.frameWidth}},data:()=>({link:"https://www.youtube.com/embed/dyJu7fe5BTc",width:0}),methods:{skip(){this.$emit("skipVideo")}},mounted(){this.width=document.getElementById("arbitrationVideoModalContentWidthAnchor").offsetWidth}});i("55fa");const $e=ae()(Te,[["render",xe],["__scopeId","data-v-2813c35e"]]);var Ie=$e;const Me=e=>(Object(a["pushScopeId"])("data-v-2fec48ca"),e=e(),Object(a["popScopeId"])(),e),Fe={class:"modal-layout"},Ae={class:"darken"},ze={class:"modal-content"},He={class:"window-title"},Le={class:"modal-warning"},Pe=Me(()=>Object(a["createElementVNode"])("i",{class:"material-icons",style:{color:"#FF9400!important"}},"report",-1)),Ue={key:0,class:"window-text warning"},We={key:1,class:"window-text warning"};function qe(e,t,i,o,c,n){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Fe,[Object(a["createElementVNode"])("div",Ae,[Object(a["createElementVNode"])("div",{class:"new-modal arbitration-confirmation-modal",onClick:t[1]||(t[1]=Object(a["withModifiers"])(()=>{},["stop"]))},[Object(a["createElementVNode"])("div",ze,[Object(a["createElementVNode"])("p",He,Object(a["toDisplayString"])(e.$localizeFilter("attention"))+"!",1),Object(a["createElementVNode"])("div",Le,[Pe,!1===e.withdrawToWallet?(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",Ue,Object(a["toDisplayString"])(e.$localizeFilter("arbitration_confirmation_modal_warning")),1)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",We,Object(a["toDisplayString"])(e.$localizeFilter("arbitration_confirmation_modal_warning")),1))]),Object(a["createElementVNode"])("button",{class:"basic-button",onClick:t[0]||(t[0]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(a["toDisplayString"])(e.$localizeFilter("i_agree")),1)])])])])}var Ge=Object(j["a"])({props:{},data:()=>({}),methods:{closeModal(e){this.$emit("closeModal",e)},async submitHandler(){this.$emit("closeModal");try{const e={};await this.$store.dispatch("acceptArbitrationRisksConditions",e),this.$emit("closeModal")}catch(e){this.$error(e)}}},computed:{}});i("c7e0");const Re=ae()(Ge,[["render",qe],["__scopeId","data-v-2fec48ca"]]);var Xe=Re,Je=Object(j["a"])({components:{Toggle:w["a"],LargeToggle:k["a"],ArbitrationChain:ce,AmountView:ne["a"],ArbitrationDepositModal:ye,ArbitrationVideoModal:Ie,ArbitrationConfirmationModal:Xe},setup(){},watch:{allChains(e,t){this.$nextTick(()=>{this.allChainsDiff=this.getDiff(JSON.parse(JSON.stringify(e)),JSON.parse(JSON.stringify(t)))})}},data:()=>({chainTypes:["all_chains","chains_in_work"],selectedChainType:"all_chains",showDepositModal:!1,currentChain:null,showVideoModal:!1,showAgreementModal:!1,allChains:[],myChains:[],allChainsDiff:[],soundAlertOptions:["sound_on","sound_off"],selectedSoundAlertOption:"sound_on",interval:null,totalIncome:0}),computed:{arbitrationData(){return this.$store.getters.arbitrationData},arbitrationRisksConditionsAccepted(){var e;return(null===(e=this.arbitrationData)||void 0===e?void 0:e.arbitrationRisksConditionsAccepted)||!1},coinsNames(){var e;return(null===(e=this.arbitrationData)||void 0===e?void 0:e.coinsNames)||{}},testBalance(){var e;return(null===(e=this.arbitrationData)||void 0===e?void 0:e.testBalance)||0},totalInWorkInChains(){var e;return(null===(e=this.arbitrationData)||void 0===e?void 0:e.totalInWorkInChains)||0}},methods:{toggleSoundAlertOptions(e){this.selectedSoundAlertOption=this.soundAlertOptions[e],localStorage.selectedSoundAlertOption=this.soundAlertOptions[e]},isNewChain(e){const t=this.allChainsDiff.some(t=>t.chainId===e.chainId);return t},getDiff(e,t){let i=[];return 0===t.length?[]:(e.forEach(e=>{const a=t.some(t=>t.chainId===e.chainId);a||i.push(e)}),i)},skipVideo(){this.showVideoModal=!1,setTimeout(()=>{this.showAgreementModal=!0})},deposit(e){this.currentChain=e,this.showDepositModal=!0},closeModals(){this.showDepositModal=!1,this.showWithdrawModal=!1,this.currentChain=null,this.showVideoModal=!1,this.showAgreementModal=!1,this.loadData()},toggle(e){this.selectedChainType=this.chainTypes[e]},async loadData(){try{await this.$store.dispatch("getArbitrageChainsData")}catch(e){this.$error(e)}}},async mounted(){var e,t;this.selectedSoundAlertOption=localStorage.selectedSoundAlertOption||"sound_on",await this.loadData(),this.allChains=(null===(e=this.arbitrationData)||void 0===e?void 0:e.allChains)||[],this.totalIncome=null===(t=this.arbitrationData)||void 0===t?void 0:t.totalIncome,!1===this.arbitrationRisksConditionsAccepted&&(this.showVideoModal=!0),this.interval=setInterval(async()=>{var e,t;if(await this.loadData(),this.totalIncome=null===(e=this.arbitrationData)||void 0===e?void 0:e.totalIncome,"all_chains"===this.selectedChainType)this.allChains=(null===(t=this.arbitrationData)||void 0===t?void 0:t.allChains)||[];else if("chains_in_work"===this.selectedChainType){var i;this.myChains=(null===(i=this.arbitrationData)||void 0===i?void 0:i.chainsInWork)||[]}else this.allChains=[],this.myChains=[]},3e3)},unmounted(){clearInterval(this.interval),this.interval=null}});i("81d5");const Ye=ae()(Je,[["render",v],["__scopeId","data-v-92190f90"]]);t["default"]=Ye},f39b:function(e,t,i){"use strict";i("7100")},f7fa:function(e,t,i){e.exports=i.p+"img/LUNA2.3baaccd8.svg"},ff25:function(e,t,i){e.exports=i.p+"img/SHIB.e53ff3a9.svg"}}]);
//# sourceMappingURL=chunk-719052b0.28aa8858.js.map