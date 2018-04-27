<template>
  <div class="search-salesman-main">
    <div class="row">
      <div class="col-md-12 mb-4">
        <h5 class="text-title">Filtros por Vendedores</h5>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8 filtros-vendedores mb-4">
        <span class="text-specific-filter d-block mb-1">Filtros Específicos</span>
        <search-salesman />
      </div>
    </div>

    <div class="divider mb-1"></div>

    <div class="row">
      <div class="col-md-12">
        <!-- table here -->
        <p-table :self="this" :data="resultData" class="w-100"></p-table>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <b-button @click="$router.go(-1)" variant="outline-primary" size="md">Voltar</b-button>
      </div>

      <div class="col-md-6 d-flex justify-content-end">
        <b-pagination size="md" :total-rows="pagination.totalRows" v-model="pagination.currentPage" :per-page="pagination.perPage"></b-pagination>
      </div>
    </div>
  </div>  
</template>

<script>
// components
import SearchSalesman from './../SearchSalesman'
import PTable from './../PTable'

// models
import Path from './../../models/Path'

export default {
  components: {
    SearchSalesman,
    PTable
  },
  data: () => ({
    searchSalesmanPath: null,
    searchSalesmanPath: null,
    items: [
      { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
    ],
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
    }
  }),
  methods: {
    callbackClickPTable (data) {
      // console.log(`Evento do PTable:`, data)
      this.$router.push({ name: 'Detalhe', params: {
          id_detail: data.id
        }
      })
    }
  },
  created () {
    const search_type = this.$route.params.search_type
    const search_value = this.$route.params.search_value
  },
}
</script>

<style lang="scss" scoped>
@import './../../styles/searchsalesmanpage.scss'
</style>


