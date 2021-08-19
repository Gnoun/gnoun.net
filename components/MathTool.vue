<template>
	<div>
		<hr class="my-3" />
		<a :id="tool.id" aria-hidden="true" tabindex="-1"></a><h2>{{ tool.name }}</h2>
		<iframe v-if="tool.graph" :src="`https://www.desmos.com/calculator/${tool.graph}?embed`" frameborder="0" class="border my-2" style="width: 250px; height: 250px;" />
		<slot />
		<br />
		<div class="my-2">{{ $t('math.common.expl') }}:</div>
		<nuxt-content :document="tool" />
		<div v-if="tool.readMore" class="mt-1">
			<Link :url="tool.readMore" class="">{{ $t('math.common.more') }}</Link>
		</div>
		<div v-if="seeAlso">
			<br />
			{{ $t('math.common.also') }}:
			<span v-for="otherTool of seeAlso" :key="otherTool.index">
				<GnounLink :to="`/math#${otherTool.entry.id}`">{{ otherTool.entry.name }}</GnounLink><span v-if="otherTool.index != seeAlso.length - 1">, </span>
			</span>
		</div>
		<ReturnToTop class="mt-4" />
	</div>
</template>

<script>
export default {
	props: {
		tool: {
			required: true,
		},
	},
	data() {
		let seeAlso = [];
		if (this.tool.seeAlso) {
			let i = 0;
			for (let otherToolId of this.tool.seeAlso) {
				if (this.tool.list[otherToolId]) {
					seeAlso[i] = {
						index: i,
						entry: this.tool.list[otherToolId], 
					};
					i++;
				}
			}
		} else {
			seeAlso = null;
		}
		if (seeAlso != null && seeAlso.length == 0) {
			seeAlso = null;
		}
		return { seeAlso };
	},
};
</script>