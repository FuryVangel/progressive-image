!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var i in t)("object"==typeof exports?exports:e)[i]=t[i]}}(this,function(){return function(e){function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=23)}({23:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Array.prototype.remove=function(e){if(this.length){var n=this.indexOf(e);return n>-1?this.splice(n,1):void 0}};var t="2"==e.version.split(".")[0],i=["scroll","wheel","mousewheel","resize","touchmove"],o={getAnimationEvent:function(){var e=document.createElement("fake"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(var t in n)if(void 0!==e.style[t])return n[t]},throttle:function(e,n){var t=null,i=0;return function(){if(!t){var o=Date.now()-i,r=this,a=arguments,s=function(){i=Date.now(),t=!1,e.apply(r,a)};o>=n?s():t=setTimeout(s,n)}}},on:function(e,n,t){e.addEventListener(n,t)},off:function(e,n,t){e.removeEventListener(n,t)}},r=function(e,n){n?i.forEach(function(n){o.on(e,n,f)}):i.forEach(function(n){o.off(e,n,f)})},a=o.getAnimationEvent(),s=[],c=[],u={removePreview:n.removePreview||!1,scale:n.scale||!1,hasBind:!1},f=o.throttle(function(e){for(var n=0,t=s.length;n<t;n++)l(s[n])},300),l=function(e){if(c.indexOf(e.src)>-1)return p(e.el,e.src,"loaded");var n=e.el.getBoundingClientRect();n.top<window.innerHeight&&n.bottom>0&&n.left<window.innerWidth&&n.right>0&&h(e)},d=function(n){var t=!1;return s.forEach(function(e){e.el==n&&(t=!0)}),t&&e.nextTick(function(){f()}),t},v=function(n,t,i){if(!d(n)){var o=t.value;if(c.indexOf(o)>-1)return p(n,o,"loaded");e.nextTick(function(e){d(n)||s.push({el:n,src:o}),f(),s.length>0&&!u.hasBind&&(u.hasBind=!0,r(window,!0))})}},p=function(e,n,t){e.setAttribute("lazy",t)},h=function(e){var n=new Image;e.el.dataset&&(e.el.dataset.srcset&&(n.srcset=e.el.dataset.srcset),e.el.dataset.sizes&&(n.sizes=e.el.dataset.sizes)),n.src=e.src,n.className="origin",u.scale&&(n.className="origin-scale"),n.onload=function(t){s.remove(e),c.push(e.src),m(e,n)},n.onerror=function(e){}},m=function(e,n){var t=e.el,i=t.parentNode;i.appendChild(n).addEventListener(a,function(e){t.alt&&(e.target.alt=t.alt),t.classList.add("hide"),u.removePreview&&(i.removeChild(t),e.target.classList.remove("origin"),e.target.classList.remove("origin-scale"))})},g=function(e,n,t,i){e&&u.hasBind&&(u.hasBind=!1,r(window,!1),s.length=c.length=0)};t?e.directive("progressive",{bind:v,update:v,inserted:v,comppnentUpdated:f,unbind:g}):e.directive("progressive",{bind:f,update:function(e,n){v(this.el,{modifiers:this.modifiers,arg:this.arg,value:e,oldValue:n})},unbind:function(){g(this.el)}})}}})});