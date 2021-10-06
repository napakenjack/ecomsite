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
        name: "T-Shirt",
        category: "Clothes",
        price: 100,
        article: "T1",
        avaible: true,
      },
            {
        image: "./assets/post-photo2.png",
        name: "NoteBook",
        category: "Electronic",
        price: 100,
        article: "T2",
        avaible: true,
      },
            {
        image: "./assets/post-photo3.png",
        name: "Cream",
        category: "Cosmetic",
        price: 100,
        article: "T3",
        avaible: true,
      },
            {
        image: "./assets/post-photo4.png",
        name: "Bread",
        category: "Food",
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
