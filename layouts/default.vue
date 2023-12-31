<template>
	<div class="bg-main min-h-screen text-main font-main text-base leading-tight">
		<div class="sticky top-0 h-14 bg-topbar z-50">
			<nav class="flex flex-row min-h-full">
				<div
					v-for="tab in tabs"
					:key="tab.id"
					class="min-h-full text-xl font-bold text-topbar cursor-pointer hover:bg-topbar-hover transition duration-150"
				>
					<GnounLink :to="tab.url" :styled="false" class="min-h-full flex transition duration-300" :class="{ 'bg-topbar-active': getCurrentTab() == tab.id }">
						<div class="my-auto px-6">{{ $t(`common.tabs.${tab.id}`) }}</div>
					</GnounLink>
				</div>
			</nav>
		</div>
		<div class="flex flex-row">
			<div class="sticky top-14 left-0 w-1/5 bg-sidenav px-5 overflow-auto" style="min-width: 220px; height: calc(100vh - 56px)">
				<h2>{{ $t('common.see_also.title') }}</h2>
				<div
					v-for="link in [
						{
							id: 'youtube',
							icon: { name: 'youtube.png', size: 60 },
							url: 'https://www.youtube.com/channel/UCQTNr0qQaqG9ZD209fip6uQ',
						},
						{
							id: 'discord',
							icon: { name: 'discord.png', size: 50 },
							url: 'https://discord.gg/S3hwYzCp8v',
						},
						/*{
							id: 'bitrium',
							icon: { name: 'bitrium.webp', size: 50 },
							url: '',
						},*/
						{
							id: 'beetmacol',
							icon: { name: 'beetmacol.png', size: 50 },
							url: 'https://beetmacol.com/',
						},
						{
							id: 'kubagliko',
							icon: { name: 'kubagliko_pl.png', size: 40 },
							url: 'https://glikopl.github.io/',
						},
						{
							id: 'github',
							icon: { name: 'github.png', size: 40 },
							url: 'https://github.com/Gnoun/gnoun.net',
						},
					]"
					:key="link.id"
					class="my-5"
				>
					<Link class="flex flex-row" :url="link.url">
						<img :src="require(`~/assets/images/${link.icon.name}`)" :style="`width: ${link.icon.size}px; height: ${link.icon.size}px; margin: ${(60-link.icon.size)/2}px`" />
						<div class="my-auto text-base font-bold">{{ $t(`common.see_also.${link.id}.title`) }}</div>
					</Link>
					<p class="mt-1">{{ $t(`common.see_also.${link.id}.summary`) }}</p>
				</div>
			</div>
			<main class="max-w-screen-lg mx-auto pt-2 flex-grow px-2 pb-4">
				<Nuxt />
			</main>
			<div class="sticky top-14 right-0 w-1/5 bg-sidenav px-5 overflow-auto" style="min-width: 220px; height: calc(100vh - 56px)">
				<h2>{{ $t('common.settings.title') }}</h2>
				<h3>{{ $t('common.settings.languages.title') }}</h3>
				<div class="grid grid-cols-3 mt-2 mb-4">
					<div
						v-for="language in [
							{
								name: 'English',
								flag: 'lang/en.png',
								locale: 'en',
							},
							{
								name: 'Spanish',
								flag: 'lang/es.png',
								locale: 'es',
							},
							{
								name: 'Russian',
								flag: 'lang/ru.png',
								locale: 'ru',
							},
							{
								name: 'Polish',
								flag: 'lang/pl.png',
								locale: 'pl',
							},
						]"
						:key="language.id"
					>
						<NuxtLink :to="switchLocalePath(language.locale)">
							<img :src="require(`~/assets/images/${language.flag}`)" :alt="language.name" style="width: 100px; height: 50px" class="border mx-1 mb-3" />
						</NuxtLink>
					</div>
				</div>
				<h4>{{ $t('common.settings.languages.unfinished') }}</h4>
				<div class="grid grid-cols-3 mt-2 mb-4">
					<div
						v-for="language in [
							{
								name: 'Ukrainian',
								flag: 'lang/ua.png',
								locale: 'ua',
							},
							{
								name: 'Daikova',
								flag: 'lang/skri-pruk.png',
								locale: 'dkv',
							},
						]"
						:key="language.id"
					>
						<NuxtLink :to="switchLocalePath(language.locale)">
							<img :src="require(`~/assets/images/${language.flag}`)" :alt="language.name" style="width: 100px; height: 50px" class="border mx-1 mb-3" />
						</NuxtLink>
					</div>
				</div>
				<h3>{{ $t('common.settings.soontm') }}</h3>
				<div class="absolute bottom-2">Copyright © 2020-2024 by Gnoun</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		getPageTitle() {
			return this.$store.state.pageTitle;
		},
		getCurrentTab() {
			return this.$store.state.currentTab;
		},
		debug(text) {
			console.log(text);
		},
	},
	data() {
		let tabs = [
			{ id: 'home', url: '/' },
			{ id: 'sup', url: '/sup' },
			{ id: 'math', url: '/math' },
			{ id: 'music', url: '/music' },
			{ id: 'other', url: '/other' },
		]
		return {
			tabs: tabs,
			currentTab: this.getCurrentTab(),
		};
	},
	head() {
		return {
			title: (this.getPageTitle() ? this.getPageTitle() + " | " : "") + this.$t('common.info'),
		}
	},
}
</script>
