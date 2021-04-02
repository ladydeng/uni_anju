<template>
	<view class="register">
		<view class="input">
			<view class="input-item">
				<input type="text" v-model="userAccount" @blur="checkUserAccount" placeholder="请输入用户名" class="input-content" />
				<text class="input-title">账号</text>
				<text v-show="showAccontErr" class="err-text">{{ accountErrText }}</text>
			</view>
			<view class="input-item">
				<input type="text" password="true" v-model="userPassword" @blur="checkUserPassword" placeholder="请输入密码" class="input-content" />
				<text class="input-title">密码</text>
				<text v-show="showPasswordErr" class="err-text">{{ passwordErrText }}</text>
			</view>
		</view>

		<view class="btn">
			<button type="default" class="register-btn" @click="Register">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userAccount:"",
				userPassword:"",
				
				// 是否显示账户密码
				showAccontErr:false,
				showPasswordErr:false,
				
				// 错误提示文本
				accountErrText:"账户不能为空",
				passwordErrText:"密码不能为空"
			}
		},
		components: {

		},
		onLoad() {

		},
		methods: {
			// 用户点击登录
			Register(){
			   // 账号密码不为空
			   if(this.userAccount !== "" && this.userPassword !== ""){
				  // 1.向我们的服务器发送请求（检验该账号是否存在，若存在，则显示该用户已存在）
				  
				  // 2.若账户不存在则进行数据库存储，注册成功
				  console.log("注册")
				  
				  // 发送请求
				  uni.request({
				  	url: " http://localhost:4000/register",
				  	method: "GET",
				  	data:{
				  		userAccount: this.userAccount,
				  		userPassword: this.userPassword
				  	},
				  	// 收到开发者服务器成功返回
				  	success(res) {
				  		console.log("请求成功")
						cosnole.log(res)
				  		
				  	},
				  	// 接口调用失败
				  	fail(err) {
				  		console.log("请求失败，未接收到服务器返回数据")
				  	    console.log(err)
					}
				  })
			   }
			},
			
			// 判断账户是否为空
			checkUserAccount(){
				if(this.userAccount == ""){
					this.showAccontErr = true
				}else{
					this.showAccontErr = false
				}
			},
			
			// 判断密码是否为空
			checkUserPassword(){
				if(this.userPassword == ""){
					this.showPasswordErr = true
				}else{
					this.showPasswordErr = false
				}
			}
		}
	}
</script>

<style scoped>
	.register {
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

	.register-btn {
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

	.forget-pwd {
		text-align: right;
	}
	
	.err-text{
		color: red;
	}
</style>
