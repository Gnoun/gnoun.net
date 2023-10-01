<template>
	<div>
		<Markdown id="music/music-top" />
		<div class="grid grid-cols-4 gap-2 mt-2 mb-4 ml-5 mr-5">
			<div
				class="border-2 flex p-2"
				v-for="item in [
					{
						name: $t('music.titles.early_works'),
						src: 'titles/early-works.png',
						link: 'music/early_works',
						desc: $t('music.desc.early_works'),
					},
					{
						name: $t('music.titles.mpd'),
						src: 'question.png',
						link: 'music/mpd',
						desc: $t('music.desc.mpd'),
					},
					{
						name: $t('music.titles.gon_guon'),
						src: 'question.png',
						link: 'music/gon_guon',
						desc: $t('music.desc.gon_guon'),
					},
					{
						name: $t('music.titles.unknown'),
						src: 'question.png',
						link: 'music/unknown',
						desc: $t('music.desc.unknown'),
					},
				]"
				:key="item.id"
			>
				<NuxtLink class="mx-auto text-center text-main" :to=item.link>
					<img :src="require(`~/assets/images/${item.src}`)" :alt="item.name" style="width: 150px; height: 150px" class="border mx-1 mb-3" />
					<div class="font-bold">{{ item.name }}</div>
					<div class="font-normal">{{ item.desc }}</div>
				</NuxtLink>
			</div>
		</div>
		<h2>{{ $t('music.chronological') }}</h2>
		<div
			v-for="piece in music"
			:key="piece.id"
		>
			<hr class="my-2" />
			<h3 class="mb-0">{{ piece.name }}</h3>
			<div class="font-medium text-xl">{{ piece.formattedDate }}</div>
			<audio class="my-1 border border-opacity-25" :src="`/music/${piece.file}.flac`" controls></audio>
			<nuxt-content :document="piece"></nuxt-content>
		</div>
		<hr class="my-2" />
		<Markdown id="music/music-bottom" />
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
		const music = await $allContentInDirectory('music/all');
		return { music, };
	},
}
</script>
