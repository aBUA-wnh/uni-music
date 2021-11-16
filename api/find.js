import request from '@/utils/request.js'

/* 
 * httpRequest 请求封装
 */

const api = {
	homepage: '/homepage/block/page',
	homepageIcon: '/homepage/dragon/ball'
}

// 获取首页信息
function homepage() {
	return request.httpRequest({
		url: api.homepage,
		method: 'get'
	})
}

// 获取首页圆形图标
function homepageIcon() {
	return request.httpRequest({
		url: api.homepageIcon,
		method: 'get'
	})
}

export default function(Vue) {
	Vue.prototype.$api.find = {
		homepage: homepage,
		homepageIcon: homepageIcon
	}
}
