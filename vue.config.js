const path = require("path");
module.exports = {
  //部署应用时的基本url
  publicPath: process.env.NODE_ENV === 'production' ? '/production/' : '/',
  // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为  打包输出
  outputDir: 'dist',
  //静态资源目录名称
  assetsDir: 'static',
  //去掉打包的时候生成的map文件
  productionSourceMap: false,
  devServer: {
    open: true,  // npm run serve后自动打开页面
  },
  // configureWebpack: (config) => {
  //   console.log(config)
  // }

}
