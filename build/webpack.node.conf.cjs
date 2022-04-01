const { merge } = require('webpack-merge');
const pkg = require('../package.json');
const baseWebpackConfig = require('./webpack.base.conf.cjs');

const { name } = pkg;

module.exports = merge(
    baseWebpackConfig,
    {
        target: 'node',
        entry: {
            [`${name}.node`]: './src',
            [`${name}.node.min`]: './src',
        },
    },
);
