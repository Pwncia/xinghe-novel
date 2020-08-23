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
            },
            '/chapter': {
                target: 'http://chapterup.zhuishushenqi.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/chapter': ''
                }
            }
        }
    },
    chainWebpack: config => {
        config.when(process.env.NODE_ENV === 'production', config => {
            config.entry('app').clear().add('./src/main-pro.js')
            config.set('externals', {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                axios: 'axios',
                'vue-awesome-swiper': 'VueAwesomeSwiper',
                // urldecode: 'urlDecode',
                urlencode: 'urlEncode',
                'vue-lazyload': 'VueLazyLoad',
                'web-storage-cache': 'Storage'
            })
            config.plugin('html').tap(args => {
                args[0].isProd = true
                return args
            })
        })
        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main-dev.js')
            config.plugin('html').tap(args => {
                args[0].isProd = false
                return args
            })
        })
    }
}