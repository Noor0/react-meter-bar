const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './example/src/index.js',
	output: {
    filename: "main.js",
    path: __dirname + '/example/dist'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './example/public',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            // options: { modules: true },
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
			filename: "index.html",
			template: 'example/public/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}