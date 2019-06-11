<template>
    <div class="swiper-sliders category product-category-swiper" :style="{'position':solute=='static'?solute:'absolute'}">
             <div class="swiper-nav">
               <slot name="logo"></slot>
                 <div class="swiper-cell">
                        <div class="tabbar-slide-wrapper">
                            <div class="swiper-container category-nav" :class="options.container">
                            <div class="swiper-wrapper">
                                <div 
                                :style="[slideStyle, {'color': (index == slideOptions.slideIndex) ? slideStyle.checkedColor : slideStyle.color}]" 
                                :class="[index == slideOptions.slideIndex ? 'swiper-slide-checked' : '', 'swiper-slide']" 
                                :data-id="options.slideId[index]" 
                                v-for="(item, index) in options.slideData" 
                                :key="index">{{item}}</div>
                                <div :style="{width: downLineStyle.downLineWidth}" 
                                ref="slideDownLine" class="slide-down-line">
                                  <div class="balColor" :style="{
                                    'height': downLineStyle.downLineHeight,
                                  'background': downLineStyle.downLineColor}"></div>
                                </div>
                            </div>
                            </div>
                            <div class="tabbar-slide-container"></div>
                        </div>
                 </div>
                 <div class="swiper-button"><van-icon name="arrow-down"/></div>
             </div>
             <div class="swiper-list">
                 <div class="swiper-container swiper-addContain">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item,index) in listComponItem" :key="index">
                              <keep-alive>
                                 <component :is="item"></component>
                              </keep-alive>
                            </div>
                        </div>
                    </div>
             </div>
    </div>
</template>
<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/dist/css/swiper.min.css";
import classifyList from "../../components/classifyList";
export default {
  name: "classify",
  data() {
    return {
      mySwiper: null,
      slideArr: this.options.slideData,
      slideStyle: {
        width: this.options.width || "60px",
        textAlign: this.options.textAlign || "center",
        fontFamily: this.options.fontFamily || "Microsoft YaHei",
        color: this.options.color || "#333",
        //选中字体颜色
        checkedColor: this.options.checkedColor || "#ff4891"
      },
      downLineStyle: {
        //下划线高度
        downLineHeight: this.options.downLineHeight || "2px",
        //下划线颜色
        downLineColor: this.options.downLineColor || "#ff4891",
        downLineWidth: this.options.downLineWidth || "36px"
      },
      //选项
      slideOptions: {
        slideIndex: this.options.index || 0
      },
      //下划线
      slideDownLine: null,
      pageSwiper: null,
      listComponItem: ["classifyList"]
    };
  },
  components: {
    classifyList
  },
  props: ["options", "swiperSendIndex", "solute"],
  watch: {
    swiperSendIndex(value, oldvalue) {
      this.slideOptions.slideIndex = value;
    }
  },
  methods: {
    slide(swiperWidth, maxTranslate, maxWidth, index) {
      const slide = this.mySwiper.slides[index];
      const slideLeft = slide.offsetLeft;
      const slideWidth = slide.clientWidth;
      const slideCenter = slideLeft + slideWidth / 2;
      this.mySwiper.setTranslate(300);
      if (slideCenter < swiperWidth / 2) {
        this.mySwiper.setTranslate(0);
      } else if (slideCenter > maxWidth) {
        this.mySwiper.setTranslate(maxTranslate);
      } else {
        const nowTlanslate = slideCenter - swiperWidth / 2;
        this.mySwiper.setTranslate(-nowTlanslate);
      }
      slide.style.color = this.downLineStyle.downLineColor;
    }
  },
  mounted() {
    if (this.mySwiper) {
      this.mySwiper.destroy(true, false);
    }
    this.mySwiper = new Swiper(`.${this.options.container}`, {
      slidesPerView: "auto",
      freeMode: true,
      freeModeMomentumRatio: 0.5,
      observer: true,
      observeParents: false,
      slideToClickedSlide: true,
      on: {
        init: () => {
          //默认选中
          this.slideOptions.slideIndex = this.options.index || 0;
          //下划线
          this.$refs.slideDownLine.style.transform = `translateX(${this
            .slideOptions.slideIndex *
            parseInt(this.slideStyle.width) +
            10}px)`;
        },
        tap: (swiper, e) => {
          this.mySwiper.setTransition(300);
          //滑动
          const swiperWidth = this.mySwiper.el.clientWidth;
          const maxTranslate = this.mySwiper.maxTranslate();
          const maxWidth = -maxTranslate + swiperWidth / 2;
          //更改class
          this.slideOptions.slideIndex = this.mySwiper.clickedIndex
            ? this.mySwiper.clickedIndex
            : this.mySwiper.activeIndex;
          this.slide(
            swiperWidth,
            maxTranslate,
            maxWidth,
            this.slideOptions.slideIndex
          );
          //下划线
          this.$refs.slideDownLine.style.transform = `translateX(${this
            .slideOptions.slideIndex *
            parseInt(this.slideStyle.width) +
            10}px)`;
          this.pageSwiper.slideTo(this.mySwiper.clickedIndex);
        }
      }
    });
    const self = this;
    this.pageSwiper = new Swiper(".swiper-addContain", {
      longSwipesRatio: 0.5,
      on: {
        slideChangeTransitionStart: function() {
          self.mySwiper.setTransition(300);
          const swiperWidth = self.mySwiper.el.clientWidth;
          const maxTranslate = self.mySwiper.maxTranslate();
          const maxWidth = -maxTranslate + swiperWidth / 2;
          self.slide(swiperWidth, maxTranslate, maxWidth, this.activeIndex);
          self.slideOptions.slideIndex = this.activeIndex;
          self.$refs.slideDownLine.style.transform = `translateX(${this
            .activeIndex *
            parseInt(self.slideStyle.width) +
            10}px)`;
        }
      }
    });
  }
};
</script>
<style scoped lang="scss">
@import "../../common/mixin";
.category {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  align-items: stretch;
}
.product-category-swiper {
  width: 100%;
  top: 0;
  bottom: 0px;
  .swiper-nav {
    background: #fff;
    transition: all 300ms;
    position: relative;
    border-bottom: 1px solid #e6e6e6; /*no*/
    .category-nav {
      width: 88%;
      display: flex;
      flex-flow: nowrap;
      overflow-x: auto;
      align-items: center;
      background: #fff;
      white-space: nowrap;
      font-size: 0;
      margin-left: 0 !important;
      margin-right: 0 !important;
      padding-left: 15px;
      .swiper-slide {
        font-size: 24px;
        line-height: 2.5;
        padding: 12px 0;
      }
    }
    .swiper-cell {
      width: 100%;
      .tabbar-slide-wrapper {
        width: 100%;
        background: #fff;
        .swiper-slide {
          word-break: keep-all;
          overflow: hidden;
          letter-spacing: 4px;
        }
      }
      .slide-down-line {
        position: absolute;
        left: 0;
        bottom: 0;
        transition: transform 0.35s;
        width: 100%;
        .balColor {
          width: 36px;
          margin: 0 auto;
          height: 3px;
          background: #ff4891;
        }
      }
    }
    .swiper-button {
      width: 10%;
      height: 100%;
      text-align: center;
      position: absolute;
      right: 0;
      top: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .swiper-list {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: auto;
  }
}
</style>