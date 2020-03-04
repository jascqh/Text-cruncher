<template>
<div>
  <b-container align="center">
      <slideShow align="center"></slideShow>
      <p>Please input at least one query up to 5 at once.</p>
    <b-row align-v = "center">
      <b-form-textarea v-model="text"
      :placeholder="'Enter your queries here \nEg. Quary 1, Quary 2, Quary 3 ... Up to 5 Quaries'"
      :rows="2"
      :max-rows="5"></b-form-textarea>
    </b-row>
      <div class="mt-2" align="center">Please separate your queries with a comma ',' in between</div>
      <div class="mt-2">Value: {{ text }}</div>
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
