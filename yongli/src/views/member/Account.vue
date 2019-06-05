<template>
  <section class="member-account-wrapper">
    <!-- 会员账户核查 -->
    <TabScomponent :tabList="tabList" @changeTab="changeTab">
      <keep-alive>
        <component :is="currentContent.component" :key="currentContent.key" :props="currentContent"></component>
      </keep-alive>
    </TabScomponent>
  </section>
</template>

<script>
import TabScomponent from "@/components/Tabs";
import StateMember from "@/views/member/StateMember";

const tabList = [
  {
    name: "会员财务报表",
    component: "StateMember",
    type: "MemberState",
    key: "memberStates"
  },
  {
    name: "会员投注报表",
    component: "StateMember",
    type: "MembershipReport",
    key: "MembershipReport"
  },
  {
    name: "会员财务报表（历史）",
    component: "StateMember",
    type: "MemberFinancials",
    key: "MemberFinancials"
  },
  {
    name: "会员投注报表（历史）",
    component: "StateMember",
    type: "Memberbetting",
    key: "Memberbetting"
  }
];
export default {
  name: "member-account",
  data() {
    return {
      currentContent: tabList[0],
      tabList
    };
  },
  methods: {
    changeTab: function(tab) {
      this.currentContent = tab;
    }
  },
  async created() {},
  components: {
    TabScomponent,
    StateMember
  }
};
</script>
