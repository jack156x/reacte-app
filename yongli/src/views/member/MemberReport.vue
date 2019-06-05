<template>
  <section class="member-account-wrapper">
    <!-- 会员账户核查 -->
    <TabScomponent :tabList="tabList" @changeTab="changeTab">
      <keep-alive>
        <component :is="currentContent.component" :key="currentContent.type" :props="currentContent"></component>
      </keep-alive>
    </TabScomponent>
  </section>
</template>

<script>
import TabScomponent from '@/components/Tabs'
import NewMemberStatistics from '@/views/member/NewMemberStatistics'
const tabList = [
  {
    name: '会员新增统计',
    component: 'NewMemberStatistics',
    type: 'NewMemberStatistics',
    url: 'member.accountnewstatistics',
    params: {}
  },
  {
    name: '会员在线统计',
    component: 'NewMemberStatistics',
    type: 'OnlineMemberStatistics',
    url: 'member.playeronlinestatistics',
    params: {}
  },
  {
    name: '会员活跃度统计',
    component: 'NewMemberStatistics',
    type: 'MemberActivityStatistics',
    url: 'member.memberInfo',
    params: {}
  }
]
export default {
  name: 'member-report',
  data() {
    return {
      currentContent: tabList[0],
      tabList
    }
  },
  methods: {
    changeTab: function(tab) {
      this.currentContent = tab
    }
  },
  async created() {},
  components: {
    TabScomponent,
    NewMemberStatistics
    // MemberActivityStatistics
  }
}
</script>
<style lang="scss" scoped>
.member-account-wrapper {
  padding: 15px 0;
  // background: #fff;
}
</style>

