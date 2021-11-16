<template name="QuickNavigation">
	<view class="quick-navigation">
		<view class="quick-navigation-box">
			<!-- 导航item -->
			<view class="quick-navigation-item" v-for="(item, index) in homepageIcons">
				<!-- 导航图标 -->
				<view class="quick-navigation-icon-box">
					<image class="quick-navigation-icon" :style="'-webkit-mask-image: url(' + item.iconUrl + ');'"
						mode="scaleToFill">
					</image>
					<!-- 日期 -->
					<text class="date-text" v-if="index === 0">{{day}}</text>
				</view>
				<!-- 导航名称 -->
				<text class="quick-navigation-name">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "QuickNavigation",
		props: {
			homepageIcons: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				// 当天日期
				day: '1'
			};
		},
		mounted() {
			// console.log('QuickNavigation组件初始化')
			this.getDay()
		},
		methods: {
			// 获取当天日期
			getDay() {
				let date = new Date
				this.day = date.getDate()
			}
		}
	}
</script>

<style lang="scss">
	.quick-navigation {
		width: 100%;
		padding-bottom: 20rpx;
		position: relative;
	}
	
	.quick-navigation::before {
		content: '';
		position: absolute;
		width: 200%;
		height: 1px;
		bottom: 0;
		border-bottom: 1px solid $split-line-color;
		transform-origin: 0 0;
		transform: scale(.5,.5);
		box-sizing: border-box
	}

	.quick-navigation-box {
		width: 91%;
		margin: 0 auto;
		justify-content: space-between;
		@include flex-row
	}

	// 导航item
	.quick-navigation-item {
		@include flex-column-center
	}

	// 导航图标
	.quick-navigation-icon-box {
		width: 96rpx;
		height: 96rpx;
		background: $bg-color-icon;
		border-radius: 50%;
		position: relative;
		@include flex-column-center
	}

	.quick-navigation-icon {
		width: 90%;
		height: 90%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		-webkit-mask-size: 100%;
		background: linear-gradient(45deg, $theme-color, $theme-color, $white-color);
	}

	// 导航名称
	.quick-navigation-name {
		color: $font-color-ordinary;
		font-size: 22rpx;
		letter-spacing: 2rpx;
		text-align: center;
		margin-top: 10rpx;
	}

	// 日期
	.date-text {
		line-height: 108rpx;
		z-index: 9;
		font-size: 22rpx;
		color: $bg-color-icon;
		margin-right: 2rpx;
	}
</style>
