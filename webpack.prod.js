const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: 'asset',
            },
        ]
    }
});