<template>
    <div>
        <Markdown id="other/changelog" />
    </div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Changelog', 'other');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>