import Vue from 'vue'
import App from './App.vue'
import TailwindVue from '@tailwindvue/tailwindvue';
import router from './router'

Vue.config.productionTip = false

Vue.use(TailwindVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
