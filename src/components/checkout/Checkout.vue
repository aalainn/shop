<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-6 offset-3">
                <h3 class="text-uppercase">
                    Kasse
                </h3>
                <div
                        v-if="cartItems.length > 0"
                >


                    <hr>

                    <div class="bg-light rounded-pill px-4 pt-2 pb-2 text-uppercase font-weight-bold">
                        Bestellübersicht
                    </div>
                    <div class="p-4">
                        <ul class="list-unstyled mb-4">
                            <li class="d-flex justify-content-between pb-3">
                                <strong class="text-muted">Zwischensumme </strong><strong>{{cartTotal}} €</strong>
                            </li>
                            <li class="d-flex justify-content-between py-3">
                                <strong class="text-muted">MwSt.</strong><strong>{{cartTaxes}} €</strong>
                            </li>
                            <li class="d-flex justify-content-between py-3">
                                <strong class="text-muted">Versandkosten</strong><strong>{{cartShipping}} €</strong>
                            </li>
                            <li class="d-flex justify-content-between py-3">
                                <strong class="text-muted">Gesamtkosten</strong>
                                <h5 class="font-weight-bold">{{cartTotalWithShipping}} €</h5>
                            </li>
                        </ul>
                        <button
                                class="btn bg-vue rounded-pill py-2 btn-block"
                        >Jetzt Bezahlen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default  {
        name: 'Checkout',
        computed: {
            ...mapGetters([
                'cartItems',
                'cartTotal',
                'cartQuantity'
            ]),
            cartTotalWithoutTaxes() {
                return parseFloat(this.cartTotal - this.cartTaxes).toFixed(2);
            },
            cartTaxes() {
                return parseFloat(this.cartTotal * 0.19).toFixed(2) ;
            },
            cartShipping() {
                return 9.99;
            },
            cartTotalWithShipping() {
                return (parseFloat(this.cartTotal) + parseFloat(this.cartShipping) + parseFloat(this.cartTaxes)).toFixed(2);
            }
        }
    }
</script>

<style scoped>

</style>

