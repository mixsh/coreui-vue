var path = require('path')
var webpack = require('webpack')

module.exports = {
   //stories: ['../src/components/**/*.stories.js'],
   stories: ['../stories/*.stories.js'],
   module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: [ 'style-loader', 'raw-loader' ],
        include: __dirname
      }
    ]
  },
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
  ],
};