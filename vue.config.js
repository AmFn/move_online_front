module.exports = {
    //axios域代理，解决axios跨域问题
    publicPath: '/',
    devServer: {
        proxy: {
            '': {
                target: 'http://127.0.0.1:8089',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
 
                }
            }
        }
    }
}