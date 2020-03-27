import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from './firebase.js';
import VueSessionStorage from 'vue-sessionstorage'
import JsonCSV from 'vue-json-csv'
 
Vue.component('downloadCsv', JsonCSV)


/* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;
Vue.config.productionTip = false;
Vue.use(VueSessionStorage)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
