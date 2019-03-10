<template>
  <div class="hello">
    <h1>{{count}}</h1>用户名：
    <!-- <input type="text" v-model="users" v-on:blur="usersChange(users)">
    密码：
    <input type="text" v-model="password" v-on:blur="passwordChange(password)">
    <button type="button" v-on:click="submit" class="btn btn-default">查看</button>-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "设置用户名和密码"
    };
  },
  computed: mapGetters(["count"]),
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
