<template>
	<view class="product-list">
		<view class="product-list-row">
			<view class="product-list-item distance">
				<image src="http://localhost:3000/img/new_product/dining_chair.png" class="product-img"></image>
				<text class="product-name">餐椅</text>
				<text class="product-decribe">进口黑胡桃木 真皮椅面</text>
				<text class="product-price">￥2010-2180</text>
			</view>
			<view class="product-list-item">
				<image src="http://localhost:3000/img/new_product/tea_table.png" class="product-img"></image>
				<text class="product-name">小满茶几</text>
				<text class="product-decribe">进口黑胡桃木 柔和圆润</text>
				<text class="product-price">￥6300</text>
			</view>
		</view>
		<view class="product-list-row">
			<view class="product-list-item distance">
				<image src="http://localhost:3000/img/new_product/jg_dining_chair.png" class="product-img"></image>
				<text class="product-name">金刚餐椅</text>
				<text class="product-decribe">进口黑胡桃木 独特造型</text>
				<text class="product-price">￥2380</text>
			</view>
			<view class="product-list-item">
				<image src="http://localhost:3000/img/new_product/wj_tv_cabinet.png" class="product-img"></image>
				<text class="product-name">万卷电视柜</text>
				<text class="product-decribe">进口黑胡桃木 自由组合</text>
				<text class="product-price">￥6300</text>
			</view>
		</view>
		<view class="product-list-row">
			<view class="product-list-item distance">
				<image src="http://localhost:3000/img/new_product/xm_hall_cabinet.png" class="product-img"></image>
				<text class="product-name">小满厅柜</text>
				<text class="product-decribe">进口黑胡桃木 可拆卸设计</text>
				<text class="product-price">￥9980</text>
			</view>
			<view class="product-list-item">
				<image src="http://localhost:3000/img/new_product/xm_sofa.png" class="product-img"></image>
				<text class="product-name">小满沙发</text>
				<text class="product-decribe">高级棉布混纺</text>
				<text class="product-price">￥2590-6570</text>
			</view>
		</view>
		<view class="product-list-row">
			<view class="product-list-item distance">
				<image src="http://localhost:3000/img/new_product/dining_chair.png" class="product-img"></image>
				<text class="product-name">餐边柜</text>
				<text class="product-decribe">橡木艺术风格型双门</text>
				<text class="product-price">￥1968</text>
			</view>
			<view class="product-list-item">
				<image src="http://localhost:3000/img/new_product/dining_chair.png" class="product-img"></image>
				<text class="product-name">床</text>
				<text class="product-decribe">进口黑胡桃木 柔和圆润</text>
				<text class="product-price">￥2800</text>
			</view>
		</view>
		<view class="product-list-row">
			<view class="product-list-item distance">
				<image src="http://localhost:3000/img/new_product/dining_chair.png" class="product-img"></image>
				<text class="product-name">真皮沙发</text>
				<text class="product-decribe">进口油蜡布艺</text>
				<text class="product-price">￥5000</text>
			</view>
			<view class="product-list-item">
				<image src="http://localhost:3000/img/new_product/dining_chair.png" class="product-img"></image>
				<text class="product-name">小满茶几</text>
				<text class="product-decribe">进口黑胡桃木 柔和圆润</text>
				<text class="product-price">￥6300</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.product-list{
		padding: 15rpx;
	}
	
	.product-list-row{
		display: flex;
		
		margin-bottom: 30rpx;
	}
	
	.product-list-item{
		flex: 1;
	}
	
	.distance{
		margin-right: 15rpx;
	}
	
	.product-img{
		width: 100%;
		height: 280rpx;
	}
	
	.product-name, .product-decribe, .product-price{
		display: block;
	}
	
	.product-price{
		color: red;
		font-size: 14px;
	}
	
	.product-decribe{
		font-size: 14px;
		line-height: 60rpx;
		color: #8a94a1;
	}
</style>
