const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  devtool: "inline-cheap-module-source-map",
  output: {
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  module: {

    rules: [

      // {
      //   test: /\.(js|ts)/,
      //   include: path.resolve(__dirname, "../test"),
      //   exclude: [
      //     /node_modules/,
      //     /\.json/
      //   ],
      //   loader: 'istanbul-instrumenter-loader'
      // },

      {
        test: /.js$/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        },
        loader: 'babel-loader',
      },

      {
        test: /\.ts$/,
        exclude: "/node_modules/",
        loader: "ts-loader"
      }

    ]

  }

}