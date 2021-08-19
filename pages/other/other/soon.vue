<template>
	<div>
		<Markdown id="other/other/soon" />
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Things coming soon', 'other');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>