import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import InterfaceAdmin from '@/components/Interface'

// pages
import HomePage from '@/components/pages/Home'
import SearchSalesmanPage from '@/components/pages/SearchSalesman'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AdminInterface',
      component: InterfaceAdmin,
      children: [
        {
          path: '/home',
          name: 'AdminHome',
          component: HomePage
        },
          {
            path: '/home/pesquisa-vendedores/:search_string',
            name: 'AdminPesquisaVendedores',
            component: SearchSalesmanPage
          },
          {
            path: '/home/pesquisa-vendedores/:search_string/:idDetail',
            name: 'AdminDetail',
            // component
          },
        {
          path: '/vendedores',
          name: "AdminVendedores",
        },
        {
          path: '/transacoes-na-maquininha',
          name: "AdminTransaçõesNaMaquininha",
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
