<template>
  <div id="app">
    <div id="nav">
      <top-header></top-header>
    </div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>
<script>
import TopHeader from "@/components/header.vue";
export default {
  components: {
    'top-header':TopHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4f4f59;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #0000ff;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*{
  margin:0;
  padding: 0;
}
</style>