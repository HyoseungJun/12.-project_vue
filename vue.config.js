const path = require('path');
module.exports = {
  devServer:{
      proxy:{
        '/' :{
          target: 'http://localhost:8080',
          ws: true,
          changeOrigin: true
        },
      }
    },
    configureWebpack: {
      resolve: {
          alias: {
              '~': path.join(__dirname, '/src')
          }
      }
  }
}
