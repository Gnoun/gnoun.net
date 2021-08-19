<template>
	<a :class="styled ? '' : 'text-main hover:no-underline'" :href="url" :target="newTab ? '_blank' : '_self'"><slot /></a>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			required: true,
		},
		styled: {
			type: Boolean,
			default: true,
		},
		newTab: {
			type: Boolean,
			default: true,
		},
	},
};
</script>
