const path = require("path");
const fs = require("fs");
// const webpack = require("webpack")
// var process = require("process")
// process.loadEnvFile(".env")

module.exports = {
        entry: (function (dir){
            var files_ = {}, name1;
            var files = fs.readdirSync(dir);
            files.forEach((v)=>{fs.readdirSync((name1 = path.resolve(dir, v, "entrypoints"))).forEach((_)=>{files_[v] = (files_[v] ?? []).concat(path.resolve(name1,_))})})
            return files_;
        })(path.resolve(__dirname, "ui", "pages")),
        devServer: {
            hot: true,
            open: true
        },
        output: {
            path: path.resolve(__dirname, "./public/javascripts", "bundles"),
            filename: "[name]/[name].bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                      loader: "babel-loader",
                      options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                      },
                    },
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(ts|tsx)?$/,
                    exclude: /node_modules/,
                    use: [
                      {
                        loader: 'babel-loader',
                        options: {
                          presets: ['solid'],
                        },
                      },
                      {
                        loader: 'ts-loader',
                      },
                   ]
                 }

            ]
        },

        // plugins: [
        //     new HtmlWebpackPlugin({
        //         template: "./public/index.html",
        //         filename: "./template/index.html"
        //     }),
        //     new webpack.HotModuleReplacementPlugin()
        // ],
    //     plugins: [
    //       new webpack.DefinePlugin({
    //         'process.env.LOGINKEY': JSON.stringify({key: process.env.LOGINKEY}),
    //       })
    //   ],
};