<template>
	<div>
		<Markdown id="other/other/photos" />
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Photos of Insects', 'other');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>