<template>
	<img :src="imgSrc()" :alt="alt" :style="(width ? `width: ${width}px;` : ``) + (height ? `height: ${height}px;` : ``)">
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: false,
		},
		width: {
			type: Number,
			required: false,
		},
		height: {
			type: Number,
			required: false,
		},
	},
	methods: {
		imgSrc() {
			try {
				return require(`~/assets/images/${this.img}`);
			} catch (exception) {
				return null;
			}
		},
	},
}
</script>