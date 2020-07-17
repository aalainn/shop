<template>
    <div style="height: 50vh;">
        <div class="container h-100">
            <div class="row align-items-center h-100">
                <div class="col-8 mx-auto">
                    <div class="jumbtron h-100">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default  {
        name: 'CartListItem',
        props: [
            'cartItem'
        ],
        methods: {
            ...mapActions([
                'addCartItem',
                'decreaseCartItem',
                'removeCartItem'
            ]),
        }
    }
</script>

<style scoped>

</style>

