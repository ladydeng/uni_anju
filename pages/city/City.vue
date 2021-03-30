<template>
	<view class="select-city">
		<city-nav-bar />
		<city-list />
	</view>
</template>

<script>
	import CityNavBar from "./childComps/CityNavBar"
	import CityList from "./childComps/CityList"
	
	export default {
		data() {
			return {
				
			}
		},
		components:{
			CityNavBar,
			CityList
		},
		onLoad() {
			
			
		},
		methods: {

		}
	}
	
</script>

<style>
</style>
