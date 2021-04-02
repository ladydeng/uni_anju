<template>
	<view class="live-circle">
		<block v-for="(item,index) in liveCircle" :key="index">
			<view class="title">
				<image :src="item.userImg" class="user-img"></image>
				<text class="user-name">{{ item.userName }}</text>
				<text class="follow">关注</text>
			</view>
			<view class="content">
				<image :src="item.banner" class="banner-img"></image>
				<text class="describe">{{ item.describe }}</text>
			</view>
			<view class="badge">
				<view class="badge-item">
					<image src="http://localhost:3000/img/live_home/share.png" class="badge-img"></image>
				</view>
				<view class="badge-item right">
					<text class="news">{{ item.news }}</text>
					<image src="http://localhost:3000/img/live_home/news.png" class="badge-img"></image>
				</view>
				<view class="badge-item right">
					<text class="collection" :style="{ 'color': isCollectionShow ? item.collectionColor : '' }">{{ item.collection }}</text>
					<image src="http://localhost:3000/img/live_home/collection.png" class="badge-img" @click.once="collectionIncrement(index,item.collection)"></image>
				</view>
				<view class="badge-item right">
					<text class="good" :style="{ 'color': isGoodShow ? item.goodColor : '' }">{{ item.good }}</text>
					<image src="http://localhost:3000/img/live_home/good.png" class="badge-img" @click.once="goodIncrement(index,item.good)"></image>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 控制动态样式
				isCollectionShow:false,
				isGoodShow:false,
				
				// 生活圈信息
				liveCircle:[
					{
						userImg:"http://localhost:3000/img/live_home/user.png",
						userName:"左音",
						banner:"http://localhost:3000/img/live_home/life_circle01.png",
						describe:"家中的美丽源于家具的选择，给人的感觉也会大有不同",
						news:62,
						collection:76,
						good:90,
						collectionColor:"",
						goodColor:""
					},
					{
						userImg:"http://localhost:3000/img/live_home/user.png",
						userName:"野客",
						banner:"http://localhost:3000/img/live_home/life_circle02.png",
						describe:"好的家具风格是由室内搭配去营造的，每一个装饰品都发挥着不一样的气息",
						news:72,
						collection:96,
						good:80,
						collectionColor:"",
						goodColor:""
					},
					{
						userImg:"http://localhost:3000/img/live_home/user.png",
						userName:"违心",
						banner:"http://localhost:3000/img/live_home/life_circle03.png",
						describe:"家居也并不是空间越大越好，需要合理搭配好各个位置的区域才可达到小而美的感觉",
						news:102,
						collection:126,
						good:180,
						collectionColor:"",
						goodColor:""
					},
					{
						userImg:"http://localhost:3000/img/live_home/user.png",
						userName:"时常饿",
						banner:"http://localhost:3000/img/live_home/life_circle04.png",
						describe:"室内不同风格的设计，能与家居充分产生不一样的家居感受，更具特色",
						news:152,
						collection:117,
						good:160,
						collectionColor:"",
						goodColor:""
					},
					{
						userImg:"http://localhost:3000/img/live_home/user.png",
						userName:"千夜",
						banner:"http://localhost:3000/img/live_home/life_circle05.png",
						describe:"按照风格的设计，可以使家呈现不同的气氛，风格的选定也是最重要的一点",
						news:252,
						collection:157,
						good:180,
						collectionColor:"",
						goodColor:""
					}
				]
			}
		},
		components: {
			
		},
		created() {
	
		},
		methods: {
			collectionIncrement(index,collection){
				const num1 = parseInt(collection)
				
				this.liveCircle[index].collection = num1+1
				console.log(this.liveCircle[index].collection)
				
				// 控制动态样式
				this.isCollectionShow = true
				this.liveCircle[index].collectionColor = "red"
			},
			
			goodIncrement(index,good){
				const num2 = parseInt(good)
				
				this.liveCircle[index].good = num2+1
				console.log(this.liveCircle[index].good)
				
				// 控制动态样式
				this.isGoodShow = true
				this.liveCircle[index].goodColor = "red"
			}
		}
	}
</script>

<style scoped>
	.active{
		color: red;
	}
	
	.title{
		line-height: 120rpx;
		/* background-color: red; */
	}
	
	.user-img{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		vertical-align: middle;
	}
	
	.user-name{
		display: inline-block;
		margin-left: 20rpx;
	}
	
	.follow{
		display: inline-block;
		width: 100rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		
		padding: 8rpx;
		background-color: #232E3D;
		color: white;
		border-radius: 30rpx;
		float: right;
		margin-top: 20rpx;
	}
	
	.banner-img{
		width: 100%;
		height: 400rpx;
	}
	
	.describe{
		display: block;
		
		padding: 0 30rpx;
		line-height: 50rpx;
		margin-top: 10rpx;
	}
	
	.badge{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		
		border-bottom: 1rpx solid #F2F3F7;
		box-sizing: border-box;
		padding: 0 30rpx;
		
		/* background-color: red; */
		
		display: flex;
	}
	
	.right{
		text-align: right;
	}
	
	.badge-item{
		flex: 1;
	}
	
	.badge-img{
		width: 35rpx;
		height: 35rpx;
		vertical-align: middle;
		/* background-color: red; */
	}
	
	.news, .collection, .good{
		position: relative;
		right: -70rpx;
		top: -30rpx;
		
		font-size: 12px;
		color: #8A94A1;
	}
</style>
