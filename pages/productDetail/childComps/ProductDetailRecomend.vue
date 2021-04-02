<template>
	<view class="product-detail-recomend">
		<view class="title">
			<text>相似推荐</text>
		</view>
		<view class="product-list">
			<view class="product-row">
				<view class="product-item margin-right">
					<image src="http://localhost:3000/img/product_detail/recomend03.png" class="product-img"></image>
					<text class="product-name">比邻沙发</text>
					<text class="product-describe">意大利经典设计 鹅绒填充</text>
					<text class="product-price">￥1350-7580</text>
				</view>
				<view class="product-item">
					<image src="http://localhost:3000/img/product_detail/recomend04.png" class="product-img"></image>
					<text class="product-name">艾玛沙发</text>
					<text class="product-describe">书架式扶手 长度随意组合</text>
					<text class="product-price">￥1350-7580</text>
				</view>
			</view>
			<view class="product-row">
				<view class="product-item margin-right">
					<image src="http://localhost:3000/img/product_detail/recomend03.png" class="product-img"></image>
					<text class="product-name">比邻沙发</text>
					<text class="product-describe">意大利经典设计 鹅绒填充</text>
					<text class="product-price">￥1350-7580</text>
				</view>
				<view class="product-item">
					<image src="http://localhost:3000/img/product_detail/recomend04.png" class="product-img"></image>
					<text class="product-name">艾玛沙发</text>
					<text class="product-describe">书架式扶手 长度随意组合</text>
					<text class="product-price">￥1350-7580</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.product-detail-recomend{
		padding: 0 15px;
		border-bottom: 30rpx solid #F2F3F7;
	}
	
	.title{
		font-size: 20px;
		line-height: 100rpx;
	}
	
	.product-row{
		display: flex;
		margin-bottom: 20rpx;
		/* background-color: #007AFF; */
		
		width: 100%;
	}
	
	.product-item{
		flex-wrap: 1;
		border: 1px solid #F2F3F7;
		/* background-color: red; */
		
		width: 100%;
	}
	
	.margin-right{
		margin-right: 20rpx;
	}
	
	.product-img{
		width: 100%;
		height: 350rpx;
	}
	
	.product-name{
		display: block;
		font-size: 18px;
		line-height: 60rpx;
	}
	
	.product-describe{
		display: block;
		color: #8A94A1;
		
		font-size: 14px;
		line-height: 50rpx;
	}
	
	.product-price{
		display: block;
		font-size: 18px;
		/* color: red; */
	}
</style>
