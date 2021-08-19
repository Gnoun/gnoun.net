<template>
	<div class="text-link hover:underline cursor-pointer text-sm" v-on:click="scrollToTop">{{ $t('math.common.return') }}</div>
</template>

<script>
export default {
	methods: {
		scrollToTop() {
			window.scrollTo(0, 0);
		},
	},
}
</script>