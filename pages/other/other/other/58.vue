<template>
	<div>
		<Markdown id="other/other/other/58" />
		<p class="indent-0">{{ $t('sc.enter') }}:</p>
		<input class="w-48" type="password" ref="password" id="test" /><br>
		<div class="flex flex-row">
			<button type="button" class="border" v-on:click="click()">{{ $t('sc.check') }}</button>
			<div ref="feedback" class="my-auto"></div>
		</div>
		<hr>
		<Markdown id="other/other/other/sc-info" />
	</div>
</template>

<script>
export default {
	data: {
		loading: false, 
	},
	methods: {
		feedback2(x, red) {
			this.$refs.feedback.innerHTML = x;
			if (red) {
				this.$refs.feedback.style.color = '#ee0000';
			} else {
				this.$refs.feedback.style.color = null;
			}
		},
		feedback(x) {
			this.feedback2(x, false);
		},
		resetPassword() {
			this.$refs.password.value = "";
		},
		click() {
			if (!this.loading) {
				if (this.$refs.password.value.length < 4) {
					this.feedback2(this.$t('sc.tooshort'), true);
					setTimeout(() => {
						if (!this.loading) {
							this.feedback("");
						}
					}, 4000);
				} else {
					this.loading = true;
					this.feedback(this.$t('sc.loading'));
					setTimeout(() => {
						this.feedback(this.$t('sc.processing'));
						setTimeout(() => {
							this.loading = false;
							this.resetPassword();
							this.feedback2(this.$t('sc.incorrect'), true);
							setTimeout(() => {
								if (!this.loading) {
									this.feedback("");
								}
							}, 8000);
						}, 3585/2);
					}, 5858/2);
				}
			}
		},
	},
	created() {
		this.$pageInfo(this, '???', 'other');
	},
	destroyed() {
		this.$resetPageInfo(this);
	},
}
</script>