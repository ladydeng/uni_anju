<template>
	<view class="banner">
		<image src="http://192.168.124.34:3000/img/index/banner/banner.png" class="banner-img" @click="toSafeGuard"></image>
		<view class="banner-describe">
			<block v-for="(item,index) in describe" :key="index">
				<view class="describe-item">
					{{ item }}
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				describe:["品牌制造商提供","七天无理由退换","线下真实体验"]
			}
		},
		components: {},
		created() {

		},
		methods: {
			toSafeGuard(){
				uni.navigateTo({
					url:"/pages/safeGuard/SafeGuard"
				})
			}
		},
		computed: {

		}
	}
</script>

<style scoped>
	.banner-img {
		width: 100%;
		height: 234rpx;
	}
	
	.banner-describe{
		width: 100%;
		padding: 0 15rpx;
		margin-top: 18rpx;
		margin-bottom: 18rpx;
		
		display: flex;
		color: #8a94a1;
		
		/* background-color: pink; */
	}
	.describe-item{
		flex: 1;
		font-size: 14px;
		text-align: center;
	}
</style>
