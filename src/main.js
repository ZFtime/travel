import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import router from './router'
import fastClick from "fastclick"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "./assets/styles/reset.css"
import "./assets/styles/border.css"
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
