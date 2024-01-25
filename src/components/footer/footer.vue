<template>
	<footer aria-labelledby="footer-heading" class="theme-gradient">
		<h2 id="footer-heading" class="sr-only">Footer</h2>
		<div class="px-4 py-12 pb-2 lg:pb-3 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
			<div class="xl:grid xl:grid-cols-1 xl:gap-8">
				<div class="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-12 xl:mt-0 xl:col-span-2">
					<div>
						<div class="flex items-center">
							<img class="h-10 w-10 mr-2" src="/images/features.gif" />
							<h3 class="text-lg font-medium tracking-wider text-white capitalize">Features</h3>
						</div>
						<ul class="mt-4 space-y-2">
							<li><a href="https://smart360crm.com/proapp/index.php/calendar/" class="text-base text-white hover:text-accent-color-600"> Calendar </a></li>
							<li>
								<a href="https://smart360crm.com/proapp/index.php/online-booking/" class="text-base text-white hover:text-accent-color-600"> Online Booking</a>
							</li>
							<li>
								<a href="https://smart360crm.com/proapp/index.php/payments/" class="text-base text-white hover:text-accent-color-600"> Payments</a>
							</li>
							<li>
								<a href="https://smart360crm.com/proapp/index.php/notifications/" class="text-base text-white hover:text-accent-color-600"> Notification</a>
							</li>
							<li>
								<a href="https://smart360crm.com/proapp/index.php/customer-tracking/" class="text-base text-white hover:text-accent-color-600">
									Customer Tracking</a
								>
							</li>
							<li>
								<a href="https://smart360crm.com/proapp/index.php/all-features/" class="text-base text-white hover:text-accent-color-600"> And More...</a>
							</li>
						</ul>
					</div>

					<div>
						<div class="flex items-center">
							<img class="h-10 w-10 mr-2" src="/images/contact.gif" />
							<h3 class="text-lg font-medium tracking-wider text-white capitalize">Help</h3>
						</div>
						<ul class="mt-4 space-y-2">
							<li>
								<a href="https://smart360crm.com/proapp/index.php/support/" class="text-base text-white hover:text-accent-color-600"> Help Center </a>
							</li>

							<li>
								<a href="/help/5" class="text-base text-white hover:text-accent-color-600"> FAQ</a>
							</li>
							<li>
								<a href="/help/5" class="text-base text-white hover:text-accent-color-600"> Sitemap</a>
							</li>
						</ul>
					</div>
					<div>
						<div class="flex items-center">
							<img class="h-10 w-10 mr-2" src="/images/about.gif" />
							<h3 class="text-lg font-medium tracking-wider text-white capitalize">About</h3>
						</div>
						<ul class="mt-4 space-y-2">
							<li>
								<a href="https://smart360crm.com/proapp/#reviews" class="text-base text-white hover:text-accent-color-600"> Reviews </a>
							</li>
							<li><router-link :to="{ name: 'About' }" class="text-base text-white hover:text-accent-color-600"> About us </router-link></li>
							<li>
								<router-link :to="{ name: 'Contact' }" class="text-base text-white hover:text-accent-color-600">Contact Us </router-link>
							</li>
						</ul>
					</div>
					<div>
						<div class="flex items-center">
							<img class="h-10 w-10 mr-2" src="/images/legal.gif" />
							<h3 class="text-lg font-medium tracking-wider text-white capitalize">Legal</h3>
						</div>
						<ul class="mt-4 space-y-2">
							<li>
								<a href="https://smart360crm.com/proapp/index.php/privacy-policy/" class="text-base text-white hover:text-accent-color-600"> Privacy Policy </a>
							</li>
							<li><a href="/help/5" class="text-base text-white hover:text-accent-color-600"> Terms and Conditions </a></li>
						</ul>
						<div class="flex row gap-3 mt-6">
							<a href="">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-white" viewBox="0 0 320 512">
									<path
										d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
									/>
								</svg>
							</a>
							<a href="">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-white" viewBox="0 0 448 512">
									<path
										d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
									/>
								</svg>
							</a>
						</div>
					</div>
					<!-- <div class="mt-12 md:mt-0">
						<h3 class="text-lg font-medium tracking-wider text-white capitalize">
							{{ $t('Help & Support') }}
						</h3>
						<ul class="mt-4 space-y-2">
							<li v-for="category in this.faqCategories" :key="category.id">
								<router-link :to="{ name: 'Help', params: { id: category.id } }" class="text-base text-white hover:text-accent-color-600">
									{{ this.$filters.transString(category.name) }}
								</router-link>
							</li>
						</ul>
					</div> -->
					<!-- <div class="mt-12 md:mt-0">
						<h3 class="text-lg font-medium tracking-wider text-white capitalize">
							{{ $t('Useful links') }}
						</h3>
						<ul class="mt-4 space-y-2">
							<li v-for="page in this.customPages" :key="page.id">
								<router-link :to="{ name: 'CustomPage', params: { id: page.id } }" class="text-base text-white hover:text-accent-color-600">
									{{ this.$filters.transString(page.title) }}
								</router-link>
							</li>
							<li>
								<router-link class="text-base text-white hover:text-accent-color-600" to="/help/5">
									{{ $t('Help & Support') }}
								</router-link>
							</li>
						</ul>
					</div> -->
				</div>
			</div>
			<div class="pt-8 mt-12 border-t border-gray-300 flex flex-col items-center">
				<div>
					<h3 class="font-medium mb-5 text-center text-white">
						Empower Your Business with Seamless Online Bookings and Secure Payments. Let Smart360CRM Take the Reins, Allowing You to Thrive in Your Passion.
					</h3>
					<div class="flex gap-2 items-center justify-center">
						<a href="https://play.google.com/store/apps/details?id=com.dip.smartcrm"><img class="w-40" src="/images/download-app.png" /></a>
						<a href="https://apps.apple.com/us/app/smart360-crm/id6470704454"><img class="w-40" src="/images/download-play.png" /></a>
					</div>
				</div>
				<p class="text-base mt-5 text-white xl:text-center">
					{{ $t('2022 SmarterVision - OnDemand Home Services') }}
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: 'HSFooter',
	mounted() {
		this.getFeaturedCategoriesAction()
		this.getCustomPagesAction()
		this.getCategoriesAction()
	},
	computed: {
		...mapState('category', {
			featuredCategories: (state) => state.featuredCategories.slice(0, 3),
		}),
		...mapState('customPage', {
			customPages: (state) => state.customPages.slice(0, 3),
		}),
		...mapState('faq', {
			faqCategories: (state) => state.categories.slice(0, 3),
		}),
	},
	methods: {
		...mapActions('category', ['getFeaturedCategoriesAction']),
		...mapActions('customPage', ['getCustomPagesAction']),
		...mapActions('faq', ['getCategoriesAction']),
	},
}
</script>
