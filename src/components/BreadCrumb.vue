<template>
	<div>
		<b-breadcrumb class="d-flex align-items-center justify-content-start breadcrumb-list col-md-12" :items="items"></b-breadcrumb>
	</div>
</template>

<script>
export default {
	computed: {
		items () {
			return this.$store.getters['breadcrumb/paths']

			// this.breadCrumb = [{
			//   text: 'Admin',
			//   href: '#'
			// }, {
			//   text: 'Manage',
			//   href: '#'
			// }, {
			//   text: 'Library',
			//   active: true
			// }]
		}
	},
}
</script>

<style lang="scss" scoped>
@import './../styles/breadcrumb.scss';
</style>


