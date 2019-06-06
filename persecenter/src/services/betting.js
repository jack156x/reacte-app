// 导入接口核心模块
import { get, post, put, del, patch } from "@/utils/fetch";


export async function getList(){
	return get(bettingUrl, {
		page_size: 100,
		page_num: 1,
	});
}