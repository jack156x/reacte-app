/*api核心文件
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-20 18:13:32 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-03 16:54:48
 */
import axios from 'axios'
import qs from 'qs'
import { Loading, Notification } from 'element-ui'
import logger from '@/logger'
import apis from '@/api'

/**
 * token key
 */
import {
	/**token key */
	TOKEN_KEY,
	/**登录地址 */
	LOGIN_PATH,
	/**接口前缀 */
	API_PREFIX,
} from '@/config/global'

const location = window.location;

let _loadingInstance;

/**
 * 跳转登录页
 */
function toLogin(){
	if(location.pathname != LOGIN_PATH){
		location.replace(LOGIN_PATH);
		return;
	}
}

// 参数数组去索引
axios.defaults.paramsSerializer = params=>qs.stringify(params, { indices: false });

const core = (function(){
	const { request, response } = axios.interceptors;

	//请求拦截
	request.use(function(request){
		const { [TOKEN_KEY]:token } = sessionStorage;
		
		//加载遮罩
		_loadingInstance = Loading.service({fullscreen: true});
		request.headers.Authorization = `JWT ${ token }`;
		return request;
	});
	
	// 响应拦截
	response.use(function(response){
		_loadingInstance.close();
		// Do something with response data
		// 获取session过期状态，并校验登出
		if(response.status == 401){
			Notification.error({
				title: '调用服务端接口异常',
				message: '会话超时，请重新登录'
			});
			// 跳到登录页
			toLogin();
		}

		return response;
	}, function(error){
		console.log(error);

		_loadingInstance.close();
		logger.error('请求失败：',error);
		// Do something with response error
		// 获取session过期状态，并校验登出
		// 访问未授权，跳转至登录页
		if(error.response.status == 401){
			sessionStorage.removeItem(TOKEN_KEY);
			// 跳到登录页
			toLogin();
		}else if(error.response.status == 404){
			// 接口调用异常
			Notification.warning({
				title: '提示',
				message: '请求内容不存在！'
			});
			
			// 404状态抛异常走catch逻辑
			throw error.response;
		}else if(error.response.status == 400){
			throw error.response;
		}
		
		// 接口调用异常
		Notification.error({
			title: '调用服务端接口异常',
			message: error.response.status + '\n' + error.response.statusText
		});
	});
	
	/**
		接口调用模块核心方法
		@param String method 请求方式
		@param String requestKey 接口key	不需要rest参数，接受字符串，需要rest参数，传对象{key, rest}
		@param String requestData requestBody
		@param String urlData url查询参数
	*/
	return function core(method, requestKey, requestData, urlData){
		// rest地址参数
		let rest = '';
		if(typeof(requestKey) == 'object'){
			({ key: requestKey, rest } = requestKey);
			rest = rest === undefined ? '' : `${rest}/`;
		}

		requestKey = requestKey.split('.');

		// 获取资源配置
		let apiMap = apis[requestKey[0]];
		let api = apiMap && apiMap[requestKey[1]];

		if(!api){
			logger.error('请求资源读取错误：', requestKey.join('.'));
		}

		// 适配请求参数
		var data = null;
		if (method == 'post' || method == 'patch' || method == 'put') {
			data = requestData;
		} else {
			data = {
				params: requestData
			};
		}
		
		if(typeof(api) === 'string'){
			api = { url: api };
		}
		
		//url地址上增加参数
		let apiUrl = api.url;
		let apiUrlData = '';
		if (urlData) {
			for (const k in urlData) {
				apiUrlData += (apiUrlData.indexOf('?') < 0 ? '?' : '&') + k +'='+urlData[k];
			}
		}

		// 如果各个配置文件中没有配置host，读取默认host设置
		// let url = CONFIG.HOSTS[CONFIG.ENVIRONMENT] + apiUrl;
		let url = `${ API_PREFIX }${ apiUrl }/${ rest }${apiUrlData}`;
		
		return axios[method](url, data).then(res=>Object.assign(Object.create({ __raw__: res }), res.data));
	};
})();

export const [get, post, patch, del, put] = Array.from(['get', 'post', 'patch', 'delete', 'put'], type=>core.bind(null, type));

export default {
	get,
	post,
	patch,
	del,
	put,
};