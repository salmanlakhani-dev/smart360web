<template>
	<div class="p-5">
		<div class="flex flex-col lg:flex-row">
			<div class="flex flex-1 flex-col">
				<div class="p-2" v-for="(gOne, index) in allProfessionalList.one">
					<img :src="this.$filters.getGalleryListImage(gOne)" alt="" class="rounded-lg shadow-lg w-full h-auto mb-2" />
					<p class="font-bold text-main-color-600 text-xl">{{ gOne.pName }}</p>
					<div class="flex text-yellow-400">
						<svg
							v-for="i in gOne.ratings == undefined ? [] : Math.ceil(gOne.ratings)"
							:key="i"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
						<svg
							v-for="i in gOne.ratings == undefined ? 5 : Math.floor(5 - gOne.ratings)"
							:key="i"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="rgba(0,0,0,0.3)"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
						<p class="ml-2 text-sm text-black">({{ gOne.reviews == undefined ? '0' : gOne.reviews }})</p>
					</div>

					<p>{{ gOne.sName }}</p>
					<p class="text-sm">{{ gOne.location }}</p>
				</div>
			</div>
			<div class="flex flex-1 flex-col">
				<div class="p-2" v-for="(gOne, index) in allProfessionalList.two">
					<img :src="this.$filters.getGalleryListImage(gOne)" alt="" class="rounded-lg shadow-lg w-full h-auto mb-2" />
					<p class="font-bold text-main-color-600 text-xl">{{ gOne.pName }}</p>
					<div class="flex text-yellow-400">
						<svg
							v-for="i in gOne.ratings == undefined ? [] : Math.ceil(gOne.ratings)"
							:key="i"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
						<svg
							v-for="i in gOne.ratings == undefined ? 5 : Math.floor(5 - gOne.ratings)"
							:key="i"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="rgba(0,0,0,0.3)"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
						<p class="ml-2 text-sm text-black">({{ gOne.reviews == undefined ? '0' : gOne.reviews }})</p>
					</div>
					<p>{{ gOne.sName }}</p>
					<p class="text-sm">{{ gOne.location }}</p>
				</div>
			</div>
			<div class="flex flex-1 flex-col">
				<div class="p-2" v-for="(gOne, index) in allProfessionalList.three">
					<img :src="this.$filters.getGalleryListImage(gOne)" alt="" class="rounded-lg shadow-lg w-full h-auto mb-2" />
					<p class="font-bold text-main-color-600 text-xl">{{ gOne.pName }}</p>
					<div class="flex text-yellow-400">
						<svg
							v-for="i in gOne.ratings == undefined ? [] : Math.ceil(gOne.ratings)"
							:key="i"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
						<svg
							v-for="i in gOne.ratings == undefined ? 5 : Math.floor(5 - gOne.ratings)"
							:key="i"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="rgba(0,0,0,0.3)"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
						<p class="ml-2 text-sm text-black">({{ gOne.reviews == undefined ? '0' : gOne.reviews }})</p>
					</div>
					<p>{{ gOne.sName }}</p>
					<p class="text-sm">{{ gOne.location }}</p>
				</div>
			</div>
			<div class="flex flex-1 flex-col">
				<div class="p-2" v-for="(gOne, index) in allProfessionalList.four">
					<img :src="this.$filters.getGalleryListImage(gOne)" alt="" class="rounded-lg shadow-lg w-full h-auto mb-2" />
					<p class="font-bold text-main-color-600 text-xl">{{ gOne.pName }}</p>
					<div class="flex text-yellow-400">
						<svg
							v-for="i in gOne.ratings == undefined ? [] : Math.ceil(gOne.ratings)"
							:key="i"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
						<svg
							v-for="i in gOne.ratings == undefined ? 5 : Math.floor(5 - gOne.ratings)"
							:key="i"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="rgba(0,0,0,0.3)"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
						<p class="ml-2 text-sm text-black">({{ gOne.reviews == undefined ? '0' : gOne.reviews }})</p>
					</div>
					<p>{{ gOne.sName }}</p>
					<p class="text-sm">{{ gOne.location }}</p>
				</div>
			</div>
			<div class="flex flex-1 flex-col">
				<div class="p-2" v-for="(gOne, index) in allProfessionalList.five">
					<img :src="this.$filters.getGalleryListImage(gOne)" alt="" class="rounded-lg shadow-lg w-full h-auto mb-2" />
					<p class="font-bold text-main-color-600 text-xl">{{ gOne.pName }}</p>
					<div class="flex text-yellow-400">
						<svg
							v-for="i in gOne.ratings == undefined ? [] : Math.ceil(gOne.ratings)"
							:key="i"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
						<svg
							v-for="i in gOne.ratings == undefined ? 5 : Math.floor(5 - gOne.ratings)"
							:key="i"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="rgba(0,0,0,0.3)"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
						<p class="ml-2 text-sm text-black">({{ gOne.reviews == undefined ? '0' : gOne.reviews }})</p>
					</div>
					<p>{{ gOne.sName }}</p>
					<p class="text-sm">{{ gOne.location }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { StarIcon } from '@heroicons/vue/solid'
export default {
	components: {},
	watch: {},
	props: ['allProfessionalList'],
	mounted() {},
	computed: {},
	methods: {},
}
</script>
