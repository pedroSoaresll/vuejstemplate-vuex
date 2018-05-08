const state = {
  search: {
    type: '',
    value: ''
  }
}

const getters = {
  /**
   * Retorna o objeto search com type e value
   * 
   * @param {object} state
   * @return {object}
   */
  search: state => state.search,

  /**
   * Retorna a string {type}
   * 
   * @param {object} state
   * @return {string}
   */
  type: state => state.search.type,

  /**
   * Retorna a string {value}
   * 
   * @param {object} state
   * @return {string}
   */
  value: state => state.search.value
}


const mutations = {
  /**
   * Adiciona o tipo de consulta para store searchsalesman
   * 
   * @param {object} state 
   * @param {string} type 
   */
  addType (state, type) {
    state.search.type = type
  },

  /**
   * Adiciona valor para store searchsalesman
   * 
   * @param {object} state 
   * @param {string} value 
   */
  addValue (state, value) {
    state.search.value = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}