<template>
    <nav class="navbar navbar-expand-lg bg-vue">
        <div class="container">
            <router-link to="/" class="navbar-brand">Übungsshop 0.1 Alpha</router-link>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Shop</router-link>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a
                            class="nav-link"
                            @click="signout"
                    >
                        <i class="fa fa-sign-out mr-2"></i>
                        Logout
                    </a>
                </li>
                <li class="nav-item bg-vue2 ml-4 rounded">
                    <router-link to="/cart" class="nav-link">
                        <i class="fa fa-cart-arrow-down mr-2"></i>
                         {{cartQuantity}} Artikel ({{cartTotal}})
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default  {
        name: 'NavBar',
        computed: {
            ...mapGetters([
                'cartTotal',
                'cartQuantity'
            ])
        },
        methods: {
            signout() {
                this.$store
                    .dispatch('signout')
                    .then(()=> {
                        this.$router.push('/login');
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
    }
</script>

<style scoped>
    a {
        color: white;
    }
    a:hover {
        opacity: .3;
        transition: all .3s ease 0s;
    }
</style>

