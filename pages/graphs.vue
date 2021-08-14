<template>
	<div>
		<Markdown id="graphs-top" class="mb-5" />
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
					<iframe :src="`https://www.desmos.com/calculator/${graph.graph}?embed`" frameborder="0" class="border my-2" style="width: 500px; height: 500px;" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Graphs', 'graphs');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
	async asyncData({ $allContentInDirectory }) {
		const graphs = await $allContentInDirectory('graphs');
		return { graphs, };
	},
}
</script>