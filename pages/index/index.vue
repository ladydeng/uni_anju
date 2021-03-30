<template>
	<view class="home">
		<index-nav-bar @select-city="selectCity" class="nav-bar"/>
		<banner />
		<view class="box"></view>
		
		<view class="content">
			<new-product />
			<view class="box"></view>
			
			<collocation />
			<view class="box"></view>
			
			<recomend />
		</view>
	</view>
</template>

<script>
	import IndexNavBar from "./childComps/IndexNavBar.vue"
	import Banner from "./childComps/Banner.vue"
	import NewProduct from "./childComps/NewProduct.vue" 
	import Collocation from "./childComps/Collocation.vue" 
	import Recomend from "./childComps/Recomend.vue" 
	
	export default {
		data() {
			return {
				
			}
		},
		components:{
			IndexNavBar,
			Banner,
			NewProduct,
			Collocation,
			Recomend
		},
		onLoad() {
			
		},
		methods: {
			// 监听事件并进行路由跳转
			selectCity(){
				// console.log("选择城市")
				uni.navigateTo({
					url:"/pages/city/City"
				})
			}
		}
	}
</script>

<style scoped>
	.home{
		color: #232e3d;
	}
	.content{
		padding: 0 20rpx;
	}
	.box{
		width: 100%;
		height: 10rpx;
		background: #f2f3f7;
		border-radius: 4rpx;
		margin-top: 15rpx;
		margin-bottom: 15rpx;
	}
</style>
