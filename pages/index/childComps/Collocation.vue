<template>
	<view class="collocation">
		<view class="cabinet">
			<view class="func">
				<text class="title">生活家搭配</text>
				<view class="more" @click="toHotStyle">
					<text>查看全部</text>
					<image src="http://localhost:3000/img/index/collocation/more.png" class="more-img"></image>
				</view>
			</view>
			<view class="cabinet-banner">
				<image src="http://localhost:3000/img/index/collocation/banner_cabinet.png" class="banner-img"></image>
			</view>
			<view class="cabinet-style">
				<view class="cabinet-style-item">
					<image src="http://localhost:3000/img/index/collocation/cabinet_style01.png" class="product-img"></image>
					<text class="product-name">实物储物茶几</text>
					<text class="product-price">￥1472</text>
				</view>
				<view class="cabinet-style-item">
					<image src="http://localhost:3000/img/index/collocation/cabinet_style02.png" class="product-img"></image>
					<text class="product-name">实木电视柜</text>
					<text class="product-price">￥1760</text>
				</view>	
				<view class="cabinet-style-item">
					<image src="http://localhost:3000/img/index/collocation/cabinet_style03.png" class="product-img"></image>
					<text class="product-name">实物储物茶几</text>
					<text class="product-price">￥1760</text>
				</view>
			</view>

			<view class="box"></view>

			<view class="cabinet-banner">
				<image src="http://localhost:3000/img/index/collocation/banner_bed.png" class="banner-img"></image>
			</view>
			<view class="cabinet-style">
				<view class="cabinet-style-item">
					<image src="http://localhost:3000/img/index/collocation/bed_style01.png" class="product-img"></image>
					<text class="product-name">白橡木实木床</text>
					<text class="product-price">￥1778</text>
				</view>
				<view class="cabinet-style-item">
					<image src="http://localhost:3000/img/index/collocation/bed_style02.png" class="product-img"></image>
					<text class="product-name">白橡木梳妆台</text>
					<text class="product-price">￥1800</text>
				</view>
				<view class="cabinet-style-item">
					<image src="http://localhost:3000/img/index/collocation/bed_style03.png" class="product-img"></image>
					<text class="product-name">白橡木三门衣柜</text>
					<text class="product-price">￥5480</text>
				</view>
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
			// 路由跳转
			toHotStyle() {
				uni.navigateTo({
					url:"/pages/style/Style"
				})
			}
		},
		computed: {

		}
	}
</script>

<style scoped>
	.box {
		width: 100%;
		height: 10rpx;
		background: #f2f3f7;
		border-radius: 4rpx;
		margin-top: 15rpx;
		margin-bottom: 15rpx;
	}

	.func {
		display: flex;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.title,
	.more {
		flex: 1;
	}

	.cabinet-style {
		display: flex;
	}

	.cabinet-style-item {
		flex: 1;
	}

	.banner-img {
		/* width: 710rpx; */
		width: 100%;
		height: 398rpx;
		margin-bottom: 20rpx;
	}

	.product-img {
		width: 230rpx;
		height: 184rpx;
	}

	.title {
		font-size: 20px;
	}

	.more {
		text-align: right;
		color: #8a94a1;
		font-size: 32rpx;
	}

	.more-img {
		width: 20rpx;
		height: 20rpx;
		vertical-align: middle;

		margin-left: 10rpx;
	}

	.product-price {
		color: red;
		display: block;
		font-size: 14px;
	}

	.product-name {
		display: block;
	}
</style>
