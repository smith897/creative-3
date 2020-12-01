import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mockFAQ from './mockFAQ.js'

export const EventBus = new Vue();

let data = {
  queue: null,
  faq: mockFAQ,
  inQueue: false, //Global cus I'm guessing when this gets updated this'll be the easiest place to update it
  myID: 'MYID', //TODO set to student id or TA id (Not in this project)
  myName: 'Roku' //TODO set to student's name (Not in this project)
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
