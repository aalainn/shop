<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="row no-gutters">
                        <div class="col-4">
                            <img src="https://picsum.photos/400">
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title mb-4 align-middle">
                                    {{productItemById.title}}
                                <button
                                        class="float-right btn bg-vue px-4"
                                        @click="addToCart(productItem)"
                                >
                                    <i class="fa fa-cart-plus mr-3"></i>
                                    {{productItemById.price}}
                                </button>
                                <button
                                        class="float-right btn btn-light"
                                        @click="$router.go(-1)"
                                >
                                    <i class="fa fa-arrow-left"></i>
                                    Zurück
                                </button>
                                </h5>
                                <p
                                    class="card-text"
                                >
                                    {{productItemById.description}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default  {
        name: 'ProdutDetails',
        props: ['id'],
        computed: {
            productItem() {
                return this.$store.getters.productItemById(Number(this.id));
            }
        }

    }
</script>

<style scoped>

</style>

