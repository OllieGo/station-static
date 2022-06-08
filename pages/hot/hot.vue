<template>
	<view class="hot-container">
		<image class="logo" src="@/static/images/olliego.jpg" mode="aspectFill" />
		<view class="search-box">
			<my-search></my-search>
		</view>
		
	</view>
</template>

<script>
	import { getHotTabs } from 'api/hot';
	export default {
		data() {
			return {

			};
		},
		/**
		 * created: 组件实现配置完成，但 DOM 未渲染，进行网络请求，配置响应式数据
		 */
		created() {
			this.loadHotTabs();
		},
		methods: {
			// 获取 热搜文章类型
			async loadHotTabs() {
				const res = await getHotTabs();
				console.log(res);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hot-container {
		background-color: #ffffff;
		.logo {
			width: 100%;
			height: 150px;
		}
		.search-box {
			padding: 0 16px;
			margin-bottom: 8px;
		}
	}
</style>
