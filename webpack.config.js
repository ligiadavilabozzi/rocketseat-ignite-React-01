const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production';//verifica se é ambiente dev ou produção
module.exports = {
        mode:isDevelopment ? 'development':'production',
        devtool: isDevelopment ? 'eval-source-map': 'source-map',
        entry: path.resolve(__dirname, 'src', 'index.jsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'public')
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
            })
        ],
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.scss$/, //ou .sass
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        }
    }