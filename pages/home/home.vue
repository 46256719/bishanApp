<template>
	<view id="home">
		<!-- <bw-swiper :swiperList="swiperList" :autoplay="false" imageKey="url" :indicatorDots="false" :w_h="750/485"></bw-swiper> -->
		<image id="home_bg" src="../../static/images/home/picture8.png" mode=""></image>
		<view class="project_title">
			<view class="project_title_first">璧山区水污染防治管理信息系统</view>
			<view class="project_title_second">绿水青山，就是金山银山</view>
		</view>
		<view class="" style="position: relative;top:-85upx;margin-bottom: -85upx;">
			<view class="header">
				<view v-for="(item,index) in tongji" :key="index">
					<view class="">{{item.srivername}}</view>
					<view class="riverType"><text>{{item.slevel}}</text>类</view>
				</view>	
			</view>
			<view id="demonstratingCompliance">
				<view class="home_title">
					<view class="home_title_left">
						水质达标情况
						<view style="padding: 5upx 10upx;background-color: #5087FB;border-radius: 5upx;margin-left: 40upx;">
							<pick-date timeType="month" @getData="getData" placeholder="请选择日期">
								<view class="dateContent" slot="content">
									<view class="">{{situationDate.year}}-{{situationDate.month}}</view>
									<image src="../../static/images/icon_date.png" class="date_icon" mode=""></image>
								</view>
							</pick-date>
						</view>
					</view>
					<view class="home_title_right" @click="toStandarDetail()"><view class="">详情</view><image class="icon_toRight" src="../../static/images/icon_more.png" mode=""></image></view>
				</view>
				<view class="demonstratingCompliance_content">
					<view class="demonstratingCompliance_list">
						<image src="../../static/images/home/guokao.png" class="demonstratingCompliance_mark" mode=""></image>
						<view class="demonstratingCompliance_list_info">
							<view class="color_000 fz30">国家考核</view>
							<view class="demonstratingCompliance_list_onStandard">
								<view class="standard_title">达标</view>
								<view class="color_000"><text class="fz30">{{examine_1.dabiaonum_now||0}}</text><text class="fz20">个</text></view>
							</view>
							<view class="demonstratingCompliance_list_unStandard">
								<view class="standard_title">未达标</view>
								<view class="color_red"><text class="fz30">{{(examine_1.total_site-examine_1.dabiaonum_now)||0}}</text><text class="fz20">个</text></view>
							</view>
						</view>
					</view>
					<view class="demonstratingCompliance_list">
						<image src="../../static/images/home/shiji.png" class="demonstratingCompliance_mark" mode=""></image>
						<view class="demonstratingCompliance_list_info">
							<view class="color_000 fz30">市控监测</view>
							<view class="demonstratingCompliance_list_onStandard">
								<view class="standard_title">达标</view>
								<view class="color_000"><text class="fz30">{{examine_3.dabiaonum_now||0}}</text><text class="fz20">个</text></view>
							</view>
							<view class="demonstratingCompliance_list_unStandard">
								<view class="standard_title">未达标</view>
								<view class="color_red"><text class="fz30">{{(examine_3.total_site-examine_3.dabiaonum_now)||0}}</text><text class="fz20">个</text></view>
							</view>
						</view>
					</view>
					<view class="demonstratingCompliance_list">
						<image src="../../static/images/home/shikong.png" class="demonstratingCompliance_mark" mode=""></image>
						<view class="demonstratingCompliance_list_info">
							<view class="color_000 fz30">市级体检</view>
							<view class="demonstratingCompliance_list_onStandard">
								<view class="standard_title">达标</view>
								<view class="color_000"><text class="fz30">{{examine_2.dabiaonum_now||0}}</text><text class="fz20">个</text></view>
							</view>
							<view class="demonstratingCompliance_list_unStandard">
								<view class="standard_title">未达标</view>
								<view class="color_red"><text class="fz30">{{(examine_2.total_site-examine_2.dabiaonum_now)||0}}</text><text class="fz20">个</text></view>
							</view>
						</view>
					</view>
					<view class="demonstratingCompliance_list">
						<image src="../../static/images/home/quji.png" class="demonstratingCompliance_mark" mode=""></image>
						<view class="demonstratingCompliance_list_info">
							<view class="color_000 fz30">区控考核</view>
							<view class="demonstratingCompliance_list_onStandard">
								<view class="standard_title">达标</view>
								<view class="color_000"><text class="fz30">{{examine_4.dabiaonum_now||0}}</text><text class="fz20">个</text></view>
							</view>
							<view class="demonstratingCompliance_list_unStandard">
								<view class="standard_title">未达标</view>
								<view class="color_red"><text class="fz30">{{(examine_4.total_site-examine_4.dabiaonum_now)||0}}</text><text class="fz20">个</text></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view id="taskSituation">
				<view class="home_title">
					<view class="">全部巡查任务</view>
					<view class="home_title_right" @click="toAllMission('process')"><view class="">详情</view><image class="icon_toRight" src="../../static/images/icon_more.png" mode=""></image></view>
				</view>
				<view style="width: 100%;overflow: auto;">
					<view class="taskSituation_content">
						<view class="taskSituation_list" @click="toAllMission('process')">
							<image src="../../static/images/home/icon_zongrenwu.png" mode=""></image>
							<view class="">总任务</view>
							<view class="color_000"><text class="fz30">{{tasks["全部任务个数"]}}</text><text class="fz20">个</text></view>
						</view>
						<view class="taskSituation_list" @click="toAllMission('process')">
							<image src="../../static/images/home/icon_shalou.png" mode=""></image>
							<view class="">进行中</view>
							<view class="color_000"><text class="fz30">{{tasks["正在进行任务个数"]}}</text><text class="fz20">个</text></view>
						</view>
						<view class="taskSituation_list" @click="toAllMission('finish')">
							<image src="../../static/images/home/icon_wancheng.png" mode=""></image>
							<view class="">已完成</view>
							<view class="color_000"><text class="fz30">{{tasks["已完成务个数"]}}</text><text class="fz20">个</text></view>
						</view> 
						<view class="taskSituation_list">
							<image src="../../static/images/home/icon_wanchenglv.png" mode=""></image>
							<view class="">完成率</view>
							<view class="color_000" v-if="((tasks['已完成务个数']/tasks['全部任务个数'])*100)<1"><text class="fz30">{{xiaoyu}}</text><text class="fz20">%</text></view>
							<view class="color_000" v-else><text class="fz30">{{(tasks["已完成务个数"]/tasks["全部任务个数"]*100).toFixed(1)}}</text><text class="fz20">%</text></view>
						</view>
						<view class="taskSituation_list" @click="toAllMission('issuesList')">
							<image src="../../static/images/home/icon_wenti.png" mode=""></image>
							<view class="">问题</view>
							<view class="color_000"><text class="fz30">{{tasks["问题数"]}}</text><text class="fz20">个</text></view>
						</view>
					</view>				
				</view>
			</view>
		</view>
	</view> 
</template>
 
<script>
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	import BwSwiper from '../../components/bw-swiper/bw-swiper'
	import pickDate from "../../components/lanxiujuan-dyDate/lanxiujuan-dyDate"
	export default {
		data() {
			var date=new Date()
			var year=date.getFullYear()
			var month=date.getMonth()
			return {
				latitude: 50.64356722667575,
				longitude: 166.57172588823506,
				tasks:"",
				setH:100,
				reportTop:0,
				kaoheType:{
					examine_1:1,
					examine_2:2,
					examine_3:3,
					examine_4:2
				},
				covers: [],
				userInfo:"",
				examine_1:{},
				examine_2:{},
				examine_3:{},
				examine_4:{},
				tongji:[],
				xiaoyu:"<1",
				isGetTime:true,
				situationDate:{
					year:month==0?year-1:year,
					month:month==0?12:month
				},
				tongjiDate:{
					year:month==0?year-1:year,
					month:month==0?12:month
				},
				swiperList:[{
					url:"../../static/images/home/picture1.png",
				},{
					url:"../../static/images/home/picture2.png",
				},{
					url:"../../static/images/home/picture3.png",
				},{
					url:"../../static/images/home/picture4.png"
				},{
					url:"../../static/images/home/picture5.png"
				},{
					url:"../../static/images/home/picture6.png"
				},{
					url:"../../static/images/home/picture7.png"
				},{
					url:"../../static/images/home/picture8.png"
				},{
					url:"../../static/images/home/picture9.png"
				}]
			}
		},
		components:{BwSwiper,pickDate},
		created(){ 
			this.userInfo=uni.getStorageSync("userInfo")
			var getH=uni.getSystemInfoSync().windowHeight
			var getW=uni.getSystemInfoSync().windowWidth
			this.setH=getH-getW/750*350;
			this.reportTop=getH-getW/750*513-10
			this.latitude=uni.getStorageSync("userLocation").latitude
			this.longitude=uni.getStorageSync("userLocation").longitude
			var that=this
			uni.onSocketMessage(function (res) {
				that.covers=JSON.parse(res.data)
			}); 
		},
		onShow() {
			this.getTask()
			uni.$emit("hideSub",false)
			if(this.isGetTime){
				this.getBaseYearMonth()
			}else{
				this.getSituation("examine_1",1,2)
				this.getSituation("examine_2",5,2)
				this.getSituation("examine_3",2,2)
				this.getSituation("examine_4",6,2)
				this.getTongji()
			}
		},
		methods: {
			getTask(){//获取首页任务情况
				util.getRequestNo(URL.TASK_INDEX2,{uid:this.userInfo.id},(results)=>{
					uni.setStorageSync("home_Ztasks",results.data)
					this.tasks=results.data
				},(results)=>{
					this.tasks=uni.getStorageSync("home_tasks")?uni.getStorageSync("home_tasks"):this.tasks
				})
			},
			getBaseYearMonth(){//获取有数据的时间
				util.getRequestPc(URL.url_PC,{url:URL.WATER_BASE_GETBASEYEARMONTH},(results)=>{
					// console.log(results)
					this.situationDate={
						year:results.year,
						month:(results.month*1)<10?"0"+results.month:results.month
					}
					this.tongjiDate={
						year:results.year,
						month:(results.month*1)<10?"0"+results.month:results.month
					}
					this.getSituation("examine_1",1,2)
					this.getSituation("examine_2",5,2)
					this.getSituation("examine_3",2,2)
					this.getSituation("examine_4",6,2)
					this.getTongji()
					this.isGetTime=false
				},(results)=>{
					// console.log(results)
					this.getSituation("examine_1",1,2)
					this.getSituation("examine_2",5,2)
					this.getSituation("examine_3",2,2)
					this.getSituation("examine_4",6,2)
					this.getTongji()
					this.isGetTime=false
				})
			},
			getTongji(){//获取首页头部情况
				var date=new Date()
				var year=date.getFullYear()
				var month=date.getMonth()
				util.getRequestPc(URL.url_PC,{url:URL.QUKONGSHUIZHITONGJI_HELIUSHUIZHITONGJI,params:"year="+this.tongjiDate.year+";month="+this.tongjiDate.month},(results)=>{
					uni.setStorageSync("home_tongji",results)
					// console.log(results)
					// console.log(URL.url_PC)
					results=this.getNum(results)
					this.tongji=results
				},(results)=>{
					this.tongji=uni.getStorageSync("home_tongji")?uni.getStorageSync("home_tongji"):this.tongji
				})
			},
			getNum(data){
				for(var i=0;i<data.length;i++){
					switch(data[i].slevel.toString()){
						case "1":
						data[i].slevel="Ⅰ";
						break;
						case "2":
						data[i].slevel="Ⅱ";
						break;
						case "3":
						data[i].slevel="Ⅲ";
						break;
						case "4":
						data[i].slevel="Ⅳ";
						break;
						case "5":
						data[i].slevel="Ⅴ";
						break;
						case "6":
						data[i].slevel="Ⅵ";
						break;
					}
				}
				return data
			},
			getData(e){
				// console.log(e)
				var date=e.split("-")
				this.situationDate={
					year:date[0],
					month:date[1]
				}
				this.getSituation("examine_1",1,2)
				this.getSituation("examine_2",5,2)
				this.getSituation("examine_3",2,2)
				this.getSituation("examine_4",6,2)
				// this.getTongji()
				// this.checkType(this.type)
			},
			getSituation(examine,ikhlx,kaohetype){
				kaohetype=this.kaoheType[examine]
				var data={
					url:URL.DAPINGSHUIZHI_SHUIZHITONGJI_KHLX,
					params:"year="+this.situationDate.year+";month="+this.situationDate.month
					+";lvltype=2;ikhlx="+ikhlx+";kaohetype="+kaohetype+";idistrictid=500227000000"
				}
				
				util.getRequestPc(URL.url_PC,data,(results) => {
					// console.log(results)
					uni.setStorageSync(examine,results)
					this[examine]=results
				},(res) => {
					this[examine]=uni.getStorageSync(examine)?uni.getStorageSync(examine):this[examine]
				})
			},
			toMission(){
				
			},
			toAllMission(nav){
				uni.navigateTo({
					url:"/pages/allMission/allMission?nav="+nav
				})
			},
			toReport(){
				uni.navigateTo({
					url:"/pages/report/report"
				})
			},
			toStandarDetail(){
				util.situationDate=this.situationDate
				uni.navigateTo({
					url:"/pages/standardDetail/standardDetail"
				})
			}
		}
	}
</script>

<style scoped>
#home{
	padding-bottom: 20upx;
	background-color: #5087fb;
	box-sizing: border-box;
	position: relative;
	min-height: 100vh;
	font-size: 24upx;
}
#home_bg{
	width: 750upx;
	height: 485upx;
	display: block;
	margin: 0;
}
.header{ 
	margin: 0upx 30upx;
	display: flex;
	justify-content: space-between;
	border-radius: 20upx;
	background-color: rgba(255,255,255,.8);
	height: 170upx;
	align-items: center;
}
.project_title{
	position: absolute;
	top:200upx;
	min-width: 600upx; 
	left: 50%;
	transform: translateX(-50%);
	color: #fff;
	font-size:42upx;
	text-align: center;
}
.project_title_first{
	border-bottom: 1upx solid #fff;
}
.project_title_second{
	letter-spacing: 18upx;
	font-size: 32upx;
}
.header>view{
	flex: 1;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items:  center;
	color: #999999;
}
.riverType{
	color: #5087fb;
	font-size: 22upx;
}
.riverType>text{
	font-size: 28upx;
}

#demonstratingCompliance{
	margin: 20upx 30upx;
	border-radius: 5upx;
	background-color: rgba(255,255,255);
	font-size: 24upx;
}
.home_title{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20upx 30upx;
	border-bottom: 1upx solid #e5e5e5;
}
.home_title_right{
	display: flex;
	align-items: center;
	color: #999;
}
.icon_toRight{
	width: 13upx;
	height: 24upx;
	margin-left: 10upx;
	vertical-align: middle;
}
.demonstratingCompliance_content{
	display: flex;
	justify-content: space-between;
	position: relative;
	padding: 40upx 30upx 0upx;
	flex-wrap: wrap;
}
.demonstratingCompliance_list{
	display: flex;
	margin-bottom: 40upx;
}
.demonstratingCompliance_mark{
	width: 100upx;
	height: 130upx;
	display: block;
	margin-right: 18upx;
	border-radius: 5upx;
	box-shadow: 0upx 5upx 10upx rgba(0,0,0,0.5);
}
.demonstratingCompliance_list_info{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 180upx;
}
.demonstratingCompliance_list_onStandard,.demonstratingCompliance_list_unStandard{
	display: flex;
	color: #999;
}
.standard_title{
	width: 100upx;
}
.color_000{
	color: #000;
}
.color_red{
	color: #ff2929;
}
.fz28{
	font-size: 28upx;
}
.fz30{
	font-size: 30upx;
}
.fz20{
	font-size: 20upx;
}
#taskSituation{
	margin: 0upx 30upx;
	background-color: #fff;
	border-radius: 5upx;
}
.taskSituation_content{
	padding: 30upx 0upx;
	/* clear: both; */
	display: flex;
	justify-content: space-between;
}
.taskSituation_list{
	text-align: center;
	/* margin-right: 24upx; */
	/* width: 84upx; */
	flex: 1;
	/* padding:0upx 23upx; */
	color: #999;
}
.taskSituation_list>image{
	width: 84upx;
	height: 84upx;
	margin: auto;
	display: block;
}
.home_title_left{
	display: flex;
	align-items: center;
	position: relative;
}
#checkDate{
	/* width: 100upx;
	height: 40upx; */
	/* position: absolute; */
	/* right: -200upx; */
	/* top: 0upx; */
}
</style>
