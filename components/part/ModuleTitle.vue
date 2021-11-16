<template name="ModuleTitle">
	<!-- 模块标题 -->
	<view class="subTitle">
		<!-- 标题 -->
		<text class="title">{{title}}</text>
		<!-- 按钮 -->
		<view class="button" v-if="text">
			<text class="text">{{text}}</text>
			<u-icon name="arrow-right" color="$font-color-important" size="22"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ModuleTitle",
		props: {
			title: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				
			};
		},
		mounted() {
			// console.log('模块标题初始化')
		}
	}
</script>

<style lang="scss">
	/* 模块标题 */
	.subTitle {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	/* 标题 */
	.title {
		font-weight: bold;
		font-size: 32rpx;
		color: $font-color-important;
	}

	/* 按钮 */
	.button {
		border: 1px solid $split-line-color;
		border-radius: 50rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 4rpx 12rpx 4rpx 20rpx;
	}

	.text {
		font-size: 24rpx;
		color: $font-color-important;
	}
</style>
