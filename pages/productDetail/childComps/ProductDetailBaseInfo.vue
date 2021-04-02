<template>
	<view class="product-detail-base-info">
		<view class="title">
			<text>商品基础信息</text>
		</view>
		<view class="base-info-list">
			<view class="base-info-row">
				<view class="base-info-title">
					<view class="circle"></view>
					<text>商品风格</text>
				</view>
				<view class="base-info-content">
					<text>意式极简</text>
				</view>
			</view>
			<view class="base-info-row">
				<view class="base-info-title">
					<view class="circle"></view>
					<text>面料</text>
				</view>
				<view class="base-info-content">
					<text>棉麻混纺</text>
				</view>
			</view>
			<view class="base-info-row">
				<view class="base-info-title">
					<view class="circle"></view>
					<text>主材</text>
				</view>
				<view class="base-info-content">
					<text>实木</text>
				</view>
			</view>
		</view>
		<view class="more">
			<text>展开更多</text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.product-detail-base-info{
		padding: 0 15px;
	}
	
	.title{
		font-size: 20px;
		line-height: 100rpx;
	}
	
	.base-info-row{
		display: flex;
		line-height: 60rpx;
	}
	
	.circle{
		display: inline-block;
		width: 30rpx;
		height: 30rpx;
		border-radius: 50%;
		vertical-align: middle;
		
		background-color: #8A94A1;
		margin-right: 10rpx;
	}
	
	.base-info-title{
		flex: 4;
	}
	
	.base-info-content{
		flex: 6;
	}
	
	.more{
		width: 100%;
		line-height: 80rpx;
		
		text-align: center;
		color: #8A94A1;
	}
</style>
