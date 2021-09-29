import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/ProductPage.vue'
import CheckOut from '../views/CheckOut.vue'
import CartPage from '../views/CartPage.vue'
import AccountOptions from '../views/AccountOptions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product-page',
    name: 'Product',
    component: Product,
  },
  {
    path: '/check-out',
    name: 'Checkout',
    component: CheckOut,
  },
  {
    path: '/cart-page',
    name: 'Cartpage',
    component: CartPage,
  },
  {
    path: '/my-account',
    name: 'Account',
    component: AccountOptions,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
