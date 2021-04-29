<template>
	<view class="product-detail">
		<product-detail-info />
		<product-detail-comment />
		<product-detail-collection />
		<product-detail-recomend />
		<product-detail-base-info />

		<bottom-bar />
	</view>
</template>

<script>
	import BottomBar from "../../components/content/bottomBar/BottomBar.vue"
	import ProductDetailInfo from "./childComps/ProductDetailInfo.vue"
	import ProductDetailComment from "./childComps/ProductDetailComment.vue"
	import ProductDetailCollection from "./childComps/ProductDetailCollection.vue"
	import ProductDetailRecomend from "./childComps/ProductDetailRecomend.vue"
	import ProductDetailBaseInfo from "./childComps/ProductDetailBaseInfo.vue"

	export default {
		data() {
			return {
				product: ""
			}
		},
		components: {
			BottomBar,
			ProductDetailInfo,
			ProductDetailComment,
			ProductDetailCollection,
			ProductDetailRecomend,
			ProductDetailBaseInfo
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style>
</style>
