<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="查询账号">
        <el-input v-model="getParentData" readonly></el-input>
      </el-form-item>
      <el-form-item label="会员姓名">
        <el-input v-model="getparentRealname" readonly></el-input>
      </el-form-item>
      <el-form-item label="登陆密码">
        <el-input type="password" :rows="2" placeholder="请直接输入新登陆密码，留空则不修改" auto-complete="off" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="提款密码">
        <el-input type="password" :rows="2" placeholder="请直接输入新登陆密码，留空则不修改" auto-complete="off" v-model="form.password_withdrawal"></el-input>
      </el-form-item>
      <el-form-item class="rightBtn">
        <el-button type="primary" @click="repassword">确认</el-button>
        <el-button type="danger" @click="close">关闭</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { resetPass } from '@/services/member'
export default {
  name: 'editMemberPassword',
  props: ['resetFrom'],
  data() {
    return {
      form: {
        password: '',
        password_withdrawal: ''
      }
    }
  },
  computed: {
    getParentData() {
      return this.resetFrom.username
    },
    getparentRealname() {
      return this.resetFrom.realname
    },
    getUserId() {
      return this.resetFrom.id
    }
  },
  methods: {
    close() {
      this.$emit('closeParentWindow', false)
    },
    repassword() {
      let params = {
        user_id: this.getUserId,
        password: this.form.password,
        password_withdrawal: this.form.password_withdrawal
      }
      const _this = this
      resetPass(params).then(res => {
        if (res) {
          this.$notify({
            title: '成功',
            message: res.detail,
            type: 'success'
          })
          _this.close()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.rightBtn {
  text-align: right;
}
</style>