<template>
 <div class="all-products-wrap">
      <div class="all-products-container">
        <div class="product-container">
            <div class="product-list-divider-wrap">
                <div class="list-divider-container product-list-divider">
                    <router-link  tag="div" :to="'/fel'" class="banner-img">
                        <img v-lazy="firstImg" class="image-view divider-4">
                    </router-link>
                </div>
            </div>
        </div>
        <slot></slot>
    </div> 
</div>
   
</template>
<script>
export default {
  name: "list-product",
  data() {
    return {};
  },
  props: ["firstImg"]
};
</script>

<style scoped lang="scss">
@import "../../common/mixin";
.product-list-divider-wrap {
  overflow: hidden;
  background: #fff;
  .list-divider-container {
    text-align: center;
    background: #fff;
    .banner-img {
      width: 100%;
      display: block;
      img.image-view {
        width: 100%;
      }
      .divider-banner {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>