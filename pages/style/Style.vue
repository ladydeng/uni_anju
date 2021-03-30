<template>
	<view class="style">
		<s-nav-bar @tab-control="changeView"/>
		
		<view class="content">
			<block v-if="currentIndex== 0">
				<northern-europe/>
			</block>
			<block v-if="currentIndex== 1">
				<modern/>
			</block>
			<block v-if="currentIndex== 2">
				<europe-america/>
			</block>
			<block v-if="currentIndex== 3">
				<new-chinese-style/>
			</block>
		</view>
	</view>
</template>

<script>
	import SNavBar from "./childComps/SNavBar.vue"
	import NorthernEurope from "./childComps/NorthernEurope.vue"
	import Modern from "./childComps/Modern.vue"
	import EuropeAmerica from "./childComps/EuropeAmerica.vue"
	import NewChineseStyle from "./childComps/NewChineseStyle.vue"
	
	export default {
		data() {
			return {
				currentIndex:"0",
				// 控制组件显示
				northernEuropeShow:true,
				modernShow:false,
				europeAmericaShow:false,
				newChineseStyleShow:false
			}
		},
		components:{
			SNavBar,
			NorthernEurope,
			Modern,
			EuropeAmerica,
			NewChineseStyle
		},
		onLoad() {
			
		},
		methods: {
			changeView(index){
				// 设置Currentindex
				this.currentIndex = index
			}
		}
	}
</script>

<style scoped>
	.content{
		padding: 0 15px;
	}
</style>
