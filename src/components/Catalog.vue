<template>
  <div class="games">
      <CatalogCard 
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
    />
  </div>
</template>



<script>
import CatalogCard from './CatalogCard.vue'
import {mapActions, mapGetters} from 'vuex'


export default {
components:{
    CatalogCard,
    },
      props:{

      },
      data(){
        return{}
      },
      computed:{
        ...mapGetters([
            'PRODUCTS'
          ])
    },

    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),

      addToCart (data){
        this.ADD_TO_CART(data)
      }
    },

    mounted(){
      this.GET_PRODUCTS_FROM_API()
      .then((response) =>{
        if(response.data){
          console.log("Data kimashita!")
        }
      })
    }
}


</script>



<style>

</style>
