<template>
<div class="topheader-fixed header">
    <div class="topheader" id="home-head">
      <div class="adv-bar-blank-filler"></div>
      <div class="locate-bar vux-flexbox vux-flex-row">
          <div class="top-flex">
            <span class="chrome-icon"><img src="https://j-image.missfresh.cn/img_20161026155951214.png?mryxw=170&mryxh=41" class="icon-img" alt=""></span>
            <span class="location-nav">北京市</span>
            <span class="top-triangle" @click="routerLink"></span>
            <div class="chrome-tips">
                <div class="chrome-tips-text" style="display:none">本城市支持会员1小时达，选择详细地址完成匹配</div>
            </div>
          </div>
          <div class="top-search-item text-right">
            <div class="topheader-search" @click="searchLink">
                <van-icon name="search" color="#ccc"/>
                <span class="topheader-text">车厘子</span>
            </div>
          </div>
      </div>
    </div>
</div>

</template>

<script>
export default {
  name: "topheader",
  props: [],
  data() {
    return {};
  },
  methods: {
    routerLink() {
      // this.$emit("routerLink");
    },
    searchLink() {
      // this.$emit("searchLink");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../common/mixin.scss";
.topheader-fixed {
  width: 100%;
  background: #fff;
  z-index: 2;
  .mall-home-head {
    line-height: 38px;
    font-size: 14px;
    background-color: white;
    width: 100%;
  }
  .locate-bar {
    transition: all 300ms;
    position: fixed;
    width: 100%;
    height: 80px;
    z-index: 99;
    background: #fff;
    top: 0px;
    z-index: 2;
    padding: 0 8px;
  }
  .vux-flex-row {
    box-direction: row;
    box-orient: horizontal;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
  }
  .vux-flexbox {
    width: 100%;
    text-align: left;
    @include flex();
    justify-content: space-between;
  }
  .adv-bar-blank-filler {
    transition: all 300ms;
    background-color: #f5f5f5;
    @include wh(100%, 80px);
  }
  .topheader {
    background: #fff;
    .top-flex {
      position: relative;
      .chrome-icon {
        @include wh(120px, auto);
        @include inline-block;
        .icon-img {
          width: 100%;
        }
      }
      .location-nav {
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        vertical-align: bottom;
        font-size: 30px;
      }
    }
    .text-right {
      .topheader-search {
        @include borderRadius(100px);
        width: 240px;
        @include flex;
        padding: 8px;
        justify-content: space-around;
        background: #f5f5f5;
        flex-shrink: 1;
        .van-icon {
          font-size: 30px;
        }
        .topheader-text {
          @include inline-block;
          @include wh(100%, auto);
          text-indent: 20px;
          @include sc(30px, #c6c6c6);
        }
      }
    }
  }
}

.top-triangle {
  @include wh(15px, 15px);
  border: #666 solid;
  border-width: 2px 2px 0 0;
  transform: rotate(135deg);
  margin-bottom: 10px;
  @include inline-block;
}
</style>