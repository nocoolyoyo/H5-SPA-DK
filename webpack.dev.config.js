/*
* webpack开发环境配置
*
* */
//环境依赖
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');


//页面配置

const Pages = require("./pageConfig");

const page = Pages[0]; //默认页面
//gulp 输出文件的目录






//构造webpack entry
function makeEntry() {
    var entry = {};
    entry.vendor = ['./src/module/custom/flexible.js'];
    entry[page.entry.key] = page.entry.value;

    return entry;
}

//输出webpack output
function makeOutput() {
    var output = {
        path: __dirname + "/dist",
        chunkFilename:'[name].js',
        filename: '[name].js',
    };
    return output;
}
module.exports = {
    devtool: '#eval-source-map',
    entry: makeEntry(),
    output: makeOutput(),
    resolveLoader: {
        alias: {
            'scss-loader': 'sass-loader',
        },
    },

    devServer: {
        // host: '192.168.21.66',
        // port: 8090,
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },

    module: {
        rules: [
            //ES6转义向前兼容
            {
                test: /\.(jsx|js)$/,
                loader: "babel-loader",
                exclude: /(node_modules|webuploader)/
            },
            //其他文件模块化
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
            },
            //sass模块
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader',
                exclude: /node_modules/
            },
            //css模块
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                autoprefixer()
                            ]
                        }
                    }
                ]
            },
            //图片文件模块化
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            //jquery对象暴露
            // {
            //     test: require.resolve('jquery'),
            //     loader: 'expose-loader?jQuery!expose-loader?$'
            // },
        ]
    },
    plugins:[
        //jquery对象暴露给全局
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery"
        // }),
        new HtmlWebpackPlugin({
            template: './src/pages/城堡升级/index.html' // 模板路径
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest']//manifest:抽取变动部分，防止第三方控件的多次打包
        // }),
        //webpack忽略打包
       //new webpack.IgnorePlugin(/\.\/vendor.js$/)
    ]
};