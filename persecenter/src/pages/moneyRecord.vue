<template>
  <div>
    <TabScomponent :tabList="tabList" :tabIndex="tabIndex" @changeTab="changeTab">
      <keep-alive>
        <component :is="currentContent"></component>
      </keep-alive>
    </TabScomponent>
  </div>
</template>
<script>
import TabScomponent from "@/components/tab";
import listMode from "@/components/tab/listMode";
import ChartPattern from "@/components/tab/ChartPattern";
import '@/assets/css/moneyRecord.css'
export default {
  name: "gameNotice",
  data() {
    return {
      tabIndex: 0,
      currentContent: "listMode",
      tabList: [
        {
          index: 0,
          name: "列表模式",
          component: "listMode"
        },
        {
          index: 1,
          name: "图表模式",
          component: "ChartPattern"
        }
      ]
    };
  },
  components: {
    TabScomponent,
    listMode: listMode,
    ChartPattern: ChartPattern
  },
  methods: {
    changeTab: function(tab) {
      this.tabIndex = tab.index;
      this.currentContent = tab.component;
    }
  }
};
</script>