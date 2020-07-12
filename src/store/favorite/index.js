

const state = {
    favoriteItems: []
}

const mutations = {
    ADD_FAVORITE_ITEM (state, payload) {
        state.favoriteItems.push(payload);
    },
    REMOVE_FAVORITE_ITEM (state, payload) {
        const filteredItems = state.favoriteItems.filter(favoriteItem => favoriteItem.id !== payload.id);
        state.favoriteItems = filteredItems;
    }
}

const actions = {
    addFavoriteItem ({ commit }, payload) {
        commit('ADD_FAVORITE_ITEM', payload);
    },
    removeFavoriteItem ({ commit }, payload) {
        commit('REMOVE_FAVORITE_ITEM', payload);
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