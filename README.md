# uni-uview-template

## 安装依赖
```
npm install --registry=https://registry.npm.taobao.org
```

## 启动小程序(其他平台查看package.json)
```
npm run dev:mp-weixin
```

## h5代理配置
manifest.json 中 h5 配置项

## 全局初始化内容
./common/setup.js 文件中配置

## 网络请求
- 请求拦截处理在 ./api/request.js 中配置
- 网络请求配置如：./api/modules/login.js
- 请求调用如：
  ```
  this.$api.login.login().then(res => {
      console.log(res);
    }).catch(e => {
      console.log('error:', e);
    })
  ```
## uView官方文档（采用v2.0）
[https://www.uviewui.com/components/install.html](https://www.uviewui.com/components/install.html)
