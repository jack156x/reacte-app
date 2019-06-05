<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="查询账号">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="会员姓名">
        <el-input v-model="form.realname"></el-input>
      </el-form-item>
      <el-form-item label="所属组别">
        <el-select v-model="group_id" placeholder="请选择" style="width:100%">
          <el-option v-for="item in Category" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="rightBtn">
        <el-button type="primary" @click="submitGroup">确认</el-button>
        <el-button type="danger">关闭</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getMemberGroup, changegroup } from '@/services/member'
export default {
  name: 'edit',
  data() {
    return {
      form: {
        region: '',
        username: '',
        realname: ''
      },
      Category: null,
      group_id: ''
    }
  },
  props: ['groupData'],
  methods: {
    getGroup() {
      getMemberGroup().then(res => {
        this.Category = res.results
        this.group_id = res.results[0].id
      })
    },
    submitGroup() {
      let option = {
        user_id: [this.getGrouptype.id],
        group_id: this.group_id,
        username: this.form.username,
        realname: this.form.realname
      }
      changegroup(option)
        .then(res => {
          if (res) {
            this.$notify({
              title: '成功',
              message: res.detail,
              type: 'success'
            })
          }
        })
        .catch(err => {
          this.$logger.log('调整组别出现', err)
          return false
        })
      this.$emit('closeWindow', false)
    }
  },
  computed: {
    getGrouptype() {
      return JSON.parse(JSON.stringify(this.groupData))
    }
  },
  mounted() {
    this.getGroup()
    this.form.username = this.getGrouptype.username
    this.form.realname = this.getGrouptype.realname
  }
}
</script>

<style lang="scss" scoped>
.rightBtn {
  text-align: right;
}
</style>