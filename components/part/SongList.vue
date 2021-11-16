<template name="SongList">
	<!-- 列表单曲 -->
	<view class="list-item-box">
		<view class="list-item" v-for="(item, index) in list" @click="nav2Play(item.id)">
			<!-- 序号 -->
			<text class="list-order">{{index + 1}}</text>
			<!-- 歌曲信息 -->
			<view class="list-info-box">
				<!-- 歌曲名 -->
				<view class="song-name-box">
					<text class="song-name">
						{{item.name}}
						<text class="song-name-explain" v-if="item.alia.length !== 0">（{{item.alia[0]}}）</text>
					</text>
				</view>
				<!-- 歌手专辑 -->
				<view class="singer-album">
					<text class="singer">
						{{item.arName}}
						<text class="album" v-if="item.al"> - {{item.al.name}}</text>
					</text>
				</view>
			</view>
			<!-- 操作按钮 -->
			<view class="list-icon-box">
				<u-icon class="list-icon" name="play-circle" color="#888888" size="48" v-if="item.mv === 0"></u-icon>
				<u-icon class="list-icon" name="more-dot-fill" color="#888888" size="48"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "SongList",
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		data() {
			return {

			};
		},
		mounted() {
			
		},
		methods: {
			// 跳转播放页
			nav2Play(id) {
				console.log(id)
			}
		}
	}
</script>

<style lang="scss">
	/* 列表单曲 */
	.list-item-box {
		margin-bottom: 80rpx;
	}
	
	.list-item {
		width: 94%;
		margin: 30rpx auto;
		@include flex-row-center
	}

	/* 序号 */
	.list-order {
		width: 80rpx;
		color: $font-color-secondary;
		font-size: 32rpx;
		text-align: center;
	}

	/* 歌曲信息 */
	.list-info-box {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	/* 操作按钮 */
	.list-icon-box {
		@include flex-row-center
	}

	.list-icon {
		margin: 0 14rpx;
	}

	/* 歌曲名 */
	.song-name-box {
		font-size: 32rpx;
		margin-bottom: 10rpx;
		@include flex-row-center
	}

	.song-name {
		color: $font-color-important;
		@include text-overflow-1
	}

	.song-name-explain {
		color: $font-color-secondary;
	}

	/* 歌手专辑 */
	.singer-album {
		color: $font-color-secondary;
		font-size: 24rpx;
		@include text-overflow-1
	}

	.singer {}

	.album {
		margin-left: 8rpx;
	}
</style>
