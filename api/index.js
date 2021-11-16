import request from '@/utils/request.js'
import find from '@/api/find.js'
import songListDetail from '@/api/song-list-detail.js'

let api = {}

api.install = function (Vue, options) {
	Vue.prototype.$request = request
	Vue.prototype.$api = {}
	find(Vue)
	songListDetail(Vue)
}

export default api