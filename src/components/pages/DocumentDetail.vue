<template>
  <div class="document-detail-main">
    <div class="row">
      <div class="col-md-12 mb-4">
        <h5 class="text-title font-weight-bold">PARQUE DA BOLA</h5>
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
          <div class="card-header bg-white d-flex justify-content-between align-items-center" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <h5 class="mb-0">
              <button class="btn btn-link document-detail-button-toggle" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Dados Cadastrais
              </button>
            </h5>
            <i class="oi oi-chevron-bottom icon-small mr-2" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"></i>
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
          <div class="card-header bg-white d-flex justify-content-between align-items-center" id="headingtwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <h5 class="mb-0">
              <button class="btn btn-link document-detail-button-toggle" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Usuários
              </button>
            </h5>
            <i class="oi oi-chevron-bottom icon-small mr-2" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"></i>
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
          <div class="card-header bg-white d-flex justify-content-between align-items-center" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            <h5 class="mb-0">
              <button class="btn btn-link document-detail-button-toggle" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                Pedido 1
              </button>
            </h5>
            <i class="oi oi-chevron-bottom icon-small mr-2" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree"></i>
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
          <div class="card-header bg-white d-flex justify-content-between align-items-center" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
            <h5 class="mb-0">
              <button class="btn btn-link document-detail-button-toggle" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                Taxas e Tarifas
              </button>
            </h5>
            <i class="oi oi-chevron-bottom icon-small mr-2" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour"></i>
          </div>

          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
            <div class="card-body">
              <div class="col-md-12 mt-4">
                <store-rates-detail></store-rates-detail>
              </div>
            </div>
          </div>
        </div>

        <!-- button back -->
        <div class="row">
          <div class="col-md-3">
            <button-back></button-back>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components
import StoreDataDetail from '@/components/store-detail/StoreDataDetail'
import StoreUsersDetail from '@/components/store-detail/StoreUsersDetail'
import StoreOrderDetail from '@/components/store-detail/StoreOrderDetail'
import StoreRatesDetail from '@/components/store-detail/StoreRatesDetail'
import ButtonBack from '@/components/shared/ButtonBack'

// models
import Path from './../../models/Path'

export default {
  components: {
    StoreDataDetail,
    StoreUsersDetail,
    StoreOrderDetail,
    StoreRatesDetail,
    ButtonBack
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
@import '@/styles/documentdetail.scss'
</style>


