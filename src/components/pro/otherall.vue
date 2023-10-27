<template>
	<!-- this is images carousel -->

	<div>
		<h2 class="py-5 lg:px-20 md:px-10 md:mx-20 font-bold text-4xl text-black text-center">
			Empowering You with Comprehensive Features for a <span class="text-second-color-600"> Elevated Experience </span>
		</h2>
		<div class="py-10 px-5 bg-gradient-to-t from-purple-800 to-pink-500">
			<Carousel
				class="my-5"
				dir="auto"
				:autoplay="5000"
				:items-to-show="1"
				:breakpoints="{
					700: {
						itemsToShow: 3,
						snapAlign: 'start',
					},
				}"
				:wrap-around="true"
			>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/001.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/002.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/003.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/004.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/005.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/006.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/007.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/008.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/009.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/010.jpg" />
				</Slide>
				<template #addons>
					<navigation class="hidden sm:flex" />
				</template>
			</Carousel>
			<Carousel
				class="my-5"
				dir="auto"
				:autoplay="5000"
				:items-to-show="1"
				:breakpoints="{
					700: {
						itemsToShow: 3,
						snapAlign: 'start',
					},
				}"
				:wrap-around="true"
			>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/s001.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/s002.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/s003.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/s004.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/s005.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/s006.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/s007.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/s008.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/s009.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/s010.jpg" />
				</Slide>
				<Slide class="relative w-full shadow-xl sm:overflow-hidden">
					<img class="w-full" src="/images/s011.jpg" />
				</Slide>
				<template #addons>
					<navigation class="hidden sm:flex" />
				</template>
			</Carousel>
		</div>
		<div class="p-10 flex items-center justify-center">
			<a href="#" class="inline-flex items-center bg-gradient-to-t from-purple-800 to-pink-500 p-5 rounded-2xl text-white">
				Book an Appointment
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-6 w-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
				</svg>
			</a>
		</div>
	</div>
	<!-- this is end of images carousel -->

	<!-- this is Optimize Your Operations with the Power of Smart360CRM section -->

	<div class="w-full">
		<div class="p-10">
			<h2 class="py-5 md:mx-20 font-bold text-4xl text-black text-center">
				Optimize Your Operations with the
				<span class="text-second-color-600"> Power of Smart360CRM </span>
			</h2>
			<h4 class="text-lg text-black font-light text-center">Smart360CRM is a full business solution for a wide range of business types.</h4>
		</div>
		<div class="flex flex-wrap lg:flex-row flex-col">
			<div class="flex lg:w-1/3 w-full h-52 items-start justify-end p-5 bg-contain bg-no-repeat" style="background-image: url('/images/bg001.png')">
				<h4 class="text-black font-medium w-52 text-center text-xl">Sports & Fitness</h4>
			</div>
			<div
				style="background-image: url('/images/bg002.png')"
				class="flex lg:w-1/3 w-full h-52 items-start justify-end p-5 bg-contain bg-no-repeat bg-second-color-600"
			>
				<h4 class="text-white font-medium w-52 text-center text-xl">Beauty and Wellness</h4>
			</div>
			<div style="background-image: url('/images/bg003.png')" class="flex lg:w-1/3 w-full h-52 items-start justify-end p-5 bg-contain bg-no-repeat">
				<h4 class="text-black font-medium w-52 text-center text-xl">Educational</h4>
			</div>
			<div
				style="background-image: url('/images/bg004.png')"
				class="flex lg:w-1/3 w-full h-52 items-start justify-end p-5 bg-contain bg-no-repeat bg-second-color-600"
			>
				<h4 class="text-white font-medium w-52 text-center text-xl">Events and Entertainment</h4>
			</div>
			<div style="background-image: url('/images/bg005.png')" class="flex lg:w-1/3 w-full h-52 items-start justify-end p-5 bg-contain bg-no-repeat">
				<h4 class="text-black font-medium w-52 text-center text-xl">Personal Meetings & Services</h4>
			</div>
			<div
				style="background-image: url('/images/bg006.png')"
				class="flex lg:w-1/3 w-full h-52 items-start justify-end p-5 bg-contain bg-no-repeat bg-second-color-600"
			>
				<h4 class="text-white font-medium w-52 text-center text-xl">Medical & Health Services</h4>
			</div>
		</div>
	</div>

	<!-- this is end Optimize Your Operations with the Power of Smart360CRM section -->

	<!-- start of Unlock the True Value of Time and Maximise Your Earnings with a Booked Calendar. -->

	<div class="w-full">
		<div class="p-10">
			<h2 class="py-5 md:mx-20 font-bold text-3xl text-black text-center">Unlock the True Value of Time and Maximise Your Earnings with a Booked Calendar.</h2>
			<div class="flex flex-col lg:flex-row gap-8">
				<div class="bg-gradient-to-t from-purple-800 to-pink-500 gap-3 flex items-center justify-center flex-col p-10 w-full lg:w-1/3 rounded-xl">
					<h2 class="text-center text-white font-bold text-7xl">20+</h2>
					<h3 class="text-center text-white font-medium text-md">Clients Searching For Your Business</h3>
				</div>
				<div class="bg-gradient-to-t from-purple-800 to-pink-500 gap-3 flex items-center justify-center flex-col p-10 w-full lg:w-1/3 rounded-xl">
					<h2 class="text-center text-white font-bold text-7xl">8%</h2>
					<h3 class="text-center text-white font-medium text-md">Growth In New Client Bookings</h3>
				</div>
				<div class="bg-gradient-to-t from-purple-800 to-pink-500 gap-3 flex items-center justify-center flex-col p-10 w-full lg:w-1/3 rounded-xl">
					<h2 class="text-center text-white font-bold text-7xl">174K</h2>
					<h3 class="text-center text-white font-medium text-md">Professionals On Smart360CRM</h3>
				</div>
			</div>
		</div>
	</div>

	<!-- end of Unlock the True Value of Time and Maximise Your Earnings with a Booked Calendar. -->

	<!-- start of reviews  -->

	<div class="w-11/12 m-auto">
		<div class="p-10">
			<h2 class="py-5 md:mx-20 font-bold text-4xl text-black text-center">Listen to the Rave Reviews from Our Valued Customers.</h2>
			<h4 class="text-lg text-black font-light text-center">DISCOVER SMART360CRM SUCCESS STORIES</h4>
		</div>

		<div class="flex flex-col lg:flex-row gap-5 mt-16">
			<div class="flex flex-col gap-4 p-6 w-full mb-32 lg:w-1/2 items-center justify-center rounded-md shadow-xl border">
				<img src="/images/review1.png" class="rounded-full h-36 w-36 object-cover -mt-20" alt="" />
				<h2 class="text-black text-center text-3xl font-bold">Nadine Bertalli</h2>
				<h3 class="text-second-color-500 font-medium text-lg">kinesiology & wellness Owner</h3>
				<p class="text-center font-medium text-black">
					“I simply love the SimplyBook.me online booking system! I run a small wellness clinic and the SimplyBook.me system saves me time and has streamlined
					my bookings. My clients really appreciate the convenience of seeing my calendar and booking easy to use and looks professional. I trialled a few
					different online booking systems but none were as impressive as SimplyBook.me.”
				</p>
				<div class="flex flex-row">
					<StarIcon v-for="i in [1, 2, 3, 4, 5]" :key="i" aria-hidden="true" class="w-7 h-7 text-second-color-500" />
				</div>
			</div>
			<div class="flex flex-col gap-4 p-6 w-full mb-32 lg:w-1/2 items-center justify-center rounded-md shadow-xl border">
				<img src="/images/review2.png" class="rounded-full h-36 w-36 object-cover -mt-20" alt="" />
				<h2 class="text-black text-center text-3xl font-bold">Jared Mandel</h2>
				<h3 class="text-second-color-500 font-medium text-lg">
					COO, Mandel Dermatology. New York’s premiere medical, cosmetic, and laser dermatology practice.
				</h3>
				<p class="text-center font-medium text-black">
					“The fact that SimplyBook.me was HIPAA compliant—which is an absolute must-have as a medical practice—as well as reasonably priced, easy to use,
					infinitely customizable, had a feature for seemingly every need, and was easy to integrate into our website was what sold us on SimplyBook.me,” states
					Jared.
				</p>
				<div class="flex flex-row">
					<StarIcon v-for="i in [1, 2, 3, 4, 5]" :key="i" aria-hidden="true" class="w-7 h-7 text-second-color-500" />
				</div>
			</div>
		</div>
		<div class="flex flex-row items-center gap-4 justify-center mt-20">
			<img src="/images/appleicon.webp" class="h-36 w-36" alt="" />
			<img src="/images/androidicon.webp" class="h-36 w-36" alt="" />
		</div>
	</div>

	<!-- end of reviews  -->

	<!-- start of Experience the Smart360CRM Booking System fo 30-days Free Trial! -->

	<div class="w-full mb-16">
		<div class="p-10">
			<h2 class="py-5 md:mx-20 font-bold text-4xl text-black text-center">
				Experience the Smart360CRM Booking System fo
				<span class="text-second-color-600"> 30-days Free Trial!</span>
			</h2>

			<h4 class="text-lg text-black font-light text-center">All key features included</h4>
		</div>
		<div class="flex gap-5 flex-col lg:flex-row w-10/12 m-auto justfy-center items-center">
			<div class="w-full lg:w-1/2">
				<img src="/images/3d-backgroud.jpg" class="w-full h-auto object-contain" alt="" />
			</div>
			<div class="w-full lg:w-1/2 flex flex-col justfy-center items-start gap-5">
				<p class="text-lg flex flex-row items-center gap-5">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-second-color-600" viewBox="0 0 448 512">
						<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
						/>
					</svg>
					Enjoy Unlimited Complimentary Bookings in the Trial Phase
				</p>
				<p class="text-lg flex flex-row items-center gap-5">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-second-color-600" viewBox="0 0 448 512">
						<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
						/>
					</svg>
					Access to Extensive Custom Features
				</p>
				<a href="#" class="inline-flex items-center bg-gradient-to-t from-purple-800 to-pink-500 p-5 rounded-2xl text-white">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-white mr-3" viewBox="0 0 512 512">
						<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
						/>
					</svg>

					TRY NOW
				</a>
			</div>
		</div>
	</div>

	<!-- end of Experience the Smart360CRM Booking System fo 30-days Free Trial! -->
</template>
<style></style>
<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { StarIcon } from '@heroicons/vue/solid'

export default {
	name: 'OtherAll',
	components: {
		Carousel,
		Slide,
		Navigation,
		StarIcon,
	},
	mounted() {},
	computed: {},
	methods: {},
}
</script>
