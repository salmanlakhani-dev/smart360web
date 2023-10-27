<template>
	<router-link
		:to="{ name: 'Category', params: { id: category.id } }"
		:style="{ backgroundImage: `url(${$filters.getFirstMediaUrl(category)})` }"
		class="relative group bg-white rounded-lg hover:shadow-lg overflow-hidden bg-cover bg-center"
	>
		<div class="py-10 px-6 h-full flex align-middle justify-center flex-col bg-black bg-opacity-30 hover:bg-opacity-60">
			<h3 class="text-2xl text-center text-white font-bold">
				{{ $filters.transString(category.name) }}
			</h3>
			<p class="mt-2 text-sm text-center text-white">
				{{ $filters.stripHtml($filters.transString(category.description)) }}
			</p>
		</div>
	</router-link>
</template>

<script>
export default {
	name: 'CategoryItem',
	props: ['category'],
}
</script>
