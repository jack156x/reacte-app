<template>
  <div class="tableContent">
    <div class="header_search">
      <el-input class="searchBtn" placeholder="请输入搜索条件" v-model="searchname" clearable>
        <el-select class="w100" v-model="allType" slot="prepend">
          <el-option label="查询账号" value="username"></el-option>
          <el-option label="会员姓名" value="agent_nickname"></el-option>
          <el-option label="登陆账号" value="username"></el-option>
        </el-select>
        <el-button type="primary" slot="append" @click="logPageSearch" icon="el-icon-search" class="search-icon"></el-button>
      </el-input>
      <el-button type="primary" icon="el-icon-refresh" class="newcreated mr-5"></el-button>
    </div>
    <section class="showTableList">
      <el-table :data="tableData" border>
        <el-table-column prop="no" label width="50" align="center"></el-table-column>
        <el-table-column prop="username" label="查询账号" align="center"></el-table-column>
        <el-table-column prop="username" label="登陆账号" align="center"></el-table-column>
        <el-table-column prop="agent_nickname" label="会员姓名" align="center"></el-table-column>
        <el-table-column prop="telephone" label="手机号码" align="center">--</el-table-column>
        <el-table-column prop="qq" label="QQ号码" align="center">--</el-table-column>
        <el-table-column prop="wechat" label="微信账号">--</el-table-column>
        <el-table-column prop="email" label="邮箱地址" width="180" :show-overflow-tooltip="true">--</el-table-column>
        <el-table-column prop="date_joined" label="注册时间"></el-table-column>
        <el-table-column prop="orther_remark" label="其他信息" width="180" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <el-link class="iconfont icon-fangdajing text_pad" @click="OtherInfo(scope.row)" style="color:#1ABC9C;"></el-link>
            {{scope.row.orther_remark==null?'无':scope.row.orther_remark}}
          </template>
        </el-table-column>
      </el-table>
      <Pagination ref="pagination" :data="searchParams" url="member.memberInfo" @paging="pagingCallback"></Pagination>
    </section>
    <!-- 其他信息 -->
    <el-dialog :title="'【'+title+'】其他信息'" :visible.sync="otherInfoShow" v-dialogDrag width="30%">
      <el-form ref="form" :model="dataList" label-width="110px">
        <el-form-item label="其它信息">
          <el-input type="textarea" v-model="dataList.otherText" placeholder="请输入其他信息，最大长度200" max="200" :rows="3"></el-input>
        </el-form-item>
        <el-form-item class="textRight">
          <el-button type="primary" @click="AccountSubmit" :id="id">确认</el-button>
          <el-button type="danger" @click="close">关闭</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { modifyOtherText } from '@/services/member'
import Pagination from '@/components/Pagination'
import { setTimeout } from 'timers';
export default {
  name: 'member-data',
  data() {
    return {
      allType: '查询账号',
      tableData: [],
      title: '',
      id: '',
      otherInfoShow: false,
      dataList: {
        otherText: ''
      },
      searchname: '',
      searchParams: {}
    }
  },
  components: {
    Pagination
  },
  methods: {
    pagingCallback(results, response) {
      this.tableData = results
    },
    refreshTable() {
      this.$nextTick(() => {
        this.$refs.pagination.refresh()
      })
    },
    logPageSearch() {
      let parame = this.allType
      switch (parame) {
        case 'username':
          this.searchParams.username = this.searchname
          break
        case 'agent_nickname':
          this.searchParams.agent_nickname = this.searchname
          break
        default:
          this.searchParams.username = this.searchname
      }
      this.$nextTick(() => {
        this.$refs.pagination.refresh(this.searchParams)
      })
    },
    OtherInfo(data) {
      this.title = data.username;
      this.id = data.id;
      this.otherInfoShow = true;
      this.dataList.otherText = data.orther_remark;
    },
    AccountSubmit() {
      let params = {
					id: this.id,
					orther_remark: this.dataList.otherText
				}
				const _this = this
				modifyOtherText(this.id, params).then(res => {
					if (res) {
					this.$notify({
						title: '操作成功',
						message: res.detail,
						type: 'success'
          })
          _this.refreshTable();
          _this.close();
					}
				})
    },
    close() {
      this.otherInfoShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
$color: rgb(26, 188, 156);
$white: #fff;
.newcreated {
  float: right;
  padding: 8px;
  text-align: center;
}

.tableContent {
  height: 100%;
  .showTableList {
    height: calc(100% - 81px);
  }
  .el-table {
    width: 100%;
    margin-top: 5px;
    height: 100%;
  }
}

.searchBtn {
  width: 300px;
}
.textRight {
  text-align: right;
  margin: 0;
}

.w100 {
  width: 100px;
}
</style>