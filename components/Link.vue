<template>
	<a class="text-link hover:underline" :href="url" target="_blank"><slot /></a>
</template>

<script>
export default {
	props: ['url']
}
</script>
