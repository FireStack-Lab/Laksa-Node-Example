const path = require('path')
const webpack = require('webpack')

const universalLoader = {
  devtool: 'inline-source-map',
  entry: {
    index: ['./src/index.js']
    // index: './src/index.js'
  },
  externals: [
    // Every non-relative module is external
    /^[a-z\-0-9]+$/
  ],
  output: {
    chunkFilename: '[id].[hash:5]-[chunkhash:7].js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [new webpack.NamedModulesPlugin()],
  target: 'node'
}

module.exports = universalLoader
