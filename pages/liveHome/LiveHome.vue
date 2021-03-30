<template>
	<view class="live-home">
		<view class="title">
			<view class="box"></view>
			<text>热门标签 Hot tab</text>
		</view>
		<hot-tab />
		
		<view class="title">
			<view class="box"></view>
			<text>今日美图 Today's Meitu</text>
		</view>
		<today-meitu />
		
		<view class="title">
			<view class="box"></view>
			<text>安居生活圈  Living in a secure life</text>
		</view>
		<live-circle />
	</view>
</template>

<script>
	import HotTab from "./childComps/HotTab.vue"
	import TodayMeitu from "./childComps/TodayMeitu.vue"
	import LiveCircle from "./childComps/LiveCircle.vue"
	
	export default {
		data() {
			return {
			}
		},
		components: {
			HotTab,
			TodayMeitu,
			LiveCircle
		},
		onLoad() {
	
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.live-home{
		padding: 0 15rpx;
		color: #232E3D;
	}
	
	.title{
		line-height: 80rpx;
	}
	
	.box{
		display: inline-block;
		width: 20rpx;
		height: 10rpx;
		background-color: black;
		
		margin-right: 10rpx;
	}
</style>
