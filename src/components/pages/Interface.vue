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
						<transition name="fade">
							<router-view></router-view>
						</transition>
					</div>
				</section>
			</div>
		</section>
	</div>
</template>

<script>
import Topbar from "@/components/shared/Topbar";
import LeftMenu from "@/components/shared/LeftMenu";
import BreadCrumb from "@/components/shared/BreadCrumb";

// 
import Path from '@/models/Path'

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
	},
	beforeRouteUpdate (to, from, next) {
		// console.log('route to: ', to)
		// console.log('route from', from)

		// const toPath = new Path(to.name, to.path)
		// const fromPath = new Path(from.name, from.path)

		// console.log(toPath)
		// console.log(fromPath)

		// this.$store.commit('breadcrumb/add', toPath)
		
		return next()
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/interface.scss";
</style>



