<template>
  <div class="main-container">
   <div class="main-header anim" style="--delay: 0s">メイン</div>
   <div class="main-blogs">
    <div class="main-blog anim" style="--delay: .1s">
     <div class="main-blog__title">ゲーム名</div>
     <div class="main-blog__author">
      <div class="user-img__wrapper">
      </div>
      <div class="game-detail">
        <!--作成者の名前-->
       <div class="ad-banner">太郎</div>
       <!--投稿の情報￥-->
       <div class="ad-info">10kダウンロード数 <span class="seperate"></span>さん</div>
      </div>
     </div>
    </div>
    <div class="main-blog anim" style="--delay: .2s">
     <div class="main-blog__title">商品の名前</div>
     <div class="main-blog__author tips">
      <div class="user-img__wrapper">
      </div>
      <div class="game-detail">
       <div class="ad-banner">靴下</div>
       <div class="ad-info">購入数 <span></span>時間</div>
      </div>
     </div>
    </div>
   </div>
   <div class="small-header anim" style="--delay: .3s">人気なゲーム</div>
   <div class="games">     
    <div class="game-1 anim" style="--delay: .4s">
     <div class="game-wrapper">
      <div class="game-img-post">
        <router-link :to="{name: 'Product'}"><img src="../assets/post-photo1.png" type="image"></router-link>
      </div>
     </div>
     <div class="game-genre">ゲーム</div>
     <div class="content-name">商品の名前</div>
     <div class="online-info">購入数<span class="seperate game-seperate"></span>123</div>
    </div>
    <div class="game-1 anim" style="--delay: .5s">
     <div class="game-wrapper">
      <div class="game-img-post">
        <router-link :to="{name: 'Product'}"><img src="../assets/post-photo2.png" type="image"></router-link>
      </div>
     </div>
     <div class="game-genre offline">靴</div>
     <div class="content-name">商品の名前</div>
     <div class="online-info">購入数<span class="seperate game-seperate"></span>123</div>
    </div>
    <div class="game-1 anim" style="--delay: .6s">
     <div class="game-wrapper">
      <div class="game-img-post">
        <router-link :to="{name: 'Product'}"><img src="../assets/post-photo3.png" type="image"></router-link>
      </div>
     </div>
     <div class="game-genre offline">ジャンパー</div>
     <div class="content-name">商品の名前</div>
     <div class="online-info">購入数<span class="seperate game-seperate"></span>123</div>
    </div>
    <div class="game-1 anim" style="--delay: .7s">
     <div class="game-wrapper">
      <div class="game-img-post">
        <router-link :to="{name: 'Product'}"><img src="../assets/post-photo4.png" type="image"></router-link>
      </div>    
     </div>
     <div class="game-genre">グラス</div>
     <div class="content-name">商品の名前</div>
     <div class="online-info">購入数<span class="seperate game-seperate"></span>123</div>
    </div>
    <div class="game-1 anim" style="--delay: .7s">
      <div class="game-wrapper">
        <div class="game-img-post">
          <router-link :to="{name: 'Product'}"><img src="../assets/post-photo5.png" type="image"></router-link>
        </div>
      </div>
      <div class="game-genre">帽子</div>
      <div class="content-name">商品の名前</div>
      <div class="online-info">購入数<span class="seperate game-seperate"></span>123</div>
     </div>
     <div class="game-1 anim" style="--delay: .7s">
      <div class="game-wrapper">
        <div class="game-img-post">
          <img src="../assets/post-photo6.png" type="image">
        </div>   
      </div>
      <div class="game-genre">スマホ</div>
      <div class="content-name">商品の名前</div>
      <div class="online-info">購入数<span class="seperate game-seperate"></span>123</div>
     </div>
     <div class="game-1 anim" style="--delay: .7s">
      <div class="game-wrapper">
        <div class="game-img-post">
          <img src="../assets/post-photo7.png" type="image">
        </div>
      </div>
      <div class="game-genre">靴下</div>
      <div class="content-name">商品の名前</div>
      <div class="online-info">購入数<span class="seperate game-seperate"></span>123</div>
     </div>
     <div class="game-1 anim" style="--delay: .7s">
      <div class="game-wrapper">
        <div class="game-img-post">
          <img src="../assets/post-photo8.png" type="image">
        </div>  
      </div>
      <div class="game-genre">靴下</div>
      <div class="content-name">商品の名前</div>
      <div class="online-info">購入数<span class="seperate game-seperate"></span>123</div>
     </div>
   </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
