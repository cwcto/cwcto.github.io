(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a631c1e6"],{"36a4":function(e,t,l){"use strict";l.r(t);var c=l("7a23"),n=l("5bab"),a=l.n(n);const o=e=>(Object(c["pushScopeId"])("data-v-ad932c50"),e=e(),Object(c["popScopeId"])(),e),i={class:"review-ogct"},s=o(()=>Object(c["createElementVNode"])("img",{class:"back-button-arrow",src:a.a},null,-1)),r={class:"back-button-text"},d={class:"container"},b={class:"window light"},p={class:"window-title bold-blue"},k={class:"window-subtitle"},m=["innerHTML"],O={class:"sub-title bold-blue"},j=["innerHTML"],u={class:"copy-text-window"},w={class:"copy-text-window-content"},h={class:"link-row"},y={class:"link-text"},g={class:"link-row"},E={class:"link-text"},N={class:"link-row"},V={class:"link-text"},f={class:"link-row"},v={class:"link-text"},C={class:"footer"},_={key:0,class:"already-joined"};function S(e,t,l,n,a,o){const S=Object(c["resolveComponent"])("Modal");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,[Object(c["createElementVNode"])("button",{class:"back-button",onClick:t[0]||(t[0]=t=>e.$router.back())},[s,Object(c["createElementVNode"])("p",r,Object(c["toDisplayString"])(e.$localizeFilter("our_promotions")),1)]),Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("div",b,[Object(c["createElementVNode"])("p",p,Object(c["toDisplayString"])(e.$localizeFilter("review_ogct")),1),Object(c["createElementVNode"])("div",k,Object(c["toDisplayString"])(e.$localizeFilter("date_from_to",[e.$dateTimeFilter(e.startDate,"custom","dd.mm.yyyy"),e.$dateTimeFilter(e.endDate,"custom","dd.mm.yyyy")])),1),Object(c["createElementVNode"])("div",{class:"main-text",innerHTML:e.$localizeFilter("review_ogct_main_text")},null,8,m),Object(c["createElementVNode"])("p",O,Object(c["toDisplayString"])(e.$localizeFilter("terms_of_action")),1),Object(c["createElementVNode"])("p",{class:"window-text",innerHTML:e.$localizeFilter("review_ogct_window_text")},null,8,j),Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("div",w,[Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("p",y,Object(c["toDisplayString"])(e.links.site.text),1),Object(c["createElementVNode"])("p",{class:"link-link",onClick:t[1]||(t[1]=t=>e.window.open(e.links.site.link))},Object(c["toDisplayString"])(e.links.site.link),1)]),Object(c["createElementVNode"])("div",g,[Object(c["createElementVNode"])("p",E,Object(c["toDisplayString"])(e.links.youtube.text),1),Object(c["createElementVNode"])("p",{class:"link-link",onClick:t[2]||(t[2]=t=>e.window.open(e.links.youtube.link))},Object(c["toDisplayString"])(e.links.youtube.link),1)]),Object(c["createElementVNode"])("div",N,[Object(c["createElementVNode"])("p",V,Object(c["toDisplayString"])(e.links.telegramChannel.text),1),Object(c["createElementVNode"])("p",{class:"link-link",onClick:t[3]||(t[3]=t=>e.window.open(e.links.telegramChannel.link))},Object(c["toDisplayString"])(e.links.telegramChannel.link),1)]),Object(c["createElementVNode"])("div",f,[Object(c["createElementVNode"])("p",v,Object(c["toDisplayString"])(e.links.telegramChat.text),1),Object(c["createElementVNode"])("p",{class:"link-link",onClick:t[4]||(t[4]=t=>e.window.open(e.links.telegramChat.link))},Object(c["toDisplayString"])(e.links.telegramChat.link),1)])]),Object(c["createElementVNode"])("button",{class:"basic-button copy-button",onClick:t[5]||(t[5]=t=>e.$utils.copy(e.allLinksText))},Object(c["toDisplayString"])(e.$localizeFilter("copy")),1)]),Object(c["createElementVNode"])("div",C,[this.dataSent?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",_,Object(c["toDisplayString"])(e.$localizeFilter("review_ogct_send_successful")),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("button",{key:1,class:"basic-button join-button",onClick:t[6]||(t[6]=(...t)=>e.joinOffer&&e.joinOffer(...t))},Object(c["toDisplayString"])(e.$localizeFilter("participate")),1))])])]),e.showModal?(Object(c["openBlock"])(),Object(c["createBlock"])(S,{key:0,type:"bestOGCTReview",onCloseModal:e.closeModal},null,8,["onCloseModal"])):Object(c["createCommentVNode"])("",!0)])}var x=l("ed09"),D=l("e977"),$=l("2930"),M=Object(x["a"])({components:{Modal:$["a"]},props:["startDate","endDate"],methods:{async closeModal(){this.showModal=!1,this.dataSent=await this.$store.dispatch("getSpecialOfferData",{offerName:"bestOGCTReview"})},joinOffer(){this.showModal=!0}},setup(){},data:()=>({showModal:!1,links:{site:{text:Object(D["a"])("our_site"),link:"https://capitalwhale.io/#/"},youtube:{text:"YouTube",link:"https://www.youtube.com/channel/UC7to7Nai9043raVVvKYm6Hg"},telegramChannel:{text:Object(D["a"])("our_telegram_channel"),link:"https://t.me/Capital_Whale"},telegramChat:{text:Object(D["a"])("our_official_telegram_chat"),link:"https://t.me/+FYZCWBFFhuswYmM6"}},dataSent:null}),computed:{allLinksText(){let e="";return Object.entries(this.links).forEach(t=>{const[l,c]=t;e=e+c.text+" "+c.link+"\n"}),e=e.substring(0,e.length-1),e}},async mounted(){try{this.dataSent=await this.$store.dispatch("getSpecialOfferData",{offerName:"bestOGCTReview"})}catch(e){this.$error(e)}}}),F=(l("c29e"),l("d959")),T=l.n(F);const z=T()(M,[["render",S],["__scopeId","data-v-ad932c50"]]);t["default"]=z},"5f06":function(e,t,l){},c29e:function(e,t,l){"use strict";l("5f06")}}]);
//# sourceMappingURL=chunk-a631c1e6.2964ead1.js.map