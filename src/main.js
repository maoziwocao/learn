import Vue from 'vue';
import App from './App.vue';
import router from './router';

import search from '../dist/@yw/search.umd.min';

Vue.use(search);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
