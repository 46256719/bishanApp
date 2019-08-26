import URL from "./interface.js"
var timer_getLoction=null
var timer_upLoction={}
var upLoctionData={}
var subNvue={}
var taskInfo={}
var pollutionInfo={}
var arrWry=[
	"WRY_BZ_LIST",
	"WRY_COMPANY_LIST",
	"WRY_RHKPWK_LIST",
	"WRY_RHKPWD_LIST",
	"WRY_JZGD_LIST",
	"WRY_QTHY_LIST",
	"WRY_JCDW_LIST",
	"WRY_YLJG_LIST",
	"WRY_XQYZ_LIST",
	"WRY_TZC_LIST",
	"WRY_SHUIKU_LIST",
	"WRY_SPT_LIST",
	"WRY_YYC_LIST",
	"WRY_JMJZJZD_LIST",
	"WRY_XSLW_LIST",
	"WRY_XCC_LIST",
	"WRY_CYHY_LIST",
	"WRY_NMSC_LIST",
	"WRY_WSCLC_LIST",
	"WRY_ZZYFLDJD_LIST",
	"WRY_SMYSYZDH_LIST"
]
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
		console.log(data)
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
	getRequestNo(url,data,(results)=>{
		console.log("上传成功")
	},(results)=>{
		toCompleteTask(data)
	})
}
function toUpProblem(url,data){//上传问题或者完成点位巡查
	getRequestNo(url,{data},(results)=>{
		console.log("上传成功")
	},(results)=>{
		toUpProblem(data)
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
			if(res.data!="000000"){
				typeof call=="function"?call(res.data):""
			}else{
				typeof error=="function"?error(data):""
			}
		},
		fail(){
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
const isRefreshTasksPage=true

const isRefreshPollutionPage=true

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

var getLocation=function(){
	timer_getLoction=setInterval(function(){
		uni.getLocation({
			type:"wgs84",
			success(res){
				uni.setStorageSync("userLocation",{longitude:res.longitude,latitude:res.latitude})
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
	},1000)
}

var unUpLoction=function(id){
	if(!!timer_upLoction[id]){
		clearInterval(timer_upLoction[id])
	}
}
var unGetLocation=function(){
	clearInterval(timer_getLoction)
}
var upLoction=function(id){
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
	},6000)
}

function getWryMap(){
	for (var i=0;i<arrWry.length;i++) {
		(function(url){
			getRequestPc(URL[url],"",(results)=>{
				uni.setStorageSync(url,results)
			})	
		})(arrWry[i])
	}
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
	getWryMap,
	taskInfo,
	pollutionInfo
}