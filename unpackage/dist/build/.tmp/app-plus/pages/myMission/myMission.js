(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myMission/myMission"],{2425:function(t,e,s){"use strict";s.r(e);var a=s("dcb4"),i=s("5735");for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);s("6267");var o=s("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"9e77da12",null);e["default"]=r.exports},5735:function(t,e,s){"use strict";s.r(e);var a=s("bb17"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e["default"]=i.a},6267:function(t,e,s){"use strict";var a=s("cc5d"),i=s.n(a);i.a},bb17:function(t,e,s){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(s("c0ea")),n=o(s("2a75"));function o(t){return t&&t.__esModule?t:{default:t}}var r=function(){return s.e("components/missionCard").then(s.bind(null,"1d77"))},u=function(){return s.e("components/issuesListCard").then(s.bind(null,"6934"))},c={data:function(){return{scrollH:0,userInfo:"",missions:[],page:0,type:"process",onTaskNum:0,unTaskNum:0}},components:{missionCard:r,issuesListCard:u},onLoad:function(){this.userInfo=t.getStorageSync("userInfo"),n.default.isRefreshTasksPage=!0,this.onTaskNum=n.default.onTaskNum,this.unTaskNum=n.default.unTaskNum},onShow:function(){n.default.isRefreshTasksPage&&(this.checkType(this.type),t.$emit("refreshTasksPage",!1))},methods:{getTaskProcess:function(e){var s=this;n.default.getRequest(i.default.TASK_PROCESS,{page:e,uid:this.userInfo.id},function(a){a=a.data;var i=t.getStorageSync("myTaskProcess")?t.getStorageSync("myTaskProcess"):[];i[e]=a,t.setStorageSync("myTaskProcess",i),s.disposeRequestData(a,e)},function(a){var i=t.getStorageSync("myTaskProcess")?t.getStorageSync("myTaskProcess"):[];a=i[e]?i[e]:[],s.disposeRequestData(a,e)})},getNoStart:function(e){var s=this;n.default.getRequest(i.default.TASK_NO_START,{page:e,uid:this.userInfo.id},function(a){a=a.data;var i=t.getStorageSync("myNoStart")?t.getStorageSync("myNoStart"):[];i[e]=a,t.setStorageSync("myNoStart",i),s.disposeRequestData(a,e)},function(a){var i=t.getStorageSync("myNoStart")?t.getStorageSync("myNoStart"):[];a=i[e]?i[e]:[],s.disposeRequestData(a,e)})},getFinish:function(e){var s=this;n.default.getRequest(i.default.TASK_FINISH,{page:e,uid:this.userInfo.id},function(a){a=a.data;var i=t.getStorageSync("myFinish")?t.getStorageSync("myFinish"):[];i[e]=a,t.setStorageSync("myFinish",i),s.disposeRequestData(a,e)},function(a){var i=t.getStorageSync("myFinish")?t.getStorageSync("myFinish"):[];a=i[e]?i[e]:[],s.disposeRequestData(a,e)})},getProblemList:function(e){var s=this;n.default.getRequest(i.default.PROBLEM_LIST,{page:e,uid:this.userInfo.id},function(a){a=a.data;var i=t.getStorageSync("myProblemList")?t.getStorageSync("myProblemList"):[];i[e]=a,t.setStorageSync("myProblemList",i),s.disposeRequestData(a,e)},function(a){var i=t.getStorageSync("myProblemList")?t.getStorageSync("myProblemList"):[];a=i[e]?i[e]:[],s.disposeRequestData(a,e)})},disposeRequestData:function(e,s){e.length>0?(this.missions=this.missions.concat(e),this.page=s):t.showToast({icon:"none",title:"已经没有更多数据了"})},startMission:function(e){var s=this;n.default.getRequest("1"==e.type?i.default.TASK_PATROL_UPDATE_STATUS:i.default.TASK_RECTIFICATION_UPDATE_STATUS,{id:e.id,status:1},function(a){if(s.onTaskNum+=1,s.unTaskNum-=1,"1"==e.type){var i=t.getStorageSync("onTask")?t.getStorageSync("onTask"):[];i.push(e.id),n.default.upLoction(e.id),t.$emit("refreshTasksPage",!0),t.navigateTo({url:"/pages/taskDetails/taskDetails?taskId="+e.id+"&isReport=true"})}else s.type="process",s.checkType(s.type)},function(e){t.showToast({icon:"none",title:"网络异常"})})},checkType:function(t){switch(this.type=t,this.page=0,this.missions=[],t){case"process":this.getTaskProcess(this.page);break;case"noStart":this.getNoStart(this.page);break;case"finish":this.getFinish(this.page);break;case"issuesList":this.getProblemList(this.page);break}},toLocation:function(e){n.default.pollutionInfo=e,t.navigateTo({url:"/pages/showLocation/showLocation"})},toContact:function(e){t.navigateTo({url:"/pages/contact/contact?id="+e.pointId})},toTaskDetail:function(e){n.default.taskInfo=e,"process"==this.type&&(1==e.type?t.navigateTo({url:"/pages/taskDetails/taskDetails?taskId="+e.id+"&isReport=true"}):t.navigateTo({url:"/pages/rectificationTaskDetail/rectificationTaskDetail"}))},previewImage:function(e){e.problemPhoto?t.previewImage({current:0,urls:e.problemPhoto.split(";"),fail:function(t){console.log(a(t," at pages\\myMission\\myMission.vue:232"))}}):t.showToast({icon:"none",title:"暂无照片"})},scrollTol:function(){switch(this.type){case"process":this.getTaskProcess(this.page+1);break;case"noStart":this.getNoStart(this.page+1);break;case"finish":this.getFinish(this.page+1);break;case"issuesList":this.getProblemList(this.page+1);break}}}};e.default=c}).call(this,s("6e42")["default"],s("0de9")["default"])},cc5d:function(t,e,s){},dcb4:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})}},[["e094","common/runtime","common/vendor"]]]);