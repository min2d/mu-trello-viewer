(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{199:function(t,e,r){var content=r(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("051ecee6",content,!0,{sourceMap:!1})},201:function(t,e,r){"use strict";var n=r(199);r.n(n).a},202:function(t,e,r){(e=r(71)(!1)).push([t.i,".b-tabs[data-v-0c559566] .tab-content{padding:0}.b-tabs[data-v-0c559566] th{height:0;padding:0}.b-tabs[data-v-0c559566] td{font-size:.9em}.b-tabs[data-v-0c559566] td.description{font-size:75%}.alt-label[data-v-0c559566]{font-weight:700;padding:0 .3em;border-radius:.2em}",""]),t.exports=e},205:function(t,e,r){"use strict";r.r(e);r(37),r(20),r(21),r(11),r(29);var n=r(16),l=r(45);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={layout:"wide",components:{},computed:o(o(o(o({},Object(l.c)("lists",["lists"])),Object(l.e)("members",["members"])),Object(l.e)("labels",["labels"])),Object(l.e)("settings",["labelColorStyles"])),created:function(){this.fetchLists()},methods:o({},Object(l.b)("lists",["fetchLists"]))},f=(r(201),r(24)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-tabs",t._l(t.lists,(function(e){return r("b-tab-item",{key:e.id,attrs:{label:e.name}},[r("template",{slot:"header"},[r("span",[t._v(" "+t._s(e.name)+" "),r("b-tag",{attrs:{rounded:""}},[t._v(" "+t._s(e.cards.length)+" ")])],1)]),t._v(" "),r("b-table",{attrs:{data:e.cards,bordered:!0},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-table-column",{attrs:{label:"members",width:"150"}},t._l(e.row.members,(function(e){return r("span",{key:e.id,staticStyle:{"padding-right":".3em"}},[t._v(t._s(e.displayName))])})),0),t._v(" "),r("b-table-column",{attrs:{label:"Label"}},t._l(e.row.labels,(function(label){return r("span",{key:label.id,staticClass:"alt-label",style:t.labelColorStyles[label.color]},[t._v(t._s(label.name))])})),0),t._v(" "),r("b-table-column",{attrs:{label:"Name"}},[t._v("\n          "+t._s(e.row.name)+"\n        ")]),t._v(" "),r("b-table-column",{staticClass:"description",attrs:{label:"description"}},[r("b-collapse",{attrs:{open:!1,"aria-id":"clps"+e.row.id}},[e.row.desc?r("a",{attrs:{slot:"trigger","aria-controls":"clps"+e.row.id},slot:"trigger"},[t._v("\n              "+t._s(e.row.desc.substring(0,50))+"\n            ")]):t._e(),t._v(" "),r("div",{staticClass:"notification"},[r("div",{staticClass:"content"},[t._v("\n                "+t._s(e.row.desc)+"\n              ")])])])],1)]}}],null,!0)},[t._v(" "),r("template",{slot:"empty"},[r("section",{staticClass:"section"},[r("div",{staticClass:"content has-text-grey has-text-centered"},[r("p",[t._v("No Data")])])])]),t._v(" "),r("template",{slot:"header"},[r("div",{staticStyle:{height:"0px"}})])],2)],2)})),1)}),[],!1,null,"0c559566",null);e.default=component.exports}}]);