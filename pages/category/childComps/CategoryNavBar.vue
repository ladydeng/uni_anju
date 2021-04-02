<template>
	<view class="category-navbar">
		<nav-bar>
			<view class="content">
				<input type="text" value="" placeholder="搜索品类/单品/风格" class="search-input" />
				<image src="http://localhost:3000/img/category/search.png" class="search-img"></image>

				<!-- #ifdef APP-PLUS || H5 -->
				<image src="http://localhost:3000/img/category/camera.png" class="camera-img"></image>
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

		}
	}
</script>

<style scoped>
	.content {
		height: 60rpx;
		padding: 0 15px;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}

	.search-input {
		display: block;
		height: 60rpx;
		border-radius: 20rpx;

		box-sizing: border-box;
		padding-left: 100rpx;

		background-color: #f2f3f7;
		position: relative;
	}

	.search-img {
		width: 40rpx;
		height: 40rpx;

		position: relative;
		top: -50rpx;
		left: 50rpx;
		z-index: 100;
	}

	.camera-img {
		width: 40rpx;
		height: 40rpx;

		position: absolute;
		top: 20rpx;
		right: 70rpx;
		z-index: 100;
	}
</style>
