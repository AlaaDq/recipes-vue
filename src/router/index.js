import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateRecipe from '../views/CreateRecipe.vue'
import EditRecipe from '../views/EditRecipe.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/create-recipe',
    name: 'CreateRecipe',
    component: CreateRecipe,
    meta: { auth: true },

  },
  {
    path: '/edit-recipe/:name',
    name: 'EditRecipe',
    component: EditRecipe
  },
  {
    path: '/login',
    name: 'Login',
    meta: { guest: true },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { guest: true },

    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})





router.beforeEach((to, from, next) =>{
  
  if (to.matched.some(record => record.meta.auth)) {
    if (!store.getters["isAuthenticated"]) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
  else if   (to.matched.some(record => record.meta.guest)) {
    if (store.getters["isAuthenticated"]) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
  
  else {
    next() 
  }



});



export default router
