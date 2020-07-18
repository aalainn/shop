<template>
    <div style="height: 50vh;">
        <div class="container h-100">
            <div class="row align-items-center h-100">
                <div class="col-8 max-auto offset-2">
                    <div class="jumbotron text-center">
                        <h3>Login</h3>
                        <hr>
                        <p class="lead">
                            Klicken um sich einzuloggen
                        </p>
                        <button
                                class="btn bg-vue px-5 mt-2"
                                @click="signin">
                            <i class="fa fa-key mr-2"></i>
                            Einloggen
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default  {
        name: 'Signin',
        methods: {
            signin() {
                this.$store.dispatch('signin')
                    .then(() => {
                        this.$router.push('/')
                    })
            }
        }
    }
</script>

<style scoped>

</style>

