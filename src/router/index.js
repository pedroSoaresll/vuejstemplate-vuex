import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import InterfaceAdmin from '@/components/pages/Interface'

// pages
import HomePage from '@/components/pages/Home'
import SearchSalesmanPage from '@/components/pages/SearchSalesman'
import DocumentDetailPage from '@/components/pages/DocumentDetail'
import SearchMachineTransaction from '@/components/pages/SearchMachineTransaction'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AdminInterface',
      component: InterfaceAdmin,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: HomePage,
        },
        {
          path: '/pesquisa-vendedores',
          name: 'PesquisaVendedoresMain',
          component: SearchSalesmanPage,
        },
        {
          path: '/pesquisa-vendedores/:search_type,:search_value',
          name: 'PesquisaVendedores',
          component: SearchSalesmanPage,
        },
        {
          path: '/pesquisa-vendedores/documento/:id_detail',
          name: 'Detalhe',
          component: DocumentDetailPage
        },
        {
          path: '/transacoes-na-maquininha',
          name: "TransacoesMaquininha",
          component: SearchMachineTransaction
        },
        {
          path: '/pedidos',
          name: "AdminPedidos",
        },
        {
          path: '/taxas-e-tarifas',
          name: "AdminTaxasTarifas",
        },
        {
          path: '/taxas-e-tarifas-street',
          name: "AdminTaxasTarifasStreet",
        },
        {
          path: '/financeiro',
          name: "AdminFinanceiro",
        },
        {
          path: '/configuracoes',
          name: "AdminConfiguracoes",
        }
      ]
    }
  ]
})
