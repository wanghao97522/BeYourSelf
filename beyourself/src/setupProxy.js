const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/api', proxy({
    // target: 'http://10.9.20.182:8080',
    target:'http://localhost:8888',
    changeOrigin: true,
  }))
}