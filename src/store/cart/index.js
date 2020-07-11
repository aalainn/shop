import axios from 'axios';

const state = {
    cartItems: []
}

const mutations = {
    UPDATE_CART_ITEMS (store, payload) {
        state.cartItems = payload;
    }
}

const actions = {
    getCartItems ({ commit }) {
        axios
            .get('/api/cart')
            .then((resp) => {
                commit('UPDATE_CART_ITEMS', resp.data);
            });
    }
}

const getters = {
    cartItems: state => state.cartItems,
    cartTotal: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return (cartItem.quantity * cartItem.price) + acc;
        }, 0).toFixed(2);
    }
}

const cartModule = {
    state,
    mutations,
    actions,
    getters
}

export default cartModule;