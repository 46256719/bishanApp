(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"0773":function(t,e,n){"use strict";n.r(e);var a=n("1d07"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"1d07":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("c0ea")),i=o(n("2a75"));function o(t){return t&&t.__esModule?t:{default:t}}var s=function(){return n.e("components/bw-swiper/bw-swiper").then(n.bind(null,"17ee"))},r={data:function(){return{latitude:50.64356722667575,longitude:166.57172588823505,tasks:"",setH:100,reportTop:0,covers:[],userInfo:"",examine_1:{},examine_2:{},examine_3:{},examine_4:{},tongji:[],swiperList:[{url:"../../static/images/home/picture1.png"},{url:"../../static/images/home/picture2.png"},{url:"../../static/images/home/picture3.png"},{url:"../../static/images/home/picture4.png"},{url:"../../static/images/home/picture5.png"},{url:"../../static/images/home/picture6.png"},{url:"../../static/images/home/picture7.png"},{url:"../../static/images/home/picture8.png"},{url:"../../static/images/home/picture9.png"}]}},components:{BwSwiper:s},created:function(){this.userInfo=t.getStorageSync("userInfo");var e=t.getSystemInfoSync().windowHeight,n=t.getSystemInfoSync().windowWidth;this.setH=e-n/750*350,this.reportTop=e-n/750*513-10,this.latitude=t.getStorageSync("userLocation").latitude,this.longitude=t.getStorageSync("userLocation").longitude;var a=this;t.onSocketMessage(function(t){a.covers=JSON.parse(t.data)})},onShow:function(){this.getTask(),this.getSituation("examine_1",1,1),this.getSituation("examine_2",5,1),this.getSituation("examine_3",2,1),this.getSituation("examine_4",6,1),t.$emit("hideSub",!1),this.getTongji()},methods:{getTask:function(){var e=this;i.default.getRequestNo(a.default.TASK_INDEX2,{uid:this.userInfo.id},function(n){t.setStorageSync("home_tasks",n.data),e.tasks=n.data},function(n){e.tasks=t.getStorageSync("home_tasks")?t.getStorageSync("home_tasks"):e.tasks})},getTongji:function(){var e=this;i.default.getRequestPc(a.default.QUKONGSHUIZHITONGJI_HELIUSHUIZHITONGJI,{year:2019,month:4},function(n){t.setStorageSync("home_tongji",n),n=e.getNum(n),e.tongji=n},function(n){e.tongji=t.getStorageSync("home_tongji")?t.getStorageSync("home_tongji"):e.tongji})},getNum:function(t){for(var e=0;e<t.length;e++)switch(t[e].slevel.toString()){case"1":t[e].slevel="Ⅰ";break;case"2":t[e].slevel="Ⅱ";break;case"3":t[e].slevel="Ⅲ";break;case"4":t[e].slevel="Ⅳ";break;case"5":t[e].slevel="Ⅴ";break;case"6":t[e].slevel="Ⅵ";break}return t},getSituation:function(e,n,o){var s=this,r=new Date,u=r.getFullYear(),c=r.getMonth(),g={year:0==c?u-1:u,month:0==c?12:c,lvltype:2,ikhlx:n,kaohetype:o,idistrictid:500227e6};i.default.getRequestPc(a.default.DAPINGSHUIZHI_SHUIZHITONGJI_KHLX,g,function(n){t.setStorageSync(e,n),s[e]=n},function(n){s[e]=t.getStorageSync(e)?t.getStorageSync(e):s[e]})},toMission:function(){},toAllMission:function(e){t.navigateTo({url:"/pages/allMission/allMission?nav="+e})},toReport:function(){t.navigateTo({url:"/pages/report/report"})},toStandarDetail:function(){t.navigateTo({url:"/pages/standardDetail/standardDetail"})}}};e.default=r}).call(this,n("6e42")["default"])},"38e9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,Math.floor(t.tasks["已完成务个数"]/t.tasks["全部任务个数"]*100));t.$mp.data=Object.assign({},{$root:{g0:n}})},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"6d22":function(t,e,n){"use strict";var a=n("809a"),i=n.n(a);i.a},"809a":function(t,e,n){},e15c:function(t,e,n){"use strict";n.r(e);var a=n("38e9"),i=n("0773");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("6d22");var s=n("2877"),r=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"dac83bb4",null);e["default"]=r.exports}},[["57fd","common/runtime","common/vendor"]]]);