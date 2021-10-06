<template>
<div>
    <div class="game-1 anim" style="--delay: .5s">
     <div class="game-wrapper">
      <div class="game-img-post">
        <router-link to="/products"><img src="post-photo2.png" type="image"></router-link>
      </div>
     </div>
     <div class="game-genre offline">靴</div>
     <div class="content-name">Name</div>
     <div class="online-info">購入数<span class="seperate game-seperate">価格:</span></div>
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