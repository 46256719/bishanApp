<template name="problemCard">
	<view class="problemCard">
		<view class="missionCard_list"><view class="">任务类别：</view><view class="">巡查任务</view></view>
		<view class="missionCard_list"><view class="">名称：</view><view class="">{{result.problemTitle}}</view></view>
		<view class="missionCard_list"><view class="">时间：</view><view class="">{{result.createTime||"-"}}</view></view>
		<view class="missionCard_list" style="border-bottom-color: transparent;"><view class="">问题描述：</view><view class="">{{result.problemDetail||"无"}}</view></view>
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
		}
	}
</script>

<style scoped>
.problemCard{
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
