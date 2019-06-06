<template>
  <div>
    <div class="condition">
      <el-button class="pull-right" type="primary" icon="el-icon-search"></el-button>
      <el-input class="pull-right input" v-model="input" placeholder="活动名称"></el-input>
      <div class="clearfix"></div>
    </div>
    <div class="chart-table">
      <el-table :data="preferentialData" stripe style="width: 100%">
        <el-table-column prop="gamesType" label="申请时间"></el-table-column>
        <el-table-column prop="game_name" label="申请单号"></el-table-column>
        <el-table-column prop="desk_id" label="活动名称"></el-table-column>
        <el-table-column prop="end_time" label="申请金额"></el-table-column>
        <el-table-column prop="payout_time" label="优惠金状态"></el-table-column>
        <el-table-column prop="deal_money" label="优惠稽核"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import '@/assets/css/preferential.css'
export default {
  data() {
    return {
      input: "",
      preferentialData: [
         {
            gamesType: '网游',
            game_name:'斗地主',
            desk_id: '1234',
            end_time: '2019/5/5 15：33',
            payout_time: '2019/5/5 15：39',
            deal_money: 12345
          }, {
            gamesType: '网游1',
            game_name:'斗地主',
            desk_id: '1234',
            end_time: '2019/5/5 15：33',
            payout_time: '2019/5/5 15：45',
            deal_money: 12345
          }, {
            gamesType: '网游2',
            game_name:'斗地主',
            desk_id: '1234',
            end_time: '2019/5/5 15：33',
            payout_time: '2019/5/5 15：56',
            deal_money: 12345
          }, {
            gamesType: '网游3',
            game_name:'斗地主',
            desk_id: '1234',
            end_time: '2019/5/5 15：33',
            payout_time: '2019/5/5 17：39',
            deal_money: 12345
          },
          {
            gamesType: '网游',
            game_name:'斗地主',
            desk_id: '1234',
            end_time: '2019/5/5 15：33',
            payout_time: '2019/5/5 15：39',
            deal_money: 12345
          }, {
            gamesType: '网游1',
            game_name:'斗地主',
            desk_id: '1234',
            end_time: '2019/5/5 15：33',
            payout_time: '2019/5/5 15：45',
            deal_money: 12345
          }, {
            gamesType: '网游2',
            game_name:'斗地主',
            desk_id: '1234',
            end_time: '2019/5/5 15：33',
            payout_time: '2019/5/5 15：56',
            deal_money: 12345
          }, {
            gamesType: '网游3',
            game_name:'斗地主',
            desk_id: '1234',
            end_time: '2019/5/5 15：33',
            payout_time: '2019/5/5 17：39',
            deal_money: 12345
          }
      ]
    };
  }
};
</script>


