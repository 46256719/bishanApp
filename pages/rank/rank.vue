<template>
	<view id="rank">
		<view class="rank_header">
			<view id="navBar">
				<text>排名</text>
				<pick-date id="checkDate" timeType="month" @getData="getData" placeholder="请选择日期"></pick-date>
				<!-- <picker mode="date" fields="month" @change="checkDate">
					
				</picker> -->
			</view>
			<view id="nav">
				<view :class="(type=='department'?'nav_list on_nav_list':'nav_list')" @click="checkType('department')">部门排名</view>
				<view :class="(type=='town'?'nav_list on_nav_list':'nav_list')" @click="checkType('town')">镇街排名</view>
			</view>
			<view v-if="type=='department'" class="ranks_list" style="color: #000000;margin-top: 20upx;padding-top: 30upx;">
				<view>排名</view>
				<view>支流名称</view>
				<view>河长领导</view>
				<view>牵头部门</view>
			</view>
			<view v-else class="ranks_list" style="color: #000000;margin-top: 20upx;padding-top: 30upx;">
				<view>排名</view>
				<view>镇街</view>
				<view>扣分合计</view>
			</view>
		</view>
		
		<scroll-view id="ranks" upper-threshold="0" lower-threshold="0" scroll-y="true">
			<block v-if="type=='department'">
				<view @click="showDetail(item)" v-for="(item,index) in ranks" :key="item.id" class="ranks_list">
					<view>{{item.rank}}</view>
					<view>{{item.riverName}}</view>
					<view>{{item.riverLeader}}</view>
					<view>{{item.leadDepartment}}</view>
				</view>	
			</block>
			<block v-else>
				<view v-for="(item,index) in ranks" :key="item.id" class="ranks_list">
					<view>{{(index+1)}}</view>
					<view>{{item.townName}}</view>
					<view>{{item.total}}</view>
				</view>	
			</block>	
			<view v-if="ranks.length==0" class="noData">—————— 暂无数据 ——————</view>
		</scroll-view>
		<uni-popup ref="popup" type="center">
			<view class="detail_list">
				<view class="detail_list_title">排名：</view>
				<view class="detail_list_content">{{chooseData.rank}}</view>
			</view>
			<view class="detail_list">
				<view class="detail_list_title">支流名称：</view>
				<view class="detail_list_content">{{chooseData.riverName}}</view>
			</view>
			<view class="detail_list">
				<view class="detail_list_title">河长领导：</view>
				<view class="detail_list_content">{{chooseData.riverLeader}}</view>
			</view>
			<view class="detail_list">
				<view class="detail_list_title">牵头部门：</view>
				<view class="detail_list_content">{{chooseData.leadDepartment}}</view>
			</view>
			<view class="detail_list">
				<view class="detail_list_title">扣分合计：</view>
				<view class="detail_list_content">{{chooseData.total}}</view>
			</view>
			<view class="detail_list">
				<view class="detail_list_title">平均下降幅度：</view>
				<view class="detail_list_content">{{chooseData.averageDecline}}</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	import pickDate from "../../components/lanxiujuan-dyDate/lanxiujuan-dyDate"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				scrollH:0,
				userInfo:"",
				ranks:[],
				page:0,
				type:"department",
				date:"",
				chooseData:{}
			};
		},
		components:{pickDate,uniPopup},
		onLoad(){
			// this.userInfo=uni.getStorageSync("userInfo")
			// util.isRefreshTasksPage=true
			// var date=new Date()
			// var year=date.getFullYear()
			// var month=date.getMonth()+1
			// this.date=year.toString()+(month<10?"0"+month:month)
			this.getDepartmentRanks()
		},
		onShow() {
			// if(util.isRefreshTasksPage){
			// 	this.checkType(this.type)
			// 	uni.$emit("refreshTasksPage",false)
			// }
		},
		methods:{
			getDepartmentRanks(){//部门排名
				var sorts='[{"sort":"rank","order":"asc"}]'
				util.getRequestPc(URL.ASSESS_DEPARTMENT_LIST,{page:1,limit:10000,date:this.date,sorts},(results)=>{
					var results=results.data
					uni.setStorageSync("departmentRanks",results)
					this.ranks=results
					// this.disposeRequestData(results)
				},(results)=>{
					results=uni.getStorageSync("departmentRanks")?uni.getStorageSync("departmentRanks"):[]
					this.ranks=results
					// this.disposeRequestData(results)
				})
			},
			getData(e){
				var date=e.split("-")
				this.date=date.join("")
				this.checkType(this.type)
			},
			getTownRanks(){//镇街排名
				var sorts='[{"sort":"total","order":"asc"}]'
				util.getRequestPc(URL.ASSESS_TOWN_LIST,{page:1,limit:10000,date:this.date,sorts},(results)=>{
					var results=results.data
					uni.setStorageSync("townRanks",results)
					this.ranks=results
					// this.disposeRequestData(results)
				},(results)=>{
					results=uni.getStorageSync("townRanks")?uni.getStorageSync("townRanks"):[]
					this.ranks=results
					// this.disposeRequestData(results)
				})
			},
			disposeRequestData(results,page){
				if(results.length>0){
					this.ranks=results
				}else{
					uni.showToast({
						icon:"none",
						title:"已经没有更多数据了"
					})
				}
			},
			checkType(type){
				this.type=type
				switch(type){
					case "department":
					this.getDepartmentRanks();
					break;
					case "town":
					this.getTownRanks();
					break;
				}
			},
			scrollTol(){
				switch(this.type){
					case "department":
					this.getDepartmentRanks();
					break;
					case "town":
					this.getTownRanks();
					break;
				}
			},
			showDetail(data){
				this.chooseData=data
				this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="scss" scoped>
#rank{
	height: 100vh;
	// padding-top: 110upx;
	box-sizing: border-box;
	overflow: hidden;
	font-size: 28upx;
}
#navBar{
	position: relative;
	height: 90upx;
	padding-top: 40upx;
	line-height: 90upx;
	background-color: #5087fb;
	color: #fff;
	font-size: 36upx;
	text-align: center;
}
#checkDate{
	display: block;
	position: absolute;
	right:0upx;
	bottom: 10upx;
	width: 70upx;
	height: 70upx;
}
.rank_header{
	position: absolute;
	left: 0upx;
	top: 0upx
}
#nav{
	display: flex;
	justify-content: space-around;
	height: 88upx;
	background-color: #fff;
	padding-top: 22upx;
	width: 100vw;
}
.nav_list{
	width: 164upx;
	border-bottom: 4upx solid $uni-white-color;
	padding: 18upx 0upx 36upx;
	height: 30upx;
	line-height: 30upx;
	text-align: center;
	position: relative;
	font-size: 30upx;
}
.on_nav_list{
	border-bottom-color: $uni-blue-color;
	color: $uni-blue-color;
}
#ranks{
	background-color: #f5f5f5;
	height: 100vh;
	padding-top: 352upx;
	box-sizing: border-box;
}
.ranks_list{
	padding: 20upx 0upx;
	min-height: 40upx;
	border-bottom: 1upx solid #ececec;
	box-sizing: border-box;
	display: flex;
	color: #999999;
	justify-content: space-around;
	text-align: center;
	align-items: center;
	background-color: #fff;
}
.ranks_list>view:nth-of-type(1){
	width: 150upx;
}
.ranks_list>view:nth-of-type(2){
	width: 150upx;
}
.ranks_list>view:nth-of-type(3){
	width: 150upx;
}
.ranks_list>view:nth-of-type(4){
	width: 300upx;
}
.detail_list{
	width: 100%;
	display: flex;
	line-height: 60upx;
	border-bottom: 1upx solid #E5E5E5;
}
.detail_list:last-child{
	border-bottom: 0upx solid #E5E5E5;
}
.detail_list_title{
	width: 200upx;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.detail_list_content{
	width: 430upx;
}
</style>
