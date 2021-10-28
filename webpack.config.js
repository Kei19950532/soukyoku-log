/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

/** Laravelのwebpack.mix.jsで扱うためにエクスポート */
module.exports = {
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                "**/*",
                "!.gitignore*",
                "!.htaccess*",
                "!robots.txt*",
                "!web.config*",
                "!index.php*",
                "!favicon.ico*",
                "!mix-manifest.json*",
                "!vendor/**",
            ],
        }),
    ],
    output: { publicPath: "" },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss?$/,
                loader: "sass-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx"],
        alias: {
            /** エイリアスを増やす場合は、webpack.config.js, tsconfig.paths.json, .eslintrc.json の3つのファイルの変更が必要です */
            "@": path.resolve(__dirname, "resources/ts/"),
        },
    },
};
