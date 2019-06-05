<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="真人视讯">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电子游艺">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="皇冠体育">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="彩票游戏">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="港彩游戏">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="棋牌游戏">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电子竞技">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Points',
  props: ['Takedetails'],
  data() {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit() {}
  }
}
</script>

<style lang="scss" scoped>
</style>