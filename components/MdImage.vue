<template>
	<img :src="require(`~/assets/images/${img}`)" :alt="alt" :style="(width ? `width: ${width}px;` : ``) + (height ? `height: ${height}px;` : ``)">
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
}
</script>