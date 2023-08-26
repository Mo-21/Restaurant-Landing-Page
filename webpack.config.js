const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                      loader: 'style-loader'
                    },
                    {
                      loader: 'css-loader'
                    },
                    {
                      loader: 'postcss-loader',
                      options: {
                        postcssOptions: {
                          plugins: () => [
                            require('autoprefixer')
                          ]
                        }
                      }
                    },
                    {
                      loader: 'sass-loader'
                    }
                  ]          
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource'
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
        ],
    },
        devtool: 'source-map',
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Monsho Restaurant',
                filename: 'index.html',
                template: 'src/template.html'
            }),
        ],
}