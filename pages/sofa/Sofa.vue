<template>
	<view class="sofa">
		<view class="titles">
			<block v-for="(item,index) in titles" :key="index">
				<view class="titles-item">
					<text>{{ item }}</text>
				</view>
			</block>
		</view>
		<view class="taps">
			<block v-for="(item,index) in taps" :key="index">
				<view class="taps-item">
					<text>{{ item }}</text>
				</view>
			</block>
		</view>
		<sofa-product-list />
	</view>
</template>

<script>
	import SofaProductList from "./childComps/SofaProductList.vue"
	
	export default {
		data() {
			return {
				titles:["风格","排序","筛选"],
				taps:["布艺沙发","皮质沙发","实木沙发","布艺沙发"]
			}
		},
		components:{
			SofaProductList
		},
		onLoad() {
			
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.sofa{
		color: #232E3D;
	}
	
	.titles, .taps{
		display: flex;
		line-height: 100rpx;
		text-align: center;
		border-bottom: 1px solid #f2f3f7;
	}
	
	.titles-item, .taps-item{
		flex: 1;
	}
	
	.titles-item{
		font-size: 18px;
	}
	
	.taps-item text{
		color: #8A94A1;
		background-color: #f2f3f7;
		padding: 4px;
		border-radius: 15px;
		
		font-size: 14px;
	}
</style>
