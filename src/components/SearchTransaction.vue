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
const ID_PEDIDO_LOJA = 'id-pedido-loja'
const DOC_NSU = 'doc-nsu'
const NUMERO_SERIE = 'numero-serie'
const CARTAO_FINAL_QUATRO_ULTIMOS_DIGITOS = 'cartao-final-quatro-ultimos-digitos'

export default {
  data: () => ({
    selected: null,
    options: [
      { value: null, text: 'Tipo de pesquisa' },
      { value: ID_PEDIDO_LOJA, text: 'ID Pedido Loja' },
      { value: DOC_NSU, text: 'DOC/NSU' },
      { value: NUMERO_SERIE, text: 'Nº de Série' },
      { value: CARTAO_FINAL_QUATRO_ULTIMOS_DIGITOS, text: 'ID Vendedor' },
    ]
  }),
  methods: {
    onChange (event) {
      let elSelect = this.$refs.salesmanSelect.$el
      let elInput = this.$el.querySelector('.salesman-input-search')

      elSelect.classList.remove('not-null')
      
      if (event != null && event != "") {
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


