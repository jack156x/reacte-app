/*
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-21 10:06:51 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-03 16:35:15
 */
const extract = process.env.NODE_ENV == 'production';

module.exports = {
	productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
	// 输出文件目录
	outputDir: '../api_yongli/dist',
	css: {
		extract, // 是否使用css分离插件 ExtractTextPlugin
		sourceMap: true, // 开启 CSS source maps
		loaderOptions: {}, // css预设器配置项
		modules: false // 启用 CSS modules for all css / pre-processor files.
	},
	devServer: { // 环境配置
		host: 'localhost',
		port: 8080,
		https: false,
		hotOnly: false,
		open: false, //配置自动启动浏览器
		disableHostCheck: true,
		proxy: { // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
			'/v2': {
				target: 'http://47.244.148.9/',
				ws: true,
				changeOrigin: true,
			}
		}
	},
	pluginOptions: { // 第三方插件配置
		// ...
	}
};