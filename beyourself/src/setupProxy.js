const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
      proxy(
          '/api',
          {
            target: 'http://47.94.135.213:8080',
            // target: 'http://10.60.15.232:8080',
            changeOrigin: true
          }
      ),
      proxy(
          '/jssdk',
          {
            target: 'https://inuyasha.top',
            // target: 'http://10.60.15.232:8080',
            changeOrigin: true
          }
      ),
      proxy(
          '/wapay',
          {
            target: 'https://inuyasha.top',
            // target: 'http://10.60.15.232:8080',
            changeOrigin: true
          }
      ),
  )
}