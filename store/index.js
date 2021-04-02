import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
	state:{
		// 验证账户过期
		token:"",
		// 当前城市
		currentCity:"",
		// 小程序用户信息
		userInfo:[],
		// 购物车数据
		shoppingCart:[],
		// H5用户账号
		userAccount:""
	},
	mutations:{
		// 设置currentCity
		changeCity(state,payLoad){
			state.currentCity = payLoad.currentCity
		},
		// 小程序保存用户信息
		saveUser(state , user){
			state.userInfo = user; 
		},
		// 加入购物车
		addToCart(state,product){
			state.shoppingCart.push(product)
		},
		// H5保存用户账号
		saveUserAccount(state,userAccount){
			state.userAccount = userAccount
		},
		
		// 删除H5保存的用户账号
		deleteUserAccount(state,payLoad){
			state.userAccount = ""
		}
	}
})

export default store