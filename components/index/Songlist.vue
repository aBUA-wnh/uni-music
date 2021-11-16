<template name="Songlist">
	<view class="songlist">
		<view class="songlist-box">
			<!-- 模块标题 -->
			<ModuleTitle :title="title" :text="text"></ModuleTitle>
			<!-- 模块内容 -->
			<view class="content">
				<view class="content-item" v-for="item in list" @click="nav2Detail(item.creativeId)">
					<!-- 专辑封面 -->
					<AlbumCover :imageUrl="item.uiElement.image.imageUrl"></AlbumCover>
					<text class="listTitle">{{item.uiElement.mainTitle.title}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import ModuleTitle from '@/components/part/ModuleTitle.vue'
	import AlbumCover from '@/components/part/AlbumCover.vue'
	export default {
		name: "Songlist",
		components: {
			ModuleTitle,
			AlbumCover
		},
		props: {
			data: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				// 标题
				title: '',
				// 按钮
				text: '',
				// 列表
				list: []
			};
		},
		mounted() {
			// console.log('Songlist组件初始化')
			// console.log(this.data.creatives)
			this.loadData()
		},
		methods: {
			// 加载数据
			loadData() {
				this.title = this.data.uiElement.subTitle.title
				this.text = this.data.uiElement.button.text
				this.list = this.data.creatives.slice(0, 3)
			},
			// 跳转详情
			nav2Detail(creativeId) {
				uni.navigateTo({
					url: `/pages/SongListDetail/SongListDetail?creativeId=${creativeId}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.songlist {
		width: 100%;
		background: $white-color;
		padding: 20rpx 0;
	}

	.songlist-box {
		width: 91%;
		margin: 0 auto;
	}

	// 模块内容
	.content {
		margin-top: 24rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.content-item {
		width: 208rpx;
		display: flex;
		flex-direction: column;
	}

	// 歌单标题
	.listTitle {
		font-size: 24rpx;
		color: $font-color-important;
		letter-spacing: 2rpx;
		margin-top: 10rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
</style>
