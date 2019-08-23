<template>
	<view id="report">
		<view class="town">
			<picker mode="selector" :range="towns" @change="chooseTown" range-key="sfullname">
				<view class="pick">
					<view class="">{{towns[on_town].sfullname}}</view>
					<image mode="scaleToFill" class="icon_toRight" src="/static/images/icon_unfold.png" alt=""></image>
				</view>
			</picker>
		</view>
		<view class="report_info">
			<view class="title">问题描述</view>
			<textarea name="" placeholder="最多输入200个文字" maxlength="200" id="describe"></textarea>
			<view class="pictures">
				<view class="takingPictures" @click="takingPictures()"><image style="width: 46upx;height: 38upx;" src="/static/images/icon_takePicture.png" mode=""></image></view>
				<view class="picture_list" v-for="(item,index) in pictures" :key="index">
					<image :src="item" mode="aspectFill"></image>
					<image class="del" @click="delPicture(index)" src="/static/images/icon_ban.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="take_qrCode" @click="takeCode()"><image src="/static/images/icon_qrCode.png" mode=""></image><text>扫描二维码</text></view>
		<view class="footer">
			<view class="cancel">取消</view>
			<view class="confirm">确定</view>
		</view>
	</view>
</template>

<script>
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	export default {
		data() {
			return {
				towns:[
					{
						name:"大萨达",
						id:1121
					}
				],
				on_town:0,
				pictures:[
					"/static/images/icon_takePicture.png",
				],
				longitude:"",
				latitude:""
			}
		},
		created(){
			this.userInfo=uni.getStorageSync("userInfo")
			var that=this
			this.getTowns()
			uni.getLocation({
				type:"gcj02",
				success(res){
					console.log(res)
					that.longitude=res.longitude
					that.latitude=res.latitude
				}
			})
		},
		methods: {
			chooseTown(e){
				console.log(e)
				this.on_town=e.detail.value
			},
			delPicture(index){
				var pictures=this.pictures
				pictures.splice(index,1)
				this.pictures=pictures
			},
			takingPictures(){
				var that=this
				uni.chooseImage({
					count: 1, //可以选择图片的张数
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //从相册选择  默认是两个都有
					success: function (res) {
						console.log(res);
						that.getImgUrl(res.tempFilePaths[0])
					}
				});
			},
			getImgUrl(url){//获取图片地址
				util.uploadFile(URL.UPLOAD_UPLOAD,url,(results)=>{
					console.log(results)
					this.pictures.push(results)
				})
			},
			takeCode(){
				uni.scanCode({
					onlyFromCamera: true,
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			getTowns(){
				util.getRequest(URL.DEPARTMENT_GET_DEPT,{deptId: this.userInfo.ideptid},(results)=>{
					console.log(results)
					if(results.code==1){
						this.towns=results.data
					}
					// this.pictures.push(results)
				})
			}
		}
	}
</script>

<style scoped>
#report{
	background-color: #F5F5F5;
	min-height: 100vh;
	color: #333333;
	font-size: 28upx;
	padding-bottom: 122upx;
	box-sizing: border-box;
}
.pick{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0upx 30upx;
	font-size: 28upx;
	height: 90upx;
	background-color: #fff;
}
.icon_toRight{
	display: block;
	width: 13upx;
	height: 24upx;
}
.report_info{
	padding: 30upx 0upx 10upx 30upx;
	background-color: #FFFFFF;
	margin-top: 20upx;
}
#describe{
	margin-top: 26upx;
	background-color: #F5F5F5;
	width: auto;
	margin-right: 30upx;
	padding: 23upx 27upx;
	box-sizing: border-box;
	height: 340upx;
	border-radius: 10upx;
}
.pictures{
	display: flex;
	margin-top: 30upx;
	margin-right: -30upx;
	flex-wrap: wrap;
}
.pictures>view{
	width: 126upx;
	height: 126upx;
	border: 1upx solid #eee;
	position: relative;
	margin-right: 19upx;
	margin-bottom: 19upx;
}
.pictures>view>image:first-child{
	width: 124upx;
	height: 124upx;
	display: block;
	position: absolute;
	top:0upx;
	bottom: 0upx;
	left: 0upx;
	right: 0upx;
	margin: auto;
}
.del{
	position: absolute;
	top: -15upx!important;
	right: -15upx!important;
	width: 30upx!important;
	height: 30upx!important;
}
.take_qrCode{
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20upx 0upx;
	background-color: #FFFFFF;
	height: 132upx;
}
.take_qrCode>image{
	width: 40upx;
	height: 40upx;
	display: block;
	margin-right: 20upx;
}
</style>
