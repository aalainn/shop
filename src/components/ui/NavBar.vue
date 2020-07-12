<template>
    <nav class="navbar navbar-expand-lg bg-vue">
        <div class="container">
            <a href="" class="navbar-brand">Übungsshop 0.1 Alpha</a>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a href="" class="nav-link">Shop</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="" class="nav-link">
                        <i class="fa fa-sign-in mr-2"></i>
                        Login
                    </a>
                </li>
                <li class="nav-item bg-vue2 ml-4 rounded">
                    <a href="" class="nav-link">
                        <i class="fa fa-cart-arrow-down mr-2"></i>
                        6 Artikel (120.00)
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default  {
        name: 'NavBar',
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

