import Vue from "vue";
import VueRouter from "vue-router";
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
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,

    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/download/:fileName",
      name: "Download",
      component: Download,
      props : true,
    },
    {
    path: "/history",
    name: "History",
    component: History,
    }
  ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;