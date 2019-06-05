/*全局配置项
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-20 18:12:18 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-31 17:13:34
 */
/**
 * 分页相关配置项
 */
export const pagination = {
	/**每页条数字段 */
	field_pageSize: 'page_size',
	/**当前页字段 */
	field_pageNum: 'page',
	/**返回值列表字段 */
	field_results: 'results',
	/**返回值总数字段 */
	field_totalCount: 'count',
	/**分页条-每页条数选项集合 */
	pageSizes: [5, 10, 20, 50, 100],
};

export default {
	pagination,
}

/**token key */
export const TOKEN_KEY = 'token';

/**登录地址 */
export const LOGIN_PATH = '/login.html';

/**api接口前缀 */
export const API_PREFIX = '/v2/agent/';

/**会员资金管理-交易类型选项 */
export const BANK_ACTION_LIST = [
	{
		id: 1,
		name: '提款',
	},
	{
		id: 2,
		name: '存款',
	},
	{
		id: 79,
		name: '优惠',
	},
	{
		id: 80,
		name: '返水',
	},
	{
		id: 77,
		name: '派送',
	},
	{
		id: 92,
		name: '红包',
	},
	{
		id: 93,
		name: '分润',
	},
	{
		id: 88,
		name: '人工加款',
	},
	{
		id: 89,
		name: '人工减款',
	},
];