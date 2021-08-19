<template>
	<div>
		<Markdown id="other/other/archive" />
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Archive', 'other');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>