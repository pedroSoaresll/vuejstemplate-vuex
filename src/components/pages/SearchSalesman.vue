<template>
  <div class="search-salesman-main">
    <div class="row">
      <div class="col-md-12 mb-4">
        <h5 class="text-title">Filtros por Vendedores</h5>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8 filtros-vendedores mb-3">
        <span class="text-specific-filter d-block mb-1">Filtros Específicos</span>
        <search-salesman />
      </div>
    </div>

    
    <search-salesman-result />
  </div>  
</template>

<script>
// components
import SearchSalesman from '@/components/search-salesman/SearchSalesman'
import SearchSalesmanResult from '@/components/search-salesman/SearchSalesmanResult'

// models
import Path from '@/models/Path'

export default {
  components: {
    SearchSalesman,
    SearchSalesmanResult
  },
  data: () => ({
    searchSalesmanPath: null,
  }),
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
      return this.$route.params.search_type && this.$route.params.search_value;
    },

    /** 
     * Caso não existir parametros na url de consulta, limpar dados
     * 
     * @return {void}
     */
    clearURLSearch () {
      // limpa state de consulta
      this.$store.commit('searchsalesman/addType', '');
      this.$store.commit('searchsalesman/addValue', '');
    },

    /** 
     * Atualiza a store com o tipo e valor dos parametros da rota
     * 
     * @return {void}
     */
    updateURLParam () {
      this.$store.commit('searchsalesman/addType', this.$route.params.search_type);
      this.$store.commit('searchsalesman/addValue', this.$route.params.search_value);
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

<style lang="scss" scoped>
@import './../../styles/searchsalesmanpage.scss'
</style>


