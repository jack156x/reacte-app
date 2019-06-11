<template>
    <div>
        <router-link  tag="div" :to="'/'" class="listProduct product-list-item-wrap">
            <div class="border-margin">
                <section class="product-item-container">
                    <div class="product-item">
                        <div class="item-image">
                            <div class="promotion">
                                <div class="product-item-promotion freshImage" v-show="freshImage">
                                    <img v-lazy="freshImage">
                                </div>
                            </div>
                            <div class="product-item-image">
                                <img v-lazy="itemImage" class="vux-x-img b-loaded">
                            </div>
                        </div>
                        <div class="item-detail">
                                <div class="item-title">
                                    <div class="product-item-title">
                                        <p class="sub-title">{{subTitle}}</p>
                                        <p class="mess-title">{{messTtitle}}</p>
                                    </div>
                                </div>
                                <div class="item-tag">
                                        <div class="product-item-tag">
                                            <span>
                                                <p class="tag-text">
                                                    <span class="product-item-tag-txt">
                                                        {{tagTxt}}
                                                    </span>
                            
                                                </p>
                                            </span>
                                            <span>
                                                <p class="tag-text">
                                                    <i class="product-item-tag-icon"></i>
                                                    <span class="product-item-tag-txt">
                                                        {{tagIcon}}
                                                    </span>
                                                </p>
                                            </span>
                                        </div>
                                </div>
                                <div class="item-price">
                                    <div class="product-item-price">
                                        <div class="up-price-height">
                                            <div class="up-price" style="color:rgb(255, 72, 145);">
                                                <span class="name">{{upPriceName}}</span>
                                                <span class="sign">￥</span>
                                                <span class="price">{{upPrice}}</span>
                                            </div>
                                            <div class="down-price" style="color:rgb(248, 188, 0);">
                                                <span class="sign">￥</span>
                                                <span class="price">{{downPrice}}</span>
                                                <span class="name">{{downPriceName}}</span>
                                                <img src="https://j-image.missfresh.cn/img_20180115162106648.png" class="vip-icon">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-cart">
                                    <div class="product-item-cart">
                                        <div class="cart">
                                            <img src="https://j-image.missfresh.cn/img_20170425134548759.png" v-show="!clickShop" @click="shop" class="image">
                                            <div class="product-ctrl" v-show="clickShop">
                                                <img src="//static-as.missfresh.cn/frontend/item/static/img/sub-btn.adbbdd2.png" @click="reduce" class="product-cart-btn sub">
                                                <div class="product-cart-num">{{num}}</div>
                                                <img src="//static-as.missfresh.cn/frontend/item/static/img/add-btn.bcb2594.png" @click="add"  class="product-cart-btn add">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      clickShop: false,
      num: 1
    };
  },
  props: [
    "freshImage",
    "itemImage",
    "subTitle",
    "messTtitle",
    "tagTxt",
    "tagIcon",
    "upPriceName",
    "upPrice",
    "downPrice",
    "downPriceName"
  ],
  methods: {
    shop() {
      this.clickShop = true;
    },
    reduce() {
      if (this.num > 1) {
        return this.num--;
      } else {
        this.clickShop = false;
      }
    },
    add() {
      return this.num++;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../common/mixin";
.product-list-item-wrap {
  background: #fff;
  .border-margin {
    padding: 0px 1%;
    width: 100%;
    box-sizing: border-box;
    .product-item-container {
      background-color: #fff;
      .product-item {
        background: #fff;
        width: 100%;
        display: flex;
        -webkit-box-direction: normal;
        -webkit-box-orient: horizontal;
        flex-direction: row;
        -webkit-box-pack: justify;
        justify-content: space-between;
        flex: 1 1 0;
        position: relative;
        box-sizing: border-box;
        padding: 22px 0;
        border-bottom: 1px solid #f5f5f5;
        .item-image {
          position: relative;
          .promotion {
            position: absolute;
            left: 0;
            top: 0;
            .product-item-promotion {
              width: 40px;
              img {
                width: 100%;
              }
            }
          }
          .product-item-image {
            width: 200px;
            margin-right: 20px;
            img {
              width: 100%;
              @include background(
                "//static-as.missfresh.cn/frontend/mfs3/web/static/img/default-image-product.2031e18.png"
              );
            }
          }
        }
        .item-detail {
          flex: 1;
          position: relative;
          width: 60%;
          .item-title {
            margin-top: 10px;
            .product-item-title {
              p {
                width: 400px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              .sub-title {
                font-size: 32px;
                color: #474245;
              }
              .mess-title {
                font-size: 26px;
                color: #969696;
              }
            }
          }
          .item-tag {
            height: auto;
            margin-bottom: 20px;
            .tag-text {
              display: inline-block;
              @include borderRadius(2px);
              font-size: 24px;
              border: 1px solid #c6c6c6;
              margin-right: 5px;
              padding: 0 2px;
              color: #262626;
              position: relative;
              background-color: rgb(255, 255, 255);
              border-color: rgb(245, 159, 193);
              color: rgb(245, 159, 193);
              span {
                display: inline-block;
              }
              .product-item-tag-txt {
                color: rgb(245, 159, 193);
              }
              i {
                @extend span;
                @include background(
                  "https://image.missfresh.cn/category_tag_images/2B60921B92EEC6AC8078B8F5311FEAD1.PNG"
                );
              }
            }
            .product-item-tag-icon {
              display: inline-block;
              width: 28px;
              height: 28px;
              vertical-align: sub;
              background-repeat: no-repeat;
              background-size: 12px 12px;
              background-position: center center;
            }
          }
          .item-price {
            margin-bottom: 10px;
            .product-item-price {
              font-size: 12px;
              line-height: 1;
              .up-price-height {
                min-height: 12px;
                .up-price {
                  .name {
                    vertical-align: top;
                  }
                  .sign {
                    color: rgb(255, 72, 145);
                  }
                  .price {
                    vertical-align: top;
                    margin-left: -5px;
                    font-size: 26px;
                    color: rgb(255, 72, 145);
                  }
                }
              }
              .down-price {
                line-height: 1;
                color: rgb(248, 188, 0);
                .price {
                  font-size: 26px;
                  letter-spacing: -1px;
                  display: inline;
                  vertical-align: baseline;
                  margin-left: -5px;
                  color: rgb(248, 188, 0);
                }
                .name {
                  display: inline-block;
                  vertical-align: baseline;
                  color: rgb(248, 188, 0);
                }
                .sign {
                  color: rgb(248, 188, 0);
                }
                .vip-icon {
                  height: 28px;
                  vertical-align: baseline;
                }
              }
            }
          }
          .item-cart {
            position: absolute;
            right: 0;
            bottom: 5px;
            .cart {
              .image {
                width: 65px;
                display: block;
                transform: translateY(20%);
              }
              .product-ctrl {
                padding-right: 9px;
                align-items: center;
                z-index: 2;
                display: flex;
                .product-cart-btn {
                  box-sizing: border-box;
                  width: 42px;
                  height: 42px;
                  z-index: 2;
                }
                .product-cart-num {
                  font-size: 24px;
                  color: #4d4d4d;
                  line-height: 40px;
                  padding: 0 8px;
                  width: 100px;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>