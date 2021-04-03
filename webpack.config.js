const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  entry: './main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'vuecore',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              // Enable CSS Module
              modules: {
                mode: 'local',
                localIdentName: "[hash:base64:5]"
              }
            }
          }
        ]
      },
      {
        test: /\.s[a|c]ss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer"]
                ],
              },
            }
          },
          {
            loader: 'sass-loader',
            options: {
              // sass-loader version >= 8
              sassOptions: {
                indentedSyntax: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ]
  }
}