<template>
	<MainSection />
	<OtherAll />
	<!-- <NumberCounter />
	<FeaturedCategories />
	<AllFeatures />
	<GrowWithUs />
	<SmartPayments />
	<Testimonials />
	<FeaturedIcons />
	<CustomerSupport />

	<TryCrm /> -->
</template>

<script>
import MainSection from '../components/pro/main_section.vue'
import NumberCounter from '../components/pro/number_counter.vue'
import FeaturedCategories from '../components/pro/featured_categories.vue'
import AllFeatures from '../components/pro/all_features.vue'
import GrowWithUs from '../components/pro/grow_with_us.vue'
import SmartPayments from '../components/pro/smart_payments.vue'
import Testimonials from '../components/pro/testimonials.vue'
import FeaturedIcons from '../components/pro/featured_icons.vue'
import CustomerSupport from '../components/pro/cus_support.vue'
import TryCrm from '../components/pro/trycrm.vue'
import OtherAll from '../components/pro/otherall.vue'

export default {
	components: {
		MainSection,
		NumberCounter,
		FeaturedCategories,
		AllFeatures,
		GrowWithUs,
		SmartPayments,
		Testimonials,
		FeaturedIcons,
		CustomerSupport,
		TryCrm,
		OtherAll,
	},
}
</script>
