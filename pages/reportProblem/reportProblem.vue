<template>
	<view id="reportProblem">
		<block v-show="!isShowMode||nowProblem.needDetail!=1">
			<view class="problem_title">请选择填写你要上报的问题：</view>
			<view :class="[!isShowMode||nowProblem.needDetail!=1?'':'hideStyle','problemAll']">
				<checkbox-group @change="checkProblem">
					<block v-for="(item,index) in problems" :key="item.id">
						<view class="problem_list">
							<view class="problem_list_left">
								<view style="width: 50upx;margin-right: 20upx;" v-if="item.isRadio==1"><checkbox :value="item.id"/></view>
								<view class="" style="width: 530upx;">{{item.problemTitle}}?</view>
							</view>
							<view v-for="child in upProblemId" :key="child" v-if="item.id==child&&item.needDetail==1" style="color: #5087FB;" @click="showMode(item.id)">详情</view>
						</view>
					</block>
				</checkbox-group>
			</view>
		</block>
		<view class="footer">
			<view class="confirm" @click="confirm()" style="width: 100%;height: 121upx;line-height: 121upx;border-radius:0;">上报</view>
		</view>
		<view id="problemMode" v-if="isShowMode&&nowProblem.needDetail==1">
			<block>
				<mode1 :chooseProblem="chooseProblem" :nowProblem="nowProblem" v-on:hideMode="hideMode" v-on:confirmMdoe="confirmMdoe"></mode1>
			</block>
		</view>
	</view>
</template>
<script>
	import mode1 from "../../components/problemMode/mode1.vue"
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	export default {
		data() {
			return {
				pollutionInfo:{},
				userInfo:"",
				problems:"",
				isShowMode:false,
				upProblemId:[],
				upProblems:[],
				chooseProblem:"",
				nowProblem:{},
				longitude:"",
				latitude:""
			};
		},
		components:{mode1},
		onReady(){
			this.userInfo=uni.getStorageSync("userInfo")
			this.longitude=uni.getStorageSync("userLocation").longitude
			this.latitude=uni.getStorageSync("userLocation").latitude
			// console.log(this.userInfo)
		},
		onLoad(options) {
			this.pollutionInfo=util.pollutionInfo
			// console.log(this.pollutionInfo)
			this.getProblem(this.pollutionInfo.id)
		},
		methods:{
			getProblem(id){//获取污染源问题类型
				util.getRequest(URL.TASK_PATROL_POINT_GET_PROBLEM,{pointId:id},(results)=>{
					// console.log(results)
					this.problems=results.data
					uni.setStorageSync("reportProblem_"+id,this.problems)
				},(results)=>{
					this.problems=uni.getStorageSync("reportProblem_"+id)?uni.getStorageSync("reportProblem_"+id):[];
				})
			},
			showMode(id){
				this.chooseProblem=this.getChooseProblem(id)
				this.nowProblem=this.getNowProblem(id)
				this.isShowMode=true
			},
			hideMode(data){
				this.isShowMode=false
			},
			confirmMdoe(data){
				data.id=this.chooseProblem.id
				data.problemTitle=this.nowProblem.problemTitle;
				data.pointId=this.pollutionInfo.id;
				data.departmentId=this.pollutionInfo.wryGlflx;
				data.orgId=this.pollutionInfo.dwId;
				data.problemStatus=1;
				data.problemLevel=1;
				data.problemType=1;
				data.longitude=this.longitude;
				data.latitude=this.latitude;
				data.creatorId=this.userInfo.id;
				data.creatorName=this.userInfo.sname
				this.upProblems[this.upProblemId.indexOf(this.chooseProblem.id)]=data
				this.hideMode(data)
			},
			checkProblem(e){
				var arr=this.upProblemId
				if(e.detail.value.length>this.upProblemId.length){
					var id=e.detail.value[e.detail.value.length-1]
					this.nowProblem=this.getNowProblem(id)
					var problemDetail=this.nowProblem.problemTitle
					var data={
						id:id,
						problemDetail,
						problemTitle:this.nowProblem.problemTitle,
						pointId:this.pollutionInfo.id,
						departmentId:this.pollutionInfo.wryGlflx,
						orgId:this.pollutionInfo.dwId,
						problemStatus:1,
						problemLevel:1,
						problemType:1,
						longitude:this.longitude,
						latitude:this.latitude,
						creatorId:this.userInfo.id,
						creatorName:this.userInfo.sname
					}
					this.upProblems.push(data)
					this.showMode(id)
				}else{
					this.upProblems.splice(this.noFondId(e.detail.value,arr),1)
				}
				this.upProblemId=e.detail.value
			},
			noFondId(nowArr,oldArr){
				var arr=oldArr
				for(var i=0;i<nowArr.length;i++){
					if(oldArr.indexOf(nowArr[i])!=-1){
						oldArr.splice(oldArr.indexOf(nowArr[i]),1)
					}
				}
				return arr.indexOf(oldArr[0])
			},
			getNowProblem(id){
				for(var i=0;i<this.problems.length;i++){
					if(this.problems[i].id==id){
						return this.problems[i]
					}
				}
			},
			getChooseProblem(id){
				for(var i=0;i<this.upProblems.length;i++){
					if(this.upProblems[i].id==id){
						return this.upProblems[i]
					}
				}
			},
			confirm(){//上传
				util.upProblemTeams(this.upProblems)
				uni.showLoading({mask:true})
				setTimeout(function(){
					uni.hideLoading()
					uni.$emit("refreshPollutionPage",true)
					uni.navigateBack()
				},500)
				// var data=JSON.stringify(this.upProblems)
				// util.getRequest(URL.TASK_PATROL_POINT_PROBLEM_ADD_BATCH,{data},(results)=>{
				// 	if(results.code==1){
				// 		util.showSuccess("上传成功",function(){
				// 			uni.navigateBack({})
				// 		})
				// 	}
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
#reportProblem{
	font-size: 28upx;
	background-color: #f2f2f2;
	padding-bottom: 150upx;
	min-height: 100vh;
	box-sizing: border-box
}
.problem_title{
	line-height: 120upx;
	padding-left: 20upx;
	margin-bottom: 20upx;
	font-size: 36upx;
	background-color: #fff
}
.problem_list{
	padding: 20upx 30upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1upx solid #e3e3e3;
	background-color: #fff
}
.problem_list_left{
	display: flex;
	width: 600upx;
	text-align: left;
	line-height: 30upx
}
#problemMode{
	position: fixed;
	left: 0upx;
	top:0upx;
	height: 100vh;
	background-color: #fff;
	width: 100vw;
	z-index: 1000
}
.hideStyle{
	height:100upx;
	overflow:hidden
}
</style>
