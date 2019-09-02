<template>
	<view id="river">
		<map id="riverMap" @markertap="bindTap" @controltap="bindControltap" :controls="controls" style="width: 100%;height: 100vh;" :markers="covers" :latitude="latitude" :longitude="longitude">
			<cover-view id="searchBind" @click="showSearch()">请输入污染源名称搜索</cover-view>
			<!-- <cover-image id="mapType" @click="showTypeMap()" src="../../static/images/icon_typeMap.png"></cover-image> -->
			<!-- <cover-view id="zhou">周</cover-view> -->
			<!-- <cover-view id="xun">巡</cover-view> -->
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
				latitude: "",
				longitude: "",
				checkTypeMap:"",
				mapContext:"",
				controls:[],
				covers:[],
				searchSub:"",
				allShowWry:{
					WRY_BZ_LIST:[],
					WRY_COMPANY_LIST:[],
					WRY_RHKPWK_LIST:[],
					WRY_RHKPWD_LIST:[],
					WRY_JZGD_LIST:[],
					WRY_QTHY_LIST:[],
					WRY_JCDW_LIST:[],
					WRY_YLJG_LIST:[],
					WRY_XQYZ_LIST:[],
					WRY_TZC_LIST:[],
					WRY_SHUIKU_LIST:[],
					WRY_SPT_LIST:[],
					WRY_YYC_LIST:[],
					WRY_JMJZJZD_LIST:[],
					WRY_XSLW_LIST:[],
					WRY_XCC_LIST:[],
					WRY_CYHY_LIST:[],
					WRY_NMSC_LIST:[],
					WRY_WSCLC_LIST:[],
					WRY_ZZYFLDJD_LIST:[],
					WRY_SMYSYZDH_LIST:[],
					search:[]
				},
				isWryUp:{
					WRY_BZ_LIST:true,
					WRY_COMPANY_LIST:true,
					WRY_RHKPWK_LIST:true,
					WRY_RHKPWD_LIST:true,
					WRY_JZGD_LIST:true,
					WRY_QTHY_LIST:true,
					WRY_JCDW_LIST:true,
					WRY_YLJG_LIST:true,
					WRY_XQYZ_LIST:true,
					WRY_TZC_LIST:true,
					WRY_SHUIKU_LIST:true,
					WRY_SPT_LIST:true,
					WRY_YYC_LIST:true,
					WRY_JMJZJZD_LIST:true,
					WRY_XSLW_LIST:true,
					WRY_XCC_LIST:true,
					WRY_CYHY_LIST:true,
					WRY_NMSC_LIST:true,
					WRY_WSCLC_LIST:true,
					WRY_ZZYFLDJD_LIST:true,
					WRY_SMYSYZDH_LIST:true
				}
			}
		},
		onLoad(){
			this.userLocation=uni.getStorageSync("userLocation")
			var wgs84togcj02=mapTool.wgs84togcj02(this.userLocation.longitude,this.userLocation.latitude)
			this.latitude=wgs84togcj02[1];
			this.longitude=wgs84togcj02[0];
		},
		onReady() {
			this.init()
		},
		onShow() {
			if(!!this.mapContext.$getAppMap){
				this.mapContext.$getAppMap().showUserLocation(true)
			}
		},
		methods: {
			init(){
				this.mapContext=uni.createMapContext("riverMap")
				this.mapContext.$getAppMap().showUserLocation(true)
				util.subNvue.checkTypeMap = uni.getSubNVueById('checkTypeMap')
				util.subNvue.searchSub = uni.getSubNVueById('search')
				util.subNvue.detailSub = uni.getSubNVueById('detail')
				var screenWidth=uni.getSystemInfoSync().screenWidth
				var coefficient=screenWidth/750
				this.controls=[
					{
						id:"mapType",
						position:{
							width: 72*coefficient,
							height: 72*coefficient,
							left: 658*coefficient,
							top:110*coefficient
						},
						iconPath:"/static/images/icon_typeMap.png",
						clickable:true
					}
				]
				uni.$on("checkWry",(url)=>{
					this.getWrys(url)
				})
				uni.$on("upWry",(url)=>{
					for(var index in this.isWryUp){
						this.isWryUp[index]=true
					}
				})
				uni.$on("clearWry",(url)=>{
					this.allShowWry[url]=[]
					this.showWry(url)
				})
				uni.$on("closeSub",(url)=>{
					util.subNvue.checkTypeMap.hide('slide-out-right',300)
				})
				uni.$on("closeSearch",(type)=>{
					util.subNvue.searchSub.hide('slide-out-top',300)
				})
				uni.$on("closeDetail",(type)=>{
					util.subNvue.detailSub.hide('slide-out-bottom',300)
				})
				uni.$on("chooseMapType",(type)=>{
					this.mapContext.$getAppMap().setMapType(type)
				})
				uni.$on("onPollution",(pollution)=>{
					this.covers=[]
					var wgs84togcj02=mapTool.wgs84togcj02(pollution.wryLongitude,pollution.wryLatitude)
					var point = new plus.maps.Point(wgs84togcj02[0],wgs84togcj02[1]);
					this.mapContext.$getAppMap().centerAndZoom(point,22)
					this.allShowWry.search=[{
						id:pollution.wryCode,
						name:pollution.wryName,
						districtname:pollution.wryAddress,
						latitude: pollution.wryLatitude,
						longitude: pollution.wryLongitude
					}]
					for(var index in this.allShowWry){
						this.covers=this.covers.concat(this.allShowWry[index])
					}
					util.subNvue.detailSub.show('slide-in-bottom',300, function(res){});
					uni.$emit("showDetail",this.allShowWry.search[0])
				})
			},
			showTypeMap(){
				util.subNvue.checkTypeMap.show('slide-in-right',300, function(res){});
			},
			showSearch(){
				util.subNvue.searchSub.show('slide-in-top',300, function(res){});
				uni.$emit("checkFocus",true)
			},
			getIcon(url){
				switch(url){
					case "WRY_BZ_LIST":
					url="bz";
					break
					case "WRY_COMPANY_LIST":
					url="gyqy";
					break
					case "WRY_RHKPWK_LIST":
					url="rhpwk"
					break
					case "WRY_RHKPWD_LIST":
					url="rhpwd"
					break
					case "WRY_JZGD_LIST":
					url="jzgd"
					break
					case "WRY_QTHY_LIST":
					url="qthy"
					break
					case "WRY_JCDW_LIST":
					url="jcdw"
					break
					case "WRY_YLJG_LIST":
					url="yljg"
					break
					case "WRY_XQYZ_LIST":
					url="xqyz"
					break
					case "WRY_TZC_LIST":
					url="tzc"
					break
					case "WRY_SHUIKU_LIST":
					url="sk"
					break
					case "WRY_SPT_LIST":
					url="spt"
					break
					case "WRY_YYC_LIST":
					url="yyc"
					break
					case "WRY_JMJZJZD_LIST":
					url="jmjzjzd"
					break
					case "WRY_XSLW_LIST":
					url="xslwqy"
					break
					case "WRY_XCC_LIST":
					url="xcc"
					break
					case "WRY_CYHY_LIST":
					url="cyhy"
					break
					case "WRY_NMSC_LIST":
					url="nmsc"
					break
					case "WRY_WSCLC_LIST":
					url="wsclc"
					break
					case "WRY_ZZYFLDJD_LIST":
					url="zzyfldjd"
					break
					case "WRY_SMYSYZDH_LIST":
					url="10myszzdh"
					break
				}
				return url
			},
			getWrys(url){
				if(this.isWryUp[url]){
					uni.showLoading({mask:true})
					// console.log(URL[url])
					util.getRequestPc(URL.url_PC,{url:URL[url]},(results)=>{
						uni.hideLoading()
						if(url=="WRY_WSCLC_LIST"){
							results=results.data
						}
						uni.setStorageSync(url,results)
						this.allShowWry[url]=results
						this.isWryUp[url]=false
						this.showWry(url)
					},(results)=>{
						this.allShowWry[url]=uni.getStorageSync(url)?uni.getStorageSync(url):this.allShowWry[url]
						this.showWry(url)
						uni.hideLoading()
					})
				}else{
					this.allShowWry[url]=uni.getStorageSync(url)?uni.getStorageSync(url):this.allShowWry[url]
					this.showWry(url)
				}
				
				
			},
			bindTap(e){
				// console.log(e.markerId)
				util.subNvue.detailSub.show('slide-in-bottom',300, function(res){});
				uni.$emit("showDetail",this.getPollution(e.markerId))
			},
			getPollution(id){
				for (var i=0;i<this.covers.length;i++) {
					if(id==this.covers[i].id){
						return this.covers[i]
					}
				}
			},
			bindControltap(e){
				if(e.controlId=="mapType"){
					util.subNvue.checkTypeMap.show('slide-in-right',300, function(res){});
				}
			},
			showWry(k){
				this.covers=[]
				var data=this.allShowWry[k]
				for(var i=0;i<data.length;i++){
					// if(data[i].code=="cyhy2829"){
					// 	console.log(data[i])
					// }
					if(k=="WRY_TZC_LIST"){
						data[i]={
							id:k+data[i].id,
							name:data[i].name,
							districtname:data[i].districtname,
							latitude: data[i].latitude,
							longitude: data[i].longitude,
							iconPath: '../../static/images/riverMap/icon_'+this.getIcon(k)+'.png'
						}
					}else{
						data[i]={
							id:k+data[i].id,
							name:data[i].name,
							districtname:data[i].districtname,
							latitude: data[i].saddresssy,
							longitude: data[i].saddresssx,
							iconPath: '../../static/images/riverMap/icon_'+this.getIcon(k)+'.png'
						}
					}
				}
				this.allShowWry[k]=data
				for(var index in this.allShowWry){
					this.covers=this.covers.concat(this.allShowWry[index])
				}
			}
		}
	}
</script>

<style>
#river{
	font-size: 30upx;
	position: relative;
}
#searchBind{
	height: 70upx;
	margin: 20upx;
	background-color: #FFFFFF;
	border-radius: 10upx;
	text-align: center;
	line-height: 70upx;
	color: #999999;
}
#mapType{
	width: 72upx;
	height: 72upx;
	border-radius: 10upx;
	position: absolute;
	right: 20upx;
	top:110upx;
}
#zhou{
	width: 72upx;
	height: 72upx;
	border-radius: 10upx;
	line-height: 72upx;
	text-align: center;
	background-color: #fff;
	color: #444;
	position: absolute;
	right: 20upx;
	top:202upx;
	font-size: 36upx;
}
#xun{
	width: 72upx;
	height: 72upx;
	border-radius: 10upx;
	line-height: 72upx;
	text-align: center;
	background-color: #fff;
	color: #444;
	position: absolute;
	right: 20upx;
	top:294upx;
	font-size: 36upx;
}
</style>
