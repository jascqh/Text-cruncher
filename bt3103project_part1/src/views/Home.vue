<template>
<div class='container'>
  <b-container align="center">
      <slideShow align="center"></slideShow>
     <p>Please input at least one query up to 5 at once.</p>
    <b-row align-v = "center">
      <b-form-textarea v-model="payload"
      :placeholder="'Enter your queries here \nEg. Query 1, Query 2, Query 3 ... Up to 5 Queries'"
      :rows="2"
      :max-rows="5"></b-form-textarea>
    </b-row>
      <div class="mt-2" align="center">Please separate your queries with a comma ',' in between</div>
      <button type="button" id="btnFetch" class="btn btn-primary mb-2" @click="validator()">Scrape!
        <i v-if = "loadingButton" class = "spinner-border spinner-border-sm"></i>
      </button>
  </b-container>
</div>
  
</template>

<script>
import SlideShow from "../components/slideShow.vue"
import swal from 'sweetalert';
import axios from 'axios';
//import LoginVue from './Login.vue'
import database from '../firebase.js'

export default {
  data() {
    return {
      fileName:'',
      payload: '',
      loadingButton: false,
      item: {
        Date:"",
        Json:"",
        Name:"",
        Email:""
      }
    }
  },

  methods: {

    storeItem: function() { 
      //save to database
      database.collection('files').doc().set(this.item)
      alert("I am in the DB :D")
    },

    scrape: function() {
      const path = 'http://localhost:5000/scrape';
      const help = {queries: this.payload}
      axios.post(path, help)

      .then((res) => {
          this.msg = res.data.results;
          this.item.Email = this.$session.get('email');
          this.item.Date = new Date();
          this.item.Json = res.data.results;
          this.item.Name = this.payload;
          this.storeItem();
          this.$router.push({path : '/download'});
        })
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


  components:{
    "slideShow": SlideShow
  }
}
</script>
