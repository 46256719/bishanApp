<template>
  <view class="cmd-progress">
	<view class="progress_content">
		<view class="progress_content_title">正在更新</view>
		<view class="progressAll">
			<view class="progressNow" :style="{'height':percent/100*550+'upx'}"></view>
			<view class="progressNum">{{percent}}%</view>
		</view>
	</view>
  </view>
</template>

<script>
  export default {
    name: 'cmd-progress',

    props: {
      percent: {
        type: Number,
        default: 0
      },
    }
  }
</script>

<style>
  .cmd-progress {
	width: 100vw;
	height: 100vh;
	position: fixed;
	top:0upx;
	left: 0upx;
	background-color: rgba(0,0,0,0.6);
  }
  .progress_content{
	  width: 600upx;
	  height: 250upx;
	  position: absolute;
	  left: 0upx;
	  right: 0upx;
	  top: 0upx;
	  bottom: 0upx;
	  margin: auto;
	  background-color: #fff;
	  border-radius: 10upx;
	  overflow: hidden;
  }
  .progress_content_title{
	  line-height: 100upx;
	  height: 100upx;
	  font-size: 40upx;
	  text-align: center;
	  background-color: #007AFF;
	  color: #fff;
  }
  .progressAll{
	  height: 50upx;
	  width: 550upx;
	  margin: 50upx auto;
	  border: 1upx solid #999;
	  border-radius: 25upx;
	  position: relative;
	  overflow: hidden;
  }
  .progressNow{
	  height: 50upx;
	  border-color: green;
  }
  .progressNum{
	  width: 550upx;
	  height: 50upx;
	  line-height: 50upx;
	  position: absolute;
	  left: 0upx;
	  top: 0upx;
	  text-align: center;
  }
</style>
