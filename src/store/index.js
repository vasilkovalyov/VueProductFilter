import Vue from 'vue'
import Vuex from 'vuex'

import products from './products'
import wishlist from './wishlist'
import cart from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		products,
		wishlist,
		cart
	}
})
