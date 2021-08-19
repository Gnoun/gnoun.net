<template>
	<div>
		<BackToOther></BackToOther>
		<h1>{{ $t('other.other') }} <Link url="https://gnoun.net/otter.jpg" :styled="false" :newTab="false">{{ $t('other.otter') }}</Link></h1>
		<Markdown id="other/other/index" />
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Other Other', 'other');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>