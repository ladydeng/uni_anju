<template>
	<view class="product-list">
		<view class="product-list-row">
			<view class="product-list-item distance">
				<image src="http://192.168.124.34:3000/img/sofa/sofa01.png" class="product-img" @click="toSofaDetail"></image>
				<text class="product-name">新主题布艺沙发</text>
				<text class="product-decribe">极简经典设计 天然亲肤</text>
				<text class="product-price">￥1350-7580</text>
				<view class="badge">
					<text class="badge-item">多规格</text>
					<text class="badge-item">多颜色</text>
					<text class="badge-item">多材质</text>
				</view>
			</view>
			<view class="product-list-item">
				<image src="http://192.168.124.34:3000/img/sofa/sofa02.png" class="product-img"></image>
				<text class="product-name">
					<text class="badge-item">多材质</text>
					博得沙发
				</text>
				<text class="product-decribe">意大利全青皮 纯鹅绒填充</text>
				<text class="product-price">￥4320-37399</text>
				<view class="badge">
					<text class="badge-item">多规格</text>
					<text class="badge-item">多颜色</text>
				</view>
			</view>
		</view>
		<view class="product-list-row">
			<view class="product-list-item distance">
				<image src="http://192.168.124.34:3000/img/sofa/sofa03.png" class="product-img"></image>
				<text class="product-name">桃源沙发</text>
				<text class="product-decribe">天然棉麻混纺</text>
				<text class="product-price">￥2790-22280</text>
				<view class="badge">
					<text class="badge-item">多规格</text>
					<text class="badge-item">多颜色</text>
					<text class="badge-item">多材质</text>
				</view>
			</view>
			<view class="product-list-item">
				<image src="http://192.168.124.34:3000/img/sofa/sofa04.png" class="product-img"></image>
				<text class="product-name">
					<text class="badge-item">多材质</text>
					光阴沙发
				</text>
				<text class="product-decribe">高级羊毛 亲肤舒适</text>
				<text class="product-price">￥3160-8140</text>
				<view class="badge">
					<text class="badge-item">多规格</text>
					<text class="badge-item">多颜色</text>
				</view>
			</view>
		</view>
		<view class="product-list-row">
			<view class="product-list-item distance">
				<image src="http://192.168.124.34:3000/img/sofa/sofa05.png" class="product-img"></image>
				<text class="product-name">若邻休闲椅</text>
				<text class="product-decribe">环抱式设计</text>
				<text class="product-price">￥3602</text>
				<view class="badge">
					<text class="badge-item">多规格</text>
					<text class="badge-item">多颜色</text>
					<text class="badge-item">多材质</text>
				</view>
			</view>
			<view class="product-list-item">
				<image src="http://192.168.124.34:3000/img/sofa/sofa06.png" class="product-img"></image>
				<text class="product-name">
					<text class="badge-item">多材质</text>
					贝沙发
				</text>
				<text class="product-decribe">松木框架 进口棉麻</text>
				<text class="product-price">￥860-8890</text>
				<view class="badge">
					<text class="badge-item">多规格</text>
					<text class="badge-item">多颜色</text>
				</view>
			</view>
		</view>
		<view class="product-list-row">
			<view class="product-list-item distance">
				<image src="http://192.168.124.34:3000/img/sofa/sofa07.png" class="product-img"></image>
				<text class="product-name">阿曼达沙发</text>
				<text class="product-decribe">简美风格 实时大气</text>
				<text class="product-price">￥4796</text>
				<view class="badge">
					<text class="badge-item">多规格</text>
					<text class="badge-item">多颜色</text>
					<text class="badge-item">多材质</text>
				</view>
			</view>
			<view class="product-list-item">
				<image src="http://192.168.124.34:3000/img/sofa/sofa08.png" class="product-img"></image>
				<text class="product-name">
					<text class="badge-item">多材质</text>
					伯爵沙发
				</text>
				<text class="product-decribe">进口全青皮 鹅绒填充</text>
				<text class="product-price">￥3160-8140</text>
				<view class="badge">
					<text class="badge-item">多规格</text>
					<text class="badge-item">多颜色</text>
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
		created() {


		},
		methods: {
			toSofaDetail() {
				uni.navigateTo({
					url: "/pages/productDetail/ProductDetail"
				})
			}
		}
	}
</script>

<style scoped>
	.product-list {
		padding: 20rpx;
		color: #232E3D;
	}

	.product-list-row {
		display: flex;
		margin-bottom: 20rpx;
	}

	.product-list-item {
		flex: 1;
	}

	.distance {
		margin-right: 20rpx;
	}

	.product-img {
		width: 100%;
		height: 360rpx;

		border-radius: 8px;
	}

	.product-name,
	.product-decribe,
	.product-price {
		display: block;
		line-height: 50rpx;
	}

	.product-decribe {
		color: #8A94A1;
		font-size: 14px;
	}

	.product-price {
		color: red;
	}

	.badge-item {
		display: inline-block;
		font-size: 12px;
		background-color: #f2f3f7;
		padding: 4px;
		margin-right: 15rpx;
	}
</style>
