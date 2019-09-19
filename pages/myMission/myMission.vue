<template>
	<view id="mission">
		<view id="nav">
			<view :class="(type=='process'?'nav_list on_nav_list':'nav_list')" @click="checkType('process')">进行中<text v-if="onTaskNum>0">{{onTaskNum}}</text></view>
			<view :class="(type=='noStart'?'nav_list on_nav_list':'nav_list')" @click="checkType('noStart')">未进行<text v-if="unTaskNum>0">{{unTaskNum}}</text></view>
			<view :class="(type=='finish'?'nav_list on_nav_list':'nav_list')" @click="checkType('finish')">已完成</view>
			<view :class="(type=='issuesList'?'nav_list on_nav_list':'nav_list')" @click="checkType('issuesList')">问题清单</view>
		</view>
		<scroll-view id="missions" upper-threshold="0" lower-threshold="0" scroll-y="true" @scrolltolower="scrollTol">
			<block v-if="type!='issuesList'">
				<view v-for="(item,index) in missions" @click="toTaskDetail(item)" :key="index" class="mission_list">
					<mission-card :isProcess="type!='noStart'" :result="item">
						<view slot="slot_bottom" class="toBind" v-if="type=='noStart'">
							<view class="startMission" v-if="type=='process'">定位</view>
							<view class="startMission" @click.stop="startMission(item)" v-if="type=='noStart'">开始任务</view>
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
				scrollH: 0,
				userInfo: "",
				missions: [],
				page: 0,
				type: "process",
				onTaskNum:0,
				unTaskNum:0,
			};
		},
		components: {
			missionCard,
			issuesListCard
		},
		onLoad() {
			this.userInfo = uni.getStorageSync("userInfo");
			util.isRefreshTasksPage = true;
			this.onTaskNum=util.onTaskNum
			this.unTaskNum=util.unTaskNum
		},
		onShow() {
			if (util.isRefreshTasksPage) {
				this.checkType(this.type)
				uni.$emit("refreshTasksPage", false)
			}
		},
		methods: {
			getTaskProcess(page) { //正在进行中的任务
				util.getRequest(URL.TASK_PROCESS, {
					page: page,
					uid: this.userInfo.id
				}, (results) => {
					this.onTaskNum=results.total
					var results = results.data
					var myTaskProcess = uni.getStorageSync("myTaskProcess") ? uni.getStorageSync("myTaskProcess") : []
					myTaskProcess[page] = results;
					uni.setStorageSync("myTaskProcess", myTaskProcess)
					this.disposeRequestData(results, page)
				}, (results) => {
					var myTaskProcess = uni.getStorageSync("myTaskProcess") ? uni.getStorageSync("myTaskProcess") : []
					results = myTaskProcess[page] ? myTaskProcess[page] : []
					// this.onTaskNum=results.length
					this.disposeRequestData(results, page)
				})
			},
			getNoStart(page) { //未开始的任务
				util.getRequest(URL.TASK_NO_START, {
					page: page,
					uid: this.userInfo.id
				}, (results) => {
					// console.log(results)
					this.unTaskNum=results.total
					var results = results.data
					var myNoStart = uni.getStorageSync("myNoStart") ? uni.getStorageSync("myNoStart") : []
					myNoStart[page] = results;
					
					uni.setStorageSync("myNoStart", myNoStart)
					this.disposeRequestData(results, page)
				}, (results) => {
					var myNoStart = uni.getStorageSync("myNoStart") ? uni.getStorageSync("myNoStart") : []
					results = myNoStart[page] ? myNoStart[page] : []
					// this.unTaskNum=results.length
					this.disposeRequestData(results, page)
				})
			},
			getFinish(page) { //已完成的任务
				util.getRequest(URL.TASK_FINISH, {
					page: page,
					uid: this.userInfo.id
				}, (results) => {
					var results = results.data
					var myFinish = uni.getStorageSync("myFinish") ? uni.getStorageSync("myFinish") : []
					myFinish[page] = results;
					uni.setStorageSync("myFinish", myFinish)
					this.disposeRequestData(results, page)
				}, (results) => {
					var myFinish = uni.getStorageSync("myFinish") ? uni.getStorageSync("myFinish") : []
					results = myFinish[page] ? myFinish[page] : []
					this.disposeRequestData(results, page)
				})
			},
			getProblemList(page) { //问题清单的任务
				util.getRequest(URL.PROBLEM_LIST, {
					page: page,
					uid: this.userInfo.id
				}, (results) => {
					var results = results.data
					var myProblemList = uni.getStorageSync("myProblemList") ? uni.getStorageSync("myProblemList") : []
					myProblemList[page] = results;
					uni.setStorageSync("myProblemList", myProblemList)
					this.disposeRequestData(results, page)
				}, (results) => {
					var myProblemList = uni.getStorageSync("myProblemList") ? uni.getStorageSync("myProblemList") : []
					results = myProblemList[page] ? myProblemList[page] : []
					this.disposeRequestData(results, page)
				})
			},
			disposeRequestData(results, page) {
				if (results.length > 0) {
					this.missions = this.missions.concat(results)
					this.page = page
				} else {
					uni.showToast({
						icon: "none",
						title: "已经没有更多数据了"
					})
				}
			},
			startMission(data) {
				util.getRequest(data.type == "1" ? URL.TASK_PATROL_UPDATE_STATUS : URL.TASK_RECTIFICATION_UPDATE_STATUS, {
					id: data.id,
					status: 1
				}, (results) => {
					this.onTaskNum+=1
					this.unTaskNum-=1
					if (data.type == "1") {
						var onTask = uni.getStorageSync("onTask") ? uni.getStorageSync("onTask") : []
						onTask.push(data.id)
						// uni.setStorageSync("onTask",onTask)
						util.upLoction(data.id)
						uni.$emit("refreshTasksPage", true)
						uni.navigateTo({
							url: "/pages/taskDetails/taskDetails?taskId=" + data.id + "&isReport=true"
						})
					} else {
						this.type="process"
						this.checkType(this.type)
					}
				}, (results) => {
					uni.showToast({
						icon: "none",
						title: "网络异常"
					})
				})
			},
			checkType(type) {
				this.type = type
				this.page = 0
				this.missions = []
				switch (type) {
					case "process":
						this.getTaskProcess(this.page);
						break;
					case "noStart":
						this.getNoStart(this.page);
						break;
					case "finish":
						this.getFinish(this.page);
						break;
					case "issuesList":
						this.getProblemList(this.page);
						break;
				}
			},
			toLocation(data) {
				util.pollutionInfo = data
				uni.navigateTo({
					url: "/pages/showLocation/showLocation"
				})
			},
			toContact(data) {
				uni.navigateTo({
					url: "/pages/contact/contact?id=" + data.pointId
				})
			},
			toTaskDetail(data) {
				util.taskInfo = data
				if (this.type != 'process') {
					return
				}
				if (data.type == 1) {
					uni.navigateTo({
						url: "/pages/taskDetails/taskDetails?taskId=" + data.id + "&isReport=true"
					})
				} else {
					uni.navigateTo({
						url: "/pages/rectificationTaskDetail/rectificationTaskDetail"
					})
				}
			},
			previewImage(data) { //预览照片
				if (!data.problemPhoto) {
					uni.showToast({
						icon: "none",
						title: "暂无照片"
					})
					return
				}
				uni.previewImage({
					current: 0,
					urls: data.problemPhoto.split(";"),
					fail(res) {
						console.log(res)
					}
				});
			},
			scrollTol() {
				switch (this.type) {
					case "process":
						this.getTaskProcess(this.page + 1);
						break;
					case "noStart":
						this.getNoStart(this.page + 1);
						break;
					case "finish":
						this.getFinish(this.page + 1);
						break;
					case "issuesList":
						this.getProblemList(this.page + 1);
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	#mission {
		height: 100vh;
		// padding-top: 110upx;
		box-sizing: border-box;
		overflow: hidden;
	}

	#nav {
		display: flex;
		justify-content: space-around;
		height: 88upx;
		background-color: #fff;
		position: absolute;
		padding-top: 22upx;
		width: 100vw;
		left: 0upx;
		top: 0upx
	}

	.nav_list {
		width: 164upx;
		border-bottom: 4upx solid $uni-white-color;
		padding: 18upx 0upx 36upx;
		height: 30upx;
		line-height: 30upx;
		text-align: center;
		position: relative;
		font-size: 30upx;
	}

	.nav_list>text {
		min-width: 25upx;
		height: 25upx;
		border-radius: 50%;
		background-color: red;
		color: #fff;
		text-align: center;
		line-height: 25upx;
		position: absolute;
		font-size: 18upx;
		right: 0upx;
		top: 0upx;
	}

	.on_nav_list {
		border-bottom-color: $uni-blue-color;
		color: $uni-blue-color;
	}

	#missions {
		background-color: #f5f5f5;
		height: 100vh;
		padding-top: 110upx;
		box-sizing: border-box;
	}

	.mission_list {
		padding: 20upx 20upx 0upx;
	}

	.mission_list:last-child {
		padding-bottom: 20upx;
	}

	.toBind {
		margin: 0upx -32upx;
		display: flex;
		justify-content: flex-end;
		padding: 10upx 32upx;
		border-top: 1upx solid rgb(211, 211, 211);
	}

	.startMission {
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
