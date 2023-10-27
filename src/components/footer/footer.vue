<template>
	<footer aria-labelledby="footer-heading" class="theme-gradient">
		<h2 id="footer-heading" class="sr-only">Footer</h2>
		<div class="px-4 py-12 pb-2 lg:pb-3 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
			<div class="xl:grid xl:grid-cols-1 xl:gap-8">
				<div class="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-12 xl:mt-0 xl:col-span-2">
					<div>
						<div class="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" class="h-6 w-6 mr-2" viewBox="0 0 448 512">
								<path
									d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
								/>
							</svg>

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
							<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" class="h-6 w-6 mr-2" viewBox="0 0 512 512">
								<path
									d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
								/>
							</svg>
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
							<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" class="h-6 w-6 mr-2" viewBox="0 0 576 512">
								<path
									d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
								/>
							</svg>
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
							<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" class="h-6 w-6 mr-2" viewBox="0 0 640 512">
								<path
									d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z"
								/>
							</svg>
							<h3 class="text-lg font-medium tracking-wider text-white capitalize">Legal</h3>
						</div>
						<ul class="mt-4 space-y-2">
							<li>
								<a href="https://smart360crm.com/proapp/index.php/privacy-policy/" class="text-base text-white hover:text-accent-color-600"> Privacy Policy </a>
							</li>
							<li><a href="/help/5" class="text-base text-white hover:text-accent-color-600"> Terms and Conditions </a></li>
						</ul>
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
						<a href="/help/5"><img class="w-48" src="/images/download-app.png" /></a>
						<a href="/help/5"><img class="w-48" src="/images/download-play.png" /></a>
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
