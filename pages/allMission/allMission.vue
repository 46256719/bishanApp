<template>
	<view id="allMission">
		<view id="nav">
			<view :class="(type=='process'?'nav_list on_nav_list':'nav_list')" @click="checkType('process')">进行中</view>
			<view :class="(type=='finish'?'nav_list on_nav_list':'nav_list')" @click="checkType('finish')">已完成</view>
			<view :class="(type=='issuesList'?'nav_list on_nav_list':'nav_list')" @click="checkType('issuesList')">问题清单</view>
		</view>
		<scroll-view id="missions" scroll-y="true" upper-threshold="0" lower-threshold="0" @scrolltolower="scrollTol">
			<block v-if="type!='issuesList'">
				<view v-for="(item,index) in missions" :key="index" class="mission_list">
					<mission-card :isProcess="type=='finish'" :result="item">
						<view slot="slot_bottom" class="toBind" v-if="type=='process'">
							<view class="startMission" @click.stop="toLocation(item)">定位</view>
						</view>
					</mission-card>
				</view>	
			</block>
			<block v-else>
				<view v-for="(item,index) in missions" :key="index" class="mission_list">
					<issues-list-card :result="item">
						<view slot="slot_bottom" class="toBind">
							<view class="startMission" @click="previewImage(item)">照片</view>
							<view class="startMission" @click="toContact(item)">联系人</view>
							<view class="startMission" @click="toLocation(item)">定位</view>
						</view>
					</issues-list-card>
				</view>
			</block>
			<view v-if="missions.length==0" class="noData">—————— 暂无数据 ——————</view>
		</scroll-view>
	</view>
</template>
<script>
	import missionCard from "../../components/missionCard"
	import issuesListCard from "../../components/issuesListCard"
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	export default {
		data() {
			return {
				scrollH:0,
				userInfo:"",
				missions:[],
				page:0,
				type:"process"
			};
		},
		components:{missionCard,issuesListCard},
		onReady(){
			this.userInfo=uni.getStorageSync("userInfo")
			// var getH=uni.getSystemInfoSync().windowHeight
			// var getW=uni.getSystemInfoSync().windowWidth
			// this.scrollH=getH-getW/750*110;
		},
		onLoad(options) {
			this.type=options.nav
			this.checkType(options.nav)
			// this.getTaskProcess(this.page)
		},
		methods:{
			getTaskProcess(page){//正在进行中的任务
				util.getRequest(URL.TASK_PROCESS,{page:this.page},(results)=>{
					console.log(results)
					this.disposeRequestData(results,page)
				})
			},
			getFinish(page){//已完成的任务
				util.getRequest(URL.TASK_FINISH,{page:this.page},(results)=>{
					console.log(results)
					this.disposeRequestData(results,page)
				})
			},
			getProblemList(page){//问题清单的任务
				util.getRequest(URL.PROBLEM_LIST,{page:this.page},(results)=>{
					console.log(results)
					this.disposeRequestData(results,page)
				})
			},
			disposeRequestData(results,page){
				if(results.code!=1){
					uni.showToast({
						icon:"none",
						title:results.msg||"数据异常"
					})
					return
				}
				if(results.data.length>0){
					this.missions=this.missions.concat(results.data)
					this.page=page
				}else{
					uni.showToast({
						icon:"none",
						title:"已经没有更多数据了"
					})
				}
			},
			previewImage(data){//预览照片
				if(!data.problemPhoto){
					uni.showToast({
						icon:"none",
						title:"暂无照片"
					})
					return
				}
				uni.previewImage({
					current:0,
					urls: data.problemPhoto?data.problemPhoto.split(";"):[],
					// longPressActions: {
					// 	itemList: ['发送给朋友', '保存图片', '收藏'],
					// 	success: function(data) {
					// 		console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
					// 	},
					// 	fail: function(err) {
					// 		console.log(err.errMsg);
					// 	}
					// }
				});
			},
			checkType(type){
				this.type=type
				this.page=0
				this.missions=[]
				switch(type){
					case "process":
					this.getTaskProcess(this.page);
					break;
					case "finish":
					this.getFinish(this.page);
					break;
					case "issuesList":
					this.getProblemList(this.page);
					break;
				}
			},
			toLocation(data){
				util.pollutionInfo=data
				uni.navigateTo({
					url:"/pages/location/location?taskId="+data.id+"&longitude="+data.longitude+"&latitude="+data.latitude+"&address="+data.address
				})
			},
			toContact(data){
				uni.navigateTo({
					url:"/pages/contact/contact?id="+data.pointId
				})
			},
			toTaskDetail(data){
				uni.navigateTo({
					url:"/pages/taskDetails/taskDetails?taskId="+data.id
				})
			},
			scrollTol(){
				switch(this.type){
					case "process":
					this.getTaskProcess(this.page+1);
					break;
					case "finish":
					this.getFinish(this.page+1);
					break;
					case "issuesList":
					this.getProblemList(this.page+1);
					break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
#allMission{
	
}
#nav{
	display: flex;
	justify-content: space-around;
	height: 88upx;
	padding-top: 22upx;
	background-color: #fff;
	position: absolute;
	width: 100%;
}
.nav_list{
	width: 164upx;
	border-bottom: 4upx solid $uni-white-color;
	padding: 18upx 0upx 36upx;
	height: 30upx;
	line-height: 30upx;
	text-align: center;
	position: relative;
	font-size: 30upx;
}
.on_nav_list{
	border-bottom-color: $uni-blue-color;
	color: $uni-blue-color;
}
.nav_list>text{
	width: 25upx;
	height: 25upx;
	border-radius: 50%;
	background-color: red;
	color: #fff;
	text-align: center;
	line-height: 25upx;
	position: absolute;
	font-size: 18upx;
	right: 0upx;
	top:0upx;
}
#missions{
	background-color: #f5f5f5;
	padding-top: 110upx;
	height: 100vh;
	box-sizing: border-box;
}
.mission_list{
	padding: 20upx 20upx 0upx;
}
.mission_list:last-child{
	padding-bottom: 20upx;
}
.toBind{
	margin: 0upx -32upx;
	display: flex;
	justify-content: flex-end;
	padding: 10upx 32upx;
	border-top: 1upx solid rgb(211,211,211);
}
.startMission{
	width: 140upx;
	height: 50upx;
	line-height: 50upx;
	border-radius: 25upx;
	text-align: center;
	border: 1upx solid rgb(154, 187, 255);
	color: rgb(154, 187, 255);
	margin-left: 20upx;
}
</style>
