const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    module: {
        rules: [
            // {
            //     test: '/\(.tsx|.ts)/',
            //     use: 'ts-loader'
            // },
            {
                test: '/\.(.ts|.tsx|.js|jsx)$/',
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'public/index.html')
        })
    ]
}