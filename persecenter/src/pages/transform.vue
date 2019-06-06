<template>
    <!-- 额度转换 -->
    <div>
        <div class="account s2">
        <div class="loading-a">
              <div class="spiner-example"> <img src="images/022b.gif"> </div>
            </div>
        <div class="property">
              <div class="property-left"> 总资产<em class="total-money">0.00</em>
            <div class="m-loading-icon-x" style="display: none"><img src="images/022b.gif"></div>
            <a title="刷新总资产" class="ico-ask refresh" data-rel="{&quot;precall&quot;:&quot;&quot;,&quot;callback&quot;:&quot;&quot;,post:&quot;&quot;,opType:&quot;function&quot;,dataType:&quot;&quot;,target:&quot;getAllApiBalance&quot;,confirm:&quot;&quot;,text:&quot;&quot;,size:&quot;&quot; }"> </a> </div>
              <button title="切换至手动额度转换" class="btn btn-gray btn-big btn-edzh" id="btn_sd" type="button" onclick="javascript:window.location.href='changeAutoPay.html'"> 切换至手动额度转换 </button>
              <button title="" class="btn btn-blue btn-big btn-money-back" type="button" data-rel="{&quot;precall&quot;:&quot;&quot;,&quot;callback&quot;:&quot;&quot;,post:&quot;&quot;,opType:&quot;function&quot;,dataType:&quot;&quot;,target:&quot;recoveryApi&quot;,confirm:&quot;&quot;,text:&quot;&quot;,size:&quot;&quot; }"> <i class="btn-money-back-white"></i> 资金回收 </button>
            </div>
        <div>
              <div class="balance">
            <div class="wallet one">
                  <dl>
                <dt> 钱包余额</dt>
                <dd class="orange wallet-money"> 0.00</dd>
                <div class="m-loading-icon-x" style="display: none"><img src="@/assets/images/022b.gif"></div>
              </dl>
                </div>
            <div class="balance-right pull-left">
                  <div class="game onmouse api-info api-34" type="button" data-toggle="tooltip" data-placement="bottom"> <a title="回收" class="title-ref" data-rel="{&quot;precall&quot;:&quot;&quot;,&quot;callback&quot;:&quot;&quot;,post:&quot;&quot;,opType:&quot;function&quot;,dataType:&quot;&quot;,target:&quot;recoveryApi&quot;,confirm:&quot;&quot;,text:&quot;&quot;,size:&quot;&quot;,&quot;api&quot;:&quot;34&quot; }"> <i class="btn-money-back-blue"></i> </a>
                <p class="game-left api-logo-box active"> <i class="api-logo-34 site7051"></i> </p>
                <p class="game-right"> <span class="title">KY棋牌</span> <span class="blue api-money" id="api-money-34">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-34" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-3" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-3 site7051"></i> </p>
                <p class="game-right"> <span class="title">MG电子</span> <span class="blue api-money" id="api-money-3">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-3" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-6" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-6 site7051"></i> </p>
                <p class="game-right"> <span class="title">PT电子</span> <span class="blue api-money" id="api-money-6">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-6" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-46" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-46 site7051"></i> </p>
                <p class="game-right"> <span class="title">乐游棋牌</span> <span class="blue api-money" id="api-money-46">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-46" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-25" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-25 site7051"></i> </p>
                <p class="game-right"> <span class="title">SG电子</span> <span class="blue api-money" id="api-money-25">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-25" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-33" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-33 site7051"></i> </p>
                <p class="game-right"> <span class="title">SUN太阳厅</span> <span class="blue api-money" id="api-money-33">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-33" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-16" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-16 site7051"></i> </p>
                <p class="game-right"> <span class="title">Ebet如意厅</span> <span class="blue api-money" id="api-money-16">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-16" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-42" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-42 site7051"></i> </p>
                <p class="game-right"> <span class="title">VG棋牌</span> <span class="blue api-money" id="api-money-42">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-42" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-9" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-9 site7051"></i> </p>
                <p class="game-right"> <span class="title">AG大厅</span> <span class="blue api-money" id="api-money-9">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-9" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-43" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-43 site7051"></i> </p>
                <p class="game-right"> <span class="title">棋乐游</span> <span class="blue api-money" id="api-money-43">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-43" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-7" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-7 site7051"></i> </p>
                <p class="game-right"> <span class="title">OG东方厅</span> <span class="blue api-money" id="api-money-7">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-7" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-38" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-38 site7051"></i> </p>
                <p class="game-right"> <span class="title">PP电子</span> <span class="blue api-money" id="api-money-38">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-38" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-17" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-17 site7051"></i> </p>
                <p class="game-right"> <span class="title">SA澳门厅</span> <span class="blue api-money" id="api-money-17">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-17" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-5" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-5 site7051"></i> </p>
                <p class="game-right"> <span class="title">GD锦绣厅</span> <span class="blue api-money" id="api-money-5">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-5" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-47" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-47 site7051"></i> </p>
                <p class="game-right"> <span class="title">欢乐棋牌</span> <span class="blue api-money" id="api-money-47">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-47" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-48" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-48 site7051"></i> </p>
                <p class="game-right"> <span class="title">CQ9电子</span> <span class="blue api-money" id="api-money-48">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-48" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-49" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-49 site7051"></i> </p>
                <p class="game-right"> <span class="title">GG捕鱼</span> <span class="blue api-money" id="api-money-49">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-49" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                  <div class="game onmouse api-info api-53" type="button" data-toggle="tooltip" data-placement="bottom">
                <p class="game-left api-logo-box "> <i class="api-logo-53 site7051"></i> </p>
                <p class="game-right"> <span class="title">EA尊爵厅</span> <span class="blue api-money" id="api-money-53">0.00</span> </p>
              </div>
                  <div class="game onmouse loading-api loading-53" style="display: none;">
                <div class="g-loading-icon"><img src="@/assets/images/022b.gif"></div>
              </div>
                </div>
          </div>
            </div>
      </div>
      <div class="gameAnnouncement"></div>
    </div>
</template>

<script>
    import { pageList } from '@/services/getData'

    export default {
        created(){
            console.log(pageList);
            pageList().then(res=>{
                console.log(res);
            })
        }
    }
</script>

<style scoped>
.main-wrap .account {
    border: 1px solid #d3d8dc;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 2px 2px 2px #f6f6f6;
    height: auto!important;
    height: 205px;
    min-height: 205px;
    position: relative;
}
.account .loading-a {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 10;
    display: none;
    border-radius: 3px;
}
.account .loading-a .spiner-example {
    top: 45%;
    position: absolute;
    left: 47%;
}
img {
    border: 0;
}
.account .property {
    background: #e8ecef;
    padding-left: 20px;
}
.account .property-left {
    float: left;
    line-height: 49px;
}
.account.s2 .total-money {
    line-height: 49px;
}
.account .total-money {
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    vertical-align: top;
    margin-left: 5px;
    line-height: 54px;
}
.m-loading-icon-x {
    text-align: center;
    display: inline-block;
    width: 35px;
    line-height: 53px;
    vertical-align: top;
}
.m-loading-icon-x img {
    height: 16px;
}
.ico-ask.refresh {
    background-position: -33px -7px;
    margin-left: 5px;
}
.ico-ask {
    display: inline-block;
    background: url("../assets/images/ico-ask.png") no-repeat top left;
    cursor: pointer;
    width: 22px;
    height: 20px;
    vertical-align: middle;
    padding-top: 3px;
}
.btn-edzh {
    float: right;
    width: 155px;
    margin: 10px;
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
.btn-money-back {
    width: 155px;
    float: right;
    margin: 10px;
}
.btn-big {
    border-radius: 3px;
    text-align: center;
    font-family: "Microsoft YaHei";
}
.btn-money-back-white {
    vertical-align: middle;
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("../assets/images/back-m-white.png");
}
.account .property:after {
    content: "";
    display: block;
    clear: both;
}
.account.s2 .balance {
    padding: 0;
}
.account.s2 .balance {
    margin: 10px 0;
    padding: 0 20px;
    box-sizing: border-box;
}
.account .balance {
    margin: 10px 20px;
}
.account .balance {
    width: 100%;
    margin-top: 10px;
}
.account .balance:before {
    display: table;
    content: " ";
}
.account.s2 .balance .wallet {
    box-sizing: border-box;
    text-align: left;
    float: none;
    display: block;
    border-right: 0;
    width: 100%;
    border-bottom: 1px solid #e9ebed;
    padding: 0 20px 10px;
}
.account .balance .wallet {
    text-align: left;
    width: 24%;
    float: left;
    display: inline;
    border-right: 1px solid #e9ebed;
}
.account.s2 .wallet dt {
    display: inline-block;
    vertical-align: middle;
}
.account.s2 .wallet .wallet-money {
    display: inline-block;
    font-size: 24px!important;
    vertical-align: middle;
}
.account .balance .wallet-money {
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
}
.orange {
    color: #f88311!important;
}
.m-loading-icon-x {
    text-align: center;
    display: inline-block;
    width: 35px;
    line-height: 53px;
    vertical-align: top;
}
.account.s2 .balance-right {
    width: 100%;
    border-left: none;
    padding-left: 0;
}
.account .balance-right {
    text-align: left;
    width: 74%;
    border-left: 1px solid #e9ebed;
    padding-left: 10px;
    position: relative;
    margin-left: -1px;
}
.pull-left {
    float: left;
    margin-top: 3px;
}
.pull-left {
    float: left;
}
.account .balance-right .game {
    float: left;
    width: 150px;
    margin-bottom: 8px;
    height: 52px;
    overflow: hidden;
    border: 1px solid #e2e2e2;
    padding: 5px;
    position: relative;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 9px;
}
.account.s2 .balance-right .game {
    width: 154px;
    margin: 10px 7px 5px 7px;
}
.account .balance-right a {
    color: #666;
}
.title-ref {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 2px;
    top: 2px;
    z-index: 3000;
}
.btn-money-back-blue {
    position: absolute;
    right: 4px;
    top: 4px;
    display: none;
    vertical-align: middle;
    width: 16px;
    height: 15px;
    background: url("../assets/images/back-m-blue.png");
}
.account .balance-right .game-left {
    float: left;
    display: inline-block;
    margin-right: 8px;
}
.api-logo-box.active, .game:hover .active {
    background: url("../assets/images/api-logo-active.png");
}
.api-logo-box {
    background: url("../assets/images/api-logo-bg.png");
    width: 52px;
    height: 52px;
    display: block;
}
.api-logo-box>i {
    background-image: url("../assets/images/api-logo-sprites.png");
    background-repeat: no-repeat;
    display: block;
    width: 52px;
    height: 52px;
}
.api-logo-34 {
    background-position: 0 -1800px;
}
.account .balance-right .game-right {
    max-width: 180px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.account.s2 .balance-right .game-right .title {
    max-width: 75px;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.account .balance-right .game-right .title {
    display: block;
    max-width: 170px;
}
.blue {
    color: #2772ee;
}
.account .property:after {
    content: "";
    display: block;
    clear: both;
}
.account .property {
    background: #e8ecef;
    padding-left: 20px;
}
.account .balance:after {
    display: table;
    content: " ";
    clear: both;
}
.game:hover .api-logo-box {
    background: url("../assets/images/api-logo-hover.png");
}
</style>