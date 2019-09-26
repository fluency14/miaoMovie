import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './stores'
import './assets/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
