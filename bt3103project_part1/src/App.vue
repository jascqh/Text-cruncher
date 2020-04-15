<template>
  <div id="app">
    <div id="nav">
      <top-header></top-header>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
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
