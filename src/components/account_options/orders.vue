<template>
    <div>
        <CartOrders          
                v-if="CART.length" 
                :cart_data="CART"
         
        />

    </div>
</template>

<script>
import CartOrders from '../product_card/CartOrders.vue'
import {mapGetters} from 'vuex'

export default {
    name: "orders",
    
    components:{
    CartOrders,
    },

    data(){
        return{}
    },
    props:{}, 
    computed:{
        ...mapGetters([
            'CART'
        ])
    }
}
</script>

<style>

</style>