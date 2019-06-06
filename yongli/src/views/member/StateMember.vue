<template>
  <div class="tableContent">
    <div class="topPanel">
      <section style="overflow:hidden;">
        <el-button-group style="float:left;" v-if="showSlected">
          <el-button @click="getDataTime('before')">前一天存款</el-button>
          <el-button @click="getDataTime('today')">今天存款</el-button>
          <el-button @click="getDataTime('after')">后一天存款</el-button>
          <el-button @click="getDataTime('before')">前一天取款</el-button>
          <el-button @click="getDataTime('today')">今天取款</el-button>
          <el-button @click="getDataTime('after')">后一天取款</el-button>
        </el-button-group>
        <el-select class="ml20" v-model="memberName" clearable placeholder="全部玩法" v-if="financialState">
          <el-option v-for="item in members" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-date-picker
          v-model="datetime"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="|"
          start-placeholder="请输入起始时间"
          end-placeholder="请输入结束时间"
          align="right"
          class="date"
        ></el-date-picker>
        <el-input class="inputValueWidth" placeholder="请输入搜索条件" v-model="inputValue" clearable>
          <!-- 查询账号 -->
          <el-select slot="prepend" v-model="memberName" clearable placeholder="查询账号" v-if="showSlected">
            <el-option v-for="item in members" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>

          <el-select slot="prepend" v-model="memberName" clearable placeholder="会员账号" v-if="financialState">
            <el-option v-for="item in members" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>

          <el-button slot="append" type="primary" @click="logPageSearch" icon="el-icon-search" class="search-icon"></el-button>
        </el-input>
        <el-button type="primary" icon="el-icon-refresh" class="refreshBtn" @click="refreshTable"></el-button>
      </section>
      <div class="totalOf">
        <span>
          本页合计：存款金额：￥【
          <span>{{subPay_momey}}</span>】
        </span>
        <span>
          取款金额：￥【
          <span>{{subWithdrawal}}</span>】
        </span>
        <span>存款次数：{{subAccountNumber}}</span>
        <span>取款次数：{{subwithdrawalsNumber}}</span>
        <span>
          返水派送：￥【
          <span>{{SumReturnwater}}</span>
          】
        </span>
        <span>
          代理分润：￥【
          <span>{{SumAgentFenRun}}</span>
          】
        </span>
        <span>
          注册赠送：￥【
          <span>{{SumRegisterFree}}</span>
          】
        </span>
        <span>
          彩金派送：￥【
          <span>{{SumMosaicgoldde}}</span>
          】
        </span>
      </div>
    </div>
    <section class="showTableList">
      <el-table :data="tableData" border height="100%" tooltip-effect="light">
        <el-table-column type="index" label=" " width="50" align="center"></el-table-column>
        <template v-if="showSlected">
          <el-table-column prop="username" label="查询账号"></el-table-column>
          <el-table-column prop="realname" label="会员姓名"></el-table-column>
          <el-table-column prop="bag_money" label="钱包余额">
            <template slot-scope="scope">
              <span class="account_text">{{ scope.row.bag_money}}</span>
              <el-link class="iconfont icon-fangdajing text_pad" @click="dialogTable(scope.row)" style="color:gold;"></el-link>
            </template>
          </el-table-column>
          <el-table-column prop="pay_money" label="存款金额">
            <template slot-scope="scope">
              <span class="account_text">{{ scope.row.pay_money}}</span>
              <el-link class="iconfont icon-fangdajing text_pad" @click="popuplayer(scope.row)" style="color:gold;"></el-link>
            </template>
          </el-table-column>
          <el-table-column prop="out_all_money" label="会员取款">
            <template slot-scope="scope">
              <span class="account_text">{{ scope.row.out_all_money}}</span>
              <el-link class="iconfont icon-fangdajing text_pad" @click="popuplayer(scope.row)" style="color:gold;"></el-link>
            </template>
          </el-table-column>
          <el-table-column prop="account_number" label="存款次数"></el-table-column>
          <el-table-column prop="date" label="取款次数"></el-table-column>
          <el-table-column prop="rakeback_money" label="返水派送">
            <template slot-scope="scope">
              <span class="account_text">{{ scope.row.rakeback_money}}</span>
              <el-link class="iconfont icon-fangdajing text_pad" @click="popuplayer(scope.row)" style="color:gold;"></el-link>
              <!-- @click="WaterEjelayer(scope.row.address)" -->
            </template>
          </el-table-column>
          <el-table-column prop="date" label="代理分润"></el-table-column>
          <el-table-column prop="date" label="注册赠送"></el-table-column>
          <el-table-column prop="lottery_money" label="彩金派送">
            <template slot-scope="scope">
              <span class="account_text">{{ scope.row.lottery_money}}</span>
              <el-link class="iconfont icon-fangdajing text_pad" @click="popuplayer(scope.row)" style="color:gold;"></el-link>
              <!-- @click="WaterEjelayer(scope.row.address)" -->
            </template>
          </el-table-column>
          <el-table-column prop="date" label="额度转入">
            <template slot-scope="scope">
              <span class="account_text">{{ scope.row.date}}</span>
              <el-link class="iconfont icon-fangdajing text_pad" @click="transferDetaile(scope.row)" style="color:gold;"></el-link>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="额度转出">
            <template slot-scope="scope">
              <span class="account_text">{{ scope.row.date}}</span>
              <el-link class="iconfont icon-fangdajing text_pad" @click="transferDetaile(scope.row)" style="color:gold;"></el-link>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="红包转入"></el-table-column>
          <el-table-column prop="date" label="红包转出"></el-table-column>
        </template>
        <template v-if="financialState">
          <el-table-column prop="date" :label="singerREX?'会员账号':'查询账号'"></el-table-column>
          <el-table-column prop="realname" label="会员姓名"></el-table-column>
          <el-table-column prop="game_type" label="游戏名称"></el-table-column>
          <el-table-column prop="address" label="总笔数"></el-table-column>
          <el-table-column prop="address" label="总投注"></el-table-column>
          <el-table-column prop="date" label="总有效投注"></el-table-column>
          <el-table-column prop="date" label="总输赢" sortable></el-table-column>
        </template>
      </el-table>
      <Pagination ref="pagination" :data="searchParams" url="member.memberInfo" @paging="pagingCallback"></Pagination>
    </section>
    <!-- 会员账号明细弹出窗口 -->
    <el-dialog :title="'【'+dialogtitle.Title+'】会员账户明细'" :visible.sync="deTaileTable" v-dialogDrag>
      <MemberDetail></MemberDetail>
    </el-dialog>

    <!-- 会员取款明细 -->
    <el-dialog :title="dialogtitle.Title+'会员存取款明细'" :visible.sync="LoadingLog" v-dialogDrag width="70%">
      <Fund :username="sentName" :view-types="viewType" :style="dialogCss"></Fund>
    </el-dialog>

    <!-- 会员账户流水 -->
    <el-dialog :title="'会员账户流水'+dialogtitle.Title" :visible.sync="MemberWater" v-dialogDrag width="70%">
      <MemberAccountWater></MemberAccountWater>
    </el-dialog>

    <!-- 会员额度转换明细 -->
    <el-dialog :title="dialogtitle.Title+'会员账户流水'" :visible.sync="TranferDetail" v-dialogDrag width="70%">
      <MemberTranform></MemberTranform>
    </el-dialog>
  </div>
</template>

<script>
import { quickChooseTime } from '@/config/quickChooseTime'
import Pagination from '@/components/Pagination'
import MemberDetail from '@/views/member/MemberDetail'
import MemberAccountWater from '@/views/member/MemberAccountWater'
import Fund from '@/views/finance/Fund'
import MemberTranform from '@/views/finance/Transform'
import moment from 'moment'
export default {
  name: 'StateMember',
  props: {
    props: {
      type: Object,
      rquire: true
    }
  },
  data() {
    return {
      subPay_momey: '',
      subWithdrawal: '',
      subAccountNumber: '',
      subwithdrawalsNumber: '',
      sentName: '',
      viewType: [1, 2],
      SumReturnwater: '',
      SumAgentFenRun: '',
      SumRegisterFree: '',
      SumMosaicgoldde: '',
      valueNum: 0,
      accountId: '',
      deTaileTable: false,
      LoadingLog: false,
      MemberWater: false,
      TranferDetail: false,
      dialogtitle: {
        Title: ''
      },
      loginTimeType: [],
      members: [],
      tableData: [],
      loginTime: '',
      pickerOptions: {
        shortcuts: quickChooseTime
      },
      datetime: '',
      memberName: '',
      inputValue: '',
      searchParams: {}
    }
  },
  components: {
    Pagination,
    MemberDetail,
    MemberAccountWater,
    Fund,
    MemberTranform
  },
  computed: {
    propType() {
      return this.props.type
    },
    financialState() {
      return /^Memberbetting|MembershipReport$/.test(this.propType)
    },
    showSlected() {
      return /^MemberState|MemberFinancials$/.test(this.propType)
    },
    singerREX() {
      return /^MembershipReport$/.test(this.propType)
    }
  },
  methods: {
    pagingCallback(results, response) {
      this.tableData = results
      this.tableData
        .map(row => row.id)
        .reduce((acc, cur) => {
          // 字段还没有定，先这样放着，有字段替换下
          this.subPay_momey += parseInt(cur)
          // this.subWithdrawal += parseInt(cur)
          // this.subAccountNumber += parseInt(cur)
          // this.subwithdrawalsNumber += parseInt(cur)
          // this.SumReturnwater += parseInt(cur)
          // this.SumAgentFenRun += parseInt(cur)
          // this.SumRegisterFree += parseInt(cur)
          // this.SumMosaicgoldde += parseInt(cur)
        }, 0)
    },
    getDataTime(data) {
      const end = new Date()
      const start = new Date()
      let createTime = []
      if (data == 'today') {
        createTime[0] = moment(start).format('YYYY-MM-DD HH:mm:ss')
        createTime[1] = moment(start).format('YYYY-MM-DD HH:mm:ss')
        this.datetime = createTime
        return this.datetime
      }
      if (data == 'before') {
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 1)
        const startDate = moment(start).format('YYYY-MM-DD HH:mm:ss')
        const endDate = moment(end).format('YYYY-MM-DD HH:mm:ss')
        createTime.push(startDate)
        createTime.push(endDate)
        this.datetime = createTime
        return this.datetime
      }
      if (data == 'after') {
        start.setTime(start.getTime() + 3600 * 1000 * 24 * 1)
        const startDate = moment(start).format('YYYY-MM-DD HH:mm:ss')
        const endDate = moment(end).format('YYYY-MM-DD HH:mm:ss')
        createTime.push(endDate)
        createTime.push(startDate)
        this.datetime = createTime
        return this.datetime
      }
    },
    refreshTable() {
      this.$nextTick(() => {
        this.$refs.pagination.refresh()
      })
    },
    logPageSearch() {
      this.searchParams = {}
      this.$nextTick(() => {
        this.$refs.pagination.refresh(this.searchParams)
      })
    },
    dialogTable(data) {
      this.dialogtitle.Title = data.username
      this.deTaileTable = true
    },
    popuplayer(data) {
      this.dialogtitle.Title = data.username
      this.sentName = this.dialogtitle.Title
      this.LoadingLog = true
    },
    WaterEjelayer(data) {
      this.dialogtitle.Title = data.username
      this.MemberWater = true
    },
    transferDetaile(data) {
      this.dialogtitle.Title = data.username
      this.TranferDetail = true
    }
  }
}
</script>

<style lang="scss" scoped>
$color: rgb(26, 188, 156);
.inputValueWidth {
  width: 360px;
}
.refresh-icon {
  float: right;
  width: 38px;
  height: 34px;
  text-align: center;
  line-height: 34px;
}
.refreshBtn {
  float: right;
}
.el-select {
  width: 100px;
}
.totalOf {
  background: #fff;
  padding-top: 5px;
}
.topPanel {
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px;
}
.tableContent {
  height: calc(100% - 54px);
  .showTableList {
    height: calc(100% - 120px);
  }
  .el-table {
    width: 100%;
    margin-top: 5px;
    height: 100%;
  }
}
</style>