<template>
  <div class="nav_top">
    <div class="top-wrap">
      <div class="top-top">
        <!--顶部右边-->
        <div class="top-right">
          <div class="member">
            <div id="site-nav">
              <ul>
                <li>
                  <div class="menu">
                    <a class="menu-hd" href="javascript:;">
                      <span class="orange" id="ofullname">linda</span>
                      <b></b>
                    </a>
                    <div class="menu-bd box">
                      <div class="global-account-head">
                         <router-link name="recharge" to="" class="global-account-img">
                          </router-link> 
                        <p class="global-account-name" title="name">
                          <span class="_hours"></span>
                        </p>
                         <router-link name="recharge" to="" class="accountSet">
                              个人资料
                          </router-link> 
                        <span class="global-top-seperator">|</span>
                           <router-link name="recharge" to="" class="transactionRecords">
                              投注记录
                          </router-link> 
                      </div>
                      <div class="global-account-money">
                        总资产:
                         <span class="show-remaining btn btn-filter btn-xs real-time-btn show-remaining">
                              显示金额
                          </span> 
                        <span class="hide-astrict">
                          <em class="total-money astrict"></em>
                          <i class="ico-ask showsmall refresh"></i>
                        </span>
                        <p class="dottline space"></p>
                        <div class="total">
                          <router-link name="recharge" to="/withdrawal" >
                              存款
                          </router-link> 
                          <span class="global-top-seperator">|</span>
                          <router-link name="withdraws" to="/withdrawList" class="logout">
                              取款
                          </router-link> 
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <router-link to="" class="logout">
                 [退出]
            </router-link> 
            <label id="playerUnread">
              <label class="line-after info-down-btn">
                <span class="new">
                  <i class="new-ico select"></i>
                  <a href="javascript:void(0)">新消息</a>
                </span>
              </label>
            </label>
          </div>
        </div>
        <!--顶部左边-->
        <div class="top-left">
          <div class="select-lang" id="divLanguage">
            <p>
              <span class="flag zh"></span>简体中文
            </p>
            <ul style="display: none;">
              <li>
                <a href="javascript:void(0)" change="language" lang="zh" country="CN" rel="zh">
                  <span class="flag zh"></span>简体中文
                </a>
              </li>
            </ul>
          </div>
          <label class="time line-after">
            <span id="userTime">{{GMT}}</span>
            <span id="index-clock" class="nav-shadow clock-show"></span>
          </label>
        </div>
      </div>
    </div>
    <!-- banner -->
    <div class="banner"> <a href="/">
    <div class="logo"><img src="../assets/images/1540967008245.png_220x90.png"></div>
  </a>
   <div class="right">
        <ul class="nav-menu">
            <li> <a class="nav-menu-ico aip-type-home-ico" href=""> <span>网站首页</span> </a> </li>
            <li> <a class="nav-menu-ico aip-type-5-ico" href=""> <span>棋牌</span> </a> </li>
            <li> <a class="nav-menu-ico aip-type-2-ico" href=""> <span>电子游艺</span> </a> </li>
            <li> <a class="nav-menu-ico aip-type-1-ico" href=""> <span>真人视讯</span> </a> </li>
            <li> <a class="nav-menu-ico aip-type-promo-ico" href=""> <span>优惠活动</span> </a> </li>
        </ul>
  </div>
      <div class="banner-bg-t"></div>
      <div class="banner-bg"> <img src="../assets/images/bannerbg.jpg"> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      GMT:''
    };
  },
  methods:{
      getGMT(){
          const Dates=new Date();
          const getGMT=Dates.toTimeString().substr(9,8)
          this.GMT=getGMT
      }
  },
  mounted() {
    this.getGMT()  
  },
};
</script>
<style>
  .top-wrap {
    width: 100%;
    margin: 0 auto;
    background: url("../assets/images/top-wrap-bg.png");
    font-size: 12px;
    min-width: 1200px;
    border-bottom: 1px solid #535353;
}
.banner .logo>img {
    max-width: 100%;
    vertical-align: middle;
    max-height: 95px;
}
.top-top {
    min-width: 980px;
    max-width: 1200px;
    margin: 0 auto;
}
.top-right {
    float: right;
}
.top-left, .top-right {
    height: 32px;
    line-height: 32px;
    color: #eee;
}
.top-left {
    font-size: 12px;
}
.top-left .select-lang {
    width: 100px;
    height: 32px;
    line-height: 32px;
    float: left;
    position: relative;
}
.top-left .time {
    padding-left: 10px;
    font-family: Arial, Helvetica, sans-serif;
}
.line-after {
    background: url("../assets/images/line01.png") 0 0 no-repeat;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    margin-left: 5px;
    margin-right: 5px;
}
.top-left .time {
    padding-left: 10px;
    font-family: Arial, Helvetica, sans-serif;
}
.member {
    height: 32px;
    padding: 0 4px 0 5px;
    line-height: normal;
    color: #fff;
}
#site-nav {
    z-index: 100;
    margin: 0 auto;
    color: #000;
    position: relative;
}

#site-nav .menu-hd {
    padding: 0 32px 0 10px;
    display: block;
    z-index: 10002;
    margin: 1px 1px 0;
    cursor: pointer;
    position: relative;
    height: 26px;
}
#site-nav .menu-hd {
    padding-top: 1px;
}
.orange {
    color: #f88311!important;
}
#site-nav .box {
    width: 210px;
    _width: 210px;
    background: #f2f2f2;
}
#site-nav .menu-bd {
    border-right: 1px solid #bfbfbf;
    border-top: 1px solid #bfbfbf;
    display: none;
    z-index: 10001;
    right: 0;
    background: #fff;
    border-left: #bfbfbf 1px solid;
    border-bottom: #bfbfbf 1px solid;
    position: absolute;
    top: 26px;
}
.top-left .select-lang p, .username p {
    width: 100px;
    height: 32px;
    margin: 0;
    padding: 0;
    line-height: 32px;
    overflow: hidden;
    white-space: nowrap;
    text-indent: 5px;
    background: url("../assets/images/arrow01.png") no-repeat 95% 50%;
    cursor: pointer;
}
.flag {
    display: inline-block;
    padding-right: 5px;
    vertical-align: middle;
    width: 16px!important;
    height: 16px!important;
    background: url("../assets/images/flag.png") no-repeat top left;
    cursor: pointer;
    float: none!important;
    margin-top: 0!important;
}
#site-nav {
	display: inline-block
}
#site-nav {
	z-index: 100;
	margin: 0 auto;
	color: #000;
	position: relative
}
#site-nav .menu-hd {
	padding: 0 32px 0 10px;
	display: block;
	z-index: 10002;
	margin: 1px 1px 0;
	cursor: pointer;
	position: relative;
	height: 26px
}
#site-nav .menu-hd {
	padding-top: 1px
}
#site-nav .menu-hd b {
	border-right: 5px solid rgba(0,0,0,0);
	border-top: #a9a9a9 5px solid;
	font-size: 0;
	right: 10px;
	border-left: rgba(0,0,0,0) 5px solid;
	width: 0;
	line-height: 0;
	position: absolute;
	top: 7px;
	height: 0;
	-webkit-transition: -webkit-transform .2s ease-in;
	-moz-transition: -webkit-transform .2s ease-in;
	-o-transition: -webkit-transform .2s ease-in;
	transition: -webkit-transform .2s ease-in
}
#site-nav .menu-bd {
	border-right: 1px solid #bfbfbf;
	border-top: 1px solid #bfbfbf;
	display: none;
	z-index: 10001;
	right: 0;
	background: #fff;
	border-left: #bfbfbf 1px solid;
	border-bottom: #bfbfbf 1px solid;
	position: absolute;
	top: 26px
}
#site-nav .box {
	width: 210px;
	_width: 210px;
	background: #f2f2f2
}
#site-nav .menu:hover .menu-bd {
	display: block
}
.menu:hover .menu-bd {
	display: block
}
.banner .right .nav-menu li a:hover {
    animation-name: tada;
}
@keyframes tada {
from {
transform:scale3d(1, 1, 1)
}
10%, 20% {
transform:scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)
}
30%, 50%, 70%, 90% {
transform:scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)
}
40%, 60%, 80% {
transform:scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)
}
to {
	transform: scale3d(1, 1, 1)
}
}
.banner .right .nav-menu li a:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 29px;
    background: rgba(255,255,255,0.3);
    vertical-align: middle;
    margin-left: 7px;
}
#site-nav .menu:hover .menu-hd B {
	border-left-color: rgba(0,0,0,0);
	border-bottom-color: #f2f2f2;
	border-top-color: #a9a9a9;
	top: 7px;
	border-right-color: rgba(0,0,0,0);
	-moz-transform: rotate(180deg);
	-moz-transform-origin: 50% 30%;
	-webkit-transform: rotate(180deg);
	-webkit-transform-origin: 50% 30%;
	-o-transform: rotate(180deg);
	-o-transform-origin: 50% 30%;
	transform: rotate(180deg);
	transform-origin: 50% 30%
}

#site-nav .menu-hd b {
    border-right: 5px solid rgba(0,0,0,0);
    border-top: #a9a9a9 5px solid;
    font-size: 0;
    right: 10px;
    border-left: rgba(0,0,0,0) 5px solid;
    width: 0;
    line-height: 0;
    position: absolute;
    top: 7px;
    height: 0;
    -webkit-transition: -webkit-transform .2s ease-in;
    -moz-transition: -webkit-transform .2s ease-in;
    -o-transition: -webkit-transform .2s ease-in;
    transition: -webkit-transform .2s ease-in;
}
.member a.logout {
    color: #fff;
}
#site-nav {
    display: inline-block;
}
#site-nav .box {
    width: 210px;
    _width: 210px;
    background: #f2f2f2;
}
#site-nav .menu-bd {
    border-right: 1px solid #bfbfbf;
    border-top: 1px solid #bfbfbf;
    display: none;
    z-index: 10001;
    right: 0;
    background: #fff;
    border-left: #bfbfbf 1px solid;
    border-bottom: #bfbfbf 1px solid;
    position: absolute;
    top: 26px;
}
.global-account-head {
    padding: 10px;
    color: #666;
    font-size: 12px;
}
.global-account-head a {
    color: #666;
}

.global-account-name {
    margin-bottom: 5px;
    color: #333;
}
.global-top-seperator {
    color: #666;
    margin-left: 5px;
    margin-right: 5px;
}
.global-account-money {
    padding: 10px 10px 10px 10px;
    background: #fff;
    color: #666;
    line-height: 20px;
}
#site-nav .menu-bd:before {
	position: absolute;
	content: '';
	width: 8px;
	height: 8px;
	right: 11px;
	top: -4px;
	background: #f2f2f2;
	transform: rotate(45deg);
	-o-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-webkit-transform: rotate(45deg)
}
.info-down-btn {
    position: relative;
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


.btn-filter {
    background-color: #2772ee;
    color: #fff;
    display: inline-block;
    padding: 5px 12px;
    margin-bottom: 0;
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
    border: 1px solid transparent;
    border-radius: 4px;
    font-family: "Microsoft YaHei";
}
.btn-filter {
    background-color: #2095f2;
    color: #fff;
}
.btn-filter {
    font-family: 'Microsoft YaHei';
}

.hide-astrict {
    display: none;
}
.global-account-money .space {
    margin: 10px -10px;
}
.btn-xs {
    padding: 2px 5px;
    font-size: 12px;
    border-radius: 3px;
}
.dottline {
    /* background: url("../assets/images/dottline.png") repeat-x bottom; */
    height: 1px;
}
.line-after {
    background: url("../assets/images/line01.png") 0 0 no-repeat;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    margin-left: 5px;
    margin-right: 5px;
}
.global-account-money .total {
    word-spacing: -4px;
}
.global-account-money .total a {
    color: #666;
    width: 58px;
    display: inline-block;
    text-align: center;
    background: #fff;
    border: 1px solid #ddd;
    line-height: 30px;
    border-radius: 4px;
    margin-right: 5px;
}
.global-account-money .total .global-top-seperator {
    display: none;
}
.global-account-money .total a {
    color: #666;
    width: 58px;
    display: inline-block;
    text-align: center;
    background: #fff;
    border: 1px solid #ddd;
    line-height: 30px;
    border-radius: 4px;
    margin-right: 5px;
}
.global-account-money .total a:last-child {
    margin-right: 0;
}
.new-ico.select {
    background-position: 0 -24px;
}
.new-ico {
    background: url("../assets/images/newsico.png") no-repeat top left;
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
    width: 16px;
    height: 16px;
}
.top-right .new a {
    color: #fff;
}
.banner {
    width: 1200px;
    height: 95px;
    margin: 0 auto;
}
.banner .logo {
    float: left;
    max-height: 95px;
    margin: 0;
    max-width: 250px;
    line-height: 95px;
}
.banner .logo>img {
    max-width: 100%;
    vertical-align: middle;
    max-height: 95px;
}
.banner .right {
    width: 100%;
    height: 95px;
}
.banner .right .nav-menu {
    height: 100%;
    text-align: left;
    word-spacing: -6px;
    padding-left: 213px;
}
.banner .right .nav-menu li {
    display: inline-block;
    height: 100%;
    word-spacing: normal;
    transition: all .3s;
    border-left: 1px solid rgba(255,255,255,0);
    border-right: 1px solid rgba(255,255,255,0);
}
.banner .right .nav-menu li a {
    color: #fff;
    display: block;
    padding: 29px 0;
    animation-duration: 1s;
    animation-fill-mode: both;
}
.banner .right .nav-menu li:hover a:after {
    background: 0;
}
.banner .right .nav-menu li:hover {
	background: rgba(255,255,255,0.3);
	border-left: 1px solid rgba(255,255,255,0.3);
	border-right: 1px solid rgba(255,255,255,0.3)
}
.banner .right .nav-menu li a.nav-menu-ico.aip-type-home-ico:before {
    background-position: 0 0;
}

.banner .right .nav-menu li a.nav-menu-ico.aip-type-home-ico span:after {
    content: "HOME";
}
.banner .right .nav-menu li a.nav-menu-ico span:after {
    display: block;
    font-size: 11px;
}
.banner .right .nav-menu li a.nav-menu-ico.aip-type-5-ico:before {
    background-position: 0 -182px;
}

.banner .banner-bg-t {
    background: url("../assets/images/banner-bg-after.png");
    width: 100%;
    min-width: 1200px;
    height: 221px;
    position: absolute;
    left: 0;
    top: 33px;
    z-index: -1;
}
.banner .right .nav-menu li a.nav-menu-ico.aip-type-2-ico:before {
    background-position: 0 -31px;
}

.banner .right .nav-menu li a.nav-menu-ico.aip-type-1-ico:before {
    background-position: 0 -62px;
}
.banner .right .nav-menu li a.nav-menu-ico.aip-type-promo-ico:before {
    background-position: 0 -152px;
}
.banner .right .nav-menu li a.nav-menu-ico:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    background-image: url("../assets/images/nav-ico.png");
    width: 35px;
    height: 30px;
    margin: 0 7px 0 7px;
}
.banner .right .nav-menu li a.nav-menu-ico.aip-type-promo-ico span:after {
    content: "PROMO";
}
.banner .right .nav-menu li a.nav-menu-ico.aip-type-1-ico span:after {
    content: "LIVES";
}
.banner .right .nav-menu li a.nav-menu-ico.aip-type-2-ico span:after {
    content: "CASINO";
}
.banner .right .nav-menu li a.nav-menu-ico.aip-type-5-ico span:after {
    content: "CHESS";
}
.banner .right .nav-menu li a.nav-menu-ico span:after {
    display: block;
    font-size: 11px;
}
.banner .right .nav-menu li a span {
    text-align: center;
    display: inline-block;
    vertical-align: middle;
}

.banner .banner-bg {
    width: 100%;
    min-width: 1200px;
    height: 220px;
    position: absolute;
    left: 0;
    top: 33px;
    z-index: -2;
    overflow: hidden;
}
.banner .banner-bg>img {
    display: none;
}
</style>
