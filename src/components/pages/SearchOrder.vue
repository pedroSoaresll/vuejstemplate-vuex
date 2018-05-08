<template>
  <div class="search-order-main">
    <div class="row">
      <div class="col-md-6">
        <h5 class="text-title color-grey">Filtros por Pedidos</h5>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 filtros-vendedores mt-4 mb-3">
        <span class="text-specific-filter d-block mb-1 color-grey">Filtros Específicos</span>
        <search-order :showMore="true" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <search-order-result />
      </div>
    </div>
  </div>
</template>

<script>
import SearchOrder from '@/components/search-order/SearchOrder'
import SearchOrderResult from '@/components/search-order/SearchOrderResult'

export default {
  components: {
    SearchOrder,
    SearchOrderResult
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
      this.$store.commit('searchorder/addType', '');
      this.$store.commit('searchorder/addValue', '');
    },

    /** 
     * Atualiza a store com o tipo e valor dos parametros da rota
     * 
     * @return {void}
     */
    updateURLParam () {
      this.$store.commit('searchorder/addType', this.$route.params.search_type);
      this.$store.commit('searchorder/addValue', this.$route.params.search_value);
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
