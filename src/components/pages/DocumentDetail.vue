<template>
  <div class="document-detail-main">
    <div class="row">
      <div class="col-md-12 mb-4">
        <h5 class="text-title">Definir titulo automatizado</h5>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-2">
        <b-button class="button-white">Ver Transações</b-button>
      </div>

      <div class="col-md-2">
        <b-button class="button-white">Ver Histórico</b-button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 mb-5">
        <div class="card mb-4">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link document-detail-button-toggle" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Dados Cadastrais
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
              <div class="col-md-12 mt-4">
                <store-data-detail></store-data-detail>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card mb-4">
          <div class="card-header" id="headingtwo">
            <h5 class="mb-0">
              <button class="btn btn-link document-detail-button-toggle" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Usuários
              </button>
            </h5>
          </div>

          <div id="collapseTwo" class="collapse" aria-labelledby="headingtwo" data-parent="#accordion">
            <div class="card-body">
              <div class="col-md-12 mt-4">
                <store-users-detail></store-users-detail>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link document-detail-button-toggle" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                Pedido 1
              </button>
            </h5>
          </div>

          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
              <div class="col-md-12 mt-4">
                <store-order-detail></store-order-detail>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-4">
          <div class="card-header" id="headingFour">
            <h5 class="mb-0">
              <button class="btn btn-link document-detail-button-toggle" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                Taxas e Tarifas
              </button>
            </h5>
          </div>

          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
            <div class="card-body">
              <div class="col-md-12 mt-4">
                <store-rates-detail></store-rates-detail>
              </div>
            </div>
          </div>
        </div>
        
        
        <div class="row">
          <div class="col-md-3">
            <b-button @click="$router.go(-1)" variant="light" size="md" class="text-color-purple w-50">
              <i class="oi oi-chevron-left icon-small mr-2"></i>
              <span>Voltar</span>
            </b-button>
          </div>
        </div>
          
        
      </div>
    </div>
  </div>
</template>

<script>
// components
import StoreDataDetail from './../StoreDataDetail'
import StoreUsersDetail from './../StoreUsersDetail'
import StoreOrderDetail from './../StoreOrderDetail'
import StoreRatesDetail from './../StoreRatesDetail'

// models
import Path from './../../models/Path'

export default {
  components: {
    StoreDataDetail,
    StoreUsersDetail,
    StoreOrderDetail,
    StoreRatesDetail
  },
  data: () => ({
    documentDetailPath: null
  }), 
  created () {
    const id_detail = this.$route.params.id_detail
  },
}
</script>

<style lang="scss" scoped>
@import './../../styles/documentdetail.scss'
</style>


