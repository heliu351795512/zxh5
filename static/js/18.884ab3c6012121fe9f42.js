webpackJsonp([18],{"4fFD":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Xxa5"),i=s.n(a),n=s("exGp"),r=s.n(n),c={data:function(){return{page_size:1,page_num:1,is_last_page:!1,loading:!1,dataList:[]}},components:{},created:function(){this.getList(this.page_num)},methods:{getList:function(t){var e=this;return r()(i.a.mark(function s(){var a;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.$request("get","user/getinvitepagelist",{page_num:t,page_size:e.page_size,uid:JSON.parse(localStorage.getItem("userInfo")).data.uid});case 2:(a=s.sent)&&"0"===a.error_no&&(1===e.page_num?e.dataList=a.data.list:e.dataList=e.dataList.concat(a.data.list),e.is_last_page=a.data.is_last_page,e.loading=!1);case 4:case"end":return s.stop()}},s,e)}))()},loadMore:function(){this.is_last_page||(this.loading=!0,this.page_num+=1,this.getList(this.page_num))}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[t._m(0),t._v(" "),s("div",{staticClass:"main"},[s("div",{staticClass:"bgbottom justify-center"},[s("div",{staticClass:"bgtop"},[s("div",{staticClass:"sort-wrap"},[t._m(1),t._v(" "),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"sort-box",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"20"}},t._l(t.dataList,function(e,a){return s("div",{key:a,staticClass:"sorti"},[s("div",{staticClass:"sort-name sort-text align-center"},[t._v("\n                "+t._s(e.fund_account)+"\n              ")]),t._v(" "),s("div",{staticClass:"invite-count sort-text align-center"},[t._v("\n                "+t._s(e.create_time)+"\n              ")])])}),0)])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg"},[e("img",{attrs:{src:s("ThUd"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sort-title"},[e("div",{staticClass:"sort-name sort-text align-center"},[this._v("用户")]),this._v(" "),e("div",{staticClass:"invite-count sort-text align-center"},[this._v("唤友数")])])}]};var l=s("VU/8")(c,o,!1,function(t){s("MO8p")},"data-v-91e52c6e",null);e.default=l.exports},MO8p:function(t,e){},ThUd:function(t,e,s){t.exports=s.p+"static/img/bg@2x.6816439.png"}});
//# sourceMappingURL=18.884ab3c6012121fe9f42.js.map