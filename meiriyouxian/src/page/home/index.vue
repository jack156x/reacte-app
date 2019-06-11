<template>
    <div class="home mall-home">
        <div class="home-flex-box top-heades">
              <top-header />
              <div class="body">
                    <swiper-contain  :options="options">
                    </swiper-contain>
              </div>
              <div class="home-invite-icon">
                <img src="../../../static/image/advance/img_20190215124055709.gif" alt="">
              </div>
              <footer-bar/>
        </div>
        <transition name="loading">
            <loading v-show="showLoading"></loading>
        </transition>
    </div>
</template>
<script>
import TopHeader from "../../components/topHeader";
import FooterBar from "../../components/footer/footer";
import swiperContain from "../../components/swiperSlider";
import loading from "../../components/loading";
import { mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      showLoading: true
    };
  },
  components: {
    TopHeader,
    FooterBar,
    swiperContain,
    loading
  },
  computed: {
    ...mapGetters(["options"])
  },
  mounted() {
    this.hideLoading();
  },
  methods: {
    hideLoading() {
      this.showLoading = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../common/mixin";
.home {
  @include wh(100%, 100%);
  background: #fff;
  .home-flex-box {
    @include fll();
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    .home-height {
      @include wh(100%, 75px);
    }
    .body {
      position: relative;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      flex-grow: 1;
      -webkit-flex-shrink: 1;
      flex-shrink: 1;
      overflow: hidden;
    }
    .home-invite-icon {
      width: 80px;
      height: auto;
      position: fixed;
      bottom: 150px;
      right: 30px;
      z-index: 2;
      img {
        width: 100%;
      }
    }
  }
  .loading-enter-active,
  .loading-leave-active {
    transition: all 0.4s;
  }
  .loading-enter,
  .loading-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
}
</style>