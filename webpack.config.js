const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        clean: true,
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        library: {
            name: '@avena/components',
            type: 'umd'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react"
        },
    },
}