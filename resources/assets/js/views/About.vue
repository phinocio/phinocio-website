<template>
	<div>
		<h1>About Page!</h1>
	</div>
</template>

<script>

export default {

	data () {
		return {
			title: 'Phinocio - About'
		}
	},

	created() {
		document.title = this.title;
	}
}

</script>