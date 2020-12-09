import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index.js'

import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

import StatusComponents from './Status'

Vue.component('AppStatus', StatusComponents)

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({mode: 'history', routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
