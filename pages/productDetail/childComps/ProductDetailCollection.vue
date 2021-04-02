<template>
	<view class="product-detail-collection">
		<view class="title">
			<text>生活家搭配</text>
		</view>
		<view class="collection-content">
			<image src="http://localhost:3000/img/product_detail/live_home_banner.png" class="collection-banner"></image>
			<view class="content-shop">
				<view class="content-shop-info">
					<image src="http://localhost:3000/img/product_detail/shop_img.png" class="shop-img"></image>
					<view class="shop-info">
						<text class="shop-name">橘子柠檬</text>
						<text class="shop-address">福州市.三盛国际公园</text>
					</view>
				</view>
				<view class="content-shop-view">
					<text>204人看过</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.product-detail-collection{
		padding: 0 15px;
		border-bottom: 30rpx solid #F2F3F7;
	}
	
	.title{
		font-size: 20px;
		line-height: 100rpx;
	}
	
	.content-shop{
		display: flex;
		padding: 20rpx 0;
	}
	
	.content-shop-info{
		flex: 7;
		display: flex;
	}
	
	.shop-info{
		padding-left: 10rpx;
	}
	
	.content-shop-view{
		flex: 3;
		line-height: 100rpx;
		text-align: right;
		color: #8A94A1;
		
		font-size: 14px;
	}
	
	.shop-name{
		display: block;
		font-size: 18px;
	}
	
	.shop-address{
		display: block;
		color: #8A94A1;
		font-size: 14px;
	}
	
	.collection-banner{
		width: 100%;
		height: 400rpx;
	}
	
	.shop-img{
		width: 100rpx;
		height: 100rpx;
		vertical-align: middle;
	}
</style>
