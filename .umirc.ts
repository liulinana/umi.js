import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  ssr: false,
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/users', component: '../pages/users' }
      ]
    }
  ],
  hash: true,
  history: 'hash',
  publicPath: '/',
  proxy: {
    '/api': {
      target: 'http://localhost:9093',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      // dva: true,
      dva: {
        immer: true
      },
      dynamicImport: { webpackChunkName: true },
      title: 'umi.js',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
