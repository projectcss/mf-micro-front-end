const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    output: {
        publicPath: 'auto'
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
    resolve: {
        extensions: ['...', '.ts', '.tsx']
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'package1',
            filename: 'package1.js',
            library: {
                type: 'var',
                name: ['_Plugin', 'package1']
            },
            exposes: {
                '.': './index.tsx'
            },
            shared: {
                'share-store': {
                    singleton: true,
                    import: false
                },
                'plugin-registry': {
                    singleton: true,
                    import: false
                },
                'react': {
                    singleton: true,
                    import: false
                },
                'dayjs': {
                    singleton: true,
                    import: false
                },
                'types': {
                    singleton: true
                },
                'mobx': {
                    singleton: true,
                    import: false
                },
                'mobx-react': {
                    singleton: true,
                    import: false
                }
            }
        })
    ]
};
