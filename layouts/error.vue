<template>
	<div>
		<div v-if="error.statusCode == 404">
			<h2>{{ $t('error.error') }}</h2>
			<h2>{{ $t('error.oops') }}!</h2>
			<p>{{ $t('error.desc1') }}<a href="home">{{ $t('error.here') }}</a>{{ $t('error.desc2') }}<a href="https://gnoun.net">{{ $t('error.here') }}</a>? {{ $t('error.desc3') }}</p>
			
			<MdImage img="labyrinth.png" ></MdImage>

			<br />

			<p>{{ $t('error.scinfo') }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'error'
	],
}
</script>