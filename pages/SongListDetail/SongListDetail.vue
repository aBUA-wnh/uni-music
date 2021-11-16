<template>
	<view class="container">
		<!-- 信息 -->
		<view class="songlist-info">
			<!-- 背景 -->
			<image class="info-bg" :src="playlistInfo.coverImgUrl" mode="scaleToFill"></image>
			<view class="songlist-info-box">
				<!-- 歌单封面 -->
				<AlbumCover :imageUrl="playlistInfo.coverImgUrl" :playCount="playlistInfo.playCount"></AlbumCover>
				<!-- 歌单信息 -->
				<view class="info-box">
					<!-- 歌单名 -->
					<text class="name">{{playlistInfo.name}}</text>
					<!-- 歌单创建者 -->
					<view class="creator">
						<image class="avatar" :src="playlistInfo.creator.avatarUrl" mode="scaleToFill"></image>
						<text class="nickname">{{playlistInfo.creator.nickname}}</text>
					</view>
					<!-- 歌单描述 -->
					<view class="description">
						<text class="nickname">{{playlistInfo.description}}</text>
						<u-icon name="arrow-right" color="#fff" size="24"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<!-- 按钮 -->
		<view class="buttons">
			<view class="buttons-box">
				<view class="buttons-item">
					<view class="button">
						<u-icon name="grid" color="#333" size="36"></u-icon>
						<text class="button-text">{{playlistInfo.subscribedCount !== 0 ? playlistInfo.subscribedCount : '收藏'}}</text>
					</view>
				</view>
				<view class="buttons-item">
					<view class="button">
						<u-icon name="chat" color="#333" size="36"></u-icon>
						<text class="button-text">{{playlistInfo.commentCount !== 0 ? playlistInfo.commentCount : '评论'}}</text>
					</view>
				</view>
				<view class="buttons-item">
					<view class="button">
						<u-icon name="zhuanfa" color="#333" size="36"></u-icon>
						<text class="button-text">分享</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 播放列表 -->
		<view class="playlist">
			<!-- 列表标题栏 -->
			<view class="list-title-bar">
				<view class="list-title-item">
					<u-icon name="play-circle-fill" color="#EB4D44" size="56" top="3"></u-icon>
					<view class="list-title-box">
						<text class="list-title-text">播放全部</text>
						<text class="list-number">（{{playlistInfo.trackIds.length}}）</text>
					</view>
				</view>
				<view class="list-title-item">
					<u-icon name="download" color="#333333" size="44"></u-icon>
					<u-icon class="checkmark-icon" name="checkmark" color="#333333" size="44"></u-icon>
				</view>
			</view>
		</view>
		<!-- 列表单曲 -->
		<SongList :list="songList"></SongList>
	</view>
</template>

<script>
	import AlbumCover from '@/components/part/AlbumCover.vue'
	import SongList from '@/components/part/SongList.vue'
	export default {
		components: {
			AlbumCover,
			SongList
		},
		data() {
			return {
				// 歌单ID
				creativeId: '',
				// 歌单信息
				playlistInfo: {},
				// 歌单列表
				songList: []
			}
		},
		onLoad(e) {
			this.creativeId = e.creativeId
		},
		mounted() {
			this.loadData()
		},
		methods: {
			// 数量添加单位
			countAddUnits(value) {
				let string = value.toString()
				if (string.length > 5 && string.length <= 8) {
					let newString = string.substring(0, string.length-4)
					return `${newString}万`
				} else if (string.length > 8) {
					let newString = string.substring(0, string.length-8)
					return `${newString}亿`
				} else {
					return string
				}
				
			},
			loadData() {
				this.$api.songListDetail.playlistDetail(this.creativeId).then(res => {
					let playlistInfo = res.data.playlist
					let songList = playlistInfo.tracks
					this.playlistInfo = playlistInfo
					console.log('歌单信息', playlistInfo)
					// 播放量 评论 订阅数
					let [playCount, commentCount, subscribedCount] = [playlistInfo.playCount, playlistInfo.commentCount, playlistInfo.subscribedCount]
					this.playlistInfo.playCount = this.countAddUnits(playCount)
					this.playlistInfo.commentCount = this.countAddUnits(commentCount)
					this.playlistInfo.subscribedCount = this.countAddUnits(subscribedCount)
					
					// 处理当歌手数量大于一个时用'/'隔开
					songList.forEach(listItem => {
						// 列表里歌手信息
						let ar = listItem.ar
						// 创建空数组,将每个歌手名称添加进数组，再用join进行分割成字符串
						let arArray = []
						let arName = ''
						ar.forEach(arItem => {
							arArray.push(arItem.name)
							arName = arArray.join('/')
						})
						listItem.arName = arName
					})
					this.songList = songList
				})
			}
		}
	}
</script>

<style lang="scss">
	.songlist-info {
		width: 100%;
		padding: 20rpx 0 80rpx;
		position: relative;
		overflow: hidden;
	}

	/* 背景 */
	.info-bg {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		z-index: -1;
		filter: brightness(1.5) blur(60px);
	}

	.songlist-info-box {
		width: 91%;
		margin: 0 auto;
		@include flex-row
	}

	/* 歌单封面 */
	.cover-img {
		width: 220rpx;
		height: 220rpx;
		border-radius: 24rpx;
		z-index: 9;
	}

	/* 歌单信息 */
	.info-box {
		flex: 1;
		margin-left: 20rpx;
		justify-content: space-between;
		@include flex-column
	}

	// 歌单名
	.name {
		font-size: 32rpx;
		color: $white-color;
		letter-spacing: 2rpx;
		margin-bottom: 20rpx;
		@include text-overflow-2
	}

	// 歌单创建者
	.creator {
		@include flex-row-center
	}

	.avatar {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 10rpx;
	}

	.nickname {
		font-size: 24rpx;
		color: $white-color;
		letter-spacing: 2rpx;
		@include text-overflow-1
	}

	.description {
		@include flex-row-center
	}

	// 按钮
	.buttons {
		width: 80%;
		margin: -20rpx auto 0;
		background: $white-color;
		border-radius: 60rpx;
		overflow: hidden;
		box-shadow: 0 2px 15px #cccccc80;
	}

	.buttons-box {
		padding: 20rpx 40rpx;
		justify-content: center;
		@include flex-row-center
	}

	.buttons-item {
		flex: 1;
		@include flex-column-center
	}

	.button {
		margin: 0 auto;
		@include flex-row-center
	}

	.button-text {
		font-size: 24rpx;
		color: $font-color-important;
		margin-left: 10rpx;
	}

	// 播放列表
	.playlist {
		width: 91%;
		margin: 40rpx auto 10rpx;
	}

	// 列表标题
	.list-title-bar {
		justify-content: space-between;
		@include flex-row-center
	}

	.list-title-item {
		@include flex-row-center
	}

	.list-title-box {
		margin-left: 16rpx;
		align-items: baseline;
		@include flex-row
	}

	.list-title-text {
		color: $font-color-important;
		font-size: 36rpx;
		font-weight: bold;
	}

	.list-number {
		color: $font-color-secondary;
		font-size: 24rpx;
	}

	.checkmark-icon {
		margin-left: 40rpx;
	}
</style>
