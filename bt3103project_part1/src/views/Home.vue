<template>
<div class='container'>
  <b-container align="center">
    <img src="..\assets\TextCruncher.png" style="width:300px;height:300px;">
    <b-row align-v = "center">
      <b-form-textarea class="form-control" style="overflow:auto" v-model="payload"
      :placeholder="'TextCruncher allows you to enter up to 5 queries here! Separate each of them with a comma. '"
      :rows="1"
      :max-rows="5">
      </b-form-textarea>
      </b-row>

      <button type="button" id="btnFetch" class="btn" @click="validator()">&nbsp;Scrape!&nbsp;
        <i v-if = "loadingButton" class = "spinner-border spinner-border-sm"></i>
      </button>
{{msg}}
    
  </b-container>
</div>

</template>

<style scoped>

::placeholder{
  color:lightgray;
  font-size: 14px;
  align-content: center;
}

img {
  border-radius: 50%;
  margin-bottom: 1cm;
  border: 0;
}

#btnFetch{
  background-color:#3F729B;
  color: #ffffff;
  border-radius: 20px;
  margin-top: 1cm;
}
textarea{
   text-align:center;
   border-radius: 18px;
   line-height:55px;
   max-height: 70px;
   box-shadow: 2px 2px 3px #999;
}

</style>

<script>
import swal from 'sweetalert';
import axios from 'axios';
export default {
  data() {
    return {
      payload: '',
      loadingButton: false,
      msg:''
    }
  },
  methods: {
    scrape: function() {
      const path = 'http://localhost:5000/scrape';
      const help = {queries: this.payload}
      axios.post(path, help)
      .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          this.msg = 'fail'
          console.error(error);
        });
    },
    load: function() {
      this.loadingButton = !this.loadingButton;
      this.scrape(); //Submits form
    },
    validator: function() {
      var queries = this.payload;
      var commas_query = queries.match(/,/g);
      var commas = 0
      if ( commas_query != null ) {
          commas = commas_query.length
      }
      if (queries == "") {
          swal({
            title: "Input is Empty!",
            text: "Please check the missing field!!",
            icon: "warning",
            button: "Alright"
          });
      }
      else if (commas > 4) {
            swal({
                title: "Input has too many queries",
                text: "Sorry but we are unable to process too many queries at once",
                icon: "info",
                button: "Aww Okay..."
              });
      }
      else {
          this.load();
          swal({
                title: "Processing Queries",
                text: "As this process involves multiple processes, it will take a few minutes. Therefore, we seek your patience and understanding",
                icon: "success",
                button: "I understand"
              });
      }
    }
  },
}
</script>