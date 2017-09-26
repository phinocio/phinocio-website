<template>
	<v-app id="phinocio" toolbar footer dark>

		<v-navigation-drawer
			class="pb-0"
			persistent
			height="100%"
			clipped
			absolute
			enable-resize-watcher
			v-model="drawer"
			dark
		>
			<v-list dense>
				<v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
					<v-list-tile slot="item" @click="">
						<v-list-tile-action>
							<v-icon :class="item.class">{{ item.action }}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>{{ item.title }}</v-list-tile-title>
						</v-list-tile-content>
						<v-list-tile-action>
							<v-icon class="white--text">keyboard_arrow_down</v-icon>
						</v-list-tile-action>
					</v-list-tile>

					<v-list-tile router exact :to="subItem.route" v-for="subItem in item.items" v-bind:key="subItem.title">
						<v-list-tile-content>
							<v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
						</v-list-tile-content>
						<v-list-tile-action>
							<v-icon>{{ subItem.action }}</v-icon>
						</v-list-tile-action>
					</v-list-tile>		
				</v-list-group>
			</v-list>
		</v-navigation-drawer>

		<v-toolbar class="red accent-4" dark>
			<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title>Phinocio</v-toolbar-title>
			
			<v-spacer></v-spacer>
			
			<v-text-field
				label="Search..."
				single-line
				append-icon="search"
				dark
				hide-details
				class="hidden-sm-and-down"
			></v-text-field>
			
			<v-spacer></v-spacer>
			
			<v-toolbar-items class="hidden-sm-and-down">
      			<v-menu offset-y>
					<v-btn flat slot="activator">
						<v-icon>apps</v-icon>
					</v-btn>
					
					<v-list>
						<v-list-tile v-for="item in items" :key="item.title" @click="">
							<v-list-tile-title>{{ item.title }}</v-list-tile-title>
						</v-list-tile>
					</v-list>
				</v-menu>

				<v-menu offset-y>
					<v-btn flat slot="activator">
						<v-icon>notifications</v-icon>
					</v-btn>
					
					<v-list>
						<v-list-tile v-for="item in items" :key="item.title" @click="">
							<v-list-tile-title>{{ item.title }}</v-list-tile-title>
						</v-list-tile>
					</v-list>
				</v-menu>

				<v-btn flat slot="activator">
					sign in
				</v-btn>

    		</v-toolbar-items>
		</v-toolbar>
			
		<main>
			<v-container fluid>
					<router-view></router-view>
			</v-container>
		</main>
			
		<v-footer class="pa-3">
			<v-spacer></v-spacer>
			<div>Phinocio.com © 2017</div>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data () {
		return {
			drawer: true,

			items:	[
				{
					action: 'home',
					title: 'Phinocio',
					class: 'grey--text text--lighten-1',
					items: [
						{ title: 'Home', route: '/', exact: 'exact' },
						{ title: 'About', route: '/about' }
					]
				},
				{
					action: 'android',
					title: 'Android',
					class: 'green--text text--darken-3',
					items: [
						{ title: 'Tasker', route: '/android/tasker' },
						{ title: 'Misc', route: '/android/misc' }
					]
				},
				{
					action: 'terrain',
					title: 'NHL',
					class: 'blue--text text--darken-3',
					items: [
						{ title: 'Colorado Avalanche', route: '/nhl/colorado-avalanche' },
						{ title: 'Streamables', route: '/nhl/streamables' }
					]
				}
			]
		}
	}
}
</script>