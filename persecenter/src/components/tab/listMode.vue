<template>
  <!-- 游戏公告 -->
  <div>
    <div class="rgeechar">
      <div class="allactice clearfix">
        <div class="ud-condition pull-right show" @click="moreConditionsBtn">更多条件</div>
        <span class="pull-right al-left">
          <span class="pull-right">近7天</span>
        </span>
      </div>
      <div class="history btnalign" v-if="moreConditions">
        <div class="capital transactionType_type">
          <span>类型：</span>
          <a href="javascript:;">
            <span>全部</span>
          </a>
          <a href="javascript:;">
            <span>存款</span>
          </a>
          <a href="javascript:;">
            <span>取款</span>
          </a>
          <a href="javascript:;">
            <span>转账</span>
          </a>
          <a href="javascript:;">
            <span>优惠</span>
          </a>
          <a href="javascript:;">
            <span>返水</span>
          </a>
          <a href="javascript:;">
            <span>推荐</span>
          </a>
        </div>
        <div class="capital transactionType_status btnalign">
          <span>状态：</span>
          <a href="javascript:;">
            <span>全部</span>
          </a>
          <a href="javascript:;">
            <span>待处理</span>
          </a>
          <a href="javascript:;">
            <span>处理中</span>
          </a>
          <a href="javascript:;">
            <span>成功</span>
          </a>
          <a href="javascript:;">
            <span>失败</span>
          </a>
          <a href="javascript:;">
            <span>拒绝</span>
          </a>
          <a href="javascript:;">
            <span>已发放</span>
          </a>
          <a href="javascript:;">
            <span>待支付</span>
          </a>
        </div>
        <div class="block">
          <span>时间范围：</span>
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
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="search-list-container">
      <div class="chart-table info-notice">
        <table border="0" cellpadding="0" cellspacing="0" class="table">
          <thead>
            <tr style="line-height: 60px; background: #ececec;">
              <th>交易号</th>
              <th>创建时间</th>
              <th>
                <span>
                  <select name id>
                    <option value="推荐">推荐</option>
                    <option value="全部类型">全部类型</option>
                    <option value="取款">取款</option>
                    <option value="存款">存款</option>
                    <option value="优惠">优惠</option>
                    <option value="返水">返水</option>
                  </select>
                </span>
              </th>
              <th>金额</th>
              <th>账户余额</th>
              <th>
                <span>
                  <select name id>
                    <option value>全部状态</option>
                    <option value="全部类型">待处理</option>
                    <option value="取款">处理中</option>
                    <option value="存款">成功</option>
                    <option value="优惠">失败</option>
                    <option value="返水">拒绝</option>
                    <option value="优惠">已发放</option>
                    <option value="返水">待处理</option>
                  </select>
                </span>
              </th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="7" class="no-content_wrap" style="border-bottom: 0px;">
                <div>
                  <i class="fa fa-exclamation-circle"></i> 暂无内容!
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
export default {
  data() {
    return {
      moreConditions: false,
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value4: ""
    };
  },
  methods: {
    moreConditionsBtn: function() {
      this.moreConditions = true;
    }
  }
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
.allactice {
  border: 1px solid #d3d8dc;
  background: #f7f8f9;
  border-radius: 4px;
  padding: 10px 20px;
  line-height: 30px;
  margin-right: 20px;
}
.history {
  border: 1px solid #d3d8dc;
  background: #f7f8f9;
  border-radius: 4px;
  padding: 10px 20px;
  margin-right: 20px;
  margin-top: 0;
  line-height: 30px;
  border-top: none;
}
.history .capital a {
  margin-right: 10px;
  color: #666;
  padding: 0 4px;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
  height: 30px;
}
.history .capital a:hover,
.history .capital a:active {
  background: #2772ee;
  color: #fff !important;
}
a:hover,
a:focus {
  color: #f89c2c;
  text-decoration: none;
}
.ud-condition {
  line-height: 31px;
  margin-left: 15px;
  color: #2772ee;
  cursor: pointer;
}
.ud-condition:hover {
  color: #f89c2c;
}
.pull-right {
  float: right;
}
.btnalign.btnalign:before,
.btnalign.btnalign:after {
  display: table;
  content: " ";
}
.daterangepickers {
  display: inline-block;
}
.ud-condition i {
  border: 1px solid #ababab;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: #ababab;
  margin-left: 5px;
}
.block .date { margin-top: 10px; }
.btnalign.btnalign button.btn,
input {
  margin: 0;
  margin-left: 5px;
  padding: 5px 10px !important;
}

button.daterangepickers {
  width: auto;
}
.history select {
  margin-top: 0;
  margin-left: 10px;
  margin-bottom: 0;
  height: 32px;
  vertical-align: top;
}
.btnalign.btnalign input.form-control {
  margin: 0;
  border: 1px solid #ddd;
}
.form-control {
  padding: 5px 12px;
}
select {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
  height: 30px;
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
.btn-big {
  border-radius: 3px;
  text-align: center;
  font-family: "Microsoft YaHei";
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
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
.tabmenu.tabmenu-2 {
  border: 0;
  margin-left: 20px;
  height: auto;
}
.tabmenu {
  border-bottom: 1px solid #93bdee;
  margin-top: 20px;
  height: 40px;
}
.tabmenu.tabmenu-2 .tab-2 li {
  display: inline-block;
  text-align: center;
  color: #808080;
  font-weight: bold;
  font-size: 15px;
  margin-right: 10px;
  position: relative;
}
.tabmenu.tabmenu-2 .tab-2 a.current.active {
  border: 2px solid transparent;
  color: #fff;
  display: block;
  background: #2772ee;
}
.tabmenu.tabmenu-2 .tab-2 a.current {
  border: 2px solid #eee;
  color: #fff;
  display: block;
  padding: 5px 10px;
  background: #fff;
  color: #808080;
}
.chart-table .table {
  border: 0;
  border-radius: 4px;
}
table tr td .pagination-total {
  margin: 0;
  border: 0;
  border-bottom: 1px solid #d3d8dc;
  padding: 10px 10px 10px 15px;
  background: #f7f8f9;
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.alldelete {
  width: 260px;
  display: inline-block;
}
.alldelete input {
  vertical-align: middle;
  margin-right: 5px;
}
.pagination-total > .alldelete span.show {
  display: inline !important;
  margin-left: 5px;
}
.pagination-total > .alldelete span {
  display: none;
}
.show {
  display: block !important;
}
.bdtop3 {
  margin: 20px;
  border: 1px solid #d3d8dc;
  padding: 10px;
  background: #f7f8f9;
  border-radius: 4px;
}
.clearfix:before,
.clearfix:after,
.row:before,
.row:after,
.control-group:before,
.control-group:after {
  display: table;
  content: " ";
}
.bdtop3 .col-sm-3 {
  line-height: 30px;
}
.bdtop3 .pull-left {
  margin: 0 5px 0 0;
}
.pull-left {
  float: left;
  margin-top: 3px;
}
.pull-left {
  float: left;
}
.pull-left select {
  height: 24px;
  vertical-align: initial;
  margin-top: 0;
  margin-bottom: 0;
}
.bdtop3 .col-sm-3 > .pull-left span.m-l-sm {
  max-width: 90px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
  margin-left: 0;
}
.dataTables_paginate.paging_simple_numbers {
  margin-top: 0;
}
div.dataTables_paginate > div input.min {
  width: 32px;
  height: 30px;
  line-height: 24px;
  padding: 0;
  text-align: center;
  border: 1px solid #e5e6e7;
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 0;
  vertical-align: bottom;
}
.pages.form-inline .btn-sm {
  height: 32px;
}
.btn-sm {
  border-radius: 2px;
  background: #fff;
  border: 1px solid #e5e6e7;
  color: #666;
  height: 25px;
  padding: 2px 5px;
  font-family: "Microsoft YaHei";
}
.pagination li.previous,
.pagination li.next {
  width: auto;
  max-width: 130px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.pagination li {
  float: left;
  margin-right: 5px;
  width: 32px;
  overflow: hidden;
  white-space: nowrap;
  line-height: 24px;
  text-align: center;
  display: block;
  border-radius: 2px;
}
.pagination li.current {
  border-color: #2772ee;
}
.pagination li.previous a,
.pagination li.next a {
  padding: 3px 5px;
  font-size: 0;
}
.pagination li a {
  color: #666;
  display: block;
  padding: 3px 0;
  background: #fff;
  border: 1px solid #ddd;
}
.pull-right {
  float: right;
}
</style>