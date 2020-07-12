<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-12">
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
        computed: {
            productItems() {
                return this.$store.getters.productItems;
            }
        }
    }
</script>

<style scoped>

</style>

