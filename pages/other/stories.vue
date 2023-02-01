<template>
	<div>
		<Markdown id="other/stories" />
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Other', 'other');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>