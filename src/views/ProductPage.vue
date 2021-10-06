<template>

<div class="wrapper">
    <div class="product-detail">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-8">
                    <div class="product-detail-top">
                       <ProductCard />
                    </div>
                    
                    <div class="row product-detail-bottom anim" style="--delay: .6s">
                        <div class="col-lg-12">
                            <div class="nav nav-pills nav-justified">                                
                                
                                    <router-link to="/product-page/product-info" class="nav-item">
                                        <a class="nav-link">説明</a>
                                    </router-link>
                                
                                    <router-link to="/product-page/specifications" class="nav-item">
                                        <a class="nav-link">詳細</a>
                                    </router-link>
                                
                                    <router-link to="/product-page/review" class="nav-item">
                                        <a class="nav-link">レビュー</a>
                                    </router-link>
                            </div>    
                            <div class="col-md-9 anim" style="--delay: .6s">
                                <router-view />
                            </div>
                        </div>
                    </div>
                    
                    <div class="product" style="padding: 20px;">
                        <div class="section-header anim" style="--delay: .6s">
                            <h1>他の商品</h1>
                        </div>
    
                        <div class="row align-items-center row-gap">
                        <OtherProducts /> 
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 product-card-sidebar anim">
                    <div class="sidebar-widget category">
                        <WidgetCategory />
                    </div>                    
                    <div class="sidebar-widget widget-slider">
                        <WidgetSlider />
                    </div>                    
                    <div class="sidebar-widget brands">
                        <WidgetBrands />                    
                    </div>                    
                    <div class="sidebar-widget tag">
                        <WidgetTag />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import ProductCard from '../components/product_card/ProductCard.vue'
import WidgetTag from '../components/widgets/WidgetTag.vue'
import WidgetSlider from '../components/widgets/WidgetSlider.vue'
import WidgetCategory from '../components/widgets/WidgetCategory.vue'
import WidgetBrands from '../components/widgets/WidgetBrands.vue'
import OtherProducts from '../components/widgets/OtherProducts.vue'



export default {

    components:
    {
        ProductCard,
        WidgetTag,
        WidgetSlider,
        WidgetCategory,
        WidgetBrands,
        OtherProducts
    }

}
</script>

<style scoped>

.product-detail{
      -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

</style>