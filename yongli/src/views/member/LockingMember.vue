<template>
  <div style="margin:50px;">
    <div style="width:50%;margin-bottom:15px;">
      解锁
      <i style="font-style:normal;color:red">被锁定</i>的账号，解锁成功后就可以正常登录了
    </div>
    <el-form ref="form" :model="form" label-width="215px" style="width:50%;text-indent:15px;">
      <el-form-item label="查询账号、登陆账号、手机号">
        <el-input v-model="form.account" placeholder="请输入查询账号、登陆账号或手机号"></el-input>
      </el-form-item>
      <el-form-item class="el-lock-container">
        <el-button type="primary" @click="getLocking">解锁账户</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { memberwhether_lock } from '@/services/member'
export default {
  data() {
    return {
      form: {
        account: ''
      }
    }
  },
  methods: {
    getLocking() {
      let params = {}
      if (!this.form.account) {
        this.$notify({
          title: '警告',
          message: '请输入查询账号或登陆或手机号',
          type: 'warning'
        })
        return
      } else {
        params.username = this.form.account
      }
      memberwhether_lock(params).then(res => {
        if (res !== false) {
          this.$notify({
            title: '成功',
            message: res.detail,
            type: 'success'
          })
        }
      })
    },
    lockMember() {}
  }
}
</script>

<style lang="scss" scoped>
.el-lock-container {
  text-align: center;
}
</style>