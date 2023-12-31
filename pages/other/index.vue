<template>
	<div>
		<Markdown id="other/index" />
		<div class="grid grid-cols-5 gap-2 mt-2 mb-4 ml-5 mr-5">
			<div
				class="border-2 p-2"
				v-for="item in [
					{
						name: $t('other.stories'),
						src: 'other/stories.png',
						link: 'other/stories',
						desc: $t('other.desc.stories'),
					},
					{
						name: $t('other.livuluria'),
						src: 'other/omakea.png',
						link: 'other/livuluria',
						desc: $t('other.desc.livuluria'),
					},
					{
						name: $t('other.daikova'),
						src: 'question.png',
						link: '',
						desc: $t('other.desc.daikova'),
					},
					{
						name: $t('other.łowcy_niebios'),
						src: 'other/łowcy-niebios.jpg',
						link: 'other/łowcy-niebios',
						desc: $t('other.desc.łowcy_niebios'),
					},
					{
						name: $t('other.danaikor'),
						src: 'other/danaikor.png',
						link: 'other/danaikor',
						desc: $t('other.desc.danaikor'),
					},
					{
						name: $t('other.self_improvement'),
						src: 'other/self-improvement.png',
						link: 'other/tbp',
						desc: $t('other.desc.self_improvement'),
					},
					{
						name: $t('other.system'),
						src: 'question.png',
						link: '',
						desc: $t('other.desc.system'),
					},
					{
						name: $t('other.fourdoors'),
						src: 'question.png',
						link: '',
						desc: $t('other.desc.fourdoors'),
					},
					{
						name: $t('other.drawing'),
						src: 'question.png',
						link: 'other/drawing',
						desc: $t('other.desc.drawing'),
					},
					{
						name: $t('other.about'),
						src: 'gnoun.png',
						link: 'other/about',
						desc: $t('other.desc.about'),
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
		<Markdown id="other/other_other" />

	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, this.$t('common.tabs.other'), 'other');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>
