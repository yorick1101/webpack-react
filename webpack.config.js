const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require('webpack-merge');
const path = require('path')

module.exports = (env, args)=>{
    console.log("environment:", env)
    switch(env.mode){
        case 'dev': return merge(commonConf, devConf);
        case 'prod': return merge(commonConf, prodConf);
    }  
}


commonConf = {
    entry : path.resolve(__dirname, 'src', "index.js"),
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // type: 'asset/inline' // translate image to digits and embedded into main.bundle.js 
                type: 'asset/resource' // a separate file
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
        {
            template: path.resolve(__dirname, 'src', "index.html"),
        }), 
        new MiniCssExtractPlugin(
            {
                filename:'main.[hash].css'
            }
        )
    ]
}

prodConf = {
    mode: "production",
}
devConf = {
    mode: "development",
    devtool: 'source-map',
    
};