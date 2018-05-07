<template>
  <div class="search-order-main">
    <div class="row">
      <div class="col-md-6">
        <h5 class="text-title color-grey">Filtros por Transações na Maquininha</h5>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 filtros-vendedores mt-4 mb-3">
        <span class="text-specific-filter d-block mb-1 color-grey">Filtros Específicos</span>
        <search-order />
      </div>
    </div>
  </div>
</template>

<script>
import SearchOrder from '@/components/search-order/SearchOrder'
export default {
  components: {
    SearchOrder
  }
}
</script>
