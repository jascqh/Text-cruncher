<template>
    <div>
        <b-navbar toggleable="lg" type="light" >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav >
              <b-navbar-nav class="ml-auto">
                <b-nav-item to="/" >Home</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>
                <b-nav-item to="/login">Login</b-nav-item>
                <b-nav-item to="/register">Register</b-nav-item>
                <b-nav-item to="/history">History</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
        </b-navbar>
      </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'navbar',
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