<template>
	<view class="index-navbar">
		<nav-bar>
			<view class="content">
				<view class="left">
					<image src="http://192.168.124.34:3000/img/index/navbar/logo.png" class="logo"></image>
					<text v-if="getCurrentCity" class="select">{{ getCurrentCity }}</text>
					<text v-else class="select">选择城市</text>
					<image src="http://192.168.124.34:3000/img/index/navbar/down.png" class="down" @click="selectCity"></image>
				</view>
				<view class="right">
					<image src="http://192.168.124.34:3000/img/index/navbar/search.png" class="search"></image>
				</view>
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
			// 发出事件
			selectCity(){
				this.$emit("select-city")
			}
		},
		computed: {
			// 获取当前城市名
			getCurrentCity() {
				return this.$store.state.currentCity
			}
		}
	}
</script>

<style scoped>
	.content {
		/* background-color: white; */
		padding: 0 15px;
		height: 80rpx;

		display: flex;
		/* 内容垂直居中 */
		align-items: center;
	}

	.left {
		flex: 2;
		/* background-color: white; */
	}

	.right {
		flex: 1;
		text-align: right;
		/* background-color: white; */
	}

	.logo{
		width: 80rpx;
		height: 80rpx;
		vertical-align: middle;
	}
	
	.search {
		width: 50rpx;
		height: 50rpx;
	}

	.select {
		margin-left: 4px;
	}

	.down {
		width: 35rpx;
		height: 15rpx;
		vertical-align: middle;

		margin-left: 4px;
	}
</style>
