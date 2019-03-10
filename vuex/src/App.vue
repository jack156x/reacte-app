<template>
  <div id="app">
    <!-- <router-view/> -->
    <h3>vuex购物车demo</h3>
    <product />
    <cart />
    <info />
  </div>
</template>

<script>
import product from "./components/product";
import cart from "./components/cart";
import info from "./components/info";
export default {
  name: "App",
  components: {
    product,
    cart,
    info
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
