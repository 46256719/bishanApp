(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/completeTask/completeTask"],{1311:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"2a45":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("c0ea")),i=u(n("2a75")),s=n("196c");function u(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{taskInfo:{},pictures:[],longitude:"",latitude:"",remark:"",covers:[],circles:[]}},onLoad:function(){this.userInfo=t.getStorageSync("userInfo"),this.taskInfo=t.getStorageSync("taskInfo");var e=s.mapTool.wgs84togcj02(t.getStorageSync("userLocation").longitude,t.getStorageSync("userLocation").latitude);this.latitude=e[1],this.longitude=e[0],this.initMap(this.taskInfo)},onReady:function(){var e=t.createMapContext("completeMap"),n=e.$getAppMap();n.showUserLocation(!0),n.show()},methods:{initMap:function(t){var e=s.mapTool.wgs84togcj02(t.longitude,t.latitude);this.circles=[{latitude:e[1],longitude:e[0],radius:t.distanceLimit,color:"#5087FB80",fillColor:"#5087FB30",strokeWidth:"2"}],this.covers=[{id:"person1",latitude:e[1],longitude:e[0],iconPath:"../../static/images/dingwei.png"}]},getDistance:function(e){var n=this,a=new plus.maps.Point(t.getStorageSync("userLocation").longitude,t.getStorageSync("userLocation").latitude),o=new plus.maps.Point(this.taskInfo.longitude,this.taskInfo.latitude);plus.maps.Map.calculateDistance(a,o,function(a){a.distance>n.taskInfo.distanceLimit&&1==n.taskInfo.mustInRange?t.showToast({icon:"none",title:"距离任务地点太远，无法完成！"}):n.confirm(e)})},chooseTown:function(t){console.log(a(t," at pages\\completeTask\\completeTask.vue:90")),this.on_town=t.detail.value},delPicture:function(t){var e=this.pictures;e.splice(t,1),this.pictures=e},takingPictures:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["camera"],success:function(t){console.log(a(t," at pages\\completeTask\\completeTask.vue:105")),e.pictures.push(t.tempFilePaths[0])}})},getImgUrl:function(t){var e=this;i.default.uploadFile(o.default.UPLOAD_UPLOAD,t,function(t){console.log(a(t," at pages\\completeTask\\completeTask.vue:112")),e.pictures.push(JSON.parse(t).data)})},getRemark:function(t){this.remark=t.detail.value},changeStatus:function(){i.default.getRequest(o.default.TASK_PATROL_POINT_NORMAL,{id:this.taskInfo.id,status:"100"},function(e){i.default.showSuccess("完成",function(){t.navigateBack({})})})},cancel:function(){t.navigateBack({})},confirm:function(e){if(0!=this.pictures.length){var n={id:e.id,longitude:this.longitude,latitude:this.latitude,remark:this.remark,pointPhoto:this.pictures.join(";"),z:1};i.default.completeTask(n),t.showLoading({mask:!0}),setTimeout(function(){t.hideLoading(),t.$emit("refreshPollutionPage",!0),t.navigateBack()},500)}else t.showToast({icon:"none",title:"请拍照上传！"})}}};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},3663:function(t,e,n){"use strict";n.r(e);var a=n("2a45"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},"43e8":function(t,e,n){"use strict";var a=n("95a6"),o=n.n(a);o.a},4611:function(t,e,n){"use strict";n.r(e);var a=n("1311"),o=n("3663");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("43e8");var s=n("2877"),u=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"1699faf1",null);e["default"]=u.exports},"95a6":function(t,e,n){}},[["ba99","common/runtime","common/vendor"]]]);