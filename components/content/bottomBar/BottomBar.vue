<template>
	<view class="box">
		<view class="bottom-bar">
			<view class="bar-list">
				<view class="bar-item" @click="adviserClick">
					<image src="http://192.168.124.34:3000/img/bottomBar/adviser.png" class="bar-img"></image>
					<text class="bar-text">家居顾问</text>
				</view>
				<view class="bar-item" @click="collectionClick">
					<image src="http://192.168.124.34:3000/img/bottomBar/collection.png" class="bar-img"></image>
					<text class="bar-text">收藏</text>
				</view>
				<view class="bar-item" @click="cartClick">
					<image src="http://192.168.124.34:3000/img/bottomBar/cart.png" class="bar-img"></image>
					<text class="bar-text">购物车</text>
				</view>
				<view class="bar-item" @click.once()="addToCart">
					<text class="bar-text add-to-cart">加入购物车</text>
				</view>
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
				
					// 把该商品数据保存在数据库购物车表中
					// console.log(this.product)
					console.log("保存该商品数据到购物车表" + this.$store.state.product.name)
					uni.request({
						url: "http://192.168.124.34:3000/addToCart",
						method: "GET",
						data: this.$store.state.product,
						success: res => {
							console.log("请求成功")
							uni.showToast({
								title:"加入购物车成功！"
							})
						},
						fail: err => {
							console.log("请求失败")
						}
					})
					
			}
		}
	}
</script>

<style scoped>
	/* 占位 */
	.box{
		width: 100%;
		height: 88rpx;
	}
	
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
