<template>
  <div class="salesman-search-main">
    <div class="row">
      <div :class="{'col-md-8': showMore, 'col-md-12': !showMore}">
        <search v-on:searchSubmit="searchSubmit" :options="options" v-on:clearsearch="clearResults" />
      </div>
    </div>

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
  props: ['showMore'],
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
    elPrice: null
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
      } catch (e) {
        console.error(e.message)
      }
    },
  },

  beforeDestroy () {
    this.$store.commit('searchtransaction/addType', '')
    this.$store.commit('searchtransaction/addValue', '')
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


