<template>
	<view class="new-product">
	<new-product-nav-bar />
	<new-product-list />
	</view>
</template>

<script>
	import NewProductNavBar from "./childComps/NewProductNavBar.vue"
	import NewProductList from "./childComps/NewProductList.vue"
	
	export default {
		data() {
			return {}
		},
		components: {
			NewProductNavBar,
			NewProductList
		},
		onLoad() {
	
		},
		methods: {
	
		},
		computed: {
	
		}
	}
</script>
<style scoped>
	.new-product{
		color: #232e3d;
	}
</style>
