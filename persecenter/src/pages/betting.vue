<template>
  <!-- 游戏公告 -->
  <div>
    <div class="history btnalign">
      <div class="block">
        <el-select v-model="dateType" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-date-picker
          v-model="value4"
          type="datetimerange"
          :picker-options="pickerOptions2"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right"
          class="date"
        ></el-date-picker>
        <el-button type="primary">搜索</el-button>
      </div>
      <div class="pull-right">
        <span>游戏类型：</span>
        <el-button @click="dialogTableVisible = true">选取</el-button>
        <el-dialog title="游戏分类" :visible.sync="dialogTableVisible"></el-dialog>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="count">
      <div class="pull-left">已选择游戏：</div>
      <div class="pull-right">
        <input type="checkbox">
        <span>只查阅待结算注单</span>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="record-total">
      <span class="recordCount">总共：0笔</span>
      <span>
        投注额：
        <a href="javascript:;">￥0.00</a>
      </span>
      <span>
        有效投注额：
        <a href="javascript:;">￥0.00</a>
      </span>
      <span>
        派彩：
        <a href="javascript:;">￥0.00</a>
      </span>
    </div>
    <!-- 表格 -->
    <div class="chart-table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="gamesType" label="游戏类型"></el-table-column>
        <el-table-column prop="game_name" label="游戏名称"></el-table-column>
        <el-table-column prop="desk_id" label="注单号"></el-table-column>
        <el-table-column prop="end_time" label="投注时间"></el-table-column>
        <el-table-column prop="payout_time" label="派彩时间"></el-table-column>
        <el-table-column prop="deal_money" label="投注额"></el-table-column>
        <el-table-column prop="deal_money" label="有效投注额"></el-table-column>
        <el-table-column prop="manual_payout" label="派彩"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
      </el-table>
    </div>
    <div class="block-pagination">
      <Pagination url="accounts" @paging="pagingCallback"></Pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { quickChooseTime } from "@/config/QuickChooseTime";
import Pagination from "@/components/Pagination";
import "@/assets/css/betting.css";
export default {
  name: "betting",
  data() {
    return {
      tableData: null, //请求回来填充表格的数据
      options: [
        {
          value: "选项1",
          label: "投注时间"
        },
        {
          value: "选项2",
          label: "派彩时间"
        }
      ],
      pickerOptions2: {
        shortcuts: quickChooseTime
      },
      dialogTableVisible: false,
      dateType: "",
      value4: "",
      currentPage4: 1,
      bettingUrl: "v1/accounts/",
      level:{name:1}
    };
  },
  components: {
    Pagination
  },
  computed: {
    ...mapGetters(["pagination"])
  },
  methods: {
    pagingCallback(results) {
      this.tableData = results;
      this.$logger.log(results, "分页数据");
    }
  }
};
</script>