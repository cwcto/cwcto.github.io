(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a62d611"],{"024c":function(e,t,n){e.exports=n.p+"img/MATIC.1087d3d6.svg"},"056f":function(e,t,n){e.exports=n.p+"img/USDV.43f688a0.svg"},"0bac":function(e,t,n){},"17e0":function(e,t,n){e.exports=n.p+"img/ETH.7c199546.svg"},"1aa6":function(e,t,n){e.exports=n.p+"img/ETC.9d4534ae.svg"},3770:function(e,t,n){e.exports=n.p+"img/DAI.1a84a86b.svg"},"50c7":function(e,t,n){e.exports=n.p+"img/USDT.43f688a0.svg"},5520:function(e,t,n){e.exports=n.p+"img/USDC.3b5972c1.svg"},"556f":function(e,t,n){e.exports=n.p+"img/DASH.94b9ae90.svg"},5738:function(e,t,n){e.exports=n.p+"img/XMR.22ac5949.svg"},"615d":function(e,t,n){"use strict";n("0bac")},"644b":function(e,t,n){e.exports=n.p+"img/SOL.4e6fecb2.svg"},"64cc":function(e,t,n){e.exports=n.p+"img/LTC.6046cca1.svg"},7100:function(e,t,n){},"801e":function(e,t,n){e.exports=n.p+"img/DOGE.bfe942ea.svg"},9077:function(e,t,n){e.exports=n.p+"img/BTC.f92890de.svg"},"9fb2":function(e,t,n){e.exports=n.p+"img/BTCV.f92890de.svg"},a637:function(e,t,n){e.exports=n.p+"img/TRX.4f3f3903.svg"},a645:function(e,t,n){e.exports=n.p+"img/XRP.639b151a.svg"},ac95:function(e,t,n){"use strict";var r=n("7a23");const a={class:"large-toggle-block"},i={key:0,class:"title"},o={class:"large-toggle-container"};function u(e,t,n,u,c,s){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[e.title?(Object(r["openBlock"])(),Object(r["createElementBlock"])("label",i,Object(r["toDisplayString"])(e.title),1)):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["large-toggle left",0==e.value?"selected":"default"]),onClick:t[0]||(t[0]=t=>e.toggle(0))},[Object(r["createElementVNode"])("label",{class:Object(r["normalizeClass"])(["text",0==e.value?"selected":""])},Object(r["toDisplayString"])(e.$localizeFilter(e.variants[0])),3)],2),Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["large-toggle right",1==e.value?"selected":"default"]),onClick:t[1]||(t[1]=t=>e.toggle(1))},[Object(r["createElementVNode"])("label",{class:Object(r["normalizeClass"])(["text",1==e.value?"selected":""])},Object(r["toDisplayString"])(e.$localizeFilter(e.variants[1])),3)],2)])])}var c=n("ed09"),s=Object(c["a"])({props:["title","variants","selected"],watch:{selected:function(e,t){null!=e&&void 0!=e&&(this.value=this.variants.indexOf(e))}},data:()=>({value:0}),methods:{toggle(e){this.value=e,this.$emit("toggle",Number(this.value))}}}),l=(n("f39b"),n("d959")),f=n.n(l);const d=f()(s,[["render",u],["__scopeId","data-v-f809d2e6"]]);t["a"]=d},b75c:function(e,t,n){e.exports=n.p+"img/AXS.96e521c9.svg"},db1b:function(e,t,n){"use strict";var r=n("7a23"),a=n("1c8f"),i=n.n(a);const o=e=>(Object(r["pushScopeId"])("data-v-35007e79"),e=e(),Object(r["popScopeId"])(),e),u={class:"amount"},c={class:"title"},s=o(()=>Object(r["createElementVNode"])("img",{class:"amount-image",src:i.a},null,-1)),l={class:"amount"},f={key:0,class:"withdraw-block absolute"},d={class:"withdraw-left-block"},v={class:"available-to-withdraw"},p={class:"comission"};function g(e,t,n,a,i,o){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",u,[Object(r["createElementVNode"])("div",c,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(`amount-block ${e.color} ${e.classOverride}`)},[s,Object(r["createElementVNode"])("div",l,Object(r["toDisplayString"])(e.formattedAmount)+" USDT",1)],2),"withdraw-available"===e.classOverride?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",f,[Object(r["createElementVNode"])("div",d,[Object(r["createElementVNode"])("div",v,Object(r["toDisplayString"])(e.$localizeFilter("available_to_withdraw",[e.$utils.formatNumber(e.availableProfitToWithdraw,"en-US",6,6)+" USDT"])),1),Object(r["createElementVNode"])("div",p,Object(r["toDisplayString"])(e.$localizeFilter("comission_1_usdt")),1)]),Object(r["createElementVNode"])("button",{class:"underline-button",onClick:t[0]||(t[0]=(...t)=>e.liquidityProvidingWithdrawProfit&&e.liquidityProvidingWithdrawProfit(...t))},Object(r["toDisplayString"])(e.$localizeFilter("withdraw")),1)])):Object(r["createCommentVNode"])("",!0)])}n("252a");var m=n("ed09"),h={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},b={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},y=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],w={CSS:{},springs:{}};function O(e,t,n){return Math.min(Math.max(e,t),n)}function x(e,t){return e.indexOf(t)>-1}function M(e,t){return e.apply(null,t)}var j={arr:function(e){return Array.isArray(e)},obj:function(e){return x(Object.prototype.toString.call(e),"Object")},pth:function(e){return j.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||j.svg(e)},str:function(e){return"string"===typeof e},fnc:function(e){return"function"===typeof e},und:function(e){return"undefined"===typeof e},nil:function(e){return j.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return j.hex(e)||j.rgb(e)||j.hsl(e)},key:function(e){return!h.hasOwnProperty(e)&&!b.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function k(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function C(e,t){var n=k(e),r=O(j.und(n[0])?1:n[0],.1,100),a=O(j.und(n[1])?100:n[1],.1,100),i=O(j.und(n[2])?10:n[2],.1,100),o=O(j.und(n[3])?0:n[3],.1,100),u=Math.sqrt(a/r),c=i/(2*Math.sqrt(a*r)),s=c<1?u*Math.sqrt(1-c*c):0,l=1,f=c<1?(c*u-o)/s:-o+u;function d(e){var n=t?t*e/1e3:e;return n=c<1?Math.exp(-n*c*u)*(l*Math.cos(s*n)+f*Math.sin(s*n)):(l+f*n)*Math.exp(-n*u),0===e||1===e?e:1-n}function v(){var t=w.springs[e];if(t)return t;var n=1/6,r=0,a=0;while(1)if(r+=n,1===d(r)){if(a++,a>=16)break}else a=0;var i=r*n*1e3;return w.springs[e]=i,i}return t?d:v}function D(e){return void 0===e&&(e=10),function(t){return Math.ceil(O(t,1e-6,1)*e)*(1/e)}}var S=function(){var e=11,t=1/(e-1);function n(e,t){return 1-3*t+3*e}function r(e,t){return 3*t-6*e}function a(e){return 3*e}function i(e,t,i){return((n(t,i)*e+r(t,i))*e+a(t))*e}function o(e,t,i){return 3*n(t,i)*e*e+2*r(t,i)*e+a(t)}function u(e,t,n,r,a){var o,u,c=0;do{u=t+(n-t)/2,o=i(u,r,a)-e,o>0?n=u:t=u}while(Math.abs(o)>1e-7&&++c<10);return u}function c(e,t,n,r){for(var a=0;a<4;++a){var u=o(t,n,r);if(0===u)return t;var c=i(t,n,r)-e;t-=c/u}return t}function s(n,r,a,s){if(0<=n&&n<=1&&0<=a&&a<=1){var l=new Float32Array(e);if(n!==r||a!==s)for(var f=0;f<e;++f)l[f]=i(f*t,n,a);return function(e){return n===r&&a===s||0===e||1===e?e:i(d(e),r,s)}}function d(r){for(var i=0,s=1,f=e-1;s!==f&&l[s]<=r;++s)i+=t;--s;var d=(r-l[s])/(l[s+1]-l[s]),v=i+d*t,p=o(v,n,a);return p>=.001?c(r,v,n,a):0===p?v:u(r,i,i+t,n,a)}}return s}(),T=function(){var e={linear:function(){return function(e){return e}}},t={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=O(e,1,10),r=O(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach((function(e,n){t[e]=function(){return function(e){return Math.pow(e,n+2)}}})),Object.keys(t).forEach((function(n){var r=t[n];e["easeIn"+n]=r,e["easeOut"+n]=function(e,t){return function(n){return 1-r(e,t)(1-n)}},e["easeInOut"+n]=function(e,t){return function(n){return n<.5?r(e,t)(2*n)/2:1-r(e,t)(-2*n+2)/2}},e["easeOutIn"+n]=function(e,t){return function(n){return n<.5?(1-r(e,t)(1-2*n))/2:(r(e,t)(2*n-1)+1)/2}}})),e}();function E(e,t){if(j.fnc(e))return e;var n=e.split("(")[0],r=T[n],a=k(e);switch(n){case"spring":return C(e,t);case"cubicBezier":return M(S,a);case"steps":return M(D,a);default:return M(r,a)}}function N(e){try{var t=document.querySelectorAll(e);return t}catch(n){return}}function P(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in e){var o=e[i];t.call(r,o,i,e)&&a.push(o)}return a}function B(e){return e.reduce((function(e,t){return e.concat(j.arr(t)?B(t):t)}),[])}function I(e){return j.arr(e)?e:(j.str(e)&&(e=N(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function A(e,t){return e.some((function(e){return e===t}))}function V(e){var t={};for(var n in e)t[n]=e[n];return t}function F(e,t){var n=V(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function $(e,t){var n=V(e);for(var r in t)n[r]=j.und(e[r])?t[r]:e[r];return n}function L(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function q(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,(function(e,t,n,r){return t+t+n+n+r+r})),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),a=parseInt(r[1],16),i=parseInt(r[2],16),o=parseInt(r[3],16);return"rgba("+a+","+i+","+o+",1)"}function U(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,c=a[4]||1;function s(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==o)t=n=r=u;else{var l=u<.5?u*(1+o):u+o-u*o,f=2*u-l;t=s(f,l,i+1/3),n=s(f,l,i),r=s(f,l,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+c+")"}function _(e){return j.rgb(e)?L(e):j.hex(e)?q(e):j.hsl(e)?U(e):void 0}function H(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function z(e){return x(e,"translate")||"perspective"===e?"px":x(e,"rotate")||x(e,"skew")?"deg":void 0}function W(e,t){return j.fnc(e)?e(t.target,t.id,t.total):e}function X(e,t){return e.getAttribute(t)}function R(e,t,n){var r=H(t);if(A([n,"deg","rad","turn"],r))return t;var a=w.CSS[t+n];if(!j.und(a))return a;var i=100,o=document.createElement(e.tagName),u=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;u.appendChild(o),o.style.position="absolute",o.style.width=i+n;var c=i/o.offsetWidth;u.removeChild(o);var s=c*parseFloat(t);return w.CSS[t+n]=s,s}function G(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?R(e,a,n):a}}function Y(e,t){return j.dom(e)&&!j.inp(e)&&(!j.nil(X(e,t))||j.svg(e)&&e[t])?"attribute":j.dom(e)&&A(y,t)?"transform":j.dom(e)&&"transform"!==t&&G(e,t)?"css":null!=e[t]?"object":void 0}function Z(e){if(j.dom(e)){var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;while(t=r.exec(n))a.set(t[1],t[2]);return a}}function Q(e,t,n,r){var a=x(t,"scale")?1:0+z(t),i=Z(e).get(t)||a;return n&&(n.transforms.list.set(t,i),n.transforms["last"]=t),r?R(e,i,r):i}function J(e,t,n,r){switch(Y(e,t)){case"transform":return Q(e,t,r,n);case"css":return G(e,t,n);case"attribute":return X(e,t);default:return e[t]||0}}function K(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=H(e)||0,a=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function ee(e,t){if(j.col(e))return _(e);if(/\s/g.test(e))return e;var n=H(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function te(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function ne(e){return 2*Math.PI*X(e,"r")}function re(e){return 2*X(e,"width")+2*X(e,"height")}function ae(e){return te({x:X(e,"x1"),y:X(e,"y1")},{x:X(e,"x2"),y:X(e,"y2")})}function ie(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=te(t,i)),t=i}return r}function oe(e){var t=e.points;return ie(e)+te(t.getItem(t.numberOfItems-1),t.getItem(0))}function ue(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return ne(e);case"rect":return re(e);case"line":return ae(e);case"polyline":return ie(e);case"polygon":return oe(e)}}function ce(e){var t=ue(e);return e.setAttribute("stroke-dasharray",t),t}function se(e){var t=e.parentNode;while(j.svg(t)){if(!j.svg(t.parentNode))break;t=t.parentNode}return t}function le(e,t){var n=t||{},r=n.el||se(e),a=r.getBoundingClientRect(),i=X(r,"viewBox"),o=a.width,u=a.height,c=n.viewBox||(i?i.split(" "):[0,0,o,u]);return{el:r,viewBox:c,x:c[0]/1,y:c[1]/1,w:o,h:u,vW:c[2],vH:c[3]}}function fe(e,t){var n=j.str(e)?N(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:le(n),totalLength:ue(n)*(r/100)}}}function de(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=le(e.el,e.svg),i=r(),o=r(-1),u=r(1),c=n?1:a.w/a.vW,s=n?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*c;case"y":return(i.y-a.y)*s;case"angle":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}function ve(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=ee(j.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:j.str(e)||t?r.split(n):[]}}function pe(e){var t=e?B(j.arr(e)?e.map(I):I(e)):[];return P(t,(function(e,t,n){return n.indexOf(e)===t}))}function ge(e){var t=pe(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:Z(e)}}}))}function me(e,t){var n=V(t);if(/^spring/.test(n.easing)&&(n.duration=C(n.easing)),j.arr(e)){var r=e.length,a=2===r&&!j.obj(e[0]);a?e={value:e}:j.fnc(t.duration)||(n.duration=t.duration/r)}var i=j.arr(e)?e:[e];return i.map((function(e,n){var r=j.obj(e)&&!j.pth(e)?e:{value:e};return j.und(r.delay)&&(r.delay=n?0:t.delay),j.und(r.endDelay)&&(r.endDelay=n===i.length-1?t.endDelay:0),r})).map((function(e){return $(e,n)}))}function he(e){for(var t=P(B(e.map((function(e){return Object.keys(e)}))),(function(e){return j.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)j.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}function be(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=$(he(r),t)),t)j.key(a)&&n.push({name:a,tweens:me(t[a],e)});return n}function ye(e,t){var n={};for(var r in e){var a=W(e[r],t);j.arr(a)&&(a=a.map((function(e){return W(e,t)})),1===a.length&&(a=a[0])),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function we(e,t){var n;return e.tweens.map((function(r){var a=ye(r,t),i=a.value,o=j.arr(i)?i[1]:i,u=H(o),c=J(t.target,e.name,u,t),s=n?n.to.original:c,l=j.arr(i)?i[0]:s,f=H(l)||H(c),d=u||f;return j.und(o)&&(o=s),a.from=ve(l,d),a.to=ve(K(o,l),d),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=E(a.easing,a.duration),a.isPath=j.pth(i),a.isPathTargetInsideSVG=a.isPath&&j.svg(t.target),a.isColor=j.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var Oe={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var i="";r.list.forEach((function(e,t){i+=t+"("+e+") "})),e.style.transform=i}}};function xe(e,t){var n=ge(e);n.forEach((function(e){for(var n in t){var r=W(t[n],e),a=e.target,i=H(r),o=J(a,n,i,e),u=i||H(o),c=K(ee(r,u),o),s=Y(a,n);Oe[s](a,n,c,e.transforms,!0)}}))}function Me(e,t){var n=Y(e.target,t.name);if(n){var r=we(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}function je(e,t){return P(B(e.map((function(e){return t.map((function(t){return Me(e,t)}))}))),(function(e){return!j.und(e)}))}function ke(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var Ce=0;function De(e){var t=F(h,e),n=F(b,e),r=be(n,e),a=ge(e.targets),i=je(a,r),o=ke(i,n),u=Ce;return Ce++,$(t,{id:u,children:[],animatables:a,animations:i,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var Se=[],Te=function(){var e;function t(){e||Ee()&&Ne.suspendWhenDocumentHidden||!(Se.length>0)||(e=requestAnimationFrame(n))}function n(t){var r=Se.length,a=0;while(a<r){var i=Se[a];i.paused?(Se.splice(a,1),r--):(i.tick(t),a++)}e=a>0?requestAnimationFrame(n):void 0}function r(){Ne.suspendWhenDocumentHidden&&(Ee()?e=cancelAnimationFrame(e):(Se.forEach((function(e){return e._onDocumentVisibility()})),Te()))}return"undefined"!==typeof document&&document.addEventListener("visibilitychange",r),t}();function Ee(){return!!document&&document.hidden}function Ne(e){void 0===e&&(e={});var t,n=0,r=0,a=0,i=0,o=null;function u(e){var t=window.Promise&&new Promise((function(e){return o=e}));return e.finished=t,t}var c=De(e);u(c);function s(){var e=c.direction;"alternate"!==e&&(c.direction="normal"!==e?"normal":"reverse"),c.reversed=!c.reversed,t.forEach((function(e){return e.reversed=c.reversed}))}function l(e){return c.reversed?c.duration-e:e}function f(){n=0,r=l(c.currentTime)*(1/Ne.speed)}function d(e,t){t&&t.seek(e-t.timelineOffset)}function v(e){if(c.reversePlayback)for(var n=i;n--;)d(e,t[n]);else for(var r=0;r<i;r++)d(e,t[r])}function p(e){var t=0,n=c.animations,r=n.length;while(t<r){var a=n[t],i=a.animatable,o=a.tweens,u=o.length-1,s=o[u];u&&(s=P(o,(function(t){return e<t.end}))[0]||s);for(var l=O(e-s.start-s.delay,0,s.duration)/s.duration,f=isNaN(l)?1:s.easing(l),d=s.to.strings,v=s.round,p=[],g=s.to.numbers.length,m=void 0,h=0;h<g;h++){var b=void 0,y=s.to.numbers[h],w=s.from.numbers[h]||0;b=s.isPath?de(s.value,f*y,s.isPathTargetInsideSVG):w+f*(y-w),v&&(s.isColor&&h>2||(b=Math.round(b*v)/v)),p.push(b)}var x=d.length;if(x){m=d[0];for(var M=0;M<x;M++){d[M];var j=d[M+1],k=p[M];isNaN(k)||(m+=j?k+j:k+" ")}}else m=p[0];Oe[a.type](i.target,a.property,m,i.transforms),a.currentValue=m,t++}}function g(e){c[e]&&!c.passThrough&&c[e](c)}function m(){c.remaining&&!0!==c.remaining&&c.remaining--}function h(e){var i=c.duration,f=c.delay,d=i-c.endDelay,h=l(e);c.progress=O(h/i*100,0,100),c.reversePlayback=h<c.currentTime,t&&v(h),!c.began&&c.currentTime>0&&(c.began=!0,g("begin")),!c.loopBegan&&c.currentTime>0&&(c.loopBegan=!0,g("loopBegin")),h<=f&&0!==c.currentTime&&p(0),(h>=d&&c.currentTime!==i||!i)&&p(i),h>f&&h<d?(c.changeBegan||(c.changeBegan=!0,c.changeCompleted=!1,g("changeBegin")),g("change"),p(h)):c.changeBegan&&(c.changeCompleted=!0,c.changeBegan=!1,g("changeComplete")),c.currentTime=O(h,0,i),c.began&&g("update"),e>=i&&(r=0,m(),c.remaining?(n=a,g("loopComplete"),c.loopBegan=!1,"alternate"===c.direction&&s()):(c.paused=!0,c.completed||(c.completed=!0,g("loopComplete"),g("complete"),!c.passThrough&&"Promise"in window&&(o(),u(c)))))}return c.reset=function(){var e=c.direction;c.passThrough=!1,c.currentTime=0,c.progress=0,c.paused=!0,c.began=!1,c.loopBegan=!1,c.changeBegan=!1,c.completed=!1,c.changeCompleted=!1,c.reversePlayback=!1,c.reversed="reverse"===e,c.remaining=c.loop,t=c.children,i=t.length;for(var n=i;n--;)c.children[n].reset();(c.reversed&&!0!==c.loop||"alternate"===e&&1===c.loop)&&c.remaining++,p(c.reversed?c.duration:0)},c._onDocumentVisibility=f,c.set=function(e,t){return xe(e,t),c},c.tick=function(e){a=e,n||(n=a),h((a+(r-n))*Ne.speed)},c.seek=function(e){h(l(e))},c.pause=function(){c.paused=!0,f()},c.play=function(){c.paused&&(c.completed&&c.reset(),c.paused=!1,Se.push(c),f(),Te())},c.reverse=function(){s(),c.completed=!c.reversed,f()},c.restart=function(){c.reset(),c.play()},c.remove=function(e){var t=pe(e);Be(t,c)},c.reset(),c.autoplay&&c.play(),c}function Pe(e,t){for(var n=t.length;n--;)A(e,t[n].animatable.target)&&t.splice(n,1)}function Be(e,t){var n=t.animations,r=t.children;Pe(e,n);for(var a=r.length;a--;){var i=r[a],o=i.animations;Pe(e,o),o.length||i.children.length||r.splice(a,1)}n.length||r.length||t.pause()}function Ie(e){for(var t=pe(e),n=Se.length;n--;){var r=Se[n];Be(t,r)}}function Ae(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?E(t.easing):null,a=t.grid,i=t.axis,o=t.from||0,u="first"===o,c="center"===o,s="last"===o,l=j.arr(e),f=l?parseFloat(e[0]):parseFloat(e),d=l?parseFloat(e[1]):0,v=H(l?e[1]:e)||0,p=t.start||0+(l?f:0),g=[],m=0;return function(e,t,h){if(u&&(o=0),c&&(o=(h-1)/2),s&&(o=h-1),!g.length){for(var b=0;b<h;b++){if(a){var y=c?(a[0]-1)/2:o%a[0],w=c?(a[1]-1)/2:Math.floor(o/a[0]),O=b%a[0],x=Math.floor(b/a[0]),M=y-O,j=w-x,k=Math.sqrt(M*M+j*j);"x"===i&&(k=-M),"y"===i&&(k=-j),g.push(k)}else g.push(Math.abs(o-b));m=Math.max.apply(Math,g)}r&&(g=g.map((function(e){return r(e/m)*m}))),"reverse"===n&&(g=g.map((function(e){return i?e<0?-1*e:-e:Math.abs(m-e)})))}var C=l?(d-f)/m:f;return p+C*(Math.round(100*g[t])/100)+v}}function Ve(e){void 0===e&&(e={});var t=Ne(e);return t.duration=0,t.add=function(n,r){var a=Se.indexOf(t),i=t.children;function o(e){e.passThrough=!0}a>-1&&Se.splice(a,1);for(var u=0;u<i.length;u++)o(i[u]);var c=$(n,F(b,e));c.targets=c.targets||e.targets;var s=t.duration;c.autoplay=!1,c.direction=t.direction,c.timelineOffset=j.und(r)?s:K(r,s),o(t),t.seek(c.timelineOffset);var l=Ne(c);o(l),i.push(l);var f=ke(i,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}Ne.version="3.2.1",Ne.speed=1,Ne.suspendWhenDocumentHidden=!0,Ne.running=Se,Ne.remove=Ie,Ne.get=J,Ne.set=xe,Ne.convertPx=R,Ne.path=fe,Ne.setDashoffset=ce,Ne.stagger=Ae,Ne.timeline=Ve,Ne.easing=E,Ne.penner=T,Ne.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var Fe=Ne,$e=(n("fa7d"),n("e977")),Le=Object(m["a"])({props:{classOverride:{type:String,default:""},amount:{type:Number,required:!0},availableProfitToWithdraw:{type:Number,default:0},title:{type:String,required:!0},color:{type:String,required:!0},type:{type:String,default:null}},watch:{amount(e,t){e!==t&&this.$nextTick(()=>{"income"===(null===this||void 0===this?void 0:this.type)?this.index>0?(this.count=t,this.setCount(e)):(this.index=1,this.count=e):this.count=e})}},data:()=>({count:0,index:0}),methods:{setCount(e){const t={n:this.count};Fe({targets:t,n:e,round:1,duration:3e3,easing:"linear",update:()=>{this.count=t.n}})},async liquidityProvidingWithdrawProfit(){try{await this.$store.dispatch("liquidityProvidingWithdrawProfit"),this.$message(Object($e["a"])("liquidity_withdraw_successfull")),this.$emit("reloadData")}catch(e){this.$error(e)}}},computed:{formattedAmount(){return(this.count/1e6).toFixed(6)}},mounted(){"income"!==this.type&&(this.count=this.amount)}}),qe=(n("615d"),n("d959")),Ue=n.n(qe);const _e=Ue()(Le,[["render",g],["__scopeId","data-v-35007e79"]]);t["a"]=_e},dd6d:function(e,t,n){e.exports=n.p+"img/UNI.da51f3ab.svg"},dfce:function(e,t,n){var r={"./ADA.svg":"e217","./AXS.svg":"b75c","./BTC.svg":"9077","./BTCV.svg":"9fb2","./DAI.svg":"3770","./DASH.svg":"556f","./DOGE.svg":"801e","./ETC.svg":"1aa6","./ETH.svg":"17e0","./LTC.svg":"64cc","./LUNA2.svg":"f7fa","./MATIC.svg":"024c","./SHIB.svg":"ff25","./SOL.svg":"644b","./TRX.svg":"a637","./UNI.svg":"dd6d","./USDC.svg":"5520","./USDT.svg":"50c7","./USDV.svg":"056f","./XMR.svg":"5738","./XRP.svg":"a645"};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="dfce"},e217:function(e,t,n){e.exports=n.p+"img/ADA.6aea691c.svg"},f39b:function(e,t,n){"use strict";n("7100")},f7fa:function(e,t,n){e.exports=n.p+"img/LUNA2.3baaccd8.svg"},ff25:function(e,t,n){e.exports=n.p+"img/SHIB.e53ff3a9.svg"}}]);
//# sourceMappingURL=chunk-4a62d611.9a59d6ec.js.map