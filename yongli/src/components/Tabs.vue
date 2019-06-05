<template>
  <div class="tabWrapper">
    <div class="tabmenu mb-5">
      <ul class="tab">
        <li v-for="(tab,index) in tabList" @click="changeTab(tab,index)" :class="{on:currentIndex==index}" :key="index">
          <a class="current">{{tab.name}}</a>
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabScomponent',
  props: {
    tabList: Array,
    defaultIndex: {
      default: 0,
      type: Number
    }
  },
  data() {
    return { currentIndex: 0 }
  },
  methods: {
    changeTab: function(tab, index) {
      this.$logger.log(tab + '111')
      if (this.currentIndex !== index) {
        this.currentIndex = index
        this.$emit('changeTab', tab)
      }
    }
  },
  async created() {
    this.currentIndex = this.defaultIndex
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/sass/variable.scss';
.tabWrapper{
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}
.tabmenu {
  margin-top: 0;
  ul {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 10px;
    border: 1px solid $l1BorderColor;
    background: #fff;
  }
  li {
    padding: 0 10px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
    cursor: pointer;
  }
  li:hover {
    border-bottom: 2px solid $mainColor;
  }
  .on {
    border-bottom: 2px solid $mainColor;
  }
}
</style>