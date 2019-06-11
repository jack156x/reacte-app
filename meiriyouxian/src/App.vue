<template>
  <div id="app">
    		<transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive" />
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive" />
		</transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./common/common";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.5s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
