<template>
	<view id="login">
		<image id="home_bg" src="../../static/images/home/picture8.png" mode=""></image>
		<view class="project_title">
			<view class="project_title_first">璧山区水污染防治管理信息系统</view>
			<view class="project_title_second">绿水青山，就是金山银山</view>
		</view>
		<!-- <view class="getUrl">
			<text>配置请求地址:</text>
			<input @input="getUrl" type="text" placeholder="请输入带端口号的地址" :value="url" />
			<view class="submitUrl" @click="submitUrl()">确定</view>
		</view> -->
		<view class="loginContent">
			<!-- <view class="systemTitle">璧山区水污染防治管理信息系统</view> -->
			<view class="lg">
				<view class="systemTitle">——— 登录 ———</view>
				<view class="inpContent">
					<view class="inpContent_list">
						<!-- <image style="width: 37upx;height: 43upx;" src="../../static/images/icon_account.png" mode=""></image> -->
						<input type="text" @input="getUserName" placeholder="请输入您的账号" placeholder-class="place_class" :value="loginInfo.username" />
					</view>
					<view class="inpContent_list" style="margin-top: 40upx;">
						<!-- <image src="../../static/images/icon_loginpassword.png" mode=""></image> -->
						<input type="password" @input="getPassWord" placeholder="请输入您的密码" placeholder-class="place_class" :value="loginInfo.password" />
					</view>
				</view>
				<view class="toLogin" @click="toLogin()">登录</view>
			</view>
			<image src="../../static/images/logo_bottom.png" class="logo_bottom" mode=""></image>
		</view>
	</view>
</template>
<script>
	import URL from '../../static/js/interface.js'
	import util from '../../static/js/utils.js'
	import {mapTool} from '../../static/js/mapTool.js'
	export default {
		data() {
			return {
				loginInfo:{
					username:"dengmin",
					password:"123456"
				},
				url:"http://183.230.23.21"
			}
		},
		onLoad() {
			this.url=uni.getStorageSync("url")?uni.getStorageSync("url"):"http://183.230.23.21"
			this.loginInfo=uni.getStorageSync("loginInfo")?uni.getStorageSync("loginInfo"):{username:"liuyouzhong",password:"123456"}
		},
		methods: {
			toLogin(){
				util.postRequest(URL.LOGIN_LOGIN,this.loginInfo,(results)=>{
					// util.getWryMap()
					uni.setStorageSync("token",results.data.token)
					uni.setStorageSync("userInfo",results.data.user)
					uni.setStorageSync("loginInfo",this.loginInfo)
					util.upTimeNum=results.data.upLoadTime?(results.data.upLoadTime*1000):300000
					// util.webSocket(results.data.user.id)
					// var onTask=uni.getStorageSync("onTask")?uni.getStorageSync("onTask"):[]
					var onTask=results.data.patrolTask?results.data.patrolTask:[]
					for(var i=0;i<onTask.length;i++){
						util.upLoction(onTask[i].id)
					}
					uni.switchTab({
						url:"/pages/home/home"
					})	
				},(results)=>{
					uni.showToast({
						icon:"none",
						title:"网络异常"
					})
				})
			},
			getUserName(e){
				this.loginInfo.username=e.detail.value
			},
			getPassWord(e){
				console.log(e.detail.value)
				this.loginInfo.password=e.detail.value
			},
			getUrl(e){
				this.url=e.detail.value
			},
			submitUrl(){
				uni.setStorageSync("url",this.url)
				uni.showToast({
					title:"配置成功，请退出重新进入",
					icon:"none"
				})
			}
		}
	}
</script>

<style scoped>
#login{
	background-color: #eeeeee;
	height: 100vh;
	width: 100vw;
	position: relative;
	/* padding-top: 50upx; */
	box-sizing: border-box;
	/* color: #fff; */
}
#home_bg{
	width: 750upx;
	height: 485upx;
	display: block;
	margin: 0;
}
.project_title{
	position: absolute;
	top:145upx;
	min-width: 580upx;
	left: 50%;
	transform: translateX(-50%);
	color: #fff;
	font-size:40upx;
	text-align: center;
}
.project_title_first{
	border-bottom: 1upx solid #fff;
	font-weight: 700;
}
.project_title_second{
	letter-spacing: 20upx;
	font-size: 22upx;
}
.inpContent{
	/* margin-top: 270upx; */
}
.loginContent{
	position: absolute;
	top: 0upx;
	height: 100vh;
	padding:370upx 30upx 30upx;
	left: 0upx;
	width: 100vw;
	box-sizing: border-box;
}
.logo_bottom{
	width: 690upx;
	height: 153upx;
	position: absolute;
	bottom: 30upx;
	left: 30upx;
}
.systemTitle{
	text-align: center;
	font-size: 42upx;
	margin: auto;
	color: #007AFF;
	margin-bottom: 120upx;
}
.inpContent_list{
	/* display: flex; */
	/* align-items: center; */
	/* padding: 30upx 0upx; */
	margin: auto;
	width: 480upx;
	height: 70upx;
	line-height: 70upx;
	padding-left: 20upx;
	border-radius: 35upx;
	border: 3upx solid #eee;
	font-size: 24upx;
	box-sizing: border-box;
}
.inpContent_list>input{
	height: 70upx;
	line-height: 70upx;
	width: 480upx;
}
/* .inpContent_list>image{
	width: 39upx;
	height: 44upx;
	margin-right: 40upx;
} */
.toLogin{
	margin: 78upx auto 0upx;
	width: 480upx;
	border-radius: 35upx;
	height: 70upx;
	line-height: 80upx;
	text-align: center;
	background-color: #5087fb;
	color: #fff;
	font-size: 36upx;
}
.getUrl{
	position: absolute;
	top:50upx;
	left: 0upx;
	width: 100vw;
	display: flex;
	padding: 10upx;
	box-sizing: border-box;
	background-color: #fff;
	color: #007AFF;
	align-items: center;
	justify-content: space-between;
	font-size: 30upx;
	z-index: 1000000;
}
.place_class{
	color:#999999;
	font-size:24upx;
	text-align: center;
}
.getUrl>input{
	width: 370upx;
	
	border: 1upx solid #007AFF;
}
.submitUrl{
	border: 1upx solid #007AFF;
	padding:0upx 10upx;
}
.lg{
	background-color: #fff;
	box-sizing: border-box;
	height: 100%;
	padding-top: 80upx;
}
</style>
