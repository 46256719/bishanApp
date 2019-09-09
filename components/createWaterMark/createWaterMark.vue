<template name="createWaterMark">
	<view class="createWaterMark">
		<view class="createWaterMark_content" :style="{'height':imgInfo.height+'px'}">
			<canvas canvas-id="waterMark"></canvas>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				imgInfo:{},
				screenW:""
			}
		},
		props: ['imgUrl'],
		created(){
			// console.log(this.imgUrl)
			this.getImgInfo(this.imgUrl)
			this.screenW=uni.getSystemInfoSync().screenWidth
		},
		onShow() {
			// console.log(this.imgUrl)
		},
		methods:{
			getImgInfo(url){
				uni.getImageInfo({
				    src: url,
				    success: (results)=> {
				        // console.log(results.width);
				        // console.log(results.height);
				        // console.log(results.path);
						
						this.imgInfo={
							path:results.path,
							width:this.screenW,
							height:results.height/results.width*this.screenW
						}
						this.drawMark(this.imgInfo)
				    }
				});
			},
			drawMark(data){
				var ctx=uni.createCanvasContext("waterMark",this)
				ctx.drawImage(data.path,0,0,data.width,data.height)
				ctx.setFillStyle("#ff0000")
				ctx.setFontSize(20)
				ctx.fillText(this.getDate(),20,data.height-30)
				ctx.draw()
				uni.showLoading({})
				setTimeout(this.getImg,1500)
			},
			getImg(){
				uni.canvasToTempFilePath({
				  x: 0,
				  y: 0,
				  width: this.width,
				  height: this.imgInfo.height,
				  destWidth: this.width,
				  destHeight: this.imgInfo.height,
				  canvasId: 'waterMark',
				  success: (res)=> {
				    // 在H5平台下，tempFilePath 为 base64
				    // console.log(res.tempFilePath)
					this.$emit("getPhotoUrl",res.tempFilePath)
				  },
				  fail(res){
					  console.log(res)
				  },
				  complete(){
					  uni.hideLoading()
				  }
				},this)
			},
			getDate(){
				var date=new Date()
				var y=date.getFullYear()
				var m=date.getMonth()+1
				var d=date.getDate()
				var h=date.getHours()
				var minute=date.getMinutes()
				m=m<10?"0"+m:m
				d=d<10?"0"+d:d
				h=h<10?"0"+h:h
				minute=minute<10?"0"+minute:minute
				return y+"-"+m+"-"+d+" "+h+":"+minute
			}
		}
	}
</script>

<style scoped>
.createWaterMark{
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: #000000;
	z-index: 10000;
	top: 0rpx;
	left: -800rpx;
}
.createWaterMark_content{
	width: 100vw;
	position: absolute;
	top:0upx;
	left: 0upx;
}
canvas{
	width: 100%;
	height: 100%;
}
</style>
