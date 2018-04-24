<template>
  <div class="main-interface container-fluid">
		<section class="row">
			<!-- aside menu lateral -->
			<aside class="area-menu bg-white w-100 col col-md-2">
				<left-menu></left-menu>
			</aside>
			
			<!-- main content -->
			<div class="col col-md-10">
				<!-- header -->
				<header class="interface-header row">
					<!-- topbar -->
					<topbar class="w-100 interface-topbar">
						<!-- items menu -->
						<template slot="item-menu">
							<ul class="d-flex align-items-center justify-content-end">
								<li class="link">Bem Vindo, User!</li>
							</ul>
						</template>
					</topbar>

					<!-- bread crumb -->
					<bread-crumb class="w-100 interface-breadcrumb" :itemsByProp="breadCrumb"></bread-crumb>
				</header>

				<!-- content -->
				<section class="row">
					<div class="col-md-12">
						<router-view></router-view>
					</div>
				</section>
			</div>
		</section>
	</div>
</template>

<script>
import Topbar from "@/components/Topbar";
import LeftMenu from "@/components/LeftMenu";
import BreadCrumb from "@/components/BreadCrumb";
export default {
  components: {
    Topbar,
    LeftMenu,
    BreadCrumb
	},
	data: () => ({
		breadCrumb: []
	}),
	created () {
		this.$store.commit('breadcrumb/reset')
	}
};
</script>

<style lang="scss" scoped>
@import "./../styles/interface.scss";
</style>



