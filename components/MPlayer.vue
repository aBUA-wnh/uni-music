<template name="MPlayer">
	<view class="m-player">
		<view class="m-player-box">
			<!-- 歌曲图片 -->
			<view class="album">

			</view>
			<!-- 歌曲标题 -->
			<view class="title">
				<text class="name">丑八怪</text>
				<text class="singer">- 薛之谦</text>
			</view>
			<!-- 进度条 -->
			<view class="progress">
				<u-circle-progress active-color="#333333" bg-color="transparent" width="56" border-width="2"
					:percent="100" duration="1000">
					<view class="progress-content">
						<u-icon name="play-right-fill" color="#333333" size="24" top="2"></u-icon>
						<!-- <u-icon name="pause" color="#333333" size="24"></u-icon> -->
					</view>
				</u-circle-progress>
			</view>
			<!-- 播放列表 -->
			<view class="playlist-icon-box">
				<image class="playlist-icon" src="/static/icon_playlist.png" mode="scaleToFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "MPlayer",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.m-player {
		width: 100%;
		background: $bg-color-btn;
		padding: 16rpx 0;
		position: fixed;
		bottom: 0;
	}
	
	.m-player::before {
		content: '';
		position: absolute;
		width: 200%;
		height: 1px;
		top: 0;
		border-bottom: 1px solid $split-line-color;
		transform-origin: 0 0;
		transform: scale(.5,.5);
		box-sizing: border-box
	}

	.m-player-box {
		width: 91%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	// 歌曲图片
	.album {
		width: 56rpx;
		height: 56rpx;
		border-radius: 50%;
		background: $font-color-secondary;
	}

	// 歌曲标题
	.title {
		flex: 1;
		margin: 0 20rpx;
	}
	
	.name {
		font-size: 30rpx;
		margin-right: 8rpx;
	}
	
	.singer {
		font-size: 26rpx;
		color: $font-color-secondary;
	}

	// 进度条
	.progress {
		width: 56rpx;
		height: 56rpx;
	}
	
	.progress-content {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 4rpx;
	}
	
	// 播放列表
	.playlist-icon-box {
		width: 56rpx;
		height: 56rpx;
		margin-left: 40rpx;
		position: relative;
	}
	
	.playlist-icon {
		width: 80%;
		height: 80%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
</style>
