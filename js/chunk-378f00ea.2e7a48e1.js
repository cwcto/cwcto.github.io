(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-378f00ea"],{3305:function(e,t,l){"use strict";l("d7ea")},"36a4":function(e,t,l){"use strict";l.r(t);var n=l("7a23"),c=l("5bab"),a=l.n(c);const o=e=>(Object(n["pushScopeId"])("data-v-e9289e4a"),e=e(),Object(n["popScopeId"])(),e),i={class:"review-ogct"},s=o(()=>Object(n["createElementVNode"])("img",{class:"back-button-arrow",src:a.a},null,-1)),r={class:"back-button-text"},d={class:"container"},b={class:"window light"},p={class:"window-title bold-blue"},k={class:"window-subtitle"},m=["innerHTML"],O={class:"sub-title bold-blue"},j=["innerHTML"],u={class:"copy-text-window"},w={class:"copy-text-window-content"},y={class:"link-row"},h={class:"link-text"},g={class:"link-row"},E={class:"link-text"},N={class:"link-row"},V={class:"link-text"},f={class:"link-row"},v={class:"link-text"},C={class:"footer"},_={key:0,class:"already-joined"};function S(e,t,l,c,a,o){const S=Object(n["resolveComponent"])("Modal");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createElementVNode"])("button",{class:"back-button",onClick:t[0]||(t[0]=t=>e.$router.back())},[s,Object(n["createElementVNode"])("p",r,Object(n["toDisplayString"])(e.$localizeFilter("our_promotions")),1)]),Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("p",p,Object(n["toDisplayString"])(e.$localizeFilter("review_ogct")),1),Object(n["createElementVNode"])("div",k,Object(n["toDisplayString"])(e.$localizeFilter("date_from_to",[e.$dateTimeFilter(e.startDate,"custom","dd.mm.yyyy"),e.$dateTimeFilter(e.endDate,"custom","dd.mm.yyyy")])),1),Object(n["createElementVNode"])("div",{class:"main-text",innerHTML:e.$localizeFilter("review_ogct_main_text")},null,8,m),Object(n["createElementVNode"])("p",O,Object(n["toDisplayString"])(e.$localizeFilter("terms_of_action")),1),Object(n["createElementVNode"])("p",{class:"window-text",innerHTML:e.$localizeFilter("review_ogct_window_text")},null,8,j),Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",w,[Object(n["createElementVNode"])("div",y,[Object(n["createElementVNode"])("p",h,Object(n["toDisplayString"])(e.links.site.text),1),Object(n["createElementVNode"])("p",{class:"link-link",onClick:t[1]||(t[1]=t=>e.window.open(e.links.site.link))},Object(n["toDisplayString"])(e.links.site.link),1)]),Object(n["createElementVNode"])("div",g,[Object(n["createElementVNode"])("p",E,Object(n["toDisplayString"])(e.links.youtube.text),1),Object(n["createElementVNode"])("p",{class:"link-link",onClick:t[2]||(t[2]=t=>e.window.open(e.links.youtube.link))},Object(n["toDisplayString"])(e.links.youtube.link),1)]),Object(n["createElementVNode"])("div",N,[Object(n["createElementVNode"])("p",V,Object(n["toDisplayString"])(e.links.telegramChannel.text),1),Object(n["createElementVNode"])("p",{class:"link-link",onClick:t[3]||(t[3]=t=>e.window.open(e.links.telegramChannel.link))},Object(n["toDisplayString"])(e.links.telegramChannel.link),1)]),Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("p",v,Object(n["toDisplayString"])(e.links.telegramChat.text),1),Object(n["createElementVNode"])("p",{class:"link-link",onClick:t[4]||(t[4]=t=>e.window.open(e.links.telegramChat.link))},Object(n["toDisplayString"])(e.links.telegramChat.link),1)])]),Object(n["createElementVNode"])("button",{class:"basic-button copy-button",onClick:t[5]||(t[5]=t=>e.$utils.copy(e.allLinksText))},Object(n["toDisplayString"])(e.$localizeFilter("copy")),1)]),Object(n["createElementVNode"])("div",C,[this.dataSent?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",_,Object(n["toDisplayString"])(e.$localizeFilter("review_ogct_send_successful")),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",{key:1,class:"basic-button join-button",onClick:t[6]||(t[6]=(...t)=>e.joinOffer&&e.joinOffer(...t))},Object(n["toDisplayString"])(e.$localizeFilter("participate")),1))])])]),e.showModal?(Object(n["openBlock"])(),Object(n["createBlock"])(S,{key:0,type:"bestOGCTReview",onCloseModal:e.closeModal},null,8,["onCloseModal"])):Object(n["createCommentVNode"])("",!0)])}var x=l("ed09"),D=l("e977"),$=l("2930"),M=Object(x["a"])({components:{Modal:$["a"]},props:["startDate","endDate"],methods:{async closeModal(){this.showModal=!1,this.dataSent=await this.$store.dispatch("getSpecialOfferData",{offerName:"bestOGCTReview"})},joinOffer(){this.showModal=!0}},setup(){},data:()=>({showModal:!1,links:{site:{text:Object(D["a"])("our_site"),link:"https://capitalwhale.io/#/"},youtube:{text:"YouTube",link:"https://www.youtube.com/channel/UC7to7Nai9043raVVvKYm6Hg"},telegramChannel:{text:Object(D["a"])("our_telegram_channel"),link:"https://t.me/Capital_Whale"},telegramChat:{text:Object(D["a"])("our_official_telegram_chat"),link:"https://t.me/c/1602121943/191635"}},dataSent:null}),computed:{allLinksText(){let e="";return Object.entries(this.links).forEach(t=>{const[l,n]=t;e=e+n.text+" "+n.link+"\n"}),e=e.substring(0,e.length-1),e}},async mounted(){try{this.dataSent=await this.$store.dispatch("getSpecialOfferData",{offerName:"bestOGCTReview"})}catch(e){this.$error(e)}}}),T=(l("3305"),l("d959")),F=l.n(T);const z=F()(M,[["render",S],["__scopeId","data-v-e9289e4a"]]);t["default"]=z},d7ea:function(e,t,l){}}]);
//# sourceMappingURL=chunk-378f00ea.2e7a48e1.js.map