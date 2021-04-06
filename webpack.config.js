// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path')
const fs = require('fs')

const lambdasPath = 'src/lambdas'
const lambdaNames = fs.readdirSync(path.join(__dirname, lambdasPath))
const lambdaName = 'index'

const entry = lambdaNames
  .reduce((entryMap, lambdaNamePath) => {
    const path = `${lambdasPath}/${lambdaNamePath}/${lambdaName}`
    entryMap[`${path}`] = `./${path}.ts`
    return entryMap
  }, {})

module.exports = {
  target: 'node',
  mode: 'development',
  entry: entry,
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
        test: /\.(tsx?)$/,
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
