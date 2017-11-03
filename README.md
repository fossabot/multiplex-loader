# Multiplex Loader
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkavu%2Fmultiplex-loader.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkavu%2Fmultiplex-loader?ref=badge_shield)


This loader requires a module with several loaders. Each loader's exports are returned using the same key as they are configured under.

Example:

``` javascript
var multiplex = require('multiplex-loader');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: multiplex({
          placeholder: 'resize-image?placeholder=303',
          srcset: 'image-webpack!resize-image?sizes[]=303w,sizes[]=606w',
          src: 'image-loader',
        }),
      },
    ],
  },
};
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkavu%2Fmultiplex-loader.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkavu%2Fmultiplex-loader?ref=badge_large)