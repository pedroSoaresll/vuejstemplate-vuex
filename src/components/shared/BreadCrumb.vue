<template>
	<div>
		<ol class="d-flex align-items-center justify-content-start breadcrumb breadcrumb-list col-md-12">
			<li v-for="item of items" 
				:key="item.name"
				:class="{'active': item.active}"
				:title="item.nivel"
				@click="item.goBack($router, $store)">{{ item.name }} {{ item.nivel}}</li>
		</ol>
	</div>
</template>

<script>
export default {
	computed: {
		items () {
			let listPaths =  this.$store.getters['breadcrumb/paths']
			return listPaths.length ? listPaths.map(path => path.getObject()) : []

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
@import '@/styles/breadcrumb.scss';
</style>


