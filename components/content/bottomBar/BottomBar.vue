<template>
	<view class="bottom-bar">
		<view class="bar-list">
			<view class="bar-item" @click="adviserClick">
				<image src="http://localhost:3000/img/bottomBar/adviser.png" class="bar-img"></image>
				<text class="bar-text">家居顾问</text>
			</view>
			<view class="bar-item" @click="collectionClick">
				<image src="http://localhost:3000/img/bottomBar/collection.png" class="bar-img"></image>
				<text class="bar-text">收藏</text>
			</view>
			<view class="bar-item" @click="cartClick">
				<image src="http://localhost:3000/img/bottomBar/cart.png" class="bar-img"></image>
				<text class="bar-text">购物车</text>
			</view>
			<view class="bar-item" @click="addToCart">
				<text class="bar-text add-to-cart">加入购物车</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		components: {

		},
		onLoad() {


		},
		methods: {
			adviserClick(){
				console.log("家居顾问")
			},
			collectionClick(){
				console.log("收藏")
			},
			cartClick(){
				console.log("购物车")
			},
			addToCart(){
				console.log("加入购物车")
			}
		}
	}
</script>

<style scoped>
	.bottom-bar{
		width: 100%;
		height: 88rpx;
		
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		
		background-color: white;
	}
	.bar-list{
		display: flex;
		width: inherit;
		height: inherit;
	}
	
	.bar-item{
		flex: 1;
		text-align: center;
	}
	
	.bar-text{
		display: block;
	}
	
	.bar-img{
		display: block;
		width: 50rpx;
		height: 50rpx;
		margin: 0 auto;
	}
	
	.add-to-cart{
		line-height: 88rpx;
		color: white;
		background-color: #232E3D;
	}
</style>
