
module.exports = {
  output: {
    filename: "app.js"
  },
  cache: true,
  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      "PATH_ROOT": __dirname + "/dist"
    }
  }
};