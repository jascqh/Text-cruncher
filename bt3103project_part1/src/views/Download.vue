<template>
<div class='container'>
  <b-container align="center">
      <h1 class="mt-5">Thank You for Your Patience!</h1>
      <h3 class="text-muted">Your File is Ready to be Downloaded</h3>
      
      <div class="container-fluid" align="center">
        <a href="/" data-toggle="tooltip" data-placement="left" title="Back to submit more queries!">
            <img src="https://visualpharm.com/assets/576/Back%20Arrow-595b40b65ba036ed117d1ee7.svg" alt="Submit" width="38">
        </a>
            <download-csv
              :data   = convertData(json) class='btn btn-primary btn-xlg'>
              Download Data
              <img src="https://img.icons8.com/plasticine/100/000000/download.png" width="38" height="38">
            </download-csv>        

        <span class="text-muted"> OR </span>
            <!--Triggers Modal-->
            <button type="button" class='btn btn-warning btn-xlg'  v-b-modal.email_popup >
                <img src="https://img.icons8.com/cotton/64/000000/download-mail.png" width="38" height="38">
                    Send to Mail
            </button>
      </div>
  </b-container>

   <b-modal
      id="email_popup"
      ref="modal"
      title="New Message to Recipient"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
        <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
            label="Recipient"
            label-for = "recipient-email"
            description="example@example.com"
            >
            <b-form-input
                id="recipient-email"
                v-model="email"
                required
            ></b-form-input>
            </b-form-group>

            <b-form-group
            label="Message"
            label-for = "message"
            >
            <b-form-input
                id="Message"
                v-model="message"
            ></b-form-input>
            </b-form-group>
        </form>
    </b-modal>
</div>
  
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';


export default {

  data() {
    return {
      email: '',
      message:'',
      json:'',
    }
  },
  methods: {
 
    convertData: function(json){
      var datas = []
      // console.log(Object.keys(json[Object.keys(json)[0]]).length)
      try {
          var count = Object.keys(json[Object.keys(json)[0]]).length
          for (let i = 0; i < count; i++) { 
            var data = {}
            for (var key in json) { 
              data[key] = json[key][i]
            }
            datas.push(data)
          }
          // console.log(datas)
          return datas
               
      } catch (error) {
           return datas // return the data before any null pointers
      }
  }, 

    retriveFile: function() {
      const path = 'https://btproject3103.herokuapp.com/return-file'
      axios.get(path)
      .then((res) =>{
        this.json = res.data
      })
    },

    resetModal() {
      this.email = ''
      this.message = ''
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide('email_popup')
      })
      
      const payload = {EMAIL: this.email,
                      MESSAGE: this.message}
      if(this.email == '') {
        return
      }
      else {
        const path = 'https://btproject3103.herokuapp.com/send-mail';
        axios.post(path, payload)
        .then(() =>{
            swal({
            title: "Email Sent",
            text: "Please check your inbox",
            icon: "success",
            button: "I understand"
          });
        })
        }
    },

  },
  //Lifecycle hook
  created(){
      this.retriveFile()
    }

}
</script>