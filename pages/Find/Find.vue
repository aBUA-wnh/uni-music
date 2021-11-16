<template>
	<view class="container">
		<!-- 导航、轮播 -->
		<Header v-if="homepageLoaded" :banners="banners" :sticky="sticky"></Header>
		<!-- 快速导航 -->
		<QuickNavigation class="border-margin" v-if="homepageIconLoaded" :homepageIcons="homepageIcons"></QuickNavigation>
		<!-- 推荐歌单 -->
		<Songlist class="border-radius-bottom" v-if="homepageLoaded" :data="recommend"></Songlist>
		<!-- 相似推荐 -->
		<!-- <SonglistSwiper></SonglistSwiper> -->
		<!-- 雷达歌单 -->
		<Songlist class="border-margin border-radius" v-if="homepageLoaded" :data="radar"></Songlist>
		<!-- 专属场景歌单 -->
		<Songlist class="border-margin border-radius" v-if="homepageLoaded" :data="scene"></Songlist>
		<!-- 音乐日历 -->
		<!-- 视频合集 -->
		<Songlist class="border-margin border-radius" v-if="homepageLoaded" :data="videoCollection"></Songlist>
		<MPlayer></MPlayer>
		<view class="page-gap"></view>
	</view>
</template>

<script>
	import Header from '@/components/index/Header.vue'
	import QuickNavigation from '@/components/index/QuickNavigation.vue'
	import Songlist from '@/components/index/Songlist.vue'
	import SonglistSwiper from '@/components/index/SonglistSwiper.vue'
	export default {
		components: {
			Header,
			QuickNavigation,
			Songlist,
			SonglistSwiper
		},
		data() {
			return {
				// 首页数据是否加载完成
				homepageLoaded: false,
				// 首页圆形图标是否加载完成
				homepageIconLoaded: false,
				// banner
				banners: [],
				// 首页圆形图标
				homepageIcons: [],
				// 推荐歌单
				recommend: {},
				// 雷达歌单
				radar: {},
				// 场景歌单
				scene: {},
				// 视频合集
				videoCollection: {},
				// header吸顶
				sticky: false,
			}
		},
		onLoad() {
			this.loadHomepageData()
			this.loadHomepageIcon()
		},
		onPageScroll(e) {
			let scrollTop = e.scrollTop
			if (scrollTop > 14) {
				this.sticky = true
			} else {
				this.sticky = false
			}
		},
		methods: {
			// 获取首页信息
			loadHomepageData() {
				this.$api.find.homepage().then(res => {
					let homepageInfo = res.data.data.blocks
					console.log('首页信息', homepageInfo)
					this.homepageLoaded = true
					this.banners = homepageInfo[0].extInfo.banners
					this.recommend = homepageInfo[1]
					this.radar = homepageInfo[6]
					this.scene = homepageInfo[7]
					this.videoCollection = homepageInfo[10]
				})
			},
			// 获取首页圆形图标
			loadHomepageIcon() {
				this.$api.find.homepageIcon().then(res => {
					let homepageIcons = res.data.data.splice(0,6)
					let newArr = []
					homepageIcons.forEach(item => {
						if (item.name !== '直播') {
							newArr.push(item)
						}
					})
					this.homepageIcons = newArr
					this.homepageIconLoaded = true
				})
			}
		}
	}
</script>

<style lang="scss">
	/* 外边距 */
	.border-margin {
		margin-top: 30rpx;
	}
	
	// 圆角
	.border-radius-bottom {
		overflow: hidden;
		border-bottom-left-radius: 16rpx;
		border-bottom-right-radius: 16rpx;
	}
	
	.border-radius {
		overflow: hidden;
		border-radius: 16rpx;
	}
	
	// 底部间隔槽
	.page-gap {
		width: 100%;
		height: 120rpx;
		background: $white-color;
	}
</style>
