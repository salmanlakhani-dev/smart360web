<template>
	<Heading
		heading="Discover Professionals Across the USA"
		subHeading="Locate a skilled professional near you. Explore their specialties and effortlessly book appointments online anywhere in the USA! Browse through portfolios and explore available products."
	/>
	<ProfessionalList :allProfessionalList="allProfessionalList" />
</template>

<script>
import Heading from '../components/professionals/heading.vue'
import ProfessionalList from '../components/professionals/professionalList.vue'

export default {
	components: {
		Heading,
		ProfessionalList,
	},
	watch: {},
	mounted() {},
	data() {
		return {
			allProfessionalList: {
				one: [
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/15862169_31488_$2019_01_14_19_48_58_2538.jpg',
						pName: 'Jimmie Ashley Bohanon',
						sName: 'Maven & Co. Collective',
						location: 'Pleasanton, CA',
						reviews: 15,
						ratings: 4.5,
					},
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/7167308_16408_$2013_10_18_13_24_31_6075.jpg',
						sName: 'Hair by Maiko',
						location: 'Citrus Heights, CA',
						pName: 'Bruna Pantoja',
						reviews: 25,
						ratings: 4.8,
					},
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/67224593_128174_$2022_03_28_09_24_18_2910.jpeg',
						pName: 'Angela Vujkovic',
						sName: 'The Dance Loft SF',
						location: 'Berkeley, CA',
						reviews: 10,
						ratings: 2,
					},
					{
						image:
							'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/J7CMn_ServiceProvider$2017_07_17_22_33_03_7568.jpg',
						pName: 'Heather Jordan',
						sName: 'Hairetics Salon',
						location: 'Carmichael, CA',
						reviews: 6,
						ratings: 3.2,
					},
				],
				two: [
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/7167308_16408_$2013_10_18_13_24_31_6075.jpg',
						sName: 'Hair by Maiko',
						location: 'Citrus Heights, CA',
						pName: 'Bruna Pantoja',
						reviews: 25,
						ratings: 4.8,
					},
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/15862169_31488_$2019_01_14_19_48_58_2538.jpg',
						pName: 'Jimmie Ashley Bohanon',
						sName: 'Maven & Co. Collective',
						location: 'Pleasanton, CA',
						reviews: 15,
						ratings: 4.5,
					},
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/67224593_128174_$2022_03_28_09_24_18_2910.jpeg',
						pName: 'Angela Vujkovic',
						sName: 'The Dance Loft SF',
						location: 'Berkeley, CA',
						reviews: 10,
						ratings: 2,
					},
					{
						image:
							'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/J7CMn_ServiceProvider$2017_07_17_22_33_03_7568.jpg',
						pName: 'Heather Jordan',
						sName: 'Hairetics Salon',
						location: 'Carmichael, CA',
						reviews: 6,
						ratings: 3.2,
					},
				],
				three: [
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/67224593_128174_$2022_03_28_09_24_18_2910.jpeg',
						pName: 'Angela Vujkovic',
						sName: 'The Dance Loft SF',
						location: 'Berkeley, CA',
						reviews: 10,
						ratings: 2,
					},
					{
						image:
							'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/J7CMn_ServiceProvider$2017_07_17_22_33_03_7568.jpg',
						pName: 'Heather Jordan',
						sName: 'Hairetics Salon',
						location: 'Carmichael, CA',
						reviews: 6,
						ratings: 3.2,
					},
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/15862169_31488_$2019_01_14_19_48_58_2538.jpg',
						pName: 'Jimmie Ashley Bohanon',
						sName: 'Maven & Co. Collective',
						location: 'Pleasanton, CA',
						reviews: 15,
						ratings: 4.5,
					},
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/7167308_16408_$2013_10_18_13_24_31_6075.jpg',
						sName: 'Hair by Maiko',
						location: 'Citrus Heights, CA',
						pName: 'Bruna Pantoja',
						reviews: 25,
						ratings: 4.8,
					},
				],
				four: [
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/67224593_128174_$2022_03_28_09_24_18_2910.jpeg',
						pName: 'Angela Vujkovic',
						sName: 'The Dance Loft SF',
						location: 'Berkeley, CA',
						reviews: 10,
						ratings: 2,
					},
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/7167308_16408_$2013_10_18_13_24_31_6075.jpg',
						sName: 'Hair by Maiko',
						location: 'Citrus Heights, CA',
						pName: 'Bruna Pantoja',
						reviews: 25,
						ratings: 4.8,
					},
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/15862169_31488_$2019_01_14_19_48_58_2538.jpg',
						pName: 'Jimmie Ashley Bohanon',
						sName: 'Maven & Co. Collective',
						location: 'Pleasanton, CA',
						reviews: 15,
						ratings: 4.5,
					},
					{
						image:
							'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/J7CMn_ServiceProvider$2017_07_17_22_33_03_7568.jpg',
						pName: 'Heather Jordan',
						sName: 'Hairetics Salon',
						location: 'Carmichael, CA',
						reviews: 6,
						ratings: 3.2,
					},
				],
				five: [
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/15862169_31488_$2019_01_14_19_48_58_2538.jpg',
						pName: 'Jimmie Ashley Bohanon',
						sName: 'Maven & Co. Collective',
						location: 'Pleasanton, CA',
						reviews: 15,
						ratings: 4.5,
					},
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/7167308_16408_$2013_10_18_13_24_31_6075.jpg',
						sName: 'Hair by Maiko',
						location: 'Citrus Heights, CA',
						pName: 'Bruna Pantoja',
						reviews: 25,
						ratings: 4.8,
					},
					{
						image: 'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/67224593_128174_$2022_03_28_09_24_18_2910.jpeg',
						pName: 'Angela Vujkovic',
						sName: 'The Dance Loft SF',
						location: 'Berkeley, CA',
						reviews: 10,
						ratings: 2,
					},
					{
						image:
							'https://feb16f6c1af04f371f59-e326581eb23dccb5ba4725805de14ab5.ssl.cf2.rackcdn.com/Original/J7CMn_ServiceProvider$2017_07_17_22_33_03_7568.jpg',
						pName: 'Heather Jordan',
						sName: 'Hairetics Salon',
						location: 'Carmichael, CA',
						reviews: 6,
						ratings: 3.2,
					},
				],
			},
		}
	},
	computed: {},
	methods: {},
}
</script>
