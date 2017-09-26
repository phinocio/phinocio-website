<template>
	<v-container grid-list-md fluid>
		<v-layout row wrap>
			<v-flex xs3>
            	<v-card>
              		<v-card-text>
				  		HOME
              		</v-card-text>
            	</v-card>
          	</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {

	data () {
		return {
			title: 'Phinocio - Home'
		}
	},

	created() {
		document.title = this.title;
	}
}
</script>