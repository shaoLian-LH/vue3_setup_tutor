import { defineConfig } from 'vite'
import ViteComponents from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import StyleImport, { AndDesignVueResolve } from 'vite-plugin-style-import'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      resolvers: [AntDesignVueResolver()],
      dts: 'src/antdComponents.d.ts',
      deep: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      directives: true,
      exclude: [
        /[\\/]node_modules[\\/]/,
        /[\\/]\.git[\\/]/,
        /[\\/]\.vscode[\\/]/
      ]
    }),
    ViteComponents({
      dirs: ['src/components'],
      dts: 'src/components.d.ts',
      deep: true,
      extensions: 'vue'
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.md$/],
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core'
      ],
      dts: 'src/auto-import.d.ts'
    }),
    StyleImport({
      resolves: [AndDesignVueResolve()],
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          }
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@C', replacement: '/src/components' },
      { find: 'hooks', replacement: '/src/hooks' }
    ]
  },
  build: {
    assetsDir: 'static', // 生成的静态资源存放路径
    outDir: 'dist', // 生成产物的存放文件夹
    assetsInlineLimit: 1024 * 1024 * 2, // 小于2MB的资源转化为base64资源，内联于代码中
    manifest: true, // 生成manifest.json文件
    minify: 'terser' // 默认就是使用terser
  }
})
