<template>
        <!-- My Account Start -->
        <div class="wrapper">
        <div class="my-account anim" style="--delay: .2s">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <div class="nav flex-column nav-pills" style="position: fixed;">
                            <router-link to="/my-account/dashboard" class="anim" style="--delay: .1s">
                            <a class="nav-link">Dashboard</a>
                            </router-link>

                            <router-link to="/my-account/orders" class="anim" style="--delay: .2s">
                            <a class="nav-link" >Orders</a>
                            </router-link>

                            <router-link to="/my-account/payment-method" class="anim" style="--delay: .3s">
                            <a class="nav-link">Payment Method</a>
                            </router-link>

                            <router-link to="/my-account/adress" class="anim" style="--delay: .4s">
                            <a class="nav-link">Address</a>
                            </router-link>

                            <router-link to="/my-account/account-details" class="anim" style="--delay: .5s">
                            <a class="nav-link" >Account Details</a>
                            </router-link>

                            <router-link to="/">
                            <a class="nav-link anim" style="--delay: .6s">Logout</a>
                            </router-link>
                            
                        </div>
                    </div>
                    <div class="col-md-9">
                        <router-view />
                    </div>
                </div>
            </div>
        </div>
        <!-- My Account End -->
        </div>
</template>





<script>





export default {


}


</script>

<style>

@media screen and (max-width: 1080px) {
    

.flex-column{
    flex-direction: row !important;
}}

</style>