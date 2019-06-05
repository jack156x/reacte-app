<template>
  <div class="logContent">
    <section class="member-info-wrapper log-info-wrapper">
      <TabScomponent :tabList="tabList" @changeTab="changeTab">
        <keep-alive>
          <component 
          :is="currentContent.component"
          :props="{
            viewType: currentContent.type,
            logTypeUrl: currentContent.url 
          }"
          :key="currentContent.key"
          ></component>
        </keep-alive>
      </TabScomponent>
    </section>
  </div>
</template>
<script>
import TabScomponent from "@/components/Tabs";
import LogManage from "@/views/member/LogManage";
import LogLogin from "@/views/member/LogLogin";
import LogLoginArea from "@/views/member/LogLoginArea";


export default {
  name: "member-Log",
  data() {
    return {
      tabIndex: 0,
      currentContent: {
          name: "登陆日志明细",
          component: "LogLogin",
          type: 'Detail',
          url: 'member.log',
          key: 'OnlineDepositType0',
			},
      tabList: [
        {
          index: 0,
          name: "登陆日志明细",
          component: "LogLogin",
          type: 'Detail',
          key: 'OnlineDepositType0',
          url: 'member.log',
        },
        {
          index: 1,
          name: "IP会员统计",
          component: "LogManage",
          type: 'IPStatistical',
          key: 'OnlineDepositType1',
          url: 'member.iPStatistical',
        },
        {
          index: 2,
          name: "会员登陆IP统计",
          component: "LogManage",
          type: 'LoginStatistical',
          key: 'OnlineDepositType2',
          url: 'member.loginStatistical',
		},
		{
          index: 3,
          name: "会员信息修改日志",
          component: "LogManage",
          type: 'ModifyLog',
          key: 'OnlineDepositType3',
          url: 'member.accountchangelog',
		},
		{
          index: 4,
          name: "会员备注日志",
          component: "LogManage",
          type: 'NoteLog',
          key: 'OnlineDepositType4',
          url: 'member.accountchangelog',
		},
		{
          index: 5,
          name: "分润修改日志",
          component: "LogManage",
          type: 'FenRunLog',
          key: 'OnlineDepositType5',
          url: 'member.accountchangelog',
		},
		{
          index: 6,
          name: "会员升级日志",
          component: "LogManage",
          type:"upgradeLog",
          key: 'OnlineDepositType6',
          url: 'member.accountchangelog',
		},
		{
          index: 7,
          name: "会员转移日志",
          component: "LogManage",
          type: 'transferLog',
          key: 'OnlineDepositType7',
          url: 'member.accountchangelog',
		},
		{
          index: 8,
          name: "登录地区统计",
          component: "LogLoginArea",
          type: 'LoginArea',
          key: 'OnlineDepositType8',
          url: 'finance.onlinedeposits',
		},
		{
          index: 9,
          name: "登录错误IP日志",
          component: "LogManage",
          type: 'LoginErrorIPLog',
          key: 'OnlineDepositType9',
          url: 'member.wrongLog',
		},
		{
          index: 10,
          name: "登录地区异常日志",
          component: "LogManage",
          type: 'abnormalLog',
          key: 'OnlineDepositType10',
          url: 'member.loginAreaWrong',
		}
      ]
    };
  },
  components: {
    TabScomponent,
    LogManage,
    LogLogin,
    LogLoginArea
  },
  methods: {
    changeTab: function (tab) {
		this.tabIndex = tab.index;
    this.currentContent = tab;
    this.$logger.log(this.currentContent)
	}
  },
  watch: {},
  async created() {},
};
</script>


<style lang="scss" scoped>
.logContent { 
  .log-info-wrapper { height: 100%; }
}
</style>
