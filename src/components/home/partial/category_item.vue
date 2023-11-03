<template>
	<router-link
		:to="{ name: 'Category', params: { id: category.id } }"
		:style="{ backgroundImage: `url(${$filters.getFirstMediaUrl(category)})` }"
		class="relative group bg-white rounded-lg hover:shadow-lg overflow-hidden bg-cover bg-center"
	>
		<div class="py-10 px-6 h-full flex align-middle justify-center flex-col z-20">
			<h3 class="text-2xl text-center text-white font-bold z-10 pointer-events-none">
				{{ $filters.transString(category.name) }}
			</h3>
			<p class="mt-2 text-sm text-center text-white z-10 pointer-events-none">
				{{ $filters.stripHtml($filters.transString(category.description)) }}
			</p>
		</div>
		<div class="absolute inset-0 bg-black bg-opacity-40 opacity-30 hover:opacity-75 z-0"></div>
	</router-link>
</template>

<script>
export default {
	name: 'CategoryItem',
	props: ['category'],
}
</script>
