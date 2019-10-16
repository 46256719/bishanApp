<template name="taskDetailCard">
	<view class="taskDetailCard">
		<view class="missionCard_list"><view class="missionCard_list_left">任务类别：</view><view class="missionCard_list_rigth">巡查任务</view></view>
		<view class="missionCard_list"><view class="missionCard_list_left">点位名称：</view><view class="missionCard_list_rigth">{{result.pollutionName}}</view></view>
		<view class="missionCard_list"><view class="missionCard_list_left">污染源类型：</view><view class="missionCard_list_rigth">{{getWryTypeName(result.wryType)}}</view></view>
		<view class="missionCard_list" :style="result.distanceMeter||result.distanceMeter==0?'':'border: 0'">
			<view class="missionCard_list_left">污染源地址：</view>
			<view class="missionCard_list_rigth" @click="toLocation(result)">
				<image class="icon_localtion" src="../../static/images/icon_localtion.png" mode=""></image>
				<text>{{result.address}}</text>
				<image class="icon_right" src="../../static/images/icon_unfold.png" mode=""></image>
			</view>
		</view>		
		<view style="border: 0;" class="missionCard_list" v-if="result.distanceMeter||result.distanceMeter==0"><view class="">距离(大约)：</view><view class="">{{result.distanceMeter>1000?((result.distanceMeter/1000).toFixed(1))+"K":result.distanceMeter}}m</view></view>
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
		computed: {
			getWryTypeName() {
				return function(type){
					return util.getWryTypeName(type)
				}
			}
		},
		methods: {
			toLocation(data) {
				// uni.setStorageSync("taskInfo",data)
				util.pollutionInfo=data
				// console.log(data)
				uni.navigateTo({
					url:"/pages/location/location"
				})
			},
			
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
.missionCard_list_left{
	flex: 1;
}
.missionCard_list_rigth{
	display: flex;
	flex: 2;
	align-items: center;
	justify-content: flex-end;
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
