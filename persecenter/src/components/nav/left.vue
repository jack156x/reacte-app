<template>
  <div>
    <div class="sidebar-nav _nav_title">
      <template v-for="(item,indexs) of $router.options.routes">
        <div class="left-nav-title" :key="indexs">{{item.text}}</div>
        <dl v-for="items of item.children" :key="JSON.stringify(items)">
          <dt
            class="topbar-item"
            :class="$route.path.slice(0,items.path.length) == items.path ? 'select':''"
            @click="tabchange(items.classname)">
            <router-link :to="items.path" >
              <i class="navico" :class="items.classname"></i>
              {{items.name}}
            </router-link>
          </dt>
        </dl>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelect: "home"
    };
  },
  methods: {
    tabchange(title) {
      this.isSelect = title;
    }
  }
};
</script>

<style scoped>
.sidebar .sidebar-nav {
  margin-top: 50px;
  padding: 0 10px 10px 10px;
}
.left-nav-title {
  font-size: 17px;
  color: #a8b1b8;
  background: url("../../assets/images/left-t-sb.png") no-repeat bottom left;
  padding: 5px 0 10px;
  margin: 0 0 10px 0;
}
.sidebar .sidebar-nav dl {
  line-height: 40px;
}
.sidebar .sidebar-nav dl dt.select {
  background: #2987e7;
  color: #fff;
  position: relative;
}
.sidebar .sidebar-nav dl dt.select a {
  color: #fff;
}
.sidebar .sidebar-nav dl a {
  color: #666;
  padding-left: 17px;
  display: block;
}
.select .navico.home {
  background-position: -29px -2px;
  margin-right: 13px;
}

.navico.home {
  background-position: -3px -2px;
  margin-right: 13px;
}
.navico {
  display: inline-block;
  background: url("../../assets/images/navico.png") no-repeat top left;
  cursor: pointer;
  width: 18px;
  height: 16px;
  vertical-align: middle;
  padding-top: 3px;
}
.navico.deposit {
  background-position: -3px -242px;
  margin-right: 13px;
}
.navico.withdraw {
  background-position: -4px -267px;
  margin-right: 13px;
}
.navico.capital {
  background-position: -4px -30px;
  margin-right: 13px;
}
.navico.gamerecord {
  background-position: -4px -60px;
  margin-right: 13px;
}
.navico.sale {
  background-position: -5px -88px;
  margin-right: 13px;
}
.navico.info {
  background-position: -5px -119px;
  position: relative;
  margin-right: 13px;
}
.navico.accout {
  background-position: -4px -148px;
  margin-right: 13px;
}
.navico.recommend {
  background-position: -5px -175px;
  margin-right: 13px;
}
.navico.info {
  background-position: -5px -119px;
  position: relative;
  margin-right: 13px;
}
.navico.accout {
  background-position: -4px -148px;
  margin-right: 13px;
}
.sidebar .sidebar-nav dl dt.select:after {
  content: "";
  display: block;
  background: url("../../assets/images/left-select-finger.png");
  width: 7px;
  height: 10px;
  position: absolute;
  right: 7px;
  top: 15px;
}
.deposit-info-warp .btn {
    margin: 17px 20px 0 0;
}
.pull-right {
    float: right;
}
.btn-big {
    border-radius: 3px;
    text-align: center;
    font-family: "Microsoft YaHei";
}
.btn {
    display: inline-block;
    margin-bottom: 0;
    padding: 5px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #d3d8dc;
    color: #666;
}
.btn-gray {
    background: #fff;
    color: #666;
    border: 1px solid #d0d0d0;
}
.pull-right {
    float: right;
}
.clearfix:after, .row:after, .control-group:after {
    clear: both;
}
</style>