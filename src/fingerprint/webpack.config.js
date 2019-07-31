const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'fingerprint': './index.ts',
    'fingerprint.min': './index.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimization: {
    splitChunks: {
      minSize: 30000000, // Make fingerprint minSize so large that it wont chunk
      maxSize: 0
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        include: /\.min\.js$/
      })
    ]
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js',
    library: 'fingerprint',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
};
