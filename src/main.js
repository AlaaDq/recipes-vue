import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import JwtService from "./common/jwt.service";

Vue.config.productionTip = false




const token=JwtService.getToken();
if(token)
JwtService.setHeader();


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')