<template>
	<view id="completeTask">
		<map id="completeMap" style="width: 100%;height: 50vh;" :scale="20" :show-location="true" :markers="covers" :circles="circles" :latitude="latitude" :longitude="longitude">
			
		</map>
		<view class="report_info">
			<view class="title">备注</view>
			<textarea name="" placeholder="最多输入200个文字" @input="getRemark" :value="remark" maxlength="200" id="describe"></textarea>
			<view class="title">拍照</view>
			<view class="pictures">
				<view class="takingPictures" @click="takingPictures()"><image style="width: 46upx;height: 38upx;" src="/static/images/icon_takePicture.png" mode=""></image></view>
				<view class="picture_list" v-for="(item,index) in pictures" :key="index">
					<image :src="item" mode="aspectFill"></image>
					<image class="del" @click="delPicture(index)" src="/static/images/icon_ban.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="cancel" @click="cancel()">取消</view>
			<view class="confirm" @click="getDistance(taskInfo)">确定</view>
		</view>
	</view>
</template>

<script>
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	import {mapTool} from '../../static/js/mapTool.js'
	export default {
		data() {
			return {
				taskInfo:{},
				pictures:[],
				longitude:"",
				latitude:"",
				remark:"",
				covers:[],
				circles:[]
			}
		},
		onLoad() {
			
		},
		onReady(){
			var mapContext=uni.createMapContext("completeMap")
			var locationMapInfo=mapContext.$getAppMap()
			locationMapInfo.showUserLocation(true)
			// locationMapInfo.show()
			this.userInfo=uni.getStorageSync("userInfo")
			this.taskInfo=util.pollutionInfo
			console.log(this.taskInfo.longitude)
			var wgs84togcj02=mapTool.wgs84togcj02(this.taskInfo.longitude,this.taskInfo.latitude)
			this.longitude=wgs84togcj02[0]
			this.latitude=wgs84togcj02[1]
			this.initMap(this.taskInfo)
		},
		methods: {
			initMap(data){
				var wgs84togcj02=mapTool.wgs84togcj02(data.longitude,data.latitude)
				this.circles=[
					{
						latitude: wgs84togcj02[1],
						longitude: wgs84togcj02[0],
						radius:data.distanceLimit,
						color:"#5087FB80",
						fillColor:"#5087FB30",
						strokeWidth:"2"
					}
				]
				this.covers=[{
					id:"person1",
					latitude: wgs84togcj02[1],
					longitude: wgs84togcj02[0],
					iconPath: '../../static/images/dingwei.png'
				}]
			},
			getDistance(data){
				var point1 = new plus.maps.Point(uni.getStorageSync("userLocation").longitude,uni.getStorageSync("userLocation").latitude);
				var point2 = new plus.maps.Point(this.taskInfo.longitude,this.taskInfo.latitude)
				plus.maps.Map.calculateDistance(point1,point2,(res)=>{
					if(res.distance>this.taskInfo.distanceLimit&&this.taskInfo.mustInRange==1){
						uni.showToast({
							icon:"none",
							title:"距离任务地点太远，无法完成！"
						})
					}else{
						this.confirm(data)
					}
				})
			},
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
					success: (res) => {
						console.log(res);
						this.pictures.push(res.tempFilePaths[0])
					}
				});
			},
			getImgUrl(url){//获取图片地址
				util.uploadFile(URL.UPLOAD_UPLOAD,url,(results)=>{
					console.log(results)
					this.pictures.push(JSON.parse(results).data)
				})
			},
			getRemark(e){
				this.remark=e.detail.value
			},
			changeStatus(){
				util.getRequest(URL.TASK_PATROL_POINT_NORMAL,{id:this.taskInfo.id,status:"100"},(results)=>{
					util.showSuccess("完成",()=>{
						uni.navigateBack({})
					})
				})
			},
			cancel(){
				uni.navigateBack({})
			},
			confirm(data){
				if(this.pictures.length==0){
					uni.showToast({
						icon:"none",
						title:"请拍照上传！"
					})
					return
				}
				var obj={
					id:data.id,
					longitude:this.longitude,
					latitude:this.latitude,
					remark:this.remark,
					pointPhoto:this.pictures.join(";"),
					z:1
				}
				util.completeTask(obj)
				uni.showLoading({mask:true})
				setTimeout(function(){
					uni.hideLoading()
					uni.$emit("refreshPollutionPage",true)
					uni.navigateBack()
				},500)
				// util.getRequest(URL.TASK_PATROL_POINT_UPDATE,obj,(results)=>{
				// 	util.showSuccess("完成",()=>{
				// 		uni.$emit("refreshTasksPage",true)
				// 		uni.navigateBack({})
				// 	})
				// })
			}
		}
	}
</script>

<style scoped>
#completeTask{
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
	height: 280upx;
	border-radius: 10upx;
}
.pictures{
	display: flex;
	margin-top: 30upx;
	margin-left: -30upx;
	padding-left: 30upx;
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
