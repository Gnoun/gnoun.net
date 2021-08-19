<template>
    <div>
        <Markdown id="other/planning" />
    </div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Planning', 'other');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>