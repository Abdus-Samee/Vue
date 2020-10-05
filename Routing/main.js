import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/user', component: User }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
