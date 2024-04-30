import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/njanghi/",
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})


// https://vitejs.dev/guide/static-deploy