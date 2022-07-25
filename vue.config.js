const { defineConfig } = require('@vue/cli-service');
const path = require('path');

const version = process.env.VUE_APP_VERSION;
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/style/global.less')],
    },
  },
  // 图片不用hash放入版本文件夹
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|avif)(\?.*)?$/)
      .set('type', 'asset')
      .set('generator', {
        filename: `${version}/[name][ext]`,
      })
      .end();
  },
});
