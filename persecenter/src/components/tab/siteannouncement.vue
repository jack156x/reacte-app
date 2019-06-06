<template>
<!-- 站点公告 -->
    <div>
        <sitetab :tabList="tabList" :tabIndex="tabIndex" @changeTab="changeTab">
                <keep-alive>
                    <component :is="currentContent">
                    </component>
                </keep-alive>
        </sitetab> 
    </div>
</template>

<script>
import sitetab from "./siteTab"
import sitesysinfo from './sitesysinfo'
import sitemy from './sitemyinfor'
import sitesend from './sitesendinfor'
    export default {
        data() {
            return {
                tabIndex: 0,
                currentContent:'sitesysinfo',
                tabList: [
                    {
                    index: 0,
                    name: '系统消息',
                    component: 'sitesysinfo'
                    },
                    {
                    index: 1,
                    name: '我的消息',
                    component: 'sitemy'
                    },
                    {
                    index: 2,
                    name: '发送消息',
                    component: 'sitesend'
                    }
                ]
            }
        },
        methods:{
             changeTab(tab) {
                this.tabIndex = tab.index;
                this.currentContent = tab.component;
            }
        },
        components:{
            sitetab,
            "sitesysinfo":sitesysinfo,
            "sitemy":sitemy,
            "sitesend":sitesend
        }
    }
</script>

<style scoped>
 
</style>