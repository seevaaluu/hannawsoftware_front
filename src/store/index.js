import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import { getApiHost } from '@/lib/utilities';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    user: null,
    auth: false
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.auth = Boolean(user);
    }
  },
  actions: {
    async login({ dispatch }, credentials) {
      await axios.get(`${getApiHost()}/sanctum/csrf-cookie`)
      await axios.post(`${getApiHost()}/api/login`, {
        email: credentials.email,
        password: credentials.password
      })
      return dispatch("getUser");
    },
    async logout({ dispatch }) {
      await axios.post(`${getApiHost()}/api/logut`)
      return dispatch("getUser");
    },
    getUser({ commit }) {
      axios.get(`${getApiHost()}/api/user`)
      .then(response => commit('SET_USER', response.data))
      .catch(() => commit('SET_USER', null))
    }
  },
  modules: {}
})
