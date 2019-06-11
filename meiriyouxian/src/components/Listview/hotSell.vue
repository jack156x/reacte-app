<template>
    <div class="hot-sell wrapper">
          <top-list />
            <section class="card-wrap">
              <router-link  tag="div" :to="'/'" v-for="(img_item,index) in imageList" :key="index" class="image-view">
                <img :src="img_item" class="van-image">
              </router-link>
            </section>
            <div class="banner-img content">
                  <list-products v-for="(item,index) in listProduct" :key="index" :firstImg="item.topImage">
                    <product v-for="(itemImage,index) in item.listStyleArray" 
                    :key="index" 
                    :itemImage="itemImage.productImage" 
                    :freshImage="itemImage.freshImage"
                    :subTitle="itemImage.subTitle"
                    :messTtitle="itemImage.messTitle"
                    :tagTxt="itemImage.tagTxt"
                    :tagIcon="itemImage.tagIcon"
                    :upPriceName="itemImage.upPriceName"
                    :upPrice="itemImage.upPrice"
                    :downPrice="itemImage.downPrice"
                    :downPriceName="itemImage.downPriceName"
                    />
                  </list-products>
            </div>
          <div class="hot-sell-blank"></div>
    </div>
</template>

<script>
import listProducts from "../listProduct";
import { mapGetters } from "vuex";
import product from "../listProduct/product";
import topList from "../topList";
import BScroll from "better-scroll";
export default {
  name: "hotSell",
  data() {
    return {
      betterScroll: null,
      pulldownMsg: ""
    };
  },
  computed: {
    ...mapGetters(["listProduct", "imageList"])
  },
  methods: {
    getSingerData() {
      const that = this;
      this.$nextTick(() => {
        that.betterScroll = new BScroll(".banner-img", {
          click: true,
          probeType: 1
        });
        that.betterScroll.on("scroll", pos => {
          if (pos.y > 30) {
            that.pulldownMsg = "释放立即刷新";
          }
        });
        that.betterScroll.on("touchEnd", pos => {
          if (pos.y > 30) {
            setTimeout(() => {
              that.getData().then(res => {
                that.data = res;
                that.pulldownMsg = "下拉刷新";
                // that.refreshalert();
                // that.betterScroll.refresh();
              });
            }, 2000);
          } else if (pos.y < that.betterScroll.maxScrollY - 30) {
            that.pullupMsg = "加载中。。。";
            setTimeout(() => {
              that.getData().then(res => {
                that.pullupMsg = "加载更多";
                that.data = this.data.concat(res);
                // that.betterScroll.refresh();
              });
            }, 2000);
          }
        });
      });
    }
  },
  updated() {
    this.getSingerData();
    //重新计算高度
    // this.betterScroll.refresh();
    //当数据加载完毕以后通知better-scroll
    // this.betterScroll.finishPullUp();
  },
  mounted() {
    // this.getSingerData();
  },
  components: {
    listProducts,
    topList,
    product
  }
};
</script>

<style scoped lang="scss">
@import "../../common/mixin";
.hot-sell {
  overflow-y: auto;
  .card-wrap {
    padding: 0 10px;
    overflow: hidden;
    @include flex;
    justify-content: space-between;
    .image-view {
      display: block;
      width: 100%;
      padding: 0 5px;
      img {
        width: 100%;
      }
    }
  }
  .banner-img {
    padding: 5px 10px;
  }
  .hot-sell-blank {
    width: 100%;
    height: 80px;
  }
}
</style>