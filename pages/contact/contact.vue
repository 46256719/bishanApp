<template>
	<view id="contact">
		<view class="header">
			<image class="icon_user" src="../../static/images/icon_user.png" mode=""></image>
			<text>责任领导：{{contactInfo.jzZrld||"无"}}</text>
		</view>
		<view class="persons">
			<view class="person_list">
				<view class="person_list_left">
					<image class="person_list_left_cover" src="../../static/images/person_cover.png" mode=""></image>
					<view class="person_list_left_msg">
						<view class="person_list_left_msg_name">责任人：{{contactInfo.jzZrr||"无"}}</view>
						<view class="person_list_left_msg_phone">联系电话：{{contactInfo.jzZrrTel||"无"}}</view>
					</view>
				</view>
				<image @click="callPhone(contactInfo.jzZrrTel)" class="person_list_right" src="../../static/images/icon_phone.png" mode=""></image>
			</view>
			<view class="person_list">
				<view class="person_list_left">
					<image class="person_list_left_cover" src="../../static/images/person_cover.png" mode=""></image>
					<view class="person_list_left_msg">
						<view class="person_list_left_msg_name">巡查人：{{contactInfo.jzXcr||"无"}}</view>
						<view class="person_list_left_msg_phone">联系电话：{{contactInfo.jzXcrTel||"无"}}</view>
					</view>
				</view>
				<image @click="callPhone(contactInfo.jzXcrTel)" class="person_list_right" src="../../static/images/icon_phone.png" mode=""></image>
			</view>
			<view class="person_list">
				<view class="person_list_left">
					<image class="person_list_left_cover" src="../../static/images/person_cover.png" mode=""></image>
					<view class="person_list_left_msg">
						<view class="person_list_left_msg_name">镇级河长：{{contactInfo.jzZjhz||"无"}}</view>
						<view class="person_list_left_msg_phone">联系电话：{{contactInfo.jzZjhzTel||"无"}}</view>
					</view>
				</view>
				<image @click="callPhone(contactInfo.jzZzTel)" class="person_list_right" src="../../static/images/icon_phone.png" mode=""></image>
			</view>
			<view class="person_list">
				<view class="person_list_left">
					<image class="person_list_left_cover" src="../../static/images/person_cover.png" mode=""></image>
					<view class="person_list_left_msg">
						<view class="person_list_left_msg_name">村级河长：{{contactInfo.jzCjhz||"无"}}</view>
						<view class="person_list_left_msg_phone">联系电话：{{contactInfo.jzCjhzTel||"无"}}</view>
					</view>
				</view>
				<image @click="callPhone(contactInfo.jzCjhzTel)" class="person_list_right" src="../../static/images/icon_phone.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	export default {
		data() {
			return {
				contactInfo:"",
				contacts:""
			}
		},
		onLoad(options) {
			this.getContacts(options.id)
		},
		methods: {
			callPhone(phone){
				uni.makePhoneCall({
					phoneNumber: phone //仅为示例
				});
			},
			getContacts(id){
				console.log(URL.TASK_PATROL_POINT_CONTACTLIST)
				util.getRequest(URL.TASK_PATROL_POINT_CONTACTLIST,{pointId: id},(results)=>{
					// console.log(results)
					this.contactInfo=results.data
				})
			}
		}
	}
</script>

<style scoped>
#contact{
	min-height: 100vh;
	padding-bottom: 20upx;
	box-sizing: border-box;
	background-color: #F2F2F2;
	font-size: 28upx;
}
.header{
	display: flex;
	padding-left: 30upx;
	height: 92upx;
	border-bottom: 1upx solid #eee;
	align-items: center;
	background-color: #fff;
}
.icon_user{
	width: 25upx;
	height: 28upx;
	margin-right: 12upx;
}
.person_list{
	height: 140upx;
	margin-bottom: 20upx;
	display: flex;
	padding: 25upx;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
}
.person_list:last-child{
	margin-bottom: 0upx;
}
.person_list_left{
	display: flex;
	align-items: center;
}
.person_list_left_cover{
	width: 90upx;
	height: 90upx;
	border-radius: 45upx;
	overflow: hidden;
	margin-right: 20upx;
}
.person_list_left_msg{
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.person_list_left_msg_name{
	font-size: 34upx;
	color: rgb(51, 51, 51);
	padding: 2upx 0upx;
}
.person_list_left_msg_phone{
	font-size: 24upx;
	color: rgb(153, 153, 153);
	padding: 2upx 0upx;
}
.person_list_right{
	width: 50upx;
	height: 48upx;
	margin-right: 15upx;
}
</style>
