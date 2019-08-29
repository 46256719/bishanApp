<template name="missionCard">
	<view class="missionCard" :style="'padding-bottom:'+(isProcess?'':'0px')">
		<view class="missionCard_list"><view class="missionCard_list_left">任务名称：</view><view class="">{{result.taskName}}</view></view>
		<view class="missionCard_list"><view class="missionCard_list_left">任务类别：</view><view class="">{{result.type=="1"?"巡查任务":"整改任务"}}</view></view>
		<view class="missionCard_list"><view class="missionCard_list_left">巡查人：</view><view class="">{{result.executorName}}</view></view>
		<view class="missionCard_list"><view class="missionCard_list_left">计划开始时间：</view><view class="">{{result.taskBeginTime||"-"}}</view></view>
		<view class="missionCard_list" :style="{'border-bottom-color': result.type!='1'?'transparent':'rgb(211,211,211)'}"><view class="missionCard_list_left">计划结束时间：</view><view class="">{{result.taskEndTime||"-"}}</view></view>
		<view class="missionCard_list" v-if="result.type=='1'" style="border-bottom-color: transparent;"><view class="missionCard_list_left">已完成点位数：</view><view class="">{{result.finishPoint}}/{{result.totalPoint}}</view></view>
		<slot name="slot_bottom"></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: ['result',"isProcess"],
		created(){
			// console.log(this.result)
		}
	}
</script>

<style scoped>
.missionCard{
	background-color: #fff;
	padding: 10upx 32upx;
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
	width: 200upx;
}
</style>
