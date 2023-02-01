<template>
    <div>
        <Markdown id="other/łowcy-niebios" />
    </div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Łowcy Niebios', 'other');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>