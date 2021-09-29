<template>
        <!-- My Account Start -->
        <div class="wrapper">
        <div class="my-account anim" style="--delay: .2s">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="dashboard-nav" data-toggle="pill" href="#" role="tab"><component v-bind:is="currentTabComponent"></component>
Dashboard</a>
                            <a class="nav-link" id="orders-nav" data-toggle="pill" href="/orders-tab" role="tab"><i class="fa fa-shopping-bag"></i>Orders</a>
                            <a class="nav-link" id="payment-nav" data-toggle="pill" href="/payment-tab" role="tab"><i class="fa fa-credit-card"></i>Payment Method</a>
                            <a class="nav-link" id="address-nav" data-toggle="pill" href="/address-tab" role="tab"><i class="fa fa-map-marker-alt"></i>Address</a>
                            <a class="nav-link" id="account-nav" data-toggle="pill" href="/account-tab" role="tab"><i class="fa fa-user"></i>Account Details</a>
                            <a class="nav-link" href=""><i class="fa fa-sign-out-alt"></i>Logout</a>
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
  name: 'Account',
  props: {
  }
}
</script>

<style scoped>

</style>