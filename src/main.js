import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import vuetify from "./plugins/vuetify.js";
import routes from "./routes/routes.js";

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
