(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e3ba76a"],{2889:function(e,t,a){},"7f35":function(e,t,a){"use strict";a("2889")},"9ec3":function(e,t,a){},adda8:function(e,t,a){"use strict";a.r(t);var o=a("7a23");const l={class:"temp-exchange"},c={key:0,class:"window light"},n={class:"window-title"},i={class:"window-text"},s=["onClick"],r={class:"coin-data-wrapper"},d={class:"coin-image-wrapper"},m=["src"],b={class:"coin-description"},p={class:"bold"},u=["onClick"],g={style:{"text-shadow":"4px 7px 15px rgba(0, 0, 0, 0.29)"}};function k(e,t,k,h,O,j){const w=Object(o["resolveComponent"])("LinkTelegramWindow"),y=Object(o["resolveComponent"])("Modal");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",l,[e.needToLinkTelegram?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createElementVNode"])("p",n,Object(o["toDisplayString"])(e.$localizeFilter("temp_exchange_title")),1),Object(o["createElementVNode"])("p",i,Object(o["toDisplayString"])(e.$localizeFilter("temp_exchange_text")),1),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.$store.getters.coins.filter(e=>"DOM"!=e.ticker),(t,l)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"coin-example",onClick:a=>e.openCoinPage(t.name),key:l},[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("img",{class:"coin-image",src:a("441f")(`./${t.name}.png`)},null,8,m)]),Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("span",p,Object(o["toDisplayString"])(t.localizedName),1),Object(o["createTextVNode"])(" - "+Object(o["toDisplayString"])(e.$localizeFilter("temp_exchange_"+t.ticker.toLowerCase())),1)])]),"DOM"!=t.coinTicker?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:0,class:"buy-button",onClick:Object(o["withModifiers"])(a=>e.buyCoin(t.ticker),["stop"])},[Object(o["createElementVNode"])("span",g,Object(o["toDisplayString"])(e.$localizeFilter("buy")),1)],8,u)):Object(o["createCommentVNode"])("",!0)],8,s))),128))])),e.needToLinkTelegram?(Object(o["openBlock"])(),Object(o["createBlock"])(w,{key:1,onTelegramLinked:e.telegramLinked},null,8,["onTelegramLinked"])):Object(o["createCommentVNode"])("",!0),e.showModal&&!e.needToLinkTelegram?(Object(o["openBlock"])(),Object(o["createBlock"])(y,{key:2,type:"welcomeBonus",data:e.welcomeBonusData,onCloseModal:e.closeModal},null,8,["data","onCloseModal"])):Object(o["createCommentVNode"])("",!0)])}var h=a("ed09"),O=(a("e977"),a("2930"));const j={class:"link-telegram"},w={class:"darken"},y={class:"window link-telegram"},B={key:0,class:"highlight-block"},C={class:"title"},v={class:"text"},T={key:1};function L(e,t,a,l,c,n){const i=Object(o["resolveComponent"])("telegram-login-temp");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",j,[Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("div",y,[e.showHighlight?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",B)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("p",C,Object(o["toDisplayString"])(e.$localizeFilter("link_telegram_title")),1),Object(o["createElementVNode"])("p",v,Object(o["toDisplayString"])(e.$localizeFilter("link_telegram_text")),1),0==e.isLoaded?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",T,"Loading...")):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(i,{class:"telegram-login-button",mode:"callback","telegram-login":e.botTelegramLogin,onLoaded:e.telegramLoadedCallback,onCallback:e.myCallback},null,8,["telegram-login","onLoaded","onCallback"])])])])}const f={expose:[],props:{mode:{type:String,required:!0,validator:e=>["callback","redirect"].includes(e)},telegramLogin:{type:String,required:!0,validator:e=>e.endsWith("bot")||e.endsWith("Bot")},redirectUrl:{type:String,default:""},requestAccess:{type:String,default:"read",validator:e=>["read","write"].includes(e)},size:{type:String,default:"large",validator:e=>["small","medium","large"].includes(e)},userpic:{type:Boolean,default:!0},radius:{type:String}},emits:["callback","loaded"],setup(e,{emit:t}){const a=e,l=Object(o["ref"])(null),c=document.createElement("script");return c.async=!0,c.src="https://telegram.org/js/telegram-widget.js?3",c.setAttribute("data-size",a.size),c.setAttribute("data-userpic",a.userpic),c.setAttribute("data-telegram-login",a.telegramLogin),c.setAttribute("data-request-access",a.requestAccess),c.onload=()=>{t("loaded")},a.radius&&c.setAttribute("data-radius",a.radius),"callback"===a.mode?(window.onTelegramAuth=function(e){t("callback",e)},c.setAttribute("data-onauth","window.onTelegramAuth(user)")):c.setAttribute("data-auth-url",a.redirectUrl),Object(o["onMounted"])(()=>{l.value.appendChild(c)}),(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])("div",{ref:l},null,512))}};var N=Object(h["a"])({setup(){},data:()=>({isLoaded:!1,showHighlight:!1}),components:{telegramLoginTemp:f},computed:{botTelegramLogin(){return"capitalwhale.kz"==location.host?"CapitalWhaleKzBot":"capitalwhale.online"==location.host?"CapitalWhaleOnlineBot":"capitalwhale.ru"==location.host?"CapitalWhaleRuBot":"CapitalWhaleBot"},host(){return location.host}},methods:{telegramLoadedCallback(){setTimeout(()=>{this.isLoaded=!0,setTimeout(()=>{this.showHighlight=!0,setTimeout(()=>{this.showHighlight=!1},1500)},1e3)},0)},async myCallback(e){e.clientHost=location.host,await this.$store.dispatch("bindTelegram",e),this.$emit("telegramLinked")}}}),E=(a("e855"),a("d959")),V=a.n(E);const x=V()(N,[["render",L],["__scopeId","data-v-47bbd0f2"]]);var $=x,_=Object(h["a"])({data:()=>({}),components:{Modal:O["a"],LinkTelegramWindow:$},computed:{needToLinkTelegram(){var e,t;return(null===(e=this.$store.state.info)||void 0===e||null===(t=e.profile)||void 0===t?void 0:t.needToLinkTelegram)||!1}},methods:{openCoinPage(e){window.open(location.origin+"/#/coins/"+e,"_blank")},setupModal(){this.welcomeBonusData=JSON.parse(localStorage.exchangeWelcomeBonusData),null!=this.welcomeBonusData&&void 0!=this.welcomeBonusData&&(this.showModal=!0)},async telegramLinked(){let e=await this.$store.dispatch("getProfile");e.needToLinkTelegram||(this.$message(this.$localizeFilter("link_telegram_success")),this.setupModal())},closeModal(){this.showModal=!1},async buyCoin(e){await this.$store.dispatch("setPaymentCoinTicker",{coinTicker:e}),this.$nextTick(()=>{this.$store.dispatch("setShowPaymentCoinModule",{value:!0})})}},async mounted(){}});a("7f35");const M=V()(_,[["render",k],["__scopeId","data-v-06b7e8de"]]);t["default"]=M},e855:function(e,t,a){"use strict";a("9ec3")}}]);
//# sourceMappingURL=chunk-9e3ba76a.4c58a5dd.js.map