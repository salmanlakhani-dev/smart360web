<template>
	<div class="max-w-7xl mx-auto space-y-8">
		<BookingsLoader v-if="bookings.length === 0" />
		<div class="calendar-container is-light-mode">
			<Qalendar :config="config" :events="events" />
			<!-- <Qalendar :config="config" :events="bookings">
				<template #monthEvent="monthEventProps">
					<router-link
						:class="[active ? 'bg-gray-100 text-second-color-600' : 'text-gray-700', 'block px-4 py-2 text-sm']"
						:to="{ name: 'Booking', params: { action: 'show', id: monthEventProps.eventData.id } }"
						as="a"
					>
						{{ monthEventProps.eventData.title }}
					</router-link>
				</template>
			</Qalendar> -->
		</div>
	</div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { DotsVerticalIcon } from '@heroicons/vue/outline'
import { createNamespacedHelpers } from 'vuex'
import BookingsLoader from './partial/bookings_loader.vue'
import { Qalendar } from 'qalendar'

const { mapState, mapActions } = createNamespacedHelpers('booking')

export default {
	name: 'BookingsCalendar',
	components: {
		BookingsLoader,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		DotsVerticalIcon,
		Qalendar,
	},
	computed: {
		...mapState(['bookings']),
	},
	data() {
		return {
			events: [
				// ...
				{
					title: 'Web Design Service',
					with: 'Sahil DIP',
					time: { start: '2024-02-24 12:05', end: '2024-02-24 13:35' },
					color: 'yellow',
					id: '753944708f0f',
				},
				{
					title: 'Spa Services',
					with: 'Curved By Daisy',
					time: { start: '2024-02-26', end: '2024-02-26' },
					color: 'green',
					id: '5602b6f589fc',
				},
				// ...
			],
			config: {
				week: {
					// Takes the value 'sunday' or 'monday'
					// However, if startsOn is set to 'sunday' and nDays to 5, the week displayed will be Monday - Friday
					startsOn: 'monday',
					// Takes the values 5 or 7.
					nDays: 7,
					// Scroll to a certain hour on mounting a week. Takes any value from 0 to 23.
					// This option is not compatible with the 'dayBoundaries'-option, and will simply be ignored if custom day boundaries are set.
				},
				month: {
					// Hide leading and trailing dates in the month view (defaults to true when not set)
					showTrailingAndLeadingDates: false,
				},
				// Takes any valid locale that the browser understands. However, not all locales have been thorougly tested in Qalendar
				// If no locale is set, the preferred browser locale will be used
				locale: 'us-EN',
				style: {
					// When adding a custom font, please also set the fallback(s) yourself
					fontFamily: 'Poppins',
				},
				// if not set, the mode defaults to 'week'. The three available options are 'month', 'week' and 'day'
				// Please note, that only day and month modes are available for the calendar in mobile-sized wrappers (~700px wide or less, depending on your root font-size)
				defaultMode: 'month',
				// The silent flag can be added, to disable the development warnings. This will also bring a slight performance boost
				isSilent: true,
				showCurrentTime: true, // Display a line indicating the current time
			},
		}
	},
	methods: {
		...mapActions(['getBookingsAction', 'incrementPage']),

		loadMoreBookings() {
			this.incrementPage()
			this.getBookingsAction()
		},
	},
}
</script>
<style>
@import 'qalendar/dist/style.css';
</style>
