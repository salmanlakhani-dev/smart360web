<template>
	<Heading
		heading="Explore Styles Across the USA"
		subHeading="Find salons with the styles you desire all over the USA. Discover specialties and book appointments online effortlessly! Browse portfolios and check out available products for sale."
	/>
	<GalleryList :allGalleryList="allGalleryList" />
</template>

<script>
import Heading from '../components/gallery/heading.vue'
import GalleryList from '../components/gallery/galleryList.vue'

export default {
	components: {
		Heading,
		GalleryList,
	},
	watch: {},
	mounted() {},
	data() {
		return {
			allGalleryList: {
				one: [
					{
						image:
							'https://4cb8086abd64d84134c6-99c98a8033af288cefb052e3424b6763.ssl.cf2.rackcdn.com/Style/Original/25400934_39943$2018_03_11_21_40_25_2984.png',
						name: 'Maven & Co. Collective',
						location: 'Pleasanton, CA',
						likes: '24 Likes',
						price: 29.9,
					},
					{
						image:
							'https://f1422ffffc0cb6ae1458-0e385bc1cffc78f11d96a527ef93367a.ssl.cf2.rackcdn.com/Style/Original/1950392_5678_$2013_03_06_23_18_26_5178.jpg',
						name: 'Shauna Miller Studio Salon',
						price: 50.18,
						location: 'Citrus Heights, CA',
						likes: '16 Likes',
					},
					{
						image:
							'https://c89acfb108ff0743a397-cb5e68172a33fdedf4e94e495094baa9.ssl.cf2.rackcdn.com/Style/Original/25252523_46975_$2018_08_23_16_54_11_0608.jpeg',
						name: 'WOOD SALON',
						location: 'Berkeley, CA',
						likes: '10 Likes',
					},
					{
						image:
							'https://1851f8132c31064695ef-3cc5a106ca360b1fa9243460ed8cd8ef.ssl.cf2.rackcdn.com/Style/Original/New_40692912_96659$2018_07_15_15_16_09_8148.png',
						name: 'Casá De C.C. Salon and Extensions',
						location: 'Carmichael, CA',
						likes: '50 Likes',
					},
				],
				two: [
					{
						image:
							'https://f1422ffffc0cb6ae1458-0e385bc1cffc78f11d96a527ef93367a.ssl.cf2.rackcdn.com/Style/Original/1950392_5678_$2013_03_06_23_18_26_5178.jpg',
						name: 'Shauna Miller Studio Salon',
						location: 'Citrus Heights, CA',
						likes: '16 Likes',
					},

					{
						image:
							'https://4cb8086abd64d84134c6-99c98a8033af288cefb052e3424b6763.ssl.cf2.rackcdn.com/Style/Original/25400934_39943$2018_03_11_21_40_25_2984.png',
						name: 'Maven & Co. Collective',
						location: 'Pleasanton, CA',
						likes: '24 Likes',
					},
					{
						image:
							'https://1851f8132c31064695ef-3cc5a106ca360b1fa9243460ed8cd8ef.ssl.cf2.rackcdn.com/Style/Original/New_40692912_96659$2018_07_15_15_16_09_8148.png',
						name: 'Casá De C.C. Salon and Extensions',
						location: 'Carmichael, CA',
						likes: '50 Likes',
					},
					{
						image:
							'https://c89acfb108ff0743a397-cb5e68172a33fdedf4e94e495094baa9.ssl.cf2.rackcdn.com/Style/Original/25252523_46975_$2018_08_23_16_54_11_0608.jpeg',
						name: 'WOOD SALON',
						location: 'Berkeley, CA',
						likes: '10 Likes',
					},
				],
				three: [
					{
						image:
							'https://1851f8132c31064695ef-3cc5a106ca360b1fa9243460ed8cd8ef.ssl.cf2.rackcdn.com/Style/Original/New_40692912_96659$2018_07_15_15_16_09_8148.png',
						name: 'Casá De C.C. Salon and Extensions',
						location: 'Carmichael, CA',
						likes: '50 Likes',
					},

					{
						image:
							'https://c89acfb108ff0743a397-cb5e68172a33fdedf4e94e495094baa9.ssl.cf2.rackcdn.com/Style/Original/25252523_46975_$2018_08_23_16_54_11_0608.jpeg',
						name: 'WOOD SALON',
						location: 'Berkeley, CA',
						likes: '10 Likes',
					},
					{
						image:
							'https://4cb8086abd64d84134c6-99c98a8033af288cefb052e3424b6763.ssl.cf2.rackcdn.com/Style/Original/25400934_39943$2018_03_11_21_40_25_2984.png',
						name: 'Maven & Co. Collective',
						location: 'Pleasanton, CA',
						likes: '24 Likes',
					},
					{
						image:
							'https://f1422ffffc0cb6ae1458-0e385bc1cffc78f11d96a527ef93367a.ssl.cf2.rackcdn.com/Style/Original/1950392_5678_$2013_03_06_23_18_26_5178.jpg',
						name: 'Shauna Miller Studio Salon',
						location: 'Citrus Heights, CA',
						likes: '16 Likes',
					},
				],
				four: [
					{
						image:
							'https://c89acfb108ff0743a397-cb5e68172a33fdedf4e94e495094baa9.ssl.cf2.rackcdn.com/Style/Original/25252523_46975_$2018_08_23_16_54_11_0608.jpeg',
						name: 'WOOD SALON',
						location: 'Berkeley, CA',
						likes: '10 Likes',
					},

					{
						image:
							'https://1851f8132c31064695ef-3cc5a106ca360b1fa9243460ed8cd8ef.ssl.cf2.rackcdn.com/Style/Original/New_40692912_96659$2018_07_15_15_16_09_8148.png',
						name: 'Casá De C.C. Salon and Extensions',
						location: 'Carmichael, CA',
						likes: '50 Likes',
					},
					{
						image:
							'https://f1422ffffc0cb6ae1458-0e385bc1cffc78f11d96a527ef93367a.ssl.cf2.rackcdn.com/Style/Original/1950392_5678_$2013_03_06_23_18_26_5178.jpg',
						name: 'Shauna Miller Studio Salon',
						location: 'Citrus Heights, CA',
						likes: '16 Likes',
					},
					{
						image:
							'https://4cb8086abd64d84134c6-99c98a8033af288cefb052e3424b6763.ssl.cf2.rackcdn.com/Style/Original/25400934_39943$2018_03_11_21_40_25_2984.png',
						name: 'Maven & Co. Collective',
						location: 'Pleasanton, CA',
						likes: '24 Likes',
					},
				],
				five: [
					{
						image:
							'https://4cb8086abd64d84134c6-99c98a8033af288cefb052e3424b6763.ssl.cf2.rackcdn.com/Style/Original/25400934_39943$2018_03_11_21_40_25_2984.png',
						name: 'Maven & Co. Collective',
						location: 'Pleasanton, CA',
						likes: '24 Likes',
					},
					{
						image:
							'https://f1422ffffc0cb6ae1458-0e385bc1cffc78f11d96a527ef93367a.ssl.cf2.rackcdn.com/Style/Original/1950392_5678_$2013_03_06_23_18_26_5178.jpg',
						name: 'Shauna Miller Studio Salon',
						location: 'Citrus Heights, CA',
						likes: '16 Likes',
					},
					{
						image:
							'https://1851f8132c31064695ef-3cc5a106ca360b1fa9243460ed8cd8ef.ssl.cf2.rackcdn.com/Style/Original/New_40692912_96659$2018_07_15_15_16_09_8148.png',
						name: 'Casá De C.C. Salon and Extensions',
						location: 'Carmichael, CA',
						likes: '50 Likes',
					},

					{
						image:
							'https://c89acfb108ff0743a397-cb5e68172a33fdedf4e94e495094baa9.ssl.cf2.rackcdn.com/Style/Original/25252523_46975_$2018_08_23_16_54_11_0608.jpeg',
						name: 'WOOD SALON',
						location: 'Berkeley, CA',
						likes: '10 Likes',
					},
				],
			},
		}
	},
	computed: {},
	methods: {},
}
</script>
