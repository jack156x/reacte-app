<template>
<div>
     <!-- 支付专区 -->
    <div class="deposit-info-warp  clearfix">
        <div class="titleline pull-left">
            <el-dropdown class="btn-group table-desc-right-t-dropdown bank-down-menu">
                <el-button type="primary" class="btn btn btn-default">
                    <i class="pay-third" :class="payClass"></i>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <router-link :to="{name:$route.name,params:{'paytype':1}}"><i class="pay-third ebankpay" @click="selectClass('ebankpay')"></i></router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <router-link :to="{name:$route.name,params:{'paytype':2}}"><i class="pay-third quick_pay" @click="selectClass('quick_pay')"></i></router-link>
                    </el-dropdown-item>
                    <el-dropdown-item >
                        <router-link :to="{name:$route.name,params:{'paytype':3}}"><i class="pay-third wechatpay" @click="selectClass('wechatpay')"></i></router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <router-link :to="{name:$route.name,params:{'paytype':4}}"><i class="pay-third alipay_micropay" @click="selectClass('alipay_micropay')"></i></router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <router-link :to="{name:$route.name,params:{'paytype':5}}"><i class="pay-third unionpay" @click="selectClass('unionpay')"></i></router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <router-link :to="{name:$route.name,params:{'paytype':6}}"><i class="pay-third cloudunionpay" @click="selectClass('cloudunionpay')"></i></router-link>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-button @click="prev" plain class="btn btn-gray pull-right">返回上一级</el-button>
    </div>

    <!-- 网银支付 -->
    <div class="account-list account-info-warp">
        <div class="left-ico-message">
            <h4>请选择银行</h4>
            <span class="deposit-info-title">
                步骤1
            <img src="@/assets/images/online-pay1.png"></span>
            <div class="bank-deposit">
                <div class="bank-total">
                    <el-radio class="bank select"  v-show="paytype=='1'" v-model="radio" label="1">
                         <span class="radio-bank">
                            <i class="pay-bank sm icbc"></i>
                            <font class="diy-pay-title">网银-转账</font>
                        </span> 
                        <span class="bank-logo-name">网银-转账</span> 
                    </el-radio>

                    <el-radio class="bank select" v-show="paytype=='4'" v-model="radio" label="1">
                        <span class="radio-bank"> 
                            <i class="pay-third sm alipay"></i>
                            <font class="diy-pay-title">支付宝扫码支付</font>
                        </span> 
                        <span class="bank-logo-name">支付宝扫码支付</span> 
                    </el-radio>
                    <el-radio class="bank" v-show="paytype=='4'" v-model="radio" :label="radio">
                        <span class="radio-bank"> 
                           <i class="pay-third sm alipay"></i> 
                           <font class="diy-pay-title">支付宝转账招商银行</font> 
                        </span> 
                        <span class="bank-logo-name">支付宝转账招商银行</span>  
                    </el-radio>
                    <el-radio class="bank" v-show="paytype=='4'" v-model="radio" :label="radio">
                        <span class="radio-bank"> 
                            <i class="pay-third sm alipay"></i> 
                            <font class="diy-pay-title">支付宝面对面【58】</font> 
                        </span> 
                        <span class="bank-logo-name">支付宝面对面【58】</span> 
                    </el-radio>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <div class="account-list account-info-warp" v-show="paytype=='1'">
        <div class="left-ico-message clearfix">
            <h4>请用存款至下方银行账户：</h4>
            <span class="deposit-info-title">步骤2<img src="@/assets/images/online-pay1.png"></span>
            <div class="bank-paidtotal accountInfo">
                <ul>
                    <li>
                        <div class="bankinfo linbankinfo-m">
                            <h1> <i class="pay-bank icbc"></i> <em class="cardlabel debit"></em> </h1>
                            <span class="orange cardnumber select" name="copy">
                                <em class="bank-number" id="bankCard962">4200 2046 0100 8634 263</em> 
                                <a href="javascript:;" class="btn-copy">复制</a> 
                            </span>
                            <span class="paidname select"  name="copy">
                                <em class="gray">银行用户名：</em> 
                                <em class="gathering-name" id="fullName962">程哲</em> 
                                <a href="javascript:;" class="btn-copy">复制</a> 
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="accountInfo">
                <pre style="margin: 20px;white-space: pre-wrap;word-wrap: break-word;">★本棋牌的充值账号将会不定时更新，敬请各位玩家通过网站玩家中心充值频道查看最新的充值账号并进行转款。如充值至已停用账号网站将无法查收，恕不承担相应损失；建议您充值金额请加以小数点或尾数，以便区别。如充值200元，请输入201元或200.1之类小数。感谢您的配合！</pre>
            </div>
            <ul class="attention-list">
                <li> <a href="javascript:;" class="openPage">查看转账演示帮助？</a> </li>
            </ul>
            <div class="control-group bank-menu"> 
                <a href="http://www.icbc.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去中国工商银行转账</a> <a href="http://www.ccb.com" type="button" target="_blank" class="btn btn-outline btn-filter">去中国建设银行转账</a> <a href="http://www.95599.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去中国农业银行转账</a> <a href="http://www.boc.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去中国银行转账</a>
                <div id="expendBanks" style="display:none"> 
                    <a href="http://www.cmbchina.com" type="button" target="_blank" class="btn btn-outline btn-filter">去招商银行转账</a> <a href="http://www.cmbc.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去中国民生银行转账</a> <a href="http://www.cebbank.com" type="button" target="_blank" class="btn btn-outline btn-filter">去中国光大银行转账</a> <a href="http://www.cib.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去兴业银行转账</a> <a href="http://www.spdb.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去上海浦东发展银行转账</a> <a href="http://www.95559.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去交通银行转账</a> <a href="http://bank.pingan.com" type="button" target="_blank" class="btn btn-outline btn-filter">去平安银行转账</a> <a href="http://www.bankofbeijing.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去北京银行转账</a> <a href="http://bank.ecitic.com" type="button" target="_blank" class="btn btn-outline btn-filter">去中信银行转账</a> <a href="http://www.cgbchina.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去广东发展银行转账</a> <a href="http://www.psbc.com" type="button" target="_blank" class="btn btn-outline btn-filter">去中国邮政储蓄银行转账</a> <a href="http://www.jsbchina.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去江苏银行转账</a> <a href="http://www.hxb.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去华夏银行转账</a> <a href="http://www.bankofshanghai.com" type="button" target="_blank" class="btn btn-outline btn-filter">去上海银行转账</a> <a href="http://www.cbhb.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去渤海银行转账</a> <a href="http://www.hkbea.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去东亚银行转账</a> <a href="http://www.nbcb.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去宁波银行转账</a> <a href="http://www.czbank.com" type="button" target="_blank" class="btn btn-outline btn-filter">去浙商银行转账</a> <a href="http://www.hzbank.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去杭州银行转账</a> <a href="http://www.gzcb.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去广州银行转账</a>
                    <a href="http://www.fjnx.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去福建农商银行转账</a> <a href="http://www.hangseng.com.cn/" type="button" target="_blank" class="btn btn-outline btn-filter">去恒生银行转账</a> <a href="http://www.tzbank.com/" type="button" target="_blank" class="btn btn-outline btn-filter">去台州银行转账</a> <a href="http://www.jlbank.com.cn" type="button" target="_blank" class="btn btn-outline btn-filter">去吉林银行转账</a> <a href="http://www.qdccb.com" type="button" target="_blank" class="btn btn-outline btn-filter">去青岛银行转账</a> </div>
                <a class="more-pull-down">
                        <span>查看更多网上银行</span>
                        <i class="bank-arrico down"></i> 
                </a>
            </div>
        </div>
    </div>
    <div class="account-list account-info-warp" v-show="paytype=='1'">
        <div class="left-ico-message">
            <h4>请填写存款金额：</h4>
            <span class="deposit-info-title">步骤3<img src="@/assets/images/online-pay2.png"></span>
            <div class="control-group">
                <label class="control-label" for="result.rechargeAmount">存款金额：</label>
                <div class="controls">
                    <input type="text" value="" class="input error" placeholder="* 范围:10.00 ~ 99,999,999.00" name="result.rechargeAmount" id="result.rechargeAmount" autocomplete="off">
                    <span class="tips orange"><i class="mark plaintsmall"></i>请输入存款金额</span> <span class="fee"></span> </div>
            </div>
            <div class="control-group">
                <label class="control-label" for="result.payerName">存款人姓名：</label>
                <div class="controls">
                    <input type="text" id="result.payerName" name="result.payerName" placeholder="您转账时使用的银行卡姓名" class="input">
            </div>
                </div>
                <div class="bank-paidtotal accountInfo"> </div>
                <input type="hidden" name="isOpenActivityHall" value="true">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr>
                            <td width="72" class="al-right" style="width: 202px">
                                <span class="ci-count"> 温馨推荐</span>
                            </td>
                            <td width="500"><span class=""> &nbsp;&nbsp;完成存款后，可以前往活动大厅申请活动优惠</span></td>
                        </tr>
                    </tbody>
                </table>
                <div class=" control-group">
                    <label class="control-label"></label>
                    <a title="确定存款" class="btn-blue btn large-big disabled _submit"> 确定存款 </a> </div>
                <div class="applysale">
                    <ul class="transfer-tips \AMG">
                        <li>温馨提示：</li>
                        <li>单笔储值最低<span style="color:red">CNY10.00</span>，最高为<span style="color:red">CNY99,999,999.00</span>，并须视各家银行转款上限而定。</li>
                        <li>先查看要入款的银行账号信息，然后通过网上银行、ATM、柜台或手机银行进行转账，转账成功后再如实提交转账信息，财务专员查收到信息后会及时添加您的款项。</li>
                        <li>请尽可能选择同行办理转账，可快速到账。</li>
                        <li>存款完成后，保留单据以利核对并确保您的权益。</li>
                        <li>建议您使用Internet Explorer 9以上、360浏览器、Firefox或Google Chrome等浏览器浏览。</li>
                        <li>如出现充值失败或充值后未到账等情况，请联系在线客服获取帮助。 <a title="点击联系在线客服" class=""> 点击联系在线客服 </a> </li>
                    </ul>
                </div>
            </div>
        </div>



        <div class="account-list account-info-warp" v-show="paytype=='2'">
        <div class="left-ico-message">
          <h4>请填写存款金额：</h4>
          <span class="deposit-info-title">步骤<span id="step">2</span><img src="@/assets/images/online-pay2.png"></span>
          <div class="control-group" name="scanElement" style="">
            <label class="control-label">存款账号：</label>
            <div class="controls">linda</div>
          </div>
          <div class="control-group">
            <label class="control-label" for="result.rechargeAmount">存款金额：</label>
            <div class="controls">
              <input style="width: 200px" type="text" class="input valid" name="rechargeAmount" placeholder="* 范围:100.00 ~ 5,000.00" aria-invalid="false">
              <input type="hidden" class="input" name="result.rechargeAmount" id="result.rechargeAmount">
              <input type="hidden" name="rechargeDecimals" value="18">
              <span class="right-decimals" style="display:none" id="rechargeDecimals">.18</span> <span tipsname="result.rechargeAmount-tips"></span> <span class="fee"></span> </div>
          </div>
          <!--优惠-->
          <input type="hidden" name="isOpenActivityHall" value="true">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="72" class="al-right" style="width: 202px"><span class="ci-count"> 温馨推荐</span></td>
                <td width="500"><span class=""> &nbsp;&nbsp;完成存款后，可以前往活动大厅申请活动优惠</span></td>
              </tr>
            </tbody>
          </table>
          <div class=" control-group">
            <label class="control-label"></label>
            <input type="hidden" name="result.rechargeType" value="quick_pay">
            <button title="立即存款" class="btn-blue btn large-big" type="button"> 立即存款 </button>
          </div>
          <div class="applysale">
            <ul id="scanDocument" class="transfer-tips">
              <li>温馨提示：</li>
              <li>单笔储值最低<span style="color:red">CNY</span><span id="payMin" style="color:red">100.00</span>，最高为
              <span style="color:red">CNY</span><span id="payMax" style="color:red">5,000.00</span>，如存款高于上限请分多笔支付。</li>
              <li>支付成功后，请等待几秒钟，提示<span style="color:red">「支付成功」</span>按确认键后再关闭支付窗口。</li>
              <li>建议您使用Internet Explorer 9以上、360浏览器、Firefox或Google Chrome等浏览器浏览。</li>
              <li>如出现充值失败或充值后未到账等情况，请联系在线客服获取帮助。 <a title="点击联系在线客服"> 点击联系在线客服 </a> </li>
            </ul>
            
           
            
          </div>
        </div>
      </div>

        <div name="electronicElement" class="account-list account-info-warp" v-show="paytype=='3'">
        <div class="left-ico-message clearfix">
          <h4>请用微信支付存款至以下帐户：</h4>
          <span class="deposit-info-title">步骤2<img src="@/assets/images/online-pay2.png"></span>
          <div class="left-warp">
            <div class="bank-paidtotal">
              <ul>
                <li>
                  <div class="bankinfo bankinfo-m">
                    <h1> <i class="pay-third wechatpay"></i> <i id="customBankName"> 微信转账招商银行</i></h1>
                    <span class="orange paidname select" data-clipboard-text="6214832170281138" name="copy"> <em class="bank-number" id="bankNum">6214832170281138</em> <a href="javascript:;" class="btn-copy">复制</a> </span> <span class="paidname select" data-clipboard-text="李志晖" name="copy"> <em class="gray">姓名：</em> <em class="gathering-name" id="bankName">李志晖</em> <a href="javascript:;" class="btn-copy">复制</a> </span> </div>
                </li>
              </ul>
            </div>
            <div class="control-group">
              <div class="m-l" id="accountRemark"> ★本棋牌的充值账号将会不定时更新，敬请各位玩家通过网站玩家中心充值频道查看最新的充值账号并进行转款。如充值至已停用账号网站将无法查收，恕不承担相应损失；建议您充值金额请加以小数点或尾数，以便区别。如充值200元，请输入201元或200.1之类小数。感谢您的配合！</div>
            </div>
          </div>
          <div id="qrCodeUrl" class="pull-left" style="display:none"> <span class="two-dimension"> <img src="" style="width: 176px;height: 176px;"> <em><img src="images/two-dimension-ico.png" class="pull-left">微信支付扫一扫付款</em> </span> <span><img src="images/two-dimension123.png"></span> </div>
        </div>
      </div>

        <div class="account-list account-info-warp" v-show="paytype=='3'">
        <div class="left-ico-message">
          <h4>请填写存款金额：</h4>
          <span class="deposit-info-title">步骤<span id="step">3</span><img src="@/assets/images/online-pay2.png"></span>
          <div class="control-group" name="scanElement" style="display:none">
            <label class="control-label">存款账号：</label>
            <div class="controls">linda</div>
          </div>
          <div class="control-group" name="electronicElement" style="">
            <input type="hidden" id="accountLabelId" prompt="* 如：陈XX" value="您的微信支付账号">
            <label class="control-label" id="payerBankcardLabel" for="result.payerBankcard">您的微信支付账号：</label>
            <div class="controls">
              <input style="width: 200px" type="text" id="result.payerBankcard" name="result.payerBankcard" class="input error" placeholder="* 如：陈XX" aria-required="true" aria-invalid="true">
              <span class="tips orange"><i class="mark plaintsmall"></i>您的微信支付账号不能为空</span> </div>
          </div>
          <div name="electronicElement" class="control-group" style="">
            <label class="control-label">订单号（后5位）：</label>
            <div class="controls">
              <input style="width: 200px" type="text" class="input" placeholder="请填写“商户订单号”" maxlength="5" name="result.bankOrder" autocomplete="off">
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="result.rechargeAmount">存款金额：</label>
            <div class="controls">
              <input style="width: 200px" type="text" class="input" name="rechargeAmount" placeholder="* 范围:10.00 ~ 99,999,999.00">
              <input type="hidden" class="input" name="result.rechargeAmount" id="result.rechargeAmount">
              <input type="hidden" name="rechargeDecimals" value="24">
              <span class="right-decimals" style="display:none" id="rechargeDecimals">.24</span> <span tipsname="result.rechargeAmount-tips"></span> <span class="fee"></span> </div>
          </div>
          <!--优惠-->
          <input type="hidden" name="isOpenActivityHall" value="true">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="72" class="al-right" style="width: 202px"><span class="ci-count"> 温馨推荐</span></td>
                <td width="500"><span class=""> &nbsp;&nbsp;完成存款后，可以前往活动大厅申请活动优惠</span></td>
              </tr>
            </tbody>
          </table>
          <div class=" control-group">
            <label class="control-label"></label>
            <input type="hidden" name="result.rechargeType" value="wechatpay_fast">
            <button title="立即存款" class="btn-blue btn large-big" type="button"> 立即存款 </button>
          </div>
          <div class="applysale">
            <ul id="scanDocument" class="transfer-tips" style="display: none">
              <li>温馨提示：</li>
              <li>单笔储值最低<span style="color:red">CNY</span><span id="payMin" style="color:red">10.00</span>，最高为<span style="color:red">CNY</span><span id="payMax" style="color:red">99,999,999.00</span>，如存款高于上限请分多笔支付。</li>
              <li>支付成功后，请等待几秒钟，提示<span style="color:red">「支付成功」</span>按确认键后再关闭支付窗口。</li>
              <li>建议您使用Internet Explorer 9以上、360浏览器、Firefox或Google Chrome等浏览器浏览。</li>
              <li>如出现充值失败或充值后未到账等情况，请联系在线客服获取帮助。 <a title="点击联系在线客服" class="" data-rel="{&quot;precall&quot;:&quot;&quot;,&quot;callback&quot;:&quot;&quot;,post:&quot;&quot;,opType:&quot;function&quot;,dataType:&quot;&quot;,target:&quot;customerService&quot;,confirm:&quot;&quot;,text:&quot;点击联系在线客服&quot;,size:&quot;&quot;,&quot;url&quot;:&quot;https://chat6.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=262911&amp;configID=43611&amp;jid=3663497425&amp;s=1&quot; }"> 点击联系在线客服 </a> </li>
            </ul>
            <ul id="electronicDocument" class="transfer-tips" style="">
              <li>温馨提示：</li>
              <li>请先查看入款账号信息或扫描二维码。</li>
              <li>单笔储值最低<span style="color:red">CNY10.00</span>，最高为<span style="color:red">CNY99,999,999.00</span>，如存款高于上限请分多笔支付。</li>
              <li>存款金额请加以小数点或尾数，以便区别。如充值200元，请输入201元或200.1之类小数。</li>
              <li>支付成功后，请等待几秒钟，提示<span style="color:red">「支付成功」</span>按确认键后再关闭支付窗口。</li>
              <li>为了系统快速完成转账，请输入订单号后5位，以加快系统入款速度。</li>
              <li>建议您使用Internet Explorer 9以上、360浏览器、Firefox或Google Chrome等浏览器浏览。</li>
              <li>如出现充值失败或充值后未到账等情况，请联系在线客服获取帮助。 <a title="点击联系在线客服" class="" data-rel="{&quot;precall&quot;:&quot;&quot;,&quot;callback&quot;:&quot;&quot;,post:&quot;&quot;,opType:&quot;function&quot;,dataType:&quot;&quot;,target:&quot;customerService&quot;,confirm:&quot;&quot;,text:&quot;点击联系在线客服&quot;,size:&quot;&quot;,&quot;url&quot;:&quot;https://chat6.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=262911&amp;configID=43611&amp;jid=3663497425&amp;s=1&quot; }"> 点击联系在线客服 </a> </li>
            </ul>
          </div>
        </div>
      </div>
        <div class="account-list account-info-warp" v-show="paytype=='2' ||paytype=='4' || paytype=='5' || paytype=='6'">
        <div class="left-ico-message">
          <h4>请填写存款金额：</h4>
          <span class="deposit-info-title">步骤<span id="step">2</span><img src="@/assets/images/online-pay2.png"></span>
          <div class="control-group" name="scanElement" style="">
            <label class="control-label">存款账号：</label>
            <div class="controls">linda</div>
          </div>
          <div class="control-group">
            <label class="control-label" for="result.rechargeAmount">存款金额：</label>
            <div class="controls">
              <input style="width: 200px" type="text" class="input valid" name="rechargeAmount" placeholder="* 范围:10.00 ~ 10,000.00" aria-invalid="false">
              <input type="hidden" class="input" name="result.rechargeAmount" id="result.rechargeAmount">
              <input type="hidden" name="rechargeDecimals" value="69">
              <span class="right-decimals" style="display:none" id="rechargeDecimals">.69</span> <span tipsname="result.rechargeAmount-tips"></span> <span class="fee"></span> </div>
          </div>
          <!--优惠-->
          <input type="hidden" name="isOpenActivityHall" value="true">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="72" class="al-right" style="width: 202px"><span class="ci-count"> 温馨推荐</span></td>
                <td width="500"><span class=""> &nbsp;&nbsp;完成存款后，可以前往活动大厅申请活动优惠</span></td>
              </tr>
            </tbody>
          </table>
          <div class=" control-group">
            <label class="control-label"></label>
            <input type="hidden" name="result.rechargeType" value="alipay_scan">
            <button title="立即存款" class="btn-blue btn large-big" type="button" data-rel="{&quot;precall&quot;:&quot;validateForm&quot;,&quot;callback&quot;:&quot;&quot;,post:&quot;&quot;,opType:&quot;function&quot;,dataType:&quot;&quot;,target:&quot;sumFailureCount&quot;,confirm:&quot;&quot;,text:&quot;立即存款&quot;,size:&quot;&quot; }"> 立即存款 </button>
          </div>
          <div class="applysale">
            <ul id="scanDocument" class="transfer-tips">
              <li>温馨提示：</li>
              <li>单笔储值最低<span style="color:red">CNY</span><span id="payMin" style="color:red">10.00</span>，最高为<span style="color:red">CNY</span><span id="payMax" style="color:red">10,000.00</span>，如存款高于上限请分多笔支付。</li>
              <li>支付成功后，请等待几秒钟，提示<span style="color:red">「支付成功」</span>按确认键后再关闭支付窗口。</li>
              <li>建议您使用Internet Explorer 9以上、360浏览器、Firefox或Google Chrome等浏览器浏览。</li>
              <li>如出现充值失败或充值后未到账等情况，请联系在线客服获取帮助。 <a title="点击联系在线客服" class="" data-rel="{&quot;precall&quot;:&quot;&quot;,&quot;callback&quot;:&quot;&quot;,post:&quot;&quot;,opType:&quot;function&quot;,dataType:&quot;&quot;,target:&quot;customerService&quot;,confirm:&quot;&quot;,text:&quot;点击联系在线客服&quot;,size:&quot;&quot;,&quot;url&quot;:&quot;https://chat6.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=262911&amp;configID=43611&amp;jid=3663497425&amp;s=1&quot; }"> 点击联系在线客服 </a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name:'withdrawal',
        data() {
            return {
                 options: [{
                    value: '选项1',
                    label: '面皮'
                    }],
                    value4: '',
                radio: '1',
                payClass:'quick_pay'
            }
        },
        methods:{
            prev(){
                this.$router.go(-1)
            },
            selectClass(classname){
                this.$logger.log(classname)
                this.payClass=classname
            }
        },
        computed: {
            paytype() {
                return this.$route.params.paytype
            }
        },
    }
</script>

<style scoped>
.clearfix:before, .clearfix:after, .row:before, .row:after, .control-group:before, .control-group:after {
    display: table;
    content: " ";
}
.deposit-info-warp .titleline {
    margin: 0 20px;
    position: relative;
    margin-top: 20px;
}
.pull-left {
    float: left;
    margin-top: 3px;
}
.pull-right {
    float: right;
}
.bank-down-menu {
    position: relative;
}
.titleline .bank-down-menu .btn.btn-default {
    min-width: 180px;
    margin: 0;
}
.bank-down-menu .btn.btn-default {
    min-width: 300px;
    text-align: left;
}
.deposit-info-warp .btn {
    margin: 17px 20px 0 0;
}
.btn-default {
    color: #676a6c;
    background-color: #fff;
    border-color: #e5e6e7;
    border: 1px solid #bdbdbd!important;
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

.bank-down-menu .btn.btn-default .carat {
    position: absolute;
    right: 12px;
    top: 50%;
    margin-top: -4px;
    border: 6px solid transparent;
    border-top: 7px solid #000;
}
.bank-down-menu .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 100%;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
}

.dropdown-menu {
    border: medium none;
    border-radius: 3px;
    box-shadow: 0 0 3px rgba(86,96,117,0.7);
    display: none;
    float: left;
    font-size: 12px;
    left: 0;
    list-style: none outside none;
    padding: 0;
    position: absolute;
    text-shadow: none;
    top: 100%;
    z-index: 1000;
    border-radius: 2px;
}
.bank-down-menu .dropdown-menu>li>a {
    display: block;
    padding: 3px 10px 0 5px;
    clear: both;
    font-weight: normal;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
}
.dropdown-menu>li>a {
    border-radius: 3px;
    color: inherit;
    line-height: 25px;
    margin: 4px;
    text-align: left;
    font-weight: normal;
    padding: 3px 10px;
}
.pay-third.ebankpay {
    background-position: 0 -1050px;
}

.pay-bank.sm, .pay-third.sm {
    width: 35px;
    display: inline-block;
    height: 30px;
    vertical-align: middle;
    background: url("../assets/images/pay-bank-x.png") left top no-repeat;
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
    border-left: 180px solid #f7f8f9;
}
.left-ico-message {
    padding: 20px 0;
    border-left: 180px solid #f7f8f9;
    position: relative;
    min-height: 120px;
}
.account-info-warp h4 {
    margin-left: 20px;
    color: #2772ee;
}
.deposit-info-title {
    position: absolute;
    left: -170px;
    font-size: 20px;
    top: 20px;
    text-align: center;
    width: 160px;
}
.deposit-info-title img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    opacity: .2;
}
.bank-deposit {
    margin-left: 15px;
    display: block;
    overflow: hidden;
    margin-bottom: 15px;
}
.bank.select {
    background: url("../assets/images/selectbank.png") no-repeat 156px 29px;
}
.bank:hover, .bank.select {
    border: 2px solid #2772ee;
    cursor: pointer;
    width: 166px;
    height: 32px;
}
.btn-filter:hover, .btn-filter:focus, .btn-filter:active, .btn-filter.active, .open .dropdown-toggle.btn-filter {
    background-color: #3b82f7;
    border-color: #3b82f7!important;
    color: #fff!important;
}
.btn-filter.btn-outline:hover {
    color: #fff;
    border-color: #347bf0;
}
.bank {
    float: left;
    cursor: pointer;
    border: 2px solid #e2e2e2;
    margin-right: 8px;
    margin-top: 8px;
    width: 166px;
    height: 32px;
    padding: 8px 0 6px 8px;
    margin-left: 0;
    border-radius: 4px;
}
.radio {
    cursor: pointer;
}
.pay-bank.icbc {
    background-position: 0 -60px;
}
.diy-pay-title {
    display: inline-block;
    font-size: 12px;
    width: 91px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: middle;
}
.bank-logo-name {
    line-height: 0;
    overflow: hidden;
    display: block;
}
.saleactive .item:after, .main-wrap:after, .banner .right:after, .safe:after, .game:after, .saletotal .content:after, .message li:after, .user-info:after, .invite-copy:after, .clear:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
    overflow: hidden;
    line-height: 0;
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
.bank-paidtotal {
    overflow: hidden;
    min-width: 900px;
    margin-bottom: 15px;
}
.bank-paidtotal li {
    float: left;
    margin-left: 30px;
    margin-top: 10px;
    text-align: left;
}

.bank-paidtotal li .bankinfo {
    /* background: url("../assets/images/paidbg.png") no-repeat; */
    width: 339px;
    height: 169px;
    margin-left: 20px;
    padding: 5px 5px 0 5px;
    border: 0;
}
.bank-paidtotal li .linbankinfo-m {
    background: url("../assets/images/paidbg-l.png") no-repeat;
    width: 339px;
    height: 195px;
    margin-left: -13px;
}
.bank-paidtotal h1 {
    padding-top: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    line-height: 35px;
}
.bankinfo h1 {
    margin-left: 10px;
    height: 50px;
    padding-top: 8px;
}
.pay-bank.icbc {
    background-position: 0 -60px;
}
.pay-bank {
    cursor: pointer;
    vertical-align: middle;
}
.pay-bank, .pay-third {
    width: 125px;
    display: inline-block;
    height: 30px;
    vertical-align: middle;
    background: url("../assets/images/pay-bank.png") left top no-repeat;
}
.pay-third.ebankpay {
    background-position: 0 -1050px;
}
.pay-third.quick_pay {
    background-position: 0 -1385px;
}
.pay-third.wechatpay {
    background-position: 0 -90px;
}
.pay-third.sm{
    background: url("../assets/images/pay-third-x.png") left top no-repeat;
}
.pay-third.alipay_micropay,.pay-third.alipay{
    background-position: 0 -60px;
}
.pay-third.unionpay {
    background-position: 0 -150px;
}
.pay-third.cloudunionpay {
    background-position: 0 -1352px;
}
.pay-third {
    background: url("../assets/images/pay-third.png") left top no-repeat;
}
.cardlabel.debit {
    position: relative;
    margin-top: 2px;
}
.cardlabel {
    display: inline-block;
    padding-right: 5px;
    vertical-align: top;
    width: 55px;
    height: 25px;
    background: url("../assets/images/cardlabel.png") no-repeat top left;
    cursor: pointer;
}
.bank-paidtotal li .bankinfo span {
    display: block;
    padding: 0 20px 0 15px;
    text-align: left;
    height: 32px;
    line-height: 32px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.cardnumber {
    font-size: 23px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 5px;
}
.orange {
    color: #f88311!important;
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
.bankinfo .bank-number {
    display: inline-block;
    max-width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
span.select a.btn-copy {
    display: none;
    line-height: 32px;
    background: 0;
    cursor: pointer;
}
.select .btn-copy {
    position: absolute!important;
    font-size: 12px;
    right: 5px;
    top: 0;
    color: #4f86ef;
    font-family: "Microsoft YaHei";
}
.bank-paidtotal li .bankinfo span {
    display: block;
    padding: 0 20px 0 15px;
    text-align: left;
    height: 32px;
    line-height: 32px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.paidname {
    color: #333;
}
.attention-list {
    margin: 20px 20px;
}
.attention-list li {
    margin-bottom: 8px;
}
.account-info-warp .control-group, .account-info-warp .control-grouptwo {
    margin: 10px;
}
.bank-menu {
    position: relative;
    width: 570px;
}
.control-group {
    margin-bottom: 15px;
    display: block;
}
.bank-menu a.btn {
    margin: 0 0 10px 10px;
    width: 245px;
}
.btn-filter.btn-outline {
    color: #787e82;
    border-color: #d3d3d3;
}
.btn-filter.btn-outline {
    color: #a0aab2;
    border-color: #e6e9ee;
}
.btn-outline {
    color: inherit;
    background-color: #fff;
}
.bank-menu a.more-pull-down{
    display: block;
    position: absolute;
    right: -140px;
    top: 5px;
}
.control-group {
    margin-bottom: 15px;
    display: block;
}
.account-info-warp .control-group, .account-info-warp .control-grouptwo {
    margin: 10px;
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
.account-info-warp input, .account-info-warp select {
    margin: 0;
}
.input:hover {
    background: #fff;
    border: 1px solid #1e90ff;
    height: 30px;
    padding-left: 10px;
    margin-right: 5px;
    background: #f0f4f7;
    transition: border linear .2s, box-shadow linear .2s;
}
select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input {
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
.input {
    background: #fff;
    border: 1px solid #cecfd0;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    margin-right: 5px;
    width: 180px;
}
.al-right {
    text-align: right;
}
.ci-count {
    height: 17px;
    line-height: 17px;
    background: #f88311;
    text-align: center;
    color: #fff;
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    vertical-align: top;
    border-radius: 4px;
    display: inline-table;
    padding: 0 5px;
}
.account-info-warp .control-group, .account-info-warp .control-grouptwo {
    margin: 10px;
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
.btn-blue.disabled, .btn-blue.disabled:hover, .btn-blue.disabled:focus, .btn-blue.disabled:active, .btn-blue.disabled.active, .btn-blue[disabled], .btn-blue[disabled]:hover, .btn-blue[disabled]:focus, .btn-blue[disabled]:active, .btn-blue.active[disabled], fieldset[disabled] .btn-blue, fieldset[disabled] .btn-blue:hover, fieldset[disabled] .btn-blue:focus, fieldset[disabled] .btn-blue:active, fieldset[disabled] .btn-blue.active {
    background-color: #ccc!important;
    border-color: #ccc!important;
}
.applysale {
    margin-left: 15px;
    color: #999;
}
.applysale .transfer-tips {
    width: 520px;
    margin: 0 auto;
    padding: 10px;
}
.applysale .transfer-tips li {
    list-style-type: disc;
}
</style>