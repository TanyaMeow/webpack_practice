const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "cheap-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        historyApiFallback: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: 'asset/resource',
            },
        ]
    }
});