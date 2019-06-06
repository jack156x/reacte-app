<template>
  <div class="tableContent">
    <!-- 关键信息修改 修改密码 -->
    <div style="overflow:hidden;">
      <div style="display: inline-flex;">
        <el-select v-model="loginTime" clearable placeholder="注册时间" v-if="keypass">
          <el-option label="注册时间" value="date_joined"></el-option>
        </el-select>
        <el-select v-if="keyInfoedit" v-model="loginTime" clearable placeholder="创建时间">
          <el-option label="创建时间" value="date_joined"></el-option>
        </el-select>
        <el-date-picker
          v-if="!loadList"
          v-model="datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="|"
          start-placeholder="请输入起始时间"
          end-placeholder="请输入结束时间"
          align="right"
          class="date"
        ></el-date-picker>
        <!-- 会员钱包结束 -->
        <el-select class="ml-5" v-if="keyInfoedit" v-model="modifyType" clearable placeholder="选择修改类型" style="width:140px">
          <el-option v-for="item in modifyTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>

        <el-input class="seatchBtnWidth ml-5" placeholder="请输入搜索条件" v-model="inputValue" clearable>
          <el-select slot="prepend" v-model="memberName" clearable placeholder="查询账号">
            <el-option v-for="item in members" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <el-button type="primary" slot="append" @click="logPageSearch" icon="el-icon-search" class="search-icon"></el-button>
        </el-input>
      </div>
      <el-button type="primary" icon="el-icon-refresh" @click="refreshTable" class="refreshBtn"></el-button>
    </div>
    <section class="showTableList">
      <el-table :data="tableData" border height="100%" tooltip-effect="light">
        <el-table-column prop="no" label=" " width="50" align="center"></el-table-column>
        <template v-if="keypass">
          <el-table-column prop="invite_code" label="邀请码"></el-table-column>
          <el-table-column prop="date_joined" label="注册时间"></el-table-column>
          <el-table-column prop="username" label="查询账号">
            <template slot-scope="scope">
              <div>
                <el-link class="iconfont icon-fangdajing text_pad" @click="QueryAccount(scope.row.username)" style="color:#1ABC9C;"></el-link>
                {{scope.row.username}}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="accountsecurity.realname" label="会员姓名"></el-table-column>
          <el-table-column prop="is_destroy" label="是否已经删除" sortable align="center">
            <template slot-scope="scope">
              <i v-if="scope.row.is_destroy == 1" class="el-icon-success success"></i>
              <i v-else class="el-icon-error"></i>
            </template>
            <!-- <template slot-scope="scope">
              <div>
                <el-link :class="Rightwrong(scope.row.is_destroy)"></el-link>
              </div>
            </template>-->
          </el-table-column>
          <el-table-column prop="date" label="操作" v-if="keyInfo">
            <template slot-scope="scope">
              <el-button type="text" class="btn-green" @click="editMemberName(scope.row)">修改姓名</el-button>
              <span class="iconfontLine"></span>
              <el-button type="text" class="btn-green" @click="MemberBankClick(scope.row)">银行卡片</el-button>
              <span class="iconfontLine"></span>
              <el-button type="text" class="btn-green" @click="DeleteMember(scope.row)">删除会员</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="操作" v-if="editpass">
            <template slot-scope="scope">
              <el-button type="text" class="btn-green" @click="EditPassMember(scope.row)">修改密码</el-button>
            </template>
          </el-table-column>
        </template>

        <template v-if="keyInfoedit">
          <el-table-column prop="username" label="查询账号"></el-table-column>
          <el-table-column prop="edit_type" label="修改类型"></el-table-column>
          <el-table-column prop="value1" label="修改前内容" width="180" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="value2" label="修改后内容" width="180" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="create_time" label="创建时间" sortable></el-table-column>
          <el-table-column prop="create_ip" label="创建IP"></el-table-column>
          <el-table-column prop="create_area" label="创建地区"></el-table-column>
        </template>

        <template v-if="loadList">
          <el-table-column prop="username" label="查询账号"></el-table-column>
          <el-table-column prop="loginname" label="登陆账号"></el-table-column>
          <el-table-column prop="realname" label="会员姓名"></el-table-column>
          <el-table-column prop="date_joined" label="注册时间"></el-table-column>
        </template>
      </el-table>
      <Pagination ref="pagination" :data="searchParams" :url="getURL" @paging="pagingCallback"></Pagination>
    </section>

    <!-- 会员账号弹出窗口 -->
    <el-dialog :title="'【'+dialogtitle.Title+'】会员信息'" :visible.sync="Queryaccountshow" v-dialogDrag>
      <MemberInforDetail :FormData="FormValue" @closeWindow="closeWindow"></MemberInforDetail>
    </el-dialog>
    <!-- 修改密码 -->
    <el-dialog :title="'修改【'+dialogtitle.Title+'】会员姓名'" :visible.sync="editNameshow" v-dialogDrag width="20%">
      <EditMemberName :details="currentNumsDetails" @closeParentWindow="closeWindow"></EditMemberName>
    </el-dialog>
    <!-- 会员银行卡 -->
    <el-dialog
      custom-class="inDialog"
      :title="'【'+dialogtitle.Title+'】会员银行卡'"
      :visible.sync="MemberBankshow"
      @closed="currentNumsDetails={}"
      :append-to-body="true"
    >
      <MemberBank class="inbody" :details="currentNumsDetails" :viewType="propType" @closeParentWindow="closeWindow" :style="dialogCss"></MemberBank>
    </el-dialog>

    <!-- 删除会员 -->
    <el-dialog :title="'您确认删除【'+dialogtitle.Title+'】会员？'" :visible.sync="DeleMembershow" v-dialogDrag width="20%">
      <DeleteMember :details="currentNumsDetails" @closeParentWindow="closeWindow"></DeleteMember>
    </el-dialog>

    <!-- 修改密码 -->
    <el-dialog :title="'修改【'+dialogtitle.Title+'】会员密码'" :visible.sync="EditMemberPass" v-dialogDrag width="20%">
      <EditMemberPassword @closeParentWindow="closeWindow" :resetFrom="FormValue"></EditMemberPassword>
    </el-dialog>
  </div>
</template>

<script>
import { quickChooseTime } from '@/config/quickChooseTime'
import Pagination from '@/components/Pagination'
import MemberInforDetail from '@/views/member/MemberInfoDetail'
import EditMemberName from '@/views/member/EditMemberName'
import MemberBank from '@/views/member/Card'
import DeleteMember from '@/views/member/DeleteMember'
import EditMemberPassword from '@/views/member/EditMemberPassword'
import { scrypt } from 'crypto'
import { Script } from 'vm'
export default {
  name: 'keyinfo-edit',
  props: {
    props: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      valueNum: 0,
      FormValue: {},
      Queryaccountshow: false,
      editNameshow: false,
      MemberBankshow: false,
      DeleMembershow: false,
      EditMemberPass: false,
      dialogtitle: {
        Title: ''
      },
      members: [
        {
          label: '查询账号',
          value: 'username'
        },
        {
          label: '会员姓名',
          value: 'realname'
        },
        {
          label: '手机号码',
          value: 'telephone'
        },
        {
          label: '邀请码',
          value: 'invite_code'
        },
        {
          label: '登录账号',
          value: 'accountname'
        }
      ],
      modifyTypes: [
        {
          value: '修改会员名称',
          label: '修改会员名称'
        },
        {
          value: '修改会员登入密码',
          label: '修改会员登入密码'
        },
        {
          value: '修改会员提款密码',
          label: '修改会员提款密码'
        },
        {
          value: '会员完善资料',
          label: '会员完善资料'
        },
        {
          value: '修改姓名',
          label: '修改姓名'
        },
        {
          value: '银行卡片',
          label: '银行卡片'
        },
        {
          value: '修改密码',
          label: '修改密码'
        },
        {
          value: '删除会员',
          label: '删除会员'
        }
      ],
      tableData: [],
      loginTime: '',
      pickerOptions: {
        shortcuts: quickChooseTime
      },
      datetime: '',
      memberName: '',
      inputValue: '',
      modifyType: '',
      searchParams: {},
      currentNumsDetails: {}
    }
  },
  components: {
    Pagination,
    MemberInforDetail,
    EditMemberName,
    MemberBank,
    DeleteMember,
    EditMemberPassword
  },
  watch: {
    datetime() {
      if (this.datetime === null) {
        this.datetime = []
      }
    }
  },
  computed: {
    propType() {
      return this.props.type
    },
    getURL() {
      return this.props.url
    },
    loadList() {
      return /^loadList$/.test(this.propType)
    },
    keypass() {
      return /^keyInfo|editpass$/.test(this.propType)
    },
    keyInfoedit() {
      return /^keysInfoedit$/.test(this.propType)
    },
    keyInfo() {
      return /^keyInfo$/.test(this.propType)
    },
    editpass() {
      return /^editpass$/.test(this.propType)
    }
  },
  async created() {
    this.memberName = 'username'
  },
  methods: {
    pagingCallback(results, response) {
      this.tableData = results
    },
    closeWindow(value) {
      this.dialogTableVisible = value
      this.EditMemberPass = value
      this.DeleMembershow = value
      this.editNameshow = value
      this.MemberBankshow = value
      this.Queryaccountshow = value
    },
    refreshTable() {
      this.$nextTick(() => {
        this.$refs.pagination.refresh()
      })
    },
    logPageSearch() {
      if (this.props.type !== 'keysInfoedit') {
        this.searchParams = {
          date_joined: this.datetime[0],
          date_joined_end: this.datetime[1],
          [this.memberName]: this.inputValue
        }
      } else {
        this.searchParams = {
          date_joined: this.datetime[0],
          date_joined_end: this.datetime[1],
          [this.memberName]: this.inputValue,
          edit_type: this.modifyType
        }
      }

      this.$nextTick(() => {
        this.$refs.pagination.refresh(this.searchParams)
      })
    },
    QueryAccount(name) {
      this.dialogtitle.Title = name
      this.Queryaccountshow = true
    },
    editMemberName(data) {
      this.dialogtitle.Title = data.username
      this.currentNumsDetails = data
      this.editNameshow = true
    },
    MemberBankClick(data) {
      this.dialogtitle.Title = data.username
      this.currentNumsDetails = data
      this.MemberBankshow = true
    },
    DeleteMember(data) {
      this.dialogtitle.Title = data.username
      this.currentNumsDetails = data
      this.DeleMembershow = true
    },
    EditPassMember(listData) {
      this.dialogtitle.Title = listData.username
      this.FormValue = JSON.parse(JSON.stringify(listData))
      this.EditMemberPass = true
    }
  }
}
</script>

<style lang="scss" scoped>
.seatchBtnWidth {
  width: 360px;
}

.refreshBtn {
  float: right;
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

.el-select {
  width: 100px;
}

.iconfontLine::after {
  content: '|';
}

.btn-green {
  padding: 4px 5px;
  color: #475059;
}

.btn-green:hover {
  // background: #1abc9c;
  color: #475059;
}
</style>