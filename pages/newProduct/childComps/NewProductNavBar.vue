<template>
	<view class="new-product-navbar">
		<nav-bar>
			<view class="content">
				<view class="left">
					<image src="http://192.168.124.34:3000/img/back.png" class="back" @click="back"></image>
					<text>本期新品</text>
				</view>
				<view class="right">
					<text>上期新品</text>
				</view>
			</view>
		</nav-bar>
	</view>
</template>

<script>
	import NavBar from "components/common/navbar/NavBar.vue"

	export default {
		data() {
			return {}
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
		computed: {

		}
	}
</script>
<style>
	.content {
		padding: 0 15px;
		/* background-color: red; */
	}
	.content{
		display: flex;
		line-height: 80rpx;
	}
	.left, .right{
		flex: 1;
	}
	.right{
		text-align: right;
	}
	.back{
		width: 20rpx;
		height: 40rpx;
		vertical-align: middle;
		
		margin-right: 20rpx;
	}
</style>
