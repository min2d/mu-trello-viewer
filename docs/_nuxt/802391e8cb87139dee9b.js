(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{194:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("ebfd5afc",content,!0,{sourceMap:!1})},197:function(t,e,n){"use strict";var r=n(194);n.n(r).a},198:function(t,e,n){(t.exports=n(64)(!1)).push([t.i,".alt-label[data-v-911a07fa]{font-weight:700;font-size:90%;padding:0 .3em;border-radius:.2em}",""])},201:function(t,e,n){"use strict";n.r(e);n(42),n(23),n(18),n(14),n(32);var r=n(22),o=n(39);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={computed:l({},Object(o.c)("lists",["listsByMembers"]),{},Object(o.e)("settings",["labelColorStyles"])),created:function(){this.fetchLists()},methods:l({},Object(o.b)("lists",["fetchLists"]))},d=(n(197),n(21)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.listsByMembers,(function(e){return n("div",{key:e.id,staticStyle:{display:"flex","margin-bottom":"3em"}},[n("div",{staticStyle:{width:"50px","flex-shrink":"0","font-weight":"bold"}},[t._v("\n      "+t._s(e.displayName)+"\n    ")]),t._v(" "),t._l(e.lists,(function(e){return n("div",{key:e.id,staticStyle:{padding:"0 .5em"}},[n("div",{staticClass:"title is-5"},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),t._l(e.cards,(function(e){return n("div",{key:e.id,staticStyle:{width:"300px",padding:".3em","background-color":"#fff",margin:".3em 0"}},[t._l(e.labels,(function(label){return n("span",{key:label.id,staticClass:"alt-label",style:t.labelColorStyles[label.color]},[t._v("\n          "+t._s(label.name)+"\n        ")])})),t._v(" "),n("div",[t._v("\n          "+t._s(e.name)+"\n        ")])],2)}))],2)}))],2)})),0)}),[],!1,null,"911a07fa",null);e.default=component.exports}}]);