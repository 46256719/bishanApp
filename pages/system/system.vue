<template>
	<view id="system">
		<view class="userInfo_title">个人信息</view>
		<view class="userInfo_item">
			<view class="">姓名：</view>
			<view class="">{{userInfo.sname}}</view>
		</view>
		<view class="userInfo_item">
			<view class="">账号：</view>
			<view class="">{{userInfo.saccountname}}</view>
		</view>
		<view class="userInfo_item">
			<view class="">镇街：</view>
			<view class="">{{userInfo.townName||"-"}}</view>
		</view>
		<view class="userInfo_item">
			<view class="">村社：</view>
			<view class="">{{userInfo.villageName||"-"}}</view>
		</view>
		<view class="userInfo_item">
			<view class="">电话：</view>
			<view class="">{{userInfo.sphoneno||"-"}}</view>
		</view>
		<view id="system_menus">
			<view class="system_menu" @click="toSetPassword()">
				<image class="icon_menu" src="../../static/images/icon_passWord.png" mode=""></image>
				<text>修改密码</text>
				<image class="icon_right" src="../../static/images/icon_unfold.png" mode=""></image>
			</view>
		</view>
		<view id="exit" @click="exit()">退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{}
			}
		},
		onLoad() {
			this.userInfo=uni.getStorageSync("userInfo")
			// console.log(this.userInfo)
		},
		methods: {
			toSetPassword(){
				uni.navigateTo({
					url:"/pages/setPassWord/setPassWord"
				})
			},
			exit(){
				uni.removeStorageSync("userInfo")
				uni.removeStorageSync("token")
				uni.reLaunch({
					url:"/pages/login/login"
				})
			}
		}
	}
</script>

<style scoped>
#system{
	background-color: #F2F2F2;
	/* padding-top: 20upx; */
	min-height: 100vh;
	box-sizing: border-box;
	padding-bottom: 20upx;
}
#system_menus{
	margin-top: 40upx;
}
.system_menu{
	display: flex;
	padding: 0upx 20upx;
	position: relative;
	align-items: center;
	background-color: #fff;
	height: 100upx;
	font-size: 28upx;
	color: #333333;
}
.icon_menu{
	width: 33upx;
	height: 33upx;
	margin-right: 20upx;
}
.icon_right{
	width: 13upx;
	height: 22upx;
	position: absolute;
	right: 20upx;
	top:0upx;
	bottom: 0upx;
	margin: auto;
}
#exit{
	margin: 60upx 30upx 0upx;
	height: 70upx;
	line-height: 70upx;
	text-align: center;
	font-size: 28upx;
	color: #fff;
	background-color: #eb4940;
	border-radius: 35upx;
}
.userInfo_title{
	height: 120upx;
	line-height: 120upx;
	padding-left: 20upx;
	border-bottom: 1upx solid #e1e1e1;
	font-size: 32upx;
	color: #000;
	background-color: #fff;
}
.userInfo_item{
	display: flex;
	padding:0upx 40upx;
	background-color: #fff;
	height: 100upx;
	border-bottom: 1upx solid #e1e1e1;
	align-items: center;
	font-size: 28upx;
	color: #666;
}
</style>
