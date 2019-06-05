<template>
  <section class="member-account-wrapper">
    <!-- 会员信息管理 -->
    <TabScomponent :tabList="tablist" @changeTab="changeTab">
      <keep-alive>
        <component :is="currentContent.component" :key="currentContent.type" :props="currentContent"></component>
      </keep-alive>
    </TabScomponent>
  </section>
</template>

<script>
import TabScomponent from '@/components/Tabs'
import AllMembers from '@/views/member/AllMember'
import LockingMember from '@/views/member/LockingMember'
const tablist = [
  {
    name: '全部会员',
    component: 'AllMembers',
    type: 'Allmenber',
    url: 'member.memberInfo',
    data: {}
  },
  {
    name: '在线会员',
    component: 'AllMembers',
    type: 'Onlinemenber',
    url: 'member.olineplayer',
    data: {}
  },
  {
    name: '充值会员',
    component: 'AllMembers',
    type: 'PrepaidMember',
    url: 'member.memberInfo',
    data: { whether_recharge: 1 }
  },
  {
    name: '未充值会员',
    component: 'AllMembers',
    type: 'UnchargedMember',
    url: 'member.memberInfo',
    data: { whether_recharge: 0 }
  },
  {
    name: '彩金会员',
    component: 'AllMembers',
    type: 'MosaicGoldMembers',
    url: 'member.memberInfo',
    data: { whether_lottery: 1 }
  },
  {
    name: '监控会员',
    component: 'AllMembers',
    type: 'MonitoringMember',
    url: 'member.memberInfo',
    data: { whether_monitor: 1 }
  },
  {
    name: '删除会员',
    component: 'AllMembers',
    type: 'DeleteMember',
    url: 'member.memberInfo',
    data: { is_destroy: 1 }
  },
  {
    name: '异常会员',
    component: 'AllMembers',
    type: 'AbnormalMember',
    url: 'member.memberInfo',
    data: { whether_odd: 1 }
  },
  {
    name: '测试会员',
    component: 'AllMembers',
    type: 'TestMember',
    url: 'member.memberInfo',
    data: { whether_test: 1 }
  },
  {
    name: '会员游戏管理',
    component: 'AllMembers',
    type: 'GameManageMember',
    url: 'member.gamepermisions',
    data: {}
  },
  {
    name: '会员转移',
    component: 'AllMembers',
    type: 'TransferMember',
    url: 'member.memberInfo',
    data: {}
  },
  {
    name: '上线提醒',
    component: 'AllMembers',
    type: 'OnlineRemind',
    url: 'member.memberInfo',
    data: { whether_online_warn: 1 }
  },
  {
    name: '锁定会员',
    component: 'LockingMember',
    type: 'LockingMember',
    url: 'member.whether_lock',
    data: {}
  }
]
export default {
  name: 'member-info',
  data() {
    return {
      currentContent: tablist[0],
      tablist
    }
  },
  methods: {
    changeTab(tab) {
      this.currentContent = tab
    }
  },
  components: {
    TabScomponent,
    AllMembers,
    LockingMember
  }
}
</script>


<style lang="scss">
</style>
