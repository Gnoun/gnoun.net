<template>
	<div>
		◀— <GnounLink :to="url" class="z-40">{{ $t('other.backto') }}<span v-for="n in othersA" :key="n"> {{ $t('music.music') }}</span></GnounLink>
	</div>
</template>

<script>
export default {
	props: {
		others: {
			type: Number,
			default: 1,
		},
	},
	data() {
		let othersA = [];
		let url = '';
		for (let i = 0; i < this.others; i++) {
			othersA[i] = i;
			url += "/music";
		}
		return { othersA, url };
	},
};
</script>
