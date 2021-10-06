<template>
<div>
    <div class="game-1 anim" style="--delay: .5s">
     <div class="game-wrapper">
      <div class="game-img-post">
        <router-link to="/products"><img src="post-photo2.png" type="image"></router-link>
      </div>
     </div>
     <div class="game-genre online">{{product_data.category}}</div>
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

    }
}

</script>


<style>

</style>