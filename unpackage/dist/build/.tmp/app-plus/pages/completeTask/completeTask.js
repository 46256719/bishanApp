(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/completeTask/completeTask"],{"2a45":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n("c0ea")),o=c(n("2a75")),s=n("196c");function c(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/createWaterMark/createWaterMark").then(n.bind(null,"5cfc"))},l={data:function(){return{taskInfo:{},pictures:[],longitude:"",latitude:"",remark:"",covers:[],circles:[],imgUrl:"",mapContext:""}},components:{waterMark:u},onLoad:function(){},onReady:function(){this.mapContext=t.createMapContext("completeMap");var e=this.mapContext.$getAppMap();e.showUserLocation(!0),this.userInfo=t.getStorageSync("userInfo"),this.taskInfo=o.default.pollutionInfo,this.initMap(this.taskInfo)},methods:{initMap:function(t){var e=s.mapTool.wgs84togcj02(t.longitude,t.latitude);this.longitude=e[0],this.latitude=e[1];var n=new plus.maps.Point(e[0],e[1]);this.mapContext.$getAppMap().centerAndZoom(n,22),this.circles=[{latitude:e[1],longitude:e[0],radius:t.distanceLimit,color:"#5087FB80",fillColor:"#5087FB30",strokeWidth:"2"}],this.covers=[{id:"person1",latitude:e[1],longitude:e[0],iconPath:"../../static/images/dingwei.png"}]},previewImage:function(e,n){t.previewImage({current:n,urls:e,fail:function(t){console.log(a(t," at pages\\completeTask\\completeTask.vue:87"))}})},getPhotoUrl:function(t){this.imgUrl="",this.pictures.push(t)},getDistance:function(e){var n=this;if(0!=this.pictures.length)if(this.taskInfo.longitude){var i=new plus.maps.Point(t.getStorageSync("userLocation").longitude,t.getStorageSync("userLocation").latitude),o=new plus.maps.Point(this.taskInfo.longitude,this.taskInfo.latitude);plus.maps.Map.calculateDistance(i,o,function(i){i.distance>n.taskInfo.distanceLimit?(e.inRange=0,1==n.taskInfo.mustInRange?t.showToast({icon:"none",title:"距离任务地点太远，无法完成！"}):t.showModal({title:"提示",content:"你当前不在范围内，是否确认完成？",success:function(t){t.confirm?n.confirm(e):t.cancel&&console.log(a("用户点击取消"," at pages\\completeTask\\completeTask.vue:128"))}})):(e.inRange=1,n.confirm(e))})}else t.showToast({icon:"none",title:"污染源位置信息不完整，请重新定位再试！"});else t.showToast({icon:"none",title:"请拍照上传！"})},chooseTown:function(t){console.log(a(t," at pages\\completeTask\\completeTask.vue:140")),this.on_town=t.detail.value},delPicture:function(t){var e=this.pictures;e.splice(t,1),this.pictures=e},takingPictures:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["camera"],success:function(t){e.imgUrl=t.tempFilePaths[0]}})},getImgUrl:function(t){var e=this;o.default.uploadFile(i.default.UPLOAD_UPLOAD,t,function(t){console.log(a(t," at pages\\completeTask\\completeTask.vue:163")),e.pictures.push(JSON.parse(t).data)})},getRemark:function(t){this.remark=t.detail.value},changeStatus:function(){o.default.getRequest(i.default.TASK_PATROL_POINT_NORMAL,{id:this.taskInfo.id,status:"100"},function(e){o.default.showSuccess("完成",function(){t.navigateBack({})})})},cancel:function(){t.navigateBack({})},confirm:function(e){var n={id:e.id,longitude:this.longitude,latitude:this.latitude,remark:this.remark,pointPhoto:this.pictures.join(";"),z:1,inRange:e.inRange};o.default.completeTask(n),t.showLoading({mask:!0}),setTimeout(function(){t.hideLoading(),t.$emit("refreshPollutionPage",!0),t.navigateBack()},500)}}};e.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])},"2b66":function(t,e,n){"use strict";var a=n("98bd"),i=n.n(a);i.a},"314c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},3663:function(t,e,n){"use strict";n.r(e);var a=n("2a45"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},4611:function(t,e,n){"use strict";n.r(e);var a=n("314c"),i=n("3663");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("2b66");var s=n("2877"),c=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"a2df01ac",null);e["default"]=c.exports},"98bd":function(t,e,n){}},[["ba99","common/runtime","common/vendor"]]]);