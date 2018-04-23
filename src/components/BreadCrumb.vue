<template>
	<div>
		<b-breadcrumb class="d-flex align-items-center justify-content-start breadcrumb-list col-md-12" :items="itemsByProp | items"></b-breadcrumb>
	</div>
</template>

<script>
export default {
	props: ['itemsByProp']
}
</script>

<style lang="scss" scoped>
@import './../styles/breadcrumb.scss';
</style>


