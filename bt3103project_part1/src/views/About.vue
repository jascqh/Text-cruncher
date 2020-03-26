<template>
  <div class="about">
    <h1>Dashboard</h1> 
  
    <div id = "chart">
      <barchart></barchart>
    </div>
    <div id = "chart">
      <linechart></linechart>
    </div>
    <div id = "chart">
      <doughnut></doughnut>
    </div>
  </div>
</template>

<script>
import barchart from '../barchart.js'
import linechart from '../linechart.js'
import doughnut from '../doughnut.js'

export default {
  components:{
    barchart, linechart, doughnut
  }
}
</script>>

<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:300px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
</style>>
