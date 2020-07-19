import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Signin from "../components/auth/Signin";

import ProductList from "../components/product/ProductList"
import CartList from "../components/cart/CartList";
import ProductDetails from "../components/product/ProductDetails";
import NotFound from "../components/errorsite/NotFound";
import Checkout from "../components/checkout/Checkout";

const routes = [
    {
        path: '/login',
        component: Signin,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token');
            if (token) {
                next('/');
            } else {
                next();
            }
        }
    },
    {
        path: '/',
        component: ProductList
    },
    {
        path: '/cart',
        component: CartList
    },
    {
        path: '/products/:id',
        component: ProductDetails,
        props: true //this enable forwarding automatically the param :id to the prop id  of the component ProductDetails (the name "id" must be the same on params and prop)
    },
    {
        path: '/checkout',
        component: Checkout
    },
    {
        path: '*', //if no uri fits then show this site. It has to be at the end of this route list
        component: NotFound
    }
]

const router = new VueRouter(
    {
        mode: 'history', // because we have a singlepageapplication (SPA) by default there would be a #-sign after the domainname in the URL. Mode "history" prevents the #-sign. It would also work without "history"-mode but the #-sign would be visible. In this cas "history"-mode is just for cosmetic reasons
        routes}
)

// Global route guard
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (!token && to.path !== '/login') {
        next('/login');
    } else {
        next(); // continue routing
    }
});

export default router;
