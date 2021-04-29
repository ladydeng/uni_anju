<template>
	<view class="product-list">
		<view class="product-list-item" v-for="(item,index) in products" :key="index" @click="toProductDetail(item)">
			<image class="product-img" :src="item.src"></image>
			<text class="product-name">{{ item.name }}</text>
			<text class="product-describe">{{ item.describe }}</text>
			<text class="product-price">￥{{ item.price }}</text>
			<view class="badge">
				<text class="badge-item">多规格</text>
				<text class="badge-item">多颜色</text>
				<text class="badge-item">多材质</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				products:[]
			}
		},
		components: {

		},
		created() {
			uni.request({
				url:"http://192.168.124.34:3000/findSofa",
				method:"GET",
				success: res => {
					this.products = res.data
					// console.log(this.products)
				}
			})
		},
		methods: {
			// 跳转到商品详情页
			toProductDetail(item){
				// 页面跳转
				uni.navigateTo({
					url: "/pages/productDetail/ProductDetail",
					success: res => {
						// 把商品数据保存在vuex
						this.$store.commit("savaProduct",item)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.product-list {
		padding: 20rpx;
		color: #232E3D;
		
		display: flex;
		flex-wrap: wrap;
	}
	
	.product-list-item{
		width: 50%;
		box-sizing: border-box;
		padding: 10rpx;
	}
	
	.product-img{
		width: 100%;
		height: 280rpx;
	}
	
	.product-name, .product-describe, .product-price{
		display: block;
	}
	
	.product-name, .product-price{
		font-size: 16px;
		line-height: 50rpx;
	}
	
	.product-describe{
		font-size: 14px;
		color: #8A94A1;
		line-height: 50rpx;
	}
	
	.badge{
		margin-bottom: 20rpx;
	}
	
	.badge-item {
		display: inline-block;
		font-size: 12px;
		background-color: #f2f3f7;
		padding: 4px;
		margin-right: 15rpx;
	}
</style>
