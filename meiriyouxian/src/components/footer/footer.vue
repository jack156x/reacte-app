<template>
    <div class="footer-bal">
        <van-tabbar v-model="active"  @click.native="changeTabbar(active)">
            <van-tabbar-item>
                <span :class="{active: '/home' === $route.path}">首页</span>
                <img
                slot="icon"
                :src="'/home' === $route.path ? tabBarImgArr[0].active : tabBarImgArr[0].normal"
                >
            </van-tabbar-item>
            <van-tabbar-item icon="search">
              <span :class="{active: '/classify' === $route.path}">分类</span>
              <img
                slot="icon"
                :src="'/classify' === $route.path ?  tabBarImgArr[1].active : tabBarImgArr[1].normal"
                >
            </van-tabbar-item>
            <van-tabbar-item icon="setting-o"><span :class="{active: '/findIng' === $route.path}">发现</span><img
                slot="icon"
                :src="'/findIng' === $route.path ?  tabBarImgArr[2].active : tabBarImgArr[2].normal"
                ></van-tabbar-item>
                <van-tabbar-item icon="setting-o">
                  <span :class="{active: '/cart' === $route.path}">购物车</span><img
                slot="icon"
                :src="'/cart' === $route.path ?tabBarImgArr[3].active : tabBarImgArr[3].normal"
                ></van-tabbar-item>
                <van-tabbar-item icon="setting-o">
                  <span :class="{active: '/mine' === $route.path}">我的</span><img
                slot="icon"
                :src="'/mine' === $route.path ? tabBarImgArr[4].active : tabBarImgArr[4].normal"
                ></van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  name: "FooterBal",
  data() {
    return {
      active: 0,
      tabBarImgArr: [
        //图片切换
        {
          normal: require("../../../static/image/navImage/home_gray.png"),
          active: require("../../../static/image/navImage/home_active.png")
        },
        {
          normal: require("../../../static/image/navImage/classify_gray.png"),
          active: require("../../../static/image/navImage/classify_active.png")
        },
        {
          normal: require("../../../static/image/navImage/find_gray.png"),
          active: require("../../../static/image/navImage/find_active.png")
        },
        {
          normal: require("../../../static/image/navImage/cart_gray.png"),
          active: require("../../../static/image/navImage/cart_active.png")
        },
        {
          normal: require("../../../static/image/navImage/user_gray.png"),
          active: require("../../../static/image/navImage/user_active.png")
        }
      ],
      nowPath: "" //当前路径
    };
  },
  props: [],
  created() {
    this.changeTabBarActive();
  },
  updated() {
    this.changeTabBarActive();
  },
  methods: {
    changeTabBarActive() {
      this.nowPath = this.$route.path;
    },
    changeTabbar(active) {
      switch (active) {
        case 0:
          this.$router.push({ name: "homes" });
          break;
        case 1:
          this.$router.push({ name: "classify" });
          break;
        case 2:
          this.$router.push({ name: "findIng" });
          break;
        case 3:
          this.$router.push({ name: "cart" });
          break;
        case 4:
          this.$router.push({ name: "mine" });
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../common/mixin";
.footer-bal {
  line-height: 1;
  .van-tabbar {
    @include wh(100%, auto);
    padding: 5px 0;
  }
  .van-tabbar-item {
    .van-tabbar-item__icon {
      img {
        height: 50px;
      }
    }
    span {
      font-size: 28px;
      display: inline-block;
    }
    span.active {
      color: #ff4891;
    }
  }
}
</style>