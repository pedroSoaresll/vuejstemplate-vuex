<template>
  <div class="salesman-search-main">
    <div class="row">
      <div :class="{'col-md-8': showMore, 'col-md-12': !showMore}">
        <search :self="this" :options="options" />
      </div>
    </div>

    <b-form v-if="showMore" class="mt-4 row d-flex align-items-end" @submit.prevent="onSubmit">
      <!-- pedido -->
      <div class="col-md-2" role="group">
        <label for="t-pedido" class="color-grey">Pedido</label>
        <b-form-input :class="{'color-grey': form.pedido == ''}" v-model="form.pedido" type="text" id="t-pedido" />
      </div>

      <!-- meio de pagamento -->
      <div class="col-md-2" role="group">
        <label for="t-meio-de-pagamento" class="color-grey">Meio de Pgto</label>
        <b-form-select id="t-meio-de-pagamento" :options="[{text: 'Escolha o meio de pagamento', value: ''}]" v-model="form.meioPagamento" />
      </div>

      <!-- Status -->
      <div class="col-md-2" role="group">
        <label for="t-status" class="color-grey">Status</label>
        <b-form-select id="t-status" :options="[{text: 'Escolha o status', value: ''}]" v-model="form.status" />
      </div>

      <!-- Canal -->
      <div class="col-md-2" role="group">
        <label for="t-canal" class="color-grey">Canal</label>
        <b-form-select id="t-canal" :options="[{text: 'Escolha o canal', value: ''}]" v-model="form.canal" />
      </div>

      <!-- Data da compra -->
      <div class="col-md-2" role="group">
        <label for="t-dataCompra" class="color-grey">Data da Compra</label>
        <b-form-input :class="{'color-grey': form.dataCompra == ''}" v-model="form.dataCompra" type="date" id="t-dataCompra" />
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
      { value: 'id-pedido-stelo', text: 'Id Pedido Stelo' },
      { value: 'canal', text: 'Canal' },
      { value: 'cep', text: 'CEP' },
      { value: 'document-comprador', text: 'Doc. do Comprador' },
      { value: 'nome-responsavel-venda', text: 'Nome do Responsável pela Venda' },
    ],

    form: {
      pedido: '',
      meioPagamento: '',
      status: '',
      canal: ''
    }
  }),
  methods: {
    /** 
     * Callback do search
     * 
     * @param {object} data
     * @return {void}
     */
    callbackSearch (data) {
      console.log('resultado search:', data)

      if (!data.type || data.type == '') return
      if (!data.value || data.value == '') return

      this.$store.commit('searchorder/addType', data.type)
      this.$store.commit('searchorder/addValue', data.value)

      this.$router
        .push({ name: 'PedidosResult', params: {
            search_type: encodeURI(data.type),
            search_value: encodeURI(data.value)
          }
        })
    },

    /** 
     * Callback submit pesquisa por detalhes
     * 
     * @param {Event} event
     * @return {void}
     */
    onSubmit (event) {
      console.log('submit acionado!')
    },
  },
}
</script>

<style lang="scss" scoped>

</style>


