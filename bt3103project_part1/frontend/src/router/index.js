import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import About from"../views/About.vue";

Vue.use(VueRouter);

const routerOptions  = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
]

const routes = routerOptions.map(route => {
  return {
      ...route,
      componenet: () => import ('@/components/${route.component}.vue')
  }
})

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
