<template>
  <b-form @submit.prevent="onSubmit" class="salesman-search-main row">
    <!-- select and input search -->
    <b-input-group :class="{'col-md-6': hasSlotClearSearch, 'col-md-9': !hasSlotClearSearch}">
      <b-form-select ref="salesmanSelect" @change="onChange" v-model="searchSelect" class="col-md-4 salesman-select" :options="options" />
      <b-form-input class="col-md-8 salesman-input-search" @input="onInput" v-model="searchInput" ref="salesmanInput" />
    </b-input-group>
    
    <!-- button search -->
    <div class="col-md-2">
      <b-button size="lg" type="submit" class="button-purple w-100">Pesquisar</b-button>
    </div>

    <!-- clear search -->
    <div class="col-md-2 d-flex align-items-center">
      <slot name="clearSearch"></slot>
    </div>
  </b-form>  
</template>

<script>

export default {
  props: ['options'],
  data: () => ({
    searchSelect: null,
    searchInput: '',
    // els
    elSelect: null,
    elInput: null
  }),
  computed: {
    hasSlotClearSearch () {
      return this.$slots.clearSearch;
    }
  },
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
          this.elSelect.focus();
          throw Error("Selecione um tipo de pesquisar.");
        }

        if (!this.searchInput) {
          this.elInput.focus();
          throw Error("Informe o que deseja pesquisar.");
        }

        // legado
        if (this.self && this.self.callbackSearch !== undefined) {
          this.self.callbackSearch({
            type: this.searchSelect,
            value: this.searchInput
          });
        }

        this.$emit('searchSubmit', {
          type: this.searchSelect,
          value: this.searchInput
        });
      } catch (e) {
        // preparar mensagem de erro na tela para o usuário
        console.error(e.message);
      }
    },
  },
  created () {
    if (this.$route.params.search_type)  this.searchSelect = this.$route.params.search_type;
    if (this.$route.params.search_value) this.searchInput = this.$route.params.search_value;
  },
  mounted () {
    this.elSelect = this.$refs.salesmanSelect.$el;
    this.elInput = this.$refs.salesmanInput.$el;

    this.$emit('searchself', this);
  }
}
</script>

<style lang="scss" scoped>
@import './../../styles/searchby';
</style>


