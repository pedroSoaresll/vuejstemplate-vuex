<template>
  <div class="search-machine-transaction-main">
    <div class="row mb-4">
      <div class="col-md-6">
        <h5 class="text-title color-grey">Filtros por Transações na Maquininha</h5>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 filtros-vendedores mb-3">
        <span class="text-specific-filter d-block mb-1 color-grey">Filtros Específicos</span>
        <search-transaction :showMore="true" />
      </div>
    </div>

    <div class="divider"></div>

    <div class="row">
      <div class="col-md-12">
        <search-transaction-result />
      </div>
    </div>
  </div>
</template>

<script>
import SearchTransaction from './../search-transaction/SearchTransaction'
import SearchTransactionResult from './../search-transaction/SearchTransactionResult'

export default {
  components: {
    SearchTransaction,
    SearchTransactionResult
  },
  watch: {
    /** 
     * Listener com alvo no $route com ele consigo identificar a troca de rota neste componente
     * 
     * @param {object} to Rota para qual vai
     * @param {object} from Rota para qual veio
     */
    $route (to, from) {
      if (!this.isURLSearch()) this.clearURLSearch();
      else this.updateURLParam();
    }
  },
  methods: {
    /** 
     * Verifica se existe parametros de consulta na URL
     * 
     * @return {boolean}
     */
    isURLSearch () {
      return this.$route.params.search_type && this.$route.params.search_value
    },

    /** 
     * Caso não existir parametros na url de consulta, limpar dados
     * 
     * @return {void}
     */
    clearURLSearch () {
      // limpa state de consulta
      this.$store.commit('searchtransaction/addType', '');
      this.$store.commit('searchtransaction/addValue', '');
    },

    /** 
     * Atualiza a store com o tipo e valor dos parametros da rota
     * 
     * @return {void}
     */
    updateURLParam () {
      this.$store.commit('searchtransaction/addType', this.$route.params.search_type);
      this.$store.commit('searchtransaction/addValue', this.$route.params.search_value);
    }
  },
  mounted () {
    if (this.isURLSearch()) this.updateURLParam();
    else this.clearURLSearch();
  },
  beforeDestroy () {
    this.clearURLSearch();
  }
}
</script>
