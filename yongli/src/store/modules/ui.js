/*系统ui相关状态
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-21 10:02:09 
 * @Last Modified by: mikey.glmay
 * @Last Modified time: 2019-06-01 16:21:27
 */
import { UI_TOGGLE_SIDE_PANEL } from '@/config/mutation-types.js'

export default {
	namespaced: true,
	state: {
		sidePanel: true,
		/** dialogt弹框列表最小高度 */
        dialogHeight : '500px',
	},
	getters: {
		sidePanel({ sidePanel }, getters){
			return sidePanel;
		},
		dialogHeight({ dialogHeight }, getters){
			return dialogHeight;
		},
	},
	mutations: {
		/**切换显示侧边面板 */
		[UI_TOGGLE_SIDE_PANEL](state){
			state.sidePanel = !state.sidePanel;
		}
	},
	actions: {

	}
}
