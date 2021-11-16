/* 
 * 请求封装
 */
const localUrl = 'http://localhost:3000'
const serverUrl = 'https://pl-fe.cn/cloud-music-api'
const baseUrl = localUrl

// 通用请求
const httpRequest = opts => {
	uni.showLoading({
		title: '正在获取数据呐~',
		mask: true
	})
	let httpDefaultOpts = {
		url: baseUrl + opts.url,
		data: opts.data,
		method: opts.method,
		header: opts.method === 'get' ? {
			'X-Requested-With': 'XMLHttpRequest',
			'Accept': 'application/json',
			'Content-Type': 'application/json; charset=UTF-8'
		} : {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		dataType: 'json'
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(httpDefaultOpts).then(
			(res) => {
				uni.hideLoading()
				switch (res[1].statusCode) {
					case 200:
						resolve(res[1])
						break
					case 301:
						uni.showToast({
							title: res[1].data.message,
							icon: 'none',
							duration: 2000
						})
						break
					case 400:
					case 500:
					case 501:
					case 502:
					case 503:
					case 504:
						uni.showToast({
							title: `服务器错误:${res[1].data.message}`,
							icon: 'none',
							duration: 2000
						})
						break
				}
			}
		).catch(
			(response) => {
				uni.hideLoading()
				reject(response)
			}
		)
	})
	return promise
}

export default {
	baseUrl,
	httpRequest
}
