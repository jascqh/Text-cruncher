import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import Home from "../views/Home.vue";
import About from"../views/About.vue";
import Login from "../views/Login.vue";
import History from "../views/History.vue";
import Register from "../views/Register.vue";
import Download from "../views/Download.vue";


Vue.use(VueRouter);


 const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/about",
      name: "About",
      component: About,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/download/:fileName",
      name: "Download",
      component: Download,
      props : true,
      meta: {
        requiresAuth: true
      }
    },
    {
    path: "/history",
    name: "History",
    component: History,
    meta: {
      requiresAuth: true
    }
    },
  ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})
// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.fullAccess)){
    next();
  }
  else if (to.matched.some(record => !record.meta.requiresAuth)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } 
  else if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } 
  else {
    // Proceed to route
    next();
  }
});

export default router;