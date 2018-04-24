<template>
  <div class="salesman-search-main">
    <b-form class="row">
      <b-input-group class="col-md-9">
        <b-form-select ref="salesmanSelect" @change="onChange" class="col-md-4 salesman-select" v-model="selected" :options="options" />

        <b-form-input class="col-md-7 salesman-input-search" rel="salesmanInput" />
      </b-input-group>
      
      <b-button class="col-md-2 button-submit">Pesquisar</b-button>
    </b-form>  
  </div>
</template>

<script>
const ID_PEDIDO_STELO = 'id-pedido-stelo'
const CANAL = 'canal'
const CEP = 'cep'
const DOCUMENTO_COMPRADOR = 'document-comprador'
const NOME_RESPONSAVEL_VENDA = 'nome-responsavel-venda'

export default {
  data: () => ({
    selected: null,
    options: [
      { value: null, text: 'Tipo de pesquisa' },
      { value: ID_PEDIDO_STELO, text: 'Id Pedido Stelo' },
      { value: CANAL, text: 'Canal' },
      { value: CEP, text: 'CEP' },
      { value: DOCUMENTO_COMPRADOR, text: 'Doc. do Comprador' },
      { value: NOME_RESPONSAVEL_VENDA, text: 'Nome do Responsável pela Venda' },
    ]
  }),
  methods: {
    onChange (value) {
      let elSelect = this.$refs.salesmanSelect.$el
      let elInput = this.$el.querySelector('.salesman-input-search')

      console.log(value)

      elSelect.classList.remove('not-null')

      if (value != null && value != "") {
        elSelect.classList.add('not-null')
        elInput.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../styles/searchby';
</style>


