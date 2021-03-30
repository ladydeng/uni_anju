<template>
	<view class="new-product">
		<!-- <text class="title">本期新品</text> -->
		<view class="func">
			<text class="title">本期新品</text>
			<view class="more" @click="toNewProduct">
				<text>查看全部</text>
				<image src="http://localhost:3000/img/index/collocation/more.png" class="more-img"></image>
			</view>
		</view>
		<view class="product-list">
			<view class="product-item">
				<image src="http://localhost:3000/img/index/new_product/product_1.png" class="product-img"></image>
				<text class="product-name">
					藤椅沙发
				</text>
				<text class="product-decribe">
					户外藤椅沙发组合阳台休闲沙发客厅藤条沙发藤椅编家具
				</text>
				<text class="product-price">￥2590-5570</text>
			</view>
			<view class="product-item">
				<image src="http://localhost:3000/img/index/new_product/product_2.png" class="product-img"></image>
				<text class="product-name">
					贵妃椅
				</text>
				<text class="product-decribe">
					简约现代单人懒人布艺实木贵妃椅
				</text>
				<text class="product-price">￥980</text>
			</view>
			<view class="product-item">
				<image src="http://localhost:3000/img/index/new_product/product_3.png" class="product-img"></image>
				<text class="product-name">
					橡木床
				</text>
				<text class="product-decribe">
					美式乡村家具高档别墅拉扣软靠1.8m双人床橡木实木床
				</text>
				<text class="product-price">￥2180</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		components: {},
		created() {
	
		},
		methods: {
			// 跳到本期新品页面
			toNewProduct(){
				console.log("跳转")
				uni.navigateTo({
					url:"/pages/newProduct/NewProduct"
				})
			}
		},
		computed: {
	
		}
	}
</script>

<style>
	.func{
		display: flex;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.title,.more{
		flex: 1;
	}
	.more{
		text-align: right;
		color: #8a94a1;
		font-size: 32rpx;
	}
	.more-img{
		width: 20rpx;
		height: 20rpx;
		vertical-align: middle;
		
		margin-left: 10rpx;
	}
	.title{
		font-size: 20px;
	}
	/* .title{
		display: block;
		font-size: 20px;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	} */
	.product-list{
		display: flex;
	}
	
	.product-item{
		flex: 1;
		margin-left: 10rpx;
	}
	.product-name, .product-decribe, .product-price{
		display: block;
	}
	.product-name{
		/* font-size: 16px; */
	}
	
	.product-img{
		width: 230rpx;
		height: 184rpx;
	}
	.product-decribe{
		font-size: 14px;
		line-height: 40rpx;
		color: #8a94a1;
	}
	.product-price{
		font-size: 14px;
		color: red;
	}
</style>
