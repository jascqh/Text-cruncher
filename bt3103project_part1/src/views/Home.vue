<template>
  <div>
    <b-container>
      <b-row align-v = "start">
        <slideShow></slideShow>
      </b-row>
      <b-row align-v = "center">
        <b-form-input v-model="text" placeholder="Enter Quarries"></b-form-input>
        <div class="mt-2">Value: {{ text }}</div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SlideShow from "../components/slideShow.vue"
  export default {
    data() {
      return {
        text: ''
      }
    },

    components:{
      "slideShow": SlideShow
    }
  }
</script>
