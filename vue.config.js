module.exports={
  //关闭eslint
  lintOnSave:false,
  devServer: {
    proxy: {
      //匹配发送请求地址中有/api的
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',//后端服务器地址
       
        // pathRewrite: { '^/api': '' },//路径重写
      },
    },
  },
}