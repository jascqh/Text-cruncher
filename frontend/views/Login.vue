<template>
  <div>
      <div class="col s12 m8 offset-m2">
          <h3>Login</h3>
          <form action="index.html">
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input type="email" id="email" v-model="email">
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input type="password" id="password" v-model="password">
            </div>
            <button v-on:click="login" class="btn btn-large btn-extended grey lighten-4 black-text">Login</button>
            <p> You don't have an account? You can create one by clicking <router-link to= "/register">here.</router-link> </p>
          </form>
        </div>
      </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          data => {
            var user = data.user;
            alert(`You are logged in as ${user.email}`);
            this.$session.set('email', user.email);
            this.$router.push({ path: '/' });
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
