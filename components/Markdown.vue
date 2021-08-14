<template>
	<div>
		<nuxt-content :document="content" />
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			content: null,
		};
	},
	async fetch() {
		try {
		this.content = await this.$content(`${this.$i18n.locale}/${this.id}`).fetch();
		} catch (error) {
			if (this.$i18n.defaultLocale !== this.$i18n.locale) {
				this.content = await this.$content(`${this.$i18n.defaultLocale}/${this.id}`).fetch();
			}
		}
	},
}
</script>