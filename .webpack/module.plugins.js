
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { DefinePlugin } = require("webpack");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = (env, argv) => [
    argv.mode === "production" ? new CleanWebpackPlugin() : null,
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(argv.mode)
        }
    }),
    new webpack.ProgressPlugin(),
    argv.mode === "production" ? new MiniCssExtractPlugin({
        filename: "static/css/[contentHash].dataak.css",
        chunkFilename: "static/css/[contentHash].dataak.css",
        path: path.resolve(__dirname, 'build')
    }) : null,
    env.analyse ? new BundleAnalyzerPlugin() : null
].filter(plugin => !!plugin)