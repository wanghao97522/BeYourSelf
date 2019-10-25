const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
      proxy(
          '/api',
          {
            target: 'http://116.62.209.172:8080',
            changeOrigin: true
          }
      ),
  )
}