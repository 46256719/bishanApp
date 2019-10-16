import URL from "./interface.js"
import {mapTool} from "./mapTool.js"
var timer_getLoction=null//获取经纬度的线程
var timer_upLoction={}//进行任务上传点位的线程集群
var upLoctionData={}//进行任务上传的点位详细信息集群
var subNvue={}//原生子窗体的对象集群
var taskInfo={}//任务的详细信息
var pollutionInfo={}//污染源的详细信息
var upTimeNum=300000//上传经纬度的时间间隔
var situationDate={}//各类考核标准情况选择的日期
function getRequest(url,data,call,error){
	uni.showLoading({mask:true})
	var token=uni.getStorageSync("token")||""
	uni.request({
		url: url, //仅为示例，并非真实接口地址。
		data: data,
		method:"GET",
		header: {
			token
		},
		complete:(res) =>{
			uni.hideLoading()
			if(!res.data){
				typeof error=="function"?error():""
			}else if(res.data.code==1){
				typeof call=="function"?call(res.data):""
			}else{
				console.log(res.data)
				uni.showToast({
					icon:"none",
					title:res.data.msg||"数据异常"
				})
			}
		}
	})
}

function getRequestPc(url,data,call,error){
	var token=uni.getStorageSync("token")||""
	uni.request({
		url: url,
		data: data,
		method:"GET",
		header: {
			token
		},
		complete:(res) =>{
			if(!res.data){
				typeof error=="function"?error():""
			}else{
				typeof call=="function"?call(res.data):""
			}
		}
	})
}

function getRequestNo(url,data,call,error){
	var token=uni.getStorageSync("token")||""
	uni.request({
		url: url,
		data: data,
		method:"GET",
		header: {
			token
		},
		complete:(res) =>{
			if(!res.data){
				typeof error=="function"?error():""
			}else if(res.data.code==1){
				typeof call=="function"?call(res.data):""
			}else{
				typeof error=="function"?error(res.data):""
			}
		}
	})
}

function postRequestNo(url,data,call,error){
	var token=uni.getStorageSync("token")||""
	uni.request({
		url: url, //仅为示例，并非真实接口地址。
		data: data,
		method:"POST",
		header: {
			'Content-Type':'application/x-www-form-urlencoded',
			token
		},
		success: (res) => {
			// if(res.data.code==1){
				typeof call=="function"?call(res.data):""
			// }else{
				// typeof error=="function"?error(res.data):""
			// }
		}
	})
}


function postRequest(url,data,call,error){
	uni.showLoading({mask:true})
	var token=uni.getStorageSync("token")||""
	uni.request({
		url: url, //仅为示例，并非真实接口地址。
		data: data,
		method:"POST",
		header: {
			'Content-Type':'application/x-www-form-urlencoded',
			token
		},
		complete:(res) =>{
			uni.hideLoading()
			if(!res.data){
				typeof error=="function"?error():""
			}else if(res.data.code==1){
				typeof call=="function"?call(res.data):""
			}else{
				uni.showToast({
					icon:"none",
					title:res.data.msg||"数据异常"
				})
			}
		}
	})
}


function completeTask(data){//完成巡查污染源任务
	upImgTeams(data.pointPhoto,function(results,index){
		data.pointPhoto=results
		// console.log(data)
		toCompleteTask(URL.TASK_PATROL_POINT_UPDATE,data)
	},1,(results)=>{
		completeTask(data)
	})
}
function rectificationTaskDetail(data){//完成整改任务
	upImgTeams(data.rectificationPhoto,function(results,index){
		data.rectificationPhoto=results
		toCompleteTask(URL.TASK_RECTIFICATION_UPDATE,data)
	})
}
function upProblemTeams(data){//上传多个问题
	var problemTeams=0
	for(var i=0;i<data.length;i++){
		if(data[i].problemPhoto){
			problemTeams++
			upImgTeams(data[i].problemPhoto,function(results,index){
				problemTeams--
				data[index].problemPhoto=results
				if(problemTeams==0){
					data=JSON.stringify(data)
					toUpProblem(URL.TASK_PATROL_POINT_PROBLEM_ADD_BATCH,data)
				}
			},i,(results)=>{
				upProblemTeams(data)
			})
		}
	}
}
function toCompleteTask(url,data){//上传问题或者完成点位巡查
	// console.log(data)
	getRequestNo(url,data,(results)=>{
		console.log(results)
	},(results)=>{
		toCompleteTask(url,data)
	})
}
function toUpProblem(url,data){//上传问题或者完成点位巡查
	getRequestNo(url,{data},(results)=>{
		console.log("上传成功")
	},(results)=>{
		toUpProblem(url,data)
	})
}



function upImgTeams(imgs,call,index,error){//上传多张图片
	var imgs=imgs.split(";")
	var picture=[]
	var imgTeams=0
	for(var i=0;i<imgs.length;i++){
		imgTeams++
		uploadFile(URL.UPLOAD_UPLOAD,imgs[i],(results)=>{
			// console.log(results)
			results=JSON.parse(results)
			picture.push(results.data);
			imgTeams--
			if(imgTeams==0){
				picture=picture.join(";")
				call(picture,index)
			}
		},(results)=>{
			error(results)
		})
	}
}

function uploadFile(url,data,call,error){//上传图片
	var token=uni.getStorageSync("token")||""
	uni.uploadFile({
		url: url, //仅为示例，并非真实接口地址。
		fileType:"image",
		filePath:data,
		name:"file",
		header: {
			token
		},
		success: (res) => { 
			// console.log(res)
			if(res.data!="000000"){
				typeof call=="function"?call(res.data):""
			}else{
				typeof error=="function"?error(data):""
			}
		},
		fail(res){
			console.log(res)
			typeof error=="function"?error(data):""
		}
	})
}
function showSuccess(msg,call){
	uni.showToast({
		icon:"success",
		title:msg
	})
	typeof call=="function"?setTimeout(call,1500):""
}
const isRefreshTasksPage=true//是否更新正在进行的任务页面

const isRefreshPollutionPage=true//是否更新任务里面的需要巡查的污染源页面

const webSocket=function(id){
	uni.connectSocket({
		url: URL.WEBSOCKET+id,
		header: {
			'content-type': 'application/json'
		},
		method: 'GET'
	})
}
uni.onSocketOpen(function (res) {
	console.log('WebSocket连接已打开！');
});

var getLocation=function(){//获取当前的经纬度
	timer_getLoction=setInterval(function(){
		uni.getLocation({
			type:"wgs84",
			success(res){
				uni.setStorageSync("userLocation",{longitude:(res.longitude?res.longitude:uni.getStorageSync("userLocation").longitude),latitude:(res.latitude?res.latitude:uni.getStorageSync("userLocation").latitude)})
			},
			fail(res){
				console.log(res) 
				clearInterval(timer_getLoction)
				uni.showModal({
					title:"获取定位权限失败",
					content:"请打开手机定位权限",
					showCancel:false,
					success(res){
						console.log(res.confirm)
						uni.setStorageSync("userLocation",{longitude:0,latitude:0})
						getLocation()
					},
					fail(res){
						console.log(res)
					}
				})
			}
		})
	},5000)
}

var unUpLoction=function(id){//取消某个任务的经纬度的上传
	if(!!timer_upLoction[id]){
		clearInterval(timer_upLoction[id])
	}
}
var unGetLocation=function(){//停止经纬度的获取
	clearInterval(timer_getLoction)
}
var upLoction=function(id){//在任务进行时上传当前的经纬度
	timer_upLoction[id]=setInterval(function(){
		var userLocation=uni.getStorageSync("userLocation")
		var data={
			patrolTaskId:id,
			longitude:userLocation.longitude,
			latitude:userLocation.latitude,
		}
		var upData=upLoctionData[id]?upLoctionData[id]:[]
		var date=new Date()
		upData.push({
			patrolTaskId:id,
			longitude:userLocation.longitude,
			latitude:userLocation.latitude,
			locationTime:date.getTime()
		})
		upLoctionData[id]=upData
		postRequestNo(URL.TASK_PATROL_PATH_ADD_BATCH,{data:JSON.stringify(upData),id:id},(results)=>{
			if(results.code==2){
				unUpLoction(id)
				var onTask=uni.getStorageSync("onTask")?uni.getStorageSync("onTask"):[];
				onTask.splice(onTask.indexOf(this.taskId))
				uni.setStorageSync("onTask",onTask);
			}
			upLoctionData[id]=[] 
		}) 
	},upTimeNum)
}


function toNavigation(longitude,latitude){//导航
	// 判断平台  
	var wgs84togcj02=mapTool.wgs84togcj02(longitude,latitude)
	longitude=wgs84togcj02[0]
	latitude=wgs84togcj02[1]
	if (plus.os.name == 'Android') {  
		plus.runtime.openURL("amapuri://route/plan/?sid=BGVIS1&did=BGVIS2&dlat="+latitude+"&dlon="+longitude+"&dev=0&t=0",  
			function(e) {  
				uni.showToast({
					icon:"none",
					title:"请下确认手机安装了高德地图"
				})
				console.log('Open system default browser failed: ' + e.message);  
			},"com.autonavi.minimap"
		);
	} else if (plus.os.name == 'iOS') {  
		plus.runtime.launchApplication({ action:"iosamap://path?sourceApplication=applicationName&sid=BGVIS1&did=BGVIS2&dlat="+latitude+"&dlon="+longitude+"&dev=0&t=0" }, function(e) {  
			uni.showToast({
				icon:"none",
				title:"请下确认手机安装了高德地图"
			})
			console.log('Open system default browser failed: ' + e.message);  
		});  
	}
}

function getWryTypeName(type){//根据各类污染源的类型获取其中文名字
	var name="-"
	switch(type){
		case "bengzhan":
			name="泵站"
		break;
		case "canyinhangye":
			name="餐饮行业"
		break;
		case "gyqy":
			name="工业企业"
		break;
		case "xqyz":
			name="畜禽养殖"
		break;
		case "jcdw":
			name="监测点位"
		break;
		case "jianzhugongdi":
			name="建筑工地"
		break;
		case "jmjzjzd":
			name="居民集中居住点"
		break;
		case "nongmaoshichang":
			name="农贸市场"
		break;
		case "qthy":
			name="其他行业"
		break;
		case "rhkpwd":
			name="入河(库)排污点"
		break;
		case "wsclc":
			name="污水集中处理设施"
		break;
		case "shanpingtang":
			name="山坪塘"
		break;
		case "shuiku":
			name="水库"
		break;
		case "smysyzdh":
			name="十亩以上种植大户"
		break;
		case "tzc":
			name="屠宰场"
		break;
		case "xiaosanluanwu":
			name="小散乱污"
		break;
		case "xichechang":
			name="洗车场"
		break;
		case "yangyuchi":
			name="养鱼池"
		break;
		case "yiliaojigou":
			name="医疗机构"
		break;
		case "zzyfldjd":
			name="种植业肥料堆积点"
		break;
	}
	return name
}

function downLoadFile(url){//下载APP
	var downloadTask=uni.downloadFile({
		url:URL.url+"/downLoad/downLoadAppFile",
		complete(res){
			console.log(res)
			if(res.statusCode==200){
				plus.runtime.install(res.tempFilePath, {
					force: false
				}, function() {
					plus.runtime.restart();
				}, (e) => {
					console.log(e);
					// this.success = false
					uni.showToast({
						title: '安装升级包失败',
						icon: 'none'
					})
				});
			}
		}
	})
	var num=0
	downloadTask.onProgressUpdate((res) => {
		if(num!=res.progress){
			num=res.progress
			console.log('下载进度' + res.progress);
			console.log('已经下载的数据长度' + res.totalBytesWritten);
			console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
		}
	    // 测试条件，取消下载任务。
	});
}
module.exports={  
	getRequest,
	getRequestNo,
	getRequestPc,
	postRequest,  
	postRequestNo,
	uploadFile,
	showSuccess,
	isRefreshTasksPage,
	isRefreshPollutionPage,
	webSocket,
	upLoction,
	unGetLocation,
	unUpLoction,
	getLocation,
	upProblemTeams,
	completeTask,
	rectificationTaskDetail,
	subNvue,
	// getWryMap,
	taskInfo,
	pollutionInfo,
	upTimeNum,
	onTaskNum:0,
	unTaskNum:0,
	situationDate,
	toNavigation,
	getWryTypeName,
	downLoadFile
}