<template>
	<view id="rectificationTaskDetail">
		<map id="locationMap" style="width: 100%;height: 50vh;" :scale="20" :show-location="true" :markers="covers" :circles="circles" :latitude="latitude" :longitude="longitude">
			
		</map>
		<view class="report_info">
			<view class="taskName">任务名称：{{taskDetail.taskName||""}}</view>
			<view class="title">整改结果描述</view>
			<textarea name="" placeholder="最多输入200个文字" @input="inpDetail" maxlength="200" :value="taskDescription" id="describe"></textarea>
		</view>
		<view class="pictures">
			<view class="takingPictures" @click="takingPictures()"><image style="width: 46upx;height: 38upx;" src="/static/images/icon_takePicture.png" mode=""></image></view>
			<view class="picture_list" v-for="(item,index) in pictures" :key="index">
				<image :src="item" mode="aspectFill"></image>
				<image class="del" @click="delPicture(index)" src="/static/images/icon_ban.png" mode=""></image>
			</view>
		</view>
		<view class="footer">
			<view class="cancel" @click="cancel()">取消</view>
			<view class="confirm" @click="getDistance()">完成</view>
		</view>
	</view>
</template>

<script>
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	import {mapTool} from "../../static/js/mapTool.js"
	export default {
		data() {
			return {
				pictures:[],
				taskDescription:"",
				longitude:"",
				latitude:"",
				taskDetail:{
					longitude:"",
					latitude:"",
					taskName:"",
					taskId:""
				},
				covers:[],
				circles:[]
			}
		},
		onReady(){
			var mapContext=uni.createMapContext("locationMap")
			var locationMapInfo=mapContext.$getAppMap()
			locationMapInfo.showUserLocation(true)
		},
		onLoad(options) {
			this.taskDetail.taskName=options.taskName
			this.taskDetail.taskId=options.taskId
			
			// console.log(options)
			var wgs84togcj02=mapTool.wgs84togcj02(options.longitude,options.latitude)
			this.longitude=wgs84togcj02[0]
			this.latitude=wgs84togcj02[1]
			this.taskDetail.longitude=options.longitude
			this.taskDetail.latitude=options.latitude
			this.userInfo=uni.getStorageSync("userInfo")
		},
		methods: {
			delPicture(index){
				var pictures=this.pictures
				pictures.splice(index,1)
				this.pictures=pictures
			},
			getDistance(){
				var point1 = new plus.maps.Point(uni.getStorageSync("userLocation").longitude,uni.getStorageSync("userLocation").latitude);
				var point2 = new plus.maps.Point(this.taskDetail.longitude,this.taskDetail.latitude)
				plus.maps.Map.calculateDistance(point1,point2,(res)=>{
					// distance=(res.distance/1000).toFixed(2)
					if(res.distance>this.taskDetail.distanceLimit&&this.taskDetail.mustInRange==1){
						console.log("this.pictures.length")
						uni.showToast({
							icon:"none",
							title:"距离任务地点太远，无法完成！"
						})
					}else{
						this.confirm()
					}
				})
				// return distance
			},
			takingPictures(){
				var that=this
				uni.chooseImage({
					count: 1, //可以选择图片的张数
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //从相册选择  默认是两个都有
					success: (res) => {
						// console.log(res);
						this.pictures.push(res.tempFilePaths[0])
					}
				});
			},
			getImgUrl(url){//获取图片地址
				util.uploadFile(URL.UPLOAD_UPLOAD,url,(results)=>{
					console.log(results)
					results=JSON.parse(results)
					console.log(results.data)
					this.pictures.push(results.data)
				})
			},
			inpDetail(e){
				this.taskDescription=e.detail.value
			},
			confirm(){
				// var distance=this.getDistance()
				// if(distance!=""){
				// 	return
				// }
				if(this.pictures.length==0){
					uni.showToast({
						icon:"none",
						title:"请拍照上传！"
					})
					return
				}
				var data={
					taskDescription:this.taskDescription,
					id:this.taskDetail.taskId,
					taskStatus:100,
					rectificationPhoto:this.pictures.join(";")
				}
				util.rectificationTaskDetail(data)
				uni.showLoading({mask:true})
				setTimeout(function(){
					uni.hideLoading()
					uni.navigateBack()
					uni.$emit("refreshTasksPage",true)
				},500)
				
				// util.getRequest(URL.TASK_RECTIFICATION_UPDATE,data,(results)=>{
				// 	util.showSuccess("完成",()=>{
				// 		uni.$emit("refreshTasksPage",true)
				// 		uni.navigateBack()
				// 	})
				// })
				
			},
			cancel(){
				uni.navigateBack({})
				uni.$emit("refreshTasksPage",false)
			}
		}
	}
</script>

<style scoped>
#rectificationTaskDetail{
	background-color: #F5F5F5;
	min-height: 100vh;
	color: #333333;
	font-size: 28upx;
	/* padding-bottom: 122upx; */
	box-sizing: border-box;
}
.taskName{
	padding-bottom: 30upx;
}
.report_info{
	padding: 30upx 0upx 10upx 30upx;
	background-color: #FFFFFF;
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
	padding-top: 19upx;
	padding-left: 30upx;
	flex-wrap: wrap;
	background-color: #FFFFFF;
}
.pictures>view{
	width: 126upx;
	height: 126upx;
	border: 1upx solid #eee;
	position: relative;
	margin-right: 17upx;
	margin-bottom: 17upx;
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
.footer{
	position: relative;
}
</style>
