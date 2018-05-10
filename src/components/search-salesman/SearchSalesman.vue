<template>
  <div class="salesman-search-main">
    <!-- search -->
    <search v-on:searchself="searchState" v-on:searchSubmit="callbackSearch" :options="options">
      <!-- clear filter option -->
      <div slot="clearSearch" v-if="showClearFilter">
        <b-link @click="clearFilter" class="text-color-grey text-size-md">Limpar filtros</b-link>
      </div>
    </search>
  </div>
</template>

<script>
import Search from '@/components/shared/Search'

export default {
  components: {
    Search
  },
  props: ['showClearFilter'],
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

    /** 
     * listener acionado quando preiosado o botão pesquisar do componente "Search"
     * 
     * @return {void}
     */
    callbackSearch (objectSearchString) {
      // console.log(`search salesman callback: ${encodeURI(objectSearchString.type)}`)

      if (!objectSearchString.type || objectSearchString.type == '') return;
      if (!objectSearchString.value || objectSearchString.value == '') return;

      this.$store.commit('searchsalesman/addType', objectSearchString.type);
      this.$store.commit('searchsalesman/addValue', objectSearchString.value);

      this.$router
        .push({ name: 'PesquisaVendedores', params: {
            search_type: encodeURI(objectSearchString.type),
            search_value: encodeURI(objectSearchString.value)
          }
        });
    },

    /** 
     * Dispara um evento para limpar os resultados
     * Limpa os filtros e resultados selecionados pelo usuário 
     * 
     * @return {void}
     */
    clearFilter () {
      this.$emit('clearInputSearch');
      this.$router.push({name: 'PesquisaVendedoresMain'});
      this.searchComponent.$refs.salesmanInput.$el.value = '';
    },

    /** 
     * Armazena o stado do componente filho
     * 
     * @param {VueComponent} searchComponent
     * @return {void}
     */
    searchState (searchComponent) {
      this.searchComponent = searchComponent;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


