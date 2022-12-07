import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import vuetify from "./plugins/vuetify.js";
import routes from "./routes/routes.js";

import VueApexCharts from 'vue-apexcharts'
Vue.component('poke-charts', VueApexCharts)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter);

import store from '@/store/index.js'

import VueRouter from "vue-router";

const router = new VueRouter({
  routes,
  mode: "history",
});



new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
