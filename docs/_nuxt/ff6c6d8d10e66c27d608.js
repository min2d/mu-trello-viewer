(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,t,r){"use strict";r.r(t);r(42),r(23),r(18),r(14),r(32);var n=r(22),c=r(39);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(source,!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(source).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={computed:l({},Object(c.c)("members",["membersArr"])),methods:l({},Object(c.d)("members",["setMemberDisplayName","clearMembers"]))},d=r(21),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("div",[r("b-icon",{attrs:{icon:"alert"}}),e._v("Name is the name fetched when board set.\n    ")],1),e._v(" "),r("button",{staticClass:"button is-warning",on:{click:e.clearMembers}},[e._v("\n      clear all\n    ")]),e._v(" "),r("b-table",{attrs:{data:e.membersArr},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-table-column",{attrs:{label:"ID"}},[e._v("\n          "+e._s(t.row.id)+"\n        ")]),e._v(" "),r("b-table-column",{attrs:{label:"Name"}},[e._v("\n          "+e._s(t.row.name)+"\n        ")]),e._v(" "),r("b-table-column",{attrs:{label:"Display name"}},[r("b-input",{attrs:{value:t.row.displayName},on:{input:function(r){return e.setMemberDisplayName({id:t.row.id,dName:r})}}})],1)]}}])})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);