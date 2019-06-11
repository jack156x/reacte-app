<template>
    <div class="cart">
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide slider-img-wrapper" v-for="(image, index) in images" :key="index">
                <img v-lazy="image" class="banner-img">
                </div>
            </div>
          </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/dist/css/swiper.min.css";
export default {
  name: "cart",
  data() {
    return {
      current: 0,
      sliderWidth: document.body.clientWidth,
      images: [
        "https://j-image.missfresh.cn/img_20180928154801790.jpg?iopcmd=thumbnail&type=4&width=640",
        "https://j-image.missfresh.cn/img_20180928154920705.jpg?iopcmd=thumbnail&type=4&width=640"
      ],
      jsonList: [
        {
          topImage:
            "https://j-image.missfresh.cn/mis_img_20180927122330041.png?mryxw=1125&mryxh=170",
          listStyleArray: [
            {
              productImage:
                "https://image.missfresh.cn/833b2c3d99e94c058761c3556918b7e8.jpg?iopcmd=thumbnail&type=4&width=200",
              subTitle: "库尔勒香梨5个475g起",
              messTitle: "落地即碎的多汁脆梨",
              price: "14.9",
              downPrice: "12.9"
            }
          ]
        }
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true //可选选项，自动滑动
    });
  }
};
</script>

<style scoped lang="scss">
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 15px;
  padding: 2px 5px;
  font-size: 16px;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
}
.slider-img-wrapper {
  width: 100%;
  .banner-img {
    width: 100%;
  }
}
</style>