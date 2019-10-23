const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/maoyan', proxy({
    target: 'http://m.maoyan.com/ajax/movieOnInfoList?token=',
    changeOrigin: true,
  }))


  app.use('/api', proxy({
    target: 'http://10.9.28.154:8080/api/journey/get_all_travel?uId=1',
    changeOrigin: true,
    pathRewrite: {
      '/api': ''
    }
  }))
}