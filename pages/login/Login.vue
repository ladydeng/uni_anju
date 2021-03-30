<template>
	<view class="login">
		<view class="input">
			<view class="input-item">
				<input type="text" placeholder="请输入用户名" class="input-content" />
				<text class="input-title">账号</text>
			</view>
			<view class="input-item">
				<input type="text" placeholder="请输入密码" class="input-content" />
				<text class="input-title">密码</text>
			</view>
		</view>

		<view class="btn">
			<button type="default" class="login-btn">登录</button>
			<view class="taps">
				<text class="new-user">新用户注册</text>
				<text class="forget-pwd">忘记密码</text>
			</view>
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
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.login {
		padding: 0 15px;
		color: #232e3d;
		border-top: 1rpx solid #8A94A1;
	}

	.input {
		width: 100%;
		height: 100%;
		margin-top: 80rpx;
		margin-bottom: 80rpx;
	}

	.input-item {
		width: 100%;
		height: 80rpx;
		margin-bottom: 30rpx;
	}

	.input-content {
		display: block;
		width: 90%;
		height: 80rpx;
		background-color: #f2f3f7;

		margin: 0 auto;
		box-sizing: border-box;
		padding-left: 100rpx;
		border-radius: 15px;
	}

	.login-btn {
		width: 90%;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #232e3d;

		margin: 0 auto;
		border-radius: 15px;
		color: white;
		font-size: 14px;
	}

	.input-title {
		position: relative;
		top: -60rpx;
		left: 50rpx;
	}

	.taps {
		display: flex;
		margin-top: 15rpx;
		padding: 0 18px;
	}

	.new-user,
	.forget-pwd {
		display: block;
		flex: 1;
		font-size: 14px;
	}

	.forget-pwd {
		text-align: right;
	}
</style>
