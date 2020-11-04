import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mockQueue from './mockQueue.js'

let data = {
  queue: mockQueue
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
