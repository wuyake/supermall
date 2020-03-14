import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false
Vue.use(toast)
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  toast,
  render: h => h(App),
}).$mount('#app')
