<template>
	<view class="product-detail-comment">
		<view class="title">
			<text>用户评价（ {{ count }} ）</text>
		</view>
		<view class="user">
			<image src="http://localhost:3000/img/product_detail/shop_img.png" class="user-img"></image>
			<text class="user-name">橘子柠檬</text>
			<text class="user-badge">TA的空间</text>
		</view>
		<view class="comment">
			<text class="comment-content">收到货后真是惊喜啊，这种品质的沙发在实体店至少1万左右，真是捡到宝了哈哈，上门的安装师傅都说沙发腿和底层布料都是高档沙发才有的！</text>
			<image src="http://localhost:3000/img/product_detail/comment01.png" class="comment-img"></image>
			<image src="http://localhost:3000/img/product_detail/comment02.png" class="comment-img"></image>
			<view class="comment-badge">
				<text class="badge-item">3150*2180*680 (L形入座右贵妃)；</text>
				<text class="badge-item">棉麻混纺；</text>
				<text class="badge-item">米灰色；</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 10
			}
		},
		components: {

		},
		created() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.product-detail-comment{
		border-bottom: 30rpx solid #F2F3F7;
		padding: 0 15px;
	}
	
	.title{
		font-size: 20px;
		line-height: 100rpx;
	}
	
	.user-img{
		width: 100rpx;
		height: 100rpx;
		vertical-align: middle;
	}
	
	.user-name{
		font-size: 18px;
		margin-left: 20rpx;
	}
	
	.user-badge{
		display: inline-block;
		width: 70px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		
		border-radius: 10px;
		color: white;
		background-color: #232E3D;
		
		font-size: 14px;
		margin-left: 20rpx;
	}
	
	.comment-content{
		display: block;
		line-height: 26px;
		
		padding: 15rpx 0;
	}
	
	.comment-img{
		display: inline-block;
		width: 250rpx;
		height: 250rpx;
		margin-right: 10rpx;
	}
	
	.comment-badge{
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		font-size: 14px;
	}
</style>
