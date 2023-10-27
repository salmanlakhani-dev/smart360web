<template>
	<div class="p-5 max-w-5xl">
		<h2 class="text-2xl leading-5 font-bold text-second-color-600 sm:text-3xl md:text-4xl">
			{{ heading }}
		</h2>
		<p class="text-sm mt-2">
			{{ subHeading }}
		</p>
	</div>
</template>

<script>
export default {
	components: {},
	props: ['heading', 'subHeading'],
	computed: {},
	mounted() {},
	methods: {},
}
</script>
