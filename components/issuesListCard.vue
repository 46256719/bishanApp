<template name="issuesListCard">
	<view class="missionCard">
		<view class="missionCard_list"><view class="">点位名称：</view><view class="">{{result.pollutionName}}</view></view>
		<view class="missionCard_list"><view class="">问题名称：</view><view class="">{{result.problemTitle}}</view></view>
		<view class="missionCard_list"><view class="">类别：</view><view class="">{{result.problemType=="1"?"巡查上报":"整改上报"}}</view></view>
		<view class="missionCard_list"><view class="">时间：</view><view class="">{{result.createTime||"-"}}</view></view>
		<view class="missionCard_list" style="border-bottom-color: transparent;"><view class="">问题描述：</view><view class="" style="word-wrap: break-word;">{{result.problemDetail||"无"}}</view></view>
		<slot name="slot_bottom"></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: ['result'],
		created(){
			// console.log(this.result)
		}
	}
</script>

<style scoped>
.missionCard{
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
.missionCard_list>view:last-child{
	max-width: 470upx;
}
</style>
