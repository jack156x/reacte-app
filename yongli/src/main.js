/*
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-21 10:06:38 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-01 17:15:34
 */
/**element-ui css */
import 'element-ui/lib/theme-chalk/index.css';
/**font-awesome字体图标 */
import '@/assets/css/font-awesome.css'
/**iconfont字体图标 */
import '@/assets/css/iconfont.css'
// 全局通用类样式
import '@/styles/sass/common.scss'
window._ = import ( /* webpackChunkName: "lodash" */ 'lodash');
import Vue from 'vue'
/**注册全局组件 */
import '@/components/_globals'
/**注册element-ui组件 */
import '@/components/_element-ui'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
/**全局指令 */
import '@/directives'
/**api核心 */
import '@/core'
/**日志 */
import '@/logger'


Vue.config.productionTip = false;

Vue.mixin({
    computed: {
        /**弹出窗口公共高度属性*/
        dialogCss() {
            return {
                height: this.$store.getters['ui/dialogHeight']
            }
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');