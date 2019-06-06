<template>
    <div>
        <div v-show="!$route.params.paytype">
                <div class="account-info-warp">
                    <div class="titleline">
                        <h2>请选择存款方式</h2>
                    </div>
                </div>
                <div class="deposit-select-wrap">
                    <div class="deposit-tab01 wyck-bg"> 
                        <router-link :to ="{name:$route.name,params:{'paytype':1}}">
                            <img src="@/assets/images/deposit-tab-img2.png"> 
                            <span class="pay-title blue-t-bg">
                                <em>网银存款</em>
                            </span> 
                        </router-link>
                    </div>
                    <div class="deposit-tab01 zxzf-bg"> 
                        <router-link :to ="{name:$route.name,params:{paytype:2}}" >
                            <img src="@/assets/images/deposit-tab-img17.png"> 
                            <span class="pay-title">
                                <em>银联快捷</em>
                            </span> 
                        </router-link>
                    </div>
                    <div class="deposit-tab01 wxzf-bg"> 
                        <router-link :to ="{name:$route.name,params:{paytype:3}}" >
                            <img src="@/assets/images/deposit-tab-img3.png"> 
                            <span class="pay-title green-t-bg">
                                <em>微信付款</em>
                                </span> 
                        </router-link>
                    </div>
                    <div class="deposit-tab01 zfb-bg"> 
                        <router-link :to ="{name:$route.name,params:{paytype:4}}" >
                            <img src="@/assets/images/deposit-tab-img4.png"> 
                            <span class="pay-title">
                                <em>支付宝付款</em>
                                </span> 
                        </router-link>
                    </div>
                    <div class="deposit-tab01 ylzf-bg"> 
                        <router-link :to ="{name:$route.name,params:{paytype:5}}" >
                            <img src="@/assets/images/deposit-tab-img13.png"> 
                            <span class="pay-title">
                                <em>银联扫码</em>
                            </span> 
                    </router-link>
                    </div>
                    <div class="deposit-tab01 ylzf-bg"> 
                        <router-link :to ="{name:$route.name,params:{paytype:6}}" >
                            <img src="@/assets/images/deposit-tab-img13-1.png"> 
                            <span class="pay-title">
                                <em>云闪付</em>
                            </span> 
                        </router-link>
                    </div>
                </div>
                <div class="gamenotice">
                    <div class="gamenotice-title">
                        <h1>注意事项</h1>
                    </div>
                    <div class="gamenotice-box">
                        <ul class="attention-list">
                            <li> 1、每次存款前，请先至本页面查看最新的收款账户。请勿自行存款至旧账户，若存款至旧账户，本公司将无法查收，恕不负责。</li>
                            <li> 2、请尽量选择同行存款，如跨行请进行加急，方便系统加快您的入款速度。</li>
                        </ul>
                    </div>
            </div>
            <div class="banknotice">
                <!-- 银行维护公告 -->
                <div class="gamenotice">
                    <div class="gamenotice-title">
                    <h1>银行维护公告</h1>
                </div>
                    <div class="gamenotice-box">
                    <dl class="bank-notice-l">
                        <dd class="clearfix">
                        <div class="item">
                            <p> ★&nbsp;尊敬的会员您好，由于公司财务业务需要，【微信-支付宝转农业银行 黄清铨】已停用，请勿再次入款到该账户上，请每次入款前登录会员账号核实最新的入款银行卡，感谢您的配合与谅解，谢谢！</p>
                            </div>
                    </dd>
                        <p class="dottline"></p>
                        <dd class="clearfix">
                        <div class="item">
                            <p> ★&nbsp;尊敬的会员您好，由于公司财务业务需要，【微信-支付宝转招商银行 李志晖】已停用，请勿再次入款到该账户上，请每次入款前登录会员账号核实最新的入款银行卡，感谢您的配合与谅解，谢谢！</p>
                            </div>
                    </dd>
                            <p class="dottline"></p>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
      <router-view v-show="$route.params.paytype"></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .account-info-warp .titleline {
    border-top: 1px solid #e7ecee;
    margin: 0 20px;
    position: relative;
    margin-top: 40px;
    margin-bottom: 30px;
}
.account-info-warp .titleline h2 {
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    background: #fff;
    margin-left: 10px;
    top: -15px;
    text-align: center;
    font-weight: bold;
    padding: 0 10px;
}
.deposit-select-wrap {
    margin: 20px 0 0 20px;
}
.deposit-tab01 {
    position: relative;
}
.deposit-tab01 {
    width: 220px;
    box-shadow: 2px 2px 2px #f6f6f6;
    border: 1px solid #d3d8dc;
    height: 152px;
    border-radius: 6px;
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 15px;
}
.deposit-tab01 img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
}

.deposit-tab01 .pay-title {
    position: absolute;
    bottom: 0;
    left: -1px;
    background: #2987e7;
    width: 100%;
    color: #fff;
    padding: 7px 1px;
    display: block;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
.deposit-tab01 .pay-title em {
    margin-left: 10px;
    font-size: 17px;
}
.deposit-tab01.wyck-bg .pay-title {
    background: #1286fd;
}
.deposit-tab01.zxzf-bg .pay-title {
    background: #f06c00;
}
.deposit-tab01.wxzf-bg .pay-title {
    background: #24bd28;
}
.deposit-tab01.zfb-bg .pay-title {
    background: #0098dc;
}
.deposit-tab01.ylzf-bg .pay-title {
    background: #007b84;
}
.gamenotice, .saleactive {
    border: 1px solid #d3d8dc;
    margin: 35px 20px 0 20px;
    border-radius: 4px;
    position: relative;
    box-shadow: 2px 2px 2px #f6f6f6;
}
.gamenotice .gamenotice-title h1, .saleactive .saleactive-title h1 {
    font-size: 16px;
    margin-left: 20px;
    margin-top: 10px;
    position: absolute;
    top: -22px;
    left: 4px;
    background: #fff;
    display: inline-block;
    padding: 0 10px;
    text-align: center;
    font-weight: normal;
    color: #333;
    font-weight: bold;
}
.attention-list {
    margin: 20px 20px;
}
.attention-list li {
    margin-bottom: 8px;
}
.gamenotice, .saleactive {
    border: 1px solid #d3d8dc;
    margin: 35px 20px 0 20px;
    border-radius: 4px;
    position: relative;
    box-shadow: 2px 2px 2px #f6f6f6;
}
.gamenotice .gamenotice-title h1, .saleactive .saleactive-title h1 {
    font-size: 16px;
    margin-left: 20px;
    margin-top: 10px;
    position: absolute;
    top: -22px;
    left: 4px;
    background: #fff;
    display: inline-block;
    padding: 0 10px;
    text-align: center;
    font-weight: normal;
    color: #333;
    font-weight: bold;
}
.gamenotice-box dl {
    margin-bottom: 0;
}
.gamenotice-box .bank-notice-l dd {
    padding: 20px 20px 20px 30px;
    position: relative;
    border-bottom: 1px solid #ddd;
}
.gamenotice-box dd {
    padding: 20px 20px 10px 30px;
    position: relative;
    border-bottom: 1px solid #ddd;
}
.clearfix:before, .clearfix:after, .row:before, .row:after, .control-group:before, .control-group:after {
    display: table;
    content: " ";
}
.gamenotice-box .item {
    float: left;
    width: 98%;
}
.gamenotice-box .item p {
    text-align: left;
}
.clearfix:after, .row:after, .control-group:after {
    clear: both;
}
</style>