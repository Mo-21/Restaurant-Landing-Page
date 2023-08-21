const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Development',
    //     }),
    // ],
}