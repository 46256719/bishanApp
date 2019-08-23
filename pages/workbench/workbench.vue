<template>
	<view id="workBench">
<!-- 		<view class="work">
			<image class="icon_img" src="../../static/images/icon_heliu.png"></image>
			<view>河流</view>
		</view>
		<view class="work">
			<image class="icon_img" src="../../static/images/icon_sheshui.png"></image>
			<view>涉水源</view>
		</view>
		<view class="work">
			<image class="icon_img" src="../../static/images/icon_duban.png"></image>
			<view>督办任务</view>
		</view>
		<view class="work">
			<image class="icon_img" src="../../static/images/icon_zhuanxiang.png"></image>
			<view>专项任务</view>
		</view>
		<view class="work" @click="toMenu('riverMap')">
			<image class="icon_img" src="../../static/images/icon_xunhe.png"></image>
			<view>巡河地图</view>
		</view> -->
		<view class="work" @click="toMenu('system')">
			<image class="icon_img" src="../../static/images/icon_xitong.png"></image>
			<view>系统</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toMenu(src){
				uni.navigateTo({
					url:"/pages/"+src+"/"+src+""
				})
			}
		}
	}
</script>

<style scoped>
#workBench{
	display: flex;
	padding-top: 15upx;
	flex-wrap: wrap;
}
.work{
	width: 97.5upx;
	/* height: 97.5upx; */
	display: block;
	font-size: 24upx;
	margin: 30upx 45upx;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.icon_img{
	width: 94upx;
	height: 94upx;
	margin-bottom: 20upx;
	font-size: 24upx;
	color: #333333;
}
</style>
