<template>
	<div>
		<Markdown id="home" />
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Home', 'home');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>