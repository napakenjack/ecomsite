<template>
  <div class="main-container">
   <div class="main-header anim" style="--delay: 0s">メイン</div>
   <div class="main-blogs">
    <div class="main-blog anim" style="--delay: .1s">
     <div class="main-blog__title">CONVERSE</div>
     <div class="main-blog__author">
      <div class="user-img__wrapper">
      </div>
      <div class="game-detail">
       <div class="ad-info">広告</div>
      </div>
     </div>
    </div>
    <div class="main-blog anim" style="--delay: .2s">
     <div class="main-blog__title">商品の名前</div>
     <div class="main-blog__author tips">
      <div class="user-img__wrapper">
      </div>
      <div class="game-detail-2">
       <div class="ad-banner">広告</div>
       <div class="ad-info">購入数 <span></span>時間</div>
      </div>
     </div>
    </div>
   </div>
   <div class="small-header anim" style="--delay: .3s">人気なゲーム</div>
 

<Catalog />

  </div>
</template>


<script>
import Catalog from '../components/Catalog.vue'

export default {
components:{
  Catalog,
}
}
</script>
