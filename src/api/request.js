import Vue from "vue";
import login from "./modules/login";

module.exports = (vm) => {
	Vue.prototype.$api = { login }

	// 请求全局配置 https://www.uviewui.com/js/http.html
	uni.$u.http.setConfig((config) => {
		config.baseURL = process.env.VUE_APP_BASE_API;
		return config
	});

	// 请求拦截，配置Token等参数
	uni.$u.http.interceptors.request.use((config) => {
		if (config.method !== 'GET') {
			const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2ZXRlcmFuIn0.LuN9Ysi8ATXZ4ODQ67irbmIngE06aliyHssN3bvAQN4'
			// config.header.token = vm.$store.state.userInfo.token
			config.header.Authorization = token // 不是get请求，需要传token
		}
		return config;
	})

	// 响应拦截，判断状态码是否通过
	uni.$u.http.interceptors.response.use((response) => {
		const data = response.data
		return data
	}, (error) => {
		uni.$u.toast('服务器异常，请稍后再试')
		return Promise.reject(error)
	})
}