var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./node_modules/detect-browser/index.js', './src/angular-detect-browser.js'],
    output: {
        path: __dirname,
        filename: './dist/angular-detect-browser.js',
    },
    module: { 
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                include: [
                    path.resolve(__dirname, './node_modules/babel')
                ],
                query: {
                  presets: ['es2015', { modules: false }]
                }
            }
        ]
    },
    devtool: 'source-map'
};