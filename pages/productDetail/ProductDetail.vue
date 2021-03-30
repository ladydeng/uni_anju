<template>
	<view class="product-detail">
		<product-detail-info />
		<product-detail-comment />


		<bottom-bar />

		<ul>
			<li>这是内容1</li>
			<li>这是内容2</li>
			<li>这是内容3</li>
			<li>这是内容4</li>
			<li>这是内容5</li>
			<li>这是内容6</li>
			<li>这是内容7</li>
			<li>这是内容8</li>
			<li>这是内容9</li>
			<li>这是内容10</li>
			<li>这是内容11</li>
			<li>这是内容12</li>
			<li>这是内容13</li>
			<li>这是内容14</li>
			<li>这是内容15</li>
			<li>这是内容16</li>
			<li>这是内容17</li>
			<li>这是内容18</li>
			<li>这是内容19</li>
			<li>这是内容20</li>
			<li>这是内容21</li>
			<li>这是内容22</li>
			<li>这是内容23</li>
			<li>这是内容24</li>
			<li>这是内容25</li>
			<li>这是内容26</li>
			<li>这是内容27</li>
			<li>这是内容28</li>
			<li>这是内容29</li>
			<li>这是内容30</li>
			<li>这是内容31</li>
			<li>这是内容32</li>
			<li>这是内容33</li>
			<li>这是内容34</li>
			<li>这是内容35</li>
			<li>这是内容36</li>
			<li>这是内容37</li>
			<li>这是内容38</li>
			<li>这是内容39</li>
			<li>这是内容40</li>
			<li>这是内容41</li>
			<li>这是内容42</li>
			<li>这是内容43</li>
			<li>这是内容44</li>
			<li>这是内容45</li>
			<li>这是内容46</li>
			<li>这是内容47</li>
			<li>这是内容48</li>
			<li>这是内容49</li>
			<li>这是内容50</li>
			<li>这是内容51</li>
			<li>这是内容52</li>
			<li>这是内容53</li>
			<li>这是内容54</li>
			<li>这是内容55</li>
			<li>这是内容56</li>
			<li>这是内容57</li>
			<li>这是内容58</li>
			<li>这是内容59</li>
			<li>这是内容60</li>
			<li>这是内容61</li>
			<li>这是内容62</li>
			<li>这是内容63</li>
			<li>这是内容64</li>
			<li>这是内容65</li>
			<li>这是内容66</li>
			<li>这是内容67</li>
			<li>这是内容68</li>
			<li>这是内容69</li>
			<li>这是内容70</li>
			<li>这是内容71</li>
			<li>这是内容72</li>
			<li>这是内容73</li>
			<li>这是内容74</li>
			<li>这是内容75</li>
			<li>这是内容76</li>
			<li>这是内容77</li>
			<li>这是内容78</li>
			<li>这是内容79</li>
			<li>这是内容80</li>
			<li>这是内容81</li>
			<li>这是内容82</li>
			<li>这是内容83</li>
			<li>这是内容84</li>
			<li>这是内容85</li>
			<li>这是内容86</li>
			<li>这是内容87</li>
			<li>这是内容88</li>
			<li>这是内容89</li>
			<li>这是内容90</li>
			<li>这是内容91</li>
			<li>这是内容92</li>
			<li>这是内容93</li>
			<li>这是内容94</li>
			<li>这是内容95</li>
			<li>这是内容96</li>
			<li>这是内容97</li>
			<li>这是内容98</li>
			<li>这是内容99</li>
			<li>这是内容100</li>
		</ul>
	</view>
</template>

<script>
	import BottomBar from "../../components/content/bottomBar/BottomBar.vue"
	import ProductDetailInfo from "./childComps/ProductDetailInfo.vue"
	import ProductDetailComment from "./childComps/ProductDetailComment.vue"

	export default {
		data() {
			return {
				product: ""
			}
		},
		components: {
			BottomBar,
			ProductDetailInfo,
			ProductDetailComment
		},
		created() {

		},
		methods: {

		}
	}
</script>

<style>
	.product-detail{
		
	}
</style>
