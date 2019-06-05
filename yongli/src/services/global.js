/*全局通用
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-20 18:32:46 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-20 18:33:08
 */
// 导入接口核心模块
import { get, post, put, del, patch } from "@/core";

/**
 * 登录接口
 * @param Object params 登录需要提交的数据
 * @return 返回登录校验后的结果
 */
export async function getWebsiteConfig(){
	return get('global.websiteconfig');
}