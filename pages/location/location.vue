<template>
	<view id="location">
		<map id="locationMap" style="width: 100%;height: 100vh;" :controls="controls" @controltap="bindControltap" :scale="20" :show-location="true" :markers="covers" :circles="circles" :latitude="latitude" :longitude="longitude">
			<cover-view id="navigation"></cover-view>
			<cover-view id="address">重庆市</cover-view>
			<cover-view id="address_msg">{{pointInfo.address}}</cover-view>	
			<cover-view id="distance">{{distance}}km</cover-view>
			<cover-image id="toNavigation" @click="toNavigation()" src="../../static/images/icon_navigation.png"></cover-image>
			<cover-view id="reset" @click="toReport()">重新定位</cover-view>
		</map>
	</view>
</template>

<script>
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	import {mapTool} from '../../static/js/mapTool.js'
	export default {
		data() {
			return {
				covers:[],
				circles:[],
				latitude:"",
				longitude:"",
				taskId:"",
				pointInfo:{},
				userLocation:{},
				distance:0,
				controls:[]
			}
		},
		onReady() {
			this.getDistance()
		},
		onLoad(options){
			this.userInfo=uni.getStorageSync("userInfo")
			this.pointInfo=uni.getStorageSync("taskInfo")
			this.userLocation=uni.getStorageSync("userLocation")
			var screenWidth=uni.getSystemInfoSync().screenWidth
			var windowHeight=uni.getSystemInfoSync().windowHeight
			var coefficient=screenWidth/750
			this.controls=[
				{
					id:"toNavigation",
					position:{
						width: 83*coefficient,
						height: 83*coefficient,
						left: 597*coefficient,
						top:windowHeight-335*coefficient
					},
					iconPath:"/static/images/icon_navigation.png",
					clickable:true
				}
			]
			this.initMap(this.pointInfo)
		},
		methods: {
			initMap(data){
				if(!data.longitude){
					uni.showToast({
						icon:"none",
						title:"位置未记录，请重新定位！"
					})
					this.latitude=this.userLocation.latitude
					this.longitude=this.userLocation.longitude
				}else{
					var wgs84togcj02=mapTool.wgs84togcj02(data.longitude,data.latitude)
					this.longitude=wgs84togcj02[0]
					this.latitude=wgs84togcj02[1]
					this.circles=[
						{
							latitude: this.latitude,
							longitude: this.longitude,
							radius:data.distanceLimit,
							color:"#5087FB80",
							fillColor:"#5087FB50",
							strokeWidth:"2"
						}
					]
					this.covers=[{
						id:"person1",
						latitude: this.latitude,
						longitude: this.longitude,
						iconPath: '../../static/images/dingwei.png',
						label:{
							content:data.address,
							color:"#5087FB"
						}
					}]
				}
			},
			bindControltap(e){
				if(e.controlId=="toNavigation"){
					this.toNavigation()
				}
			},
			getDistance(){
				var mapContext=uni.createMapContext("locationMap")
				var locationMapInfo=mapContext.$getAppMap()
				locationMapInfo.showUserLocation(true)
				var point1 = new plus.maps.Point(this.userLocation.longitude,this.userLocation.latitude);
				var point2 = new plus.maps.Point(this.pointInfo.longitude,this.pointInfo.latitude)
				plus.maps.Map.calculateDistance(point1,point2,(res)=>{
					this.distance=(res.distance/1000).toFixed(2)
				})
			},
			toNavigation(){//导航
				var _this = this;  
				// 判断平台  
				var wgs84togcj02=mapTool.wgs84togcj02(_this.pointInfo.longitude,_this.pointInfo.latitude)
				var longitude=wgs84togcj02[0]
				var latitude=wgs84togcj02[1]
				if (plus.os.name == 'Android') {  
					plus.runtime.openURL("amapuri://route/plan/?sid=BGVIS1&did=BGVIS2&dlat="+latitude+"&dlon="+longitude+"&dev=0&t=0",  
						function(e) {  
							console.log('Open system default browser failed: ' + e.message);  
						},"com.autonavi.minimap"
					);
				} else if (plus.os.name == 'iOS') {  
					plus.runtime.launchApplication({ action:"iosamap://path?sourceApplication=applicationName&sid=BGVIS1&did=BGVIS2&dlat="+latitude+"&dlon="+longitude+"&dev=0&t=0" }, function(e) {  
						console.log('Open system default browser failed: ' + e.message);  
					});  
				}
			},
			toReport(){
				var data={
					id:this.pointInfo.pollutionId,
					wryType:this.pointInfo.wryType,
					longitude:this.userLocation.longitude,
					latitude:this.userLocation.latitude,
				}
				uni.showModal({
				    title: '提示',
				    content: '确认重新记录位置？',
				    success:(res)=> {
				        if (res.confirm) {
				            util.getRequest(URL.TASK_PATROL_POINT_UPDATE_WRY_ADDRESS_DETAILED,data,(results)=>{
				            	console.log("成功")
				            	this.pointInfo.longitude=this.userLocation.longitude
				            	this.pointInfo.latitude=this.userLocation.latitude
				            	this.initMap(this.pointInfo)
				            	this.getDistance()
				            })
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style scoped>
#location{
	height: 100vh;
}
#locationMap{
	position: relative;
}
#reset{
	width: 690upx;
	height: 70upx;
	position: absolute;
	bottom: 30upx;
	left: 30upx;
	border-radius: 35upx;
	background-color: #5087FB;
	text-align: center;
	line-height: 70upx;
	color: #fff;
	font-size: 32upx;
}
#navigation{
	width: 690upx;
	position: absolute;
	bottom: 130upx;
	left: 30upx;
	border-radius: 10upx;
	background-color: #fff;
	text-align: center;
	color: #333;
	height: 129upx;
	font-size: 32upx;
}
#address{
	position: absolute;
	bottom: 199upx;
	left: 60upx;
	font-size: 32upx;
}
#address_msg{
	position: absolute;
	bottom: 160upx;
	left: 60upx;
	width: 300px;
	font-size: 24upx;
}
#distance{
	position: absolute;
	bottom: 179upx;
	right: 60upx;
	font-size: 32upx;
}
#toNavigation{
	position: absolute;
	bottom: 226upx;
	right: 70upx;
	border-radius: 50%;
	width: 83upx;
	height: 83upx;
}
</style>
