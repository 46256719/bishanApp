<template>
	<view id="setPassword">
		<view class="inpContent_list">
			<input type="password" @input="getOldPassword" placeholder="旧密码" placeholder-style="color:#999999;font-size:28upx" :value="oldPassword" />
			<image style="width: 37upx;height: 17upx;" src="../../static/images/icon_invisible1.png" mode=""></image>
		</view>
		<view class="inpContent_list">
			<input type="password" @input="getNewPassord" placeholder="新密码" placeholder-style="color:#999999;font-size:28upx" :value="newPassword" />
			<image style="width: 37upx;height: 17upx;" src="../../static/images/icon_invisible1.png" mode=""></image>
		</view>
		<view class="inpContent_list">
			<input type="password" @input="getNewPassword1" placeholder="确认新密码" placeholder-style="color:#999999;font-size:28upx" :value="newPassword1" />
			<image style="width: 34upx;height: 24upx;" src="../../static/images/icon_invisible.png" mode=""></image>
		</view>
		<view class="submit" @click="submit()">确定</view>
	</view>
</template>

<script>
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	export default {
		data() {
			return {
				userInfo:"",
				oldPassword:"",
				newPassword:"",
				newPassword1:""
			}
		},
		onLoad() {
			this.userInfo=uni.getStorageSync("userInfo")
		},
		methods: {
			getOldPassword(e){
				console.log(e.detail.value)
				this.oldPassword=e.detail.value
			},
			getNewPassord(e){
				console.log(e.detail.value)
				this.newPassword=e.detail.value
			},
			getNewPassword1(e){
				console.log(e.detail.value)
				this.newPassword1=e.detail.value
			},
			submit(){
				if(this.newPassword!=this.newPassword1){
					uni.showToast({
						icon:"none",
						title:"两次密码输入不一致"
					})
					return
				}
				util.postRequest(URL.USER_UPDATE,{oldPassword:this.oldPassword,uid:this.userInfo.id,newPassword:this.newPassword},(results)=>{
					if(results.code==1){
						util.showSuccess("修改成功",function(){
							uni.removeStorageSync("userInfo")
							uni.removeStorageSync("token")
							uni.reLaunch({
								url:"/pages/login/login"
							})
						})
					}else{
						uni.showToast({
							icon:"none",
							title:results.msg||"数据异常"
						})
					}
				})
			}
		}
	}
</script>

<style scoped>
#setPassword{
	min-height: 100vh;
	padding-top: 30upx;
	background-color: #f5f5f5;
	font-size: 30upx;
	box-sizing: border-box;
}
.inpContent_list{
	display: flex;
	padding: 0upx 20upx;
	height: 90upx;
	background-color: #fff;
	margin: 0upx 30upx 30upx;
	border-radius: 5upx;
	justify-content: space-between;
	align-items: center;
}
.inpContent_list>image{
	display: block;
}
.submit{
	margin: 68upx 30upx 0upx;
	height: 70upx;
	line-height: 70upx;
	text-align: center;
	background-color: #007AFF;
	color: #fff;
	border-radius: 35upx;
}
</style>
