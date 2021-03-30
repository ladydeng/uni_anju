<template>
	<view class="city-list">
		<view class="current-city">
			<text>当前定位城市：{{ getCurrentCity }}</text>
		</view>
		<view class="box">

		</view>
		<view class="hot-city">
			<text class="hot-city-title">热门城市</text>
			<block v-for="(city,index) in hotCity" :key="index">
				<view class="hot-city-item" @click="citySelect(city)">
					{{ city }}
				</view>
			</block>
		</view>
		<view class="all-city">
			<block v-for="(item,index) in allCity" :key="index">
				<text class="all-city-title">{{ index }}</text>
				<block v-for="(city,i) in item" :key="city">
					<text class="all-city-item" @click="citySelect(city)">{{ city }}</text>
				</block>
			</block>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				// currentCity:"郑州"
				hotCity: ["北京市", "上海市", "广州市", "厦门市", "杭州市", "武汉市", "深圳市", "成都市", "长沙市", "重庆市", "昆明市", "攀枝花市"],
				allCity: {
					"A": ["安庆市", "安阳市", "安顺市"],
					"B": ["北京市", "保定市", "蚌*市", "亳州市", "滨州市", "毕节市", "北海市", "宝鸡市"],
					"C": ["长春市", "成都市", "长沙市", "重庆市", "常州市", "潮汕市", "承德市", "沧州市", "滁州市", "池州市", "常德市", "郴州市", "崇州市"],
					"D": ["大连市", "东莞市", "东营市", "德州市"],
					"E": ["鄂州市"]
				}
			}
		},
		components: {},
		created() {
			console.log(1111)
			// 获取用户地理位置
			uni.getLocation({
				type: 'wgs84',
				success: res => {
					console.log("获取省份")
					//#ifdef APP-PLUS
					//address仅App端支持，需配置geocode为true
					this.$store.currentCity = res.address.province
					//#endif
				}
			})
			console.log(this.$store.state.currentCity)

		},
		methods: {
			// 用户点击城市列表选择城市
			citySelect(city) {
				// this.currentCity = item
				var that = this
				uni.showModal({
					title:"请确认您选择的城市",
					content:city,
					success(res) {
						if(res.confirm){
							that.$store.commit("changeCity", {
								"currentCity": city
							})
							uni.navigateBack({
								delta:1
							})
						}
					}
				})
			},

			// 选择城市确认
			// function showModel() {
			// 	uni.showModal({
			// 		title: '提示',
			// 		content: '您已参加并通过本次考试，是否再次进行考试？',
			// 		cancelText: "取消", // 取消按钮的文字  
			// 		confirmText: "开始考试", // 确认按钮文字  
			// 		showCancel: true, // 是否显示取消按钮，默认为 true
			// 		confirmColor: '#f55850',
			// 		cancelColor: '#39B54A',
			// 		success: (res) => {
			// 			if (res.confirm) {
			// 				this.gotoPage('/pages/course/testview?cid=' + this.id)
			// 			} else {
			// 				console.log('else', res)
			// 			}
			// 		}
			// 	})
			// }
		},
		computed: {
			getCurrentCity() {
				return this.$store.state.currentCity
			}
		}
	}
</script>

<style scoped>
	.city-list {
		padding: 0 10rpx;
	}

	.box {
		width: 100%;
		height: 100rpx;
	}

	.current-city {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		background-color: white;

		font-size: 14px;

		position: fixed;
	}

	.hot-city-title {
		font-size: 18px;
		display: block;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.hot-city-item {
		display: inline-block;

		font-size: 14px;

		padding: 12rpx;
		border-radius: 20rpx;
		background-color: #f2f3f7;


		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-bottom: 30rpx;
	}

	.all-city {
		/* background-color: pink; */
	}

	.all-city-title {
		display: block;
		font-size: 24px;
	}

	.all-city-item {
		display: block;
		font-size: 14px;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
</style>
