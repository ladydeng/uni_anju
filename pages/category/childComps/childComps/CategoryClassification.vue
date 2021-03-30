<template>
	<view class="classification">
		<view class="img-list">
			<view class="img-item">
				<image src="http://localhost:3000/img/category/category01.png" class="banner-img" @click="toSofa"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/category02.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/category03.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/category04.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/category05.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/category06.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/category07.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/category08.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/category09.png" class="banner-img"></image>
			</view>
			<view class="img-item">
				<image src="http://localhost:3000/img/category/category10.png" class="banner-img"></image>
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
			toSofa(){
				uni.navigateTo({
					url:"/pages/sofa/Sofa"
				})
			}
		}
	}
</script>

<style scoped>
	.banner-img{
		width: 100%;
		height: 200rpx;
		
		border-radius: 10px;
	}
</style>
