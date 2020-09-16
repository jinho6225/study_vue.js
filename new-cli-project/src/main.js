import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

createApp(App).use(store).use(router).mount('#app')

// I don't use it by default.
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");