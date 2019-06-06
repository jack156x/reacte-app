<template>
    <div>
            <TabScomponent :tabList="tabList" :tabIndex="tabIndex" @changeTab="changeTab">
                <keep-alive>
                    <component :is="currentContent">
                    </component>
                </keep-alive>
            </TabScomponent>
    </div>
</template>
<script>
   import TabScomponent from '@/components/tab'
   import game from '@/components/tab/gameannouncement'
   import Systen from '@/components/tab/Sysannouncement'
   import site from '@/components/tab/siteannouncement'
    export default {
        name:'gameNotice',
        data() {
            return {
            tabIndex: 0,
            currentContent: 'game',
            tabList: [
                {
                index: 0,
                name: '游戏公告',
                component: 'game'
                },
                {
                index: 1,
                name: '系统公告',
                component: 'Systen'
                },
                {
                index: 2,
                name: '站点公告',
                component: 'site'
                }
            ]
            }
        },
        components:{
            TabScomponent,
            "game":game,
            "Systen":Systen,
            "site":site
        },
        methods:{
             changeTab: function (tab) {
                this.tabIndex = tab.index;
                this.currentContent = tab.component;
            }
        } 
    }
</script>

<style scoped>
    .tabmenu {
        border-bottom: 1px solid #93bdee;
        margin-top: 20px;
        height: 40px;
    }
    .tabmenu ul.tab {
        display: inline-block;
        margin-left: 20px;
        height: 38px;
        position: relative;
    }
    .tabmenu ul.tab li {
        display: inline-block;
        text-align: center;
        color: #808080;
        font-weight: bold;
        font-size: 15px;
        height: 38px;
        line-height: 38px;
        margin-right: 5px;
    }
    .tabmenu ul.tab li a {
        height: 38px;
        display: block;
        padding: 0 15px 0 15px;
        text-align: center;
        border: 1px solid #dbe3ef;
        border-bottom: 0 solid #fff;
        background: #fff;
        color: #808080;
        position: relative;
    }
</style>