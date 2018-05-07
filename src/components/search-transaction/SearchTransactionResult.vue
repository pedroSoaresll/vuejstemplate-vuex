<template>
  <div class="search-transaction-result" v-if="searchType !== '' && searchValue !== ''">

    <!-- header -->
    <div class="row">
      <div class="col-md-6">
        <h5 class="color-grey">Resultado da Pesquisa</h5>
      </div>

      <div class="col-md-6 d-flex justify-content-end">
        <b-button @click="onClickDownload" variant="light" size="md" class="text-color-purple bg-white">
          <i class="oi oi-cloud-download icon-small mr-2"></i>
          <span>Download</span>
        </b-button>
      </div>
    </div>

    <!-- tabela -->
    <div class="row mt-2">
      <div class="col-md-12">
        <p-table class="w-100" v-on:clickItem="onClickTableItem" :data="resultData"></p-table>
      </div>
    </div>

    <!-- paginação e botão voltar -->
    <div class="row">
      <div class="col-md-2">
        <button-back></button-back>
      </div>

      <div class="col-md-10 d-flex justify-content-end">
        <b-pagination size="md" :total-rows="pagination.totalRows" v-model="pagination.currentPage" :per-page="pagination.perPage"></b-pagination>
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
    resultData: {
      columnsName: ['Data e Hora', 'ID do Pedido Stelo', 'Nº de Série', 'Bandeira', 'Meio de Pgto', 'Valor'],
      rowsName: [
        {
          dataHora: '18/04/1998',
          idPedidoStelo: '0392309',
          numeroSerie: '0943209',
          bandeira: 'ELO',
          meioPagamento: 'Crédito',
          valor: '4.00'
        },
      ]
    },
    pagination: {
      totalRows: 100,
      currentPage: 2,
      perPage: 10
    }
  }),
  methods: {
    onClickDownload () {
      console.log('botão download clicado')
    },
    onClickTableItem (data) {
      console.log('on click table item', data)
      this.$router.push({name: 'TransacoesMaquininhaDetalhe', params: {id: data.idPedidoStelo}})
    }
  },
  computed: {
    searchType () {
      return this.$store.getters['searchtransaction/type']
    },

    searchValue () {
      return this.$store.getters['searchtransaction/value']
    }
  },
}
</script>

<style lang="scss" scoped>

</style>



