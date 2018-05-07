import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import InterfaceAdmin from '@/components/pages/Interface'

// pages
import HomePage from '@/components/pages/Home'
import SearchSalesmanPage from '@/components/pages/SearchSalesman'
import DocumentDetailPage from '@/components/pages/DocumentDetail'
import SearchMachineTransaction from '@/components/pages/SearchMachineTransaction'
import TransactionMachineDetail from '@/components/pages/TransactionMachineDetail'
import Historic from '@/components/pages/Historic'
import SearchOrder from '@/components/pages/SearchOrder'

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

        // pesquisa vendedores
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

        // pesquisa por transações na maquininha
        {
          path: '/transacoes-na-maquininha/:search_type,:search_value',
          name: "TransacoesMaquininha",
          component: SearchMachineTransaction
        },{
          path: '/transacoes-na-maquininha',
          name: "TransacoesMaquininha",
          component: SearchMachineTransaction
        },
        {
          path: '/transacoes-na-maquininha/referencia/:id/detalhe',
          name: 'TransacoesMaquininhaDetalhe',
          component: TransactionMachineDetail
        },
        {
          path: 'historico/:id',
          name: 'Historico',
          component: Historic
        },

        // pedido
        {
          path: '/pedidos',
          name: "AdminPedidos",
          component: SearchOrder
        },

        // taxas e tarifas
        {
          path: '/taxas-e-tarifas',
          name: "AdminTaxasTarifas",
        },

        // taxas e tarifas street
        {
          path: '/taxas-e-tarifas-street',
          name: "AdminTaxasTarifasStreet",
        },

        // financeiro
        {
          path: '/financeiro',
          name: "AdminFinanceiro",
        },

        // configuração
        {
          path: '/configuracoes',
          name: "AdminConfiguracoes",
        }
      ]
    }
  ]
})
