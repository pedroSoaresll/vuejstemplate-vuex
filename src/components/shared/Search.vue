<template>
  <div class="salesman-search-main">
    <b-form class="row" @submit.prevent="onSubmit">
      <b-input-group class="col-md-9">
        <b-form-select ref="salesmanSelect" @change="onChange" v-model="searchSelect" class="col-md-4 salesman-select" :options="options" />

        <b-form-input class="col-md-7 salesman-input-search" @input="onInput" v-model="searchInput" rel="salesmanInput" />
      </b-input-group>
      
      <b-button type="submit" class="col-md-2 button-purple">Pesquisar</b-button>
    </b-form>  
  </div>
</template>

<script>

export default {
  props: ['self', 'options'],
  data: () => ({
    searchSelect: null,
    searchInput: '',
    // els
    elSelect: null,
    elInput: null
  }),
  methods: {
    /** 
     * Quando mudar a opção de seleção
     * 
     * @param {string} value valor da opção selecionada
     * @return {void}
     */
    onChange (value) {
      this.elSelect.classList.remove('not-null')

      if (value != null && value != "") {
        this.elSelect.classList.add('not-null')
        this.elInput.focus()
      }
    },

    /** 
     * Listener de interação no campo de text
     * 
     * @param {string} value valor digitado até o momento
     * @return {void}
     */
    onInput (value) { if (value == '') this.$emit('clearsearch') },

    /** 
     * Envio do formulário
     * 
     * @param {event} event
     * @return {void}
     */
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

        // legado
        if (this.self && this.self.callbackSearch !== undefined) {
          this.self.callbackSearch({
            type: this.searchSelect,
            value: this.searchInput
          })
        }

        this.$emit('searchSubmit', {
          type: this.searchSelect,
          value: this.searchInput
        })
      } catch (e) {
        // preparar mensagem de erro na tela para o usuário
        console.error(e.message)
      }
    }
  },
  created () {
    if (this.$route.params.search_type)  this.searchSelect = this.$route.params.search_type
    if (this.$route.params.search_value) this.searchInput = this.$route.params.search_value
  },
  mounted () {
    this.elSelect = this.$refs.salesmanSelect.$el
    this.elInput = this.$el.querySelector('.salesman-input-search')
  }
}
</script>

<style lang="scss" scoped>
@import './../../styles/searchby';
</style>


