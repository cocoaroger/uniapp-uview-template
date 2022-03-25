import Vue from 'vue'
import App from './App'
import "./common/setup";
import store from './store'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})

// 处理网络请求
require('./api/request.js')(app)

app.$mount()
