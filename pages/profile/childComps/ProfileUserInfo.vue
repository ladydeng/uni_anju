<template>
	<view class="user">
		<!-- #ifndef H5 -->
		<view class="authorize" v-if="isShow">
			<!-- 未授权 -->
			<button type="default" open-type="getUserInfo" @getuserinfo="getUserInfo">{{ title }}</button>
		</view>
		<view class="user-info" v-else>
			<!-- 授权 -->
			<image :src="userInfo.avatarUrl" class="avatar-url"></image>
			<text class="nick-name">{{ userInfo.nickName }}</text>
		</view>
		<!-- #endif -->

		<!-- #ifdef H5 -->
		<view class="user-info">
			<!-- H5 -->
			<view v-if="getUserAccount">
				<image src="http://localhost:3000/img/profile/user.png" class="avatar-url"></image>
				<text class="nick-name">{{ $store.state.userAccount }}</text>
			</view>
			<view v-else>
				<text class="title" @click="toLogin">登录/注册</text>
			</view>
		</view>
		<!-- #endif -->

		<view class="tab-control">
			<view class="tab-control-item border-right">
				<image src="http://localhost:3000/img/profile/no_pay.png" class="tab-item-img"></image>
				<text>未付款</text>
			</view>
			<view class="tab-control-item border-right">
				<image src="http://localhost:3000/img/profile/finish_pay.png" class="tab-item-img"></image>
				<text>已支付</text>
			</view>
			<view class="tab-control-item">
				<image src="http://localhost:3000/img/profile/finish.png" class="tab-item-img"></image>
				<text>已完成</text>
			</view>
		</view>

		<view class="func">
			<view class="func-item">
				<image src="http://localhost:3000/img/profile/coupon.png" class="func-item-badge"></image>
				<text>我的优惠券</text>
				<image src="http://localhost:3000/img/profile/enter.png" class="enter-img"></image>
			</view>
			<view class="func-item">
				<image src="http://localhost:3000/img/profile/collection.png" class="func-item-badge"></image>
				<text>我的收藏</text>
				<image src="http://localhost:3000/img/profile/enter.png" class="enter-img"></image>
			</view>
			<view class="func-item double-border">
				<image src="http://localhost:3000/img/profile/news.png" class="func-item-badge"></image>
				<text>我的消息</text>
				<image src="http://localhost:3000/img/profile/enter.png" class="enter-img"></image>
			</view>
			<view class="func-item double-border">
				<image src="http://localhost:3000/img/profile/customer_service.png" class="func-item-badge"></image>
				<text>联系客服</text>
				<image src="http://localhost:3000/img/profile/enter.png" class="enter-img"></image>
			</view>
			<view class="func-item">
				<image src="http://localhost:3000/img/profile/position.png" class="func-item-badge"></image>
				<text>收货地址</text>
				<image src="http://localhost:3000/img/profile/enter.png" class="enter-img"></image>
			</view>
			<view class="func-item">
				<image src="http://localhost:3000/img/profile/problem.png" class="func-item-badge"></image>
				<text>问题反馈</text>
				<image src="http://localhost:3000/img/profile/enter.png" class="enter-img"></image>
			</view>
			<view class="func-item">
				<image src="http://localhost:3000/img/profile/count.png" class="func-item-badge"></image>
				<text>账号安全</text>
				<image src="http://localhost:3000/img/profile/enter.png" class="enter-img"></image>
			</view>
			<view class="func-item">
				<image src="http://localhost:3000/img/profile/setting.png" class="func-item-badge"></image>
				<text>通用设置</text>
				<image src="http://localhost:3000/img/profile/enter.png" class="enter-img"></image>
			</view>
			<view class="func-item">
				<image src="http://localhost:3000/img/profile/about.png" class="func-item-badge"></image>
				<text>关于安居</text>
				<image src="http://localhost:3000/img/profile/enter.png" class="enter-img"></image>
			</view>
		</view>
        
		<button type="default" @click="loginOut">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "未授权",
				isShow: true,

				// 本地存储的用户信息
				userInfo: [],
				
			}
		},
		components: {},
		created() {
			const account = uni.getStorageSync("userAccount")
			if(account){
				this.$store.commit("saveUserAccount",account)
			}
			
			// 1.获取token
			const token = uni.getStorageSync("token")

			// 2.判断token是否存在
			if (token) {
				// 01.判断是否过期
				this.check_token(token)
			}
		},
		methods: {
			// 用户点击授权
			getUserInfo() {
				console.log(111)
				uni.getSetting({
					success: res => {
						if (!res.authSetting['scope.userInfo']) {
							//这里调用授权
							console.log("当前未授权");
						} else {
							//用户已经授权过了
							console.log("当前已授权");

							//获取用户信息
							uni.getUserInfo({
								success: res => {
									//把用户信息保存在vuex
									this.$store.commit("saveUser", res.userInfo)

									// 进行本地存储
									uni.setStorageSync("userInfo", res.userInfo)

									this.userInfo = res.userInfo

									//用户信息展示
									this.isShow = false

									// 02.登录
									this.Login()
								},
								fail(err) {
									console.log(err)
								}
							})
						}
					}
				})
			},

			// 登录
			Login() {
				console.log("执行了登录")

				// #ifndef H5
				// 向微信服务器发送请求拿到code
				uni.login({
					// 登录成功
					success: res => {
						const code = res.code

						// 把code发送给（我们的服务器）
						//----- 我们的服务器把AppID,Appsecret,code发送给微信服务器,
						// -----微信服务器返回session_key和openId,
						// 我们的服务器再返回token标识给前台
						uni.request({
							url: 'http://123.207.32.32:3000/login',
							method: "post",
							data: {
								code
							},
							success: res => {
								// 1.获取token
								const token = res.data.token

								// 2.把token存在vuex
								this.$store.state.token = token

								// 进行本地存储
								uni.setStorageSync("token", token)
							}
						})
					}
				})
				// #endif
			},

			// 判断token
			check_token(token) {
				console.log("执行了验证")
				// 发送网络请求，把token给我们的后台，让后台判断token是否过期
				uni.request({
					url: 'http://123.207.32.32:3000/auth',
					method: "post",
					// 服务器设置了必须要传header
					header: {
						token
					},
					success: res => {
						// 	console.log(res)
						// 判断服务器返回的数据
						if (res.data.errCode == undefined) {
							// 登录成功
							console.log("登录成功！")

							//从本地获取用户信息
							this.userInfo = uni.getStorageSync("userInfo")
							// console.log(this.userInfo)

							//展示用户信息
							this.isShow = false

							// 保存token
							this.$store.state.token = token
						} else {
							// token验证失败，重新登录
							console.log("请重新登录！")
							// this.Login()
						}
					},
					fail: err => {
						console.log(err)
					}
				})
			},

			//跳转到登录页面
			toLogin() {
				uni.navigateTo({
					url: "/pages/login/Login"
				})
			},
			
			// 退出登录
			loginOut(){
				uni.showModal({
					title:"提示框",
					content:"请确认是否要退出登录！",
					success: res => {
						if(res.confirm == true){
							// 删除本地存储的用户账户
							uni.removeStorageSync("userAccount")
							
							// 删除vuex的用户账户
							this.$store.commit("deleteUserAccount")
						}
					}
				})
			}
		},
		computed:{
			// 从vuex获取用户账号
			getUserAccount(){
				return this.$store.state.userAccount
			}
		}
	}
</script>

<style scoped>
	.title {
		display: block;
		text-align: center;
		font-size: 20px;
	}

	.user {
		color: #232E3D;
	}

	.user-info {
		width: 100%;
		height: 200rpx;

		box-sizing: border-box;
		padding-left: 50rpx;
		/* background-color: pink; */

		line-height: 200rpx;
	}

	.avatar-url {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;

		vertical-align: middle;
	}

	.nick-name {
		display: inline-block;
		margin-left: 30rpx;
	}

	.tab-control {
		display: flex;

		box-sizing: border-box;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		/* background-color: #007AFF; */
	}

	.tab-control-item {
		flex: 1;
		text-align: center;
	}

	.border-right {
		border-right: 1px solid #232E3D;
	}

	.tab-item-img {
		width: 60rpx;
		height: 60rpx;
		vertical-align: middle;
	}

	.tab-control-item text {
		display: block;
		margin-top: 20rpx;
	}

	.func {
		width: 100%;
		height: auto;

		/* background-color: red; */
	}

	.func-item {
		border-bottom: 1rpx solid #F2F3F7;
		line-height: 80rpx;

		box-sizing: border-box;
		padding: 0 15px;
	}

	.double-border {
		border-bottom: 30rpx solid #F2F3F7;
	}


	.func-item-badge {
		display: inline-block;
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;

		margin-right: 20rpx;
	}

	.enter-img {
		display: inline-block;
		width: 20rpx;
		height: 30rpx;
		vertical-align: middle;

		/* margin-left: 300rpx; */
		float: right;
		margin-top: 30rpx;
	}
</style>
