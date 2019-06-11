<template>
    <div class="fruit">
        <van-swipe @change="onChange" :autoplay="5000">
          <van-swipe-item  v-for="(image, index) in images" :key="index">
            <div class="slider-img-wrapper">
                <img v-lazy="image" class="banner-img">
            </div>
          </van-swipe-item>
          <div class="custom-indicator" slot="indicator">
            {{ current + 1 }}/2
          </div>
        </van-swipe>
        <div class="list-divider-container product-list-divider">
          <div v-for="(items,index) in jsonList" :key="index">
                  <!-- <div class="banner-img">
                      <img v-lazy="items.topImage" class="image-view divider-banner">
                  </div> -->
              <!-- <fruit-list/> -->
          </div>
        </div>
    </div>
</template>
<script>
import fruitList from "../listProduct";
export default {
  name: "fruits",
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
  components: {
    fruitList
  }
};
</script>

<style scoped lang="scss">
.fruit {
  width: 100%;
}
.slider-img-wrapper {
  width: 100%;
  .banner-img {
    width: 100%;
  }
}
.list-divider-container {
  text-align: center;
  background: #fff;
  .divider-banner {
    width: 100%;
    height: 100%;
  }
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 15px;
  padding: 2px 5px;
  font-size: 16px;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
}
.banner-img {
  width: 100%;
  display: block;
}
</style>