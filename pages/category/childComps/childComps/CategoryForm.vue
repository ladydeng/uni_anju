<template>
	<view class="form">
		<view class="img-list">
			<view class="img-item margin-top">
				<image src="http://localhost:3000/img/category/style01.png" class="banner-img" @click=""></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/style02.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/style03.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/style04.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/style05.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/style06.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/style07.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/style08.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/style09.png" class="banner-img"></image>
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
		components:{
		},
		created() {
			
			
		},
		methods: {
			
		}
	}
	
</script>

<style scoped>
	.banner-img{
		width: 100%;
		height: 200rpx;
		
		border-radius: 10px;
	}
	
	/* #ifndef APP-PLUS || H5 */
	.margin-top{
		margin-top: 20rpx;
	}
	/* #endif */
</style>
