<template>
	<div class="p-5">
		<div class="flex flex-col lg:flex-row">
			<div class="flex flex-1 flex-col">
				<div class="p-2" v-for="(gOne, index) in allGalleryList.one">
					<img :src="this.$filters.getGalleryListImage(gOne)" alt="" class="rounded-lg shadow-lg w-full h-auto mb-2" />
					<div class="flex flex-row justify-between max-w-[90%] items-center">
						<p>{{ gOne.name }}</p>
						<p class="text-xs">{{ gOne.price ? '$' + gOne.price : '$$$' }}</p>
					</div>
					<p class="text-sm">{{ gOne.location }}</p>
					<p class="text-sm">{{ gOne.likes }}</p>
				</div>
			</div>
			<div class="flex flex-1 flex-col">
				<div class="p-2" v-for="(gOne, index) in allGalleryList.two">
					<img :src="this.$filters.getGalleryListImage(gOne)" alt="" class="rounded-lg shadow-lg w-full h-auto mb-2" />
					<div class="flex flex-row justify-between max-w-[90%] items-center">
						<p>{{ gOne.name }}</p>
						<p class="text-xs">{{ gOne.price ? '$' + gOne.price : '$$$' }}</p>
					</div>
					<p class="text-sm">{{ gOne.location }}</p>
					<p class="text-sm">{{ gOne.likes }}</p>
				</div>
			</div>
			<div class="flex flex-1 flex-col">
				<div class="p-2" v-for="(gOne, index) in allGalleryList.three">
					<img :src="this.$filters.getGalleryListImage(gOne)" alt="" class="rounded-lg shadow-lg w-full h-auto mb-2" />
					<div class="flex flex-row justify-between max-w-[90%] items-center">
						<p>{{ gOne.name }}</p>
						<p class="text-xs">{{ gOne.price ? '$' + gOne.price : '$$$' }}</p>
					</div>
					<p class="text-sm">{{ gOne.location }}</p>
					<p class="text-sm">{{ gOne.likes }}</p>
				</div>
			</div>
			<div class="flex flex-1 flex-col">
				<div class="p-2" v-for="(gOne, index) in allGalleryList.four">
					<img :src="this.$filters.getGalleryListImage(gOne)" alt="" class="rounded-lg shadow-lg w-full h-auto mb-2" />
					<div class="flex flex-row justify-between max-w-[90%] items-center">
						<p>{{ gOne.name }}</p>
						<p class="text-xs">{{ gOne.price ? '$' + gOne.price : '$$$' }}</p>
					</div>
					<p class="text-sm">{{ gOne.location }}</p>
					<p class="text-sm">{{ gOne.likes }}</p>
				</div>
			</div>
			<div class="flex flex-1 flex-col">
				<div class="p-2" v-for="(gOne, index) in allGalleryList.five">
					<img :src="this.$filters.getGalleryListImage(gOne)" alt="" class="rounded-lg shadow-lg w-full h-auto mb-2" />
					<div class="flex flex-row justify-between max-w-[90%] items-center">
						<p>{{ gOne.name }}</p>
						<p class="text-xs">{{ gOne.price ? '$' + gOne.price : '$$$' }}</p>
					</div>
					<p class="text-sm">{{ gOne.location }}</p>
					<p class="text-sm">{{ gOne.likes }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	watch: {},
	props: ['allGalleryList'],
	mounted() {},
	computed: {},
	methods: {},
}
</script>
