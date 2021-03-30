<template>
	<view class="northern-europe">
		<view class="banner">
			<image src="http://localhost:3000/img/style/northren_europe/northren_europe_banner.png" class="banner-img">
			</image>
			<text class="product-name">北欧时光</text>
			<text class="product-decribe">
				欧洲原创设计者，融合不同年代的时尚经典传世造型，国内一线大厂精选顶级原材料，精湛手工艺制作
			</text>
		</view>
		<view class="product-list">
			<view class="product-item">
				<image src="http://localhost:3000/img/style/northren_europe/northren_europe_style01.png"
					class="product-img"></image>
			</view>
			<view class="product-item">
				<image src="http://localhost:3000/img/style/northren_europe/northren_europe_style02.png"
					class="product-img"></image>
			</view>
			<view class="product-item">
				<image src="http://localhost:3000/img/style/northren_europe/northren_europe_style03.png"
					class="product-img"></image>
			</view>
		</view>
		<view class="banner">
			<image src="http://localhost:3000/img/style/northren_europe/yuemu_banner.png" class="banner-img">
			</image>
			<text class="product-name">悦木</text>
			<text class="product-decribe">
				经典传世之作，顶级原材料与先进工艺的结合超越了时尚的轮回，走近经典，陶醉于美好设计的智慧生活
			</text>
		</view>
		<view class="product-list">
			<view class="product-item">
				<image src="http://localhost:3000/img/style/northren_europe/yuemu_style01.png" class="product-img">
				</image>
			</view>
			<view class="product-item">
				<image src="http://localhost:3000/img/style/northren_europe/yuemu_style02.png" class="product-img">
				</image>
			</view>
			<view class="product-item">
				<image src="http://localhost:3000/img/style/northren_europe/yuemu_style03.png" class="product-img">
				</image>
			</view>
		</view>
		<view class="banner">
			<image src="http://localhost:3000/img/style/northren_europe/wuye_banner.png" class="banner-img">
			</image>
			<text class="product-name">物也</text>
			<text class="product-decribe">
				丹麦原创设计，俏江南。外婆家等知名连锁企业家具供应商，优选美国白橡木，纯实木打造深受年轻一代追捧的精致北欧风
			</text>
		</view>
		<view class="product-list">
			<view class="product-item">
				<image src="http://localhost:3000/img/style/northren_europe/wuye_style01.png" class="product-img">
				</image>
				<view class="product-item">
					<image src="http://localhost:3000/img/style/northren_europe/wuye_style02.png" class="product-img">
					</image>
				</view>
				<view class="product-item">
					<image src="http://localhost:3000/img/style/northren_europe/wuye_style03.png" class="product-img">
					</image>
				</view>
			</view>
			<view class="banner">
				<image src="http://localhost:3000/img/style/northren_europe/gaoge_banner.png" class="banner-img">
				</image>
				<text class="product-name">高阁</text>
				<text class="product-decribe">
					新加坡著名家具制造商品，东南亚原装进口，国际用材工艺标准，源于国际时尚前沿的设计，致力于打造舒适而又摩登的家居生活
				</text>
			</view>
			<view class="product-list">
				<view class="product-item">
					<image src="http://localhost:3000/img/style/northren_europe/gaoge_style01.png" class="product-img">
					</image>
				</view>
				<view class="product-item">
					<image src="http://localhost:3000/img/style/northren_europe/gaoge_style02.png" class="product-img">
					</image>
				</view>
				<view class="product-item">
					<image src="http://localhost:3000/img/style/northren_europe/gaoge_style03.png" class="product-img">
					</image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.banner-img {
		width: 100%;
		height: 398rpx;
	}

	.product-name,
	.product-decribe {
		display: block;
	}

	.product-decribe {
		font-size: 14px;
		line-height: 40rpx;
		color: #8a94a1;
		margin-top: 10rpx;
	}

	.product-list {
		display: flex;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}

	.product-item {
		flex: 1;
		padding: 10rpx;
	}

	.product-img {
		width: 100%;
		height: 160rpx;
	}
</style>
