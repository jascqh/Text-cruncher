<template>
  <div>
    <div class="col s12 m8 offset-m2">
      <h1 class="function">Stuff you can do with an Account!</h1>
      <div class="row">
        <div class="column"><img src="../assets/slide2.png"></div>
        <div class="column"><img src="../assets/slide3.png"></div>
        <div class="column"><img src="../assets/slide4.png"></div>
      </div>
    </div>
     <b-card title="Register"
  style="max-width: 30rem;"
  class="mb2">
    <span style="display:inline-block; width: YOURWIDTH;"></span>
    <b-card-text>
      <form action="index.html">
        <div class="input">
          <input class= "form-box" type="email" v-model="email" placeholder="Email Address">
        </div>
        <div>
          <input class= "form-box" type="password" v-model="password" placeholder="Password" >
        </div>

        <div>
         <a class="btn-signin" v-on:click="register">Sign Up</a>
        </div>
      </form>
    </b-card-text>
  </b-card>
  <p> Click <router-link to= "/">here </router-link> to go back to login page.</p>
</div>
</template>

<style scoped>
.card{
  margin: 0px auto;
  float:none;
  margin-bottom:10px ;
}
::placeholder{
  color:darkgrey;
  opacity: 1;
  font-size: 12px;
}
.form-box{
  width:100%;
  height: 40px;
  border: none;
  border-radius:20px;
  margin-bottom: 20px;
  background: #eeeeee;
}
.btn-signin {
  float: left;;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: #ffffff;
  padding-top: 8px;
  width: 40%;
  height: 35px;
    border: none;
    border-radius: 18px;
  margin-top: 20px;
  background-color: #4682B4;
}

.function{
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 0cm;
  padding-bottom: 1cm;  
}
/* Clear floats after the columns */
.row {
  margin-left: auto;
  margin-right: auto;
  float:none;
  padding-bottom: 2cm;
}

.column {
  float: left;
  width: 33.33%;
}
</style>

<script>
import firebase from 'firebase';
import database from '../firebase.js'
export default {
  name: 'register',
  data() {
    return {
      item : {
      email: '',
      //password: '',
      datecreated:'',
      }
    };
  },
  methods: {
    storeItem: function() { 
      //save to database
      database.collection('users').doc().set(this.item)
      alert("I am in the DB :D")
    },
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
         data => {
            var user = data.user;
            this.item.email = this.email;
            //this.item.password = this.password;
            this.item.datecreated = new Date();
            this.storeItem();
            alert(`Account Created for ${user.email}`);
            this.$router.replace({ name: "Home" });; 
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>