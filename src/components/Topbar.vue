<template>
  <div class="main-topbar w-100 text-white d-flex justify-content-end align-items-center">
		<!-- Item Menu -->
		<div class="area-item-menu col-md-11">
			<slot name="item-menu"></slot>
		</div>
		
		<!-- Sign Out -->
		<div class="area-sign-out col-md-1">
			<a class="link text-white" href="#">
				<span>Sair</span>
				<span class="oi oi-account-logout"></span>
			</a>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./../styles/topbar.scss";
</style>


