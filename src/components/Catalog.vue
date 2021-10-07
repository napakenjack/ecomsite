<template>
  <div class="games">
      <CatalogCard 
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @sendArticle="showChildArticleInConsole"
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
        'GET_PRODUCTS_FROM_API'
      ]),

      showChildArticleInConsole(data){
        console.log(data)
      }
    },

    mounted(){
      this.GET_PRODUCTS_FROM_API()
    }
}


</script>



<style>

</style>
