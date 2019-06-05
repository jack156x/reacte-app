/*主文件
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-18 15:14:38 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-03 11:53:03
 */
import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash/util'

import { pagination } from '@/config/global.js'
import ui from '@/store/modules/ui'
import global from '@/store/modules/global'
import { getUserInfo } from '@/services/user'

import {
    ADD_TAB,
    REMOVE_TAB,
    CHANGE_ACTIVE_TAB,
    REMOVE_OTHER_TABS,
    REMOVE_ALL_TABS,
    REFRESH_ACTIVE_TAB,
    ADD_TAB_ACTIVE,
    USER_INFO,
} from '@/config/mutation-types.js'

Vue.use(Vuex);

/**标签默认选中项 */
const defaultActiveTab = 'Home';

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        userInfo: {},
        authorization: '',
        pagination,
        
        activeTab: defaultActiveTab,
        mainTabs: [{
            // 标签头名称
            title: '首页',
            // 
            name: defaultActiveTab,
            // 不可关闭
            closeable: false,
            // 展示的组件名
            comp: defaultActiveTab,
            // 唯一键
            key: defaultActiveTab,
            // 区分标记
            flag: defaultActiveTab,
        }],
    },
    getters: {
        userInfo({ userInfo }, getters) {
            return userInfo;
        },
        auth({ authorization }) {
            return authorization;
        },
        pagination({ pagination }) {
            return pagination;
        },
        mainTabs({ mainTabs }){
            return mainTabs;
        },
        activeTab({ activeTab }){
            return activeTab;
        }
    },
    mutations: {
        auth(state, auth) {
            state.authorization = auth;
        },
        /**添加新tab */
        [ADD_TAB](state, { title, path, flag, props, }){
            if(!state.mainTabs.some(v=>v.flag==flag)){
                state.mainTabs.push({
                    title,
                    name: path,
                    comp: path,
                    closeable: true,
                    flag,
                    key: _.uniqueId(path),
                    props,
                });
            }
        },
        /**删除tab */
        [REMOVE_TAB](state, flag){
            state.mainTabs = state.mainTabs.filter(tab=>tab.flag !== flag);
        },
        /**更改激活标签 */
        [CHANGE_ACTIVE_TAB](state, activeTab){
            state.activeTab = activeTab;
        },
        /**移除非激活状态下的其他标签 */
        [REMOVE_OTHER_TABS](state){
			state.mainTabs = state.mainTabs.filter(({ closeable, name })=>!closeable || name==state.activeTab);
        },
        /**刷新激活的标签内容 */
        [REFRESH_ACTIVE_TAB](state){
			state.mainTabs.find(v=>v.flag==state.activeTab).key = _.uniqueId(state.activeTab);
        },
        /**添加标签并激活显示 */
        [ADD_TAB_ACTIVE](state, tab){
            this.commit(ADD_TAB, tab);
            this.commit(CHANGE_ACTIVE_TAB, tab.flag);
        },
        /**移除所有可以关闭的标签页 */
        [REMOVE_ALL_TABS](state){
            state.activeTab = defaultActiveTab;
            state.mainTabs = state.mainTabs.filter(({ closeable })=>!closeable);
        },
        [USER_INFO](state, info){
            state.userInfo = info;
        },
    },
    actions: {
        async userInfo({ commit }){
            commit(USER_INFO, await getUserInfo());
        },
    },
    modules: {
        ui,
        global,
    }

})