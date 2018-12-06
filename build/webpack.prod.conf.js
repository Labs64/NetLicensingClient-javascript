const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: '#source-map',
    performance: { hints: false },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                    },
                },
                sourceMap: true,
                parallel: true,
            }),
        ],
    },
});

module.exports = webpackConfig;
