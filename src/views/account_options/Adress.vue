<template>
        <div class="tab-pane fade" id="address-tab" role="tabpanel" aria-labelledby="address-nav">
            <h4>Address</h4>
                <div class="row">
                    <div class="col-md-6">
                        <h5>Payment Address</h5>
                            <p>123 Payment Street, Los Angeles, CA</p>
                            <p>Mobile: 012-345-6789</p>
                        <button class="btn">Edit Address</button>
                    </div>
                    <div class="col-md-6">
                        <h5>Shipping Address</h5>
                            <p>123 Shipping Street, Los Angeles, CA</p>
                            <p>Mobile: 012-345-6789</p>
                        <button class="btn">Edit Address</button>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>