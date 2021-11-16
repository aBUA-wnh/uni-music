<template name="Header">
	<view class="header">
		<!-- header背景 -->
		<!-- <view class="header-bg" :style="'background-image: url(' + headerBg + ');'"></view> -->
		<!-- 导航栏 -->
		<view class="navigation" :style="'background: ' + (sticky? '#ffffff' : 'transparent') + ';'">
			<!-- 菜单列表 -->
			<image class="menu-list-icon" src="/static/icon_list.png" mode="scaleToFill"></image>
			<!-- 搜索框 -->
			<input type="text" class="search-input" placeholder="输入关键词" />
			<!-- 个人中心 -->
			<view class="user-box">
				<image class="user-icon" src="/static/icon_user.png" mode="scaleToFill"></image>
				<!-- <image class="user-img" src="/static/img_songs1.jpg" mode="scaleToFill"></image> -->
			</view>
		</view>
		<!-- banner轮播 -->
		<view class="banner">
			<u-swiper :list="banners" name="pic" mode="rect" img-mode="scaleToFill" interval="5000" height="276"
				border-radius="16" @change="changeBanner">
			</u-swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Header",
		props: {
			banners: {
				type: Array,
				default: []
			},
			sticky: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				// banner背景
				headerBg: ''
			}
		},
		mounted() {
			// console.log('Header组件初始化')
			// 初始化banner背景
			this.headerBg = this.banners[0].pic
		},
		methods: {
			// banner切换
			changeBanner(index) {
				let bannerCurrent = index
				let bannersInfo = this.banners
				setTimeout(() => {
					this.headerBg = bannersInfo[bannerCurrent].pic
				}, 500)
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	// header背景
	.header-bg {
		width: 100%;
		height: 200rpx;
		background-size: cover;
		background-position: center;
		filter: blur(180px);
		position: absolute;
		top: 0;
		overflow: hidden;
		z-index: -1;
		transition: all 2.5s;
	}

	/* 导航栏 */
	.navigation {
		padding: 0 32rpx;
		height: 88rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
		transition: .4s;
	}

	// 菜单列表
	.menu-list-icon {
		width: 54rpx;
		height: 54rpx;
	}

	/* 搜索框 */
	.search-input {
		flex: 1;
		height: 60rpx;
		margin: 0 30rpx;
		background: #FCFCFC;
		border-radius: 50rpx;
		padding: 0 20rpx;
		text-align: center;
		color: $white-color;
		font-size: 28rpx;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, .15);
	}

	// 个人中心
	.user-box {
		width: 52rpx;
		height: 52rpx;
		border-radius: 50%;
		border: 1px solid $font-color-ordinary;
		overflow: hidden;
		position: relative;
		@include flex-column-center
	}

	.user-icon {
		width: 80%;
		height: 80%;
		position: absolute;
		bottom: 0;
	}

	.user-img {
		width: 100%;
		height: 100%;
	}

	// banner轮播
	.banner {
		width: 91%;
		margin: 108rpx auto 0;
	}
</style>
