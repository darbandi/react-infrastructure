
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = (env, argv) => [
    {
        test: /\.js?x$/,
        loader: "babel-loader"
    },
    {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
        loader: 'file-loader',
        options: {
            disable: true, // Disables on development mode
            name: '[contentHash].[ext]',
            outputPath: 'static/images'
        }
    },
    {
        test: /\.(ogg|mp3|mp4|wave|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
            disable: true, // Disables on development mode
            name: '[contentHash].[ext]',
            outputPath: 'static/media'
        }
    },
    {
        test: /\.scss$/,
        use: [
            argv.mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
            {
                loader: "css-loader",
                options: {
                    // sourceMap: true
                }
            },
            {
                loader: "sass-loader",
                options: {
                    // sourceMap: true
                }
            }
        ]
    }
];