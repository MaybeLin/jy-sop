webpackJsonp([0],{"9g3a":function(t,e){},a8Sk:function(t,e,a){"use strict";var o={name:"page-title",props:{bg:{type:String,default:"#4caee5"},color:{type:String,default:"#ffffff"},showLoad:{type:Boolean,default:!1},showExport:{type:Boolean,default:!1}},methods:{exportTabel:function(){this.$emit("export-tabel")},reload:function(){this.$emit("reload-table")}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-title flex just-center",style:{background:this.bg,color:this.color}},[t._t("default"),t._v(" "),t.showExport||t.showLoad?a("div",{staticClass:"flex extend"},[t.showExport?a("span",{staticClass:"shoushi export",on:{click:t.exportTabel}},[a("i",{staticClass:"el-icon-download"}),t._v("导出")]):t._e(),t._v(" "),t.showLoad?a("span",{staticClass:"shoushi load",on:{click:t.reload}},[a("i",{staticClass:"el-icon-refresh"}),t._v("刷新")]):t._e()]):t._e()],2)},staticRenderFns:[]};var l=a("Z0/y")(o,s,!1,function(t){a("9g3a")},"data-v-141c2cad",null);e.a=l.exports}});
//# sourceMappingURL=0.77c717eeacca3e35c4ec.js.map