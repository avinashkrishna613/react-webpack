const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
  },
  output: {
    filename: "main.js",  
    path: path.resolve(__dirname, 'dist'),
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
};
