<template>
  <div style="background:#fff;">
    <el-input class="searchBtn" placeholder="请输入搜索条件" v-model="inputValue" clearable>
      <el-select v-model="select" slot="prepend" placeholder="全部玩法">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button type="primary" slot="append" @click="logPageSearch" icon="el-icon-search" class="search-icon"></el-button>
    </el-input>
    <el-button type="primary" icon="el-icon-plus" class="newcreated" @click="refreshTable">批量转移</el-button>
    <el-button type="primary" icon="el-icon-refresh" class="newcreated"></el-button>
    <div class="clearfix"></div>
    <el-table :data="tableData" height="600" border tooltip-effect="light">
      <el-table-column type="index" label width="50" align="center"></el-table-column>
      <el-table-column prop="address" label="查询账号"></el-table-column>
      <el-table-column prop="address" label="登陆账号"></el-table-column>
      <el-table-column prop="date" label="会员姓名"></el-table-column>
      <el-table-column prop="date" label="手机号码"></el-table-column>
      <el-table-column prop="date" label="QQ号码"></el-table-column>
      <el-table-column prop="date" label="微信账号"></el-table-column>
      <el-table-column prop="date" label="邮箱地址"></el-table-column>
      <el-table-column prop="date" label="注册时间"></el-table-column>
      <el-table-column prop="date" label="其他信息"></el-table-column>
    </el-table>
    <Pagination ref="pagination" :data="searchParams" url="member.log" @paging="pagingCallback"></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  name: 'MemberStatistic',
  data() {
    return {
      select: '餐厅名',
      tableData: [
        {
          id: 1,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      inputValue: '',
      searchParams: {}
    }
  },
  components: {
    Pagination
  },
  methods: {
    pagingCallback(results, response) {
      // this.tableData = results;
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
    }
  }
}
</script>

<style lang="scss" scoped>
$color: rgb(26, 188, 156);
$white: #fff;
.newcreated {
  float: right;
  text-align: center;
  margin: 0 10px;
}
.searchBtn {
  width: 400px;
  margin-left: 15px;
  /deep/.el-input-group__prepend {
    background: $white;
    width: 100px;
  }
  .clearfix {
    clear: both;
  }
}
</style>