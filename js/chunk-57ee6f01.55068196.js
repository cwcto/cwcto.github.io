(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57ee6f01"],{"4e77":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),s=a("5bab"),l=a.n(s);const o=e=>(Object(c["pushScopeId"])("data-v-3174b7cd"),e=e(),Object(c["popScopeId"])(),e),i={class:"staking-deposits"},n=o(()=>Object(c["createElementVNode"])("img",{class:"back-button-arrow",src:l.a},null,-1)),d={class:"back-button-text"},r={class:"title"};function m(e,t,a,s,l,o){const m=Object(c["resolveComponent"])("StakingDepositsTable"),p=Object(c["resolveComponent"])("EmptyTable"),u=Object(c["resolveComponent"])("pagination");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,[Object(c["createElementVNode"])("button",{class:"back-button",onClick:t[0]||(t[0]=(...t)=>e.goBack&&e.goBack(...t))},[n,Object(c["createElementVNode"])("p",d,Object(c["toDisplayString"])(e.$localizeFilter("staking")),1)]),Object(c["createElementVNode"])("p",r,Object(c["toDisplayString"])(e.$localizeFilter("deposits_to_staking")),1),Object(c["createVNode"])(m,{showTable:e.deposits.length>0,deposits:e.deposits,onChangeStatus:e.changeStatus,onCancelRequest:e.cancelRequest},null,8,["showTable","deposits","onChangeStatus","onCancelRequest"]),0==e.deposits.length?(Object(c["openBlock"])(),Object(c["createBlock"])(p,{key:0,text:e.$localizeFilter("no_deposits_to_staking")},null,8,["text"])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(u,{modelValue:e.page,"onUpdate:modelValue":t[1]||(t[1]=t=>e.page=t),records:e.count,"per-page":e.pageSize,onPaginate:e.pageChangeHandler},null,8,["modelValue","records","per-page","onPaginate"])])}var p=a("ed09");const u={class:"place-for-table"},b={key:0,class:"custom-table desktop"},g={class:"custom-table-header"},O={class:"custom-table-row light header"},j={class:"custom-data-cell header"},h={class:"custom-data-cell header"},k={class:"custom-data-cell header",style:{width:"20%"}},y=["innerHTML"],E={class:"custom-data-cell header"},V={class:"custom-table-body"},N={class:"custom-data-cell"},v={class:"custom-data-cell"},S={class:"custom-data-cell"},f={class:"deposit-amount"},$={style:{"font-weight":"600"}},T={class:"custom-data-cell"},B={class:"period"},D={class:"custom-data-cell"},w={class:"percent"},C={key:1,class:"custom-table mobile"},F={class:"custom-table-body"},z={class:"custom-data-cell"},_={class:"custom-data-cell"},I={class:"custom-data-cell"},x={class:"deposit-amount"},q={style:{"font-weight":"600"}},A={class:"custom-data-cell"},P={class:"period"},H={class:"custom-data-cell"},L={class:"percent"};function R(e,t,a,s,l,o){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",u,[a.showTable?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",b,[Object(c["createElementVNode"])("div",g,[Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("div",j,Object(c["toDisplayString"])(e.$localizeFilter("start_date")),1),Object(c["createElementVNode"])("div",h,Object(c["toDisplayString"])(e.$localizeFilter("contract_end_date_2")),1),Object(c["createElementVNode"])("div",k,Object(c["toDisplayString"])(e.$localizeFilter("application_amount")+" "+a.deposits[0].currencyCode),1),Object(c["createElementVNode"])("div",{class:"custom-data-cell header",innerHTML:e.$localizeFilter("period_weeks")},null,8,y),Object(c["createElementVNode"])("div",E,Object(c["toDisplayString"])(e.$localizeFilter("percent")),1)])]),Object(c["createElementVNode"])("div",V,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.deposits,(t,a)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["custom-table-row",a%2==0?"dark":"light"]),key:a},[Object(c["createElementVNode"])("div",N,[Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(`${e.$dateTimeFilter(t.startTimestamp,"custom",null,{day:"2-digit",month:"long",year:"numeric"})},\n${e.$dateTimeFilter(t.startTimestamp,"custom",null,{hour:"2-digit",minute:"2-digit"})}`),1)]),Object(c["createElementVNode"])("div",v,[Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(`${e.$dateTimeFilter(t.endTimestamp,"custom",null,{day:"2-digit",month:"long",year:"numeric"})},\n${e.$dateTimeFilter(t.endTimestamp,"custom",null,{hour:"2-digit",minute:"2-digit"})}`),1)]),Object(c["createElementVNode"])("div",S,[Object(c["createElementVNode"])("p",f,[Object(c["createElementVNode"])("span",$,Object(c["toDisplayString"])(o.getAmount(t.amount)+" "+t.currencyCode),1)])]),Object(c["createElementVNode"])("div",T,[Object(c["createElementVNode"])("p",B,Object(c["toDisplayString"])(t.period),1)]),Object(c["createElementVNode"])("div",D,[Object(c["createElementVNode"])("p",w,Object(c["toDisplayString"])(100*t.percent+"%"),1)])],2))),128))])])):Object(c["createCommentVNode"])("",!0),a.showTable?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",C,[Object(c["createElementVNode"])("div",F,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.deposits,(t,a)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["custom-table-row",a%2==0?"dark":"light"]),key:a},[Object(c["createElementVNode"])("div",z,[Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(`${e.$dateTimeFilter(t.startTimestamp,"custom",null,{day:"2-digit",month:"long",year:"numeric"})},\n${e.$dateTimeFilter(t.startTimestamp,"custom",null,{hour:"2-digit",minute:"2-digit"})}`),1)]),Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(`${e.$dateTimeFilter(t.endTimestamp,"custom",null,{day:"2-digit",month:"long",year:"numeric"})},\n${e.$dateTimeFilter(t.endTimestamp,"custom",null,{hour:"2-digit",minute:"2-digit"})}`),1)]),Object(c["createElementVNode"])("div",I,[Object(c["createElementVNode"])("p",x,[Object(c["createElementVNode"])("span",q,Object(c["toDisplayString"])(o.getAmount(t.amount)+" "+t.currencyCode),1)])]),Object(c["createElementVNode"])("div",A,[Object(c["createElementVNode"])("p",P,Object(c["toDisplayString"])(t.period+" "+e.$localizeFilter("weeks")),1)]),Object(c["createElementVNode"])("div",H,[Object(c["createElementVNode"])("p",L,Object(c["toDisplayString"])(100*t.percent+"%"),1)])],2))),128))])])):Object(c["createCommentVNode"])("",!0)])}a("e977");var J=a("fa7d"),M={props:{deposits:{type:Array,default:()=>[]},showTable:{type:Boolean,default:!1},type:{type:String}},data:()=>({statuses:["all","pending","completed","canceled"],status:"all"}),components:{},methods:{selectOption(e){this.status=this.statuses[e],this.$emit("changeStatus",this.status)},getAmount(e){return J["a"].displayBigIntAsDecimal(BigInt(e),1e18,6)}},computed:{}},U=(a("d373"),a("d959")),W=a.n(U);const G=W()(M,[["render",R],["__scopeId","data-v-e35d2938"]]);var K=G,Q=a("fba1"),X=a("61de"),Y=Object(p["a"])({props:{},components:{StakingDepositsTable:K,EmptyTable:X["a"]},mixins:[Q["a"]],watch:{page(){this.$nextTick(this.loadData)}},setup(){},data:()=>({deposits:[],count:0,status:"all"}),mounted(){this.loadData()},methods:{goBack(){this.$router.back()},cancelRequest(e){this.requests[e].status="canceled",this.$forceUpdate()},changeStatus(e){this.status=e,this.loadData()},async loadData(){try{const e={status:this.status,skip:this.skip,limit:this.limit,currencyCode:"CWPT",type:this.from};this.deposits=await this.$store.dispatch("getStakingDeposits",e);const{count:t}=await this.$store.dispatch("getStakingDepositsCount",e);this.count=t,this.setupPagination(this.deposits)}catch(e){this.$error(e)}}}});a("d7f6");const Z=W()(Y,[["render",m],["__scopeId","data-v-3174b7cd"]]);t["default"]=Z},"564f":function(e,t,a){},"61de":function(e,t,a){"use strict";var c=a("7a23");const s={class:"empty-table"},l={class:"text"};function o(e,t,a,o,i,n){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",s,[Object(c["createElementVNode"])("p",l,Object(c["toDisplayString"])(e.text),1)])}var i=a("ed09"),n=Object(i["a"])({props:["text"],setup(){}}),d=(a("ae25"),a("d959")),r=a.n(d);const m=r()(n,[["render",o],["__scopeId","data-v-2fc3f164"]]);t["a"]=m},ae25:function(e,t,a){"use strict";a("afb8")},afb8:function(e,t,a){},cc7a:function(e,t,a){},d373:function(e,t,a){"use strict";a("cc7a")},d7f6:function(e,t,a){"use strict";a("564f")},fba1:function(e,t,a){"use strict";var c=a("2ef0"),s=a.n(c);t["a"]={data(){return{page:1,pageSize:10,pageCount:0,allItems:[],items:[]}},methods:{setupPagination(e){this.allItems=s.a.chunk(e,this.pageSize),this.pageCount=s.a.size(this.allItems),this.items=this.allItems[this.page-1]||this.allItems[0]},pageChangeHandler(){this.items=this.allItems[this.page-1]||this.allItems[0]}},computed:{skip(){return(this.page-1)*this.pageSize},limit(){return this.pageSize}}}}}]);
//# sourceMappingURL=chunk-57ee6f01.55068196.js.map