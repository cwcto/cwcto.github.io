(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f3fa356"],{"024c":function(e,t,n){e.exports=n.p+"img/MATIC.1087d3d6.svg"},"14f8":function(e,t,n){"use strict";n("30fa")},"17e0":function(e,t,n){e.exports=n.p+"img/ETH.7c199546.svg"},"1aa6":function(e,t,n){e.exports=n.p+"img/ETC.9d4534ae.svg"},"30fa":function(e,t,n){},3770:function(e,t,n){e.exports=n.p+"img/DAI.1a84a86b.svg"},"50c7":function(e,t,n){e.exports=n.p+"img/USDT.43f688a0.svg"},5520:function(e,t,n){e.exports=n.p+"img/USDC.3b5972c1.svg"},"556f":function(e,t,n){e.exports=n.p+"img/DASH.94b9ae90.svg"},5738:function(e,t,n){e.exports=n.p+"img/XMR.22ac5949.svg"},"644b":function(e,t,n){e.exports=n.p+"img/SOL.4e6fecb2.svg"},"64cc":function(e,t,n){e.exports=n.p+"img/LTC.6046cca1.svg"},7100:function(e,t,n){},"801e":function(e,t,n){e.exports=n.p+"img/DOGE.bfe942ea.svg"},9077:function(e,t,n){e.exports=n.p+"img/BTC.f92890de.svg"},a637:function(e,t,n){e.exports=n.p+"img/TRX.4f3f3903.svg"},a645:function(e,t,n){e.exports=n.p+"img/XRP.639b151a.svg"},ac95:function(e,t,n){"use strict";var r=n("7a23");const a={class:"large-toggle-block"},o={key:0,class:"title"},i={class:"large-toggle-container"};function u(e,t,n,u,c,s){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[e.title?(Object(r["openBlock"])(),Object(r["createElementBlock"])("label",o,Object(r["toDisplayString"])(e.title),1)):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",i,[Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["large-toggle left",0==e.value?"selected":"default"]),onClick:t[0]||(t[0]=t=>e.toggle(0))},[Object(r["createElementVNode"])("label",{class:Object(r["normalizeClass"])(["text",0==e.value?"selected":""])},Object(r["toDisplayString"])(e.$localizeFilter(e.variants[0])),3)],2),Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["large-toggle right",1==e.value?"selected":"default"]),onClick:t[1]||(t[1]=t=>e.toggle(1))},[Object(r["createElementVNode"])("label",{class:Object(r["normalizeClass"])(["text",1==e.value?"selected":""])},Object(r["toDisplayString"])(e.$localizeFilter(e.variants[1])),3)],2)])])}var c=n("ed09"),s=Object(c["a"])({props:["title","variants","selected"],watch:{selected:function(e,t){null!=e&&void 0!=e&&(this.value=this.variants.indexOf(e))}},data:()=>({value:0}),methods:{toggle(e){this.value=e,this.$emit("toggle",Number(this.value))}}}),l=(n("f39b"),n("d959")),f=n.n(l);const d=f()(s,[["render",u],["__scopeId","data-v-f809d2e6"]]);t["a"]=d},b75c:function(e,t,n){e.exports=n.p+"img/AXS.96e521c9.svg"},db1b:function(e,t,n){"use strict";var r=n("7a23"),a=n("1c8f"),o=n.n(a);const i=e=>(Object(r["pushScopeId"])("data-v-658e9007"),e=e(),Object(r["popScopeId"])(),e),u={class:"amount"},c={class:"title"},s=i(()=>Object(r["createElementVNode"])("img",{class:"amount-image",src:o.a},null,-1)),l={class:"amount"};function f(e,t,n,a,o,i){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",u,[Object(r["createElementVNode"])("div",c,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])("amount-block "+e.color)},[s,Object(r["createElementVNode"])("div",l,Object(r["toDisplayString"])(e.formattedAmount)+" USDT",1)],2)])}n("252a");var d=n("ed09"),p={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},v={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},g=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],m={CSS:{},springs:{}};function h(e,t,n){return Math.min(Math.max(e,t),n)}function y(e,t){return e.indexOf(t)>-1}function b(e,t){return e.apply(null,t)}var x={arr:function(e){return Array.isArray(e)},obj:function(e){return y(Object.prototype.toString.call(e),"Object")},pth:function(e){return x.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||x.svg(e)},str:function(e){return"string"===typeof e},fnc:function(e){return"function"===typeof e},und:function(e){return"undefined"===typeof e},nil:function(e){return x.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return x.hex(e)||x.rgb(e)||x.hsl(e)},key:function(e){return!p.hasOwnProperty(e)&&!v.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function O(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function w(e,t){var n=O(e),r=h(x.und(n[0])?1:n[0],.1,100),a=h(x.und(n[1])?100:n[1],.1,100),o=h(x.und(n[2])?10:n[2],.1,100),i=h(x.und(n[3])?0:n[3],.1,100),u=Math.sqrt(a/r),c=o/(2*Math.sqrt(a*r)),s=c<1?u*Math.sqrt(1-c*c):0,l=1,f=c<1?(c*u-i)/s:-i+u;function d(e){var n=t?t*e/1e3:e;return n=c<1?Math.exp(-n*c*u)*(l*Math.cos(s*n)+f*Math.sin(s*n)):(l+f*n)*Math.exp(-n*u),0===e||1===e?e:1-n}function p(){var t=m.springs[e];if(t)return t;var n=1/6,r=0,a=0;while(1)if(r+=n,1===d(r)){if(a++,a>=16)break}else a=0;var o=r*n*1e3;return m.springs[e]=o,o}return t?d:p}function M(e){return void 0===e&&(e=10),function(t){return Math.ceil(h(t,1e-6,1)*e)*(1/e)}}var C=function(){var e=11,t=1/(e-1);function n(e,t){return 1-3*t+3*e}function r(e,t){return 3*t-6*e}function a(e){return 3*e}function o(e,t,o){return((n(t,o)*e+r(t,o))*e+a(t))*e}function i(e,t,o){return 3*n(t,o)*e*e+2*r(t,o)*e+a(t)}function u(e,t,n,r,a){var i,u,c=0;do{u=t+(n-t)/2,i=o(u,r,a)-e,i>0?n=u:t=u}while(Math.abs(i)>1e-7&&++c<10);return u}function c(e,t,n,r){for(var a=0;a<4;++a){var u=i(t,n,r);if(0===u)return t;var c=o(t,n,r)-e;t-=c/u}return t}function s(n,r,a,s){if(0<=n&&n<=1&&0<=a&&a<=1){var l=new Float32Array(e);if(n!==r||a!==s)for(var f=0;f<e;++f)l[f]=o(f*t,n,a);return function(e){return n===r&&a===s||0===e||1===e?e:o(d(e),r,s)}}function d(r){for(var o=0,s=1,f=e-1;s!==f&&l[s]<=r;++s)o+=t;--s;var d=(r-l[s])/(l[s+1]-l[s]),p=o+d*t,v=i(p,n,a);return v>=.001?c(r,p,n,a):0===v?p:u(r,o,o+t,n,a)}}return s}(),k=function(){var e={linear:function(){return function(e){return e}}},t={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=h(e,1,10),r=h(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach((function(e,n){t[e]=function(){return function(e){return Math.pow(e,n+2)}}})),Object.keys(t).forEach((function(n){var r=t[n];e["easeIn"+n]=r,e["easeOut"+n]=function(e,t){return function(n){return 1-r(e,t)(1-n)}},e["easeInOut"+n]=function(e,t){return function(n){return n<.5?r(e,t)(2*n)/2:1-r(e,t)(-2*n+2)/2}},e["easeOutIn"+n]=function(e,t){return function(n){return n<.5?(1-r(e,t)(1-2*n))/2:(r(e,t)(2*n-1)+1)/2}}})),e}();function j(e,t){if(x.fnc(e))return e;var n=e.split("(")[0],r=k[n],a=O(e);switch(n){case"spring":return w(e,t);case"cubicBezier":return b(C,a);case"steps":return b(M,a);default:return b(r,a)}}function D(e){try{var t=document.querySelectorAll(e);return t}catch(n){return}}function S(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<n;o++)if(o in e){var i=e[o];t.call(r,i,o,e)&&a.push(i)}return a}function T(e){return e.reduce((function(e,t){return e.concat(x.arr(t)?T(t):t)}),[])}function E(e){return x.arr(e)?e:(x.str(e)&&(e=D(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function I(e,t){return e.some((function(e){return e===t}))}function N(e){var t={};for(var n in e)t[n]=e[n];return t}function A(e,t){var n=N(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function B(e,t){var n=N(e);for(var r in t)n[r]=x.und(e[r])?t[r]:e[r];return n}function P(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function F(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,(function(e,t,n,r){return t+t+n+n+r+r})),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),a=parseInt(r[1],16),o=parseInt(r[2],16),i=parseInt(r[3],16);return"rgba("+a+","+o+","+i+",1)"}function L(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,c=a[4]||1;function s(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==i)t=n=r=u;else{var l=u<.5?u*(1+i):u+i-u*i,f=2*u-l;t=s(f,l,o+1/3),n=s(f,l,o),r=s(f,l,o-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+c+")"}function V(e){return x.rgb(e)?P(e):x.hex(e)?F(e):x.hsl(e)?L(e):void 0}function H(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function q(e){return y(e,"translate")||"perspective"===e?"px":y(e,"rotate")||y(e,"skew")?"deg":void 0}function X(e,t){return x.fnc(e)?e(t.target,t.id,t.total):e}function U(e,t){return e.getAttribute(t)}function $(e,t,n){var r=H(t);if(I([n,"deg","rad","turn"],r))return t;var a=m.CSS[t+n];if(!x.und(a))return a;var o=100,i=document.createElement(e.tagName),u=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;u.appendChild(i),i.style.position="absolute",i.style.width=o+n;var c=o/i.offsetWidth;u.removeChild(i);var s=c*parseFloat(t);return m.CSS[t+n]=s,s}function z(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?$(e,a,n):a}}function _(e,t){return x.dom(e)&&!x.inp(e)&&(!x.nil(U(e,t))||x.svg(e)&&e[t])?"attribute":x.dom(e)&&I(g,t)?"transform":x.dom(e)&&"transform"!==t&&z(e,t)?"css":null!=e[t]?"object":void 0}function R(e){if(x.dom(e)){var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;while(t=r.exec(n))a.set(t[1],t[2]);return a}}function W(e,t,n,r){var a=y(t,"scale")?1:0+q(t),o=R(e).get(t)||a;return n&&(n.transforms.list.set(t,o),n.transforms["last"]=t),r?$(e,o,r):o}function G(e,t,n,r){switch(_(e,t)){case"transform":return W(e,t,r,n);case"css":return z(e,t,n);case"attribute":return U(e,t);default:return e[t]||0}}function Y(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=H(e)||0,a=parseFloat(t),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function Z(e,t){if(x.col(e))return V(e);if(/\s/g.test(e))return e;var n=H(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function Q(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function J(e){return 2*Math.PI*U(e,"r")}function K(e){return 2*U(e,"width")+2*U(e,"height")}function ee(e){return Q({x:U(e,"x1"),y:U(e,"y1")},{x:U(e,"x2"),y:U(e,"y2")})}function te(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var o=n.getItem(a);a>0&&(r+=Q(t,o)),t=o}return r}function ne(e){var t=e.points;return te(e)+Q(t.getItem(t.numberOfItems-1),t.getItem(0))}function re(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return J(e);case"rect":return K(e);case"line":return ee(e);case"polyline":return te(e);case"polygon":return ne(e)}}function ae(e){var t=re(e);return e.setAttribute("stroke-dasharray",t),t}function oe(e){var t=e.parentNode;while(x.svg(t)){if(!x.svg(t.parentNode))break;t=t.parentNode}return t}function ie(e,t){var n=t||{},r=n.el||oe(e),a=r.getBoundingClientRect(),o=U(r,"viewBox"),i=a.width,u=a.height,c=n.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:r,viewBox:c,x:c[0]/1,y:c[1]/1,w:i,h:u,vW:c[2],vH:c[3]}}function ue(e,t){var n=x.str(e)?D(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:ie(n),totalLength:re(n)*(r/100)}}}function ce(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=ie(e.el,e.svg),o=r(),i=r(-1),u=r(1),c=n?1:a.w/a.vW,s=n?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(u.y-i.y,u.x-i.x)/Math.PI}}function se(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=Z(x.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:x.str(e)||t?r.split(n):[]}}function le(e){var t=e?T(x.arr(e)?e.map(E):E(e)):[];return S(t,(function(e,t,n){return n.indexOf(e)===t}))}function fe(e){var t=le(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:R(e)}}}))}function de(e,t){var n=N(t);if(/^spring/.test(n.easing)&&(n.duration=w(n.easing)),x.arr(e)){var r=e.length,a=2===r&&!x.obj(e[0]);a?e={value:e}:x.fnc(t.duration)||(n.duration=t.duration/r)}var o=x.arr(e)?e:[e];return o.map((function(e,n){var r=x.obj(e)&&!x.pth(e)?e:{value:e};return x.und(r.delay)&&(r.delay=n?0:t.delay),x.und(r.endDelay)&&(r.endDelay=n===o.length-1?t.endDelay:0),r})).map((function(e){return B(e,n)}))}function pe(e){for(var t=S(T(e.map((function(e){return Object.keys(e)}))),(function(e){return x.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)x.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}function ve(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=B(pe(r),t)),t)x.key(a)&&n.push({name:a,tweens:de(t[a],e)});return n}function ge(e,t){var n={};for(var r in e){var a=X(e[r],t);x.arr(a)&&(a=a.map((function(e){return X(e,t)})),1===a.length&&(a=a[0])),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function me(e,t){var n;return e.tweens.map((function(r){var a=ge(r,t),o=a.value,i=x.arr(o)?o[1]:o,u=H(i),c=G(t.target,e.name,u,t),s=n?n.to.original:c,l=x.arr(o)?o[0]:s,f=H(l)||H(c),d=u||f;return x.und(i)&&(i=s),a.from=se(l,d),a.to=se(Y(i,l),d),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=j(a.easing,a.duration),a.isPath=x.pth(o),a.isPathTargetInsideSVG=a.isPath&&x.svg(t.target),a.isColor=x.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var he={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var o="";r.list.forEach((function(e,t){o+=t+"("+e+") "})),e.style.transform=o}}};function ye(e,t){var n=fe(e);n.forEach((function(e){for(var n in t){var r=X(t[n],e),a=e.target,o=H(r),i=G(a,n,o,e),u=o||H(i),c=Y(Z(r,u),i),s=_(a,n);he[s](a,n,c,e.transforms,!0)}}))}function be(e,t){var n=_(e.target,t.name);if(n){var r=me(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}function xe(e,t){return S(T(e.map((function(e){return t.map((function(t){return be(e,t)}))}))),(function(e){return!x.und(e)}))}function Oe(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var we=0;function Me(e){var t=A(p,e),n=A(v,e),r=ve(n,e),a=fe(e.targets),o=xe(a,r),i=Oe(o,n),u=we;return we++,B(t,{id:u,children:[],animatables:a,animations:o,duration:i.duration,delay:i.delay,endDelay:i.endDelay})}var Ce=[],ke=function(){var e;function t(){e||je()&&De.suspendWhenDocumentHidden||!(Ce.length>0)||(e=requestAnimationFrame(n))}function n(t){var r=Ce.length,a=0;while(a<r){var o=Ce[a];o.paused?(Ce.splice(a,1),r--):(o.tick(t),a++)}e=a>0?requestAnimationFrame(n):void 0}function r(){De.suspendWhenDocumentHidden&&(je()?e=cancelAnimationFrame(e):(Ce.forEach((function(e){return e._onDocumentVisibility()})),ke()))}return"undefined"!==typeof document&&document.addEventListener("visibilitychange",r),t}();function je(){return!!document&&document.hidden}function De(e){void 0===e&&(e={});var t,n=0,r=0,a=0,o=0,i=null;function u(e){var t=window.Promise&&new Promise((function(e){return i=e}));return e.finished=t,t}var c=Me(e);u(c);function s(){var e=c.direction;"alternate"!==e&&(c.direction="normal"!==e?"normal":"reverse"),c.reversed=!c.reversed,t.forEach((function(e){return e.reversed=c.reversed}))}function l(e){return c.reversed?c.duration-e:e}function f(){n=0,r=l(c.currentTime)*(1/De.speed)}function d(e,t){t&&t.seek(e-t.timelineOffset)}function p(e){if(c.reversePlayback)for(var n=o;n--;)d(e,t[n]);else for(var r=0;r<o;r++)d(e,t[r])}function v(e){var t=0,n=c.animations,r=n.length;while(t<r){var a=n[t],o=a.animatable,i=a.tweens,u=i.length-1,s=i[u];u&&(s=S(i,(function(t){return e<t.end}))[0]||s);for(var l=h(e-s.start-s.delay,0,s.duration)/s.duration,f=isNaN(l)?1:s.easing(l),d=s.to.strings,p=s.round,v=[],g=s.to.numbers.length,m=void 0,y=0;y<g;y++){var b=void 0,x=s.to.numbers[y],O=s.from.numbers[y]||0;b=s.isPath?ce(s.value,f*x,s.isPathTargetInsideSVG):O+f*(x-O),p&&(s.isColor&&y>2||(b=Math.round(b*p)/p)),v.push(b)}var w=d.length;if(w){m=d[0];for(var M=0;M<w;M++){d[M];var C=d[M+1],k=v[M];isNaN(k)||(m+=C?k+C:k+" ")}}else m=v[0];he[a.type](o.target,a.property,m,o.transforms),a.currentValue=m,t++}}function g(e){c[e]&&!c.passThrough&&c[e](c)}function m(){c.remaining&&!0!==c.remaining&&c.remaining--}function y(e){var o=c.duration,f=c.delay,d=o-c.endDelay,y=l(e);c.progress=h(y/o*100,0,100),c.reversePlayback=y<c.currentTime,t&&p(y),!c.began&&c.currentTime>0&&(c.began=!0,g("begin")),!c.loopBegan&&c.currentTime>0&&(c.loopBegan=!0,g("loopBegin")),y<=f&&0!==c.currentTime&&v(0),(y>=d&&c.currentTime!==o||!o)&&v(o),y>f&&y<d?(c.changeBegan||(c.changeBegan=!0,c.changeCompleted=!1,g("changeBegin")),g("change"),v(y)):c.changeBegan&&(c.changeCompleted=!0,c.changeBegan=!1,g("changeComplete")),c.currentTime=h(y,0,o),c.began&&g("update"),e>=o&&(r=0,m(),c.remaining?(n=a,g("loopComplete"),c.loopBegan=!1,"alternate"===c.direction&&s()):(c.paused=!0,c.completed||(c.completed=!0,g("loopComplete"),g("complete"),!c.passThrough&&"Promise"in window&&(i(),u(c)))))}return c.reset=function(){var e=c.direction;c.passThrough=!1,c.currentTime=0,c.progress=0,c.paused=!0,c.began=!1,c.loopBegan=!1,c.changeBegan=!1,c.completed=!1,c.changeCompleted=!1,c.reversePlayback=!1,c.reversed="reverse"===e,c.remaining=c.loop,t=c.children,o=t.length;for(var n=o;n--;)c.children[n].reset();(c.reversed&&!0!==c.loop||"alternate"===e&&1===c.loop)&&c.remaining++,v(c.reversed?c.duration:0)},c._onDocumentVisibility=f,c.set=function(e,t){return ye(e,t),c},c.tick=function(e){a=e,n||(n=a),y((a+(r-n))*De.speed)},c.seek=function(e){y(l(e))},c.pause=function(){c.paused=!0,f()},c.play=function(){c.paused&&(c.completed&&c.reset(),c.paused=!1,Ce.push(c),f(),ke())},c.reverse=function(){s(),c.completed=!c.reversed,f()},c.restart=function(){c.reset(),c.play()},c.remove=function(e){var t=le(e);Te(t,c)},c.reset(),c.autoplay&&c.play(),c}function Se(e,t){for(var n=t.length;n--;)I(e,t[n].animatable.target)&&t.splice(n,1)}function Te(e,t){var n=t.animations,r=t.children;Se(e,n);for(var a=r.length;a--;){var o=r[a],i=o.animations;Se(e,i),i.length||o.children.length||r.splice(a,1)}n.length||r.length||t.pause()}function Ee(e){for(var t=le(e),n=Ce.length;n--;){var r=Ce[n];Te(t,r)}}function Ie(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?j(t.easing):null,a=t.grid,o=t.axis,i=t.from||0,u="first"===i,c="center"===i,s="last"===i,l=x.arr(e),f=l?parseFloat(e[0]):parseFloat(e),d=l?parseFloat(e[1]):0,p=H(l?e[1]:e)||0,v=t.start||0+(l?f:0),g=[],m=0;return function(e,t,h){if(u&&(i=0),c&&(i=(h-1)/2),s&&(i=h-1),!g.length){for(var y=0;y<h;y++){if(a){var b=c?(a[0]-1)/2:i%a[0],x=c?(a[1]-1)/2:Math.floor(i/a[0]),O=y%a[0],w=Math.floor(y/a[0]),M=b-O,C=x-w,k=Math.sqrt(M*M+C*C);"x"===o&&(k=-M),"y"===o&&(k=-C),g.push(k)}else g.push(Math.abs(i-y));m=Math.max.apply(Math,g)}r&&(g=g.map((function(e){return r(e/m)*m}))),"reverse"===n&&(g=g.map((function(e){return o?e<0?-1*e:-e:Math.abs(m-e)})))}var j=l?(d-f)/m:f;return v+j*(Math.round(100*g[t])/100)+p}}function Ne(e){void 0===e&&(e={});var t=De(e);return t.duration=0,t.add=function(n,r){var a=Ce.indexOf(t),o=t.children;function i(e){e.passThrough=!0}a>-1&&Ce.splice(a,1);for(var u=0;u<o.length;u++)i(o[u]);var c=B(n,A(v,e));c.targets=c.targets||e.targets;var s=t.duration;c.autoplay=!1,c.direction=t.direction,c.timelineOffset=x.und(r)?s:Y(r,s),i(t),t.seek(c.timelineOffset);var l=De(c);i(l),o.push(l);var f=Oe(o,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}De.version="3.2.1",De.speed=1,De.suspendWhenDocumentHidden=!0,De.running=Ce,De.remove=Ee,De.get=G,De.set=ye,De.convertPx=$,De.path=ue,De.setDashoffset=ae,De.stagger=Ie,De.timeline=Ne,De.easing=j,De.penner=k,De.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var Ae=De,Be=(n("fa7d"),Object(d["a"])({props:{amount:{type:Number,required:!0},title:{type:String,required:!0},color:{type:String,required:!0},type:{type:String,default:null}},watch:{amount(e,t){e!==t&&this.$nextTick(()=>{"income"===(null===this||void 0===this?void 0:this.type)?this.index>0?(this.count=t,this.setCount(e)):(this.index=1,this.count=e):this.count=e})}},data:()=>({count:0,index:0}),methods:{setCount(e){const t={n:this.count};Ae({targets:t,n:e,round:1,duration:3e3,easing:"linear",update:()=>{this.count=t.n}})}},computed:{formattedAmount(){return(this.count/1e6).toFixed(6)}},mounted(){"income"!==this.type&&(this.count=this.amount)}})),Pe=(n("14f8"),n("d959")),Fe=n.n(Pe);const Le=Fe()(Be,[["render",f],["__scopeId","data-v-658e9007"]]);t["a"]=Le},dd6d:function(e,t,n){e.exports=n.p+"img/UNI.da51f3ab.svg"},dfce:function(e,t,n){var r={"./ADA.svg":"e217","./AXS.svg":"b75c","./BTC.svg":"9077","./DAI.svg":"3770","./DASH.svg":"556f","./DOGE.svg":"801e","./ETC.svg":"1aa6","./ETH.svg":"17e0","./LTC.svg":"64cc","./LUNA2.svg":"f7fa","./MATIC.svg":"024c","./SHIB.svg":"ff25","./SOL.svg":"644b","./TRX.svg":"a637","./UNI.svg":"dd6d","./USDC.svg":"5520","./USDT.svg":"50c7","./XMR.svg":"5738","./XRP.svg":"a645"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="dfce"},e217:function(e,t,n){e.exports=n.p+"img/ADA.6aea691c.svg"},f39b:function(e,t,n){"use strict";n("7100")},f7fa:function(e,t,n){e.exports=n.p+"img/LUNA2.3baaccd8.svg"},ff25:function(e,t,n){e.exports=n.p+"img/SHIB.e53ff3a9.svg"}}]);
//# sourceMappingURL=chunk-0f3fa356.fd36871c.js.map