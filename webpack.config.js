// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    open: true,
    host: 'localhost'
  },
  plugins: [
    // Add your plugins here
    // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\\.(ts|tsx)$/,
        loader: 'babel-loader',
        exclude: ['/node_modules/']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
