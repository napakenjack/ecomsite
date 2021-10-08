<template>
    <div class="tab-pane">
            <img :src="require('../assets/' + cart_item_data.image)" alt=""/>
                    <div class="product-name">
                        <p>{{cart_item_data.name}}</p>
                        <p>{{cart_item_data.price}}</p>
                        <p>{{cart_item_data.article}}</p>
                    </div>
            <div class="delete-button">
                <button>
                    Delete
                </button>
    </div>    
</div>




  <!--  <div class="table-responsive">
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>No</th>
                    <th>Product</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Product Name</td>
                    <td>01 Jan 2020</td>
                    <td>$99</td>
                    <td>Approved</td>
                        <td>
                            <button class="btn">View</button>
                        </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Product Name</td>
                    <td>01 Jan 2020</td>
                    <td>$99</td>
                    <td>Approved</td>
                        <td>
                            <button class="btn">View</button>
                        </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Product Name</td>
                    <td>01 Jan 2020</td>
                    <td>$99</td>
                    <td>Approved</td>
                    <td><button class="btn">View</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    -->
</template>

<script>


export default {
    name:"CartItem",
    props:{
        cart_item_data: {
            type: Object,
            default(){
                return{}
            }
        }

    },
    data(){
        return{
            
        }
    },
    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1)
    },
    
    computed:{

    }
}


</script>

<style scoped>

button{
    cursor: pointer !important;
    background-color: #c6afff !important;
    border-radius: 10px !important;
    border-style: none !important;
    padding: 0.3vw 0.6vw 0.3vw 0.6vw !important;
    color: white !important;
    font-size: 1rem !important;
}

.tab-pane{
    display: flex;
    width: 100%;
    margin: 1vw;
    box-shadow: #b7ccc5 0px 0px 9px;
    border-radius: 1vw;
    padding: 1vw;
    transition: .4s;
    cursor: pointer;
    align-items: center;
    text-align: start;
    gap: 2vw;
    margin-left: auto;
    margin-right: auto;
}

.tab-pane:hover{
transform: scale3d(1.02, 1.02, 1.02);
    box-shadow: #b7ccc5 0px 0px 20px;
}

.tab-pane img{
    width: 10vw;
    border-radius: 1vw;
}


</style>