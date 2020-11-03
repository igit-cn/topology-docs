const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    publicPath: './',
    assetsDir:'../',
    outputDir: 'dist',
    productionSourceMap: false,
    configureWebpack:{
        plugins:[
            new CompressionPlugin({
                test:/\.js$|\.html$|\.css$|\.md$|\.json$/, //匹配文件名
                threshold: 1024,//对超过10k的数据压缩
                deleteOriginalAssets: false //不删除源文件
            })
        ]
    },
    // chainWebpack: config => {
    //     config.module
    //         .rule('images')
    //         .use('image-webpack-loader')
    //         .loader('image-webpack-loader')
    //         .options({
    //             bypassOnDebug: true
    //         })
    //         .end()
    // }   
}