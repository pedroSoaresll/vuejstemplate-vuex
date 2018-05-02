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

    <div class="divider"></div>

    <div class="row">
      <div class="col-md-12" v-if="searchType !== '' && searchValue !== ''">
        <!-- table here -->
        <p-table :self="this" v-on:clickItem="callbackClickPTableItem" :data="resultData" class="w-100"></p-table>
      </div>
    </div>

    <div class="row" v-if="searchType !== '' && searchValue !== ''">
      <div class="col-md-3">
        <button-back></button-back>
      </div>

      <div class="col-md-9 d-flex justify-content-end">
        <b-pagination size="md" :total-rows="pagination.totalRows" v-model="pagination.currentPage" :per-page="pagination.perPage"></b-pagination>
      </div>
    </div>
  </div>  
</template>

<script>
// components
import SearchSalesman from '@/components/search-salesman/SearchSalesman'
import PTable from '@/components/shared/PTable'
import ButtonBack from '@/components/shared/ButtonBack'

// models
import Path from '@/models/Path'

export default {
  components: {
    SearchSalesman,
    PTable,
    ButtonBack
  },
  data: () => ({
    searchSalesmanPath: null,
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
    search_type: '',
    search_value: ''
  }),
  methods: {
    callbackClickPTableItem (data) {
      // console.log(`Evento do PTable:`, data)
      this.$router.push({ name: 'Detalhe', params: {
          id_detail: data.id
        }
      })
    },

    clearSearch () {
      this.$store.commit('searchsalesman/addType', '')
      this.$store.commit('searchsalesman/addValue', '')
    }
  },

  computed: {
    searchType () {
      return this.$store.getters['searchsalesman/type']
    },

    searchValue () {
      return this.$store.getters['searchsalesman/value']
    }
  },

  created () {
    this.$route.params.search_type ? this.$store.commit('searchsalesman/addType', this.$route.params.search_type) : false
    this.$route.params.search_value ? this.$store.commit('searchsalesman/addValue', this.$route.params.search_value) : false
  },

  destroyed () {
    this.clearSearch()
  }
}
</script>

<style lang="scss" scoped>
@import './../../styles/searchsalesmanpage.scss'
</style>


