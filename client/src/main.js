import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Vue.use(Toasted, {
  iconPack : "fontawesome"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
