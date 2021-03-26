import Vue from 'vue';

import App from './App.vue';
import 'testquest/dist/index.css';

Vue.config.devtools = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
