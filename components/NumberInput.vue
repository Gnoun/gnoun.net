<template>
	<input type="number" @input="update($event)" class="w-16">
</template>

<script>
export default {
	methods: {
		update(event) {
			this.onUpdate(event.target.value);
		}
	},
	props: [ 'onUpdate' ],
}
</script>