import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

// import '@/assets/bulma.css'

new Vue({
  render: (h: any) => h(App),
}).$mount('#app')
