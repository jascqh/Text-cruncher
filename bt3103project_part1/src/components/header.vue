<template>
    <div>
        <b-navbar toggleable="lg" type="dark bg-dark static-top" variant="info" >
            <b-navbar-brand>
                <img src="..\assets\TextCruncher.png" height="30" width="30">
            </b-navbar-brand>
            <b-navbar-brand a>TextCruncher</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav >
            <b-navbar-nav class="ml-auto">
               <a class="nav-link disabled" href="#">{{this.$session.get('email')}}</a> 
               <!-- cannot get this to appear :c because navbar not being refreshed -->
                <b-nav-item to="/" >Home</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>
                <b-nav-item to="/login">Login</b-nav-item>
                <b-nav-item to="/register">Register</b-nav-item>
                <b-nav-item to="/history">History</b-nav-item>
                <b-nav-item to="/download">Download</b-nav-item>
                <li><button v-on:click="logout" class="btn btn-outline-light btn-sm">Logout</button></li>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
      </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'header',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
      console.log(this.currentUser); 
    }
  },
  methods: {
    logout: function() {
      this.$session.clear("email");
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#nav a.router-link-exact-active {
    color: #4682B4;
}
#nav a{
    font-weight:100;
    color:gray;
}

.navbar-default {
  background: rgba(0,0,0,0.5);
  font-size: 100px;
}
.input{
   text-align:center;
}
</style>