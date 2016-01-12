var path = require('path');
var multiplex = require('../index.js');

module.exports = [
  {
    name: 'browser',
    entry: './test/app.js',
    output: {
      path: path.resolve('test/results'),
      filename: 'app.[hash].js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.png$/i,
          loader: multiplex({
            original: 'file?name=[name].[ext]!file?name=[name].[ext]',
            hashed: 'file?name=img/[sha512:hash:hex:10].[ext]'
          })
        },
      ]
    }
  }
];
