<template>
  <div>
    <!-- 我的分享 -->
    <div id="playerRecommendAward">
      <div class="invite-total" style="margin-bottom: 100px">
        <div class="titleline">
          <h2 style="width:130px;">关于全民推广</h2>
        </div>
        <div class="active-rule" style="padding: 0 80px 0 0">
          <pre style="white-space: pre-wrap;word-wrap: break-word;">独乐乐不如众乐乐</pre>
        </div>
      </div>
      <!--推荐好友-->
      <div class="recode" style="margin-top: -40px;">
        你的专属推荐码：&nbsp;
        <i class="blue fontlarge">69AE23XX6MB</i>
        <span class="respace">
          直属下属人数:
          <i class="orange fontlarge">&nbsp;0人&nbsp;</i>
        </span>
        <span class="respace">
          昨日推荐奖励:
          <i class="orange fontlarge">
            &nbsp;
            0.00&nbsp;
          </i>
        </span>
        <span class="respace">
          昨日红利奖励:
          <i class="orange fontlarge">
            &nbsp;
            0.00&nbsp;
          </i>
        </span>
      </div>
      <!--邀请方式-->
      <div class="invite-way">
        <div class="titleline">
          <h2>邀请玩家</h2>
        </div>
        <div class="invite-box">
          <h3>这是您的专属邀请码，复制以下文字通过QQ等方式发送给好友</h3>
          <div class="invite-copy">
            <div class="invite-copyleft">
              <textarea class="textarea" readonly="readonly" id="recommendUrl">iynxtl.com/register.html?c=69AE23XX6MB</textarea>
              <p class="gray">Ctrl+c或点击复制</p>
            </div>
            <div class="invite-button">
              <div>
                <a
                  class="btn-blue btn large-big lar-l"
                  data-clipboard-text="iynxtl.com/register.html?c=69AE23XX6MB"
                  name="copy"
                >复制</a>
              </div>
            </div>
            <div style="float: right;position: relative;" class="receive">
              <img
                src="../../assets/images/Bonusl_background@2x.png"
                alt
                width="200"
                height="200"
                style="position: relative;top: -55px;"
              >
              <p
                style="position: relative;top: -160px;z-index:3;text-align: center;color: white"
              >0.00</p>
              <div style="position:relative;top:-120px;left: 30px">
                <img
                  src="../../assets/images/Receiving_button1@2x.png"
                  alt
                  style="width: 140px;height: 35px;"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myshare",
  data() {
    return {};
  }
};
</script>

<style scoped>
.invite-total {
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid #d8dee0;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 2px 3px 0 #eef4f7;
}
.invite-total .titleline,
.invite-way .titleline {
  border-top: 1px solid #d8dee0;
  position: relative;
  margin-top: -21px;
}
.invite-total h2,
.invite-way h2 {
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  background: #fff;
  width: 100px;
  margin-left: 20px;
  top: -15px;
  text-align: center;
  font-weight: bold;
}
.active-rule {
  margin-top: 30px;
}
.recode {
  background: #f0f4f7;
  border: 1px solid #b7ccf0;
  border-radius: 4px;
  margin: 20px 20px 20px 20px;
  line-height: 45px;
  padding: 10px 10px 10px 20px;
  color: #475058;
}
.fontlarge {
  font-size: 24px;
}
.blue {
  color: #2772ee;
}
.respace {
  margin-left: 20px;
}
.recode .respace i.fontlarge {
  vertical-align: top;
}
.fontlarge {
  font-size: 24px;
}
.orange {
  color: #f88311 !important;
}
.respace {
  margin-left: 20px;
}
.invite-way {
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid #d8dee0;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 2px 3px 0 #eef4f7;
}

.invite-box {
  margin-top: 30px;
}
.invite-box .invite-copy {
  margin-top: 10px;
}
.invite-box .invite-copyleft {
  float: left;
  text-align: right;
  width: 560px;
}
.textarea {
  background: #fff;
  border: 1px solid #cecfd0;
  padding-left: 10px;
  margin-right: 5px;
  width: 560px;
  height: 60px;
  padding: 10px;
  font-family: "Microsoft YaHei";
}
.gray {
  color: #c7c7c7;
}
.invite-box .invite-button {
  float: left;
  margin-left: -50px;
}
.lar-l {
  margin-left: 85px;
}
.large-big {
  margin-top: 15px;
  padding: 10px 20px;
  border-radius: 3px;
  text-align: center;
  font-family: "Microsoft YaHei";
  font-size: 16px;
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
.btn-blue {
  background: #2772ee !important;
  color: #fff !important;
  border: 1px solid #2772ee !important;
}
img {
  border: 0;
}
</style>