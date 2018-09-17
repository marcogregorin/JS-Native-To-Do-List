// Set the path - The path needs to be absolute in order to work with Webpack
var path = require('path');

module.exports = {
  entry: './assets/js/app.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist/js'), // This needs to be absolute
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
