<template>

<div class="wrapper">
    <div class="product-detail">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-8">
                    <div class="product-detail-top">
                        <div class="row align-items-center">
                            <div class="col-md-5">
                                <div class="product-image anim" style="--delay: .2s">
                                    <img src="../assets/post-photo1.png" alt="Product Image">
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="product-content anim">
                                    <div class="title anim" style="--delay: .3s"><h2>商品の名前</h2></div>
                                    <div class="price anim" style="--delay: .4s">
                                        <h4>価格:</h4>
                                        <p>価格<span></span></p>
                                    </div>
                                    <div class="quantity anim" style="--delay: .5s">
                                        <h4>数：</h4>
                                        <div class="qty">
                                            <button class="btn-minus"><i class="fa fa-minus"></i></button>
                                            <input type="text" value="1">
                                            <button class="btn-plus"><i class="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                    <div class="p-size anim" style="--delay: .6s">
                                        <h4>設定:</h4>
                                        <div class="btn-group btn-group-sm">
                                            <button type="button" class="btn">設定</button>
                                            <button type="button" class="btn">設定</button>
                                            <button type="button" class="btn">設定</button>
                                            <button type="button" class="btn">設定</button>
                                        </div> 
                                    </div>
                                    <div class="p-color anim" style="--delay: .6s">
                                        <h4>設定:</h4>
                                        <div class="btn-group btn-group-sm">
                                            <button type="button" class="btn">設定</button>
                                            <button type="button" class="btn">設定</button>
                                            <button type="button" class="btn">設定</button>
                                        </div> 
                                    </div>
                                    <div class="action anim" style="--delay: .6s">
                                        <a class="btn"><i class="fa fa-shopping-cart"></i>カードに追加</a>
                                        <a class="btn"><i class="fa fa-shopping-bag"></i>今すぐ購入</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row product-detail-bottom anim" style="--delay: .6s">
                        <div class="col-lg-12">
                            <ul class="nav nav-pills nav-justified">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="pill" href="#description">説明</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" href="#specification">詳細</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" href="#reviews">レビュー</a>
                                </li>
                            </ul>
    
                            <div class="tab-content anim" style="--delay: .6s">
                                <div id="description" class="product-info tab-pane active">
                                    <h4>商品について</h4>
                                    <p>
                                        こちらのテキストテストの説明です。
                                    </p>
                                    
                                </div>
                                <div id="specification" class="product-info tab-pane fade">
                                    <h4>商品の詳細</h4>
                                    <ul>
                                        <li>こちらのテキストテストの説明です。</li>
                                        <li>こちらのテキストテストの説明です。</li>
                                        <li>こちらのテキストテストの説明です。</li>
                                        <li>こちらのテキストテストの説明です。</li>
                                        <li>こちらのテキストテストの説明です。</li>
                                    </ul>
                                </div>
                                <div id="reviews" class="product-info tab-pane fade">
                                    <div class="reviews-submitted">
                                        <div class="reviewer">名前 - <span>日</span></div>
                                        <div class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <p>
                                          テキストテキストテキストテキストテキストテキストテキスト
                                        </p>
                                    </div>
                                    <div class="reviews-submit">
                                        <h4>あなたのレビュー</h4>
                                        <div class="rating">
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <div class="row form">
                                            <div class="col-sm-6">
                                                <input type="text" placeholder="Name">
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="email" placeholder="Email">
                                            </div>
                                            <div class="col-sm-12">
                                                <textarea placeholder="Review"></textarea>
                                            </div>
                                            <div class="col-sm-12">
                                                <button>提供する</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="product" style="padding: 20px;">
                        <div class="section-header">
                            <h1>他の商品</h1>
                        </div>
    
                        <div class="row align-items-center row-gap">
                            <div class="col-lg-3">
                              <div class="game-1 anim" style="--delay: .5s">
                                <div class="game-wrapper">
                                 <div class="game-img-post">
                                   <img src="../assets/post-photo1.png" type="image">
                                 </div>
                                </div>
                                <div class="game-genre offline">靴</div>
                                <div class="content-name">商品の名前</div>
                                <div class="online-info">購入数 123</div>
                               </div>
                            </div>
                            <div class="col-lg-3">
                              <div class="game-1 anim" style="--delay: .5s">
                                <div class="game-wrapper">
                                 <div class="game-img-post">
                                   <img src="../assets/post-photo2.png" type="image">
                                 </div>
                                </div>
                                <div class="game-genre offline">靴</div>
                                <div class="content-name">商品の名前</div>
                                <div class="online-info">購入数 123</div>
                               </div>
                            </div>
                            <div class="col-lg-3">
                              <div class="game-1 anim" style="--delay: .5s">
                                <div class="game-wrapper">
                                 <div class="game-img-post">
                                   <img src="../assets/post-photo3.png" type="image">
                                 </div>
                                </div>
                                <div class="game-genre offline">靴</div>
                                <div class="content-name">商品の名前</div>
                                <div class="online-info">購入数 123</div>
                               </div>
                            </div>
                            <div class="col-lg-3">
                              <div class="game-1 anim" style="--delay: .5s">
                                <div class="game-wrapper">
                                 <div class="game-img-post">
                                   <img src="../assets/post-photo4.png" type="image">
                                 </div>
                                </div>
                                <div class="game-genre offline">靴</div>
                                <div class="content-name">商品の名前</div>
                                <div class="online-info">購入数 123</div>
                               </div>
                            </div>
    
                        </div>
                    </div>
                </div>
                
                <!-- サイドバー開始 -->
                <div class="col-lg-4 product-card-sidebar anim">
                    <div class="sidebar-widget category">
                        <h2 class="title">カテゴリー</h2>
                        <nav class="navbar bg-light">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-female"></i>ファッション</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-child"></i>子供の服</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-tshirt"></i>男女のファッション服</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-mobile-alt"></i>携帯アクセサリー</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><i class="fa fa-microchip"></i>電気商品</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div class="sidebar-widget widget-slider">
                        <div class="sidebar-slider normal-slider">
                          <div class="game-1 anim" style="--delay: .5s">
                            <div class="game-wrapper">
                             <div class="game-img-post">
                               <img src="../assets/post-photo5.png" type="image">
                             </div>
                            </div>
                            <div class="game-genre offline">靴</div>
                            <div class="content-name">商品の名前</div>
                            <div class="online-info">購入数<span class="seperate game-seperate"></span>123</div>
                           </div>
                        </div>
                    </div>
                    
                    <div class="sidebar-widget brands">
                        <h2 class="title">有名なブランド</h2>
                        <ul>
                            <li><a>ナイキ </a><span>(45)</span></li>
                            <li><a>アディダス </a><span>(34)</span></li>
                            <li><a>H&M </a><span>(67)</span></li>
                            <li><a>Gucci</a><span>(74)</span></li>
                            <li><a>LouisVuitton </a><span>(89)</span></li>
                            <li><a>Reebok</a><span>(28)</span></li>
                        </ul>
                    </div>
                    
                    <div class="sidebar-widget tag">
                        <h2 class="title">＃タッグ</h2>
                        <a >＃タッグ ＃タッグ</a>
                        <a >＃タッグ</a>
                        <a >＃タッグ</a>
                        <a >＃タッグ</a>
                        <a >＃タッグ ＃タッグ</a>
                        <a >＃タッグ</a>
                        <a >＃タッグ</a>
                        <a >＃タッグ</a>
                        <a >＃タッグ ＃タッグ</a>
                        <a >＃タッグ ＃タッグ</a>
                        <a >＃タッグ ＃タッグ</a>
                        <a >＃タッグ ＃タッグ</a>
                    </div>
                </div>
                <!-- サイドバー終了 -->
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'Product',
  props: {
  }
  
}
</script>

<style scoped>

.product-detail{
      -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

</style>