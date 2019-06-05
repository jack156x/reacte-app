/*登录模块相关
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-20 18:33:13 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-03 15:02:31
 */
// 导入接口核心模块
import { get, post, put, del, patch } from "@/core";

/**
 * 登录接口
 * @param Object params 登录需要提交的数据
 * @return 返回登录校验后的结果
 */
export async function toLogin(params){
	return post('user.login', params);
}

/**获取登录账户信息 */
export async function getUserInfo(){
	return get({
		key: 'member.memberInfo',
		rest: 'my',
	});
}

/**修改密码 */
export async function updatePwd(params){
	return patch('user.updatepwd', params).then(data=>({
		success: true,
		message: data.detail,
	})).catch(({ status, data })=>({
		success: false,
		message: data.detail,
	}));
}