<template>
    <div>
        <div id="playerRecommendAward"><div class="invite-total" style="margin-bottom: 100px">
            <div class="titleline"><h2>推荐奖励</h2></div>
            <div class="active-rule" style="padding: 0 80px 0 0">
                <img src="../../assets/images/Red_envelopes@2x.png" alt="" style="width: 33px;height: 40px;">
                <div style="margin-left:40px;margin-top: -34px;">
                    <span>推荐好友成功注册并累计存款满<span style="color: darkorange">￥300.00</span>同时有效投注满<span style="color: darkorange">￥1.00</span>，双方各获<span style="color: darkorange">￥18.00</span>奖励。</span>
                </div>
            </div>
        </div>
        <!--推荐规则-->
        <div class="invite-total" style="margin-bottom: 100px">
                <div class="titleline"><h2>推荐规则</h2></div>
                <div class="active-rule" style="padding: 0 80px 0 0">
                    <span>推荐红包：被推荐的玩家存款达到满额300元时，推荐人及被推荐人均可获得18元的推荐奖励，赠送的奖励在北京时间次日凌晨3点之前自动派送到会员钱包。
                    `优惠条款
                    1.所有优惠以人民币（CNY）为结算金额，以北京时间（GMT+8）为计时区间（特定时间除外）；
                    2.每位玩家、相同联系方式和支付方式（相同银行账户）及IP地址只能享有一次优惠权利；
                    3.所有优惠特为玩家而设，如发现任何团体或个人，以不诚实方式滥用公司优惠套取红利或任何威胁公司的行为，公司保留取消或冻结账户及资金的权利；
                    4.若会员对活动内容有争议时，为确保双方利益，杜绝身份盗用行为，大众棋牌有权要求会员提供充足有效的文件，确认是否享有优惠的资格；
                    5.如系统发生不可预测的技术错误或不可控制的因素, 则大众棋牌保留活动的最终处理权;
                    6.为避免文字上理解差异, 大众棋牌保留对所有活动的最终解释权和决定权。</span>`
                </div>
            </div>
        <!--红利计算-->
        </div>
    </div>
</template>

<script>
    export default {
        name:'rewardrules'
    }
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
.invite-total .titleline, .invite-way .titleline {
    border-top: 1px solid #d8dee0;
    position: relative;
    margin-top: -21px;
}
.invite-total h2, .invite-way h2 {
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

</style>