//Vue related imports
import { createApp } from 'vue'
import Vuex from 'vuex';
import * as VueRouter from 'vue-router'

//App specific imports 
import './assets/css/main.css';
import { App, app_routes, products_Store } from './router.js'

//App start point
createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: app_routes
}))
.use(Vuex.createStore(products_Store("")))
.mount('#app')
