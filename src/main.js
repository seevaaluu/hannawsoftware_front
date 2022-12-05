import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import vuetify from "./plugins/vuetify.js";
import routes from "./routes/routes.js";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter);

import VueRouter from "vue-router";

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
