// Learn more about configuring Webpack
// https://webpack.js.org/concepts/
const webpack = require("webpack")
const babelConfig = require("./babel.config")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = function (env) {
  const isProduction =
    env === "production" || process.env.NODE_ENV === "production"

  return {
    output: {
      path: __dirname + "/js/",
      filename: "[name].js",
    },
    externals: {
      // Any third-party deps added via a <script> tag
      // can be defined here so that they can be required
      // in your application's JS files
      // "jquery": "jQuery"
    },
    resolve: {
      // Can be used to create aliases for imports
      // utilities: path.resolve(__dirname, 'src/js/example/utilities/')
      // => import * from "utilities/filename"
    },
    resolveLoader: {
      modules: ["node_modules"],
      extensions: [".js", ".json"],
      mainFields: ["loader", "main"],
    },
    module: {
      rules: [
        {
          // Enables ES6 syntax for JS
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
          options: Object.assign(
            {},
            {
              cacheDirectory: true,
            },
            babelConfig
          ),
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [{
            /* inline if smaller than 10 KB, otherwise load as a file */
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }]
        },
        { 
          test: /\.(eot|svg|ttf|woff2?|otf)$/,
          use: 'file-loader'
        }
      ],
    },
    devtool: "source-map",
    mode: isProduction ? 'production' : 'development',
    plugins: [
      new webpack.ProvidePlugin({
        // Automatically make packages available
        // without having to require them
        // $: "jquery",
        // jQuery: "jquery",
        fetch: "imports-loader?this=>global!exports?global.fetch!whatwg-fetch",
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          ie8: false,
          output: {
            comments: false
          }
        }
      }),
    ],
  }
}
