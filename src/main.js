import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
library.add(faTelegram)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
