import { defineConfig, mergeConfig } from 'vite'
import BasicConfig from './vite.config.basic'

export default mergeConfig(BasicConfig, defineConfig({
  mode: 'development',
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
    sourcemap: 'inline', // 指定生成的sourcemap的格式
    terserOptions: {
      sourceMap: true, // 生成sourcemap
    },
    chunkSizeWarningLimit: 1024 // 单位为kbs，次数代表不超过1MB不进行警告
  }
}))