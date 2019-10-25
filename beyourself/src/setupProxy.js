const proxy = require('http-proxy-middleware')

module.exports = function(app) {


  app.use('/api', proxy({
    target: 'http://10.9.20.219:8080',
    changeOrigin: true
  }))
}