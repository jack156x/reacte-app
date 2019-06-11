<template>
    <div>
        <div class="swiper-list">
                <div class="swiper-container" :class="options.container">
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
import hotSellComponent from "../../components/Listview/hotSell";
import upNewComponent from "../../components/Listview/upNew";
import fruitComponent from "../../components/Listview/fruit";
import dairyComponent from "../../components/Listview/dairy";
import dayBestComponent from "../../components/Listview/dayBest";
import deliComponent from "../../components/Listview/deli";
import goodThingComponent from "../../components/Listview/goodThing";
import grainoilComponent from "../../components/Listview/grainoil";
import lightFoodComponent from "../../components/Listview/lightFood";
import meatComponent from "../../components/Listview/meat";
import necessitiesComponent from "../../components/Listview/necessities";
import snacksComponent from "../../components/Listview/snacks";
import vegetablesComponent from "../../components/Listview/vegetables";
import wineComponent from "../../components/Listview/wine";
export default {
  data() {
    return {
      listComponItem: [
        "hotSellComponent",
        "upNewComponent",
        "fruitComponent",
        "dairyComponent",
        "dayBestComponent",
        "deliComponent",
        "goodThingComponent",
        "grainoilComponent",
        "lightFoodComponent",
        "meatComponent",
        "necessitiesComponent",
        "snacksComponent",
        "vegetablesComponent",
        "wineComponent"
      ],
      options: {
        container: "swiper-addContain"
      }
    };
  },
  components: {
    hotSellComponent,
    upNewComponent,
    fruitComponent,
    dairyComponent,
    dayBestComponent,
    deliComponent,
    goodThingComponent,
    grainoilComponent,
    lightFoodComponent,
    meatComponent,
    necessitiesComponent,
    snacksComponent,
    vegetablesComponent,
    wineComponent
  },
  mounted() {
    const self = this;
    this.pageSwiper = new Swiper(`.${this.options.container}`, {
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

<style scoped>
</style>