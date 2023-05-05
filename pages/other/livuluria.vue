<template>
	<div>
		<Markdown id="other/livuluria" />
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Livuluria', 'other');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>