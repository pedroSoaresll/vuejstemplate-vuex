<template>
  <div class="transaction-machine-detail">
    <div class="row">
      <div class="col-md-12 mb-4 mt-2">
        <h5 class="text-title color-grey">Detalhe Transação na Maquininha</h5>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <p-card title="Transação">
          <div slot="header">
            <span class="font-weight-bold">Transação</span>
          </div>

          <div slot="content">
            <div class="row w-100 color-grey">
              <div class="col-md-3">
                <header class="d-block font-weight-bold">Data e Hora:</header>
                <span class="d-block">05/05/2005 09:23:03</span>
              </div>

              <div class="col-md-3">
                <header class="d-block font-weight-bold">ID Pedido Stelo:</header>
                <span class="d-block">1381231293</span>
              </div>

              <div class="col-md-3">
                <header class="d-block font-weight-bold">Canal:</header>
                <span class="d-block">Maquininha</span>
              </div>

              <div class="col-md-3">
                <header class="d-block font-weight-bold">Nº de Série:</header>
                <span class="d-block">31312312</span>
              </div>
            </div>

            <div class="row w-100 color-grey mt-4">
              <div class="col-md-3">
                <header class="d-block font-weight-bold">DOC/NSU:</header>
                <span class="d-block">52348</span>
              </div>

              <div class="col-md-3">
                <header class="d-block font-weight-bold">Meio de Pgto:</header>
                <span class="d-block">Cartão de Débito</span>
              </div>

              <div class="col-md-3">
                <header class="d-block font-weight-bold">Bandeira:</header>
                <span class="d-block">Elo</span>
              </div>

              <div class="col-md-3">
                <header class="d-block font-weight-bold">Cartão:</header>
                <span class="d-block">42389489234******492384</span>
              </div>
            </div>

            <div class="row w-100 color-grey mt-4">
              <div class="col-md-3">
                <header class="d-block font-weight-bold">Plano de Pgto:</header>
                <span class="d-block">1x</span>
              </div>

              <div class="col-md-3">
                <header class="d-block font-weight-bold">Valor:</header>
                <span class="d-block">R$ 900,00</span>
              </div>

              <div class="col-md-3">
                <header class="d-block font-weight-bold">Status:</header>
                <span class="d-block">R$ 900,00</span>
              </div>
            </div>

            <div class="divider"></div>

            <div class="row w-100 color-grey mb-3">
              <div class="col-md-3">
                <header class="d-block font-weight-bold">Cód. de Autoriz. Emissor:</header>
                <span class="d-block">42389423428942</span>
              </div>

              <div class="col-md-3">
                <header class="d-block font-weight-bold">Cód. Trace:</header>
                <span class="d-block">42389423428942</span>
              </div>

              <div class="col-md-3">
                <header class="d-block font-weight-bold">Código RRN:</header>
                <span class="d-block">42389423428VCFBCXV942</span>
              </div>

              <div class="col-md-3">
                <header class="d-block font-weight-bold">Código Cupom:</header>
                <span class="d-block">48234</span>
              </div>
            </div>
          </div>
        </p-card>
      </div>
    </div>

    <div class="row">
      <div class="col-md-2 mt-4">
        <button-back></button-back>
      </div>
    </div>
  </div>
</template>

<script>
import PCard from '@/components/shared/PCard.vue';
import ButtonBack from '@/components/shared/ButtonBack';

export default {
  components: {
    PCard,
    ButtonBack
  }
}
</script>


