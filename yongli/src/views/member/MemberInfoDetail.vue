<template>
  <div>
    <div v-if="!isPlainView">
      <el-form ref="form" :model="getParentData" :rules="rules" label-width="90px" label-suffix label-position="left">
        <div class="form">
          <div class="form-left">
            <el-form-item label="查询账号" prop="username">
              <el-input v-model="getParentData.username" :readonly="readonly"></el-input>
            </el-form-item>
            <el-form-item label="会员组别" prop="group">
              <el-select v-model="getParentData.group" placeholder="请选择会员组别" style="width: 100%;" :disabled="readonly">
                <el-option v-for="item in selectOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="注册时间" prop="date_joined">
              <el-col :span="24">
                <el-date-picker type="datetime" placeholder="选择日期时间" v-model="getParentData.date_joined" style="width: 100%;" :readonly="readonly"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="注册地址" prop="name">
              <el-input v-model="getParentData.name" :readonly="readonly"></el-input>
            </el-form-item>
            <el-form-item label="上级代理ID" prop="name">
              <el-input v-model="getParentData.name" :readonly="readonly"></el-input>
            </el-form-item>
            <el-form-item label="代理创建" prop="type">
              <el-checkbox v-model="getParentData.whether_agent" :true-label="1" :false-label="0" :disabled="readonly"></el-checkbox>
            </el-form-item>
          </div>
          <div class="form-right">
            <el-form-item label="会员姓名" prop="real">
              <el-input v-model="getParentData.realname" :readonly="readonly"></el-input>
            </el-form-item>
            <el-form-item label="真人账号" prop="real_account">
              <el-input v-model="getParentData.real_account" placeholder="请输入真人账号" :readonly="readonly"></el-input>
            </el-form-item>
            <el-form-item label="注册IP" prop="reg_ip">
              <el-input v-model="getParentData.reg_ip" placeholder="请输入注册IP" :readonly="readonly"></el-input>
            </el-form-item>
            <el-form-item label="推荐人" prop="inviter_name">
              <el-input v-model="getParentData.inviter_name" placeholder="请输入推荐人" :readonly="readonly"></el-input>
            </el-form-item>
            <el-form-item label="是否监控" prop="type">
              <el-checkbox v-model="getParentData.whether_monitor" :true-label="1" :false-label="0" :disabled="readonly"></el-checkbox>
            </el-form-item>
            <el-form-item label="是否代理" prop="type">
              <el-checkbox v-model="getParentData.whether_agent" :true-label="1" :false-label="0" :disabled="readonly"></el-checkbox>
            </el-form-item>
          </div>
        </div>
        <el-form-item label="提示备注">
          <el-input v-model="getParentData.tip_remark" :readonly="readonly"></el-input>
        </el-form-item>
        <el-form-item label="备注原因">
          <el-input type="textarea" v-model="getParentData.orther_remark" :readonly="readonly"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer elformItems" v-if="!readonly">
        <el-button type="primary" @click="submitForm('form')">确认</el-button>
        <el-button @click="closeWindow">关闭</el-button>
      </div>
    </div>
    <!-- 列表展示信息 -->
    <div class="panel panel-primary" v-if="isPlainView">
      <table class="table table-bordered table-striped text-center">
        <tbody>
          <tr>
            <td>
              <strong>会员姓名</strong>
            </td>
            <td>
              <el-input v-model="value" placeholder="请输入内容" readonly></el-input>
            </td>
            <td>
              <strong>所属组别</strong>
            </td>
            <td>
              <el-input v-model="value" placeholder="请输入内容" readonly></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <strong>登陆账号</strong>
            </td>
            <td>
              <el-input v-model="value" placeholder="请输入内容" readonly></el-input>
            </td>
            <td>
              <strong>推荐人</strong>
            </td>
            <td>
              <el-input v-model="value" placeholder="请输入内容" readonly></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <strong>祖册时间</strong>
            </td>
            <td>
              <el-input v-model="value" placeholder="请输入内容" readonly></el-input>
            </td>
            <td>
              <strong>注册IP</strong>
            </td>
            <td>
              <el-input v-model="value" placeholder="请输入内容" readonly></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <strong>是否禁用</strong>
            </td>
            <td>
              <el-checkbox v-model="checked" disabled></el-checkbox>
            </td>
            <td>
              <strong>是否监控</strong>
            </td>
            <td>
              <el-checkbox v-model="checked" disabled></el-checkbox>
            </td>
          </tr>
          <tr>
            <td>
              <strong>代理创建</strong>
            </td>
            <td>
              <el-checkbox v-model="checked" disabled></el-checkbox>
            </td>
            <td>
              <strong>是否删除</strong>
            </td>
            <td>
              <el-checkbox v-model="checked" disabled></el-checkbox>
            </td>
          </tr>
          <tr>
            <td>
              <strong>是否代理</strong>
            </td>
            <td>
              <el-checkbox v-model="checked" disabled></el-checkbox>
            </td>
            <td>
              <strong>注册地址</strong>
            </td>
            <td>
              <el-input v-model="value" placeholder="请输入内容" :readonly="readonly" class="nborder"></el-input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { patchMemberCount, getMemberGroup, getMemberInfoDt } from '@/services/member'
export default {
  name: 'member-infor-detail',
  props: ['FormData', 'readonly', 'view'],
  data() {
    return {
      selectOptions: [],
      getParentData: {},
      checked: false,
      value: '',
      ruleNull: ''
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const getId = await patchMemberCount(this.getParentData).then(res => {
            this.$logger.log(res)
          })
          this.closeWindow()
        } else {
          this.$notify.error({
            title: '提交有误',
            message: '提交有误，请检查后再提交！'
          })
          return false
        }
      })
    },
    memberGroup() {
      getMemberGroup().then(res => {
        this.selectOptions = JSON.parse(JSON.stringify(res.results))
      })
    },
    closeWindow() {
      this.$emit('closeWindow', false)
    },
    getmemberInfordata() {
      if (this.FormData instanceof Object) {
        this.getParentData = this.FormData
      } else {
        if (!this.FormData) {
          return
        }
        this.searchParams = {
          username: this.FormData
        }
        getMemberInfoDt(this.searchParams).then(res => {
          if (res.results.length > 0) {
            this.getParentData = res.results[0]
          } else {
            this.$notify.info({
              title: '消息',
              message: '没有数据'
            })
          }
        })
      }
    }
  },
  created() {
    this.memberGroup()
    this.getmemberInfordata()
  },
  watch: {
    FormData(newValue, oldValue) {
      this.getmemberInfordata()
    }
  },
  computed: {
    isPlainView() {
      return this.view == 'plain'
    },
    rules() {
      if (typeof this.FormData == 'string' || this.readonly == true) {
        return {}
      } else {
        return {
          username: [
            {
              required: true,
              message: '请输入查询账号',
              trigger: 'change'
            }
          ],
          group: [
            {
              required: true,
              message: '请选择会员组别',
              trigger: 'change'
            }
          ],
          date_joined: [
            {
              required: true,
              message: '选择日期时间',
              trigger: 'change'
            }
          ],
          type: [
            {
              required: true,
              message: '请至少选择一个活动性质',
              trigger: 'change'
            }
          ],
          real: [
            {
              required: true,
              message: '请输入会员姓名',
              trigger: 'change'
            }
          ],
          real_account: [
            {
              required: true,
              message: '请输入真人账号',
              trigger: 'change'
            }
          ],
          reg_ip: [
            {
              required: true,
              message: '请输入注册IP',
              trigger: 'change'
            }
          ],
          inviter_name: [
            {
              required: true,
              message: '请输入推荐人',
              trigger: 'change'
            }
          ]
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.form {
  display: flex;

  .form-left {
    flex: 1;
  }

  .form-right {
    flex: 1;
    padding-left: 15px;
  }
}

.elformItems {
  text-align: end;
}

table {
  width: 100%;
  min-height: 20px;
  line-height: 20px;
  border-collapse: collapse;

  tr,
  td {
    padding: 10px;
    border: 1px solid #e8e8e8;
  }
}

.panel-primary {
  td:nth-child(odd) {
    width: 80px;
    text-align: center;
  }
  /deep/.el-input__inner {
    border: none;
  }
  strong {
    font-weight: normal;
  }
}
</style>
