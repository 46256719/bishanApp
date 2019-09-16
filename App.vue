<script>
	import URL from "./static/js/interface.js"
	import util from "./static/js/utils.js"
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.setKeepScreenOn({
				keepScreenOn: true
			})
			util.getLocation()
		},
		onShow: function() {
			console.log('App Show')
			// uni.showTabBarRedDot({
			//   index: 1
			// })
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
.footer{
	height: 121upx;
	border-top: 1upx solid #ddd;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	position: fixed;
	bottom: 0upx;
	left: 0upx;
}
.footer>view{
	width: 305upx;
	height: 80upx;
	border: 1upx solid #eee;
	border-radius: 10upx;
	line-height: 80upx;
	text-align: center;
}
.cancel{
	background-color: #fff;
	margin-right: 20upx;
}
.confirm{
	background-color: #5087FB;
	color: #fff;
}
image{will-change: transform}
.noData{
	padding: 20upx;
	text-align: center;
	font-size: 24upx;
	color: #ccc;
}
.dateContent{
	display: flex;
	align-items: center;
	justify-content: flex-end;
	color: #fff;
}
.date_icon{
	width: 31upx;
	height: 31upx;
	margin-left: 10upx;
}	
</style>
