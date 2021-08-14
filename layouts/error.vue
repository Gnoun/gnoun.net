<template>
	<div>
		<div v-if="error.statusCode == 404">
			Page not found
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'error'
	],
}
</script>