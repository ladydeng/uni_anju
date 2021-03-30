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
		// 用户信息
		userInfo:[],
		// 购物车数据
		shoppingCart:[]
	},
	mutations:{
		// 设置currentCity
		changeCity(state,payLoad){
			state.currentCity = payLoad.currentCity
		},
		// 保存用户信息
		saveUser(state , user){
			state.userInfo = user; 
		},
		// 加入购物车
		addToCart(state,product){
			state.shoppingCart.push(product)
		}
	}
})

export default store