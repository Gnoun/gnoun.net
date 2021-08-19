export default ({ $content, app }, inject) => {
	inject('formatDateByLocale', (date) => {
		const currentLocale = app.i18n.locale || 'en';
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(date).toLocaleString(currentLocale, options);
	});
	inject('allContentInDirectory', async (directory) => {
		let posts = await $content(app.i18n.defaultLocale, directory).sortBy('date', 'desc').fetch().catch(err => { return [] });
		if (app.i18n.defaultLocale !== app.i18n.locale) {
			try {
				const translatedPosts = await $content(app.i18n.locale, directory).sortBy('date', 'desc').fetch();
				posts = posts.map(post => {
					const translatedPost = translatedPosts.find(translated => translated.slug === post.slug);
					return translatedPost || post;
				});
			} catch (ignored) {
			}
		}
		let i = 0;
		for (let post of posts) {
			post.index = i;
			if (!post.formattedDate) {
				post.formattedDate = app.$formatDateByLocale(post.date);
			}
			i++;
		}
		return posts;
	});
}

import Vue from 'vue';
import MdImage from '~/components/MdImage.vue';
Vue.component("MdImage", MdImage);
import BackToOther from '~/components/BackToOther.vue';
Vue.component("BackToOther", BackToOther);