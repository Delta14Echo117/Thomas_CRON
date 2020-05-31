const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
 entry: './src/index.js',
 output: {
 filename: 'bundle.js',
 path: path.resolve(__dirname, 'dist'),
 },
 plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: true,
    filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/inscription.html',
        inject: true,
        filename: 'inscription.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/forget.html',
            inject: true,
            filename: 'forget.html'
            }),
    new MiniCssExtractPlugin()
   ],
devServer: {
    contentBase: path.join(__dirname, 'dist'),
   },

   module: {
    rules: [
    {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    {
        test: /.jpe?g$|.gif$|.png$|.PNG$|.svg$|.woff(2)?$|.ttf$|.eot$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'img/'
        }
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            'file-loader',
        ],
    },
    ],
   }, 
};