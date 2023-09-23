<template>
    <div>
        <Markdown id="other/danaikor" />
    </div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Danaikor', 'danaikor');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>
