(function(e){function t(t){for(var a,u,c=t[0],i=t[1],l=t[2],f=0,d=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);s&&s(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ac00c":"a7f79ad7","chunk-2d20f387":"f2a0ac6b","chunk-31e557d3":"38aa0a85","chunk-92054012":"98f3509b"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var l=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[e]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://shuoshubao.github.io/form-demo/dist/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"07bb":function(e,t,n){},"8b10":function(e,t,n){},b0a0:function(e,t,n){"use strict";var a=n("07bb"),r=n.n(a);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("0758"),o=n.n(r),u=n("b805"),c=n.n(u),i=n("8c4f"),l=(n("eef7"),function(){return n.e("chunk-92054012").then(n.bind(null,"2941"))}),f=function(){return n.e("chunk-31e557d3").then(n.bind(null,"e8a6"))},s=function(){return n.e("chunk-2d20f387").then(n.bind(null,"b366"))},d=function(){return n.e("chunk-2d0ac00c").then(n.bind(null,"184c"))},m=new i["a"]({routes:[{name:"index",path:"*",component:l},{name:"form",path:"/form",component:l},{name:"form-table",path:"/form-table",component:f},{name:"composite",path:"/composite",component:s},{name:"readme",path:"/readme",component:d}]}),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mtd-container",{staticClass:"container"},[n("mtd-header",{staticClass:"container-header"},[n("span",{staticClass:"container-header-logo"},[n("img",{attrs:{src:"https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png",alt:""}})]),n("span",[e._v("form最佳实践")])]),n("mtd-container",[n("mtd-aside",{staticClass:"container-aside",attrs:{width:"200px"}},[n("mtd-menu",{on:{select:e.handleSelectMenu},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.menuData,(function(t,a){return n("mtd-menu-item",{key:a,attrs:{name:t.value}},[e._v(e._s(t.label))])})),1)],1),n("mtd-main",{staticClass:"container-main"},[n("div",{staticClass:"container-view"},[n("router-view")],1)])],1)],1)},b=[],h=(n("6b54"),n("2397"),n("7f7f"),n("d225")),v=n("b0b4"),y=n("4e2b"),g=n("308d"),j=n("6bb5"),O=n("9ab4"),w=n("60a3"),k=n("2ef0"),_=n("30f7");function x(e){var t=C();return function(){var n,a=Object(j["a"])(e);if(t){var r=Object(j["a"])(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(g["a"])(this,n)}}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var P=function(e){Object(y["a"])(n,e);var t=x(n);function n(){var e;return Object(h["a"])(this,n),e=t.apply(this,arguments),e.activeName="1",e.menuData=[{value:"1",label:"基础表单",name:"form"},{value:"2",label:"表格+表单",name:"form-table"},{value:"3",label:"多表单",name:"composite"},{value:"4",label:"念念碎",name:"readme"}],e}return Object(v["a"])(n,[{key:"onRouteChange",value:function(e){var t=e.name;this.activeName=Object(_["getValueInCollection"])(t,this.menuData,{key:"name",valueKey:"value"})}},{key:"handleSelectMenu",value:function(e){var t=Object(k["find"])(this.menuData,{value:e.name});this.$router.push({name:t.name})}}]),n}(w["c"]);O["a"]([Object(w["d"])("$route",{deep:!0,immediate:!0})],P.prototype,"onRouteChange",null),P=O["a"]([w["a"]],P);var S=P,R=S,D=(n("fbd0"),n("b0a0"),n("2877")),M=Object(D["a"])(R,p,b,!1,null,"153c971f",null),N=M.exports;a["default"].use(o.a),a["default"].use(c.a),a["default"].use(i["a"]);t["default"]=new a["default"]({router:m,render:function(e){return e(N)}}).$mount("#app_root_vue")},fbd0:function(e,t,n){"use strict";var a=n("8b10"),r=n.n(a);r.a}});
//# sourceMappingURL=app.76575773.js.map