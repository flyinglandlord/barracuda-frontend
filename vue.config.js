const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: [
        'vuetify'
    ],
    lintOnSave: false,
    /*devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }*/
})
