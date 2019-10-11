<template>
	<view id="problemList">
		<scroll-view id="problems" :scroll-y="true">
			<view v-for="(item,index) in problems" :key="item.id" class="problem_list">
				<problem-card :result="item">
					<!-- <view slot="slot_bottom" class="toBind">
						<view class="startMission">确认</view>
						<view class="startMission" style="color: red;border-color: red;">删除</view>
					</view> -->
				</problem-card>
			</view>	
			<view v-if="problems.length==0" class="noData">—————— 暂无数据 ——————</view>
		</scroll-view>
	</view>
</template>
<script>
	import problemCard from "../../components/problemCard.vue"
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	export default {
		data() {
			return {
				userInfo:"",
				problems:[],
				pointId:""
			};
		},
		components:{problemCard},
		computed: {},
		onReady(){
			this.userInfo=uni.getStorageSync("userInfo")
		},
		onLoad(options) {
			this.pointId=options.id
			this.getProblem(this.pointId)
		},
		methods:{
			getProblem(id){//正在进行中的任务
				util.getRequest(URL.TASK_PATROL_POINT_PROBLEM_LIST,{pointId:id},(results)=>{
					// console.log(results)
					this.problems=results.data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
#problemList{
	font-size: 28upx;
	background-color: #f2f2f2;
	min-height: 100vh;
	box-sizing: border-box
}
.problems{
	height: 100vh;
	padding-bottom: 20upx;
	box-sizing: border-box;
}
.problem_list{
	padding: 20upx 20upx 0upx;
}
.problem_list:last-child{
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
