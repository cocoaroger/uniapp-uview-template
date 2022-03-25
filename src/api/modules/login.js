// 登录
export default {
  login: (params, config = {}) => uni.$u.http.get('recommendations', params, config)
}