<template>
	<div>
		<BackToMath></BackToMath>
		<Markdown id="math/graphs-top" class="mb-5" />
		<div
			v-for="graph in graphs"
			:key="graph.id"
		>
			<hr class="my-2" />
			<div class="flex flex-row space-x-4">
				<div>
					<h2 class="mb-0">{{ graph.name }}</h2>
					<div class="font-medium text-2xl mb-5">{{ graph.formattedDate }}</div>
					<nuxt-content :document="graph"></nuxt-content>
				</div>
				<div>
					<iframe v-if="graph.graph" :src="`https://www.desmos.com/calculator/${graph.graph}?embed`" frameborder="0" class="border my-2" style="width: 512px; height: 512px;" />
					<iframe v-if="graph.video" :src="`https://www.youtube.com/embed/${graph.video}`" frameborder="0" style="width: 512px; height: 288px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, this.$t('common.tabs.graphs'), 'math');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
	async asyncData({ $allContentInDirectory }) {
		const graphs = await $allContentInDirectory('math/graphs');
		return { graphs, };
	},
}
</script>
