<template>
    <div class="top-list">
            <div class="van-links">
                    <div class="space-between">
                            <div class="van-flex">
                                <router-link :to="'/'" class="van-router-link">
                                    <van-icon name="gem"/>
                                    <span class="van-span">优先严选</span>
                                </router-link>
                            </div>
                    </div>
                    <div class="space-between">
                            <div class="van-flex">
                            <router-link :to="'/'" class="van-router-link">
                                    <van-icon name="youzan-shield"/>
                                    <span class="van-span">安心检测</span>
                                </router-link>
                            </div>
                    </div>
                    <div class="space-between">
                            <div class="van-flex">
                                <router-link :to="'/'" class="van-router-link">
                                    <van-icon name="umbrella-circle"/>
                                    <span class="van-span">赔付保障</span>
                                </router-link>
                            </div>
                    </div>
            </div>
            <div class="selling">
                <router-link tag="section" :to="'/fenle'" router-link-active="active" class="lantern-item"> 
                          <div class="lantern-item-img"><img src="https://j-image.missfresh.cn/img_20181118234204205.png" alt=""></div>
                          <p>49减20</p>
                </router-link>
                 <router-link tag="section" :to="'/'" router-link-active="active" class="lantern-item">
                        <div class="lantern-item-img"><img src="https://j-image.missfresh.cn/img_20181118234315430.png" alt=""></div>
                        <p>水果美容院</p>
                </router-link>
                 <router-link tag="section" :to="'/'" router-link-active="active" class="lantern-item">
                        <div class="lantern-item-img"><img src="https://j-image.missfresh.cn/img_20181118234340173.png" alt=""></div>
                        <p>加入会员</p>
                </router-link>
                 <router-link tag="section" :to="'/'" router-link-active="active" class="lantern-item">
                        <div class="lantern-item-img"><img src="https://j-image.missfresh.cn/img_20181118234537451.png" alt=""></div>
                        <p>本周上新</p>
                </router-link>
                 <router-link tag="section" :to="'/'" router-link-active="active" class="lantern-item">
                        <div class="lantern-item-img"><img src="https://j-image.missfresh.cn/img_20181118234837331.png" alt=""></div>
                        <p>每日签到</p>
                </router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: "top-list",
  data() {
    return {};
  },
   watch: {
    '$route' (to, from) {
      console.log(to.path)
      console.log(from)
    }
  },
};
</script>

<style scoped lang="scss">
@import "../../common/mixin";
.van-links {
  @include flex;
  justify-content: space-around;
  padding: 15px 0;
  width: 94%;
  margin: 0 auto;
  border-bottom: 1px solid #f5f5f5;
}
.space-between {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
}
.van-router-link {
  color: #4d4d4d;
  span {
    @include font(24px, 20px);
    vertical-align: middle;
  }
}
.van-icon {
  vertical-align: middle;
  font-size: 24px;
}
.selling {
  @include flex;
  box-sizing: border-box;
  width: 100%;
  .lantern-item {
    position: relative;
    padding-top: 30px;
    flex: 1;
    box-flex: 1;
    text-align: center;
    padding: 10px 0;
    .lantern-item-img {
      position: relative;
      margin: 0 auto;
      width: 70px;
      img {
        width: 100%;
      }
    }
    p {
      color: #474245;
      @include ellipsis-overflow;
      @include font(24px, 40px);
      padding: 0;
      margin: 5px 0;
    }
  }
}
</style>