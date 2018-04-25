<template>
  <div class="salesman-search-main">
    <search :self="this" :options="options" />
  </div>
</template>

<script>
import Search from './Search'

export default {
  components: {
    Search
  },
  data: () => ({
    options: [
      { value: null, text: 'Tipo de pesquisa' },
      { value: 'id-pedido-loja', text: 'ID Pedido Loja' },
      { value: 'doc-nsu', text: 'DOC/NSU' },
      { value: 'numero-serie', text: 'Nº de Série' },
      { value: 'cartao-final-quatro-ultimos-digitos', text: 'ID Vendedor' },
    ],
  }),
  methods: {
    callbackSearch (json) {
      console.log(`search transaction callback: ${json}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


