// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/jiangyu-blog/', // 一定要加 /
  plugins: [vue()],
})
