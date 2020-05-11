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
    }
    ],
   }, 
   

};