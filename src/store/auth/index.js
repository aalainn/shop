import axios from 'axios';

const state = {
    token: null
}

const mutations = {
    SET_TOKEN (state, token) {
        state.token = token;
    }
}

const actions = {
    signin({commit}) {
        axios.post('/api/login')
            .then(resp => {
                localStorage.setItem('token', resp.data.token);
                commit('SET_TOKEN', resp.data.token);
            })
    },
    signout({commit}) {
        return new Promise((resolve) => {
            localStorage.removeItem('token');
            commit('SET_TOKEN', null);
            resolve();
        })
    }
}

const getters = {
    token: state => state.token
}

const authModule = {
    state,
    mutations,
    actions,
    getters
}

export default authModule;