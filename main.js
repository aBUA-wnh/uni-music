import App from './App'

import uView from 'uview-ui'

import api from '@/api'

import MPlayer from 'components/MPlayer.vue'

Vue.use(uView)

Vue.use(api)

Vue.component('MPlayer', MPlayer)


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif