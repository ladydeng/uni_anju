<template>
	<view class="tab-control">
		<view class="box-fixed">
			<view class="control-title">
				<block v-for="(item,index) in titles" :key="index">
					<view class="control-item">
						<text @click="itemClick(index)" :class="{active:currentIndex == index}">{{ item }}</text>
					</view>
				</block>
			</view>
		</view>
		<view class="control-content">
			<block v-if="currentIndex== 0">
				<category-classification />
			</block>
			<block v-if="currentIndex== 1">
				<category-form />
			</block>
			<block v-if="currentIndex== 2">
				<category-space />
			</block>
		</view>
	</view>
</template>

<script>
	import CategoryClassification from "./childComps/CategoryClassification.vue"
	import CategoryForm from "./childComps/CategoryForm.vue"
	import CategorySpace from "./childComps/CategorySpace.vue"
	
	export default {
		data() {
			return {
				currentIndex:0,
				titles:["品类","风格","空间"]
			}
		},
		components:{
			CategoryClassification,
			CategoryForm,
			CategorySpace
		},
		created() {
			
			
		},
		methods: {
			itemClick(index){
				// 设置currentIndex
				this.currentIndex = index
			}
		}
	}
	
</script>

<style scoped>
	.tab-control{
		padding: 0 15px;
		display: flex;
		flex-direction: row;
	}
	
	.box-fixed{
		flex: 2;
		background-color: white;
	}
	
	.control-title{
		position: fixed;
		color: #232e3d;
	}
	
	.control-content{
		flex: 8;
	}
	
	.control-item{
		width: 100%;
		height: 180rpx;
		line-height: 180rpx;
	}
	
	.active{
		border-left: 40rpx solid #232e3d;
		padding-left: 10rpx;
	}
</style>
