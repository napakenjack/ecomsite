<template>
    <div class="games">
    <CatalogCard 
          v-for="product in products"
          :key="product.article"
          :product_data="product"
    />
    </div>
</template>



<script>
import CatalogCard from './CatalogCard.vue'
export default {
components:{
  CatalogCard,
},
props:{

},
data(){
  return{
    products: [
      {
        image: "./assets/post-photo1.png",
        name: "T-shirt 1",
        price: 100,
        article: "T1",
        avaible: true,
      },
            {
        image: "./assets/post-photo2.png",
        name: "T-shirt 2",
        price: 100,
        article: "T2",
        avaible: true,
      },
            {
        image: "./assets/post-photo3.png",
        name: "T-shirt 3",
        price: 100,
        article: "T3",
        avaible: true,
      },
            {
        image: "./assets/post-photo4.png",
        name: "T-shirt 4",
        price: 100,
        article: "T4",
        avaible: true,
      },

    ]
  }
}
}


</script>



<style>

</style>
