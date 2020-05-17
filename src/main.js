import Vue from 'vue';
import App from './App.vue';
import router from './router';

// const search = require('../dist/@yw/search.umd');
import search from '../dist/@yw/search.umd.min';

console.log(search);
Vue.use(search);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
