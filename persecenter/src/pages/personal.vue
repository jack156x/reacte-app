<template>
  <div>
    <form id="personInfo">
      <div class="user-info">
        <div class="user-info-left portrait">
          <a href="toUploadHeadPortrait.html" class="pInfo">点击修改头像</a>
          <p class="edit-bg">
            <img src="@/assets/images/default_portrait.png" width="85px" height="85px">
          </p>
        </div>
        <div class="user-info-right">
          <p class="gray">
            <span>欢迎游戏，</span>
            <span class="orange">linda</span> &nbsp;&nbsp;再忙也要起来走一走
          </p>
          <p>
            <span class="spacewidth">
              <i class="gray">主货币：</i> CNY人民币
            </span>
          </p>
          <p>
            <span class="spacewidth">
              <i class="gray">上次登录时间：</i> 
                2019-04-15 14:15:43
            </span>
          </p>
        </div>
      </div>
      <div class="rgeechar">
        <div class="title">
          <span class="tips">
            <i class="mark plaintsmall"></i>完善个人资料能提升账户安全，设置后只能联系客服修改，请谨慎填写!
            <a target="_blank">联系客服</a>
          </span>
        </div>
      </div>
      <div class="account-list account-info-warp">
        <div class="left-ico-message">
          <span class="account-info-title">
            账户安全
            <img src="@/assets/images/safety-b.png">
          </span>
          <div class="control-grouptwo">
            <label class="control-left">安全问题：</label>
            <div class="controls">

              <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </div>
          </div>
          <div class="control-grouptwo">
            <label class="control-left">你的答案：</label>
            <div class="controls">
                <el-input class="input field-input" v-model="sysUserProtectionAnswer"></el-input>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label"></label>
            <div class="controls">
              您当前尚未设置银行卡！
              <a href="toUserBank.html">立即新增</a>
            </div>
          </div>
        </div>
        <hr>
        <div class="left-ico-message">
          <span class="account-info-title">
            个人信息
            <img src="@/assets/images/info-b.png">
          </span>
          <div class="control-group" id="submitInfo" style="margin-left:255px;">
               <el-button type="primary"  class="btn-blue btn large-big" disabled>提交</el-button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name:'personalData',
  data() {
    return {
       options: [{
          value: '1',
          label: '您小时候最喜欢哪一本书？'
        }, {
          value: '2',
          label: '您的理想工作是什么？'
        }, {
          value: '3',
          label: '您童年时代的绰号是什么？'
        }, {
          value: '4',
          label: '您拥有的第一辆车是什么型号？'
        }, {
          value: '5',
          label: '您在学生时代最喜欢哪个电影明星或角色？'
        }],
        value: '',
        sysUserProtectionAnswer:''
    }
  },
};
</script>

<style scoped>
.user-info {
  border: 1px solid #d3d8dc;
  padding: 20px 20px 20px 20px;
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #f6f6f6;
}
.portrait {
  position: relative;
}
.user-info-left {
  width: 100px;
  float: left;
  text-align: center;
  margin-right: 15px;
}
.portrait a {
  display: none;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 98px;
  line-height: 100px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  z-index: 9;
  width: 98px;
  background-color: rgba(120, 120, 120, 0.5);
}
.edit-bg {
  background: #dedede;
  width: 100px;
  height: 100px;
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
  border: 1px solid #cfd7e5;
}
.edit-bg img {
  vertical-align: middle;
}
.user-info-right {
  float: left;
  line-height: 30px;
}
.gray {
  color: #c7c7c7;
}
.orange {
  color: #f88311 !important;
}
.user-info-right .spacewidth {
  width: 300px;
  display: inline-block;
}
.user-info-right .spacewidth {
  width: 300px;
  display: inline-block;
}
.rgeechar {
  margin-left: 20px;
  margin-top: 23px;
}
.rgeechar .title {
  background: #fff6ee;
  border: 1px solid #f2c79d;
  margin-right: 20px;
  padding: 10px;
  border-radius: 3px;
  color: #333;
}
.tips {
  font-size: 13px;
}
.mark.plaintsmall {
  background-position: -46px -7px;
  margin-top: -3px;
}
.mark {
  display: inline-block;
  padding-right: 5px;
  vertical-align: middle;
  width: 18px;
  height: 19px;
  background: url("../assets/images/mark.png") no-repeat top left;
  cursor: pointer;
}
.account-list {
  border: 1px solid #d3d8dc;
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #f6f6f6;
}
.left-ico-message {
  padding: 20px 0;
  border-left: 180px solid #f7f8f9;
  position: relative;
  min-height: 120px;
}
.left-ico-message {
  border-left: 180px solid #f7f8f9;
}
.account-info-title {
  left: -170px;
}
.account-info-title {
  position: absolute;
  left: -170px;
  font-size: 20px;
  top: 35px;
  width: 160px;
  text-align: center;
}
.account-info-title img {
  opacity: 0.2;
}
.account-info-warp .control-group,
.account-info-warp .control-grouptwo {
  margin: 10px;
}
.account-info-warp .control-left {
  line-height: 29px;
}

.control-grouptwo {
  display: block;
}
.control-grouptwo {
  margin-top: 10px;
}
.control-grouptwo .controls {
  vertical-align: middle;
}
.account-info-warp .control-group,
.account-info-warp .control-grouptwo {
  margin: 10px;
}

.control-group {
  margin-bottom: 15px;
  display: block;
}
.selectwidth {
  width: 192px;
  margin-right: 5px;
}

select,
textarea,
input[type="text"],
input[type="password"],
input[type="datetime"],
input[type="datetime-local"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="week"],
input[type="number"],
input[type="email"],
input[type="url"],
input[type="search"],
input[type="tel"],
input[type="color"],
.uneditable-input {
  display: inline-block;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  vertical-align: middle;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}
.control-grouptwo .control-left {
  float: left;
  width: 190px;
  text-align: right;
}
.control-grouptwo .controls {
  vertical-align: middle;
}

.input {
  background: #fff;
  width: 180px;
}
.account-info-warp .control-group,
.account-info-warp .control-grouptwo {
  margin: 10px;
}

.control-group {
  margin-bottom: 15px;
  display: block;
}
.clearfix:after,
.row:after,
.control-group:after {
  clear: both;
}

.account-info-warp .control-group,
.account-info-warp .control-grouptwo {
  margin: 10px;
}
.control-group {
  margin-bottom: 15px;
  display: block;
}
.account-info-warp .control-group .control-label {
  width: 220px;
}
.control-group .control-label {
  float: left;
  width: 114px;
  padding-top: 10px;
  text-align: right;
  vertical-align: top;
}
.account-info-warp .control-group .controls {
  width: 460px;
  max-width: 520px;
}
.account-info-warp .controls {
  line-height: 30px;
}
.control-group .controls {
  vertical-align: middle;
  padding-top: 5px;
  position: relative;
  float: left;
  max-width: 800px;
}
.btn-blue {
  background: #2772ee !important;
  color: #fff !important;
  border: 1px solid #2772ee !important;
}
select {
  background-color: #fff;
  border: 1px solid #ccc;
}
.disable-gray,
.disable-gray:hover {
  background: #ccc !important;
  border: 1px solid #ccc !important;
  color: #fff;
}
.account-info-warp .control-group,
.account-info-warp .control-grouptwo {
  margin: 10px;
}

.control-group {
  margin-bottom: 15px;
  display: block;
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
}
.large-big {
  margin-top: 15px;
  padding: 10px 20px;
  border-radius: 3px;
  text-align: center;
  font-family: "Microsoft YaHei";
  font-size: 16px;
}
.account-info-warp hr {
  border-top: 1px solid #d3d8dc;
}
</style>