(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"0773":function(t,e,n){"use strict";n.r(e);var i=n("f1b1"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"2cae":function(t,e,n){},"2e78":function(t,e,n){"use strict";var i=n("2cae"),a=n.n(i);a.a},"57fd":function(t,e,n){"use strict";(function(t){n("61ce"),n("921b");i(n("66fd"));var e=i(n("e15c"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e15c:function(t,e,n){"use strict";n.r(e);var i=n("ff7f"),a=n("0773");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("2e78");var s=n("2877"),u=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"388138b8",null);e["default"]=u.exports},f1b1:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("c0ea")),o=s(n("2a75"));function s(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/bw-swiper/bw-swiper").then(n.bind(null,"17ee"))},r=function(){return n.e("components/lanxiujuan-dyDate/lanxiujuan-dyDate").then(n.bind(null,"46dd"))},c=function(){return n.e("components/cmd-progress/cmd-progress").then(n.bind(null,"021c"))},l={data:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth();return{latitude:50.64356722667575,longitude:166.57172588823505,tasks:"",setH:100,reportTop:0,kaoheType:{examine_1:1,examine_2:2,examine_3:3,examine_4:2},covers:[],userInfo:"",examine_1:{},examine_2:{},examine_3:{},examine_4:{},tongji:[],xiaoyu:"<1",isGetTime:!0,situationDate:{year:0==n?e-1:e,month:0==n?12:n},tongjiDate:{year:0==n?e-1:e,month:0==n?12:n},swiperList:[{url:"../../static/images/home/picture1.png"},{url:"../../static/images/home/picture2.png"},{url:"../../static/images/home/picture3.png"},{url:"../../static/images/home/picture4.png"},{url:"../../static/images/home/picture5.png"},{url:"../../static/images/home/picture6.png"},{url:"../../static/images/home/picture7.png"},{url:"../../static/images/home/picture8.png"},{url:"../../static/images/home/picture9.png"}],progress:0,isUpApp:!1}},components:{BwSwiper:u,pickDate:r,cmdProgress:c},created:function(){this.userInfo=t.getStorageSync("userInfo");var e=t.getSystemInfoSync().windowHeight,n=t.getSystemInfoSync().windowWidth;this.setH=e-n/750*350,this.reportTop=e-n/750*513-10,this.latitude=t.getStorageSync("userLocation").latitude,this.longitude=t.getStorageSync("userLocation").longitude;var i=this;t.onSocketMessage(function(t){i.covers=JSON.parse(t.data)})},onShow:function(){this.getTask(),t.$emit("hideSub",!1),this.isGetTime?this.getBaseYearMonth():(this.getSituation("examine_1",1,2),this.getSituation("examine_2",5,2),this.getSituation("examine_3",3,3),this.getSituation("examine_4",6,2),this.getTongji())},methods:{getTask:function(){var e=this;o.default.getRequestNo(a.default.TASK_INDEX2,{uid:this.userInfo.id},function(n){t.setStorageSync("home_Ztasks",n.data),e.tasks=n.data},function(n){e.tasks=t.getStorageSync("home_tasks")?t.getStorageSync("home_tasks"):e.tasks})},getBaseYearMonth:function(){var t=this;o.default.getRequestPc(a.default.url_PC,{url:a.default.WATER_BASE_GETBASEYEARMONTH},function(e){t.situationDate={year:e.year,month:1*e.month<10?"0"+e.month:e.month},t.tongjiDate={year:e.year,month:1*e.month<10?"0"+e.month:e.month},t.getSituation("examine_1",1,2),t.getSituation("examine_2",5,2),t.getSituation("examine_3",3,3),t.getSituation("examine_4",6,2),t.getTongji(),t.isGetTime=!1},function(e){t.getSituation("examine_1",1,2),t.getSituation("examine_2",5,2),t.getSituation("examine_3",3,3),t.getSituation("examine_4",6,2),t.getTongji(),t.isGetTime=!1})},getTongji:function(){var e=this,n=new Date;n.getFullYear(),n.getMonth();o.default.getRequestPc(a.default.url_PC,{url:a.default.QUKONGSHUIZHITONGJI_HELIUSHUIZHITONGJI,params:"year="+this.tongjiDate.year+";month="+this.tongjiDate.month},function(n){t.setStorageSync("home_tongji",n),n=e.getNum(n),e.tongji=n},function(n){e.tongji=t.getStorageSync("home_tongji")?t.getStorageSync("home_tongji"):e.tongji})},getNum:function(t){for(var e=0;e<t.length;e++)switch(t[e].slevel.toString()){case"1":t[e].slevel="Ⅰ";break;case"2":t[e].slevel="Ⅱ";break;case"3":t[e].slevel="Ⅲ";break;case"4":t[e].slevel="Ⅳ";break;case"5":t[e].slevel="Ⅴ";break;case"6":t[e].slevel="Ⅵ";break}return t},getData:function(t){var e=t.split("-");this.situationDate={year:e[0],month:e[1]},this.getSituation("examine_1",1,2),this.getSituation("examine_2",5,2),this.getSituation("examine_3",3,3),this.getSituation("examine_4",6,2)},getSituation:function(e,n,i){var s=this;i=this.kaoheType[e];var u={url:a.default.DAPINGSHUIZHI_SHUIZHITONGJI_KHLX,params:"year="+this.situationDate.year+";month="+this.situationDate.month+";lvltype=2;ikhlx="+n+";kaohetype="+i+";idistrictid=500227000000"};o.default.getRequestPc(a.default.url_PC,u,function(n){t.setStorageSync(e,n),s[e]=n},function(n){s[e]=t.getStorageSync(e)?t.getStorageSync(e):s[e]})},toMission:function(){},toAllMission:function(e){t.navigateTo({url:"/pages/allMission/allMission?nav="+e})},toReport:function(){t.navigateTo({url:"/pages/report/report"})},toStandarDetail:function(){o.default.situationDate=this.situationDate,t.navigateTo({url:"/pages/standardDetail/standardDetail"})},chooseUpApp:function(){var e=this;t.showModal({title:"提示",content:"检测到有最新版本，是否下载？",success:function(t){t.confirm?(e.isUpApp=!0,e.upApp()):t.cancel&&console.log(i("用户点击取消"," at pages\\home\\home.vue:359"))}})},upApp:function(){var e=this,n=t.downloadFile({url:a.default.url+"/downLoad/downLoadAppFile",complete:function(e){var n=this;console.log(i(e," at pages\\home\\home.vue:368")),200==e.statusCode&&plus.runtime.install(e.tempFilePath,{force:!1},function(t){n.isUpApp=!1,plus.runtime.restart()},function(e){console.log(i(e," at pages\\home\\home.vue:376")),n.isUpApp=!1,t.showToast({title:"安装升级包失败",icon:"none"})})}});n.onProgressUpdate(function(t){e.progress=t.progress})}}};e.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},ff7f:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,(t.tasks["已完成务个数"]/t.tasks["全部任务个数"]*100).toFixed(1));t.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}},[["57fd","common/runtime","common/vendor"]]]);