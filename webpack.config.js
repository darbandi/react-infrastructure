const path = require("path");

module.exports = (env = {}, argv = {}) => ({
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
        alias: {
            assets: path.resolve(__dirname, 'src/assets/'),
            components: path.resolve(__dirname, 'src/components/'),
            src: path.resolve(__dirname, 'src/'),
            img: path.resolve(__dirname, 'src/assets/img/'),
            css: path.resolve(__dirname, 'src/assets/css/'),
            media: path.resolve(__dirname, 'src/assets/media/'),
            appContext: path.resolve(__dirname, 'src/AppContext'),
            config: path.resolve(__dirname, 'src/config'),
            utils: path.resolve(__dirname, 'src/Utils')
        }
    },
    entry: {
        app: [
            'react-hot-loader/patch',
            './src/index.jsx'
        ]
    },
    devServer: {
        contentBase: './build',
        hot: true,
        inline: true,
        noInfo: false,
        port: 3001,
        compress: true
    },
    output: {
        filename: "static/js/[hash].dataak.js",
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: require("./.webpack/module.rules")(env, argv)
    },
    plugins: require("./.webpack/module.plugins")(env, argv),
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
})

