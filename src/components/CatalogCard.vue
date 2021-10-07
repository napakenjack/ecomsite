<template>
<div>
    <div class="game-1 anim" style="--delay: .5s">
     <div class="game-wrapper">
      <div class="game-img-post">
        <router-link to="/products"><img :src="require('../assets/' + product_data.image)" type="image"></router-link>
      </div>
     </div>
     <div class="game-genre online">{{product_data.category}}</div><button class="add-to-cart" style="z-index: 999;" @click="sendDataToParent">Add to cart</button>
     <div class="content-name">{{product_data.name}}</div>
     <div class="online-info">価格:<span class="seperate game-seperate"></span>{{product_data.price}}</div>
    </div>
</div>
</template>

<script>

export default {
    name: "catalog-card",
    props:{
      product_data:{
        type: Object,
        default(){
          return{}
        }
      }
    },
    data(){

    },
    computed:{

    },
    methods: {
      sendDataToParent(){
        this.$emit('sendArticle', this.product_data.article)
      }
    }
}

</script>


<style>

</style>