<template>
  <div class="tableContent">
    <section class="showTableList">
      <el-table :data="tableData">
        <el-table-column type="index" label=" " prop="no"></el-table-column>
        <el-table-column prop="accountType" label="账户类型" width="180">
          <span>我的钱包</span>
        </el-table-column>
        <el-table-column prop="real_account" label="真人账号" width="180"></el-table-column>
        <el-table-column prop="bag_money" label="账号余额/星级">
          <!-- rakeback_bank_money  返水账户 账号余额/星级 -->
          <!-- bag_money  我的钱包账号余额/星级-->
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="transferInfo(scope.row)">资金回收</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination ref="paginations" :data="searchParams" url="member.accounttreasure" @paging="pagingCallback"></Pagination>
    </section>

    <el-dialog :title="title" :visible.sync="Visible" width="22%" append-to-body>
      <div class="item_flex">查询账号：{{username}}</div>
      <div class="item_flex">
        调整方向：
        <span>返水账户转入钱包</span>
      </div>
      <div class="item_flex">
        转入金额：
        <i :style="styleObject">{{withdraw_money}}</i>
      </div>
      <div class="item_flex">调整理由：返水账户余额转入钱包</div>
      <strong class="tipop">您确认为会员进行转账操作？</strong>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="transfer">确 定</el-button>
        <el-button @click="Visible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { moneyrakeback } from '@/services/member'
export default {
  name: 'memberDetail',
  props: ['accountID'],
  data() {
    return {
      styleObject: {
        color: 'red',
        fontSize: '13px',
        fontStyle: 'normal'
      },
      tableData: [],
      searchParams: {},
      title: '',
      userId: '',
      username: '',
      transferInto: '',
      Visible: false,
      withdraw_money: ''
    }
  },
  components: {
    Pagination
  },
  methods: {
    pagingCallback(results, response) {
      this.tableData = results
    },
    transferInfo(infor) {
      this.username = infor.username
      this.withdraw_money = infor.withdraw_money
      this.userId = infor.user
      this.$logger.log(infor)
      this.title = '【' + this.username + '】转账信息'
      this.Visible = true
    },
    transfer() {
      this.Visible = false
      this.$logger.log(this.withdraw_money, this.username)
      const params = {
        user_id: this.userId
      }
      moneyrakeback(params).then(res => {
        this.$logger.log(res.detail)
        if (res.hasOwnProperty('detail')) {
          this.$notify({
            title: '成功',
            message: res.detail,
            type: 'success'
          })
        }
      })
      // 提交转账操作
    },
    getPropsaccountId() {
      this.searchParams.user_id = this.accountID
    }
  },
  mounted() {
    this.getPropsaccountId()
  }
}
</script>

<style lang="scss" scoped>
.item_flex {
  vertical-align: middle;
  padding: 5px 10px;
}
.tipop {
  padding-top: 26px;
  display: block;
  font-weight: bold;
  font-size: 26px;
  color: red;
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
</style>