import Vue from 'vue'
import Vuex from 'vuex'

// Import store modules
import cartModule from "./cart";
import productModule from "./product";
import authModule from "./auth";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cartModule,
    productModule,
    authModule
  }
})
