<template>
    <div class="finding">
      <header class="top-wrap">
          <div class="tab-controller-wrap">
              <div class="tab-controller-content flex">
                <div class="tab-controller-image">
                  <img src="//static-as.missfresh.cn/frontend/discovery/static/img/author-default.3af07f7.png" class="tab-controller-img" alt="">
                </div>
                <div class="tab-controller-tablist">
                  <ul class="tab-list-content flex">
                    <li class="tab-list-item cur">精选</li>
                    <li class="tab-list-item">快手食谱</li>
                    <li class="tab-list-item">甜点饮品</li>
                    <li class="tab-list-item">生活百科</li>
                  </ul>
                </div>
              </div>
          </div>
      </header>
        <div class="content">
                <van-swipe @change="onChange" :autoplay="3000">
                <van-swipe-item  v-for="(image, index) in images" :key="index">
                  <div class="slider-img-wrapper">
                      <img v-lazy="image" class="banner-img">
                  </div>
                </van-swipe-item>
                <div class="custom-indicator" slot="indicator">
                  {{ current + 1 }}/{{images.length}}
                </div>
              </van-swipe>
              <div class="article-lists">
                <div class="list-wrap">
                  <div class="module-wrap">
                    <div class="list-header">
                        <p class="list-title">一周吃什么</p>
                        <p class="list-desc list-desc-before">轻松解决一日三餐的世纪难题</p>
                    </div>
                    <p class="line-1px"></p>
                    <div class="article-list-wrap">
                      <div class="article-big">
                          <div class="big-wrap">
                            <div class="article-card">
                                <div class="follow-user-item article__author">
                                  <img src="https://j-image.missfresh.cn/img_20180617233338402.jpg" class="user__thumbnail" alt="">
                                  <span class="user_name overflow-ellipsis">詹姆士的厨房</span>
                                </div>
                                <div class="article__cover">
                                  <div class="article-cover">
                                    <div class="article-header-img">
                                      <img src="https://j-image.missfresh.cn/img_20190315101336736.png?iopcmd=convert&dst=webp" alt="">
                                    </div>
                                  </div>
                                </div>
                                <h3 class="article__title overflow-ellipsis-line2">
                                  【早餐·两款蔬菜司康】操作零失败的健康茶点</h3>
                                  <div class="article__controls">
                                      <div class="control-item article__reading">浏览{{number}}</div>
                                      <div class="control-btn-area">
                                        <div class="control-item article__collection" v-show="collection">
                                          <van-icon class="icon-heart" name="like-o" />收藏
                                          </div>
                                        <div class="control-item article__btn-share">
                                           <van-icon class="icon-13" name="coupon-o" />分享
                                        </div>
                                      </div>
                                  </div>
                                  <section class="big-wrap">
                                    <article class="asc-wrap flex">
                                      <div class="article-image">
                                      <div lazyloadbg-callback="imageLoadedHandler" 
                                      class="article-img image-loaded" 
                                      style="background-image: url('https://j-image.missfresh.cn/img_20190124104828084.png?iopcmd=convert&amp;dst=webp');"></div> 
                                
                                      </div> 
                                      <div class="article-info">
                                      <div data-v-7410f7da="" class="follow-user-item">
                                        <img data-v-7410f7da="" src="https://j-image.missfresh.cn/img_20180705193539136.jpg" class="user__thumbnail format-small__thumbnail" /> 
                                        <span data-v-7410f7da="" class="user__name overflow-ellipsis format-small__name">上班族的便当</span> 
                                       
                                      </div> 
                                      <p class="article-title overflow-ellipsis-line2">【午餐&middot;干煎土豆鸡丁】过年吃了不长膘的菜，这也忒香了！</p> 
                                      <div class="article-tool flex">
                                        <div class="tool-left">
                                        <span class="article-tool-view overflow-ellipsis flex">浏览 148790</span>
                                        </div> 
                                        <div class="tool-right">
                                        <span class="article-tool-share"><i class="icon-13"></i></span>
                                        </div>
                                      </div>
                                      </div>
                                    </article> 
                                    </section>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <mr-footer />
    </div>
</template>
<script>
import mrFooter from "../../components/footer/footer";
import BScroll from "better-scroll";
export default {
  name: "findIng",
  components: {
    mrFooter
  },
  data() {
    return {
      collection: false,
      betterScroll: null,
      number: 189,
      current: 0,
      images: [
        "https://j-image.missfresh.cn/img_20190311172703799.jpg?iopcmd=convert&dst=webp",
        "https://j-image.missfresh.cn/img_20190312152336385.jpg?iopcmd=convert&dst=webp"
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    betterScrollMethods() {
      const that = this;
      this.$nextTick(() => {
        that.betterScroll = new BScroll(".content", {
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
  mounted() {
    this.betterScrollMethods();
  }
};
</script>

<style scoped lang="scss">
.top-wrap {
  background: #fff;
  &:after {
    content: "";
    height: 90px;
    display: block;
    width: 100%;
  }
}
.tab-controller-wrap {
  position: relative;
  background-color: #fff;
  z-index: 10;
  .tab-controller-content {
    align-items: center;
    -webkit-align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    padding: 0 12px;
    background-color: #fff;
    z-index: 10;
    .tab-controller-image {
      flex-shrink: 0;
      width: 48px;
      display: table-cell;
      text-align: center;
      img {
        vertical-align: middle;
      }
    }
    .tab-list-item {
      position: relative;
      display: inline-block;
      height: 100%;
      margin: 0 15px;
      padding: 15px;
      line-height: 40px;
      font-size: 28px;
      color: #474245;
      &.cur {
        color: #ff4891;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          display: block;
          width: 48px;
          height: 5px;
          background-color: #ff4891;
          border-radius: 20px;
        }
      }
    }
  }

  .article-image {
    position: relative;
    width: 150px;
    height: 103px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 10px;
    line-height: 0;
    font-size: 0;
  }
  .tab-controller-tablist {
    position: relative;
    flex: 1;
    margin: 0 16px;
    height: 100%;
    overflow: hidden;
  }
  .tab-list-content {
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
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

.list-wrap {
  margin: 0 15px;
  .list-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 50px 0 10px;
    .list-title {
      font-weight: 500;
      font-size: 36px;
      color: #474245;
      line-height: 28px;
    }
    .list-desc {
      padding-left: 11px;
      font-size: 26px;
      color: #969696;
      position: relative;
      &:before {
        display: block;
        position: absolute;
        content: "";
        width: 2px;
        height: 12px;
        background: #d8d8d8;
        border-radius: 8px;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
      }
    }
  }
  .article-big {
    padding-bottom: 22px;
    .big-wrap {
      &:first-child {
        padding-top: 0;
      }
      .article-card {
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
        padding: 15px 0;
        .article-card {
          box-sizing: border-box;
          width: 100%;
          overflow: hidden;
          padding: 15px 0;
        }
        .article__author {
          margin-bottom: 10px;
        }
        .follow-user-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          overflow: hidden;
        }
        .user__thumbnail {
          width: 48px;
          height: 48px;
          box-sizing: border-box;
          background: #fff3e8;
          border: 1px solid #e6e6e6; /*no*/
          border-radius: 50%;
          flex-shrink: 0;
        }
        .user_name {
          font-size: 28px;
          width: 100%;
          display: block;
          padding: 0 14px;
          color: #474245;
        }
      }
    }
  }
  .control-item {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #969696;
    margin-left: 15px;
    color: #474245;
    display: flex;
    align-items: center;
  }
  .control-btn-area {
    padding-top: 2px;
    display: flex;
    align-items: center;
  }
  .icon-heart {
    &i {
      margin-right: 5px;
      font-size: 32px;
      &:before {
        content: "\E919";
      }
    }
  }
  .article__controls {
    display: flex;
    margin-top: 32px;
    justify-content: space-between;
    align-items: center;
  }
  .article__reading {
    color: #969696;
  }
  .article__cover {
    width: 100%;
    min-height: 345px;
    border-radius: 10px;
    overflow: hidden;
  }
  .article__title {
    padding: 0;
    margin: 30px 0 12px;
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
    color: #474245;
  }
}
.article-header-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.overflow-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.line-1px {
  display: block;
  width: 200%;
  height: 1px;
  transform: scale(0.5);
  transform-origin: left;
  background-color: #f5f5f5;
}
img {
  width: 100%;
}
.tab-controller-img {
  border-radius: 50%;
}
.van-icon {
  font-size: 32px;
  margin-right: 15px;
}
.flex {
  display: flex;
  align-items: center;
}
</style>