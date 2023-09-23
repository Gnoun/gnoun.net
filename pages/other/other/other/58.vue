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
							if (this.$refs.password.value == "secret") {
								this.loading = false;
								this.resetPassword();
								this.feedback2(this.$t('sc.incorrect'), true);
								setTimeout(() => {
									if (!this.loading) {
										this.feedback("");
									}
								}, 8000);
							} else {
								if (this.$refs.password.value == "ABCDE") {
									window.location.href = "socks" }
								if (this.$refs.password.value == "abccab") {
									window.location.href = "in1b4" }
								if (this.$refs.password.value == "12345") {
									window.location.href = "im7b4" }
								if (this.$refs.password.value == "1234") {
									window.location.href = "їn7b4" }
								if (this.$refs.password.value == "cba") {
									window.location.href = "З4-b" }
								if (this.$refs.password.value == "1267650600228229401496703205376") {
									window.location.href = "indeх" }
								if (this.$refs.password.value == "dcba") {
									window.location.href = "../insects" }
								if (this.$refs.password.value == "Macol") {
									window.location.href = "b8-3" }
								if (this.$refs.password.value == "") {
									window.location.href = "indeex" }
								if (this.$refs.password.value == "tajne") {
									window.location.href = "../soon" }
								if (this.$refs.password.value == "więzienie") {
									window.location.href = "../../80" }
								if (this.$refs.password.value == "dupa") {
									window.location.href = "../../about" }
								if (this.$refs.password.value == "87654321") {
									window.location.href = "skerr" }
								if (this.$refs.password.value == "siedem") {
									window.location.href = "osiem" }
								if (this.$refs.password.value == "12") {
									window.location.href = "58" }
								if (this.$refs.password.value == "4321") {
									window.location.href = "../photоs" }
								if (this.$refs.password.value == "0123") {
									window.location.href = "seven" }
								if (this.$refs.password.value == "0000") {
									window.location.href = "../inseсts"
								if (this.$refs.password.value == "3210") {
									window.location.href = "../../tbx" }
								if (this.$refs.password.value == "1048576") {
									window.location.href = "57" }
								if (this.$refs.password.value == "secrets") {
									window.location.href = "../insects" }
								if (this.$refs.password.value == "") {
									window.location.href = "37-a" }
								if (this.$refs.password.value == "huon") {
									window.location.href = "34-b" }
								if (this.$refs.password.value == "../4") {
									window.location.href = "../secret" }
								if (this.$refs.password.value == "987654321") {
									window.location.href = "" }
								if (this.$refs.password.value == "CBA") {
									window.location.href = "soсks" }
								if (this.$refs.password.value == "987") {
									window.location.href = "58" }
								if (this.$refs.password.value == "1111") {
									window.location.href = "З4-b" }
								} else {
									this.loading = false;
									this.resetPassword();
									this.feedback2(this.$t('sc.incorrect'), true);
									setTimeout(() => {
										if (!this.loading) {
											this.feedback("");
										}
									}, 8000);
								}
							}
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
