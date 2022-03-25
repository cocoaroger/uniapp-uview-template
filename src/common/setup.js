import VueAMap from 'vue-amap'
import Vue from "vue";
import store from '@/store'
import mixin from '@/mixin'
import { v4 as uuid_v4 } from 'uuid'
import dayjs from 'dayjs'
import uView from "uview-ui";

// 引入高德地图
VueAMap.initAMapApiLoader({
  key: 'adf6a67fec16ab75bff038601432fc20',
  plugin: ['AMap.Autocomplete', 'AMap.Geocoder', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Driving'],
  v: '1.4.15'
})
// 清除高德地图缓存
const AmapKeys = Object.keys(localStorage).filter(key => key.match(/^_AMap_/))
AmapKeys.forEach(key => {
  localStorage.removeItem(key)
})

Vue.prototype.$uuid = uuid_v4
Vue.prototype.$dayjs = dayjs
Vue.prototype.$store = store
Vue.mixin(mixin)
Vue.use(VueAMap)
Vue.use(uView)

// uView 全局配置
uni.$u.setConfig({
  // 修改$u.config对象的属性
  config: {
    // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
    unit: 'rpx'
  },
  // 修改$u.props对象的属性
  props: {
    // 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
    // radio: {
    //   size: 15
    // }
    // 其他组件属性配置
    // ......
  }
})