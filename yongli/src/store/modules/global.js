/*全局相关状态
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-18 15:14:21 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-31 14:44:15
 */
import { getWebsiteConfig } from '@/services/global'
import { GLOBAL_CONFIG } from '@/config/mutation-types'

export default {
    namespaced: true,
	state: {
		config: {},
	},
	getters: {
		/**加款类型列表 */
		DEPOST_MAN_TYPE({ config: { DEPOST_MAN_TYPE=[] } }, getters){
			return DEPOST_MAN_TYPE.reduce((prev, [id, name])=>prev.concat({ id, name, }), []);
		},
		/**加款类型中文映射 */
		DEPOST_MAN_TYPE_MAP(state, { DEPOST_MAN_TYPE=[] }){
			return DEPOST_MAN_TYPE.reduce((prev, { id, name })=>(prev[id]=name, prev), {});
		},
		/**提款状态列表 */
		WITHDRAW_STATUS({ config: { WITHDRAW_STATUS=[] } }, getters){
			return WITHDRAW_STATUS.reduce((prev, [id, name])=>prev.concat({ id, name, }), []);
		},
		/**提款状态中文映射 */
		WITHDRAW_STATUS_MAP(state, { WITHDRAW_STATUS=[] }){
			return WITHDRAW_STATUS.reduce((prev, { id, name })=>(prev[id]=name, prev), {});
		},
		/**存款类型列表 */
		OFFPAY_TYPE({ config: { OFFPAY_TYPE=[] } }, getters){
			return OFFPAY_TYPE.reduce((prev, [id, name])=>prev.concat({ id, name, }), []);
		},
		/**存款类型列表中文映射 */
		OFFPAY_TYPE_MAP(state, { OFFPAY_TYPE=[] }){
			return OFFPAY_TYPE.reduce((prev, { id, name })=>(prev[id]=name, prev), {});
		},
		/**存款状态列表 */
		OFFPAY_STATUS({ config: { OFFPAY_STATUS=[] } }, getters){
			return OFFPAY_STATUS.reduce((prev, [id, name])=>prev.concat({ id, name, }), []);
		},
		/**存款状态列表中文映射 */
		OFFPAY_STATUS_MAP(state, { OFFPAY_STATUS=[] }){
			return OFFPAY_STATUS.reduce((prev, { id, name })=>(prev[id]=name, prev), {});
		},
		/**借贷类型列表 */
		BANK_ACTION_TYPE({ config: { BANK_ACTION_TYPE=[] } }, getters){
			return BANK_ACTION_TYPE.reduce((prev, [id, name])=>prev.concat({ id, name, }), []);
		},
		/**借贷类型中文映射 */
		BANK_ACTION_TYPE_MAP(state, { BANK_ACTION_TYPE=[] }){
			return BANK_ACTION_TYPE.reduce((prev, { id, name })=>(prev[id]=name, prev), {});
		},
		/**支付状态列表 */
		PAY_STATUS({ config: { PAY_STATUS=[] } }, getters){
			return PAY_STATUS.reduce((prev, [id, name])=>prev.concat({ id, name, }), []);
		},
		/**支付状态中文映射 */
		PAY_STATUS_MAP(state, { PAY_STATUS=[] }){
			return PAY_STATUS.reduce((prev, { id, name })=>(prev[id]=name, prev), {});
		},
	},
	mutations: {
        [GLOBAL_CONFIG](state, config){
            state.config = config;
        },
	},
	actions: {
		async config({ commit }){
			commit(GLOBAL_CONFIG, await getWebsiteConfig());
		},
	}
}