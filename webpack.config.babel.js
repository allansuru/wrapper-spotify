
const webpack = require('webpack')

// eslint-disable-next-line no-undef
const nodeEnv = process.env.NODE_ENV || 'production'

// eslint-disable-next-line no-undef
module.exports = {
    devtool: false,
    entry: {
        filename: './src/index'
    },
    output: {
        filename: './build.js',
        libraryTarget: 'umd',
        library: 'spotifyWrapper'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env'],
                }
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '/build.js.map',
            exclude: ['vendor.js']
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
        })
    ]
}
