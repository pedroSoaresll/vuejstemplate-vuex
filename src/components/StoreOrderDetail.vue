<template>
  <div class="store-users-detail row">

    <!-- Dados do Pedido -->
    <div class="dados-da-loja row col-md-12">
      <header class="col-md-12 mb-4">
        <h5 class="text-uppercase font-weight-bold font-size-default color-grey">Dados do Pedido</h5>
      </header>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Data e Hora do Pedido:</header>
          <span class="d-block">19/07/2017 11:03:38</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">ID Pedido Stelo</header>
          <span class="d-block">11341434892354534</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Status</header>
          <span class="d-block">Concluido</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Canal de Entrada</header>
          <span class="d-block">Bradesco</span>
        </div>
      </div>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Nº Referência Vtex:</header>
          <span class="d-block">31289</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Endereço Notificaçao Vtex:</header>
          <span class="d-block">https://stelo.vtexpayments.com</span>
        </div>
      </div>
    </div>

    <div class="col-md-12">
      <div class="divider"></div>
    </div>

    <!-- Dados de Pagamento -->
    <div class="dados-da-loja row col-md-12">
      <header class="col-md-12 mb-4">
        <h5 class="text-uppercase font-weight-bold font-size-default color-grey">Dados do Pagamento</h5>
      </header>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Data e Hora do Pagamento:</header>
          <span class="d-block">19/07/2017 11:03:38</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Cód. de Autorização Branco Emissor:</header>
          <span class="d-block">123235</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Cód. Trace</header>
          <span class="d-block">4352344</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Cód. RRN:</header>
          <span class="d-block">72494723049234</span>
        </div>
      </div>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Cód. Cupom:</header>
          <span class="d-block">1884349823</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Meio de Pgto:</header>
          <span class="d-block">Cartão de Crédito</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Bandeira:</header>
          <span class="d-block">Mastercard</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Cartão Mascarado:</header>
          <span class="d-block">842394523*******08340</span>
        </div>
      </div>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Plano de Pgto:</header>
          <span class="d-block">10x</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Valor:</header>
          <span class="d-block">R$ 1.234,50</span>
        </div>
      </div>
    </div>

    <div class="col-md-12">
      <div class="divider"></div>
    </div>

    <!-- Dados do responsável pela venda -->
    <div class="dados-da-loja row col-md-12">
      <header class="col-md-12 mb-4">
        <h5 class="text-uppercase font-weight-bold font-size-default color-grey">Dados do Responsável pela Venda:</h5>
      </header>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Canal de Entrada:</header>
          <span class="d-block">Bradesco</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Nome do Gerente:</header>
          <span class="d-block">Gilberto Braga</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Agência do gerente:</header>
          <span class="d-block">0000</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Funcional:</header>
          <span class="d-block">000000</span>
        </div>
      </div>
    </div>

    <div class="col-md-12">
      <div class="divider"></div>
    </div>

    <!-- Endereço de Entrega -->
    <div class="dados-da-loja row col-md-12">
      <header class="col-md-12 mb-4">
        <h5 class="text-uppercase font-weight-bold font-size-default color-grey">Endereço de Entrega:</h5>
      </header>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">CEP:</header>
          <span class="d-block">04029-020</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Endereço:</header>
          <span class="d-block">Rua Alvares Cabral</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Número:</header>
          <span class="d-block">12</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Complemento:</header>
          <span class="d-block">ESQUIVA AV FRANCISCO</span>
        </div>
      </div>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Bairro:</header>
          <span class="d-block">Centro</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Cidade:</header>
          <span class="d-block">Ribeirão Preto</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Estado:</header>
          <span class="d-block">SP</span>
        </div>
      </div>
    </div>

    <div class="col-md-12">
      <div class="divider"></div>
    </div>

    <!-- acompahamento do pedido -->
    <div class="dados-da-loja row col-md-12">
      <header class="col-md-12 mb-4">
        <h5 class="text-uppercase font-weight-bold font-size-default color-grey">Acompanhamento do pedido:</h5>
      </header>

      <steps :bolls="acompanhamento"></steps>
    </div>

    <div class="col-md-12">
      <div class="divider"></div>
    </div>

    <!-- Maquininha -->
    <div class="dados-da-loja row col-md-12">
      <header class="col-md-12 mb-4">
        <h5 class="text-uppercase font-weight-bold font-size-default color-grey">Maquininha 1</h5>
      </header>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Modelo:</header>
          <span class="d-block">Stelo MAX</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Operadora:</header>
          <span class="d-block">Claro</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Número de Série:</header>
          <span class="d-block">4812384812</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Status da Maquininha:</header>
          <span class="d-block">Ativo</span>
        </div>
      </div>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Código de Ativação:</header>
          <span class="d-block">23425223434</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Valor:</header>
          <span class="d-block">777,80</span>
        </div>
      </div>
    </div>

    <div class="col-md-12">
      <div class="divider"></div>
    </div>

    <div class="dados-da-loja row col-md-12">
      <header class="col-md-12 mb-4">
        <h5 class="text-uppercase font-weight-bold font-size-default color-grey">Maquininha 2</h5>
      </header>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Modelo:</header>
          <span class="d-block">Stelo MAX</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Operadora:</header>
          <span class="d-block">Claro</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Número de Série:</header>
          <span class="d-block">4812384812</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Status da Maquininha:</header>
          <span class="d-block">Ativo</span>
        </div>
      </div>

      <div class="row w-100 col-md-12 mb-4">
        <div class="col-md-3">
          <header class="d-block font-weight-bold">Código de Ativação:</header>
          <span class="d-block">23425223434</span>
        </div>

        <div class="col-md-3">
          <header class="d-block font-weight-bold">Valor:</header>
          <span class="d-block">777,80</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from './Steps'
export default {
  components: {
    Steps
  },
  data: () => ({
    acompanhamento: [
      {
        label: 'Em preparo',
        active: true
      },
      {
        label: 'Despachado',
        active: false
      },
      {
        label: 'Em transito',
        active: false
      },
      {
        label: 'Entregue',
        active: false
      },
      {
        label: 'Ativa',
        active: false
      }
    ]
  })
}
</script>


<style lang="scss" scoped>

</style>

