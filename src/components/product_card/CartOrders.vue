<template>
    <div>
        <CartItem                  
        v-for="item in cart_data"
        :key="item.article"
        :cart_item_data="item"
        />
</div>

</template>



<script>
import CartItem from '../CartItem.vue'
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
    }
}
</script>



<style scoped>

</style>