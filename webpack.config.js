var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015'] }
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      }
    ]
  },
  postcss: function() {
    return [require('postcss-cssnext'), require('lost')];
  }
};
