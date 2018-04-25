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
      { value: 'id-pedido-stelo', text: 'Id Pedido Stelo' },
      { value: 'canal', text: 'Canal' },
      { value: 'cep', text: 'CEP' },
      { value: 'document-comprador', text: 'Doc. do Comprador' },
      { value: 'nome-responsavel-venda', text: 'Nome do Responsável pela Venda' },
    ],
  }),
  methods: {
    callbackSearch (json) {
      console.log(`search order callback: ${json}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


