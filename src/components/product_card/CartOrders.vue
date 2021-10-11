<template>
    <div>
        <CartItem                  
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        />
</div>

</template>



<script>
import CartItem from '../CartItem.vue'
import{mapActions} from 'vuex'
export default {
    components:{
    CartItem,
    },
    props: {
        cart_data:{
            type: Array,
            default(){
                return[]
            }
        }
    },

    data(){
        return{}
    },
    computed:{
    },
    methods:{
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index)
        }
    }
}
</script>



<style scoped>

</style>