<template>
	<view id="taskDetails">
		<view id="nav">
			<view :class="(type=='process'?'nav_list on_nav_list':'nav_list')" @click="checkType('process','')">待完成</view>
			<view :class="(type=='finish'?'nav_list on_nav_list':'nav_list')" @click="checkType('finish','')">已完成</view>
			<view :class="(type=='issuesList'?'nav_list on_nav_list':'nav_list')" @click="checkType('issuesList','')">问题清单</view>
		</view>
		<scroll-view id="missions" scroll-y="true">
			<block v-if="type!='issuesList'">
				<view v-for="(item,index) in missions" :key="item.id" class="mission_list">
					<task-detail-card :result="item">
						<view slot="slot_bottom" class="toBind">
							<view class="startMission" @click="toContact(item)">联系人</view>
							<view class="startMission" v-if="isReport&&type=='process'" style="background-color: #ffbb18;color: #fff;border-color:#ffbb18" @click="toReportProblem(item)">上报问题</view>
							<view class="startMission" @click="toProblemList(item)">问题列表</view>
							<view class="startMission" v-if="isReport&&type=='process'" @click="confirmTask(item)">完成</view>
						</view>
					</task-detail-card>
				</view>	
			</block>
			<block v-else>
				<view v-for="(item,index) in missions" :key="item.id" class="mission_list">
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
	import taskDetailCard from "../../components/taskDetailCard"
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	export default {
		data() {
			return {
				scrollH:0,
				userInfo:"",
				missions:[],
				page:0,
				type:"process",
				isReport:false,
				name:""
			};
		},
		components:{missionCard,issuesListCard,taskDetailCard},
		onReady(){
			// var getH=uni.getSystemInfoSync().windowHeight
			// var getW=uni.getSystemInfoSync().windowWidth
			// this.scrollH=getH-getW/750*110;
		},
		onLoad(options) {
			this.userInfo=uni.getStorageSync("userInfo")
			this.taskId=options.taskId
			this.isReport=options.isReport?options.isReport:false
		},
		methods:{
			getTaskProcess(name){//正在进行中的点位
				util.getRequest(URL.TASK_PATROL_POINT_PROCESS_LIST,{taskId:this.taskId,name},(results)=>{
					this.missions=results.data
					uni.setStorageSync("taskDetailsTaskProcess"+this.taskId,this.missions)
					if(this.missions.length==0){
						var onTask=uni.getStorageSync("onTask")?uni.getStorageSync("onTask"):[];
						onTask.splice(onTask.indexOf(this.taskId))
						uni.setStorageSync("onTask",onTask);
						util.unUpLoction(this.taskId)
					}
				},(results)=>{
					this.missions=uni.getStorageSync("taskDetailsTaskProcess"+this.taskId)?uni.getStorageSync("taskDetailsTaskProcess"+this.taskId):[]
					if(this.missions.length==0){
						var onTask=uni.getStorageSync("onTask")?uni.getStorageSync("onTask"):[];
						onTask.splice(onTask.indexOf(this.taskId))
						uni.setStorageSync("onTask",onTask);
						util.unUpLoction(this.taskId)
					}
				})
			},
			getFinish(name){//已完成的问题
				util.getRequest(URL.TASK_PATROL_POINT_FINISH_LIST,{taskId:this.taskId,name},(results)=>{
					this.missions=results.data
					uni.setStorageSync("taskDetailsFinish"+this.taskId,this.missions)
				},(results)=>{
					this.missions=uni.getStorageSync("taskDetailsFinish"+this.taskId)?uni.getStorageSync("taskDetailsFinish"+this.taskId):[];
				})
			},
			getProblemList(name){//问题清单
				util.getRequest(URL.TASK_PATROL_POINT_PROBLEM_LIST2,{taskId:this.taskId,name},(results)=>{
					this.missions=results.data
					uni.setStorageSync("taskDetailsProblemList"+this.taskId,this.missions)
				},(results)=>{
					this.missions=uni.getStorageSync("taskDetailsProblemList"+this.taskId)?uni.getStorageSync("taskDetailsProblemList"+this.taskId):[];
				})
			},
			checkType(type,name){
				this.type=type
				this.missions=[]
				switch(type){
					case "process":
					this.getTaskProcess(name);
					break;
					case "finish":
					this.getFinish(name);
					break;
					case "issuesList":
					this.getProblemList(name);
					break;
				}
			},
			toLocation(data){
				util.pollutionInfo=data
				uni.navigateTo({
					url:"/pages/location/location"
				})
			},
			toContact(data){
				uni.navigateTo({
					url:"/pages/contact/contact?id="+data.id
				})
			},
			toReportProblem(data){
				util.pollutionInfo=data
				uni.navigateTo({
					url:"/pages/reportProblem/reportProblem"
				})
			},
			toProblemList(data){
				uni.navigateTo({
					url:"/pages/problemList/problemList?id="+data.id
				})
			},
			confirmTask(data){
				// uni.setStorageSync("taskInfo",data)
				util.pollutionInfo=data
				// console.log(data)
				uni.navigateTo({
					url:"/pages/completeTask/completeTask"
				})
			},
			previewImage(data){//预览照片
				console.log(data)
				if(!data.problemPhoto){
					uni.showToast({
						icon:"none",
						title:"该问题没有照片"
					})
					return
				}
				uni.previewImage({
					current:0,
					urls: data.problemPhoto?data.problemPhoto.split(";"):[]
				});
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
		},
		onNavigationBarButtonTap(e){//导航栏的自定义button按钮事件
			// console.log(e)
			this.checkType(this.type,this.name)
		},
		onNavigationBarSearchInputChanged(e){//导航栏的搜索输入框内容改变事件
			// console.log(e)
			this.name=e.text
		},
		onNavigationBarSearchInputConfirmed(e){//导航栏的搜索框搜索点击事件
			// console.log(e)
			this.checkType(this.type,this.name)
		},
		onShow() {
			if(util.isRefreshPollutionPage){
				this.checkType(this.type,'')
				uni.$emit("refreshPollutionPage",false)
			}
		},
		onUnload(){
			uni.$emit("refreshPollutionPage",true)
		}
	}
</script>

<style lang="scss" scoped>
#taskDetails{
	
}
#nav{
	display: flex;
	padding-top: 22upx;
	justify-content: space-around;
	position: absolute;
	width: 100vw;
	top:0upx;
	left: 0upx;
	height: 88upx;
	background-color: #fff;
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
	padding: 1upx;
	padding-top: 110upx;
	box-sizing: border-box;
	height: 100vh
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
