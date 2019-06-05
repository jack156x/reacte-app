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
import MemberInformationModified from '@/views/member/MemberInformationModified'
const tabList = [
  {
    name: '关键信息修改',
    component: 'MemberInformationModified',
    type: 'keyInfo',
    url: 'member.memberInfo',
    data: {}
  },
  {
    name: '关键信息修改日志',
    component: 'MemberInformationModified',
    type: 'keysInfoedit',
    url: 'member.accountchangelog',
    data: {
      log_type: 0
    }
  },
  {
    name: '修改密码',
    component: 'MemberInformationModified',
    type: 'editpass',
    url: 'member.memberInfo',
    data: {}
  },
  {
    name: '登陆账号列表',
    component: 'MemberInformationModified',
    type: 'loadList',
    url: 'member.memberInfo',
    data: {}
  }
]
export default {
  name: 'member-keyinfos',
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
    MemberInformationModified
    // MemberModifieslog
  }
}
</script>
