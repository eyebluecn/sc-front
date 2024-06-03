import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8810,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8803', // 后端服务实际地址
        changeOrigin: true
      }
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: true,
      mangle: false,
      keep_classnames: true,
      keep_fnames: true,
    }
  }
})
