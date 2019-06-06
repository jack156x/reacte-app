<template>
    <div>
        <!-- 全民推广 -->
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
    import myshare from '@/components/tab/myshare'
    import rewardrules from '@/components/tab/rewardrules'
    import rewardsrecord from '@/components/tab/rewardsrecord'
    import teamrecorded from '@/components/tab/teamrecorded'
    export default {
        name:'promotion',
        data() {
            return {
            tabIndex: 0,
            currentContent: 'myshare',
            tabList: [
                    {
                    index: 0,
                    name: '我的分享',
                    component: 'myshare'
                    },
                    {
                    index: 1,
                    name: '奖励规则',
                    component: 'rewardrules'
                    },
                    {
                    index: 2,
                    name: '奖励记录',
                    component: 'rewardsrecord'
                    },
                    {
                    index: 3,
                    name: '团队记录',
                    component: 'teamrecorded'
                    }
                ]
            }
        },
        components:{
             TabScomponent,
             "myshare":myshare,
             "rewardrules":rewardrules,
             "rewardsrecord":rewardsrecord,
             "teamrecorded":teamrecorded
        },
        methods:{
            changeTab(tab) {
                this.tabIndex = tab.index;
                this.currentContent = tab.component;
            }
        }
           
    }
</script>

<style scoped>

</style>