webpackJsonp([34],{146:function(t,e,n){var a=n(9)(n(521),n(550),null,null,null);t.exports=a.exports},521:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(75);e.default={props:{dataList:Array,pageInfo:Object},data:function(){return{loading:!1,multipleSelection:[]}},methods:{handleSelectionChange:function(t){this.multipleSelection=t},editContentTag:function(t,e){var n=e[t];this.$store.dispatch("showContentTagForm",{edit:!0,formData:n})},deleteContentTag:function(t,e){var n=this;this.$confirm("此操作将永久删除该标签, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return a.a.deleteContentTag({ids:e[t]._id})}).then(function(t){"success"===t.data.state?(n.$store.dispatch("getContentTagList",n.pageInfo),n.$message({message:"删除成功",type:"success"})):n.$message.error(t.data.message)}).catch(function(){n.$message({type:"info",message:"已取消删除"})})}}}},550:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{align:"center",data:t.dataList,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"名称",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"comments",label:"备注"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary",plain:"",round:""},on:{click:function(n){t.editContentTag(e.$index,t.dataList)}}},[n("i",{staticClass:"fa fa-edit"})]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger",plain:"",round:"",icon:"el-icon-delete"},on:{click:function(n){t.deleteContentTag(e.$index,t.dataList)}}})]}}])})],1)],1)},staticRenderFns:[]}}});