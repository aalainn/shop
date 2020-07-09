<template>
    <div>
        <h3 class="text-uppercase">Shop</h3>

        <div class="row">
            <div class="col-3"
                 v-for="productItem in productItems"
                 :key="productItem.id"
            >
            <ProductItem
                :productItem="productItem"
            />

            </div>
        </div>
    </div>
</template>

<script>
    import ProductItem from "./ProductItem";
    export default  {
        name: 'ProductList',
        components: {
            ProductItem
        },
        created() {
            this.$store.dispatch('getProductItems');
        },
        computed: {
            productItems() {
                return this.$store.getters.productItems;
            }
        }
    }
</script>

<style scoped>

</style>

