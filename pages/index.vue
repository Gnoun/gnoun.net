<template>
	<div>
		<Markdown id="home" />
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, this.$t('common.tabs.home'), 'home');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>
