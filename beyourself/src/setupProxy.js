const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
      proxy(
          '/api',
          {
            target: 'http://10.9.20.181:8100',
            changeOrigin: true
          }
      ),
     
  )
}