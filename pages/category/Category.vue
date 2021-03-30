<template>
	<view class="category">
		<category-nav-bar />
		<category-tab-control />
	</view>
</template>

<script>
	import CategoryNavBar from "./childComps/CategoryNavBar.vue"
	import CategoryTabControl from "./childComps/CategoryTabControl.vue"
	
	export default {
		data() {
			return {
				
			}
		},
		components:{
			CategoryNavBar,
			CategoryTabControl
		},
		created() {
			
			
		},
		methods: {
	
		}
	}
	
</script>

<style>
</style>
