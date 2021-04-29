<template>
	<view class="login">
		<view class="input">
			<view class="input-item">
				<input type="text" v-model="userAccount" @blur="checkUserAccount" placeholder="请输入用户名"
					class="input-content" />
				<text class="input-title">账号</text>
				<text v-show="showAccontErr" class="err-text">{{ accountErrText }}</text>
			</view>
			<view class="input-item">
				<input type="text" password="true" v-model="userPassword" @blur="checkUserPassword" placeholder="请输入密码"
					class="input-content" />
				<text class="input-title">密码</text>
				<text v-show="showPasswordErr" class="err-text">{{ passwordErrText }}</text>
			</view>
		</view>

		<view class="btn">
			<button type="default" class="login-btn" @click="Login">登录</button>
			<view class="taps">
				<text class="new-user" @click="toRegister">新用户注册</text>
				<text class="forget-pwd">忘记密码</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userAccount: "",
				userPassword: "",

				// 是否显示账户密码
				showAccontErr: false,
				showPasswordErr: false,

				// 错误提示文本
				accountErrText: "账户不能为空",
				passwordErrText: "密码不能为空"
			}
		},
		components: {

		},
		onLoad() {

		},
		methods: {
			// 跳转到用户注册页面
			toRegister() {
				uni.navigateTo({
					url: "/pages/register/Register"
				})
			},

			// 用户点击登录
			Login() {
				// 账号密码不为空
				if (this.userAccount !== "" && this.userPassword !== "") {
					// 1.向我们的服务器发送请求（检验该账号是否存在，若存在，密码是否正确）

					// 2.若账户密码都正确，登录成功  

					// 3.只要用户不点击退出，该账户密码一直不过期
					console.log("进行账号密码验证")

					// 发送请求
					uni.request({
						url: " http://192.168.124.34:4000/login",
						method: "GET",
						// method: "POST",
						// // post请求必须设置，否则后端获取的req.method为options
						// header: {
						// 	"content-type": "application/x-www-form-urlencoded"
						// },
						data: {
							userAccount: this.userAccount,
							userPassword: this.userPassword
						},
						// 收到开发者服务器成功返回
						success: res => {
							console.log("请求成功")
							if (res.data == 200) {
								uni.showToast({
									title: '登录成功',
									duration: 2000,
								});

								// 两秒后页面跳转
								setTimeout(this.toProfile, 2000)

								// 账号密码进行本地存储
								uni.setStorageSync("userAccount", this.userAccount)
								uni.setStorageSync("userPassword", this.userPassword)

								// 把账号保存到vuex
								this.$store.commit("saveUserAccount", this.userAccount)

							} else if (res.data == 400) {
								alert("账号或密码错误 ！")
							}
						},
						// 接口调用失败
						fail(err) {
							alert("请求失败，未接收到服务器返回数据")
						}
					})
				}
			},

			// 判断账户是否为空
			checkUserAccount() {
				if (this.userAccount == "") {
					this.showAccontErr = true
				} else {
					this.showAccontErr = false
				}
			},

			// 判断密码是否为空
			checkUserPassword() {
				if (this.userPassword == "") {
					this.showPasswordErr = true
				} else {
					this.showPasswordErr = false
				}
			},

			toProfile() {
				// 页面跳转
				uni.switchTab({
					url: "/pages/profile/Profile",
				})
			}
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
		margin-bottom: 50rpx;
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

	.err-text {
		color: red;
	}
</style>
