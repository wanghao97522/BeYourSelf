const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
      proxy(
          '/api',
          {
            target: 'http://10.60.15.132:8080',
            changeOrigin: true
          }
      ),
  )
}