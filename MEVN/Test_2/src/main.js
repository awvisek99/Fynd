import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 
import 'bootstrap/dist/css/bootstrap.min.css'
 
createApp.config.productionTip = false
 
new createApp({
  router,
  render: h => h(App)
}).$mount('#app')