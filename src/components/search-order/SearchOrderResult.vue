<template>
  <div class="search-order-result-main" v-if="searchType !== '' && searchValue !== ''">
    <div class="row">
      <div class="col-md-12">
        <div class="divider"></div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <p-table class="w-100" v-on:clickItem="onClickItemTable" :data="{columnsName: ['Data e Hora', 'Nº do Pedido', 'Nome Fantasia', 'Status', 'Meio de Pgto', 'Valor'], rowsName: [{dataHora: '05/04/2018', numeroPedido: '1234235254345345', nomeFantasia: 'Alpha Pet', status: 'Aguardando Pgto', meioPagamento: 'Cartão de Crédito', valor: 'R$ 900,00'}]}" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-2">
        <button-back />
      </div>

      <div class="col-md-10 d-flex justify-content-end">
        <b-pagination :total-rows="pagination.totalRows" v-model="pagination.currentPage" :per-page="pagination.perPage" />
      </div>
    </div>
  </div>
</template>

<script>
import PTable from '@/components/shared/PTable'
import ButtonBack from '@/components/shared/ButtonBack'

export default {
  components: {
    PTable,
    ButtonBack
  },
  data: () => ({
    pagination: {
      totalRows: 100,
      currentPage: 1,
      perPage: 10
    }
  }),
  computed: {
    /** 
     * Listener parametro da URL search_type
     * 
     * @return {string}
     */
    searchType () {
      return this.$store.getters['searchorder/type']
    },

    /** 
     * Listener parametro da URL search_value 
     * 
     * @return {string}
     */
    searchValue () {
      return this.$store.getters['searchorder/value']
    }
  },
  methods: {
    /** 
     * Callbacl evento de clique no item da tabela
     * 
     * @param {object} data Retorno do json do item da tabela
     * @return {void}
     */
    onClickItemTable (data) {
      this.$router.push({ name: 'DetalhePedido', params: { id_detail: data.numeroPedido } })
    }
  },
}
</script>
