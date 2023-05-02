const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkgdirSync = require('pkg-dir');
const path = require('path');

module.exports = {
    entry: ['./index.ts'],
    resolve: {
        extensions: ['...', '.ts', '.tsx']
    },
    output: {
        publicPath: 'auto',
        clean: true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            shared: {
                'share-store': {
                    singleton: true
                },
                'plugin-registry': {
                    singleton: true
                },
                'react': {
                    singleton: true
                },
                'dayjs': {
                    singleton: true
                },
                'types': {
                    singleton: true
                },
                'mobx': {
                    singleton: true
                },
                'mobx-react': {
                    singleton: true
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(pkgdirSync.sync(), './index.html'),
            alwaysWriteToDisk: true,
            scriptLoading: 'blocking'
        }),
    ]
};
