<template>
    <div>
        <b-navbar toggleable="lg" type="dark bg-dark static-top" variant="info">
            <b-navbar-brand>
                <img src="../assets/TextCruncherLogo.jpg" height ="30" width ="30">
            </b-navbar-brand>
            <b-navbar-brand a>TextCruncher</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav >
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/" >Home</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>
                <b-nav-item to="/login">Login</b-nav-item>
                <b-nav-item to="/register">Register</b-nav-item>
                <b-nav-item to="/history">History</b-nav-item>
                <li><button v-on:click="logout" class="btn btn-large btn-extended grey lighten-4 black-text">Logout</button></li>
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
    color: white;
}
#nav a{
    font-weight: bold;
    color:gray;

}

</style>