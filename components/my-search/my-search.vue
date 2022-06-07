<template>
	<view class="my-serach-container">
		<view class="my-search-box">
			<image class="icon" src="@/static/images/search.png" />
			<!-- <text class="placeholder">{{ placeholderText }}</text> -->
			<input type="text" class="placeholder" :value="placeholderText">
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-search",
		props: {
			placeholderText: {
				type: String,
				default: '搜索'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.my-serach-container {
		display: flex;
		align-items: center;
		.my-search-box {
			height: 36px;
			width: 100%;
			background-color: #ffffff;
			border-radius: 15px;
			border: 1px solid #c9c9c9;
			display: flex;
			align-items: center;
			padding: 0 10px;

			.icon {
				height: 20px;
				width: 20px;
			}

			.placeholder {
				font-size: 12px;
				margin-left: 5px;
				color: #808080;
			}
		}
	}
</style>
