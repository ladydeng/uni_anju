<template>
	<view class="product-detail-info">
		<view class="product-banner">
			<view class="img-box">
				<image src="http://localhost:3000/img/product_detail/sofa_banner.png" class="sofa-img"></image>
			</view>
			<view class="banner-badge">
				<text>7天无理由退货</text>
				<text>三年质保终身维护</text>
				<text>报价90天</text>
			</view>
		</view>

		<view class="product-info">
			<view class="title">
				<text class="title-badge">多规格</text>
				<text class="product-name">新主题布艺沙发</text>
			</view>
			<text class="product-decribe">极简经典设计 天然亲肤</text>
			<text class="product-price">￥1350-7580</text>
			<text class="price-describe">卖场价： ￥2709-15179</text>
			<text class="live-house">Live House</text>
		</view>
		
		<view class="active">
			<view class="active-first">
				<view class="active-title">
					<text>活动</text>
				</view>
				<view class="active-list">
					<view class="active-item">
						<text class="reduce">平台满减</text>
						<text class="promotion">全场商品满5000减600，满1000减100</text>
					</view>
					<view class="active-item">
						<text class="reduce">平台满减</text>
						<text class="promotion">全场商品满5000减600，满1000减100</text>
					</view>
				</view>
			</view>
			<view class="active-second">
				<view class="active-title">
					<text>活动</text>
				</view>
				<view class="active-select-size">
					<text>请选择规格尺寸</text>
				</view>
			</view>		
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.product-detail-info {
		color: #232E3D;
	}

	.img-box {
		border-top: 20rpx solid black;
		border-bottom: 100rpx solid black;
		margin: 0;
	}

	.sofa-img {
		width: 100%;
		height: 400rpx;
	}

	.banner-badge {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		box-sizing: border-box;
		padding-left: 20rpx;

		background-color: #F2F3F7;
	}

	.banner-badge text {
		font-size: 14px;
		display: inline-block;
		margin-right: 30rpx;
	}

	.title-badge {
		display: inline-block;
		width: 80rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;

		border-radius: 20rpx;
		padding: 6rpx;
		font-size: 12px;

		background-color: #F2F3F7;
		/* background-color: red; */
	}

	.product-info {
		padding: 0 15px;
		border-bottom: 1px solid #F2F3F7;
	}

	.product-name {
		font-size: 20px;
		line-height: 80rpx;
	}

	.product-decribe {
		display: block;
		color: #8A94A1;
	}

	.product-price {
		display: block;
		font-size: 20px;
		line-height: 60rpx;
	}

	.price-describe {
		display: block;
		color: #8A94A1;
	}

	.live-house {
		display: block;
		width: 200rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		margin-top: 10rpx;
		margin-bottom: 20rpx;

		background-color: #F2F3F7;
	}
	
	.active{
		padding: 0 15px;
	}
	
	.active-item{
		width: 90%;
		height: 50rpx;
		/* background-color: red; */
		
		/* 超出部分文本以...显示 */
		/* text-overflow: ellipsis; */
		overflow: hidden;
		
		margin-bottom: 10rpx;
	}
	
	.active-first, .active-second{
		display: flex;
		border-bottom: 1px solid #F2F3F7;
		padding: 10px 0;
	}
	
	.active-title{
		flex: 2;
		color: #8A94A1;
	}
	
	.active-list{
		flex: 8;
		font-size: 14px;
	}
	
	.active-select-size{
		flex: 8;
		font-size: 18px;
	}
	
	.reduce{
		display: inline-block;
		border: 1rpx solid #232E3D;
		border-radius: 10rpx;
		padding-left: 4rpx;
		padding-right: 6rpx;
		
		margin-right: 6rpx;
	}
</style>
