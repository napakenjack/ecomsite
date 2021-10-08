import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/ProductPage.vue'
import CheckOut from '../views/CheckOut.vue'
import Cart from '../views/CartPage.vue'
import AccountDetails from '../views/account_options/accountdetails.vue'
import AccountOptions from '../views/AccountOptions.vue'
import PaymentMethod from '../views/account_options/paymentmethod.vue'
import DashBoard from '../components/account_options/dashBoard.vue'
import Orders from '../components/account_options/orders.vue'
import Adress from '../components/account_options/adress.vue'
import ProductInfo from '../components/comments/product-info.vue'
import ProductReview from '../components/comments/product-review.vue'
import ProductSpec from '../components/comments/product-specification.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    id: 'Home',
    component: Home
  },
  {
    path: '/product-page',
    name: 'Product',
    component: Product,
    children: [
      {
        path: '/product-page/product-info',
        name: 'ProductInfo',
        component: ProductInfo,
      },
      {
        path: '/product-page/review',
        name: 'Review',
        component: ProductReview,
      },
      {
        path: '/product-page/specifications',
        name: 'Specifications',
        component: ProductSpec,
      },
    ]
  },
  {
    path: '/check-out',
    name: 'CheckOut',
    component: CheckOut,
  },
  {
    path: '/cart-page',
    name: 'CartPage',
    component: Cart,
  },
  {
    path: '/my-account',
    name: 'Account',
    component: AccountOptions,
    children: [
      {
        path: '/my-account/account-details',
        name: 'AccountDetails',
        component: AccountDetails,
      },  
      {
        path: '/my-account/adress',
        name: 'Adress',
        component: Adress,
      },  
      {
        path: '/my-account/orders',
        name: 'Orders',
        component: Orders,
      },  
      {
        path: '/my-account/dashboard',
        name: 'DashBoard',
        component: DashBoard,
      },  
      {
        path: '/my-account/payment-method',
        name: 'PaymentMethod',
        component: PaymentMethod,
      },  
    ]
  },  


  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/*
router.beforeEach((to, from, next) => {
  next()
})
*/

export default router
