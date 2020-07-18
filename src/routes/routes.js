import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ProductList from "../components/product/ProductList"
import CartList from "../components/cart/CartList";
import ProductDetails from "../components/product/ProductDetails";
import Billing from "../components/billing/Billing";
import NotFound from "../components/errorsite/NotFound";

const routes = [
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
        props: true //this enable forwarding prop (:id) automatically to the component ProductDetails
    },
    {
        path: '/billing',
        component: Billing
    },
    {
        path: '*', //if not uri fits then show this site. It has to be at the end of this route list
        component: NotFound
    }
]

export const router = new VueRouter(
    {
        mode: 'history',
        routes}
)