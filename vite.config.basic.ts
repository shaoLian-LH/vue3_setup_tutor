import { defineConfig } from 'vite'
import ViteComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      resolvers: [ElementPlusResolver()],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'hooks', replacement: '/src/hooks' }
    ]
  },
  build: {
    assetsDir: 'static', // 生成的静态资源存放路径
    outDir: 'dist', // 生成产物的存放文件夹
    assetsInlineLimit: 1024 * 1024 * 2, // 小于2MB的资源转化为base64资源，内联于代码中
    manifest: true, // 生成manifest.json文件
    minify: 'terser', // 默认就是使用tarse
    polyfillModulePreload: true // 自动注入polyfill，不适用于构建工具库
  }
})
