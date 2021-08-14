<template>
	<div>
		<Markdown id="math-tools/top" />
		<br />
		<div class="border-2 table mb-2">
			<div class="border-b text-center p-1"><b>Table of Contents</b></div>
			<div class="p-1">
				<div>
					1. <b>Numbers in general</b>
					<div class="indent-2">
						<div>a. <GnounLink to="/math#gcf" >Greatest Common Factor</GnounLink></div>
					</div>
				</div>
				<div>
					2. <b>Analytic Geometry</b>
					<div class="indent-2">
						<div>
							A. Vectors
							<div class="indent-4">
							</div>
						</div>
						<div>
							B. Other
							<div class="indent-4">
							</div>
						</div>
					</div>
				</div>
				<div>3. <b>Complex Numbers</b></div>
				<div>4. <GnounLink to="/math#external-links" >External links</GnounLink></div>
			</div>
		</div>
		<Markdown id="math-tools/after-table-of-contents" />
		<ReturnToTop class="my-2" />
		<MathTool :tool="tools.gcf">
			<div>Number #1: <NumberInput :onUpdate="gcf1" /></div>
			<div>Number #2: <NumberInput :onUpdate="gcf2" /></div>
			<br />
			<div>GCF: {{ values.gcf.result }}</div>
		</MathTool>
		<hr class="my-3" />
		<Markdown id="math-tools/bottom" />
		<br />
		<ReturnToTop />
	</div>
</template>

<script>
export default {
	created() {
		this.$pageInfo(this, 'Math Tools', 'math');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
	methods: {
		gcf1(x) {
			this.values.gcf.p1 = x;
			this.gcf();
		},
		gcf2(x) {
			this.values.gcf.p2 = x;
			this.gcf();
		},
		gcf() {
			this.values.gcf.result = this.gcfInternal(this.values.gcf.p1, this.values.gcf.p2);
		},
		gcfInternal(p1, p2) {
			if (p1 == null || p2 == null) return null;
			if (p1 == 0) return p2;
			if (p2 == 0) return p1;
			let p3 = p1 % p2;
			return this.gcfInternal(p2, p3);
		},
	},
	data() {
		let values = {
			gcf: {
				p1: null,
				p2: null,
				result: null,
			}
		};
		return { values };
	},
	async asyncData({ $content, app }) {
		let toolsList = await $content(app.i18n.defaultLocale, 'math-tools/tools').fetch().catch(err => { return [] });
		if (app.i18n.defaultLocale !== app.i18n.locale) {
			try {
				const translatedPosts = await $content(app.i18n.locale, 'math-tools/tools').fetch();
				toolsList = toolsList.map(tool => {
					const translatedTool = translatedPosts.find(translated => translated.slug === tool.slug);
					return translatedTool || tool;
				});
			} catch (ignored) {
			}
		}
		let i = 0;
		let tools = {};
		for (let tool of toolsList) {
			tool.index = i;
			tools[tool.id] = tool;
			i++;
		}
		for (let [key] of Object.entries(tools)) {
			tools[key].list = tools;
		}
		return { tools, };
	},
}
</script>