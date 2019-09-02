// const url0="http://192.168.1.7:8082"
// const url0="http://192.168.1.4"
// const url0="http://192.168.1.5"
// const url0="http://192.168.0.188"
// const url0="http://192.168.1.15"
// const url0="http://122.114.177.198"
const url0="http://183.230.23.21"
// const url0=uni.getStorageSync("url")?uni.getStorageSync("url"):"http://183.230.23.21"
const url=url0+":18082"
// const url=url0+":8082"
const url_PC=url+"/proxy/pc"
const daili="http://10.117.80.201:8081/app"
// const url_PC=url0+":8081/app"



//常链接 
const WEBSOCKET="ws://192.168.1.4:8082/websocket/"

// 登录
const LOGIN_LOGIN=url+"/login/login"
const TASK_INDEX=url+"/task/index"//获取首页任务情况
const TASK_INDEX2=url+"/task/index2"//获取首页任务情况

const TASK_PROCESS=url+"/task/process"//正在进行中的任务，不传uid 则显示所有人
const TASK_FINISH=url+"/task/finish"//已完成的任务，不传uid 则显示所有人
const TASK_NO_START=url+"/task/noStart"//还未开始的任务，不传uid 则显示所有人
const PROBLEM_LIST=url+"/problem/list"//问题列表 page 为必需 第一页为0 当uid为空的时候将会查询所有问题 反之则查询当前用户提交的问题
const UPLOAD_UPLOAD=url+"/upload/upload"//上传图片
const DEPARTMENT_GET_DEPT=url+"/department/getDept"//获取乡镇列表
const TASK_PATROL_POINT_CONTACTLIST=url+"/task/patrol/point/contactList"//获取联系人信息
const TASK_PATROL_POINT_FINISH_LIST=url+"/task/patrol/point/finishList"//获取点位进行中的信息
const TASK_PATROL_POINT_GET_ALL_PROBLEM=url+"/task/patrol/point/getAllProblem"//获取所有污染源问题类型
const TASK_PATROL_POINT_GET_PROBLEM=url+"/task/patrol/point/getProblem"//获取污染源问题类型
const TASK_PATROL_POINT_PROBLEM_ADD_BATCH=url+"/task/patrol/point/problem/addBatch"//批量新增问题
const TASK_PATROL_POINT_PROBLEM_LIST=url+"/task/patrol/point/problem/list"//通过点位信息 获取问题信息
const TASK_PATROL_POINT_PROBLEM_LIST2=url+"/task/patrol/point/problem/list2"//通过任务信息 获取问题信息
const TASK_PATROL_POINT_UPDATE=url+"/task/patrol/point/update"//更新巡查点位状信息
const TASK_PATROL_POINT_NORMAL=url+"/task/patrol/point/normal"//更改巡查点位状态状态
const TASK_PATROL_POINT_PROCESS_LIST=url+"/task/patrol/point/processList"//更改巡查点位状态状态
const TASK_PATROL_POINT_UPDATE_WRY_ADDRESS_DETAILED=url+"/task/patrol/point/updateWryAddressDetailed"//污染源重新定位 id=污染源ID ，wryType等于污染源类型，地址信息 和经纬度
const TASK_PATROL_PATH_ADD=url+"/task/patrol/path/add"//添加路径点信息
const TASK_PATROL_PATH_ADD_BATCH=url+"/task/patrol/path/addBatch"//添加路径点信息


// const TASK_PATROL_UPDATE_STATUS=url+"/task/patrol/updateStatus"//更改巡查任务状态
const TASK_RECTIFICATION_UPDATE_STATUS=url+"/task/rectification/updateStatus"//更改整个任务状态
const TASK_RECTIFICATION_UPDATE=url+"/task/rectification/update"//修改整改任务内容，图片等

const TASK_PATROL_UPDATE_STATUS=url+"/task/patrol/updateStatus"//更改巡查任务状态
const USER_UPDATE=url+"/user/update"//通过点位信息 获取问题信息



const POLLUTION_SEARCH=url+"/pollution/search"//搜索污染源


//PC接口

const DAPINGSHUIZHI_SHUIZHITONGJI_KHLX=daili+"/dapingshuizhi/shuizhitongji_khlx"//详情
const QUKONGSHUIZHITONGJI_HELIUSHUIZHITONGJI=daili+"/quKongShuiZhiTongJi/heLiuShuiZhiTongJi"//详情

//PC排行榜接口
const ASSESS_TOWN_LIST=daili+"/assess/townList"//镇街排行
const ASSESS_DEPARTMENT_LIST=daili+"/assess/departmentList"//部门排行
//污染源接口

const WRY_BZ_LIST=daili+"/wry/bz/list"//泵站
const WRY_COMPANY_LIST=daili+"/wry/company/list"//工业企业
const WRY_RHKPWK_LIST=daili+"/wry/rhkpwk/list"//入河排污口
const WRY_RHKPWD_LIST=daili+"/wry/rhkpwd/list"//入河排污点
const WRY_JZGD_LIST=daili+"/wry/jzgd/list"//建筑工地
const WRY_QTHY_LIST=daili+"/wry/qthy/list"//其它行业
const WRY_JCDW_LIST=daili+"/wry/jcdw/list"//检测点位
const WRY_YLJG_LIST=daili+"/wry/yljg/list"//医疗机构
const WRY_XQYZ_LIST=daili+"/wry/xqyz/list"//畜禽养殖
const WRY_TZC_LIST=daili+"/wry/tzc/list"//屠宰场
const WRY_SHUIKU_LIST=daili+"/wry/shuiku/list"//水库
const WRY_SPT_LIST=daili+"/wry/spt/list"//山坪塘
const WRY_YYC_LIST=daili+"/wry/yyc/list"//养鱼池
const WRY_JMJZJZD_LIST=daili+"/wry/jmjzjzd/list"//居民集中居住点
const WRY_XSLW_LIST=daili+"/wry/xslw/list"//小散乱污企业
const WRY_XCC_LIST=daili+"/wry/xcc/list"//洗车场
const WRY_CYHY_LIST=daili+"/wry/cyhy/list"//餐饮行业
const WRY_NMSC_LIST=daili+"/wry/nmsc/list"//农贸市场
const WRY_WSCLC_LIST=daili+"/wry/wsclc/list"//污水处理厂
const WRY_ZZYFLDJD_LIST=daili+"/wry/zzyfldjd/list"//种植业肥料堆积点
const WRY_SMYSYZDH_LIST=daili+"/wry/smysyzdh/list"//10亩以上种植大户

module.exports={
	url,
	WEBSOCKET,
	LOGIN_LOGIN,
	TASK_INDEX,
	TASK_INDEX2,
	TASK_PROCESS,
	TASK_FINISH,
	TASK_NO_START,
	PROBLEM_LIST,
	UPLOAD_UPLOAD,
	DEPARTMENT_GET_DEPT,
	TASK_PATROL_POINT_CONTACTLIST,
	TASK_PATROL_POINT_FINISH_LIST,
	TASK_PATROL_POINT_GET_ALL_PROBLEM,
	TASK_PATROL_POINT_GET_PROBLEM,
	TASK_PATROL_POINT_PROBLEM_ADD_BATCH,
	TASK_PATROL_POINT_PROBLEM_LIST,
	TASK_PATROL_POINT_PROBLEM_LIST2,
	USER_UPDATE,
	TASK_RECTIFICATION_UPDATE_STATUS,
	TASK_RECTIFICATION_UPDATE,
	TASK_PATROL_UPDATE_STATUS,
	TASK_PATROL_POINT_UPDATE,
	TASK_PATROL_POINT_NORMAL,
	TASK_PATROL_POINT_PROCESS_LIST,
	TASK_PATROL_POINT_UPDATE_WRY_ADDRESS_DETAILED,
	TASK_PATROL_PATH_ADD,
	TASK_PATROL_PATH_ADD_BATCH,
	DAPINGSHUIZHI_SHUIZHITONGJI_KHLX,
	QUKONGSHUIZHITONGJI_HELIUSHUIZHITONGJI,
	WRY_BZ_LIST,
	WRY_COMPANY_LIST,
	WRY_RHKPWK_LIST,
	WRY_RHKPWD_LIST,
	WRY_JZGD_LIST,
	WRY_QTHY_LIST,
	WRY_JCDW_LIST,
	WRY_YLJG_LIST,
	WRY_XQYZ_LIST,
	WRY_TZC_LIST,
	WRY_SHUIKU_LIST,
	WRY_SPT_LIST,
	WRY_YYC_LIST,
	WRY_JMJZJZD_LIST,
	WRY_XSLW_LIST,
	WRY_XCC_LIST,
	WRY_CYHY_LIST,
	WRY_NMSC_LIST,
	WRY_WSCLC_LIST,
	WRY_ZZYFLDJD_LIST,
	WRY_SMYSYZDH_LIST,
	ASSESS_TOWN_LIST,
	ASSESS_DEPARTMENT_LIST,
	POLLUTION_SEARCH,
	url_PC
}
