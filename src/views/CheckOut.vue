<template>
<div class="wrapper">

        <!-- Checkout Start -->
        <div class="checkout anim" style="--delay: .2s">
            <div class="container-fluid"> 
                <div class="row">
                    <div class="col-lg-8">
                        <div class="checkout-inner">
                            <div class="billing-address">
                                <h2>請求先住所</h2>
                                <div class="row">
                                    <div class="col-md-6 anim" style="--delay: .3s">
                                        <label>名</label>
                                        <input class="form-control" type="text" placeholder="First Name">
                                    </div>
                                    <div class="col-md-6 anim" style="--delay: .4s">
                                        <label>性</label>
                                        <input class="form-control" type="text" placeholder="Last Name">
                                    </div>
                                    <div class="col-md-6 anim" style="--delay: .5s">
                                        <label>メール</label>
                                        <input class="form-control" type="text" placeholder="E-mail">
                                    </div>
                                    <div class="col-md-6 anim" style="--delay: .6s">
                                        <label>携帯電話</label>
                                        <input class="form-control" type="text" placeholder="Mobile No">
                                    </div>
                                    <div class="col-md-12 anim" style="--delay: .7s">
                                        <label>住所</label>
                                        <input class="form-control" type="text" placeholder="Address">
                                    </div>
                                    <div class="col-md-6 anim" style="--delay: .8s">
                                        <label>国</label>
                                        <select class="custom-select">
                                            <option selected>United States</option>
                                            <option>Afghanistan</option>
                                            <option>Albania</option>
                                            <option>Algeria</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 anim" style="--delay: .9s">
                                        <label>市</label>
                                        <input class="form-control" type="text" placeholder="市">
                                    </div>
                                    <div class="col-md-6 anim" style="--delay: 1s">
                                        <label>県</label>
                                        <input class="form-control" type="text" placeholder="県">
                                    </div>
                                    <div class="col-md-6 anim" style="--delay: 1.1s">
                                        <label>郵便番号</label>
                                        <input class="form-control" type="text" placeholder="郵便番号">
                                    </div>
                                    <div class="col-md-12 anim" style="--delay: 1.2s">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="check-box">
                                            <label class="custom-control-label" for="check-box">チェックボックス</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12 anim" style="--delay: 1.2s">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="shipto">
                                            <label class="custom-control-label" for="shipto">別の住所に発送</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="shipping-address">
                                <h2>お届け先の住所</h2>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>名</label>
                                        <input class="form-control" type="text" placeholder="名">
                                    </div>
                                    <div class="col-md-6">
                                        <label>性</label>
                                        <input class="form-control" type="text" placeholder="性">
                                    </div>
                                    <div class="col-md-6">
                                        <label>メール</label>
                                        <input class="form-control" type="text" placeholder="メール">
                                    </div>
                                    <div class="col-md-6">
                                        <label>携帯電話</label>
                                        <input class="form-control" type="text" placeholder="携帯電話">
                                    </div>
                                    <div class="col-md-12">
                                        <label>住所</label>
                                        <input class="form-control" type="text" placeholder="住所">
                                    </div>
                                    <div class="col-md-6">
                                        <label>国</label>
                                        <select class="custom-select">
                                            <option selected>アメリカ</option>
                                            <option>アフガニスタン</option>
                                            <option>アルバニア</option>
                                            <option>アルジェリア</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label>市</label>
                                        <input class="form-control" type="text" placeholder="市">
                                    </div>
                                    <div class="col-md-6">
                                        <label>県</label>
                                        <input class="form-control" type="text" placeholder="県">
                                    </div>
                                    <div class="col-md-6">
                                        <label>郵便番号</label>
                                        <input class="form-control" type="text" placeholder="郵便番号">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="checkout-inner">
                            <div class="checkout-summary">
                                <h1>カード</h1>
                                <p>商品<span>￥99</span></p>
                                <p class="sub-total">小計<span>￥99</span></p>
                                <p class="ship-cost">輸送費<span>￥99</span></p>
                                <h2>総計<span>￥99</span></h2>
                            </div>

                            <div class="checkout-payment">
                                <div class="payment-methods">
                                    <h1>支払方法</h1>
                                    <div class="payment-method">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="payment-1" name="payment">
                                            <label class="custom-control-label" for="payment-1">Paypal</label>
                                        </div>
                                        <div class="payment-content" id="payment-1-show">
                                            <p>
                                                支払方法の詳細
                                            </p>
                                        </div>
                                    </div>
                                    <div class="payment-method">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="payment-2" name="payment">
                                            <label class="custom-control-label" for="payment-2">Payoneer</label>
                                        </div>
                                        <div class="payment-content" id="payment-2-show">
                                            <p>
                                                支払方法の詳細
                                            </p>
                                        </div>
                                    </div>
                                    <div class="payment-method">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="payment-3" name="payment">
                                            <label class="custom-control-label" for="payment-3">Check Payment</label>
                                        </div>
                                        <div class="payment-content" id="payment-3-show">
                                            <p>
                                                支払方法の詳細
                                            </p>
                                        </div>
                                    </div>
                                    <div class="payment-method">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="payment-4" name="payment">
                                            <label class="custom-control-label" for="payment-4">Direct Bank Transfer</label>
                                        </div>
                                        <div class="payment-content" id="payment-4-show">
                                            <p>
                                                支払方法の詳細
                                            </p>
                                        </div>
                                    </div>
                                    <div class="payment-method">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="payment-5" name="payment">
                                            <label class="custom-control-label" for="payment-5">Cash on Delivery</label>
                                        </div>
                                        <div class="payment-content" id="payment-5-show">
                                            <p>
                                                支払方法の詳細
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="checkout-btn">
                                    <button>注文する</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Checkout End -->

</div>
</template>

<script>
export default {
  name: 'Checkout',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
