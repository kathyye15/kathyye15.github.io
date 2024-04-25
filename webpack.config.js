const path = require('path');
require('dotenv').config()

module.exports = {
  mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};