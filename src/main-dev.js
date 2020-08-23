import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/styles/global.scss'
import './assets/styles/icon.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import urlDecode from 'urldecode'
import urlEncode from 'urlencode'
import './assets/styles/swiper.min.css'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios
Vue.prototype.urlDecode = urlDecode
Vue.prototype.urlEncode = urlEncode

Vue.config.productionTip = false

Vue.directive('focus', {
    update: function(el) {
        el.focus()
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')