<template>
	<view class="swiper">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
						:duration="duration">
						<swiper-item>
							<view class="swiper-item uni-bg-red">
								<image src="http://localhost:3000/img/swiper/style01.jpg" class="swiper-img"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green">
								<image src="http://localhost:3000/img/swiper/style02.jpg" class="swiper-img"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-blue">
								<image src="http://localhost:3000/img/swiper/style03.jpg" class="swiper-img"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="next">
			<text @click="next">跳过({{ timeOut }})</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				timeOut:9
			}
		},
		onShow(){
			// 9秒后自动进入首页
			setTimeout(()=>{
				uni.switchTab({
					url:"/pages/index/index"
				})
			},9000)
			
			// 倒计时
			setInterval(()=>{
				this.timeOut = this.timeOut - 1
			},1000)
		},
		methods:{
			// 点击 跳过 进入首页
			next(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style scoped>
	.swiper {
		width: 100vw;
		height: 90vh;
	}

	.swiper-img {
		width: 100vw;
		height: 80vh;
	}

	.next {
		display: block;
		color: #8A94A1;
		position: absolute;
		bottom: 60rpx;
		right: 80rpx;
		font-size: 18px;

		
	}
	
	.next text:hover{
		color: #232E3D;
	}
</style>
