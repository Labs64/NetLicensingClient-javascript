const path = require('path');

const ora   = require('ora');

const rm = require('rimraf');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.conf.cjs');

const spinner = ora('building for production... ');
spinner.start();

rm(path.resolve(__dirname, '../dist'), (e) => {
    if (e) throw e;
    webpack(webpackConfig, (err, stats) => {
        spinner.stop();
        if (err) throw err;
        process.stdout.write(`${stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false,
        })}\n\n`);

        if (stats.hasErrors()) {
            spinner.fail(chalk.red('Build failed with errors.\n'))
            process.exit(1);
        }

        spinner.succeed(chalk.cyan('Build complete.\n'))
    });
});
