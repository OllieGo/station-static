<template>
	<view class="hot-container">
		<image class="logo" src="@/static/images/olliego.jpg" mode="aspectFill" />
		<view class="search-box">
			<my-search></my-search>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
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
