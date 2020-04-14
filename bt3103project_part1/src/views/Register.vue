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
    <h3 class = "sign">Sign Up Here!</h3>
    <form action="index.html">
      <div class="input-field">
        <i class="material-icons prefix">email</i>
        <input type="email" id="email" v-model="email">
      </div>
      <div class="input-field">
        <i class="material-icons prefix">lock</i>
        <input type="password" id="password" v-model="password">
      </div>
      <button v-on:click="register" class="btn btn-large btn-extended grey lighten-4 black-text">Register</button>
    </form>

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
  padding-left: 15px;
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

.column {
  width: 33.33%;
}

.sign{
  padding-top: 2cm;
  font-family: Impact, Charcoal, sans-serif;
}
</style>

<script>
import firebase from 'firebase';
export default {
  name: 'register',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
         data => {
            var user = data.user;
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