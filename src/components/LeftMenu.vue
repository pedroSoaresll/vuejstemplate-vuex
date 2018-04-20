<template>
	<!-- main left menu -->
  <div class="main-leftmenu">
		<!-- header -->
		<header class="header-menu">
			<img src="./../assets/logo.png" alt="Logo Stelo Beta">
		</header>

		<!-- menu list -->
		<ul class="list">
			<li class="item-list" 
					v-for="menu of listMenu" 
					:key="menu.name">
					
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
				name: 'Home',
				link: '/home',
				linkName: 'AdminHome',
				activated: true
			},
			{
				name: 'Home',
				link: '/home',
				linkName: 'AdminHome',
				activated: false
			},
			{
				name: 'Home',
				link: '/home',
				linkName: 'AdminHome',
				activated: false
			},
		]
	})
}
</script>

<style lang="scss" scoped>
@import './../styles/leftmenu.scss';
</style>


