<template>
	<div>
		<div
			v-for="post in posts"
			:key="post.id"
		>
			<h2>{{ post. title }} {{ post.formattedDate }}</h2>
			<nuxt-content :document="post" />
			<hr v-if="post.index != posts.length - 1" class="my-5" />
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		debug(text) {
			console.log(text);
		}
	},
	created() {
		this.$pageInfo(this, this.$t('common.tabs.sup'), 'sup');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
	async asyncData({ $allContentInDirectory }) {
		const posts = await $allContentInDirectory('sup');
		return { posts, };
	},
}
</script>
