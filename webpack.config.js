module.exports  = {
  entry:  './js/main.js',
  output: {
    path: __dirname,
    filename: './js/main.js',
  },
  devServer:  {
    inline: true,
    port: 7777
  },
  module: {
    loaders:  [
      {
        test: /.js$/,
        exclude:  /node_modules/,
        loader: 'babel',
        query:  {
          presets:  ['es2015', 'react']
        }
      }
    ]
  }
}
