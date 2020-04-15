<template>
  <div class="about">
    <h1 class="welcome">Welcome to TextCruncher!</h1> 
    <h3 class="function">TextCruncher allows you to</h3>
    <div class="row">
      <div class="column"><img src="../assets/slide2.png"></div>
      <div class="column"><img src="../assets/slide3.png"></div>
      <div class="column"><img src="../assets/slide4.png"></div>
      </div>
    <slideShow align="center"></slideShow>
  </div>
</template>

<style scoped>
.welcome{
  padding-top: 1cm;
  padding-bottom: 1cm;
}

.function{
  padding-top: 1cm;
  padding-bottom: 2cm;  
}

.column {
  float: left;
  width: 33.33%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>


<script>
import SlideShow from "../components/slideShow.vue"
export default {
  components:{
    "slideShow": SlideShow
  }
}
</script>
