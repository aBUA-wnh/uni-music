<template name="AlbumCover">
	<!-- 专辑封面 -->
	<view class="album-cover">
		<!-- 封面样式 -->
		<view class="cover-style"></view>
		<!-- 封面图片 -->
		<image class="cover-image" :src="imageUrl" mode="scaleToFill"></image>
		<!-- 播放量 -->
		<view class="player-amount" v-if="playCount !== ''">
			<u-icon name="play-right" color="#ffffff" size="22"></u-icon>
			<text class="player-amount-text">{{playCount}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "AlbumCover",
		props: {
			imageUrl: {
				type: String,
				default: ''
			},
			playCount: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	/* 专辑封面 */
	.album-cover {
		width: 210rpx;
		height: 218rpx;
		position: relative;
	}

	/* 封面图片 */
	.cover-image {
		width: 210rpx;
		height: 210rpx;
		border-radius: 16rpx;
		position: absolute;
		bottom: 0;
	}
	
	/* 封面样式 */
	.cover-style {
		width: 180rpx;
		height: 180rpx;
		border-radius: 20rpx;
		background: #ffffff73;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
	
	/* 播放量 */
	.player-amount {
		padding: 0 18rpx 2rpx;
		background: #cccccc99;
		border-radius: 30rpx;
		position: absolute;
		top: 16rpx;
		right: 10rpx;
		@include flex-row-center
	}
	
	.player-amount-text {
		color: $white-color;
		font-size: 22rpx;
		margin-left: 2rpx;
	}
</style>
