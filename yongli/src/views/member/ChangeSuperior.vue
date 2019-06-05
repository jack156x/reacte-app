<template>
  <div style="background:#fff;">
    <div style="overflow:hidden;">
      <div style="display:flex;align-items: center;margin-bottom:10px;float:left">
        <el-select v-model="success" slot="prepend" placeholder="注册时间" style="float：left" class="loginTime">
          <el-option label="注册时间" value="1"></el-option>
        </el-select>
        <el-date-picker
          style="float：left"
          v-model="datetime"
          type="datetimerange"
          :picker-options="pickerOptions2"
          range-separator="|"
          start-placeholder="请输入起始时间"
          end-placeholder="请输入结束时间"
          align="right"
          class="datepickTime"
        ></el-date-picker>
        <el-select v-model="success" placeholder="代理输赢" style="float：left" class="loginTime">
          <el-option label="全部组别" value="1"></el-option>
        </el-select>
        <el-input class="searchBtn" placeholder="请输入搜索条件" v-model="inputValue" clearable style="float：left">
          <el-select v-model="success" placeholder="代理账号" style="float：left" class="loginTime">
            <el-option label="全部组别" value="1"></el-option>
          </el-select>
          <el-button type="primary" slot="append" @click="logPageSearch" icon="el-icon-search" class="search-icon"></el-button>
        </el-input>
      </div>
      <el-button type="primary" icon="el-icon-refresh" class="newcreated" style="float:right"></el-button>
    </div>
    <el-table ref="multipleTable" :data="tableData" height="400" border tooltip-effect="light" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date_joined" label="注册时间"></el-table-column>
      <el-table-column prop="agent_account" label="代理账号"></el-table-column>
      <el-table-column prop="agent_nickname" label="代理姓名"></el-table-column>
      <el-table-column prop="date" label="代理组别"></el-table-column>
      <el-table-column prop="date" label="代理级别"></el-table-column>
      <el-table-column prop="agent_account" label="所属代理账号"></el-table-column>
      <el-table-column prop="agent_nickname" label="所属代理姓名"></el-table-column>
      <el-table-column prop="bag_money" label="钱包余额"></el-table-column>
      <el-table-column prop="date" label="代理输赢"></el-table-column>
      <el-table-column prop="whether_recharge " label="是否充值"></el-table-column>
      <el-table-column prop="rakeback_money" label="存款金额"></el-table-column>
      <el-table-column prop="date" label="取款金额"></el-table-column>
      <el-table-column prop="date" label="未登录天数"></el-table-column>
      <el-table-column prop="date" label="为投注天数"></el-table-column>
    </el-table>
    <Pagination ref="pagination" :data="searchParams" url="member.log" @paging="pagingCallback"></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { quickChooseTime } from '@/config/quickChooseTime'
export default {
  name: 'MemberWinOrloseDetail',
  data() {
    return {
      systen: '餐厅名',
      success: '查询条件',
      checkList: ['选中且禁用', '复选框 A'],
      datetime: '',
      pickerOptions2: {
        shortcuts: quickChooseTime
      },
      tableData: [
        {
          id: 1,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      inputValue: '',
      searchParams: {},
      multipleSelection: []
    }
  },
  components: {
    Pagination
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
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
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style lang="scss" scoped>
$white: #fff;
.newcreated {
  float: right;
  padding: 8px;
  text-align: center;
  color: $white;
  margin: 0 10px;
}
.searchBtn {
  /deep/.el-input-group__prepend {
    background-color: #fff;
    width: 60px;
  }
}

.selectTime {
  width: 120px;
  margin-left: 15px;
}
.searchBtn {
  width: 320px;
  margin-left: 15px;
}
.refresh-icon {
  float: right;
  width: 38px;
  height: 34px;
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
.loginTime {
  width: 120px;
}
.datepickTime {
  width: 330px;
}
</style>