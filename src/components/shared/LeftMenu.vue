<template>
	<!-- main left menu -->
  <div class="main-leftmenu">
		<!-- header -->
		<header class="header-menu d-flex justify-content-center">
			<img src="./../../assets/logo-stelo-admin.svg" alt="Logo Stelo Beta">
		</header>

		<!-- menu list -->
		<ul class="w-100 list">
			<li class="item-list" v-for="menu of listMenu" :key="menu.name">
				<router-link :to="{ name: menu.linkName }" :class="{'active': menu.activated}">{{ menu.name }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  data: () => ({
    listMenu: [
      {
        name: "Home",
        link: "/home",
        linkName: "Home",
        activated: false
      },
      {
        name: "Vendedores",
        link: "/pesquisa-vendedores",
        linkName: "PesquisaVendedoresMain",
        activated: false
      },
      {
        name: "Transações na Maquininha",
        link: "/transacoes-na-maquininha",
        linkName: "TransacoesMaquininha",
        activated: false
      },
      {
        name: "Pedidos",
        link: "/pedidos",
        linkName: "AdminPedidos",
        activated: false
      },
      {
        name: "Taxas e Tarifas",
        link: "/taxas-e-tarifas",
        linkName: "AdminTaxasTarifas",
        activated: false
      },
      {
        name: "Taxas e Tarifas (Street)",
        link: "/taxas-e-tarifas-street",
        linkName: "AdminTaxasTarifasStreet",
        activated: false
      },
      {
        name: "Financeiro",
        link: "/financeiro",
        linkName: "AdminFinanceiro",
        activated: false
      },
      {
        name: "Configurações",
        link: "/configuracoes",
        linkName: "AdminConfiguracoes",
        activated: false
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "@/styles/leftmenu.scss";
</style>


