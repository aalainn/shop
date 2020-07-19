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
                                @click="signin"
                                v-if="!loading">
                            <i class="fa fa-key mr-2"></i>
                            Einloggen
                        </button>
                        <button
                                class="btn bg-vue px-5 mt-2"
                                v-if="loading">
                            <span class="spinner-border spinner-border-sm mr-3"></span>
                            <span>Bitte warten</span>
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
        name: 'Signin',
        computed: {
            ...mapGetters([
                'loading'
            ])
        },
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

