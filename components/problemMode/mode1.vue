<template>
	<view class="mode1">
		<scroll-view style="height: 100vh;padding-bottom: 122upx;box-sizing: border-box;" :scroll-y="true">
			<view class="content">
				<view class="title">描述详情</view>
				<textarea name="" :fixed="true" placeholder="最多输入200个文字" :value="problemDetail" @input="inpDetail" maxlength="200" class="describe"></textarea>
			</view>
			<view class="content" v-if="nowProblem.needRectification==1">
				<view class="title">整改措施</view>
				<textarea name="" :fixed="true" placeholder="最多输入200个文字" :value="rectification" @input="inpRectification" maxlength="200" class="describe"></textarea>
			</view>
			<!-- <view class="content" v-if="nowProblem.needRectificationProgress==1">
				<view class="title">整改进度</view>
				<textarea name="" :fixed="true" placeholder="最多输入200个文字" :value="rectificationProgress" @input="inpRectificationProgress" maxlength="200" class="describe"></textarea>
			</view> -->
			<view v-if="nowProblem.needRectificationExpire==1" class="content" style="display: flex;justify-content: space-between;align-items: center;padding: 30upx;">
				<view class="title">整改期限</view>
				<picker mode="date" @change="bindRectificationExpire" :value="rectificationExpire">
					<view class="showDate">{{rectificationExpire}}</view>
				</picker>
			</view>
			<view class="content">
				<view class="title">处理意见</view>
				<textarea name="" :fixed="true" placeholder="最多输入200个文字" :value="disposeSuggest" @input="inpDisposeSuggest" maxlength="200" class="describe"></textarea>
			</view>
			<view class="pictures">
				<view class="takingPictures" @click="takingPictures()"><image style="width: 46upx;height: 38upx;" src="/static/images/icon_takePicture.png" mode=""></image></view>
				<view class="picture_list" v-for="(item,index) in pictures" :key="index">
					<image :src="item" mode="aspectFill" @click="previewImage(pictures,index)"></image>
					<image class="del" @click="delPicture(index)" src="/static/images/icon_ban.png" mode=""></image>
				</view>
			</view>
		</scroll-view>
		<view class="footer">
			<view class="cancel" @click="cancel()">取消</view>
			<view class="confirm" @click="confirm()">确定</view>
		</view>
		<water-mark v-if="imgUrl" @getPhotoUrl="getPhotoUrl" :imgUrl="imgUrl"></water-mark>
	</view>
</template>

<script>
	import URL from "../../static/js/interface.js"
	import util from "../../static/js/utils.js"
	import waterMark from "../createWaterMark/createWaterMark"
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				problemDetail:"",
				rectification:"",
				rectificationProgress:"",
				rectificationExpire:currentDate,
				disposeSuggest:"",
				pictures:[],
				imgUrl:""
			};
		},
		props:["chooseProblem","nowProblem"],
		onReady(){
			// console.log(this.chooseProblem)
			this.problemDetail=this.chooseProblem.problemDetail?this.chooseProblem.problemDetail:""
			this.rectification=this.chooseProblem.rectification?this.chooseProblem.rectification:""
			this.rectificationProgress=this.chooseProblem.rectificationProgress?this.chooseProblem.rectificationProgress:""
			this.rectificationExpire=this.chooseProblem.rectificationExpire?this.chooseProblem.rectificationExpire:this.rectificationExpire
			this.disposeSuggest=this.chooseProblem.disposeSuggest?this.chooseProblem.disposeSuggest:""
			this.pictures=this.chooseProblem.problemPhoto?this.chooseProblem.problemPhoto.split(";"):[]
		},
		components:{waterMark},
		methods:{
			delPicture(index){
				var pictures=this.pictures
				pictures.splice(index,1)
				this.pictures=pictures
			},
			previewImage(data,index){//预览照片
				uni.previewImage({
					current:index,
					urls: data,
					fail(res){
						console.log(res)
					}
				});
			},
			inpDetail(e){
				this.problemDetail=e.detail.value
			},
			inpRectification(e){
				this.rectification=e.detail.value
			},
			inpRectificationProgress(e){
				this.rectificationProgress=e.detail.value
			},
			bindRectificationExpire(e){
				this.rectificationExpire=e.target.value
			},
			inpDisposeSuggest(e){
				this.disposeSuggest=e.target.value
			},
			takingPictures(){
				var that=this
				uni.chooseImage({
					count: 1, //可以选择图片的张数
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //从相册选择  默认是两个都有
					success:  (res)=> {
						console.log(res);
						// this.pictures.push(res.tempFilePaths[0]) 
						this.imgUrl=res.tempFilePaths[0]
					}
				});
			},
			getImgUrl(url){//获取图片地址
				util.uploadFile(URL.UPLOAD_UPLOAD,url,(results)=>{
					// console.log(results)
					// results=JSON.parse(results)
					// console.log(results.data)
					this.pictures.push(results.data)
				})
			},
			getPhotoUrl(url){
				this.imgUrl=""
				this.pictures.push(url)
			},
			cancel(){
				this.$emit("hideMode")
			},
			confirm(){
				if(this.pictures.length==0){
					uni.showToast({
						icon:"none",
						title:"请拍照上传！"
					})
					return
				}
				var data={
					"problemDetail":this.problemDetail,
					"problemPhoto":this.pictures.join(";"),
					"rectificationMeasure":this.rectification,
					"rectificationProgress":this.rectificationProgress,
					"rectificationExpire":this.nowProblem.needRectificationExpire==1?this.rectificationExpire:"",
					"disposeSuggest":this.disposeSuggest
				}
				this.$emit("confirmMdoe",data)
			},
			getDate(type) {
				var date = new Date();
				var time=date.getTime()+7*24*60*60*1000
				date=new Date(time)
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style scoped>
.mode1{
	background-color: #F5F5F5;
	min-height: 100vh;
	color: #333333;
	font-size: 28upx;
	/* padding-bottom: 122upx; */
	/* box-sizing: border-box; */
}
.content{
	padding: 30upx 0upx 10upx 30upx;
	background-color: #FFFFFF;
	margin-bottom: 20upx;
}
.describe{
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
	/* margin-top: 20upx; */
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
.showDate{
	padding: 20upx;
	background-color: #f2f2f2;
	border-radius: 10upx;
}
</style>
