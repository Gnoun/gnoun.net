<template>
	<div>
		<Markdown id="music-top" class="mb-5" />
		<div
			v-for="peace in music"
			:key="peace.id"
		>
			<hr class="my-2" />
			<h3 class="mb-0">{{ peace.name }}</h3>
			<div class="font-medium text-xl">{{ peace.formattedDate }}</div>
			<audio class="my-1 border border-opacity-25" :src="`/music/${peace.file}.mp3`" controls></audio>
			<nuxt-content :document="peace"></nuxt-content>
		</div>
		<hr class="my-2" />
		<Markdown id="music-bottom" />
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Music', 'music');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
	async asyncData({ $allContentInDirectory }) {
		const music = await $allContentInDirectory('music');
		return { music, };
	},
}
</script>