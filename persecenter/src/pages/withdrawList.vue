<template>
  <div>
    <form name="bindBankcardForm" novalidate>
      <input type="hidden" name="gb.token" value="d1fe0161-7066-4a7c-b360-d89dfa9eb743">
      <div class="user-info">
        <h3>绑定取款银行卡</h3>
        <h4
          class="gray"
          style="font-weight: normal; padding-top: 10px"
        >取款前请先添加银行卡,成功取款后,我们会将款项打至您填写的这张卡上!</h4>
        <div class="m-t-sm line-hi32">
          <div class="control-grouptwo">
            <label class="control-left">真实姓名：</label>
            <div class="controls">
              <input
                type="text"
                name="result.bankcardMasterName"
                maxlength="30"
                class="input bn error bankcardMasterName"
                aria-required="true"
                aria-invalid="true"
                v-model="realname"
              >
              <span class="tips orange">
                <i class="mark plaintsmall"></i>真实姓名不能为空
              </span>
            </div>
            <p class="tipsgray">银行卡户名与真实姓名一致才能取款成功</p>
          </div>
          <div class="control-grouptwo clearfix ud-select" style="margin-top: 0;">
            <label class="control-left">银行：</label>
            <div class="bank-deposit" id="bank_list" style="margin-bottom: 0">
              <div class="bank-total">
                <label class="bank" bankcode="icbc">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="icbc"
                    >
                  </span>
                  <span class="radio-bank" title="中国工商银行">
                    <i class="pay-bank icbc"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="ccb">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="ccb"
                    >
                  </span>
                  <span class="radio-bank" title="中国建设银行">
                    <i class="pay-bank ccb"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="abc">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="abc"
                    >
                  </span>
                  <span class="radio-bank" title="中国农业银行">
                    <i class="pay-bank abc"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="boc">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="boc"
                    >
                  </span>
                  <span class="radio-bank" title="中国银行">
                    <i class="pay-bank boc"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="cmb">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="cmb"
                    >
                  </span>
                  <span class="radio-bank" title="招商银行">
                    <i class="pay-bank cmb"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="cmbc">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="cmbc"
                    >
                  </span>
                  <span class="radio-bank" title="中国民生银行">
                    <i class="pay-bank cmbc"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="ceb">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="ceb"
                    >
                  </span>
                  <span class="radio-bank" title="中国光大银行">
                    <i class="pay-bank ceb"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="cib">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="cib"
                    >
                  </span>
                  <span class="radio-bank" title="兴业银行">
                    <i class="pay-bank cib"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="spdb">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="spdb"
                    >
                  </span>
                  <span class="radio-bank" title="上海浦东发展银行">
                    <i class="pay-bank spdb"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="comm">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="comm"
                    >
                  </span>
                  <span class="radio-bank" title="交通银行">
                    <i class="pay-bank comm"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="spabank">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="spabank"
                    >
                  </span>
                  <span class="radio-bank" title="平安银行">
                    <i class="pay-bank spabank"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="bjbank">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="bjbank"
                    >
                  </span>
                  <span class="radio-bank" title="北京银行">
                    <i class="pay-bank bjbank"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="citic">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="citic"
                    >
                  </span>
                  <span class="radio-bank" title="中信银行">
                    <i class="pay-bank citic"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="gdb">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="gdb"
                    >
                  </span>
                  <span class="radio-bank" title="广东发展银行">
                    <i class="pay-bank gdb"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="psbc">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      tipsname="result.bankNametips"
                      showsuccmsg="false"
                      type="radio"
                      value="psbc"
                    >
                  </span>
                  <span class="radio-bank" title="中国邮政储蓄银行">
                    <i class="pay-bank psbc"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
              </div>
              <div name="hideBank" v-if="unfoldBanks" class="other">
                <label class="bank" bankcode="jsbank">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="jsbank">
                  </span>
                  <span class="radio-bank" title="江苏银行">
                    <i class="pay-bank jsbank"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="hxbank">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="hxbank">
                  </span>
                  <span class="radio-bank" title="华夏银行">
                    <i class="pay-bank hxbank"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="shbank">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="shbank">
                  </span>
                  <span class="radio-bank" title="上海银行">
                    <i class="pay-bank shbank"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="bohaib">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="bohaib">
                  </span>
                  <span class="radio-bank" title="渤海银行">
                    <i class="pay-bank bohaib"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="hkbea">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="hkbea">
                  </span>
                  <span class="radio-bank" title="东亚银行">
                    <i class="pay-bank hkbea"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="nbbank">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="nbbank">
                  </span>
                  <span class="radio-bank" title="宁波银行">
                    <i class="pay-bank nbbank"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="czbank">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="czbank">
                  </span>
                  <span class="radio-bank" title="浙商银行">
                    <i class="pay-bank czbank"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="hzcb">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="hzcb">
                  </span>
                  <span class="radio-bank" title="杭州银行">
                    <i class="pay-bank hzcb"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="gcb">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="gcb">
                  </span>
                  <span class="radio-bank" title="广州银行">
                    <i class="pay-bank gcb"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="fjnx">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="fjnx">
                  </span>
                  <span class="radio-bank" title="福建农商银行">
                    <i class="pay-bank fjnx"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="hangseng">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="hangseng">
                  </span>
                  <span class="radio-bank" title="恒生银行">
                    <i class="pay-bank hangseng"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="tzb">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="tzb">
                  </span>
                  <span class="radio-bank" title="台州银行">
                    <i class="pay-bank tzb"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="jlbank">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="jlbank">
                  </span>
                  <span class="radio-bank" title="吉林银行">
                    <i class="pay-bank jlbank"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="qdbank">
                  <span class="radio">
                    <input name="result.bankName" showsuccmsg="false" type="radio" value="qdbank">
                  </span>
                  <span class="radio-bank" title="青岛银行">
                    <i class="pay-bank qdbank"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
                <label class="bank" bankcode="other_bank">
                  <span class="radio">
                    <input
                      name="result.bankName"
                      showsuccmsg="false"
                      type="radio"
                      value="other_bank"
                    >
                  </span>
                  <span class="radio-bank" title="其他银行">
                    <i class="pay-bank other_bank"></i>
                  </span>
                  <span class="bank-logo-name"></span>
                </label>
              </div>
              <div class="clear"></div>
              <div class="bank-total" name="bankNameMsg" style="display: none">
                <div class="title"></div>
              </div>
            </div>
            <div class="bank-spreadout set" style="margin-right: 108px; margin-bottom: 0;">
              <span name="extendBank" class="down" v-if="showBanks">
                <a title="展开更多银行" @click="unfold">展开更多银行</a>
                <i class="bank-arrico down"></i>
              </span>
              <span v-else name="collapseBank" class="up">
                <a title="收起部分银行" @click="PackUp">收起部分银行</a>
                <i class="bank-arrico up"></i>
              </span>
            </div>
            <div class="control-grouptwo">
              <label class="control-left">&nbsp;</label>
              <div class="controls">
                <span tipsname="result.bankName-tips"></span>
              </div>
            </div>
          </div>
          <div class="control-grouptwo clear">
            <label class="control-left">银行卡号：</label>
            <div class="controls">
              <input
                type="text"
                class="input bn ignore bankcardNumber"
                placeholder
                maxlength="30"
                name="bankcardNumber2"
                autocomplete="off"
              >
            </div>
          </div>
          <div class="control-grouptwo">
            <label class="control-left">开户行：</label>
            <div class="controls">
              <input
                type="text"
                autocomplete="off"
                class="input bn result-bankDeposit"
                name="result.bankDeposit"
                value
              >
            </div>
            <p class="tipsgray">如：河北唐山建设银行</p>
          </div>
          <div class="control-grouptwo">
            <label class="control-label" style="width:132px;"></label>
            <div class="controls" id="submitInfo">
              <a @click="withDrawPagereset" title="重置" class="btn btn-gray middle-big reset">重置</a>
              <a @click="withDrawPageConfirm" title="确认" class="btn btn-blue middle-big btn-bank confirm">确认</a>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import '@/assets/css/withdrawList.css'
export default {
  data() {
    return {
      showBanks: "true",
      unfoldBanks: false,
      realname: ''
    };
  },
  methods: {
    unfold: function () {
      this.showBanks = false;
      this.unfoldBanks = true
    },
    PackUp: function()  {
      this.showBanks = true;
      this.unfoldBanks = false
    },
    withDrawPagereset() {
      alert(3)
    },
    withDrawPageConfirm() {
      alert('确认')
    }
  }
}
</script>
