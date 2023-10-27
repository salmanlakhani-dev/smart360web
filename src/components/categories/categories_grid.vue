<template>
	<div class="px-4 py-20 bg-gray-100 sm:px-0">
		<CategoriesLoader v-if="allCategoriesWithSubcategories.length === 0" />
		<div v-else class="grid overflow-hidden gap-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-8">
			<router-link
				v-for="category in allCategoriesWithSubcategories"
				:key="category.id"
				:to="{ name: 'Category', params: { id: category.id } }"
				:style="{ backgroundImage: `url('${$filters.getFirstMediaUrl(category)}')` }"
				class="relative group rounded-lg hover:shadow-lg overflow-hidden bg-cover bg-center"
			>
				<div class="py-10 px-6 h-full flex align-middle justify-center flex-col bg-black bg-opacity-30 hover:bg-opacity-60">
					<h3 class="text-2xl text-center text-white font-bold">
						{{ $filters.transString(category.name) }}
					</h3>
					<p class="mt-2 text-sm text-center text-white">
						{{ $filters.stripHtml($filters.transString(category.description)) }}
					</p>
					<SubCategories :subCategories="category?.sub_categories || []" aria-hidden="true" />
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('category')

import SubCategories from './sub_categories.vue'
import CategoriesLoader from './partial/categories_loader.vue'

export default {
	components: { CategoriesLoader, SubCategories },
	mounted() {
		this.getAllWithSubCategoriesAction()
	},
	computed: {
		...mapState(['allCategoriesWithSubcategories']),
	},
	methods: {
		...mapActions(['getAllWithSubCategoriesAction']),
	},
}
</script>
