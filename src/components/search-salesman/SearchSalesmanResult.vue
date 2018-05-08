<template>
  <div class="search-salesman-result">
    <div class="divider"></div>

    <div class="row">
      <div class="col-md-12" v-if="searchType !== '' && searchValue !== ''">
        <!-- table here -->
        <p-table v-on:clickItem="callbackClickPTableItem" :data="resultData" class="w-100"></p-table>
      </div>
    </div>

    <div class="row" v-if="searchType !== '' && searchValue !== ''">
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
import ButtonBack from '@/components/shared/ButtonBack'
import PTable from '@/components/shared/PTable'
import storemixins from '@/mixins/StoreMixins'

export default {
  components :{
    PTable,
    ButtonBack    
  },
  data: () => ({
    resultData: {
      columnsName: ['ID Vendedor', 'CPF/CNPJ', 'Nome Fantasia', 'Razão Social', 'Responsável'],
      rowsName: [
        {
          id: '0001',
          cpfCnpj: '031.756.317-31',
          nomeFantasia: 'Parque Aguas',
          razaoSocial: 'Parque Aguas',
          responsavel: 'Jbertina do Carmo Ton'
        },
        {
          id: '0002',
          cpfCnpj: '031.756.317-32',
          nomeFantasia: 'Parque Aguas 2',
          razaoSocial: 'Parque Aguas 2',
          responsavel: 'Jbertina do Carmo Ton 2'
        }
      ]
    },
    pagination: {
      currentPage: 1,
      totalRows: 100,
      perPage: 2
    },
  }),
  computed: {
    searchType () {
      return this.$store.getters['searchsalesman/type']
    },

    searchValue () {
      return this.$store.getters['searchsalesman/value']
    }
  },
  methods: {
    /**
     * callback click no item da tabela
     * 
     * @param {Object} data Json
     * @return {void}
     */
    callbackClickPTableItem (data) {
      // console.log(`Evento do PTable:`, data)
      this.$router.push({ name: 'Detalhe', params: {
          id_detail: data.id
        }
      })
    },
  }
}
</script>
