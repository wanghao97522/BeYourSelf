const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
      proxy(
          '/jssdk',
          {
            target: 'https://inuyasha.top',
            changeOrigin: true
          }
      ),
     
  )

}