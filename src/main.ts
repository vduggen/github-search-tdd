import Vue from 'vue';

import App from './app/app.vue';
import router from './app/app-routes';
import store from './app/app-state';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
