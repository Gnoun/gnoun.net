<template>
	<div>
		<Markdown id="other/tbp-top" />
		<div class="grid grid-cols-4 gap-2 mt-2 mb-4 ml-5 mr-5">
			<div
				class="border-2 p-2"
				v-for="item in [
					{
						name: $t('tbp.general'),
						src: 'titles/tbp/magnifying-glass.png',
						link: '#about-the-project',
						desc: $t('tbp.desc.general'),
					},
					{
						name: $t('tbp.health'),
						src: 'titles/tbp/heart.png',
						link: '#health',
						desc: $t('tbp.desc.health'),
					},
					{
						name: $t('tbp.time_management'),
						src: 'titles/tbp/clock.png',
						link: '#time-management',
						desc: $t('tbp.desc.time_management'),
					},
					{
						name: $t('tbp.thoughts_emotions'),
						src: 'titles/tbp/brain.png',
						link: '#thoughts--emotions',
						desc: $t('tbp.desc.thoughts_emotions'),
					},
					{
						name: $t('tbp.organization'),
						src: 'titles/tbp/cogs.png',
						link: '#organization',
						desc: $t('tbp.desc.organization'),
					},
					{
						name: $t('tbp.communication'),
						src: 'titles/tbp/handshake.png',
						link: '#communication',
						desc: $t('tbp.desc.communication'),
					},
					{
						name: $t('tbp.creativity'),
						src: 'titles/tbp/bulb.png',
						link: '#creativity',
						desc: $t('tbp.desc.creativity'),
					},
					{
						name: $t('tbp.creative_activities'),
						src: 'titles/tbp/cog-bulb.png',
						link: '#creative-activities',
						desc: $t('tbp.desc.creative_activities'),
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
		<Markdown id="other/tbp" />
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'TBP', 'tbp');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>
