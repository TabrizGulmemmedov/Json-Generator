import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VJsoneditor from "v-jsoneditor/src/index";
import '@babel/polyfill'

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

Vue.use(VJsoneditor);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
