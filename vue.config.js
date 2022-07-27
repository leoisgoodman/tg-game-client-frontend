const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

const version = process.env.VUE_APP_VERSION;
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/style/global.less')],
    },
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
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
  devServer: {
    port: 9100,
    proxy: {
      '/v1/': {
        target: 'http://kotlin.cg45.xyz:8080',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/v1/': '',
        },
      },
    },
  },
});
