module.exports = {
    devServer: {
        // host: 'localhost',
        port: '8081',
        https: false,
        open: true,
        proxy: {
            '/api': {
                target: 'http://api.zhuishushenqi.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}