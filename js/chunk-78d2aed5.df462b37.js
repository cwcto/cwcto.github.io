(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78d2aed5"],{"2d45":function(e,t,a){"use strict";a("f7d4")},4689:function(e,t,a){},"4dd7":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o={class:"wallet"},c={class:"header-block"},r={class:"wallet-header"},i={class:"wallet-text"};function l(e,t,a,l,s,d){var u=Object(n["resolveComponent"])("Balance"),m=Object(n["resolveComponent"])("CoinsTable"),b=Object(n["resolveComponent"])("LinkTelegramWindow"),p=Object(n["resolveComponent"])("Modal");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("p",r,Object(n["toDisplayString"])(e.$localizeFilter(e.isDemo?"wallet_demo":"wallet")),1),Object(n["createElementVNode"])("p",i,Object(n["toDisplayString"])(e.$localizeFilter("wallet_text")),1)]),Object(n["createVNode"])(u,{class:"balance",coinTicker:e.coinTicker,data:e.walletData},null,8,["coinTicker","data"]),Object(n["createVNode"])(m,{style:{"margin-top":"10px"},coins:e.coins},null,8,["coins"]),e.needToLinkTelegram?(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:0,onTelegramLinked:e.telegramLinked},null,8,["onTelegramLinked"])):Object(n["createCommentVNode"])("",!0),e.showModal&&!e.needToLinkTelegram?(Object(n["openBlock"])(),Object(n["createBlock"])(p,{key:1,type:"welcomeBonus",data:e.welcomeBonusData,onCloseModal:e.closeModal},null,8,["data","onCloseModal"])):Object(n["createCommentVNode"])("",!0)])}var s=a("1da1"),d=(a("96cf"),a("ed09")),u=a("2930"),m=a("78aa"),b=a("846e"),p=(a("99af"),{class:"custom-table"}),g={class:"custom-table-body"},h={class:"custom-table-row"},f={class:"custom-data-cell cell-1"},O=["src"],k={class:"coin-info-block"},j={class:"coin-name"},v={class:"coin-amount"},w={class:"custom-data-cell cell-2"},C={class:"coin-usd"};function y(e,t,o,c,r,i){var l=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",p,[Object(n["createElementVNode"])("div",g,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.coins,(function(t,o){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:o,to:"/cabinet/coinWallet?demo=".concat(i.isDemo,"&coin=").concat(t.coinTicker)},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",h,[Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("img",{src:a("3619")("./"+t.coinTicker.toLowerCase()+"_icon.png"),class:"coin-icon"},null,8,O),Object(n["createElementVNode"])("div",k,[Object(n["createElementVNode"])("p",j,Object(n["toDisplayString"])(t.coinName),1),Object(n["createElementVNode"])("p",v,Object(n["toDisplayString"])("".concat(e.$utils.formatNumber(t.amount,"en-US",8,8)," ").concat(t.coinTicker)),1)])]),Object(n["createElementVNode"])("div",w,[Object(n["createElementVNode"])("p",C,Object(n["toDisplayString"])("".concat(e.$utils.formatCurrency(t.amountUSD,"USD","en-US",2,2))),1),Object(n["createElementVNode"])("p",{class:Object(n["normalizeClass"])(["coin-rate",t.rateChange>=0?"up":"down"])},Object(n["toDisplayString"])("".concat(t.rateChange>=0?"+":"-"," ").concat(e.$utils.formatNumber(Math.abs(100*t.rateChange),"en-US",2,2),"%")),3)])])]})),_:2},1032,["to"])})),128))])])}var T={props:{coins:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{isDemo:function(){return this.$store.getters.isDemo}},methods:{}},D=(a("2d45"),a("d959")),B=a.n(D);const N=B()(T,[["render",y],["__scopeId","data-v-2c444b06"]]);var S=N,E=(a("e977"),Object(d["a"])({props:{isDemoOverride:{type:Boolean,default:!1},buyCoinTicker:{type:String,default:null}},components:{Modal:u["a"],LinkTelegramWindow:m["a"],Balance:b["a"],CoinsTable:S},setup:function(){},data:function(){return{showModal:!1,welcomeBonusData:null}},computed:{needToLinkTelegram:function(){var e,t;return(null===(e=this.$store.state.info)||void 0===e||null===(t=e.profile)||void 0===t?void 0:t.needToLinkTelegram)||!1},isDemo:function(){return this.$store.getters.isDemo},coinTicker:function(){var e;return(null===(e=this.$store.getters.walletData)||void 0===e?void 0:e.coinTicker)||""},walletData:function(){return this.$store.getters.walletData||{}},coins:function(){return this.$store.getters.walletCoins||[]}},methods:{setupModal:function(){this.welcomeBonusData=JSON.parse(localStorage.exchangeWelcomeBonusData),null!=this.welcomeBonusData&&void 0!=this.welcomeBonusData&&(this.showModal=!0)},telegramLinked:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getProfile");case 2:a=t.sent,a.needToLinkTelegram||(e.$message(e.$localizeFilter("link_telegram_success")),e.setupModal());case 4:case"end":return t.stop()}}),t)})))()},closeModal:function(){var e;this.showModal=!1,null!==(e=this.$store.getters.profile)&&void 0!==e&&e.buyCoinTicker&&this.buyCoin(this.$store.getters.profile.buyCoinTicker)},buyCoin:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("setPaymentCoinTicker",{coinTicker:e});case 2:t.$nextTick((function(){t.$store.dispatch("setShowPaymentCoinModule",{value:!0})}));case 3:case"end":return a.stop()}}),a)})))()},loadData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("getWalletData");case 3:return t.next=5,e.$store.dispatch("getWalletCoins");case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},mounted:function(){var e=this;this.$nextTick((function(){var t;e.$store.commit("SET_DEMO",{isDemo:e.isDemoOverride}),e.buyCoinTicker&&!0!==(null===(t=e.$store.getters.profile)||void 0===t?void 0:t.needToLinkTelegram)&&e.buyCoin(e.buyCoinTicker)})),this.loadData()}}));a("6dbb");const $=B()(E,[["render",l],["__scopeId","data-v-803e2ff8"]]);t["default"]=$},"5e4f":function(e,t,a){},6155:function(e,t,a){"use strict";a("d467")},"6dbb":function(e,t,a){"use strict";a("4689")},"78aa":function(e,t,a){"use strict";var n=a("7a23"),o={class:"link-telegram"},c={class:"darken"},r={class:"window link-telegram"},i={key:0,class:"highlight-block"},l={class:"title"},s={class:"text"},d={key:1};function u(e,t,a,u,m,b){var p=Object(n["resolveComponent"])("telegram-login-temp");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("div",r,[e.showHighlight?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("p",l,Object(n["toDisplayString"])(e.$localizeFilter("link_telegram_title")),1),Object(n["createElementVNode"])("p",s,Object(n["toDisplayString"])(e.$localizeFilter("link_telegram_text")),1),0==e.isLoaded?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",d,"Loading...")):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(p,{class:"telegram-login-button",mode:"callback","telegram-login":e.botTelegramLogin,onLoaded:e.telegramLoadedCallback,onCallback:e.myCallback},null,8,["telegram-login","onLoaded","onCallback"])])])])}var m=a("1da1"),b=(a("96cf"),a("ed09"));const p={expose:[],props:{mode:{type:String,required:!0,validator:e=>["callback","redirect"].includes(e)},telegramLogin:{type:String,required:!0,validator:e=>e.endsWith("bot")||e.endsWith("Bot")},redirectUrl:{type:String,default:""},requestAccess:{type:String,default:"read",validator:e=>["read","write"].includes(e)},size:{type:String,default:"large",validator:e=>["small","medium","large"].includes(e)},userpic:{type:Boolean,default:!0},radius:{type:String}},emits:["callback","loaded"],setup(e,{emit:t}){const a=e,o=Object(n["ref"])(null),c=document.createElement("script");return c.async=!0,c.src="https://telegram.org/js/telegram-widget.js?3",c.setAttribute("data-size",a.size),c.setAttribute("data-userpic",a.userpic),c.setAttribute("data-telegram-login",a.telegramLogin),c.setAttribute("data-request-access",a.requestAccess),c.onload=()=>{t("loaded")},a.radius&&c.setAttribute("data-radius",a.radius),"callback"===a.mode?(window.onTelegramAuth=function(e){t("callback",e)},c.setAttribute("data-onauth","window.onTelegramAuth(user)")):c.setAttribute("data-auth-url",a.redirectUrl),Object(n["onMounted"])(()=>{o.value.appendChild(c)}),(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])("div",{ref:o},null,512))}};var g=Object(b["a"])({setup:function(){},data:function(){return{isLoaded:!1,showHighlight:!1}},components:{telegramLoginTemp:p},computed:{botTelegramLogin:function(){return"capitalwhale.kz"==location.host?"CapitalWhaleKzBot":"capitalwhale.online"==location.host?"CapitalWhaleOnlineBot":"capitalwhale.ru"==location.host?"CapitalWhaleRuBot":"CapitalWhaleBot"},host:function(){return location.host}},methods:{telegramLoadedCallback:function(){var e=this;console.log("script is loaded"),setTimeout((function(){e.isLoaded=!0,setTimeout((function(){e.showHighlight=!0,setTimeout((function(){e.showHighlight=!1}),1500)}),1e3)}),0)},myCallback:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.clientHost=location.host,a.next=3,t.$store.dispatch("bindTelegram",e);case 3:t.$emit("telegramLinked");case 4:case"end":return a.stop()}}),a)})))()}}}),h=(a("6155"),a("d959")),f=a.n(h);const O=f()(g,[["render",u],["__scopeId","data-v-6b3a0630"]]);t["a"]=O},"846e":function(e,t,a){"use strict";a("99af");var n=a("7a23"),o={class:"balance-body"},c={class:"first-row"},r={class:"balance-title"},i={class:"balance-rate-change"},l=Object(n["createTextVNode"])(Object(n["toDisplayString"])("/ 24h")),s={class:"balance-amount"},d={class:"balance-usd"};function u(e,t,a,u,m,b){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("div",r,Object(n["toDisplayString"])("".concat(e.$localizeFilter("balance"),":")),1),Object(n["createElementVNode"])("span",i,[Object(n["createElementVNode"])("span",{class:Object(n["normalizeClass"])(b.rateChange>=0?"green-text":"red-text")},Object(n["toDisplayString"])("".concat(b.rateChange>=0?"+":"-"," ").concat(e.$utils.formatNumber(Math.abs(100*b.rateChange),"en-US",0,2),"% ")),3),l])]),Object(n["createElementVNode"])("div",s,Object(n["toDisplayString"])("".concat(a.coinTicker," ").concat(e.$utils.formatNumber(b.amount,"en-US",8,8))),1),Object(n["createElementVNode"])("div",d,Object(n["toDisplayString"])("≈ ".concat(e.$utils.formatCurrency(b.amountUSD,"USD","en-US",0,2))),1)])}var m={props:{coinTicker:{type:String,required:!0},data:{type:Object,default:null}},data:function(){return{}},computed:{amount:function(){var e;return(null===(e=this.data)||void 0===e?void 0:e.amount)||0},amountUSD:function(){var e;return(null===(e=this.data)||void 0===e?void 0:e.amountUSD)||0},rateChange:function(){var e;return(null===(e=this.data)||void 0===e?void 0:e.rateChange)||0}},methods:{}},b=(a("9587"),a("d959")),p=a.n(b);const g=p()(m,[["render",u],["__scopeId","data-v-5b6de017"]]);t["a"]=g},9587:function(e,t,a){"use strict";a("5e4f")},d467:function(e,t,a){},f7d4:function(e,t,a){}}]);
//# sourceMappingURL=chunk-78d2aed5.df462b37.js.map