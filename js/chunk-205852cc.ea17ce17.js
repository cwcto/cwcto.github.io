(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-205852cc"],{"4f07":function(e,t,a){},bd63:function(e,t,a){"use strict";a("4f07")},c7f5:function(e,t,a){},e7dd:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const i={class:"page-container objects"},n={class:"page-content"},s={class:"wrapper"},o={class:"card-container"};function r(e,t,a,r,l,d){const p=Object(c["resolveComponent"])("Article"),u=Object(c["resolveComponent"])("pagination");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,[Object(c["createElementVNode"])("h1",null,Object(c["toDisplayString"])(e.$localizeFilter("articles_about_us")),1),Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("div",o,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.cards,(e,t)=>(Object(c["openBlock"])(),Object(c["createBlock"])(p,{key:t,card:e.data},null,8,["card"]))),128))])]),Object(c["createVNode"])(u,{modelValue:e.page,"onUpdate:modelValue":t[0]||(t[0]=t=>e.page=t),records:e.count,"per-page":e.pageSize,onPaginate:e.pageChangeHandler},null,8,["modelValue","records","per-page","onPaginate"])])])}var l=a("ed09"),d=a("fba1");const p={class:"card"},u=["src"],h=["href"],g={class:"text"};function m(e,t,a,i,n,s){var o,r,l;return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",p,[Object(c["createElementVNode"])("img",{src:e.getImageLink(),alt:""},null,8,u),Object(c["createElementVNode"])("a",{href:null===(o=e.card)||void 0===o?void 0:o.link,target:"_blank",class:"title"},Object(c["toDisplayString"])(null===(r=e.card)||void 0===r?void 0:r.title),9,h),Object(c["createElementVNode"])("div",g,Object(c["toDisplayString"])(null===(l=e.card)||void 0===l?void 0:l.text),1)])}var b=Object(l["a"])({setup(){},data:()=>({}),props:["card"],mounted(){console.log(this.card)},methods:{getImageLink(){const e=this.card;if(console.log("getImageLink",this.card),null!==(null===e||void 0===e?void 0:e.image)&&void 0!==(null===e||void 0===e?void 0:e.image)){let t=this.$globalConfig.getHostName();return`${t}/news-photo/${e.image}`}return""}}}),v=(a("eaac"),a("d959")),j=a.n(v);const O=j()(b,[["render",m],["__scopeId","data-v-7b6f97c4"]]);var k=O;function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}var I=Object(l["a"])({components:{Article:k},mixins:[d["a"]],watch:{page(){this.$nextTick(this.loadData)},type(){this.$nextTick(this.loadData)}},setup(e){},data:()=>({cards:[],count:0}),props:{},computed:{cardComponent(){return f(this.type)+"Card"}},mounted(){this.loadData()},methods:{async loadData(){try{const e={skip:this.skip,limit:this.limit};this.cards=await this.$store.dispatch("getArticlesByFilter",e);const{count:t}=await this.$store.dispatch("getArticlesByFilterCount",e);this.count=t,this.setupPagination(this.cards)}catch(e){this.$error(e)}}}});a("bd63");const w=j()(I,[["render",r],["__scopeId","data-v-b49d13dc"]]);t["default"]=w},eaac:function(e,t,a){"use strict";a("c7f5")},fba1:function(e,t,a){"use strict";var c=a("2ef0"),i=a.n(c);t["a"]={data(){return{page:1,pageSize:10,pageCount:0,allItems:[],items:[]}},methods:{setupPagination(e){this.allItems=i.a.chunk(e,this.pageSize),this.pageCount=i.a.size(this.allItems),this.items=this.allItems[this.page-1]||this.allItems[0]},pageChangeHandler(){this.items=this.allItems[this.page-1]||this.allItems[0]}},computed:{skip(){return(this.page-1)*this.pageSize},limit(){return this.pageSize}}}}}]);
//# sourceMappingURL=chunk-205852cc.ea17ce17.js.map