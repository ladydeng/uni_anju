<template>
	<view class="hot-tab">
		<view class="hot-tab-item">
			<image src="http://192.168.124.34:3000/img/live_home/hot_tab01.png" class="hot-tab-img"></image>
		</view>
		<view class="hot-tab-item">
			<image src="http://192.168.124.34:3000/img/live_home/hot_tab02.png" class="hot-tab-img"></image>
		</view>
		<view class="hot-tab-item">
			<image src="http://192.168.124.34:3000/img/live_home/hot_tab03.png" class="hot-tab-img"></image>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.hot-tab{
		display: flex;
	}
	
	.hot-tab-item{
		flex: 1;
		
		border-radius: 20rpx;
		margin: 4rpx;
	}
	
	.hot-tab-img{
		width: 100%;
		height: 150rpx;
	}
</style>
