import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Inicio from '../views/Inicio.vue'
import NotFound from '../views/NotFound.vue'
import Firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      login:true
    },
    children:[
      {
        path: 'inicio',
        name: 'inicio',
        component: Inicio
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser
  let authRequired = to.matched.some((route) => route.meta.login)
  if (!user && authRequired) {
    next('login')
  } else if (user && !authRequired) {
    from.name == 'Home' ? false : next('Home')
  } else {
    next()
  }
    
  
})

export default router
