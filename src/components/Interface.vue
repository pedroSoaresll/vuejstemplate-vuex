<template>
  <div class="main-interface">
		<!-- aside menu lateral -->
		<aside class="area-menu">
			<left-menu></left-menu>
		</aside>

		<!-- header -->
		<header class="header-interface">
			<!-- topbar -->
			<topbar>
				<!-- items menu -->
				<template slot="item-menu">

				</template>

				<!-- item sign out -->
				<template slot="sign-out">
					
				</template>
			</topbar>

			<!-- bread crumb -->
			<bread-crumb></bread-crumb>;
		</header>
	</div>
</template>

<script>
import Topbar from '@/components/Topbar'
import LeftMenu from '@/components/LeftMenu'
import BreadCrumb from '@/components/BreadCrumb'
export default {
  components: {
		Topbar,
		LeftMenu,
		BreadCrumb,
	}
}
</script>

<style lang="scss" scoped>
@import './../styles/interface.scss';
</style>



