<template>
	<view class="style-navbar">
		<nav-bar>
			<view class="content">
				<view class="back">
					<image src="http://192.168.124.34:3000/img/back.png" class="back-img" @click="back"></image>
				</view>
				<view class="tab-control">
					<block v-for="(item,index) in titles" :key="index">
						<view class="navbar-item" @click="itemClick(index)">
							<!-- <text data-index="0" @click="itemClick">北欧</text> -->
							<text :class="{active:currentIndex== index}">{{ item }}</text>
						</view>
					</block>
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
				currentIndex: "0",
				titles: ["北欧", "现代", "欧美", "新中式"]
			}
		},
		components: {
			NavBar
		},
		onLoad() {

		},
		methods: {
			// 返回
			back() {
				uni.navigateBack({
					delta: 1
				})
			},

			// 点击navbar
			itemClick(index) {
				// 设置currentIndex
				this.currentIndex = index
				// 发出事件
				this.$emit("tab-control", index)
			}

		}
	}
</script>

<style scoped>
	.content {
		padding: 0 15px;
		display: flex;
		color: #232e3d;
	}

	.back {
		flex: 1;
	}

	.tab-control {
		flex: 9;
		line-height: 80rpx;
		display: flex;
	}

	.navbar-item {
		flex: 1;
		/* text-align: center; */
	}

	.back-img {
		width: 20rpx;
		height: 40rpx;
		line-height: 80rpx;
		
		margin-top: 22rpx;
	}

	/* 导航动态样式 */
	.active {
		padding-bottom: 6rpx;
		border-bottom: 2px solid #232e3d;
	}
</style>
