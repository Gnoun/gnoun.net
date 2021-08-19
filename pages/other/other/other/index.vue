<template>
	<div>
        <BackToOther :others="2"></BackToOther>
        <br />
		<div class="text-3xl">
            <span v-for="n in 220" :key="n"><GnounLink :to="`/other/other/other/${n}`">{{ $t('other.other') }} </GnounLink></span>
        </div>
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Other Other Other', 'other');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>