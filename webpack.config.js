const path = require('path');
module.exports = {
    entry: ".",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    resolve: {
        alias: {
            utils: path.resolve(__dirname, "utils"),
            config: path.resolve(__dirname, "config"),
            static: path.resolve(__dirname, "static")
        },
        extensions: [".js", ".json", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src")

                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader"

            }
        ]
    },
    target: "node"
}