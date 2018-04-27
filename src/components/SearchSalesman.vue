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
      { value: 'cpf-cnpj', text: 'CPF/CNPJ' },
      { value: 'nome-fantasia', text: 'Nome Fantasia' },
      { value: 'nome-usuario', text: 'Nome do Usuário' },
      { value: 'id-vendedor', text: 'ID Vendedor' },
      { value: 'razao-social', text: 'Razão Social' },
    ],
  }),
  methods: {
    callbackSearch (objectSearchString) {
      // console.log(`search salesman callback: ${encodeURI(objectSearchString.type)}`)
      this.$router
        .push({ name: 'PesquisaVendedores', params: {
            search_type: encodeURI(objectSearchString.type),
            search_value: encodeURI(objectSearchString.value)
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


