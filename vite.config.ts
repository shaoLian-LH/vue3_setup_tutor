import { defineConfig, mergeConfig } from 'vite'
import BasicConfig from './vite.config.basic'

// https://vitejs.dev/config/
export default mergeConfig(BasicConfig, defineConfig({
  mode: 'production',
  build: {
    manifest: true, // 生成manifest.json文件
    polyfillModulePreload: true, // 自动注入polyfill，不适用于构建工具库
  }
}))