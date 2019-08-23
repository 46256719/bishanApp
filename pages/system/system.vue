<template>
	<view id="system">
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
				
			}
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
	padding-top: 20upx;
	min-height: 100vh;
	box-sizing: border-box;
	padding-bottom: 20upx;
}
.system_menu{
	display: flex;
	padding: 0upx 20upx;
	position: relative;
	align-items: center;
	background-color: #fff;
	height: 70upx;
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
</style>
