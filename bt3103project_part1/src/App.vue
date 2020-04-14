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
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  
.content-table{
  border-collapse: collapse;
  margin:25px 0;
  font-size: 0.9em;
  min-width: 400px;

}
.content-table thead tr { 
  background-color:darkslategray;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.content-table th,
.content-table td { 
  padding:12px 15px
}

.content-table tbody tr{ 
  border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
}
</style>
