<template>
    <div class="classifys">
        <top-header/>
        <div class="classifys-contain">
           <div class="classifys-cell-left">
             <ul class="classifys-cell-scroll">
               <router-link  tag="li" :to="item.rewardUrl" v-for="(item,index) in navList" :key="index" class="ellipsis" active-class="active" exact>
                      {{item.navName}}
              </router-link> 
             </ul>
           </div>
           <div class="classifys-cell-right">
                 <!-- <transition>
                        <keep-alive>
                          <router-view></router-view>
                        </keep-alive>
                      </transition> -->
                 <swiper-contain  :options="options">
                 </swiper-contain>
           </div>
        </div>
        <footer-list/>
    </div>
</template>

<script>
import topHeader from "../../components/topHeader";
import footerList from "../../components/footer/footer";
import BScroll from "better-scroll";
import hotSellComponent from "../../components/Listview/hotSell";
import swiperContain from "../../components/swiperSlider/classify";
import { mapGetters } from "vuex";
export default {
  name: "classifys",
  data() {
    return {
      myScroll: null,
      solute: "static",
      listComponItem: "hotSellComponent"
    };
  },
  components: {
    topHeader,
    swiperContain,
    footerList,
    hotSellComponent
  },
  computed: {
    ...mapGetters(["navList", "options"])
  },
  created() {
    this.$nextTick(() => {
      this.myScroll = new BScroll(".classifys-cell-scroll", {
        click: true,
        probeType: 1,
        scrollY: true
      });
    });
  }
};
</script>

<style scoped lang="scss">
@import "../../common/mixin";
.classifys {
  @include wh(100%, 100%);
  flex-direction: column;
  .classifys-contain {
    @include wh(100%, calc(100% - 90px));
    @include fj;
    .classifys-cell-left {
      @include wh(20%, 100%);
      background: #f8f8f8;
      padding-bottom: 100px;
      box-sizing: border-box;
      overflow-y: auto;
      ul {
        overflow-y: scroll;
        & > li {
          position: relative;
          width: 100%;
          height: 80px;
          line-height: 80px;
          text-align: center;
          font-size: 24px;
          color: #474245;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &.active {
            background: $fc;
            position: relative;
            font-weight: bold;
            color: #474245;
            &::after {
              content: "";
              @include ct;
              left: 0;
              height: 50%;
              width: 5px;
              background: rgb(255, 72, 145);
            }
          }
        }
      }
    }
    .classifys-cell-right {
      background: #fff;
      position: relative;
      flex: 1;
      height: 100%;
      overflow-y: scroll;
    }
  }
}
</style>