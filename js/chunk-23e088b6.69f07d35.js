(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23e088b6"],{"11f3":function(e,t,n){},"1be4":function(e,t,n){var c=n("d066");e.exports=c("document","documentElement")},"33d1":function(e,t,n){"use strict";var c=n("23e7"),i=n("7b0b"),o=n("07fa"),a=n("5926"),l=n("44d2");c({target:"Array",proto:!0},{at:function(e){var t=i(this),n=o(t),c=a(e),l=c>=0?c:n+c;return l<0||l>=n?void 0:t[l]}}),l("at")},"37e8":function(e,t,n){var c=n("83ab"),i=n("aed9"),o=n("9bf2"),a=n("825a"),l=n("fc6a"),r=n("df75");t.f=c&&!i?Object.defineProperties:function(e,t){a(e);var n,c=l(t),i=r(t),s=i.length,d=0;while(s>d)o.f(e,n=i[d++],c[n]);return e}},"44d2":function(e,t,n){var c=n("b622"),i=n("7c73"),o=n("9bf2").f,a=c("unscopables"),l=Array.prototype;void 0==l[a]&&o(l,a,{configurable:!0,value:i(null)}),e.exports=function(e){l[a][e]=!0}},"76ec":function(e,t,n){"use strict";n("11f3")},"7c73":function(e,t,n){var c,i=n("825a"),o=n("37e8"),a=n("7839"),l=n("d012"),r=n("1be4"),s=n("cc12"),d=n("f772"),u=">",b="<",m="prototype",p="script",h=d("IE_PROTO"),O=function(){},j=function(e){return b+p+u+e+b+"/"+p+u},v=function(e){e.write(j("")),e.close();var t=e.parentWindow.Object;return e=null,t},g=function(){var e,t=s("iframe"),n="java"+p+":";return t.style.display="none",r.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(j("document.F=Object")),e.close(),e.F},y=function(){try{c=new ActiveXObject("htmlfile")}catch(t){}y="undefined"!=typeof document?document.domain&&c?v(c):g():v(c);var e=a.length;while(e--)delete y[m][a[e]];return y()};l[h]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(O[m]=i(e),n=new O,O[m]=null,n[h]=e):n=y(),void 0===t?n:o.f(n,t)}},a4d3:function(e,t,n){"use strict";n("b1dc")},b1dc:function(e,t,n){},df75:function(e,t,n){var c=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return c(e,i)}},ea98:function(e,t,n){"use strict";var c=n("23e7"),i=n("e330"),o=n("1d80"),a=n("5926"),l=n("577e"),r=n("d039"),s=i("".charAt),d=r((function(){return"\ud842"!=="𠮷".at(-2)}));c({target:"String",proto:!0,forced:d},{at:function(e){var t=l(o(this)),n=t.length,c=a(e),i=c>=0?c:n+c;return i<0||i>=n?void 0:s(t,i)}})},ee10:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const i=e=>(Object(c["pushScopeId"])("data-v-39c8e3f1"),e=e(),Object(c["popScopeId"])(),e),o={class:"closed-auction"},a={class:"title"},l={key:0,class:"window light"},r=i(()=>Object(c["createElementVNode"])("div",{class:"border-block"},null,-1)),s={key:0,class:"highlight-block"},d={key:1,class:"window-text"},u={key:2,class:"window-text",style:"margin-top:25px"},b={key:3,class:"window-text"},m={class:"coin-timer-block"},p=["src"],h={key:4,class:"content-table"},O={class:"content-line"},j={class:"content-cell-1"},v={class:"text"},g={class:"content-cell-2"},y={class:"text"},f={class:"content-line"},k={class:"content-cell-1"},w={class:"text"},C={class:"content-cell-2"},E={class:"text"},N={key:6,class:"text"},x={class:"text"},V={key:7,style:"margin-top:auto"};function _(e,t,i,_,$,T){var S,B;const D=Object(c["resolveComponent"])("IncreaseLimitModal");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("h1",a,Object(c["toDisplayString"])(e.$localizeFilter("closed_auction")),1),e.selectedCoin?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",l,[r,e.showHighlight?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",s)):Object(c["createCommentVNode"])("",!0),e.auctionRunning?(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",d,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$localizeFilter("closed_auction_running_text"))+" ",1),Object(c["createElementVNode"])("span",{class:"coin-link",onClick:t[0]||(t[0]=t=>e.openCoinPage())},Object(c["toDisplayString"])(e.currentCoinName),1),Object(c["createTextVNode"])(Object(c["toDisplayString"])(":"))])):e.auctionFinished?(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",u,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$localizeFilter("closed_auction_finished_text_1"))+" ",1),Object(c["createElementVNode"])("span",{class:"coin-link",onClick:t[1]||(t[1]=t=>e.openCoinPage())},Object(c["toDisplayString"])(e.currentCoinName),1),Object(c["createTextVNode"])(Object(c["toDisplayString"])(" "+e.$localizeFilter("closed_auction_finished_text_2")),1)])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",b,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$localizeFilter("closed_auction_waiting_text_1"))+" ",1),Object(c["createElementVNode"])("span",{class:"coin-link",onClick:t[2]||(t[2]=t=>e.openCoinPage())},Object(c["toDisplayString"])(e.currentCoinName),1),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.$localizeFilter("closed_auction_waiting_text_2")),1)])),Object(c["createElementVNode"])("div",m,[e.auctionFinished?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",{key:0,class:Object(c["normalizeClass"])(["timer",e.auctionRunning?"auction-running":""])},Object(c["toDisplayString"])(e.timeLeft),3)),Object(c["createElementVNode"])("img",{src:n("441f")("./"+e.currentCoinName+".png"),class:"image"},null,8,p)]),e.auctionRunning?(Object(c["openBlock"])(),Object(c["createElementBlock"])("ul",h,[Object(c["createElementVNode"])("li",O,[Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("p",v,Object(c["toDisplayString"])(e.startPriceText),1)]),Object(c["createElementVNode"])("div",g,[Object(c["createElementVNode"])("p",y,Object(c["toDisplayString"])("$"+e.startPrice),1)])])])):e.auctionFinished?(Object(c["openBlock"])(),Object(c["createElementBlock"])("ul",{key:5,class:"content-table",style:Object(c["normalizeStyle"])(e.auctionFinished?"display:none":"")},[Object(c["createElementVNode"])("li",f,[Object(c["createElementVNode"])("div",k,[Object(c["createElementVNode"])("p",w,Object(c["toDisplayString"])(e.$localizeFilter("coin_rate")),1)]),Object(c["createElementVNode"])("div",C,[Object(c["createElementVNode"])("p",E,Object(c["toDisplayString"])("$"+(null===(S=e.selectedCoin)||void 0===S?void 0:S.rateAfterClosedPresale)),1)])])],4)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",N,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.startPriceText+" "),1),Object(c["createElementVNode"])("span",x,Object(c["toDisplayString"])("$"+(null!==(B=e.startPrice)&&void 0!==B?B:"")),1)])),e.auctionFinished?(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",V,Object(c["toDisplayString"])(e.$localizeFilter("await_for_auction",[e.currentCoinName])),1)):Object(c["createCommentVNode"])("",!0),e.auctionRunning?(Object(c["openBlock"])(),Object(c["createElementBlock"])("button",{key:8,class:"button",onClick:t[3]||(t[3]=t=>{var n;return e.buyCoin(null===(n=e.selectedCoin)||void 0===n?void 0:n.coinTicker,e.youCanBuy)})},Object(c["toDisplayString"])(e.$localizeFilter("buy_now")),1)):Object(c["createCommentVNode"])("",!0)])):Object(c["createCommentVNode"])("",!0),e.showIncreaseLimitModal?(Object(c["openBlock"])(),Object(c["createBlock"])(D,{key:1,coin:e.selectedCoin,rate:e.startPrice,clientId:e.clientId,onCloseModal:e.closeModals},null,8,["coin","rate","clientId","onCloseModal"])):Object(c["createCommentVNode"])("",!0)])}var $=n("ed09"),T=n("e977");const S={class:"modal-layout"},B={class:"new-modal-back-button-container"},D={class:"modal-content"},I={class:"top-block"},M={class:"window-title"},P={class:"text-amount-block"},F={class:"amount-block"},A={class:"window-text"},W={class:"input-field"},z=["placeholder"],L={class:"burn-cwpt-block"},R={class:"window-text burn-cwpt-text"},H={class:"burn-cwpt-amount"},q={class:"button-block"};function J(e,t,n,i,o,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",S,[Object(c["createElementVNode"])("div",{class:"darken",onClick:t[4]||(t[4]=(...t)=>e.closeModal&&e.closeModal(...t))},[Object(c["createElementVNode"])("div",{class:"new-modal increase-limit-modal",onClick:t[3]||(t[3]=Object(c["withModifiers"])(()=>{},["stop"]))},[Object(c["createElementVNode"])("div",B,[Object(c["createElementVNode"])("button",{class:"new-modal-back-button thin",onClick:t[0]||(t[0]=(...t)=>e.closeModal&&e.closeModal(...t))})]),Object(c["createElementVNode"])("div",D,[Object(c["createElementVNode"])("div",I,[Object(c["createElementVNode"])("p",M,Object(c["toDisplayString"])(e.$localizeFilter("increase_limit_modal_title",[e.coin.coinTicker])),1)]),Object(c["createElementVNode"])("div",P,[Object(c["createElementVNode"])("div",F,[Object(c["createElementVNode"])("p",A,Object(c["toDisplayString"])(e.$localizeFilter("increase_limit_modal_text_1",[e.coin.coin])),1),Object(c["createElementVNode"])("div",W,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{id:"amount",class:Object(c["normalizeClass"])(["custom-input-2",{invalid:e.v$.amount.$error}]),placeholder:e.$localizeFilter("amount_of",[e.coin.coinTicker]),type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t)},null,10,z),[[c["vModelText"],e.amount,void 0,{trim:!0}]]),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.v$.amount.$errors,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("small",{class:"error",key:t},Object(c["toDisplayString"])(e.$message),1))),128))])])]),Object(c["createElementVNode"])("div",L,[Object(c["createElementVNode"])("p",R,Object(c["toDisplayString"])(e.$localizeFilter("increase_limit_modal_text_2"))+":",1),Object(c["createElementVNode"])("p",H,Object(c["toDisplayString"])(e.amountCWPT+" CWPT"),1)]),Object(c["createElementVNode"])("div",q,[Object(c["createElementVNode"])("button",{class:"continue-button",onClick:t[2]||(t[2]=(...t)=>e.submitHandler&&e.submitHandler(...t))},Object(c["toDisplayString"])(e.$localizeFilter("continue")),1)])])])])])}n("33d1"),n("ea98");var U=n("25a0"),G=n("e3e1"),Q=(n("da29"),Object($["a"])({props:{coin:{type:Object,required:!0},rate:{type:Number,required:!0},clientId:{type:Number,required:!0}},validations(){return{amount:{required:G["b"].withMessage(Object(T["a"])("field_must_not_be_empty"),G["h"]),numeric:G["b"].withMessage(Object(T["a"])("field_must_be_numeric"),G["g"]),minValue:G["b"].withMessage(Object(T["a"])("min_value",[this.minAmount]),Object(G["f"])(this.minAmount))}}},setup(){return{v$:Object(U["a"])()}},data:()=>({amount:null,minAmount:0}),computed:{amountCWPT(){return+((this.amount||0)*this.rate/10).toFixed(6)}},methods:{closeModal(e){this.$emit("closeModal",e)},async burnCWPT(){let e=!1;if(window.tronWeb){await tronWeb.trx.getAccount();let r=this.amountCWPT;r=1e6*r+"000000000000";let s=this.clientId,d=await tronWeb.contract().at("TLwGQimcVEuAdcfMRcjVxDCVy4h8wgEnBz"),u=this.coin.coinId,b=tronWeb.defaultAddress.base58;try{let l=await d.burn(r).send({feeLimit:1e8,callValue:0}),m=`CapitalWhale User Id: ${s}; Transaction Id: ${l}; Wallet Address: ${b}; Coin Id: ${u}`;var t=tronWeb.toHex(m).replace(/^0x/,""),n=tronWeb.utils.code.hexStr2byteArray(t),c=tronWeb.sha3(n).replace(/^0x/,""),i=await tronWeb.trx.sign(c),o=i.substring(128,130);"01"==o?i=i.substring(0,128)+"1c":"00"==o&&(i=i.substring(0,128)+"1b");await tronWeb.trx.verifyMessage(c,i,b);try{const t={address:b,signature:i,transactionId:l,coinId:u};await this.$store.dispatch("burnCWPT",t),e=!0}catch(a){this.$error(a)}}catch(l){}}else this.$error("TRON wallet not connected");return e},async submitHandler(){if(this.v$.$touch(),this.v$.$error)return;let e=await this.burnCWPT();this.closeModal(e)}}})),X=(n("a4d3"),n("d959")),K=n.n(X);const Y=K()(Q,[["render",J],["__scopeId","data-v-7851773d"]]);var Z=Y,ee=Object($["a"])({data:()=>({selectedCoin:null,currTimestamp:+Date.now(),timerEndTimestamp:+Date.now(),showHighlight:!1,coins:null,showIncreaseLimitModal:!1}),setup(){},computed:{clientId(){return this.$store.getters.profile.id},auctionRunning(){var e;return"live"===(null===(e=this.selectedCoin)||void 0===e?void 0:e.type)},auctionFinished(){var e;return"finished"===(null===(e=this.selectedCoin)||void 0===e?void 0:e.type)},currentCoinName(){var e;return null===(e=this.selectedCoin)||void 0===e?void 0:e.coin},youCanBuy(){return this.selectedCoin?Math.min((this.selectedCoin.youCanBuy||0)+this.selectedCoin.limit,(this.selectedCoin.maxUSDBuyAmount||1/0)/this.startPrice):0},timeLeft(){let e=Math.floor((this.timerEndTimestamp-this.currTimestamp)/1e3);var t;if(e<=0)return"announce"==(null===(t=this.selectedCoin)||void 0===t?void 0:t.type)&&this.startAuction(),"00:00";let n=Math.floor(e/3600),c=e%3600,i=Math.floor(c/60),o=Math.floor(c%60);return`${n}:${i>=10?i:"0"+i}:${o>=10?o:"0"+o}`},startPriceText(){return Object(T["a"])("starting_price_for_DOM_coin_holders")},startPrice(){var e;return null===(e=this.selectedCoin)||void 0===e?void 0:e.startPriceDOMHolder}},methods:{increaseLimit(){this.showIncreaseLimitModal=!0},closeModals(e){this.showIncreaseLimitModal=!1,e&&this.loadData()},selectCoin(e){for(let t=0;t<this.coins.length;t++)t===e?(this.coins[t].selected=!0,this.selectedCoin=this.coins[t],this.setupTimers()):this.coins[t].selected=!1},setupTimers(){var e,t;clearInterval(this.timerInterval),this.timerEndTimestamp=this.auctionRunning||this.auctionFinished?null===(e=this.selectedCoin)||void 0===e?void 0:e.presaleEndTimestamp:null===(t=this.selectedCoin)||void 0===t?void 0:t.presaleStartTimestamp,this.timerInterval=setInterval(()=>{this.currTimestamp=Date.now()},1e3)},startAuction(){this.auctionRunning||(this.auctionRunning=!0,clearInterval(this.timerInterval),this.loadData())},async buyCoin(e,t){e&&(await this.$store.dispatch("setPaymentCoinTicker",{coinTicker:e}),await this.$store.dispatch("setPaymentCoinMaxAmount",{maxAmount:t}),this.$nextTick(()=>{this.$store.dispatch("setShowPaymentCoinModule",{value:!0})}))},openCoinPage(){},async loadData(){try{const e=(await this.$store.dispatch("getClosedPresaleParameters")).coins;this.coins=e,e.length>0&&this.selectCoin(0)}catch(e){this.$error(e)}}},created:function(){this.timerInterval=null},async mounted(){var e;await this.loadData();const t=JSON.parse(null!==(e=localStorage.exchangeClosedAuctionPageOpened)&&void 0!==e?e:null);this.showHighlight=!0,1!=t&&(localStorage.exchangeClosedAuctionPageOpened=!0,window.dispatchEvent(new CustomEvent("exchangeClosedAuctionPageOpened",{detail:{value:localStorage.getItem("exchangeClosedAuctionPageOpened")}}))),setTimeout(()=>{this.showHighlight=!1},2e3)},unmounted(){clearInterval(this.timerInterval)},components:{IncreaseLimitModal:Z}});n("76ec");const te=K()(ee,[["render",_],["__scopeId","data-v-39c8e3f1"]]);t["default"]=te}}]);
//# sourceMappingURL=chunk-23e088b6.69f07d35.js.map