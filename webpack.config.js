const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.tsx?$/i,
      use: [{
        loader: 'ts-loader'
      }],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devtool: 'eval-cheap-module-source-map'
}