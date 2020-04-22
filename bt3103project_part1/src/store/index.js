import Vue from "vue";
import Vuex from "vuex";
import fetchSurveys from '../api/index.js'
import fetchSurvey from '../api/index.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: { // asynchronous operations
    loadSurveys(context) {
      return fetchSurveys()
        .then((response) => {
         // context.commit('setSurveys', { surveys: response })
          context.commit('setSurveys', { surveys: response.data })
        })
    },
    loadSurvey(context, { id }) {
      return fetchSurvey(id)
        .then((response) => {
          // context.commit('setSurvey', { survey: response })
          context.commit('setSurvey', { survey: response.data })
        })
    },},
  modules: {}
});

