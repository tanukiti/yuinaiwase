import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './components/pages/index.vue'
import News from './components/pages/NEWS.vue'
import Prof from './components/pages/PROF.vue'
import Live from './components/pages/LIVE.vue'
import Disc from './components/pages/DISC.vue'
import Movie from './components/pages/MOVIE.vue'
import Goods from './components/pages/GOODS.vue'
import Contact from './components/pages/CONTACT.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/news', component: News },
  { path: '/prof', component: Prof },
  { path: '/live', component: Live },
  { path: '/disc', component: Disc },
  { path: '/movie', component: Movie },
  { path: '/goods', component: Goods },
  { path: '/contact', component: Contact },
]

const router = new VueRouter({
	mode:'history',
	routes 
})

const app = new Vue({
  router
}).$mount('#app')

