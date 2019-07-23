const goods = require("./data/goods");
const ratings = require("./data/ratings");
const seller = require("./data/seller");

module.exports = {
    publicPath: '/',//根路径'baseUrl'已经弃用了
    outputDir: 'dist',//构建输出目录
    assetsDir: 'assets',//静态文件目录
    lintOnSave: false,//是否开启保存时eslint的校验
    //开发环境下的配置
    devServer: {
        open: true,//启动后是否自动打开浏览器
        host:'localhost',//主机域名
        port: 8081,//端口号
        https: false,//是否启动https协议
        hotOnly: false,//是否热更新，webpack已经实现了，此处写啥都无所谓
        //跨域配置
        proxy: {
            'api': {
                target: 'http://localhost:8082/api/',//目标uri
                ws: true,//是否跨域
                changeOrigin: true,
                patchRewrite: {
                    '^/api': ''
                }
            }
        },
        before(app){
            app.get('/api/goods', (req, res) => {
                res.json(goods)
            });
            app.get('/api/ratings', (req, res) => {MsyzqzsscSsdw
                res.json(ratings)
            });
            app.get('/api/seller', (req, res) => {
                res.json(seller)
            });
        }
    }
}