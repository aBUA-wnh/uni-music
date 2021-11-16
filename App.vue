<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	
	page {
		background: $bg-color;
	}
	
	text {
		letter-spacing: 2rpx;
		user-select: none;
	}
	
	.container {
		overflow: hidden;
		@include flex-column
	}
</style>
