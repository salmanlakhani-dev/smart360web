<template>
	<div class="relative pb-12">
		<div class="absolute inset-x-0 bottom-0 h-1/2 bg-accent-color-50" />
		<HeadingBackground />
		<div class="mx-auto sm:px-6 lg:px-8">
			<div class="relative h-60 shadow-xl sm:rounded-2xl sm:overflow-hidden md:h-96 sm:h-72">
				<div class="absolute inset-0">
					<img :alt="this.$filters.transString(salon?.name)" :src="this.$filters.getFirstMediaUrl(salon)" class="object-cover w-full h-full" />
				</div>
			</div>
		</div>
	</div>
	<div class="relative px-4 bg-accent-color-50 sm:px-0">
		<div class="flex justify-between items-start pb-8 mx-auto sm:px-6 lg:px-8">
			<div class="flex-1 min-w-0">
				<h2 class="text-xl text-second-color-600 font-bold lg:text-4xl">
					{{ this.$filters.transString(salon?.name) }}
				</h2>
				<div class="inline-flex items-center">
					<div class="flex flex-shrink-0">
						<StarIcon v-for="i in Math.ceil(salon?.rate || 0)" :key="i" aria-hidden="true" class="w-5 h-5 text-yellow-400" />
						<StarIcon v-for="i in Math.floor(5 - (salon?.rate || 0))" :key="i" aria-hidden="true" class="w-5 h-5 text-gray-400" />
					</div>
					<div class="flex-1 py-1 min-w-0 text-sm text-right text-gray-500 sm:py-3">
						<span class="mx-2 font-medium text-gray-500">Reviews ({{ salon?.total_reviews }})</span>
					</div>
				</div>
			</div>
			<span class="px-4 py-0.5 rounded-md text-sm font-medium bg-main-color-600 text-white">
				{{ this.$filters.transString(salon?.salon_level?.name) }}
			</span>
		</div>
	</div>
</template>

<script>
import HeadingBackground from './partial/heading_background.vue'
import { StarIcon } from '@heroicons/vue/solid'

export default {
	name: 'Heading',
	components: { HeadingBackground, StarIcon },
	props: ['salon'],
}
</script>
