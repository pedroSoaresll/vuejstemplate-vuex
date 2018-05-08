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

  methods: {

    /** 
     * Verifica se existe parametros de consulta na URL
     * @return {boolean}
     */
    isURLSearch () {
      return this.$route.params.search_type && this.$route.params.search_value
    }
  },

  mounted () {
    if (this.isURLSearch()) {
      this.$store.commit('searchtransaction/addType', this.$route.params.search_type)
      this.$store.commit('searchtransaction/addValue', this.$route.params.search_value)
    }
  }
}
</script>
