import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  mode: 'development',
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  },
  server: {
    port: 3000, // 开发时占用3000端口
    strictPort: true,  // 端口被占用的时候直接退出，不移到下一个端口
    open: true, // 启东时自动打开浏览器
    proxy: {
      '/api': {
        target: 'https://yuudachi.cn:444',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
    cors: true, // 开发时允许任何源
    force: false, // 为true的时候强制每次都进行依赖预构建
  },
  build: {
    assetsDir: 'static', // 生成的静态资源存放路径
    outDir: 'dist', // 生成产物的存放文件夹
    assetsInlineLimit: 1024 * 1024 * 2, // 小于2MB的资源转化为base64资源，内联于代码中
    sourcemap: 'inline', // 指定生成的sourcemap的格式
    minify: 'terser', // 默认就是使用tarse
    terserOptions: {
      sourceMap: true, // 生成sourcemap
    },
    chunkSizeWarningLimit: 1024 // 单位为kbs，次数代表不超过1MB不进行警告
  }
})