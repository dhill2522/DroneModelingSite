import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  render: (h: any) => h(App),
}).$mount('#app')
