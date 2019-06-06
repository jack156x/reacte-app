<template>
  <!-- 游戏公告 -->
  <div>
    <div class="rgeechar">
      <div class="history btnalign">
        <div class="btn-group daterangepickers" style="width:auto;display: inline;">
          <el-date-picker
            v-model="inputDateValue"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
        <div style="display: inline-block;">
          <span style="display: inline-flex;">
            <el-select v-model="value" placeholder="请选择" class="select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </span>
          <el-button
            type="primary"
            icon="el-icon-search"
            style="margin-top:auto;vertical-align:initial"
          ></el-button>
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="search-list-container">
      <div class="chart-table info-notice">
        <table border="0" cellpadding="0" cellspacing="0" class="table">
          <tbody>
            <tr>
              <td class="no-content_wrap" style="border-bottom: 0px;">
                <div>
                  <i class="el-icon-warning"></i>
                  暂无内容!
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { quickChooseTime, options } from "../../config/QuickChooseTime";
export default {
  name: "",
  data() {
    return {
      range: [],
      pickerOptions: {
        shortcuts: quickChooseTime
      },
      options,
      value: "",
      inputDateValue: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
.rgeechar {
  margin-left: 20px;
  margin-top: 23px;
}
.btnalign {
  text-align: left;
  margin-top: 10px;
}
.history {
  border: 1px solid #d3d8dc;
  background: #f7f8f9;
  border-radius: 4px;
  padding: 10px 20px;
  margin-right: 20px;
  line-height: 30px;
}
.chart-table {
  margin-left: 20px;
  margin-top: 20px;
  border: 1px solid #d3d8dc;
  border-radius: 4px;
  margin-right: 20px;
  overflow-x: auto;
}
.chart-table .table {
  border: 0;
  border-radius: 4px;
}

.chart-table table {
  width: 100%;
}
.table {
  border: 1px solid #d3d3d3;
  border-radius: 4px;
}
.chart-table .table tr {
  border-bottom: 0;
}
.table tr {
  border-bottom: 1px solid #ececec;
}
.chart-table tr:last-child td {
  border-bottom: 0;
}
.chart-table .table td {
  border-bottom: 1px solid #ededed;
  border-right: 0;
  height: auto;
  line-height: normal;
  padding-left: 15px;
  padding-top: 10px;
}
table > tbody > tr > td.no-content_wrap {
  text-align: center;
  padding: 50px 0 !important;
  border-bottom: 0;
}
.chart-table td {
  border-bottom: 1px solid #ededed;
  text-align: left;
  padding: 10px 0 8px 15px;
  white-space: nowrap;
}
.table td {
  border-bottom: 1px solid #ececec;
  border-right: 1px solid #ececec;
  height: 40px;
  line-height: 40px;
  padding-left: 30px;
}
</style>