<template>
  <div class="main-topbar">
		topbar aqui

		<!-- Item Menu -->
		<slot class="area-item-menu" name="item-menu"></slot>

		<!-- Sign Out -->
		<slot class="area-sign-out" name="sign-out"></slot>
	</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import './../styles/topbar.scss';
</style>


