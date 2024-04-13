import { createApp } from 'vue'
import './style.css'
 
  
new Vue({  
  router,  
  render: h => h(App)  
}).$mount('#app')

createApp(App).mount('#app')
