<template>
	<div>
		<Markdown id="math/index" />
		<div class="grid grid-cols-4 gap-2 mt-2 mb-4 ml-5 mr-5">
			<div
				class="border-2 p-2"
				v-for="item in [
					{
						name: $t('math.titles.graphs'),
						src: 'titles/graphs.png',
						link: 'math/graphs',
						desc: $t('math.desc.graphs'),
					},
					{
						name: $t('math.titles.tools'),
						src: 'titles/math-tools.png',
						link: 'math/tools',
						desc: $t('math.desc.tools'),
					},
					{
						name: $t('math.titles.data_graphs'),
						src: 'question.png',
						link: '',
						desc: $t('math.desc.data_graphs'),
					},
					{
						name: $t('math.titles.unknown'),
						src: 'question.png',
						link: '',
						desc: $t('math.desc.unknown'),
					},
				]"
				:key="item.id"
			>
				<NuxtLink class="flex flex-col mx-auto text-center items-center text-main" :to=item.link>
					<img :src="require(`~/assets/images/${item.src}`)" :alt="item.name" style="width: 150px; height: 150px" class="border mx-1 mb-3" />
					<div class="font-bold">{{ item.name }}</div>
					<div>{{ item.desc }}</div>
				</NuxtLink>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, this.$t('common.tabs.math'), 'math');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>
