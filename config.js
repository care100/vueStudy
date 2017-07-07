/**
 * Project config file includes dev/prod and frontend/backend
 */
var path = require('path')
var _ = require('lodash')


var development = {
  frontend: {
    port: 8899,
    assetsRoot: path.resolve(__dirname, './src'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '/api': { target: 'http://localhost:' + 7878, changeOrigin: true, pathRewrite: { '^/api/': '' } },
      '/socket.io': { target: 'http://localhost:' + 7878, changeOrigin: true, ws: true },
      // '/socket.io': { target: 'http://localhost:' + 8080, changeOrigin: true, ws: true },
      
      // '/api': { target: 'http://127.0.0.1:' + 8080, changeOrigin: true },
      // '/upload': { target: 'http://127.0.0.1:' + 8080, changeOrigin: true },
      
      '/api': { target: 'http://192.168.19.168:' + 8080, changeOrigin: true },
      '/upload': { target: 'http://192.168.19.168:' + 8080, changeOrigin: true },
      // '/ws': { target: 'http://192.168.19.168:' + 8080, changeOrigin: true },

      // '/api': { target: 'http://192.168.19.30:' + 8080, changeOrigin: true },
      // '/upload': { target: 'http://192.168.19.30:' + 8080, changeOrigin: true },
      
      // '/api': { target: 'http://192.168.19.24:' + 8080, changeOrigin: true },
      // '/upload': { target: 'http://192.168.19.24:' + 8080, changeOrigin: true },
      
      // '/api': { target: 'http://192.168.1.163:' + 8080, changeOrigin: true },
      // '/upload': { target: 'http://192.168.1.163:' + 8080, changeOrigin: true },
      
      // '/socket.io': { target: 'http://localhost:' + 3000, changeOrigin: true, ws: true }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
  mock: {
    port: 7878
  }
}
var production = {
  frontend: {
    index: path.resolve(__dirname, './dist/index.html'),
    assetsRoot: path.resolve(__dirname, './dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  mock: {
    port: process.env.APP_PORT || process.env.PORT
  }
}

var config = process.env.NODE_ENV === 'production' ? production : development

module.exports = _.assign({}, config)
