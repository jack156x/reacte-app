<template>
  <div class="tableContent">
    <div class="search_container" v-if="startTimeCompute">
      <el-select v-model="loginTime" clearable placeholder="最近3天" class="slectWidth">
        <el-option v-for="item in loginTimeType" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-date-picker class="searchBtn" v-model="select" type="datetimerange" range-separator="|" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
      <el-button type="primary" @click="logPageSearch" icon="el-icon-search" class="search-icon"></el-button>
      <el-button type="text" icon="el-icon-refresh" class="newcreated"></el-button>
      <div class="clearfix"></div>
    </div>

    <div class="search_container" v-if="MemberActivity">
      <el-select v-model="loginTime" clearable placeholder="未登录天数" class="slectWidth">
        <el-option v-for="item in loginTimeType" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-select v-model="loginTime" clearable placeholder="未押注天数" class="slectWidth">
        <el-option v-for="item in loginTimeType" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <span>
        <el-select v-model="loginTime" clearable placeholder="已充值" class="slectWidth">
          <el-option v-for="item in loginTimeType" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </span>
      <!-- 会员钱包 -->
      <div style="display:inline-block" class="membermoney">
        <el-select v-model="loginTime" clearable placeholder="会员输赢">
          <el-option v-for="item in loginTimeType" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <span class="menber-container">
          <div class="el-input el-input--small el-input--suffix">
            <input type="number" autocomplete="off" placeholder="0" class="el-input__inner resetel-input">
          </div>
        </span>
        <el-button>至</el-button>
        <span class="menber-container">
          <div class="el-input el-input--small el-input--suffix">
            <input type="number" autocomplete="off" placeholder="0" class="el-input__inner resetel-input">
          </div>
        </span>
      </div>
      <el-input class="inputValueWidth" placeholder="请输入搜索条件" v-model="inputValue" clearable>
        <!-- 会员钱包结束 -->
        <el-select slot="prepend" v-model="loginTime" clearable placeholder="查询账号">
          <el-option v-for="item in loginTimeType" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-button type="primary" slot="append" @click="logPageSearch" icon="el-icon-search" class="search-icon"></el-button>
      </el-input>
      <span class="refresh-icon" @click="refreshTable">
        <i class="el-icon-refresh"></i>
      </span>
      <div class="clearfix"></div>
    </div>
    <section class="showTableList">
      <el-table :data="tableData" height="100%" border tooltip-effect="light">
        <el-table-column type="index" label width="50" align="center"></el-table-column>
        <!-- 会员新增统计 -->
        <template v-if="addTongji">
          <el-table-column key="1" prop="date" label="统计时间" sortable width="130"></el-table-column>
          <el-table-column key="2" prop="reg_nums" label="注册人数"></el-table-column>
          <el-table-column key="3" prop="in_money_accounts " label="新增存款人数" width="150"></el-table-column>
          <el-table-column key="4" prop="in_money_nums" label="新增存款笔数" width="150"></el-table-column>
          <el-table-column key="5" prop="in_amounts" label="新增存款总额" width="150"></el-table-column>
          <el-table-column key="6" prop="in_money_first_accounts" label="今日首存人数" width="120">
            <template slot-scope="scope">
              <span class="account_text">{{ scope.row.in_money_first_accounts}}</span>
              <el-link class="iconfont icon-fangdajing text_pad" @click="Memberdetaile(scope.row)" style="color:#1ABC9C;"></el-link>
            </template>
          </el-table-column>
          <el-table-column key="7" prop="in_money_accounts_total" label="总存款人数" width="150"></el-table-column>
          <el-table-column key="8" prop="in_money_nums_total" label="总存款笔数" width="150"></el-table-column>
          <el-table-column key="9" prop="in_amounts_total" label="总存款金额" width="150"></el-table-column>
          <el-table-column key="10" prop="out_amounts_total" label="总提款金额" width="150"></el-table-column>
          <el-table-column key="11" prop="winlose_amounts_total" label="总输赢金额" width="150"></el-table-column>
          <el-table-column key="12" prop="return_amounts_total" label="总返水金额" width="150"></el-table-column>
          <el-table-column key="13" prop="betting_accounts_total" label="总投注人数" width="150"></el-table-column>
          <el-table-column key="14" prop="betting_amounts_total" label="总投注金额" width="150"></el-table-column>
          <el-table-column key="15" prop="agent_nums" label="代理分润人" width="150"></el-table-column>
          <el-table-column key="16" prop="agent_amounts" label="代理分润金额" width="150"></el-table-column>
          <el-table-column key="17" prop="account_nums" label="会员分润人" width="150"></el-table-column>
          <el-table-column key="18" prop="account_amounts" label="会员分润金额" width="150"></el-table-column>
        </template>

        <template v-if="OnlineMember">
          <el-table-column key="1" prop="date" label="时间" sortable width="150"></el-table-column>
          <el-table-column key="2" prop="hour_0" label="0:00" width="150"></el-table-column>
          <el-table-column key="3" prop="hour_1" label="1:00" width="150"></el-table-column>
          <el-table-column key="4" prop="hour_2" label="2:00" width="150"></el-table-column>
          <el-table-column key="5" prop="hour_3" label="3:00" width="150"></el-table-column>
          <el-table-column key="6" prop="hour_4" label="4:00" width="150"></el-table-column>
          <el-table-column key="7" prop="hour_5" label="5:00" width="150"></el-table-column>
          <el-table-column key="8" prop="hour_6" label="6:00" width="150"></el-table-column>
          <el-table-column key="9" prop="hour_7" label="7:00" width="150"></el-table-column>
          <el-table-column key="10" prop="hour_8" label="8:00" width="150"></el-table-column>
          <el-table-column key="11" prop="hour_9" label="9:00" width="150"></el-table-column>
          <el-table-column key="12" prop="hour_10" label="10:00" width="150"></el-table-column>
          <el-table-column key="13" prop="hour_11" label="11:00" width="150"></el-table-column>
          <el-table-column key="14" prop="hour_12" label="12:00" width="150"></el-table-column>
          <el-table-column key="15" prop="hour_13" label="13:00" width="150"></el-table-column>
          <el-table-column key="16" prop="hour_14" label="14:00" width="150"></el-table-column>
          <el-table-column key="17" prop="hour_15" label="15:00" width="150"></el-table-column>
          <el-table-column key="18" prop="hour_16" label="16:00" width="150"></el-table-column>
          <el-table-column key="19" prop="hour_17" label="17:00" width="150"></el-table-column>
          <el-table-column key="20" prop="hour_18" label="18:00" width="150"></el-table-column>
          <el-table-column key="21" prop="hour_19" label="19:00" width="150"></el-table-column>
          <el-table-column key="22" prop="hour_20" label="20:00" width="150"></el-table-column>
          <el-table-column key="23" prop="hour_21" label="21:00" width="150"></el-table-column>
          <el-table-column key="24" prop="hour_22" label="22:00" width="150"></el-table-column>
          <el-table-column key="25" prop="hour_23" label="23:00" width="150"></el-table-column>
        </template>

        <template v-if="MemberActivity">
          <el-table-column key="1" prop="date_joined" label="注册时间" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column key="2" prop="username" label="查询账号"></el-table-column>
          <el-table-column key="3" prop="realname" label="会员姓名"></el-table-column>
          <el-table-column key="4" prop="agent_name" label="所属代理账号"></el-table-column>
          <el-table-column key="5" prop="agent_nickname" label="所属代理姓名"></el-table-column>
          <el-table-column key="6" prop="accounttreasure.bag_money" label="钱包余额"></el-table-column>
          <el-table-column key="7" prop="financial_win_or_lose" label="财务输赢"></el-table-column>
          <el-table-column key="8" prop="accounttreasure.pay_money" label="会员存款"></el-table-column>
          <el-table-column key="9" prop="accounttreasure.withdraw_money" label="会员取款"></el-table-column>
          <el-table-column key="10" label="未登录天数" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <div>{{nologinData(scope.row.last_login,'last_login')}}</div>
            </template>
          </el-table-column>
          <el-table-column key="11" label="未投注天数" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <div>{{nologinData(scope.row.last_play_time,'last_play_time')}}</div>
            </template>
          </el-table-column>
          <el-table-column key="12" prop="last_login" label="最后登录时间" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column key="13" prop="last_play_time" label="最后投注时间" :show-overflow-tooltip="true"></el-table-column>
        </template>
      </el-table>
      <Pagination ref="pagination" :data="getParams" :url="getURL" @paging="pagingCallback"></Pagination>
    </section>

    <!-- 会员存款明细 -->
    <el-dialog :title="'【'+dateTime+'】分组删除代理'" :visible.sync="memberdetails" v-dialogDrag>
      <Fund></Fund>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import Fund from '@/views/finance/Fund'
export default {
  name: 'MemberStatistic',
  props: {
    props: {
      type: Object,
      required: true
    }
  },
  computed: {
    protyInt() {
      return this.props.type
    },
    getURL() {
      return this.props.url
    },
    getParams() {
      return this.props.params
    },
    nologinData() {
      return function(Datemumber, type) {
        console.log(Datemumber)
        if (!Datemumber) {
          if (type == 'last_login') {
            return '尚未登陆'
          } else {
            return '尚未投注'
          }
        } else {
          return parseInt(Math.abs(new Date() - new Date(Datemumber)) / 1000 / 60 / 60 / 24)
        }
      }
    },
    startTimeCompute() {
      return /^NewMemberStatistics|OnlineMemberStatistics$/.test(this.protyInt)
    },
    addTongji() {
      return /^NewMemberStatistics$/.test(this.protyInt)
    },
    MemberActivity() {
      return /^MemberActivityStatistics$/.test(this.protyInt)
    },
    OnlineMember() {
      return /^OnlineMemberStatistics$/.test(this.protyInt)
    }
  },
  data() {
    return {
      select: '餐厅名',
      memberdetails: false,
      dateTime: '',
      loginTimeType: [
        {
          value: '选项1',
          label: '投注时间'
        }
      ],
      tableData: [],
      loginTime: '',
      memberName: '',
      inputValue: '',
      searchParams: {}
    }
  },
  components: {
    Pagination,
    Fund
  },
  methods: {
    pagingCallback(results, response) {
      this.tableData = results
      // results：返回的列表数据
      // response：请求接口返回的响应数据
      // do something...
    },
    refreshTable() {
      this.$nextTick(() => {
        this.$refs.pagination.refresh()
      })
    },
    logPageSearch() {
      this.searchParams = {
        name: '颤三',
        age: 13
      }
      this.$logger.log(this.searchParams)
      this.$nextTick(() => {
        this.$refs.pagination.refresh(this.searchParams)
      })
    },
    Memberdetaile(time) {
      this.dateTime = time
      this.memberdetails = true
    }
  }
}
</script>

<style lang="scss" scoped>
$color: rgb(26, 188, 156);
$white: #fff;
.inputValueWidth {
  width: 270px;
}
.newcreated {
  float: right;
  padding: 8px;
  text-align: center;
  color: $white;
  margin: 0 10px;
}
.slectWidth {
  width: 130px;
  vertical-align: middle;
}
.tableContent {
  height: calc(100% - 54px);
  .showTableList {
    height: calc(100% - 67px);
  }
  .el-table {
    width: 100%;
    margin-top: 5px;
    height: 100%;
  }
}
.selectTime {
  width: 120px;
  margin-left: 15px;
}
.searchBtn {
  width: 360px;
  vertical-align: middle;
  .clearfix {
    clear: both;
  }
}
.refresh-icon {
  float: right;
  width: 38px;
  height: 34px;
  // background-color: $color;
  text-align: center;
  line-height: 34px;
}
.refresh-icon i::before {
  color: #fff;
}
.membermoney {
  margin-left: 5px;
}
.resetel-input {
  padding-right: 0;
}
.menber-container {
  display: inline-block;
  width: 80px;
}
</style>