/*import Vue from 'vue'
import Vuex from 'vuex'
import account from './account'
import product from './products'
/*import axios from 'axios'

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      account,
      product
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })
  return Store
}

let store = new Vuex.Store({
  state: 
  {
    products: []
  },
  mutations: 
  {
    SET_PRODUCTS_TO_STATES: (state, products) =>{
      state.products = products;
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit})
    {
      return axios('http://localhost:3000/products', {
        method: "GET"
      })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATES', products.data);
        return products;
      })
      .catch((error) =>{
        console.log(error)
        return error;
      })
    }
  },
  getters: 
  {
    PRODUCTS(state){
      return state.products;
    }
  }
});

*/