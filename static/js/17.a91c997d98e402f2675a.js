webpackJsonp([17],{"2F3V":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),i=n.n(a),r=n("exGp"),s=n.n(r),c={data:function(){return{nick_name:JSON.parse(localStorage.getItem("userInfo")).data.nick_name,timer:null}},components:{},mounted:function(){this.$refs.inputVal.focus()},beforeDestroy:function(){clearTimeout(this.timer)},methods:{saveName:function(){var e=this;return s()(i.a.mark(function t(){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("setNickname",{nick_name:e.nick_name}),e.Indicator.open({text:"处理中...",spinnerType:"fading-circle"}),t.next=4,e.$request("post","user/updatenikename",{uid:JSON.parse(localStorage.getItem("userInfo")).data.uid,nick_name:e.nick_name});case 4:n=t.sent,console.log(n),n&&"0"===n.error_no?(e.$store.commit("setUserInfo",n.data),e.Indicator.close(),e.Toast("修改成功"),e.$router.back()):e.Indicator.close();case 7:case"end":return t.stop()}},t,e)}))()},clearFn:function(){this.nick_name=""}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"cont"},[a("div",{staticClass:"wrap align-center space-between"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nick_name,expression:"nick_name"}],ref:"inputVal",staticClass:"modify-name",attrs:{type:"text",placeholder:"请输入2-16个字符的昵称"},domProps:{value:e.nick_name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveName.apply(null,arguments)},input:function(t){t.target.composing||(e.nick_name=t.target.value)}}}),e._v(" "),a("div",{staticClass:"clear align-center"},[a("img",{attrs:{src:n("KOsl"),alt:""},on:{click:e.clearFn}})])])])])},staticRenderFns:[]};var u=n("VU/8")(c,o,!1,function(e){n("JWBR")},"data-v-94ba5c00",null);t.default=u.exports},JWBR:function(e,t){},KOsl:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAChElEQVRYR8WXPYjUQBTH/28TdwvFTrjGRq4TsdMrxfZAsVJ7zaiBxUpFxUL8OitZiO7kttfuOOFasdyzk0MrsblGtBMPzG6SJxOSI5vNZGfXHEmbee//m/c1MwTDz/O8I5ZlrRLReQCnAZwAcDQ1/w3gO4DPzPwhiqIt13X/mLimWYs8z1u2bfsugKsADs9an/7fA/A2DMM113W/VdloAXq9XqfT6TwmotvM3DYUnlhGRCNmfhUEwaNutxuU+SgF8DxvybKsDSJaWUS4aMPMwyiKLrmu+6P4bwpASnkKwBaA43WI53zsAlgVQuzk/U4AqJ3btv3pAMQzzd0wDM/kI7EPoHLebrc/1hV2XfRUOkaj0bmsJvYBpJRrAO7UHHadu5dCCNVZSADSVvsK4FCJxQ4RPYzjeIWI7mU2FaAM4DkRbTPzEwCqpqa6Yzwen1QtmgBIKdcBXCttE6KLjuO8T9fdVLwVEExEtxzH6av1vu9fYOZNDexACHGd1ISzbVu1h27IPBNCPMicSCl1EBPiKfBTAPc1AHthGC5Rv9+/TETvqkKa35UmEirsrhDiTebH9/0bzPy6KmXMfIWklBKAM6P4ynaXRUKZzi2e6vkKYAjgrEH16yAw785zWtsK4CeAYwYAaskURN7OJOwFnV8K4C+AjiGAFmIBceUrWAigmHPDFi3bYwIwVwrKxA1aVBfgJAXGRVgUT2fCRBFWzIkyiKQI/7sNi3NijnrwaxtEi0Akg6jOUVySotmjuO7DKA9hdBgpgMFgsBzH8RfN5XPu45iZX7RaraHxcZxGobkLiQJo/EqmIBq9lOamWXPX8gyi0YdJBtHo0yw/tBt7nBZPjoN6nv8DGyW84hjQ1wwAAAAASUVORK5CYII="}});
//# sourceMappingURL=17.a91c997d98e402f2675a.js.map