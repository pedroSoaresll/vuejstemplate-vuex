const state = {
  search: {
    type: '',
    value: ''
  }
}

const getters = {
  search: state => state.search,
  type: state => state.search.type,
  value: state => state.search.value
}


const mutations = {
  addType (state, type) {
    state.search.type = type
    console.log('type atualizado')
  },

  addValue (state, value) {
    state.search.value = value
    console.log('value atualizado')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}