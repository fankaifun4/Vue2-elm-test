webpackJsonp([0],{"/nOi":function(n,e,t){var i=t("cR4Y");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("8bSs")("0a64d039",i,!0)},"6k3U":function(n,e,t){var i=t("xzRt");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("8bSs")("b26d6f2a",i,!0)},DiCr:function(n,e,t){"use strict";function i(n){t("6k3U")}Object.defineProperty(e,"__esModule",{value:!0});var a=t("4YfN"),o=t.n(a),s=t("9rMa"),A={name:"vhome",data:function(){return{routerLinks:[{name:"图灵机器人",path:"/vx/robby",icon:t("lbSh"),describe:"一个有趣的智障机器人",time:"17:08",routeName:"asend",id:"tuling"}]}},mounted:function(){this.store.dispatch("setUser","fankx")},computed:o()({},Object(s.c)(["userId","msgLog","userIcon"]),Object(s.b)(["setUser","toMsgLog"]),{store:function(){return this.$store}}),components:{},methods:{goPath:function(n){this.$router.push({name:n.routeName,query:o()({},n,{userIcon:"/static/imgs/user_fankx.jpg"})})}}},r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"home-container"},n._l(n.routerLinks,function(e,i){return t("div",{key:i,staticClass:"links",on:{click:function(t){n.goPath(e)}}},[t("img",{attrs:{src:e.icon,alt:""}}),n._v(" "),t("div",{staticClass:"link-content"},[t("div",{staticClass:"item-name"},[n._v(n._s(e.name))]),n._v(" "),t("div",{staticClass:"item-describe"},[n._v(n._s(e.describe))])]),n._v(" "),t("time",{staticClass:"time"},[n._v(n._s(e.time))])])}))},d=[],l={render:r,staticRenderFns:d},c=l,B=t("/Xao"),f=i,p=B(A,c,!1,f,"data-v-9a2bd7c0",null),m=p.exports,C={name:"mainHome",data:function(){return{}},components:{home:m}},b=function(){var n=this,e=n.$createElement;return(n._self._c||e)("home")},x=[],v={render:b,staticRenderFns:x},u=v,g=t("/Xao"),k=g(C,u,!1,null,null,null);e.default=k.exports},JP4J:function(n,e,t){var i=t("XU76");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("8bSs")("23a98570",i,!0)},KkRk:function(n,e,t){var i=t("wdO5");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("8bSs")("6af32be1",i,!0)},XU76:function(n,e,t){e=n.exports=t("BkJT")(!0),e.push([n.i,"\n.header[data-v-3d888464] {\n  height: 1.2rem;\n  background: #333;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #fff;\n}\n.header .icon-prev[data-v-3d888464] {\n  margin: 0 0.3rem;\n}\n.header .titles[data-v-3d888464] {\n  font-size: 0.4rem;\n  color: #fff;\n  margin-left: 0.1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.header .find-set[data-v-3d888464] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.header .find-set .find[data-v-3d888464] {\n  font-size: 0.4rem;\n  margin: 0 0.3rem;\n}\n.header .find-set .set[data-v-3d888464] {\n  font-size: 0.4rem;\n  margin-right: 0.3rem;\n}","",{version:3,sources:["E:/fankx/testdoc/vue-vx/src/components/prev-header.vue"],names:[],mappings:";AACA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,YAAY;CACb;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,qBAAqB;CACtB",file:"prev-header.vue",sourcesContent:["\n.header[data-v-3d888464] {\n  height: 1.2rem;\n  background: #333;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #fff;\n}\n.header .icon-prev[data-v-3d888464] {\n  margin: 0 0.3rem;\n}\n.header .titles[data-v-3d888464] {\n  font-size: 0.4rem;\n  color: #fff;\n  margin-left: 0.1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.header .find-set[data-v-3d888464] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.header .find-set .find[data-v-3d888464] {\n  font-size: 0.4rem;\n  margin: 0 0.3rem;\n}\n.header .find-set .set[data-v-3d888464] {\n  font-size: 0.4rem;\n  margin-right: 0.3rem;\n}"],sourceRoot:""}])},cR4Y:function(n,e,t){e=n.exports=t("BkJT")(!0),e.push([n.i,"\n.mail-list-content[data-v-f1777d30] {\n  position: absolute;\n  top: 1.2rem;\n  bottom: 1.3rem;\n  left: 0;\n  right: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.link-title[data-v-f1777d30] {\n  text-align: left;\n  padding: 0.15rem;\n  background: #efefef;\n  font-size: 0.35rem;\n}\n.links[data-v-f1777d30] {\n  padding: 0.2rem 0.2rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid #ccc;\n  border-right: 0;\n  border-left: 0;\n  -webkit-box-pack: space-start;\n      -ms-flex-pack: space-start;\n          justify-content: space-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n}\n.links img[data-v-f1777d30] {\n  width: 1rem;\n  height: 1rem;\n}\n.links .time[data-v-f1777d30] {\n  text-align: right;\n}\n.links .link-content[data-v-f1777d30] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: space-start;\n      -ms-flex-pack: space-start;\n          justify-content: space-start;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-left: 0.3rem;\n}\n.links .link-content .item-name[data-v-f1777d30] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.4rem;\n}\n.links .link-content .item-describe[data-v-f1777d30] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.32rem;\n  color: #999;\n}","",{version:3,sources:["E:/fankx/testdoc/vue-vx/src/pages/mail-list.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,QAAQ;EACR,SAAS;EACT,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,uBAAuB;EACvB,+BAA+B;UACvB,uBAAuB;EAC/B,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,8BAA8B;MAC1B,2BAA2B;UACvB,6BAA6B;EACrC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;MAChB,YAAY;UACR,QAAQ;EAChB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,8BAA8B;MAC1B,2BAA2B;UACvB,6BAA6B;EACrC,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;CACb",file:"mail-list.vue",sourcesContent:["\n.mail-list-content[data-v-f1777d30] {\n  position: absolute;\n  top: 1.2rem;\n  bottom: 1.3rem;\n  left: 0;\n  right: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.link-title[data-v-f1777d30] {\n  text-align: left;\n  padding: 0.15rem;\n  background: #efefef;\n  font-size: 0.35rem;\n}\n.links[data-v-f1777d30] {\n  padding: 0.2rem 0.2rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid #ccc;\n  border-right: 0;\n  border-left: 0;\n  -webkit-box-pack: space-start;\n      -ms-flex-pack: space-start;\n          justify-content: space-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n}\n.links img[data-v-f1777d30] {\n  width: 1rem;\n  height: 1rem;\n}\n.links .time[data-v-f1777d30] {\n  text-align: right;\n}\n.links .link-content[data-v-f1777d30] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: space-start;\n      -ms-flex-pack: space-start;\n          justify-content: space-start;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-left: 0.3rem;\n}\n.links .link-content .item-name[data-v-f1777d30] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.4rem;\n}\n.links .link-content .item-describe[data-v-f1777d30] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.32rem;\n  color: #999;\n}"],sourceRoot:""}])},lbSh:function(n,e,t){n.exports=t.p+"static/img/pic_TLrobby.57ded50.png"},uWQK:function(n,e,t){"use strict";function i(n){t("/nOi")}Object.defineProperty(e,"__esModule",{value:!0});var a=t("4YfN"),o=t.n(a),s={data:function(){return{list:{gzh:[],private:[{name:"图灵机器人",path:"/vx/detail",icon:"static/imgs/pic_TLrobby.png",describe:"一个有趣的智障机器人",phone:"132131231231",routeName:"detial",address:"",id:"tuling"},{name:"小熊猫",path:"/vx/detail",icon:"static/imgs/pic_a.jpg",describe:"一个有趣的智障机器人",phone:"132131231231",routeName:"detial",address:"",id:"xiaoxiongm"},{name:"小白兔",path:"/vx/detail",icon:"static/imgs/pic_b.jpg",describe:"一个有趣的智障机器人",phone:"132131231231",routeName:"detial",address:"",id:"xiaobaitu"},{name:"小胖猪",path:"/vx/detail",icon:"static/imgs/pic_e.jpg",describe:"一个有趣的智障机器人",phone:"132131231231",routeName:"detial",address:"",id:"xiaopangzhu"},{name:"小糊涂神",path:"/vx/detail",icon:"static/imgs/pic_a.jpg",describe:"一个有趣的智障机器人",phone:"132131231231",routeName:"detial",address:"",id:"xiaohutushen"},{name:"七个小矮人",path:"/vx/detail",icon:"static/imgs/pic_b.jpg",describe:"一个有趣的智障机器人",phone:"132131231231",routeName:"detial",address:"",id:"qigexiaoairen"},{name:"人生得意须尽欢",path:"/vx/detail",icon:"static/imgs/pic_e.jpg",describe:"一个有趣的智障机器人",phone:"132131231231",routeName:"detial",address:"",id:"rensdyxjh"}]}}},computed:{},mounted:function(){},methods:{goPath:function(n){this.$router.push({name:n.routeName,query:o()({},n,{userIcon:"/static/imgs/user_fankx.jpg"})})}}},A=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"mail-list-content"},[n.list.gzh.length>0?t("div",{staticClass:"link-title"},[n._v("\n\t\t\t公众号\n\t\t")]):n._e(),n._v(" "),n._l(n.list.gzh,function(e,i){return t("div",{key:i,staticClass:"links",on:{click:function(t){n.goPath(e)}}},[t("img",{attrs:{src:e.icon,alt:e.describe}}),n._v(" "),t("div",{staticClass:"link-content"},[t("div",{staticClass:"item-name"},[n._v(n._s(e.name))])])])}),n._v(" "),t("div",{staticClass:"link-title"},[n._v("\n\t\t\t联系人\n\t\t")]),n._v(" "),n._l(n.list.private,function(e,i){return t("div",{key:i,staticClass:"links",on:{click:function(t){n.goPath(e)}}},[t("img",{attrs:{src:e.icon,alt:e.describe}}),n._v(" "),t("div",{staticClass:"link-content"},[t("div",{staticClass:"item-name"},[n._v(n._s(e.name))])])])})],2)},r=[],d={render:A,staticRenderFns:r},l=d,c=t("/Xao"),B=i,f=c(s,l,!1,B,"data-v-f1777d30",null);e.default=f.exports},wdO5:function(n,e,t){e=n.exports=t("BkJT")(!0),e.push([n.i,"\n.blod[data-v-4d3277b4] {\n  font-weight: 700;\n}\n.detail-container[data-v-4d3277b4] {\n  position: absolute;\n  top: 1.2rem;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  overflow-x: hidden;\n  background: #efefef;\n}\n.tap-cont[data-v-4d3277b4] {\n  background: #fff;\n  margin: 0.2rem 0;\n  padding: 0 0.2rem;\n  font-size: 0.5rem;\n}\n.tap-cont .cont-top[data-v-4d3277b4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-start;\n      -ms-flex-pack: space-start;\n          justify-content: space-start;\n  padding: 0.2rem;\n  font-size: 0.52rem;\n}\n.tap-cont .cont-top > img[data-v-4d3277b4] {\n  width: 1.5rem;\n  height: 1.5rem;\n  display: block;\n}\n.tap-cont .cont-top .space-top[data-v-4d3277b4] {\n  text-align: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-left: 0.5rem;\n}\n.tap-cont .cont-top .space-top .label[data-v-4d3277b4] {\n  font-size: 0.4rem;\n}\n.tap-cont .cont-top .space-top .phone[data-v-4d3277b4] {\n  color: #090;\n  font-size: 0.36rem;\n}\n.tap-cont .address[data-v-4d3277b4] {\n  text-align: left;\n  padding: 0.2rem 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n.tap-cont .more[data-v-4d3277b4] {\n  text-align: left;\n  font-size: 0.5rem;\n  padding: 0.2rem 0;\n}\n.tap-cont .xiangc[data-v-4d3277b4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0.2rem 0;\n  height: 2.2rem;\n  -webkit-box-pack: space-start;\n      -ms-flex-pack: space-start;\n          justify-content: space-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #ccc;\n}\n.tap-cont .xiangc .pics[data-v-4d3277b4] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n}\n.send-msg[data-v-4d3277b4],\n.delete-msg[data-v-4d3277b4] {\n  padding: 0.3rem;\n  color: #fff;\n  border-radius: 5px;\n  font-size: 0.5rem;\n  margin: 0.2rem;\n}\n.send-msg[data-v-4d3277b4] {\n  background: #090;\n}\n.delete-msg[data-v-4d3277b4] {\n  background: #f20;\n}","",{version:3,sources:["E:/fankx/testdoc/vue-vx/src/pages/list-detail.vue"],names:[],mappings:";AACA;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,QAAQ;EACR,SAAS;EACT,eAAe;EACf,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;CACnB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,8BAA8B;MAC1B,2BAA2B;UACvB,6BAA6B;EACrC,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,eAAe;EACf,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,oBAAoB;CACrB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,kBAAkB;EAClB,+BAA+B;UACvB,uBAAuB;EAC/B,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,YAAY;EACZ,8BAA8B;CAC/B;AACD;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;CACnB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,8BAA8B;MAC1B,2BAA2B;UACvB,6BAA6B;EACrC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,8BAA8B;CAC/B;AACD;EACE,oBAAoB;MAChB,YAAY;UACR,QAAQ;EAChB,aAAa;CACd;AACD;;EAEE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB",file:"list-detail.vue",sourcesContent:["\n.blod[data-v-4d3277b4] {\n  font-weight: 700;\n}\n.detail-container[data-v-4d3277b4] {\n  position: absolute;\n  top: 1.2rem;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  overflow-x: hidden;\n  background: #efefef;\n}\n.tap-cont[data-v-4d3277b4] {\n  background: #fff;\n  margin: 0.2rem 0;\n  padding: 0 0.2rem;\n  font-size: 0.5rem;\n}\n.tap-cont .cont-top[data-v-4d3277b4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-start;\n      -ms-flex-pack: space-start;\n          justify-content: space-start;\n  padding: 0.2rem;\n  font-size: 0.52rem;\n}\n.tap-cont .cont-top > img[data-v-4d3277b4] {\n  width: 1.5rem;\n  height: 1.5rem;\n  display: block;\n}\n.tap-cont .cont-top .space-top[data-v-4d3277b4] {\n  text-align: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-left: 0.5rem;\n}\n.tap-cont .cont-top .space-top .label[data-v-4d3277b4] {\n  font-size: 0.4rem;\n}\n.tap-cont .cont-top .space-top .phone[data-v-4d3277b4] {\n  color: #090;\n  font-size: 0.36rem;\n}\n.tap-cont .address[data-v-4d3277b4] {\n  text-align: left;\n  padding: 0.2rem 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n.tap-cont .more[data-v-4d3277b4] {\n  text-align: left;\n  font-size: 0.5rem;\n  padding: 0.2rem 0;\n}\n.tap-cont .xiangc[data-v-4d3277b4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0.2rem 0;\n  height: 2.2rem;\n  -webkit-box-pack: space-start;\n      -ms-flex-pack: space-start;\n          justify-content: space-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #ccc;\n}\n.tap-cont .xiangc .pics[data-v-4d3277b4] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n}\n.send-msg[data-v-4d3277b4],\n.delete-msg[data-v-4d3277b4] {\n  padding: 0.3rem;\n  color: #fff;\n  border-radius: 5px;\n  font-size: 0.5rem;\n  margin: 0.2rem;\n}\n.send-msg[data-v-4d3277b4] {\n  background: #090;\n}\n.delete-msg[data-v-4d3277b4] {\n  background: #f20;\n}"],sourceRoot:""}])},xzRt:function(n,e,t){e=n.exports=t("BkJT")(!0),e.push([n.i,"\n.home-container[data-v-9a2bd7c0] {\n  position: absolute;\n  top: 1.2rem;\n  bottom: 1.35rem;\n  left: 0;\n  right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.links[data-v-9a2bd7c0] {\n  padding: 0.2rem 0.2rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid #ccc;\n  border-right: 0;\n  border-left: 0;\n  -webkit-box-pack: space-start;\n      -ms-flex-pack: space-start;\n          justify-content: space-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n}\n.links img[data-v-9a2bd7c0] {\n  width: 1rem;\n  height: 1rem;\n}\n.links .time[data-v-9a2bd7c0] {\n  text-align: right;\n}\n.links .link-content[data-v-9a2bd7c0] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: space-start;\n      -ms-flex-pack: space-start;\n          justify-content: space-start;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-left: 0.3rem;\n}\n.links .link-content .item-name[data-v-9a2bd7c0] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.4rem;\n}\n.links .link-content .item-describe[data-v-9a2bd7c0] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.32rem;\n  color: #999;\n}","",{version:3,sources:["E:/fankx/testdoc/vue-vx/src/components/home.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,QAAQ;EACR,SAAS;EACT,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,uBAAuB;EACvB,+BAA+B;UACvB,uBAAuB;EAC/B,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;EACf,8BAA8B;MAC1B,2BAA2B;UACvB,6BAA6B;EACrC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;MAChB,YAAY;UACR,QAAQ;EAChB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,8BAA8B;MAC1B,2BAA2B;UACvB,6BAA6B;EACrC,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;CACb",file:"home.vue",sourcesContent:["\n.home-container[data-v-9a2bd7c0] {\n  position: absolute;\n  top: 1.2rem;\n  bottom: 1.35rem;\n  left: 0;\n  right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.links[data-v-9a2bd7c0] {\n  padding: 0.2rem 0.2rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid #ccc;\n  border-right: 0;\n  border-left: 0;\n  -webkit-box-pack: space-start;\n      -ms-flex-pack: space-start;\n          justify-content: space-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n}\n.links img[data-v-9a2bd7c0] {\n  width: 1rem;\n  height: 1rem;\n}\n.links .time[data-v-9a2bd7c0] {\n  text-align: right;\n}\n.links .link-content[data-v-9a2bd7c0] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: space-start;\n      -ms-flex-pack: space-start;\n          justify-content: space-start;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-left: 0.3rem;\n}\n.links .link-content .item-name[data-v-9a2bd7c0] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.4rem;\n}\n.links .link-content .item-describe[data-v-9a2bd7c0] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.32rem;\n  color: #999;\n}"],sourceRoot:""}])},yZ3x:function(n,e,t){"use strict";function i(n){t("JP4J")}function a(n){t("KkRk")}Object.defineProperty(e,"__esModule",{value:!0});var o=t("4YfN"),s=t.n(o),A={name:"vHeader",data:function(){return{}},mounted:function(){}},r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("header",{staticClass:"header"},[t("div",{staticClass:"titles"},[t("div",{staticClass:"iconfont icon-prev",on:{click:function(e){n.$router.go(-1)}}}),n._v(" "),t("div",[n._v(n._s(this.$route.query.name))])]),n._v(" "),n._m(0)])},d=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"find-set"},[t("div",{staticClass:"find iconfont icon-tubiao-copy"}),n._v(" "),t("div",{staticClass:"set iconfont icon-jia1"})])}],l={render:r,staticRenderFns:d},c=l,B=t("/Xao"),f=i,p=B(A,c,!1,f,"data-v-3d888464",null),m=p.exports,C={data:function(){return{curInfo:this.$route.query}},components:{prevHeader:m},mounted:function(){},comupted:{},methods:{sendMsg:function(){this.$router.push({name:"asend",query:s()({},this.curInfo,{userIcon:"static/imgs/user_fankx.jpg"})})},deleteMsg:function(){var n=this.curInfo.id;this.$store.dispatch("deleteMsg",n)}}},b=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("prev-header"),n._v(" "),t("div",{staticClass:"detail-container"},[t("div",{staticClass:"tap-cont"},[t("div",{staticClass:"cont-top"},[t("img",{attrs:{src:n.curInfo.icon,alt:""}}),n._v(" "),t("div",{staticClass:"space-top"},[t("div",{staticClass:"blod"},[n._v(n._s(n.curInfo.name))]),n._v(" "),t("div",[t("label",{staticClass:"label"},[n._v("电话号码：")]),t("span",{staticClass:"phone"},[n._v(n._s(n.curInfo.phone)+"\t")])])])])]),n._v(" "),t("div",{staticClass:"tap-cont"},[t("div",{staticClass:"address"},[t("span",[n._v("地区：")]),n._v(" "),t("span",[n._v(n._s(n.curInfo.address))])]),n._v(" "),n._m(0),n._v(" "),t("div",{staticClass:"more"},[n._v("更多")])]),n._v(" "),t("div",{staticClass:"send-msg",on:{click:n.sendMsg}},[n._v("\n\t\t\t发送消息\n\t\t")]),n._v(" "),t("div",{staticClass:"delete-msg",on:{click:n.deleteMsg}},[n._v("\n\t\t\t删除聊天记录\n\t\t")])])],1)},x=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"xiangc"},[t("div",[n._v("个人相册：")]),n._v(" "),t("div",{staticClass:"pics"})])}],v={render:b,staticRenderFns:x},u=v,g=t("/Xao"),k=a,E=g(C,u,!1,k,"data-v-4d3277b4",null);e.default=E.exports}});
//# sourceMappingURL=vx.js.map