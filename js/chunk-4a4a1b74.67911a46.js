(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a4a1b74"],{"35bc":function(e,t,a){},"73cf":function(e,t,a){"use strict";a.r(t);var l=a("7a23"),s=a("63ed"),i=a.n(s);const o=e=>(Object(l["pushScopeId"])("data-v-4d3e4f12"),e=e(),Object(l["popScopeId"])(),e),r={class:"card-content"},c=o(()=>Object(l["createElementVNode"])("img",{class:"logo-image",style:"",src:i.a},null,-1)),n={class:"input-field"},d={for:"email"},m=o(()=>Object(l["createElementVNode"])("span",{class:"required"},"*",-1)),b={class:"input-field"},p={for:"password"},u=o(()=>Object(l["createElementVNode"])("span",{class:"required"},"*",-1)),O={class:"input-field"},j={for:"lastName"},h=o(()=>Object(l["createElementVNode"])("span",{class:"required"},"*",-1)),g={class:"input-field"},v={for:"firstName"},N=o(()=>Object(l["createElementVNode"])("span",{class:"required"},"*",-1)),f={class:"input-field disabled"},E={class:"active",for:"sponsorEmail"},k=o(()=>Object(l["createElementVNode"])("span",{class:"required"},"*",-1)),y={class:"card-action"},$={class:"button-title"},_=o(()=>Object(l["createElementVNode"])("i",{class:"material-icons right"},"send",-1)),V={class:"additional-action"};function w(e,t,a,s,i,o){const w=Object(l["resolveComponent"])("router-link");return Object(l["openBlock"])(),Object(l["createElementBlock"])("form",{class:"card auth-card",onSubmit:t[6]||(t[6]=Object(l["withModifiers"])(()=>{},["prevent"]))},[Object(l["createElementVNode"])("div",r,[Object(l["createVNode"])(w,{class:Object(l["normalizeClass"])("logo-router-link"),to:"/",target:"_blank"},{default:Object(l["withCtx"])(()=>[c]),_:1}),Object(l["createElementVNode"])("div",n,[Object(l["createElementVNode"])("label",d,[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.$localizeFilter("email")),1),m]),Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{id:"email",type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),class:Object(l["normalizeClass"])({invalid:e.v$.email.$error})},null,2),[[l["vModelText"],e.email,void 0,{trim:!0}]]),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.v$.email.$errors,(e,t)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("small",{class:"error",key:t},Object(l["toDisplayString"])(e.$message),1))),128))]),Object(l["createElementVNode"])("div",b,[Object(l["createElementVNode"])("label",p,[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.$localizeFilter("password")),1),u]),Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{id:"password",type:"password","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),class:Object(l["normalizeClass"])({invalid:e.v$.password.$error})},null,2),[[l["vModelText"],e.password,void 0,{trim:!0}]]),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.v$.password.$errors,(e,t)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("small",{class:"error",key:t},Object(l["toDisplayString"])(e.$message),1))),128))]),Object(l["createElementVNode"])("div",O,[Object(l["createElementVNode"])("label",j,[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.$localizeFilter("last_name")),1),h]),Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{id:"lastName",type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.lastName=t),class:Object(l["normalizeClass"])({invalid:e.v$.lastName.$error})},null,2),[[l["vModelText"],e.lastName,void 0,{trim:!0}]]),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.v$.lastName.$errors,(e,t)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("small",{class:"error",key:t},Object(l["toDisplayString"])(e.$message),1))),128))]),Object(l["createElementVNode"])("div",g,[Object(l["createElementVNode"])("label",v,[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.$localizeFilter("first_name")),1),N]),Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{id:"firstName",type:"text","onUpdate:modelValue":t[3]||(t[3]=t=>e.firstName=t),class:Object(l["normalizeClass"])({invalid:e.v$.firstName.$error})},null,2),[[l["vModelText"],e.firstName,void 0,{trim:!0}]]),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.v$.firstName.$errors,(e,t)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("small",{class:"error",key:t},Object(l["toDisplayString"])(e.$message),1))),128))]),Object(l["createElementVNode"])("div",f,[Object(l["createElementVNode"])("label",E,[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.$localizeFilter("sponsor_email")),1),k]),Object(l["withDirectives"])(Object(l["createElementVNode"])("input",{id:"sponsorEmail",type:"text","onUpdate:modelValue":t[4]||(t[4]=t=>e.sponsorEmail=t),class:Object(l["normalizeClass"])({invalid:e.v$.sponsorEmail.$error}),autocomplete:"off"},null,2),[[l["vModelText"],e.sponsorEmail,void 0,{trim:!0}]]),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.v$.sponsorEmail.$errors,(e,t)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("small",{class:"error",key:t},Object(l["toDisplayString"])(e.$message),1))),128))])]),Object(l["createElementVNode"])("div",y,[Object(l["createElementVNode"])("div",null,[(Object(l["openBlock"])(),Object(l["createElementBlock"])("button",{class:"button-2",id:"submitButton",onClickOnce:t[5]||(t[5]=(...t)=>e.submitHandler&&e.submitHandler(...t)),key:e.buttonKey},[Object(l["createElementVNode"])("p",$,Object(l["toDisplayString"])(e.$localizeFilter("register")),1),_],32))]),Object(l["createElementVNode"])("p",V,[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.$localizeFilter("already_have_an_account"))+" ",1),Object(l["createVNode"])(w,{to:e.buyCoinTicker?"/login?buyCoinTicker="+e.buyCoinTicker:"/login"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.$localizeFilter("sign_in")),1)]),_:1},8,["to"])])])],32)}a("14d9");var B=a("25a0"),T=a("e3e1"),S=a("ed09"),x=a("e977"),D=a("a584"),C=Object(S["a"])({props:{token:{type:String,default:null},buyCoinTicker:{type:String,default:null}},setup(){return{v$:Object(B["a"])()}},data(){return{email:"",password:"",firstName:"",lastName:"",sponsorEmail:"",buttonKey:1}},validations(){return{email:{required:T["b"].withMessage(Object(x["a"])("field_must_not_be_empty"),T["h"]),email:T["b"].withMessage(Object(x["a"])("field_must_be_valid_email_address"),T["a"])},password:{required:T["b"].withMessage(Object(x["a"])("field_must_not_be_empty"),T["h"])},firstName:{required:T["b"].withMessage(Object(x["a"])("field_must_not_be_empty"),T["h"])},lastName:{required:T["b"].withMessage(Object(x["a"])("field_must_not_be_empty"),T["h"])},sponsorEmail:{required:T["b"].withMessage(Object(x["a"])("field_must_not_be_empty"),T["h"]),email:T["b"].withMessage(Object(x["a"])("field_must_be_valid_email_address"),T["a"])}}},methods:{openBot(){},async submitHandler(){if(this.v$.$touch(),this.v$.$error)return void setTimeout(()=>{this.buttonKey+=1},1e3);const e=document.getElementById("submitButton");e.classList.add("button--loading");const t={email:this.email,firstName:this.firstName,lastName:this.lastName,sponsorEmail:this.sponsorEmail,password:this.password,buyCoinTicker:this.buyCoinTicker};try{await this.$store.dispatch("register",t),await this.$store.dispatch("login",t),Object(D["b"])("registration");const{scope:a,email:l}=await this.$store.dispatch("getProfile");setTimeout(()=>{e.classList.remove("button--loading"),"not_activated_client"==a?this.$router.push("/confirmEmail?email="+l):this.$router.push("/cabinet"),this.$message(Object(x["a"])("registration_successfull"))},1e3)}catch(a){setTimeout(()=>{this.$error(a),e.classList.remove("button--loading"),this.buttonKey+=1},1e3)}}},computed:{},async mounted(){this.token&&(localStorage.referralToken=this.token);const e=this.token||localStorage.referralToken;try{if(e){const t=await this.$store.dispatch("getEmailByReferralToken",{token:e});this.sponsorEmail=t.email}else this.sponsorEmail="root@capitalwhale.io";document.getElementById("email").focus()}catch(t){this.$error(t)}}}),z=(a("f1b6"),a("d959")),F=a.n(z);const M=F()(C,[["render",w],["__scopeId","data-v-4d3e4f12"]]);t["default"]=M},f1b6:function(e,t,a){"use strict";a("35bc")}}]);
//# sourceMappingURL=chunk-4a4a1b74.67911a46.js.map