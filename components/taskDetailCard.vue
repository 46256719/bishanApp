<template name="taskDetailCard">
	<view class="taskDetailCard">
		<view class="missionCard_list"><view class="">任务类别：</view><view class="">巡查任务</view></view>
		<view class="missionCard_list"><view class="">名称：</view><view class="">{{result.pollutionName}}</view></view>
		<view class="missionCard_list" style="border: 0;">
			<view class="">污染源地址：</view>
			<view class="missionCard_list_rigth" @click="toLocation(result)">
				<image class="icon_localtion" src="../../static/images/icon_localtion.png" mode=""></image>
				<text>{{result.address}}</text>
				<image class="icon_right" src="../../static/images/icon_unfold.png" mode=""></image>
			</view>
		</view>
		<slot name="slot_bottom"></slot>
	</view>
</template>

<script>
	import util from "../static/js/utils.js"
	export default {
		data() {
			return {
				
			}
		},
		props: ['result',"isProcess"],
		created(){
			// console.log(this.result)
		},
		methods: {
			toLocation(data) {
				// uni.setStorageSync("taskInfo",data)
				util.pollutionInfo=data
				uni.navigateTo({
					url:"/pages/location/location"
				})
			}
		}
	}
</script>

<style scoped>
.taskDetailCard{
	background-color: #fff;
	padding: 10upx 32upx 0upx;
	border-radius: 10upx;
	font-size: 28upx;
}
.missionCard_list{
	display: flex;
	justify-content: space-between;
	padding: 20upx 0upx;
	border-bottom: 1upx dashed rgb(211,211,211);
}
.missionCard_list>view:first-child{
	color: rgb(153,153,153);
}
.missionCard_list_rigth{
	display: flex;
	align-items: center;
}
.icon_localtion{
	width: 20upx;
	height: 28upx;
	margin-right: 10upx;
}
.icon_right{
	width: 13upx;
	height: 22upx;
	margin-left: 7upx;
}
</style>
