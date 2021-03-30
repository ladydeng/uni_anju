<template>
	<view class="today-meitu">
		<view class="meitu-list">
			<view class="meitu-row">
				<view class="meitu-item">
					<image src="http://localhost:3000/img/live_home/meitu01.png" class="meitu-img"></image>
				</view>
				<view class="meitu-item">
					<image src="http://localhost:3000/img/live_home/meitu02.png" class="meitu-img"></image>
				</view>
				<view class="meitu-item">
					<image src="http://localhost:3000/img/live_home/meitu03.png" class="meitu-img"></image>
				</view>
			</view>
			<view class="meitu-row">
				<view class="meitu-item">
					<image src="http://localhost:3000/img/live_home/meitu04.png" class="meitu-img"></image>
				</view>
				<view class="meitu-item">
					<image src="http://localhost:3000/img/live_home/meitu05.png" class="meitu-img"></image>
				</view>
				<view class="meitu-item">
					<image src="http://localhost:3000/img/live_home/meitu06.png" class="meitu-img"></image>
				</view>
			</view>
		</view>
		
		<view class="title">
			<view class="box"></view>
			<text>城市</text>
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
			
		}
	}
</script>

<style scoped>
	.title{
		line-height: 60rpx;
	}
	
	.box{
		display: inline-block;
		width: 20rpx;
		height: 10rpx;
		background-color: black;
		
		margin-right: 10rpx;
	}
	
	.meitu-row{
		display: flex;
	}
	
	.meitu-item{
		flex: 1;
		
		margin: 4rpx;
	}
	
	.meitu-img{
		width: 100%;
		height: 200rpx;
	}
</style>
