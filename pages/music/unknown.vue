<template>
    <div>
        <h2>{{ $t('music.titles.unknown') }}</h2>
        <div
			v-for="piece in music"
			:key="piece.id"
		>
			<hr class="my-2" />
			<h3 class="mb-0">{{ piece.name }}</h3>
			<div class="font-medium text-xl">{{ piece.formattedDate }}</div>
			<audio class="my-1 border border-opacity-25" :src="`/music/${piece.file}.mp3`" controls></audio>
			<nuxt-content :document="piece"></nuxt-content>
		</div>
		<hr class="my-2" />
    </div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, this.$t('common.tabs.music'), 'music');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
	async asyncData({ $allContentInDirectory }) {
		const music = await $allContentInDirectory('music/all', (song) => song.album == 'faceoff');
		return { music, };
	},
}
</script>
