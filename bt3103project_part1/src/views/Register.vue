<template>
  <div> 
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
          user => {
            // console.log(user);
            user.email = this.email
            alert(`Account Created for ${user.email}`);
            this.$router.go({ path: this.$router.path });
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