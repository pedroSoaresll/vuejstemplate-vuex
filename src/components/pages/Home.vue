<template>
  <div class="row">
    <div class="col-md-8">
      <!-- search by salesman -->
      <Content title="Pesquisa por Vendedores" class="mb-4">
        <!-- content -->
        <div slot="content">
          <search-salesman></search-salesman>
        </div>
      </Content>

      <!-- search by machine transaction -->
      <Content title="Pesquisa por Transações na Maquininha" class="mb-4">
        <!-- content -->
        <div slot="content">
          <search-transaction></search-transaction>
        </div>
      </Content>

      <Content title="Pesquisa por Pedidos" class="mb-4">
        <!-- content -->
        <div slot="content">
          <search-order></search-order>
        </div>
      </Content>
    </div>
  </div>  
</template>

<script>
// components
import Content from '@/components/shared/Content'
import SearchSalesman from '@/components/search-salesman/SearchSalesman'
import SearchTransaction from '@/components/search-transaction/SearchTransaction'
import SearchOrder from '@/components/search-order/SearchOrder'

// models
import Path from '@/models/Path'

export default {
  components: {
    Content,
    SearchSalesman,
    SearchTransaction,
    SearchOrder
  },
  created () {
    
  }
}
</script>

<style lang="scss" scoped>
  
</style>

