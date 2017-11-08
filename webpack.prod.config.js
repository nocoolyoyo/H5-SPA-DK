/*
* webpack生产环境配置
*
* */
//环境依赖
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');


//页面配置

const page = require("./pageConfig");


//gulp 输出文件的目录



//构造webpack entry
function makeEntry() {
    console.log(page.entry)
    var entry = {};
    entry.vendor = ['./src/module/custom/flexible.js'];
    entry['main'] = page.entry;
console.log(entry)
    return entry;
}

//输出webpack output
function makeOutput() {
    var output = {
        path: __dirname + '/dist/'+page.title,
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
        contentBase: "./dist" + page.title,//本地服务器所加载的页面所在的目录
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
                test: /\.(eot|ttf|woff|woff2|otf)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
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
                test: /\.(png|jpg|gif|svg|ico)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html' // 模板路径
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest']//manifest:抽取变动部分，防止第三方控件的多次打包
        // }),
        //webpack忽略打包
        //new webpack.IgnorePlugin(/\.\/vendor.js$/)
    ]
};