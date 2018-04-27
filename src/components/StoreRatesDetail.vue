<template>
  <div class="store-users-detail row">

    <!-- Dados do Pedido -->
    <div class="dados-da-loja row col-md-12">
      <!-- <header class="col-md-12 mb-4">
        <h5 class="text-uppercase font-weight-bold font-size-default color-grey">Dados do Pedido</h5>
      </header> -->

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Recebimento Débto:</header>
          <span class="d-block">D1</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Débito à Vista:</header>
          <span class="d-block">2,39%</span>
        </div>
      </div>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Recebimento Crédito:</header>
          <span class="d-block">D2</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Crédito à Vista</header>
          <span class="d-block">4,95%</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Crédito Parcelado:</header>
          <span class="d-block">5,55%</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Taxa de Parcelamento:</header>
          <span class="d-block">2,99%</span>
        </div>
      </div>
    </div>

    <div class="row col-md-12 d-flex justify-content-end mt-3">
      <div class="col-md-2">
        <b-button @click="$router.go(-1)" variant="outline-light" size="md" class="text-color-purple w-100">
          <i class="oi oi-pencil icon-small mr-2"></i>
          <span>Voltar</span>
        </b-button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>
