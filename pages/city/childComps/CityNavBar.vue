<template>
	<view class="main-navbar">
		<nav-bar>
			<view class="content">
				<image src="/static/img/city/delete.png" class="city-icon" @click="closeCity"></image>
				<text class="city-text">切换城市</text>
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
			closeCity(){
				
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style scoped>
	.content{
		height: 80rpx;
		line-height: 80rpx;
		/* background-color: #007AFF; */
		
		padding: 0 10px;
	}
	.city-icon{
		width: 30rpx;
		height: 30rpx;
	}
	
	.city-text{
		margin-left: 4px;
		font-size: 18px;
	}

</style>
