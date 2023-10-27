<template>
	<div class="bg-white">
		<div class="border-none flex flex-col lg:flex-row justify-center py-20 lg:pt-48">
			<div
				class="
					flex
					lg:flex-row
					p-6
					mx-4
					relative
					leading-8
					text-left text-gray-800
					bg-main-color-200
					rounded-3xl
					py-16
					md:pl-16
					lg:pl-20
					md:overflow-clip
					lg:overflow-visible
				"
			>
				<div class="flex flex-col gap-8 items-start md:w-1/2 sm:text-left md:mr-8">
					<div class="flex flex-col text-center md:text-left gap-2">
						<h2 class="text-4xl font-bold">Experience Smart360CRM at No Cost</h2>
						<p class="text-2xl font-normal normal-case">
							Sign up in Minutes. No Contracts, Cancellation Fees, Setup Charges, or Signup Costs. Enjoy Free Data Import.
						</p>
					</div>
					<div class="w-full">
						<div class="flex md:justify-start justify-center">
							<a
								id="start-free-trial"
								class="
									text-base
									flex
									text-normal
									justify-center
									items-center
									px-4
									h-12
									dark:text-white
									text-white
									rounded
									opacity-100
									cursor-pointer
									dark:bg-primary
									bg-gray-800
									transition
									ease-in-out
									delay-150
									hover:-translate-y-1 hover:scale-102 hover:shadow
									w-content
								"
								href="/pro/pricing"
								><div class="">Embark on a Complimentary Trial</div></a
							>
						</div>
					</div>
				</div>
				<div class="">
					<img
						alt=""
						loading="lazy"
						width="480"
						height="400"
						decoding="async"
						data-nimg="1"
						class="hidden bottom-0 md:inline-block md:absolute md:bottom-0 md:-right-0 lg:right-10 md:w-2/5 lg:w-[480px]"
						style="color: transparent"
						src="/images/appimage.webp"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
<script>
export default {
	name: 'TryCrm',
	components: {},
	mounted() {},
	computed: {},
	methods: {},
}
</script>
