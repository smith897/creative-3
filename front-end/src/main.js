import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mockQueue from './mockQueue.js'
import mockFAQ from './mockFAQ.js'

let data = {
  queue: mockQueue,
  faq: mockFAQ,
  inQueue: false, //Global cus I'm guessing when this gets updated this'll be the easiest place to update it
  myID: 'ROKUSID'
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
