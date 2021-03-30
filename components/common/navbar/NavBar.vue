<template>
		<!-- 占位 -->
		<!-- #ifndef APP-PLUS || H5 || MP-ALIPAY -->
		<view class="navbar" :style="{ height: boxHeight*2 + 'rpx'}">
			<view class="fixed">
				<!-- 状态栏高度 -->
				<view class="navbar-margin-top" :style="{ height: statusBarHeight + 'px' }"></view>
				<!-- 导航栏内容 -->
				<view class="navbar-content" :style="{ height: navbarHeight + 'px' , width: navbarWidth + 'px'}">
					<slot></slot>
				</view>
			</view>
		</view>
		<!-- #endif -->

		<!-- #ifdef APP-PLUS || H5 || MP-ALIPAY -->
		<view class="navbar" style="height: 80rpx">
			<view class="fixed">
				<!-- 状态栏高度 -->
				<view class="navbar-margin-top" :style="{ height: statusBarHeight + 'px' }"></view>
				<!-- 导航栏内容 -->
				<view class="navbar-content" :style="{ height: navbarHeight + 'px' , width: navbarWidth + 'px'}">
					<slot></slot>
				</view>
			</view>
		</view>
		<!-- #endif -->
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				navbarHeight: "",
				navbarWidth: "",
				boxHeight: ""
			}
		},
		created() {
			// 获取状态栏信息
			const info = uni.getSystemInfoSync()
			// 设置状态栏高度
			this.statusBarHeight = info.statusBarHeight
			// console.log(this.statusBarHeight) //20

			//#ifndef APP-PLUS || H5 || MP-ALIPAY
			// uni.getMenuButtonBoundingClientRect()方法H5、APP_PLUS、MP-ALIPAY平台不支持
			// 获取胶囊信息
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// （胶囊底部高度 - 状态栏高度） + （胶囊顶部高度 - 状态栏高度） = 导航栏高度
			const navbarHeight = (menuButtonInfo.bottom - this.statusBarHeight) + (menuButtonInfo.top - this
				.statusBarHeight)
			// 设置导航栏高度
			this.navbarHeight = navbarHeight
			// 设置导航栏宽度
			this.navbarWidth = menuButtonInfo.left
			// console.log(menuButtonInfo)

			// 占位高度
			this.boxHeight = this.statusBarHeight + this.navbarHeight
			// console.log(this.boxHeight)
			// #endif

		}
	}
</script>

<style scoped>
	.fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		
		z-index: 99;
		
		background-color: white;
	}
</style>
