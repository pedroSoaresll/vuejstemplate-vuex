<template>
  <div class="salesman-search-main">
    <!-- search -->
    <search v-on:searchself="searchState" v-on:searchSubmit="searchSubmit" :options="options">
      <!-- clear filter option -->
      <div slot="clearSearch" v-if="showClearFilter">
        <b-link @click="clearFilter" class="text-color-grey text-size-md">Limpar filtros</b-link>
      </div>
    </search>

    <!-- pesquisa detalhada -->
    <b-form v-if="showMore" class="mt-4 row d-flex align-items-end" @submit.prevent="onSubmit">
      <!-- data inicial -->
      <div class="col-md-2" role="group">
        <label for="t-data-inicial" class="color-grey">Data Inicial</label>
        <b-form-input :class="{'color-grey': form.dataInicial == ''}" v-model="form.dataInicial" type="date" id="t-data-inicial" />
      </div>

      <!-- data final -->
      <div class="col-md-2" role="group">
        <label class="color-grey" for="t-data-final">Data Final</label>
        <b-form-input :class="{'color-grey': form.dataFinal == ''}" v-model="form.dataFinal" type="date" id="t-data-final" />
      </div>

      <!-- bandeira -->
      <div class="col-md-2" role="group">
        <label class="color-grey" for="t-bandeira">Bandeira</label>
        <b-form-select :class="{'color-grey': form.bandeira == ''}" v-model="form.bandeira" :options="[{text: 'Elo', value:'bandeira-elo'}]" />
      </div>

      <!-- status -->
      <div class="col-md-2" role="group">
        <label class="color-grey" for="t-status">Status</label>
        <b-form-select :class="{'color-grey': form.status == ''}" v-model="form.status" :options="[{text: 'Ativo', value:'ativo'}, {text: 'Inativo', value: 'inativo'}]" />
      </div>

      <!-- valor -->
      <div class="col-md-2" role="group">
        <label class="color-grey" for="t-valor">Valor</label>
        <b-form-input :class="{'color-grey': form.valor == ''}" v-model="form.valor" id="t_input_price" type="text" />
      </div>

      <!-- pesquisar -->
      <div class="col-md-2">
        <b-button type="submit" class="button-purple" size="lg">Pesquisar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import Search from '@/components/shared/Search'

export default {
  components: {
    Search
  },
  props: ['showMore', 'showClearFilter'],
  data: () => ({
    options: [
      { value: null, text: 'Tipo de pesquisa' },
      { value: 'id-pedido-loja', text: 'ID Pedido Loja' },
      { value: 'doc-nsu', text: 'DOC/NSU' },
      { value: 'numero-serie', text: 'Nº de Série' },
      { value: 'cartao-final-quatro-ultimos-digitos', text: 'ID Vendedor' },
    ],
    form: {
      dataInicial: '',
      dataFinal: '',
      bandeira: '',
      status: '',
      valor: ''
    },
    elPrice: null,
    searchComponent: null
  }),
  methods: {
    searchSubmit (data) {
      console.log('resultado search:', data)

      if (!data.type || data.type == '') return
      if (!data.value || data.value == '') return

      this.$store.commit('searchtransaction/addType', data.type)
      this.$store.commit('searchtransaction/addValue', data.value)

      this.$router
        .push({ name: 'TransacoesMaquininhaConsulta', params: {
            search_type: encodeURI(data.type),
            search_value: encodeURI(data.value)
          }
        })
    },

    clearResults () {
      console.log('limpar pesquisa')
    },

    onSubmit (event) {
      this.form.valor = this.elPrice.val()
      let values = Object.values(this.form).filter(item => item != "")

      try {
        if (!values.length) throw Error("Opções de filtro detalhado vazio")

        // logic to detailed filter
        // ...
        
      } catch (e) {
        console.error(e.message)
      }
    },

    /** 
     * Dispara um evento para limpar os resultados
     * Limpa os filtros e resultados selecionados pelo usuário 
     * 
     * @return {void}
     */
    clearFilter () {
      this.$emit('clearInputSearch');
      this.$router.push({name: 'TransacoesMaquininha'});
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
  },
  mounted () {
    let elPrice = $("#t_input_price")
    this.elPrice = elPrice
    elPrice.maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: false});
  }
}
</script>

<style lang="scss" scoped>

</style>


