<template>
  <div class="about">
    <h1>Dashboard</h1> 
    
    <div id = "chart">
      <barchart></barchart>
    </div>
    <div id = "chart">
      <doughnut></doughnut>
    </div>

    <div id = "chart2">
      <linechart></linechart>
    </div>
    <div id = "chart2">
      <runtime></runtime>
    </div>
  </div>
</template>

<script>
import barchart from '../barchart.js'
import linechart from '../linechart.js'
import doughnut from '../doughnut.js'
import runtime from '../runtime.js'

export default {
  components:{
    barchart, linechart, doughnut, runtime
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
  width:50%;
  padding:10px 30px;
  margin:130;
  float:left;
}
#chart2{
  height:300px;
  width:50%;
  padding:130px 30px;
  margin:auto;
  float:left;
}
</style>>
