<template>
	<view class="safe-guard-nav-bar">
		<nav-bar>
			<view class="content">
				<view class="left">
					<image src="http://192.168.124.34:3000/img/back.png" class="back-img" @click="back"></image>
					<image src="http://192.168.124.34:3000/img/safe_guard/home_badge.png" class="home-img"></image>
					<text class="title">购物保障</text>
				</view>
				
				<!-- #ifdef APP-PLUS || H5 -->
				<view class="right">
					<image src="http://192.168.124.34:3000/img/safe_guard/share_badge.png" class="share-img"></image>
				</view>
				<!-- #endif -->
			</view>
		</nav-bar>
	</view>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"

	export default {
		data() {
			return {

			}
		},
		components: {
			NavBar
		},
		created() {

		},
		methods: {
			// 返回
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		},
	}
</script>

<style scoped>
	.content{
		width: 1005;
		height: 80rpx;
		padding: 0 15px;
		display: flex;
		line-height: 90rpx;
		/* background-color: red; */
	}
	
	.left, .right{
		flex: 1;
	}
	
	.right{
		text-align: right;
	}
	
	.title{
		display: inline-block;
		margin-left: 10rpx;
	}
	
	.back-img{
		width: 25rpx;
		height: 40rpx;
	}
	
	.home-img{
		width: 35rpx;
		height: 35rpx;
		
		display: inline-block;
		vertical-align: middle;
		margin-left: 60rpx;
	}
	
	.share-img{
		width: 40rpx;
		height: 40rpx;
	}
</style>
