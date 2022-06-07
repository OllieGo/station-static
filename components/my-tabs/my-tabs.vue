<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		name:"my-tabs",
		props: {
			//1.可以在父组件中定制样式
			//配置对象
			config: {
				type: Object,
				//default 如果是复杂数据类型，那么需要指定 value 为一个函数，通过 返回值的形式执行默认值
				default: () => {
					return {};
				}
			},
			//2.可以在父组件中指定数据
			tabData: {
				type: Array,
				default: () => {
					return [];
				}
			},
			//3.可以在父组件中选中项
			defaultIndex: {
				type: Number,
				default: 0
			}
		}
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>