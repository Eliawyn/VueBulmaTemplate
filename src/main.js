import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
