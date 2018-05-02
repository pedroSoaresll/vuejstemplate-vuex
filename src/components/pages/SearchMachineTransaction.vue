<template>
  <div class="search-machine-transaction-main">
    <div class="row mb-4">
      <div class="col-md-6">
        <h5 class="text-title color-grey">Filtros por Transações na Maquininha</h5>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 filtros-vendedores mb-3">
        <span class="text-specific-filter d-block mb-1 color-grey">Filtros Específicos</span>
        <search-transaction :showMore="true" />
      </div>
    </div>

    <div class="divider"></div>

    <div class="row">
      <div class="col-md-12">
        <search-transaction-result />
      </div>
    </div>
  </div>
</template>

<script>
import SearchTransaction from './../search-transaction/SearchTransaction'
import SearchTransactionResult from './../search-transaction/SearchTransactionResult'

export default {
  components: {
    SearchTransaction,
    SearchTransactionResult
  }
}
</script>
