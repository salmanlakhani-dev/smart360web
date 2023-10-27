<template>
	<section id="main-hero">
		<div class="mt-10">
			<div class="relative z-10 -mt-10 overflow-hidden lg:bg-left-top lg:py-10 bg-gradient-to-t from-purple-800 to-pink-500">
				<div class="mx-auto flex w-11/12 flex-col gap-16 md:gap-8 lg:flex-row z-10">
					<div class="order-last mx-auto flex flex-col justify-start md:mt-16 md:max-w-2xl md:justify-center md:pb-10 lg:order-first lg:mt-0 lg:w-6/12 lg:pr-8">
						<h1 class="text-md font-medium text-white uppercase" data-elastic-name="elastic_title">
							Cutting-Edge Salon, Wellness, and Fitness Management Solution
						</h1>
						<p class="mt-5 text-2xl font-bold tracking-tight text-white sm:text-5xl">Elevate Your Operations with a Smarter Business Approach.</p>
						<p class="mt-6 text-xl text-white">
							Empower Your Business with Seamless Online Bookings and Secure Payments. Let Smart360CRM Take the Reins, Allowing You to Thrive in Your Passion.
						</p>
						<div class="my-8 flex flex-col space-x-8 space-y-2 md:flex-col md:space-x-1 md:space-y-0">
							<a
								class="
									inline-flex
									items-center
									justify-center
									whitespace-nowrap
									rounded-2xl
									py-3
									px-6
									text-base
									font-semibold
									transition
									delay-150
									ease-in-out
									hover:-translate-y-[2px]
									md:mr-4
									text-white
									bg-black
									self-start
								"
								id="contact-sales"
								href="/pro/contact"
								>Embark on a Complimentary Trial<span class="mr-2 ml-2 inline-flex w-3"
									><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-8 w-8">
										<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg></span
							></a>
						</div>
					</div>
					<div class="max-w-xl">
						<img alt="" loading="lazy" class="w-full z-40" src="/images/fullwebcalendar.png" />
					</div>
				</div>
				<div class="transform rotate-180 text-white absolute -bottom-1 w-full" style="z-index: -1">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
						<path class="text-white fill-current" d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"></path>
					</svg>
				</div>
			</div>
		</div>
	</section>
</template>
<style></style>
<script>
export default {
	name: 'MainSection',
	components: {},
	mounted() {},
	computed: {},
	methods: {},
}
</script>
