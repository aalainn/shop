import axios from 'axios';

const state = {
    productItems: []
}

const mutations = {
    UPDATE_PRODUCT_ITEMS (state, payload) {
        state.productItems = payload;
    }
}

const actions = {
    getProductItems ({ commit }) {
        axios.get('/api/products')
            .then((resp) => {
                console.log('product data: ', resp)
                commit('UPDATE_PRODUCT_ITEMS', resp.data);
            })
    }
}

const getters = {
    productItems: state => state.productItems,
}

const productModule = {
    state,
    mutations,
    actions,
    getters
}

export default productModule;