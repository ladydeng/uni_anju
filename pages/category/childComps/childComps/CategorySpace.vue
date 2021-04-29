<template>
	<view class="space">
		<view class="img-list">
			<view class="img-item margin-top">
				<image src="http://192.168.124.34:3000/img/category/space01.png" class="banner-img" @click=""></image>
			</view>
			<view class="img-item">
				<image src="http://192.168.124.34:3000/img/category/space02.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://192.168.124.34:3000/img/category/space03.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://192.168.124.34:3000/img/category/space04.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://192.168.124.34:3000/img/category/space05.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://192.168.124.34:3000/img/category/space06.png" class="banner-img"></image>
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