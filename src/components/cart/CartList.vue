<template>

    <div class="container mt-3">
        <div class="row">
            <div class="col-6 offset-3">
                <h3 class="text-uppercase">
                    Warenkorb
                    <span
                            v-if="cartItems.length > 0"
                    >
                    {{ cartQuantity }} Artikel
                    <i
                            class="fa fa-trash pointer"
                            @click="removeAllCartItems"
                    ></i>
                </span>
                </h3>
                <div
                        v-if="!cartItems.length"
                >
                    <div class="alert bg-vue2">
                        Warenkorb leer
                    </div>
                </div>
                <div
                        v-if="cartItems.length > 0"
                >
                    <table class="table table-borderless">
                        <thead>
                        <tr>
                            <th>
                                <div class="p-2 px-3 text-uppercase">Produkt</div>
                            </th>
                            <th>
                                <div class="py-2 text-uppercase">Preis</div>
                            </th>
                            <th>
                                <div class="py-2 text-uppercase">Anzahl</div>
                            </th>
                            <th>
                                <div class="py-2 px-3"></div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <CartListItem
                                v-for="cartItem in cartItems"
                                :key="cartItem.id"
                                :cartItem=cartItem
                        />
                        </tbody>

                    </table>

                    <hr>

                    <div class="bg-light rounded-pill px-4 pt-3 text-uppercase font-weight-bold">
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

                        >Zur Kasse
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import CartListItem from "./CartListItem";
    export default  {
        name: 'CartList',
        components: {
            CartListItem,
        },
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
        },
        methods: {
            ...mapActions([
                'removeAllCartItems'
            ])
        }
    }
</script>

<style scoped>

</style>

