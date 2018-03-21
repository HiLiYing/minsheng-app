var project = "msyzf/app/";
var project_client = "msyzf/client/";
var project_reg="msyzf/reg/"

//var baseUrl = "http://10.21.4.117:8081/"+project;//开发
//var baseUrl = "http://117.34.109.231/" + project; //uat
var baseUrl = "http://localhost:8080/" + project; //uat

//var baseUrl_client = "http://10.21.4.117:8081/"+project_client;//开发
//var baseUrl_client = "http://117.34.109.231/" + project_client; //uat
var baseUrl_client = "http://localhost:8080/" + project_client; //uat

var baseUrl_reg="http://localhost:8080/"+project_reg;
var mPageSize = 10; //每页大小
//执行mui框架默认的关闭页面功能
function muiBack() {
	mui.back();
}

/**
 * 解决js数字相乘问题
 * @param {Object} arg1
 * @param {Object} arg2
 */
function accMul(arg1, arg2) {
	var m = 0,
		s1 = arg1.toString(),
		s2 = arg2.toString();
	try {
		m += s1.split(".")[1].length
	} catch(e) {}
	try {
		m += s2.split(".")[1].length
	} catch(e) {}
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}
/**
 * 获得url入参
 * @param {Object} url
 * @param {Object} name 参数名称
 */
function getAttribut(url,name) {
	var res = [];
	url.replace(new RegExp("[&?]" + name + "=([^&#]*)", "ig"), function($, $1) {
		res.push(decodeURIComponent($1));
	});
	return res.join(",");
}