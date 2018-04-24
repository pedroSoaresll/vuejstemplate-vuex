<template>
  <div class="salesman-search-main">
    <b-form class="row" @submit.prevent="onSubmit">
      <b-input-group class="col-md-9">
        <b-form-select ref="salesmanSelect" @change="onChange" v-model="searchSelect" class="col-md-4 salesman-select" :options="options" />

        <b-form-input class="col-md-7 salesman-input-search" v-model="searchInput" rel="salesmanInput" />
      </b-input-group>
      
      <b-button type="submit" class="col-md-2 button-submit">Pesquisar</b-button>
    </b-form>  
  </div>
</template>

<script>
const CPF_CNPJ = 'cpf-cnpj'
const NOME_FANTASIA = 'nome-fantasia'
const NOME_USUARIO = 'nome-usuario'
const ID_VENDEDOR = 'id-vendedor'
const RAZAO_SOCIAL = 'razao-social'

export default {
  data: () => ({
    searchSelect: null,
    searchInput: '',
    options: [
      { value: null, text: 'Tipo de pesquisa' },
      { value: CPF_CNPJ, text: 'CPF/CNPJ' },
      { value: NOME_FANTASIA, text: 'Nome Fantasia' },
      { value: NOME_USUARIO, text: 'Nome do Usuário' },
      { value: ID_VENDEDOR, text: 'ID Vendedor' },
      { value: RAZAO_SOCIAL, text: 'Razão Social' },
    ],
    // els
    elSelect: null,
    elInput: null
  }),
  methods: {
    onChange (value) {
      

      this.elSelect.classList.remove('not-null')

      if (value != null && value != "") {
        this.elSelect.classList.add('not-null')
        this.elInput.focus()
      }
    },

    onSubmit (event) {
      try {
        if (!this.searchSelect) {
          this.elSelect.focus()
          throw Error("Selecione um tipo de pesquisar.")
        }

        if (!this.searchInput) {
          this.elInput.focus()
          throw Error("Informe o que deseja pesquisar.")
        }
      } catch (e) {
        // preparar mensagem de erro na tela para o usuário
        console.error(e.message)
      }
    }
  },
  mounted () {
    this.elSelect = this.$refs.salesmanSelect.$el
    this.elInput = this.$el.querySelector('.salesman-input-search')
  }
}
</script>

<style lang="scss" scoped>
@import './../styles/searchby';
</style>


