'use strict'
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  transpileDependencies: ['uview-ui'],
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        { from: 'node_modules/@liveqing/liveplayer/dist/component/crossdomain.xml' },
        { from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer.swf' },
        { from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer-lib.min.js', to: 'js/' }
      ])
    ]
  }
}
