const state = {
    arrayValueExample: [],
    valueExample: 'example value'
}

const getters = {
    example: state => state.arrayValueExample,
    example2: state => {
        return state.valueExample
    }
}

const actions = { 
    example ({ commit }) {
        // use commit with webserver
        // example here:
            // shop.getProducts(products => {
            //     commit setProducts mutation to update state from action
            //     commit('setProducts', products)
            // })
    }
}

const mutations = {
    example (state, param1) {
        // 
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}