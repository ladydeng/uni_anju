<template>
	<view class="safe-guard">
		<safe-guard-nav-bar />
		<safe-guard-content />
	</view>
</template>

<script>
	import SafeGuardNavBar from "./childComps/SafeGuardNavBar.vue"
	import SafeGuardContent from "./childComps/SafeGuardContent.vue"
	
	export default {
		data() {
			return {
				
			}
		},
		components:{
			SafeGuardNavBar,
			SafeGuardContent
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style>
</style>
