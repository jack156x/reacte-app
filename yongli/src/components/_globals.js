/*自动注册组件
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-31 11:32:34 
 * @Last Modified by:   zzh0211@live.com 
 * @Last Modified time: 2019-05-31 11:32:34 
 */
import Vue from 'vue'
import { kebabCase } from 'lodash/string'

const requireComponent = require.context('@/components', false, /[A-Z]\w+\.(vue|js)$/);
requireComponent.keys().forEach(fileName=>{
    // 获取组件配置
    const componentConfig = requireComponent(fileName);
    // 转换文件名
    const componentName = kebabCase(fileName.split('/').pop().replace(/\.\w+$/, ''));
    Vue.component(`fe-${ componentName }`, componentConfig.default || componentConfig);
});
