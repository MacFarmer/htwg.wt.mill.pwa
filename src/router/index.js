import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import "@/plugins/vuetify.js";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rules',
    name: 'Rules',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rules.vue')
  },
  {
    path: '/history',
    name: 'History',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/History.vue')
  },
  {
    path: '/game',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue')
  },

    {
      path: '/easteregg',
      name: 'Easteregg',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Easteregg.vue')
    },

    {
      // This is a hack to use :to tag for absolute paths.
      path: "/http*",
      beforeEnter: to => {
        window.open(to.fullPath.substring(1), '_blank');}
    },
];

const router = new VueRouter({
  routes
})

export default router
