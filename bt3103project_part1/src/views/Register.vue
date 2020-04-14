<template>
  <div>
      <div class="col s12 m8 offset-m2">
          <h3>Register</h3>
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
    </div>
</template>


<script>
import firebase from 'firebase';
import database from '../firebase.js'
export default {
  name: 'register',
  data() {
    return {
      item : {
      email: '',
      password: '',
      date:'',
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
            this.item.password = this.password;
            this.item.date = new Date();
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