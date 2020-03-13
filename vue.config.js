'use strict'
const path = require('path')
const defaultSettings = require('./src/settings')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    assetsDir: 'static',
    outputDir: 'dist',
    publicPath: '/', // 可能会使用函数代替
    productionSourceMap: false,
    configureWebpack: (config) => {
        config.name = defaultSettings.title
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': resolve('src')
        }

        if (process.env.VUE_APP_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
            config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
                'console.log'
            ]
        }
    },
    chainWebpack(config) {
        // set preserveWhitespace
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap((options) => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
            .end()

        config
            // https://webpack.js.org/configuration/devtool/#development
            .when(process.env.NODE_ENV === 'development', (config) =>
                config.devtool('cheap-source-map')
            )

        config.when(process.env.NODE_ENV !== 'development', (config) => {
            config
                .plugin('ScriptExtHtmlWebpackPlugin')
                .after('html')
                .use('script-ext-html-webpack-plugin', [
                    {
                        // `runtime` must same as runtimeChunk name. default is `runtime`
                        inline: /runtime\..*\.js$/
                    }
                ])
                .end()
            config.optimization.splitChunks({
                chunks: 'all',
                cacheGroups: {
                    libs: {
                        name: 'chunk-libs',
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10,
                        chunks: 'initial' // only package third parties that are initially dependent
                    },
                    commons: {
                        name: 'chunk-commons',
                        test: resolve('src/components'), // can customize your rules
                        minChunks: 3, //  minimum common number
                        priority: 5,
                        reuseExistingChunk: true
                    }
                }
            })
            config.optimization.runtimeChunk('single')
        })
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'font-size-sm': '13px',
                    'font-size-md': '15px',
                    'font-size-lg': '17px',
                    'main-color-prime': '#199ed8',
                    'main-color-text-default': '#199ed8',
                    'main-bgco': '#6595f4'
                }
            }
        }
    },
    devServer: {
        port: defaultSettings.port || 8080,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/proxy-dev': {
                //要访问的跨域的域名
                target: 'http://hotel-c.qhyxsw.com',
                secure: false, // 使用的是http协议则设置为false，https协议则设置为true
                //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
                changOrigin: true,
                pathRewrite: {
                    '^/proxy-dev': '/'
                }
            }
        }
    }
}
