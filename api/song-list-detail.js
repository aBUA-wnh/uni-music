import request from '@/utils/request.js'

/* 
 * httpRequest 请求封装
 */

const api = {
	playlistDetail: '/playlist/detail'
}

// 获取歌曲详细信息
function playlistDetail(creativeId) {
	return request.httpRequest({
		url: `${api.playlistDetail}?id=${creativeId}`,
		method: 'get'
	})
}

export default function(Vue) {
	Vue.prototype.$api.songListDetail = {
		playlistDetail: playlistDetail
	}
}