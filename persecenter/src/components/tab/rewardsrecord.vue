<template>
  <div>
    <!-- 奖励记录 -->
    <div id="playerRecommendAward">
      <!--推荐奖励记录-->
      <div class="invite-way" id="recommenRecord">
        <div class="titleline">
          <h2 style="width: 125px">推荐奖励记录</h2>
        </div>
        <div class="invite-box">
          <div class="btnalign">
            <span class="pull-left">时间：</span>
            <el-date-picker
              v-model="value9"
              type="daterange"
              range-separator="~"
              start-placeholder="2019-05-06"
              end-placeholder="2019-05-09"
              :picker-options="pickerOptions"
            ></el-date-picker>
            <div class="pull-right">
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
          </div>
          <div class="invite-copy recommenRecord">
            <table
              class="table table-striped table-hover dataTable"
              width="100%"
              border="1"
              cellpadding="0"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th
                    style="text-align: center;border:1px solid #ededed;width: 25%;color: gray;"
                  >新增玩家账号(直属下级)</th>
                  <th
                    style="text-align: center;border:1px solid #ededed;width: 25%;color: gray;"
                  >注册时间</th>
                  <th style="text-align: center;border:1px solid #ededed;width: 25%;color: gray;">状态</th>
                  <th
                    style="text-align: center;border:1px solid #ededed;width: 25%;color: gray;"
                  >奖励金额</th>
                </tr>
              </thead>
              <thead></thead>
              <tbody>
                <tr>
                  <td colspan="4" class="no-content_wrap">
                    <div>
                      <i class="fa fa-exclamation-circle"></i>暂无推荐奖励记录
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <span style="text-align: center;margin-left: 225px;">推荐奖励记录只展示达成推奖奖励条件的账号，未达成的账号不会展示</span>
          </div>
        </div>
      </div>
      <!--红利奖励记录-->
      <div id="bonusRecord" class="invite-way">
        <div class="titleline">
          <h2 style="width: 125px">红利奖励记录</h2>
        </div>
        <div class="invite-box">
          <div class="btnalign">
            <span class="pull-left">时间：</span>
            <el-date-picker
              v-model="value9"
              type="daterange"
              range-separator="~"
              start-placeholder="2019-05-06"
              end-placeholder="2019-05-09"
              :picker-options="pickerOptions"
            ></el-date-picker>
            <div class="pull-right">
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
          </div>
          <div class="invite-copy bonusRecord">
            <table
              class="table table-striped table-hover dataTable"
              width="100%"
              border="1"
              cellpadding="0"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th
                    style="text-align: center;border:1px solid #ededed;width: 25%;color: gray;"
                  >红利期号</th>
                  <th
                    style="text-align: center;border:1px solid #ededed;width: 25%;color: gray;"
                  >实际结算时间</th>
                  <th
                    style="text-align: center;border:1px solid #ededed;width: 25%;color: gray;"
                  >红利金额</th>
                  <th
                    style="text-align: center;border:1px solid #ededed;width: 25%;color: gray;"
                  >下属红利金额</th>
                </tr>
              </thead>
              <thead></thead>
              <tbody>
                <tr>
                  <td colspan="4" class="no-content_wrap">
                    <div>
                      <i class="fa fa-exclamation-circle"></i>暂无红利奖励记录
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { quickChooseTime } from "../../config/QuickChooseTime";
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: quickChooseTime
      },
      value9: ""
    };
  }
};
</script>

<style scoped>
.invite-way {
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid #d8dee0;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 2px 3px 0 #eef4f7;
}
.invite-total .titleline,
.invite-way .titleline {
  border-top: 1px solid #d8dee0;
  position: relative;
  margin-top: -21px;
}
.invite-total h2,
.invite-way h2 {
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
.invite-box {
  margin-top: 30px;
}
.btnalign {
  text-align: left;
  margin-top: 10px;
}
.btnalign.btnalign:before,
.btnalign.btnalign:after {
  display: table;
  content: " ";
}
.btnalign.btnalign > .pull-left {
  margin: 0;
  padding: 10px 0;
}
.pull-left {
  float: left;
  margin-top: 3px;
}
.btnalign {
  text-align: left;
  margin-top: 10px;
}

.btnalign.btnalign input.form-control {
  margin: 0;
  border: 1px solid #ddd;
}

.btnalign.btnalign input.form-control {
  margin: 0;
  border: 1px solid #ddd;
}
.pull-right {
  float: right;
}

.btnalign.btnalign:after {
  clear: both;
}
.invite-box .invite-copy {
  margin-top: 10px;
}
.table {
  border: 1px solid #d3d3d3;
  border-radius: 4px;
}
table > tbody > tr > td.no-content_wrap {
  text-align: center;
  padding: 50px 0 !important;
  border-bottom: 0;
}
.table td {
  border-bottom: 1px solid #ececec;
  border-right: 1px solid #ececec;
  height: 40px;
  line-height: 40px;
  padding-left: 30px;
}
.form-control {
  padding: 5px 12px;
}
.table th {
  height: 47px;
  background: #f0f4f7;
  line-height: 47px;
  color: #f88311;
  font-weight: normal;
}
</style>