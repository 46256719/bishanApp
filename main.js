import Vue from 'vue'
import App from './App'
import util from "./static/js/utils.js"
// import missionCard from "./components/missionCard.vue"
// Vue.component('mission-card',missionCard)
Vue.config.productionTip = false
uni.$on("refreshTasksPage",function(res){
	util.isRefreshTasksPage=res
})
uni.$on("refreshPollutionPage",function(res){
	util.isRefreshPollutionPage=res
})
uni.$on("hideSub",function(res){
	for(var item in util.subNvue){
		util.subNvue[item].hide()
	}
})
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
