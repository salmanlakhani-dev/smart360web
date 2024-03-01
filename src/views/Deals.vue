<template>
	<div class="flex lg:flex-row flex-col">
		<div class="lg:w-2/4 w-full">
			<Heading
				heading="Exclusive Deals Across the USA"
				subHeading="Discover fantastic beauty and fitness coupons, discounts, and offers from the industry's finest. Quickly and easily book appointments below, whether in San Francisco, CA or anywhere across the USA!
				"
			/>
			<div class="bg-white">
				<div class="my-2 max-w-3xl mx-auto grid grid-cols-1 gap-10 px-6 lg:lg:grid-flow-col-dense lg:grid-cols-4">
					<div class="lg:col-span-4">
						<EServicesGrid :eServices="eServicesOfCategory" />
						<div v-if="eServicesOfCategory.length > 0" class="flex w-full py-12">
							<button
								class="
									relative
									mx-auto
									px-6
									py-2
									border border-gray-300
									shadow-sm
									text-base
									font-medium
									rounded-md
									text-gray-700
									bg-white
									hover:bg-gray-50
									focus:outline-none
								"
								type="button"
								@click="this.loadMoreEService()"
							>
								{{ $t('Load More...') }}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-2/4">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120044.34734965226!2d-122.53403690402662!3d37.754241433690964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1693491497660!5m2!1sen!2s"
				width="700"
				height="1000"
				style="border: 0"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</div>
</template>

<script>
import Heading from '../components/deals/heading.vue'
import GeneralFilter from '../components/deals/general_filter.vue'
import EServicesGrid from '../components/deals/e_services_grid.vue'
import PriceFilter from '../components/deals/price_filter.vue'
import { mapState, mapActions } from 'vuex'
import { FILTER_AVAILABILITY, FILTER_FEATURED, FILTER_POPULAR, FILTER_RATING } from '../utils/const'
export default {
	components: {
		Heading,
		EServicesGrid,
		GeneralFilter,
		PriceFilter,
	},

	watch: {
		$route() {
			this.resetPagination()
			this.loadEServices()
		},
	},
	mounted() {
		this.resetPagination()
		this.loadEServices()
	},

	computed: {
		...mapState('eService', {
			eServicesOfCategory: (state) => state.eServicesOfCategory,
		}),
	},
	methods: {
		...mapActions('eService', ['resetPagination', 'incrementPage', 'getSearchEServicesAction']),
		loadEServices() {
			this.getSearchEServicesAction({ keywords: '' })
		},
		loadMoreEService() {
			this.incrementPage()
			this.loadEServices()
		},
	},
}
</script>
