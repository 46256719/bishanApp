<template>
	<view id="standarDetail">
		<view class="standarDetail_header">
			<view class="header_left" @click="toBack()">
				<image src="../../static/images/back_icon.png" class="back" mode=""></image>
			</view>
			<view class="header_mid">详情</view>
			<view class="header_right">
				<pick-date id="checkDate" timeType="month" @getData="getData" placeholder="请选择日期">
					<view class="dateContent" slot="content">
						<view class="">{{date.year}}-{{date.month}}</view>
						<image src="../../static/images/icon_date.png" class="date_icon" mode=""></image>
					</view>
				</pick-date>
			</view>
		</view>
		<scroll-view class="standarDetail_content" scroll-y>
			<view class="standarDetail_list">
				<view class="standarDetail_list_header">
					<view class="title">国考</view>
					<view class=""><text :class="type.examine_0==1?'biaozhun':''" @click="checkType('examine_0',1,1)">III类标准 </text> / <text :class="type.examine_0==2?'biaozhun':''" @click="checkType('examine_0',1,2)">当年目标</text></view>
				</view>
				<view class="standarDetail_list_msg">
					<view class="canvas_pie">
						<canvas canvas-id="examine_0" id="examine_0" class="charts"></canvas>
					</view>
					<view class="msg_num">
						<view class="" style="color: #000000;">
							<text style="font-size: 50upx;">{{examine_0.total_site||"-"}}</text>个
						</view>
						<view class="">断面</view>
					</view>
					<view class="msg_num">
						<view class="" style="color: #ff0000;">
							<text style="font-size: 50upx;">{{(examine_0.total_site-examine_0.dabiaonum_now)||"-"}}</text>个
						</view>
						<view class="">未达标</view>
					</view>
				</view>
				<!-- <view class="targetValue">目标值90.5%</view> -->
			</view>
			<view class="standarDetail_list">
				<view class="standarDetail_list_header">
					<view class="title">市级考核</view>
					<view class=""><text :class="type.examine_1==1?'biaozhun':''" @click="checkType('examine_1',2,1)">III类标准 </text> / <text :class="type.examine_1==2?'biaozhun':''" @click="checkType('examine_1',2,2)">当年目标</text></view>
				</view>
				<view class="standarDetail_list_msg">
					<view class="canvas_pie">
						<canvas canvas-id="examine_1" id="examine_1" class="charts"></canvas>
					</view>
					<view class="msg_num">
						<view class="" style="color: #000000;">
							<text style="font-size: 50upx;">{{examine_1.total_site||"-"}}</text>个
						</view>
						<view class="">断面</view>
					</view>
					<view class="msg_num">
						<view class="" style="color: #ff0000;">
							<text style="font-size: 50upx;">{{(examine_1.total_site-examine_1.dabiaonum_now)||"-"}}</text>个
						</view>
						<view class="">未达标</view>
					</view>
				</view>
				<!-- <view class="targetValue">目标值90.5%</view> -->
			</view>
			<view class="standarDetail_list">
				<view class="standarDetail_list_header">
					<view class="title">市控考核</view>
					<view class=""><text :class="type.examine_2==1?'biaozhun':''" @click="checkType('examine_2',5,1)">III类标准 </text> / <text :class="type.examine_2==2?'biaozhun':''" @click="checkType('examine_2',5,2)">当年目标</text></view>
				</view>
				<view class="standarDetail_list_msg">
					<view class="canvas_pie">
						<canvas canvas-id="examine_2" id="examine_2" class="charts"></canvas>
					</view>
					<view class="msg_num">
						<view class="" style="color: #000000;">
							<text style="font-size: 50upx;">{{examine_2.total_site||"-"}}</text>个
						</view>
						<view class="">断面</view>
					</view>
					<view class="msg_num">
						<view class="" style="color: #ff0000;">
							<text style="font-size: 50upx;">{{(examine_2.total_site-examine_2.dabiaonum_now)||"-"}}</text>个
						</view>
						<view class="">未达标</view>
					</view>
					<view class="msg_num" style="margin-right: 0upx;">
						<view class="" style="color: #ff0000;">
							<text style="font-size: 50upx;">{{examine_2.liewunum||"-"}}</text>个
						</view>
						<view class="">劣V</view>
					</view>
				</view>
				<!-- <view class="targetValue">目标值90.5%</view> -->
			</view>
			<view class="standarDetail_list">
				<view class="standarDetail_list_header">
					<view class="title">区控考核</view>
					<view class=""><text :class="type.examine_3==1?'biaozhun':''" @click="checkType('examine_3',6,1)">III类标准 </text> / <text :class="type.examine_3==2?'biaozhun':''" @click="checkType('examine_3',6,2)">当年目标</text></view>
				</view>
				<view class="standarDetail_list_msg">
					<view class="canvas_pie">
						<canvas canvas-id="examine_3" id="examine_3" class="charts"></canvas>
					</view>
					<view class="msg_num">
						<view class="" style="color: #000000;">
							<text style="font-size: 50upx;">{{examine_3.total_site||"-"}}</text>个
						</view>
						<view class="">断面</view>
					</view>
					<view class="msg_num">
						<view class="" style="color: #ff0000;">
							<text style="font-size: 50upx;">{{(examine_3.total_site-examine_3.dabiaonum_now)||"-"}}</text>个
						</view>
						<view class="">未达标</view>
					</view>
					<view class="msg_num" style="margin-right: 0upx;">
						<view class="" style="color: #ff0000;">
							<text style="font-size: 50upx;">{{examine_3.liewunum||"-"}}</text>个
						</view>
						<view class="">劣V</view>
					</view>
				</view>
				<!-- <view class="targetValue">目标值90.5%</view> -->
			</view>
		</scroll-view>
		
		
<!-- 		<view class="standarDetail_list">
			<view class="standarDetail_list_header">
				<view class="title">河流</view>
			</view>
			<view class="heliu">
				<view class="">30条市考</view>
				<view class="">30条市考</view>
				<view class="">30条市考</view>
				<view class="">30条市考</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	import uCharts from '../../js_sdk/u-charts/u-charts/u-charts.js';
	import pickDate from "../../components/lanxiujuan-dyDate/lanxiujuan-dyDate"
	var _self;
	var canvaColumn=null;
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				serverData:'',
				examine_0:{},
				examine_1:{},
				examine_2:{},
				examine_3:{},
				userInfo:{},
				type:{
					examine_0:1,
					examine_1:1,
					examine_2:1,
					examine_3:1
				},
				date:{
					year:"",
					month:""
				}
			}
		},
		components:{pickDate},
		onLoad() {
			_self = this;
			this.date=util.situationDate
			this.userInfo=uni.getStorageSync("userInfo")
			// uni.getSystemInfo({
			// 	success: function (res) {
			// 		if(res.pixelRatio>1){
			// 			//正常这里给2就行，如果pixelRatio=3性能会降低一点
			// 			//_self.pixelRatio =res.pixelRatio;
			// 			console.log(res.pixelRatio)
			// 			_self.pixelRatio =2;
			// 		}
			// 	}
			// });
			this.cWidth=uni.upx2px(150);
			this.pixelRatio=uni.upx2px(150)/150;
			this.getStandarDetail("examine_0",1,1)
			this.getStandarDetail("examine_1",2,1)
			this.getStandarDetail("examine_2",5,1)
			this.getStandarDetail("examine_3",6,1)
		},
		methods: {
			getStandarDetail(examine,ikhlx,kaohetype){
				var date=new Date()
				var year=date.getFullYear()
				var month=date.getMonth()
				
				var data={
					url:URL.DAPINGSHUIZHI_SHUIZHITONGJI_KHLX,
					params:"year="+this.date.year+";month="+this.date.month
					+";lvltype=2;ikhlx="+ikhlx+";kaohetype="+kaohetype+";idistrictid=500227000000"
				}
				uni.showLoading({mask:true})
				uni.request({
					url: URL.url_PC, //仅为示例，并非真实接口地址。
					data: data,
					method:"GET",
					success: (res) => {
						var results=res.data
						this[examine]=results
						this.getCanvas(examine,results)
					},
					complete(){
						uni.hideLoading()
					}
				})
			},
			getData(e){//获取时间
				var date=e.split("-")
				this.date={
					year:date[0],
					month:date[1]
				}
				this.getStandarDetail("examine_0",1,this.type["examine_0"])
				this.getStandarDetail("examine_1",2,this.type["examine_1"])
				this.getStandarDetail("examine_2",5,this.type["examine_2"])
				this.getStandarDetail("examine_3",6,this.type["examine_3"])
			},
			toBack(){
				uni.navigateBack({})
			},
			getCanvas(canvasId,data){
				canvaColumn=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type:"ring",
					fontSize:5,
					title: {
						name: (data.dabiaonum_now/data.total_site*100).toFixed(1)+"%",
						color: '#ffd918',
						offsetY:0,
						fontSize:11
					},
					legend:false,
					dataLabel:false,
					dataPointShape:false,
					disablePieStroke: true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					width: this.cWidth,
					height: this.cWidth,
					animation: true,
					extra: {
						pie: {
						  offsetAngle: 0,
						  ringWidth:_self.pixelRatio*5,
						  radius:_self.pixelRatio*60
						}
					},
					series:[{
						"name": "未达标",
						"data": data.total_site-data.dabiaonum_now,
						"color":"#e3e3e3"
					  },{
						"name": "达标",
						"data": data.dabiaonum_now,
						"color":"#ffd918"
					  }]
				});
			},
			checkType(examine,ikhlx,kaohetype){
				this.type[examine]=kaohetype;
				this.getStandarDetail(examine,ikhlx,kaohetype)
			}
		}
	}
</script>

<style scoped>
#standarDetail{
	/* min-height: 100vh; */
	box-sizing: border-box;
	/* padding-bottom: 20upx; */
	background-color: #F2F2F2;
	color: rgb(153,153,153);
	font-size: 28upx;
}
.standarDetail_header{
	background-color: #5087fb;
	color: #fff;
	height: 130upx;
	font-size: 36upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40upx 30upx 0upx;
	box-sizing: border-box;
	position: absolute;
	top: 0upx;
	bottom: 0upx;
	z-index: 100000;
	width: 100vw;
}
.header_left{
	text-align: left;
	width: 280upx;
}
.header_mid{
	text-align: center;
	width: 100upx;
}
.header_right{
	width: 280upx;
	display: flex;
	justify-content: flex-end;
}
.back{
	width: 20.4upx;
	height: 36upx;
}
.standarDetail_list{
	padding: 30upx;
	background-color: #fff;
	margin-bottom: 20upx;
}
.standarDetail_list:last-child{
	margin-bottom: 0upx;
}
.standarDetail_list_header{
	display: flex;
	justify-content: space-between;
}
.biaozhun{
	color: #5087fb;
}
.canvas_pie{
	width: 150upx;
	height: 150upx;
	margin-right: 20upx;
}
.charts{
	width: 100%;
	height: 100%;
}
.targetValue{
	font-size: 24upx;
	width: 150upx;
	text-align: center;
}
.standarDetail_list_msg{
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	margin-top: 10upx;
}
.msg_num{
	margin:0upx 40upx;
}
.msg_num>view:last-child{
	margin-top: 10upx;
	margin-bottom: 5upx;
}
.heliu{
	display: flex;
	justify-content: space-between;
	padding: 28upx 0upx;
	margin-top: 30upx;
}
.heliu>view{
	width: 157upx;
	height: 70upx;
	text-align: center;
	line-height: 70upx;
	color: #333;
	background-color: #fafafa;
}
.standarDetail_content{
	height: 100vh;
	box-sizing: border-box;
	padding-top: 130upx;
}
</style>
